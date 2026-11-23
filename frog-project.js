function renderFrogProject(){
app.innerHTML=`<a class="text-link back-link" href="#lab/model/tinkercad">← 返回 Tinkercad 项目</a>
<div class="welcome"><div><div class="eyebrow">PROJECT 05 / TINKERCAD</div>
<h1>青蛙王子冰箱贴</h1><p>从两个平面轮廓开始，用工作平面、复制和孔洞裁切做出一张笑脸。</p></div>
<span class="edition">一小步探索，一大步创造 ↗</span></div>
<div class="bolt-stepper frog-stepper" id="steps" role="navigation" aria-label="建模步骤"></div>
<div class="bolt-layout np-layout air-layout frog-layout">
  <section class="bolt-studio">
    <div class="tc-sim-badge">Tinkercad 风格教学模拟 · SVG 轮廓与课堂尺寸</div>
    <div class="tc-appbar"><img class="tc-logo" src="data:image/png;base64,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" alt="Tinkercad"><span>青蛙王子冰箱贴　✎</span><span class="tc-cloud">项目 05</span></div>
    <div class="np-toolbar" id="frog-toolbar" aria-label="本节操作"></div>
    <div class="np-workspace">
      <div class="np-stage"><svg id="scene" viewBox="0 0 690 410" role="img" aria-label="当前建模步骤"></svg><div class="np-plane-label" id="status" aria-live="polite"></div></div>
      <section class="np-properties" aria-label="尺寸与工具"><h4>课堂尺寸 / mm</h4><div id="sizes" class="frog-sizes"></div></section>
    </div>
    <div class="bolt-view-actions" id="views"><button data-view="iso">立体观察</button><button data-view="top">顶视布局</button><button data-view="side">侧视连接</button><button id="explode" hidden>拆开看看</button></div>
    <section class="np-micro"><span class="tag" id="micro-counter"></span><h3 id="micro-title"></h3><p id="micro-note"></p>
      <div class="np-micro-dots" id="dots" aria-label="小步演示"></div>
      <div class="np-micro-nav"><button class="secondary" id="phase-prev">← 上个动作</button><button class="primary" id="phase-next">下一小步 →</button></div>
    </section>
  </section>
  <section class="np-instructions"><span class="eyebrow" id="counter"></span><h2 id="title"></h2><div class="np-idea" id="goal"></div>
    <h3>跟着做</h3><ol id="actions"></ol>
    <div class="np-check"><b>做到这样，再继续</b><p id="check"></p></div>
    <button class="secondary" id="completed">我已在 Tinkercad 完成本节</button>
    <p class="np-note">立体图用于课堂示范。侧视放大了厚度，方便检查各层连接。</p>
    <a class="text-link" href="https://www.tinkercad.com/" target="_blank" rel="noopener">打开 Tinkercad ↗</a>
    <section class="frog-svg-resources" aria-labelledby="frog-svg-title">
      <h3 id="frog-svg-title">本课 SVG 素材</h3>
      <p class="np-note">点击下载，保存后在 Tinkercad 中选择「导入」。</p>
      <div class="frog-svg-grid">
        <figure><img id="basePreview" alt="青蛙底板的实心 SVG 轮廓，带有两个眼睛鼓包"><figcaption>青蛙底板 · 70 × 58 mm</figcaption><a id="baseFile" class="secondary" download="青蛙底板.svg">下载底板 SVG ↓</a></figure>
        <figure><img id="crownPreview" alt="三尖皇冠的实心 SVG 轮廓"><figcaption>青蛙皇冠 · 24 × 16 mm</figcaption><a id="crownFile" class="secondary" download="青蛙皇冠.svg">下载皇冠 SVG ↓</a></figure>
      </div>
    </section>
    <details class="air-dimensions"><summary>查看尺寸卡</summary>
      <table><thead><tr><th>零件</th><th>平面尺寸</th><th>厚度</th></tr></thead><tbody><tr><td>底板</td><td>70 × 58</td><td>3</td></tr><tr><td>皇冠</td><td>24 × 16</td><td>3</td></tr><tr><td>眼白 × 2</td><td>12 × 14</td><td>1</td></tr><tr><td>瞳孔 × 2</td><td>Ø4</td><td>1</td></tr><tr><td>腮红 × 2</td><td>Ø6</td><td>1</td></tr><tr><td>裁切前的圆环</td><td>24 × 24</td><td>2</td></tr><tr><td>裁切方孔</td><td>28 × 12</td><td>6</td></tr></tbody></table>
    </details>
    <details class="air-dimensions" id="challenge" hidden><summary>小挑战 · 让青蛙看向一边</summary><p>拖动滑块，同时移动两颗瞳孔。</p><label for="gaze">瞳孔左右移动</label> <input id="gaze" type="range" min="-3" max="3" step=".5" value="0"><output id="gazeValue">0 mm</output></details>
  </section>
</div>
<div class="np-bottom"><button class="secondary" id="prev">← 上一节</button><span id="progress"></span><button class="primary" id="next">下一节 →</button></div>`;


const lessons = [
 ['准备文件','两份 SVG 可以分别导入、单独改尺寸。',['准备青蛙底板.svg 和青蛙皇冠.svg','新建 3D 设计，命名为「青蛙王子冰箱贴」'],'两个轮廓都是闭合实心图形，底板上留空给五官。',['底板轮廓','三尖皇冠']],
 ['导入底板','给平面轮廓加上厚度。',['点「导入」，选择青蛙底板.svg','选中底板，用尺寸手柄设为 70 × 58 × 3','选择绿色实心，按 D 落到原始工作平面'],'底面离地 0，顶面高度 3。',['70 × 58 × 3','原始工作平面 Z = 0']],
 ['导入皇冠','先在空白处做好独立零件。',['点「导入」，选择青蛙皇冠.svg','只选皇冠，设为 24 × 16 × 3，改为黄色'],'两个零件可以各自选中和移动。',['24 × 16 × 3']],
 ['放好皇冠','从上面看位置，从侧面看接合。',['切到顶视，让皇冠底边进入轮廓约 3 mm','点击黑色升降锥的读数，输入离地 2 mm','切到侧视，比较底板顶部 3 与皇冠底部 2'],'皇冠在高度方向与底板重叠 1 mm。',['皇冠厚度 3','皇冠底面 Z = 2','高度重叠 1']],
 ['设置工作平面','给五官找一张贴着青蛙脸的新工作台。',['按 W 启动工作平面工具','单击绿色平坦表面，观察橙色网格升到 Z = 3'],'橙色工作平面与底板顶面齐平。',['原始 Z = 0','底板顶面 Z = 3']],
 ['做第一个眼白','把圆柱体压薄，做成椭圆。',['拖入圆柱体，设置长 12、宽 14、高 1，改成白色','按 D 贴到当前工作平面，再移到左侧鼓包下方'],'眼白完整落在绿色轮廓里，底面 Z = 3。',['12 × 14 × 1','眼白底面 Z = 3']],
 ['做第一个瞳孔','黑瞳孔从眼白顶面开始。',['按 W 并单击白色眼白顶面','拖入圆柱体，设为 4 × 4 × 1，改成黑色','按 D 贴到眼白顶面，切顶视把瞳孔移进眼白'],'黑瞳孔底面 Z = 4，四周还能看见白色。',['Ø4 × 1','眼白顶面 Z = 4']],
 ['复制一对眼睛','眼白和瞳孔一起复制，保持叠放关系。',['点眼白，按 Shift 再点瞳孔，只选这两个零件','按 Ctrl + D，副本暂时和原件重叠','保持副本被选中，水平移到右边，让两个眼睛齐平'],'有 2 个眼白、2 个瞳孔，副本保持原来的高度。',['Shift 多选','Ctrl + D 复制','水平移动']],
 ['添加腮红','先回到底板顶面，再做一对小圆片。',['按 W，单击绿色底板顶面','拖入圆柱体，设为 6 × 6 × 1，改橙黄色，按 D 后摆到左脸颊','按 Ctrl + D，把副本水平移到另一侧脸颊'],'两块腮红贴着底板，和眼睛留有间隔。',['Ø6 × 1','底面 Z = 3']],
 ['准备圆环','在青蛙旁边单独做笑脸。',['按 W，点原始空白网格，把工作平面恢复到 Z = 0','拖入圆环，设为 24 × 24 × 2，改成黑色并按 D'],'完整圆环落在空白网格上。',['外径 24','厚度 2']],
 ['摆好方孔','用方孔覆盖要删除的上半圆。',['拖入方块，设为 28 × 12 × 6，切换「孔洞」，按 D 落地','切到顶视，移动方孔，让长边穿过圆心'],'方孔盖住上半圆，下半圆露出来。',['28 × 12 × 6','底面 Z = 0']],
 ['对齐并裁切','固定圆环，对齐方孔后再组合。',['按 Shift 选圆环和方孔，按 L，再点圆环设为固定参考','点长度方向的中心黑点','点宽度方向靠方孔那端的端点，让两者上端边重合','退出对齐，只选圆环和方孔，按 Ctrl + G 组合'],'方孔消失，留下开口朝上的半圆环。',['长度中心对齐','宽度上端对齐','Ctrl + G 组合']],
 ['放好笑脸','把裁好的半圆环贴在脸上。',['按 W，单击绿色底板顶面','只选笑脸，按 D 贴到当前工作平面','水平移到两块腮红之间，开口朝向眼睛'],'笑脸位于轮廓内，底面 Z = 3。',['笑脸厚度 2','底面 Z = 3']],
 ['检查与保存','转一转成品，核对连接和零件数量。',['按 W 点空白网格，切换侧视检查有没有悬空','切回立体观察，核对 9 个零件及皇冠搭接','等设计自动保存。打印时导出全部形状为 STL，交给老师'],'底板 1、皇冠 1、眼白 2、瞳孔 2、腮红 2、笑脸 1。',['共 9 件','STL 保存形状','STL 不保存配色']]
];

const svgNS = 'http://www.w3.org/2000/svg';
const $ = id => document.getElementById(id);
const outline = {
 base: 'M35 12 C31 12 28 12 26 13 C26 5 22 0 16 0 C9 0 4 5 4 12 C4 15 5 18 6 20 C2 25 0 29 0 35 C0 49 15 58 35 58 C55 58 70 49 70 35 C70 29 68 25 64 20 C65 18 66 15 66 12 C66 5 61 0 54 0 C48 0 44 5 44 13 C42 12 39 12 35 12 Z',
 crown: 'M3.2 16 Q2.8 16 2.5 15.5 L0.3 12.3 Q0 11.9 0 11.4 L0 3.8 Q0 2.1 1.4 3.3 L6.9 8 L11.1 0.7 Q12 -0.7 12.9 0.7 L17.1 8 L22.6 3.3 Q24 2.1 24 3.8 L24 11.4 Q24 11.9 23.7 12.3 L21.5 15.5 Q21.2 16 20.8 16 Z'
};
function svgDownload(id, path, w, h) {
 const xml = `<svg xmlns="${svgNS}" width="${w}mm" height="${h}mm" viewBox="0 0 ${w} ${h}"><path fill="#000" d="${path}"/></svg>`;
 $(id).href = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(xml);
}
svgDownload('baseFile', outline.base, 70, 58);
svgDownload('crownFile', outline.crown, 24, 16);
$('basePreview').src = $('baseFile').href;
$('crownPreview').src = $('crownFile').href;
function sample(path, w, h) {
 const node = document.createElementNS(svgNS, 'path');
 node.setAttribute('d',path);
 const length = node.getTotalLength();
 const points = Array.from({length:160},(_,i) => node.getPointAtLength(length*i/160));
 const minX = Math.min(...points.map(p=>p.x)), maxX = Math.max(...points.map(p=>p.x));
 const minY = Math.min(...points.map(p=>p.y)), maxY = Math.max(...points.map(p=>p.y));
 return points.map(p=>[(p.x-minX)*w/(maxX-minX),(p.y-minY)*h/(maxY-minY)]);
}
const baseShape = sample(outline.base,70,58);
const crownShape = sample(outline.crown,24,16);
const offset = (shape,x,y)=>shape.map(([u,v])=>[x+u,y+v]);
function arc(rx, ry, a=0, b=2*Math.PI, count=64) {
 return Array.from({length:count+1},(_,i)=>{
  const t=a+(b-a)*i/count;
  return [rx*Math.cos(t),ry*Math.sin(t)];
 });
}
const smileShape = [...arc(12,12,0,Math.PI,36),...arc(9.5,9.5,Math.PI,0,36)];
const rect = (x,y,w,h)=>[[x,y],[x+w,y],[x+w,y+h],[x,y+h]];
const green='#8cdb78', yellow='#ffd342', white='#fffef7', dark='#20343a', orange='#ffb530';
const model = (id, shape, z, h, color, inner=null)=>({id,shape,z,h,color,inner});
const eye = (id,x,y,z,rx,ry,color)=>model(id,offset(arc(rx,ry),x,y),z,1,color);
function frogParts(gaze=0) {
 return [model('base',baseShape,0,3,green),model('crown',offset(crownShape,23,-1),2,3,yellow),
  eye('left-eye',18,22,3,6,7,white),eye('left-pupil',18+gaze,22,4,2,2,dark),
  eye('right-eye',52,22,3,6,7,white),eye('right-pupil',52+gaze,22,4,2,2,dark),
  eye('left-cheek',9,34,3,3,3,orange),eye('right-cheek',61,34,3,3,3,orange),
  model('smile',offset(smileShape,35,36),3,2,dark)];
}
function workScene(step,phase,exploded,gaze) {
 const parts=frogParts(step===13?gaze:0);
 const scene={parts:[], plane:0, active:[], wide:false, labels:[], caption:'', align:false};
 const use=(n)=>{scene.parts=parts.slice(0,n);};
 const focus=(...ids)=>{scene.active=ids;};
 const move=(part,x,y,z=part.z,h=part.h)=>({...part,shape:offset(part.shape,x,y),z,h});
 const ring=(x,y)=>model('ring',offset(arc(12,12),x,y),0,2,dark,offset(arc(9.5,9.5).reverse(),x,y));
 if(step===0){scene.parts=[model('base',baseShape,0,0,green),model('crown',offset(crownShape,77,17),0,0,yellow)];scene.wide=true;scene.labels=[[34,61,0,'底板 SVG'],[89,39,0,'皇冠 SVG']];}
 if(step===1){use(1);scene.parts[0]={...parts[0],h:[0,3,3][phase],color:phase<2?'#93afbd':green};focus('base');}
 if(step===2){use(1);scene.parts.push(move(parts[1],54,18,0,phase===0?0:3));scene.wide=true;focus('crown');}
 if(step===3){use(2);if(phase===0) scene.parts[1]=move(parts[1],0,0,0);focus('crown');scene.labels=phase===2?[[65,33,3,'底板顶面 Z=3'],[35,-3,2,'皇冠底面 Z=2']]:[];}
 if(step===4){use(2);scene.plane=phase===1?3:0;focus('base');}
 if(step===5){use(3);scene.plane=3;if(phase===0)scene.parts[2]=move(parts[2],19,11,6);focus('left-eye');}
 if(step===6){use(phase===0?3:4);scene.plane=4;if(phase===1)scene.parts[3]=move(parts[3],15,12,7);focus(phase===0?'left-eye':'left-pupil');}
 if(step===7){use(phase===2?6:4);scene.plane=4;focus(...(phase===2?['right-eye','right-pupil']:['left-eye','left-pupil']));}
 if(step===8){use(6+phase);scene.plane=3;if(phase>0)focus(phase===1?'left-cheek':'right-cheek');}
 if(step>=9 && step<=12){
  use(8); scene.wide=true;
  if(step===9 && phase===1){scene.parts.push(ring(91,32));focus('ring');}
  if(step===10 || (step===11 && phase<3)){
   scene.parts.push(ring(91,32));
   let x=77,y=20;
   if(step===10 && phase===0){x=77;y=49;}
   if(step===11 && phase===0){x=80;y=18;}
   if(step===11 && phase===1)y=18;
   scene.parts.push(model('hole',rect(x,y,28,12),0,6,'#6e9bb7'));
   scene.align=step===11;
   focus('hole');
  }
  if(step===11 && phase===3){scene.parts.push(move(parts[8],56,-4,0));focus('smile');}
  if(step===12){scene.plane=3;scene.wide=phase<2;scene.parts.push(phase===2?parts[8]:move(parts[8],56,-4,phase===0?0:3));focus('smile');}
 }
 if(step===13){
  use(9);
  if(exploded)scene.parts=parts.map(p=>move(p,0,0,p.z+({base:0,crown:7,'left-eye':10,'right-eye':10,'left-pupil':18,'right-pupil':18,'left-cheek':5,'right-cheek':5,smile:6}[p.id])));
 }
 scene.caption=({0:'两份独立的 SVG 轮廓',3:phase===0?'顶视 · 皇冠底边压进轮廓约 3 mm':phase===2?'侧视 · Z=2–3 的区间发生重叠':'皇冠底面抬到 Z=2，皇冠本身仍厚 3 mm',4:phase===0?'W · 选择工作平面':'工作平面移到绿色顶面 Z=3',6:'眼白顶面 Z=4 · 瞳孔最终贴在这一层',7:phase===1?'已复制 · 新旧眼睛在同一位置重叠':phase===2?'水平移开副本，眼睛各层高度不变':'只选眼白和瞳孔',10:phase===0?'方孔放在空白处':'方孔长边穿过圆心，保留下半圆',11:['L · 圆环是固定参考','长度方向 · 对齐中心','宽度方向 · 对齐上端','组合完成 · 留下半圆环'][phase],13:exploded?'拆解示意 · 检查底板、五官和皇冠':'成品 · 9 个零件'}[step]) || lessons[step][2][phase];
 return scene;
}

function shade(hex,factor){const n=parseInt(hex.slice(1),16);return `rgb(${[16,8,0].map(s=>Math.round(((n>>s)&255)*factor)).join(',')})`;}
function render(svg, scene, view, cover=false) {
 const width=cover?420:690,height=cover?230:410;
 const center=scene.wide?53:35;
 const scale=cover?3.15:scene.wide?4.35:5.25;
 function p(x,y,z){
  if(view==='side')return [width/2+(x-center)*scale,height*.66-z*scale*3];
  if(view==='top')return [width/2+(x-center)*scale,height*.48+(y-27)*scale];
  // Orthographic camera, looking down at 65° with a slight turn around Z.
  const dx=x-center, dy=y-27;
  return [width/2+(.985*dx+.174*dy)*scale,
          height*.49+((-.174*dx+.985*dy)*.906-z*.423)*scale];
 }
 const line=(a,b,color,stroke=1,dash='')=>`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${color}" stroke-width="${stroke}" ${dash?'stroke-dasharray="'+dash+'"':''}/>`;
 const pointList=points=>points.map(x=>x.map(n=>n.toFixed(2)).join(',')).join(' ');
 const poly=(points,fill,edge='none',extra='')=>`<polygon points="${pointList(points)}" fill="${fill}" stroke="${edge}" ${extra}/>`;
 const text=(x,y,value,anchor='middle')=>`<text x="${x}" y="${y}" text-anchor="${anchor}" class="viewlabel">${value}</text>`;
 let html='';
 if(!cover){
  if(view==='side'){
   for(const z of [0,2,3,4,5]){
    const y=p(0,0,z)[1];html+=line([44,y],[width-17,y],z===scene.plane?'#d69532':'#b4d0df',z===scene.plane?1.6:1,'5 5');
    html+=text(37,y+4,'Z '+z,'end');
   }
  }else{
   const grid=scene.plane?'#deb679':'#b8d5e7';
   for(let x=-25;x<=(scene.wide?125:95);x+=5)html+=line(p(x,-19,scene.plane),p(x,73,scene.plane),grid,.7);
   for(let y=-15;y<=73;y+=5)html+=line(p(-25,y,scene.plane),p(scene.wide?125:95,y,scene.plane),grid,.7);
  }
 }
 for(const part of scene.parts){
  const selected=scene.active.includes(part.id), edge=selected?'#036f9a':'none';
  const top=part.z+part.h;
  if(view==='side'){
   const x=part.shape.map(a=>a[0]);
   html+=poly(rect(Math.min(...x),part.z,Math.max(...x)-Math.min(...x),part.h||.1).map(([x,z])=>p(x,0,z)),part.color,edge,'stroke-width="1.5"');
   continue;
  }
  const loops=[part.shape,...(part.inner?[part.inner]:[])];
  if(view==='iso'&&part.h){
   const walls=[];
   for(const [index,loop] of loops.entries()){
    const area=loop.reduce((sum,a,i)=>{
     const b=loop[(i+1)%loop.length];
     return sum+a[0]*b[1]-a[1]*b[0];
    },0);
    const winding=Math.sign(area)*(index===0?1:-1);
    for(let i=0;i<loop.length;i++){
     const a=loop[i], b=loop[(i+1)%loop.length];
     const lowerA=p(...a,part.z), lowerB=p(...b,part.z);
     if((lowerB[0]-lowerA[0])*winding>=0)continue;
     walls.push('M'+pointList([lowerA,lowerB,p(...b,top),p(...a,top)])+'Z');
    }
   }
   html+=`<path d="${walls.join(' ')}" fill="${shade(part.color,.72)}"/>`;
  }
  const path=loops.map(loop=>'M'+pointList(loop.map(q=>p(...q,top)))+'Z').join(' ');
  html+=`<path d="${path}" fill="${part.id==='hole'?'url(#hatch)':part.color}" fill-rule="evenodd" stroke="${edge}" stroke-width="${selected?2:1}" ${part.id==='hole'?'stroke-dasharray="5 3"':''}/>`;
 }
 if(!cover&&scene.align&&view==='top'){
  const a=p(91,16,0), b=p(109,20,0);
  html+=`<circle cx="${a[0]}" cy="${a[1]}" r="5" fill="#18342d"/><circle cx="${b[0]}" cy="${b[1]}" r="5" fill="#18342d"/>`;
  html+=text(a[0],a[1]-11,'① 中心');html+=text(b[0]+12,b[1]-11,'② 上端','start');
 }
 for(const [x,y,z,t] of scene.labels){const q=p(x,y,z);html+=text(q[0],q[1]-7,t);}
 const defs=cover?'':'<defs><pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="7" height="7" fill="#c5e0f3" fill-opacity=".72"/><line x1="0" y1="0" x2="0" y2="7" stroke="#6192b2" stroke-width="2"/></pattern></defs>';
 svg.innerHTML=defs+html;
}


const storageKey = 'maker-frog-steps';
const learned = new Set();
try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (Array.isArray(saved)) for (const index of saved) {
    if (Number.isInteger(index) && index >= 0 && index < lessons.length) learned.add(index);
  }
} catch {}
const state = {step:0, phase:0, view:'top', exploded:false, gaze:0};
const preferred = [['top'],['iso','top','iso'],['iso'],['top','iso','side'],['iso'],['iso','top'],['iso','iso','top'],['top'],['iso','top','top'],['iso'],['iso','top'],['top','top','top','top'],['iso','iso','top'],['side','iso','iso']];
const tools = [
  ['准备 SVG','新建 3D 设计'], ['导入 SVG','调整尺寸','实心 · D'], ['导入 SVG','尺寸与颜色'],
  ['顶视定位','调整离地高度','侧视检查'], ['工作平面 W','点绿色顶面'], ['圆柱体','落到工作平面 D'],
  ['工作平面 W','圆柱体','落到眼白 D'], ['Shift 多选','复制 Ctrl + D','水平移动'],
  ['工作平面 W','圆柱体 · D','复制 Ctrl + D'], ['恢复工作平面 W','圆环 · D'],
  ['切换孔洞','顶视定位'], ['对齐 L','中心对齐','上端对齐','组合 Ctrl + G'],
  ['工作平面 W','贴到顶面 D','移到脸中央'], ['侧视检查','立体检查','导出 STL']
];
function refreshProgress() {
  for (const button of $('steps').children) {
    const index = Number(button.dataset.step);
    button.firstElementChild.textContent = learned.has(index) ? '✓' : String(index + 1).padStart(2, '0');
  }
  $('completed').textContent = learned.has(state.step) ? '✓ 本节已记录' : '我已在 Tinkercad 完成本节';
  $('progress').textContent = `${learned.size} / ${lessons.length} 节已记录`;
}
function redraw() {
  const scene = workScene(state.step, state.phase, state.exploded, state.gaze);
  render($('scene'), scene, state.view);
  $('status').textContent = scene.caption;
  $('scene').setAttribute('aria-label', scene.caption);
  for (const button of $('views').querySelectorAll('[data-view]')) {
    button.setAttribute('aria-pressed', button.dataset.view === state.view);
  }
  $('explode').hidden = state.step !== 13;
  $('explode').textContent = state.exploded ? '装回去' : '拆开看看';
  $('explode').setAttribute('aria-pressed', state.exploded);
}
function showPhase(index) {
  const actions = lessons[state.step][2];
  state.phase = index;
  state.exploded = false;
  state.view = preferred[state.step][index] || preferred[state.step][0];
  $('micro-counter').textContent = `这次只做一个小动作 · ${index + 1} / ${actions.length}`;
  $('micro-title').textContent = tools[state.step][index];
  $('micro-note').textContent = actions[index];
  $('frog-toolbar').innerHTML = `<div class="air-step-focus-wrap"><button class="air-step-focus" id="frog-action">${tools[state.step][index]}</button><span class="air-step-focus-hint">点击查看本小步的示意</span></div>`;
  $('frog-action').onclick = () => {
    redraw();
    $('frog-action').classList.add('air-step-focus-used');
    $('status').classList.remove('frog-replay');
    requestAnimationFrame(() => $('status').classList.add('frog-replay'));
  };
  $('dots').innerHTML = actions.map((_, i) => `<button data-phase="${i}" class="${i === index ? 'selected' : ''}" aria-label="小步 ${i + 1}" aria-pressed="${i === index}">${i + 1}</button>`).join('');
  for (const [i, row] of Array.from($('actions').children).entries()) {
    row.classList.toggle('np-current', i === index);
    row.firstElementChild.setAttribute('aria-pressed', i === index);
  }
  $('phase-prev').disabled = index === 0;
  $('phase-next').textContent = index === actions.length - 1 ? '↺ 重看这一节' : '下一小步 →';
  redraw();
}
function showStep(index) {
  state.step = index;
  const [title, goal, actions, check, sizes] = lessons[index];
  $('counter').textContent = `${String(index + 1).padStart(2, '0')} / ${lessons.length} · ${title}`;
  $('title').textContent = title;
  $('goal').textContent = goal;
  $('check').textContent = check;
  $('sizes').innerHTML = sizes.map(value => `<p>${value}</p>`).join('');
  $('actions').innerHTML = actions.map((action, i) => `<li><button data-phase="${i}"><span>${i + 1}</span><b>${action}</b></button></li>`).join('');
  for (const button of $('steps').children) {
    const active = Number(button.dataset.step) === index;
    button.classList.toggle('selected', active);
    if (active) button.setAttribute('aria-current', 'step');
    else button.removeAttribute('aria-current');
  }
  $('prev').disabled = index === 0;
  $('next').disabled = index === lessons.length - 1;
  $('challenge').hidden = index !== lessons.length - 1;
  refreshProgress();
  showPhase(0);
}
$('steps').innerHTML = lessons.map(([title], index) => `<button data-step="${index}"><span></span>${title}</button>`).join('');
$('steps').onclick = event => {
  const button = event.target.closest('[data-step]');
  if (button) showStep(Number(button.dataset.step));
};
function selectPhase(event) {
  const button = event.target.closest('[data-phase]');
  if (button) showPhase(Number(button.dataset.phase));
}
$('actions').onclick = selectPhase;
$('dots').onclick = selectPhase;
$('phase-prev').onclick = () => showPhase(state.phase - 1);
$('phase-next').onclick = () => showPhase((state.phase + 1) % lessons[state.step][2].length);
$('views').onclick = event => {
  const button = event.target.closest('[data-view]');
  if (button) { state.view = button.dataset.view; redraw(); }
};
$('explode').onclick = () => {
  state.exploded = !state.exploded;
  if (state.exploded) state.view = 'iso';
  redraw();
};
function navigateStep(index) {
  showStep(index);
  $('steps').children[index].scrollIntoView({block:'center', inline:'nearest'});
}
$('prev').onclick = () => navigateStep(state.step - 1);
$('next').onclick = () => navigateStep(state.step + 1);
$('completed').onclick = () => {
  learned.add(state.step);
  if(learned.size===lessons.length && !completed.includes('tinkercad-frog')){
    completed.push('tinkercad-frog');
    try { localStorage.setItem('maker-completed',JSON.stringify(completed)); } catch {}
    $('count').textContent=learningRecords().filter(r=>completed.includes(r.id)).length;
  }
  try { localStorage.setItem(storageKey, JSON.stringify([...learned])); } catch {}
  refreshProgress();
};
$('gaze').oninput = event => {
  state.gaze = Number(event.target.value);
  $('gazeValue').value = `${state.gaze} mm`;
  state.exploded = false;
  state.view = 'top';
  redraw();
};
showStep(0);
}
