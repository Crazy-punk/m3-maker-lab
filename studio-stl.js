/* Build one closed surface from the same plate and raised artwork used in the preview.
   A triangular sampling grid resolves diagonal pixel contacts along continuous contours. */
function studioSampler(width,pad=2) {
  const pitch = 0.10;
  const mask = document.createElement('canvas');
  mask.width = Math.ceil(width / pitch) + 2 * pad + 1;
  mask.height = Math.ceil(20 / pitch) + 2 * pad + 1;
  const g = mask.getContext('2d', {willReadFrequently:true});
  const cols = mask.width, rows = mask.height;
  function sample(paint) {
    g.resetTransform();
    g.clearRect(0, 0, cols, rows);
    g.setTransform(1/pitch, 0, 0, 1/pitch, pad+.5, pad+.5+10/pitch);
    paint(g);
    return g.getImageData(0, 0, cols, rows).data;
  }
  return {cols,rows,pitch,pad,sample};
}
function studioFootprint(width,plate){
  const {cols,rows,pitch,sample}=studioSampler(width);
  const pixels=sample(plate);
  let xmin=cols,xmax=-1,ymin=rows,ymax=-1;
  for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
    if(pixels[4*(y*cols+x)+3]<128)continue;
    xmin=Math.min(x,xmin);xmax=Math.max(x,xmax);ymin=Math.min(y,ymin);ymax=Math.max(y,ymax);
  }
  return {length:(xmax-xmin+1)*pitch,breadth:(ymax-ymin+1)*pitch};
}
// Test a 0.6 mm diameter disk in final XY coordinates without changing the exported artwork.
function studioCheckNecks(mask,cols,rows,dx,dy,rBase){
  const core=new Uint8Array(mask.length),labels=new Int32Array(mask.length),queue=new Int32Array(mask.length);
  const radius=.30,rx=Math.ceil(radius/dx),ry=Math.ceil(radius/dy);
  const neighbors=[];
  for(let y=-ry;y<=ry;y++)for(let x=-rx;x<=rx;x++){
    // Include any pixel whose interior intersects the disk.
    if(Math.hypot(x*dx,y*dy)<=radius)
      neighbors.push(y*cols+x);
  }
  for(let y=ry;y<rows-ry;y++)for(let x=rx;x<cols-rx;x++){
    const i=y*cols+x;
    if(mask[i])core[i]=Number(neighbors.every(offset=>mask[i+offset]));
  }
  function flood(start,src,target,mark){
    let head=0,end=1;queue[0]=start;target[start]=mark;
    while(head<end){
      const i=queue[head++];
      for(const j of [i-1,i+1,i-cols,i+cols]){
        if(src[j]&&!target[j]){target[j]=mark;queue[end++]=j;}
      }
    }
  }
  let n=0;
  for(let i=0;i<mask.length;i++)if(mask[i]&&!labels[i])flood(i,mask,labels,++n);
  const seen=new Uint8Array(mask.length),survivors=new Uint16Array(n+1);
  for(let i=0;i<core.length;i++)if(core[i]&&!seen[i]){
    flood(i,core,seen,1);survivors[labels[i]]++;
  }
  if((rBase&&n!==1)||!n||survivors.subarray(1).some(count=>count!==1))
    throw Error((rBase?"底板：":"凸字：")+'该组合有过细的连接或孤立细节，请放大长宽、换较粗字体后再导出。');
}
function studioSTL(width,paintPlate,paintRelief,vertical,sz,paintRim=null){
  const {cols,rows,pitch,pad,sample}=studioSampler(width,8);
  const bits=paint=>{const pixels=sample(paint);return Uint8Array.from({length:cols*rows},(_,i)=>pixels[4*i+3]>=128?1:0);};
  const base=bits(paintPlate),art=bits(paintRelief);
  for(let i=0;i<art.length;i++)art[i]&=base[i];
  const rim=paintRim?bits(paintRim):null;
  const levels=new Uint8Array(base.length);
  let xmin=cols,xmax=0,ymin=rows,ymax=0;
  for(let i=0;i<base.length;i++)if(base[i]){
    levels[i]=art[i]?(rim?3:2):rim?.[i]?2:1;
    const x=i%cols,y=Math.floor(i/cols);
    xmin=Math.min(xmin,x);xmax=Math.max(xmax,x);ymin=Math.min(ymin,y);ymax=Math.max(ymax,y);
  }
  const sx=sz.length/((xmax-xmin+1)*pitch),sy=sz.width/((ymax-ymin+1)*pitch);
  const hx=Math.round(sz.holeX/pitch)+pad,hy=Math.round(10/pitch)+pad;
  if(base[hy*cols+hx])throw Error('当前尺寸会封住挂孔，请增大长或宽。');
  studioCheckNecks(base,cols,rows,pitch*sx,pitch*sy,true);
  studioCheckNecks(art,cols,rows,pitch*sx,pitch*sy,false);
  if(rim){
    const support=Uint8Array.from(levels,v=>v>=2?1:0);
    studioCheckNecks(support,cols,rows,pitch*sx,pitch*sy,false);
  }
  const heights=rim?[0,sz.thickness*.72,sz.thickness*.72+.60,sz.thickness]:[0,sz.thickness*.72,sz.thickness];
  const chunks=[new Uint8Array(84)];
  let buffer, view, used=0, count=0;
  function face(a,b,c) {
    if(!buffer || used===buffer.byteLength) {
      buffer=new ArrayBuffer(50*4096); view=new DataView(buffer); used=0;
      chunks.push(buffer);
    }
    const u=b.map((x,i)=>x-a[i]), v=c.map((x,i)=>x-a[i]);
    const n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]];
    const len=Math.hypot(...n);
    for(const x of [...n.map(x=>x/len),...a,...b,...c]){view.setFloat32(used,x,true);used+=4;}
    used+=2;count++;
  }
  function clip(poly,threshold,above){
    const out=[];
    poly.forEach((b,i)=>{
      const a=poly[(i+poly.length-1)%poly.length];
      const keep=v=>above?v[2]>=threshold:v[2]<=threshold;
      if(keep(a)!==keep(b)){
        const f=(threshold-a[2])/(b[2]-a[2]);
        out.push([a[0]+f*(b[0]-a[0]),a[1]+f*(b[1]-a[1]),threshold]);
      }
      if(keep(b))out.push(b);
    });
    return out;
  }
  function layer(poly,lo,hi,z) {
    const at=(p,h)=>{const x=(p[0]-pad)*pitch,y=(rows-1-pad-p[1])*pitch;return vertical?[y*sy,(width-x)*sx,h]:[x*sx,y*sy,h];};
    for(let i=1;i+1<poly.length;i++){
      face(at(poly[0],z),at(poly[i],z),at(poly[i+1],z));
      face(at(poly[i+1],0),at(poly[i],0),at(poly[0],0));
    }
    for(let i=0;i<poly.length;i++){
      const a=poly[i], b=poly[(i+1)%poly.length];
      if(a[2]!==lo || b[2]!==lo)continue;
      face(at(a,hi),at(b,hi),at(b,z));face(at(a,hi),at(b,z),at(a,z));
    }
  }
  function triangle(a,b,c){
    const poly=[a,b,c];
    for(let level=1;level<heights.length;level++){
      const lower=level-.5;
      const band=clip(clip(poly,lower,true),level+.5,false);
      layer(band,lower,heights[level-1],heights[level]);
    }
  }
  const pt=(x,y)=>[x,y,levels[y*cols+x]];
  for(let y=0;y<rows-1;y++){
    for(let x=0;x<cols-1;x++){
      const a=pt(x,y),b=pt(x+1,y),c=pt(x+1,y+1),d=pt(x,y+1);
      if(!(a[2]||b[2]||c[2]||d[2]))continue;
      triangle(a,d,c);triangle(a,c,b);
    }
  }
  chunks[chunks.length-1]=buffer.slice(0,used);
  new DataView(chunks[0].buffer).setUint32(80,count,true);
  return new Blob(chunks,{type:'model/stl'});
}
