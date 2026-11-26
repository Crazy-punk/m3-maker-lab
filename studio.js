function renderStudio(id){
  const designs=[
    {slug:'rhythm',style:4,name:'李太白',palette:'海军蓝浅粉',element:'无',paper:'#f1ebdf'},
    {slug:'vertical',style:1,name:'周杰伦',palette:'靛紫奶油',element:'无',paper:'#ece6f4'},
    {slug:'outline',style:0,name:'王一博',palette:'橘子汽水',element:'无',paper:'#fae8df'},
    {slug:'honey',style:0,name:'刘宇宁',palette:'蜂蜜黄',element:'无',paper:'#faf2d9'},
    {slug:'peach',style:0,name:'赵思露',palette:'蜜桃粉',element:'无',paper:'#fae7e9'},
    {slug:'blue',style:0,name:'张凌赫',palette:'海盐蓝',element:'无',paper:'#e3eef0'},
    {slug:'capsule',style:2,name:'小海豚',palette:'海盐蓝',element:'星星',paper:'#e3eef0'},
    {slug:'ticket',style:3,name:'星光号',palette:'抹茶绿',element:'闪电',paper:'#eef0dc'}
  ];
  const selected=designs.findIndex(v=>v.slug===location.hash.split('/')[2]);
  const editor=id==='nameplate' && selected>=0;
  const gallery=id==='nameplate' && !editor;
  const palettes={'海军蓝浅粉':['#213461','#ebcfd0'],'靛紫奶油':['#43386d','#fff0bb'],'橘子汽水':['#ed8359','#fff4da'],'蜂蜜黄':['#e7ad48','#fff7de'],'蜜桃粉':['#ee8490','#fff5df'],'海盐蓝':['#589ac2','#f2fcfa'],'抹茶绿':['#87ac73','#fff4cd'],'芋泥紫':['#a38aca','#fff5eb']};
  const shapes=['随字描边','竖排吊牌','胶囊牌','电影票','横排大小字'];
  let shape=shapes[designs[Math.max(selected,0)].style];
  const orange=designs[selected]?.slug==='outline';
  const upright=()=>shape==='竖排吊牌';
  const varied=()=>shape==='横排大小字';
  const framed=()=>upright()||varied();
  const rhythm=[1.02,1.10,1.06];
  function glyphRun(){
    let x=0;
    return Array.from(name,(ch,i)=>{
      const size=rhythm[i%rhythm.length],advance=12*size;
      const glyph={ch,size,advance,x};x+=advance;return glyph;
    });
  }
  const typefaces={
    amber:{label:'琥珀体',family:'STHupo,"华文琥珀","Microsoft YaHei",sans-serif',cad:'STHupo',art:true},
    brush:{label:'行楷',family:'STXingkai,"华文行楷",KaiTi,"Kaiti SC",serif',cad:'STXingkai',art:true},
    clerical:{label:'隶书',family:'LiSu,"隶书",STLiti,"华文隶书",serif',cad:'LiSu',art:true},
    original:{label:'原款笔画',family:'"Microsoft YaHei","PingFang SC",sans-serif',cad:'Microsoft YaHei:style=Bold'},
    sans:{label:'黑体',family:'"Microsoft YaHei","PingFang SC",sans-serif',cad:'Microsoft YaHei:style=Bold'},
    song:{label:'宋体',family:'SimSun,"Songti SC","Noto Serif CJK SC",serif',cad:'SimSun:style=Bold'},
    kai:{label:'楷体',family:'KaiTi,"Kaiti SC",STKaiti,serif',cad:'KaiTi:style=Bold'}
  };
  let typeface=(framed()||orange)?'original':designs[selected]?.slug==='peach'?'amber':'sans';
  function fontButtons(art){
    return Object.entries(typefaces).filter(([key,face])=>Boolean(face.art)===art && (key!=='original'||framed()||orange)).map(([key,face])=>
      `<button type="button" data-font="${key}" aria-pressed="${key===typeface}">${face.label}</button>`).join('');
  }
  const elements=['星星','爱心','闪电','无'];
  let {name,palette,element}=designs[Math.max(selected,0)];
  const homeAngle=orange?-.045:framed()?(upright()?.09:0):-.16,homeTilt=(framed()||orange)?.17:.46;
  let angle=homeAngle,tilt=homeTilt;
  function presetColors(){
    const [a,b]=palettes[palette],text=framed()?a:b;
    return {plate:framed()?b:a,text,border:text,decor:text};
  }
  let colors=presetColors();
  const labels={plate:'底板',text:'文字',border:'描边',decor:'装饰'};
  const colorControls=Object.entries(labels).filter(([key])=>key!=='border'||framed()).map(([key,label])=>
    `<label class="studio-color" data-part="${key}"><input type="color" value="${colors[key]}" aria-label="${label}颜色"><span>${label}</span></label>`).join('');
  const roomy=['vertical','peach','capsule'].includes(designs[Math.max(0,selected)].slug);
  const ornaments=elements.map(v=>`<button type="button" data-val="${v}">${v}</button>`).join('');
  app.innerHTML=editor?
    '<div class="welcome"><div><span class="eyebrow">实验室 / 项目 01</span><h1>姓名牌工作台</h1><p>输入你的名字，给挂在书包上的姓名牌挑个图案，再给各个部分配色。</p></div></div><div class="studio-grid"><section class="studio-view"><div class="studio-mat"><canvas width="900" height="480" aria-label="姓名牌立体预览"></canvas></div><div class="studio-controls"><small>拖动模型，看看凸起的文字和挂孔</small><button id="studio-reset">恢复视角</button></div></section><section class="studio-panel"><label>牌上的名字<input id="studio-name" maxlength="12" value="'+name+'" autocomplete="off"></label><fieldset><legend>艺术字体</legend><div class="studio-options studio-art-fonts">'+fontButtons(true)+'</div></fieldset><fieldset><legend>基础字体</legend><div class="studio-options">'+fontButtons(false)+'</div></fieldset><fieldset><legend>装饰图案</legend><div class="studio-options">'+ornaments+'</div></fieldset><fieldset><legend>分区配色</legend><div class="studio-colors">'+colorControls+'</div></fieldset><fieldset><legend>成品尺寸（毫米）</legend><div class="studio-measures"><label>长<input id="studio-length" type="number" min="40" max="160" step="0.1" value="'+(roomy?90:75)+'"></label><label>宽<input id="studio-width" type="number" min="16" max="65" step="0.1" value="'+(roomy?32:varied()?30:25)+'"></label><label>总厚<input id="studio-thickness" type="number" min="2.5" max="10" step="0.1" value="4.5"></label></div></fieldset><small id="studio-size"></small><button class="primary" id="studio-stl">下载 STL</button><small id="studio-status" role="status">STL 保存模型形状。'+(varied()?'浅色描边随 STL 导出为凸台，颜色在切片软件里设置。':'打印颜色由耗材决定。')+'</small><details><summary>可编辑源文件</summary>'+(varied()?'<small>打印版描边台阶请使用 STL 下载。</small>':'')+'<button id="studio-save">下载可编辑模型（.scad）</button></details></section></div>':
    gallery ? `<div class="welcome"><div><h1>姓名牌工作台</h1><p>选一个喜欢的造型，再换上自己的名字。</p></div></div><div class="studio-gallery">${designs.map((v,i)=>`<a class="studio-design" href="#studio/nameplate/${v.slug}"><img src="assets/tag-${v.slug}.jpg" width="560" height="350" alt="${v.name}姓名牌的应用场景示意"><div><h2>${shapes[v.style]} · ${v.palette}</h2><span>选这款 →</span></div></a>`).join('')}</div>`:
    '<div class="welcome"><div><h1>实验室</h1><p>在浏览器里改一改参数，做一件属于自己的作品。</p></div></div><a class="studio-card" href="#studio/nameplate"><img src="assets/tag-rhythm.jpg" width="1586" height="992" alt="李太白姓名牌挂在绿色书包上的应用效果"><div><span class="eyebrow">项目 01</span><h2>姓名牌工作台</h2><p>换名字、配颜色，给书包做一个专属挂件。</p><b>开始设计 →</b></div></a>';
  if(!editor)return;
  let canvas=app.querySelector('canvas'), ctx=canvas.getContext('2d');
  const font=()=>(typefaces[typeface].art?'normal':'bold')+' 100px '+typefaces[typeface].family;
  const orangeOriginal=()=>orange&&typeface==='original';
  const orangeCover=()=>orange&&name==='王一博'&&element==='无';
  function dimensions(){
    ctx.font=font();
    const textWidth=orangeOriginal()?Array.from(name).length*12:varied()?glyphRun().reduce((n,g)=>n+g.advance,0):upright()?Math.max(12,Array.from(name).length*12):Math.max(4,ctx.measureText(name).width*.112);
    const left=element==='无'?(orange?7.6:varied()?6.8:12):24;
    return {textWidth,left,width:Math.max(35,left+textWidth+(varied()?2.2:6))};
  }
  function decoration(){
    if(element==='无')return [];
    if(element==='闪电')return [[0,-7],[-5,1],[-1,1],[-2,7],[5,-2],[1,-2],[3,-7]];
    const heart=element==='爱心';
    return Array.from({length:heart?60:10},(_,i)=>{
      const a=2*Math.PI*i/(heart?60:10);
      if(heart)return [5.6*Math.sin(a)**3,-.35*(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a))];
      const r=i%2?2.7:6;return [r*Math.sin(a),-r*Math.cos(a)];
    });
  }
  // Rounded single-line lettering for the three characters on the reference edition.
  // Coordinates are in a 100-unit em square, shared with the CAD export.
  const strokes={
    李:[[[0,-45],[0,-7]],[[-41,-31],[40,-31]],[[-6,-29],[-24,-12],[-41,-3]],[[8,-28],[24,-15],[40,-7]],[[-25,4],[22,4],[3,17],[3,39],[-11,39]],[[-43,22],[42,22]]],
    太:[[[0,-42],[-1,-23],[-4,-8],[-14,10],[-29,25],[-41,34]],[[-42,-20],[39,-20]],[[1,-14],[12,4],[27,21],[41,32]],[[-6,18],[6,30]]],
    白:[[[-8,-29],[0,-43]],[[-31,-27],[32,-27],[32,36],[-31,36],[-31,-27]],[[-28,3],[30,3]]]
  };
  const verticalStrokes={
    周:[[[-34,39],[-31,25],[-30,7],[-30,-38],[34,-38],[34,37],[24,37]],[[-17,-18],[20,-18]],[[1,-29],[1,-6]],[[-19,-4],[21,-4]],[[-12,10],[15,10],[15,25],[-12,25],[-12,10]]],
    杰:[[[-36,-21],[36,-21]],[[0,-39],[0,13]],[[-4,-18],[-17,-3],[-33,7]],[[5,-17],[18,-3],[34,6]],[[-28,24],[-36,36]],[[-10,24],[-7,37]],[[7,24],[14,37]],[[24,22],[36,35]]],
    伦:[[[-17,-37],[-25,-19],[-38,-5]],[[-26,-18],[-26,39]],[[9,-34],[1,-20],[-11,-8]],[[9,-34],[22,-21],[36,-12]],[[-1,-3],[-1,29],[3,34],[28,34],[32,30],[33,24]],[[24,-3],[14,7],[1,13]]]
  };
  // Local millimeter coordinates, taken from the three raised glyphs on the cover.
  const orangeLetters={
    王:[[[1.7,-4.1],[9.8,-4.8]],[[2.4,.1],[9.3,-.5]],[[.9,4.95],[11,4.3]],[[6,-4.25],[6.2,4.35]]],
    一:[[[1.2,.5],[10.7,-.25]]],
    博:[[[1.95,-5],[2.1,5]],[[.25,-1.5],[2.95,-1.8]],[[4.4,-3.9],[10.7,-4.25]],[[9.1,-5.35],[9.9,-4.35]],[[7.15,-5.4],[7.45,.6]],[[4.65,.65],[4.55,-2.45],[9.95,-2.8],[10,.1]],[[4.8,-.9],[9.8,-1.2]],[[4.7,.65],[10,.2]],[[4.05,2.65],[11.7,2.15]],[[9,2.35],[9.1,5],[7.95,4.9]],[[5.15,4.1],[5.95,4.9]]]
  };
  function lettering(pen,outline=false){
    pen.save();
    if(orangeOriginal()){
      pen.translate(dimensions().left,0);pen.lineCap='round';pen.lineJoin='round';pen.strokeStyle=pen.fillStyle;
      for(const ch of Array.from(name)){
        if(orangeLetters[ch]){
          pen.lineWidth=(ch==='博'?1.18:1.92)+(outline?4:0);
          for(const line of orangeLetters[ch]){pen.beginPath();line.forEach(([x,y],i)=>i?pen.lineTo(x,y):pen.moveTo(x,y));pen.stroke();}
        }else{
          pen.save();pen.translate(6,0);pen.scale(.112,.112);pen.font=font();pen.textBaseline='middle';pen.textAlign='center';
          if(outline){pen.lineWidth=36;pen.strokeText(ch,0,0);}pen.fillText(ch,0,0);pen.restore();
        }
        pen.translate(12,0);
      }
      pen.restore();return;
    }
    pen.translate(dimensions().left,0);pen.scale(.112,.112);pen.font=font();pen.textBaseline='middle';
    pen.lineJoin='round';pen.lineWidth=38;pen.strokeStyle=pen.fillStyle;
    function glyph(value){if(outline||roomy){pen.save();if(!outline)pen.lineWidth=2.5;pen.strokeText(value,0,0);pen.restore();}pen.fillText(value,0,0);}
    if(upright()){
      pen.textAlign='center';
      Array.from(name).forEach((ch,i)=>{pen.save();pen.translate((i+.5)*12/.112,0);pen.rotate(-Math.PI/2);
        if(typeface==='original'&&verticalStrokes[ch]){
          pen.lineWidth=outline?33:12.5;pen.lineCap='round';pen.lineJoin='round';
          for(const line of verticalStrokes[ch]){pen.beginPath();line.forEach(([x,y],j)=>j?pen.lineTo(x,y):pen.moveTo(x,y));pen.stroke();}
        }else glyph(ch);pen.restore();});
    }else if(varied()){
      pen.textAlign='left';pen.textBaseline='alphabetic';
      const clearanceX=1/sz.x,clearanceY=1/sz.y;
      for(const g of glyphRun()){
        if(!g.ch.trim())continue;
        const lines=typeface==='original'?strokes[g.ch]:null;
        const m=pen.measureText(g.ch);
        const points=lines?.flat();
        const minX=points?Math.min(...points.map(p=>p[0]))-6:-m.actualBoundingBoxLeft;
        const maxX=points?Math.max(...points.map(p=>p[0]))+6:m.actualBoundingBoxRight;
        const minY=points?Math.min(...points.map(p=>p[1]))-6:-m.actualBoundingBoxAscent;
        const maxY=points?Math.max(...points.map(p=>p[1]))+6:m.actualBoundingBoxDescent;
        const fit=Math.min(g.size,(g.advance-2*clearanceX)/(.112*Math.max(1,maxX-minX)),
          (15.4-2*clearanceY)/(.112*Math.max(1,maxY-minY)));
        pen.save();
        pen.translate((g.x+g.advance/2)/.112,0);
        pen.scale(Math.max(.05,fit),Math.max(.05,fit));
        pen.translate(-(minX+maxX)/2,-(minY+maxY)/2);
        if(lines){
          pen.lineCap='round';pen.lineJoin='round';pen.strokeStyle=pen.fillStyle;pen.lineWidth=12;
          for(const line of lines){
            pen.beginPath();line.forEach(([x,y],i)=>i?pen.lineTo(x,y):pen.moveTo(x,y));pen.stroke();
          }
        }else{
          pen.lineWidth=1.8;pen.strokeText(g.ch,0,0);pen.fillText(g.ch,0,0);
        }
        pen.restore();
      }
    }else glyph(name);
    pen.restore();
  }
  // The mirrored sides swell around each glyph. The hanging lug shares the same outline.
  function tagOutline(pen,inset){
    const {left,textWidth}=dimensions();
    const q=(cx,cy,x,y)=>pen.quadraticCurveTo(cx,cy,x,y);
    pen.beginPath();
    if(orangeCover()){
      // Rounded lug, shoulders, broad bridge and scalloped right edge of the photographed plate.
      const points=[[73,174],[78,145],[105,127],[132,130],[143,104],[173,102],[208,104],[240,97],[268,106],[274,142],[290,144],[354,135],[369,132],[376,103],[398,94],[422,105],[436,92],[463,95],[475,102],[496,105],[514,125],[511,161],[512,172],[525,191],[517,212],[501,218],[495,239],[477,252],[452,255],[432,243],[413,254],[389,252],[375,241],[368,218],[356,215],[290,220],[283,224],[277,242],[258,252],[231,248],[194,250],[164,256],[141,248],[130,234],[126,216],[110,218],[87,209],[76,194]];
      const xy=([x,y])=>[(x-72)*.107,(y-175)*.108];
      const mid=(a,b)=>xy([(a[0]+b[0])/2,(a[1]+b[1])/2]);
      pen.beginPath();pen.moveTo(...mid(points.at(-1),points[0]));
      points.forEach((v,i)=>pen.quadraticCurveTo(...xy(v),...mid(v,points[(i+1)%points.length])));
      pen.closePath();return;
    }
    if(varied()){
      const l=.35+inset,r=dimensions().width-.35-inset,t=-9.6+inset,b=-t,k=4.1-inset;
      pen.moveTo(l+k,t);pen.lineTo(r-k,t);q(r,t,r,t+k);
      pen.lineTo(r,b-k);q(r,b,r-k,b);pen.lineTo(l+k,b);
      q(l,b,l,b-k);pen.lineTo(l,t+k);q(l,t,l+k,t);pen.closePath();return;
    }
    // In drawing coordinates the hanging ear points left; the vertical view turns it upward.
    // Outer silhouette traced from tag-vertical.jpg. Remove the photo's diagonal
    // hang before mapping its shoulders, side scallops and bottom into the plate.
    const leftEdge=[
      [291,48,278,56,275,68],[273,74,273,80,273,83],
      [256,86,249,100,250,114],[250,125,255,136,251,145],
      [249,152,244,158,246,166],[247,171,250,174,249,179],
      [240,185,239,197,241,207],[242,218,248,224,244,232],
      [239,239,236,247,237,255],[237,263,242,270,239,277],
      [233,283,233,292,234,301],[232,311,229,322,235,331],
      [240,342,251,342,260,341],[269,339,274,346,285,345]
    ];
    const rightEdge=[
      [298,348,311,345,323,340],[331,335,335,324,335,313],
      [335,304,332,297,334,289],[337,282,337,274,332,267],
      [329,263,335,258,336,250],[340,238,339,228,335,220],
      [331,214,339,207,340,197],[342,188,340,179,337,172],
      [334,166,346,162,345,149],[347,138,343,129,345,120],
      [352,102,340,88,331,86],[329,85,334,73,328,63],
      [324,51,312,45,301,47]
    ];
    function point(x,y){
      const distance=y<=76?.4+(y-47)*4.8/29:y<=99?5.2+(y-76)*(12-5.2)/23:
        12+(y-99)/247*(left-12+textWidth+2.7);
      const across=((303-.079*(y-76))-x)*.16;
      const shrink=1-inset/8.5,center=left+textWidth/2;
      return [distance+(distance<center?inset*.75:-inset*.75),across*shrink];
    }
    pen.moveTo(...point(301,47));
    for(const [ax,ay,bx,by,x,y] of [...leftEdge,...rightEdge]){
      pen.bezierCurveTo(...point(ax,ay),...point(bx,by),...point(x,y));
    }
    pen.closePath();
  }
    function plate(ctx){
      const {left,textWidth}=dimensions();
      ctx.save();
      if(framed()||orangeCover()){tagOutline(ctx,0);ctx.fill();}
      else if(shape==='胶囊牌'||shape==='电影票'){
        const w=dimensions().width;
        ctx.beginPath();ctx.roundRect(.4,-9.5,w-.8,19,shape==='胶囊牌'?9.5:2);ctx.fill();
        if(shape==='电影票'){
          ctx.save();ctx.globalCompositeOperation='destination-out';
          for(const y of [-9.5,9.5]){ctx.beginPath();ctx.arc(10,y,2,0,2*Math.PI);ctx.fill();}
          ctx.restore();
        }
      }else{
      ctx.beginPath();ctx.roundRect(4,-2.7,left+textWidth-5,5.4,2.7);ctx.fill();
      ctx.beginPath();ctx.arc(5.2,0,4.8,0,Math.PI*2);ctx.fill();
      if(element!=='无'){
        ctx.beginPath();ctx.roundRect(8.4,-8.9,15.2,17.8,7.4);ctx.fill();
      }
      lettering(ctx,true);
      }
      ctx.globalCompositeOperation='destination-out';ctx.beginPath();if(varied())ctx.ellipse(3.5,0,1.45,2.65,0,0,Math.PI*2);else ctx.arc(orange?4.5:5.2,0,orange?1.9:2.2,0,Math.PI*2);ctx.fill();ctx.restore();
    }
    function relief(ctx,shades=null){
      if(shades)ctx.fillStyle=shades.border;
      if(framed()){
        ctx.save();tagOutline(ctx,varied()?.95:0);if(upright())ctx.clip();ctx.strokeStyle=ctx.fillStyle;ctx.lineWidth=varied()?.58:1.9;
        ctx.lineJoin='round';ctx.stroke();
        if(varied())ctx.clearRect(0,-1.4,2.2,2.8);
        ctx.restore();
      }
      if(shades)ctx.fillStyle=shades.decor;
      const pts=decoration();if(pts.length){ctx.beginPath();pts.forEach(([x,y],i)=>ctx[i?'lineTo':'moveTo'](16+x,y));ctx.closePath();ctx.fill();}
      if(shades)ctx.fillStyle=shades.text;
      lettering(ctx);
    }
  function letterRim(pen){
    // Use the same offset in millimeters for custom strokes and system fonts.
    lettering(pen);
    const radius=.72;
    for(let i=0;i<24;i++){
      const angle=i*Math.PI/12;
      pen.save();
      pen.translate(radius*Math.cos(angle)/sz.x,radius*Math.sin(angle)/sz.y);
      lettering(pen);pen.restore();
    }
  }
  const rimHeight=()=>sz.thickness*.72+.60;
  let layers=null,layerKey='';
  function surfaces(w){
    const key=JSON.stringify([name,colors,element,shape,typeface,sz.x,sz.y]);
    if(key===layerKey)return layers;
    const resolution=12;
    function surface(paint,color){
      const sheet=document.createElement('canvas');
      sheet.width=Math.ceil(w*resolution);sheet.height=24*resolution;
      const pen=sheet.getContext('2d');
      pen.setTransform(resolution,0,0,resolution,0,12*resolution);
      pen.fillStyle=color;paint(pen);return sheet;
    }
    const artwork=pen=>relief(pen,colors);
    layers=[surface(plate,colors.plate),surface(plate,colors.plate),surface(artwork,colors.text),surface(artwork,colors.text)];
    if(varied())layers.push(surface(letterRim,'#f9ebe0'));
    for(const i of [0,2]){
      const pen=layers[i].getContext('2d');pen.resetTransform();
      pen.globalCompositeOperation='source-atop';pen.fillStyle=i===0?'#65334855':'#704a403a';
      pen.fillRect(0,0,layers[i].width,layers[i].height);
    }
    layerKey=key;return layers;
  }
  const measures=['length','width','thickness'].map(key=>app.querySelector('#studio-'+key));
  let footprintKey='',footprint,sz,validSize;
  function updateSize(w){
    const key=JSON.stringify([name,typeface,element,shape]);
    if(key!==footprintKey){footprint=studioFootprint(w,plate);footprintKey=key;}
    validSize=measures.every(input=>input.value!=='' && input.validity.valid);
    const [length,width,thickness]=measures.map(input=>input.valueAsNumber);
    validSize=validSize && length>=width && (!varied()||thickness>=4.1);
    if(validSize||!sz)sz={length,width,thickness,x:length/footprint.length,y:width/footprint.breadth,holeX:varied()?3.5:orange?4.5:5.2};
  }
  function draw(){
    const {width:w}=dimensions();
    updateSize(w);
    const scale=Math.min((upright()?canvas.height*.78:canvas.width*.8)/(w*sz.x),canvas.height/(32*sz.y),canvas.width/95);
    const rotation=angle+(upright()?Math.PI/2:0);
    const ca=Math.cos(rotation),sa=Math.sin(rotation),ct=Math.cos(tilt),st=Math.sin(tilt);
    ctx.resetTransform();ctx.clearRect(0,0,canvas.width,canvas.height);
    function plane(z){
      ctx.setTransform(scale*ca*sz.x,scale*sa*ct*sz.x,-scale*sa*sz.y,scale*ca*ct*sz.y,canvas.width/2,canvas.height*.52-z*scale*st);
      ctx.translate(-w/2,0);
    }
    const sheets=surfaces(w);
    function stamp(sheet,z){plane(z);ctx.drawImage(sheet,0,-12,w,24);}
    ctx.save();ctx.shadowColor='#45334466';ctx.shadowBlur=18;ctx.shadowOffsetX=3;ctx.shadowOffsetY=14;
    stamp(sheets[0],0);ctx.restore();
    const baseZ=sz.thickness*.72;
    for(let i=0;i<16;i++)stamp(sheets[0],baseZ*i/16);
    stamp(sheets[1],baseZ);
    if(varied()){
      for(let i=1;i<=5;i++)stamp(sheets[4],baseZ+(rimHeight()-baseZ)*i/5);
    }
    for(let i=0;i<8;i++)stamp(sheets[2],baseZ+(sz.thickness-baseZ)*i/8);
    stamp(sheets[3],sz.thickness);
    ctx.resetTransform();
    if(editor){
      app.querySelectorAll('[data-val]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.val===element)));
      app.querySelector('[data-part="decor"]').hidden=element==='无';
      app.querySelector('#studio-size').textContent=!validSize?'请填写长 40–160、宽 16–65、总厚 2.5–10 mm，长应大于或等于宽。横排大小字款总厚至少 4.1 mm，以保留两级凸起。':!name?'请输入名字。':`底板 ${(sz.thickness*.72).toFixed(2)} mm · 凸字 ${(sz.thickness*.28).toFixed(2)} mm。STL 按当前字形导出，并检查细连接。`;
      app.querySelector('#studio-save').disabled=!name||!validSize;app.querySelector('#studio-stl').disabled=!name||!validSize;
    }
  }
  draw();
  measures.forEach(input=>input.oninput=draw);
  const fontChoices=app.querySelectorAll('[data-font]');
  fontChoices.forEach(button=>{
    const face=typefaces[button.dataset.font];
    if(face.art)button.style.fontFamily=face.family;
  });
  fontChoices.forEach(button=>button.onclick=()=>{
    typeface=button.dataset.font;
    fontChoices.forEach(choice=>choice.setAttribute('aria-pressed',String(choice===button)));
    draw();
  });
  app.querySelector('#studio-name').oninput=e=>{name=e.target.value.trim();draw();};
  app.querySelectorAll('[data-val]').forEach(b=>b.onclick=()=>{element=b.dataset.val;draw();});
  app.querySelectorAll('[data-part] input').forEach(input=>input.oninput=()=>{
    colors[input.parentElement.dataset.part]=input.value;draw();
  });
  let drag=null;
  canvas.onpointerdown=e=>{drag=[e.clientX,e.clientY,angle,tilt];canvas.setPointerCapture(e.pointerId);};
  canvas.onpointermove=e=>{if(drag){angle=drag[2]+(e.clientX-drag[0])*.01;tilt=Math.max(0,Math.min(1.32,drag[3]+(e.clientY-drag[1])*.009));draw();}};
  canvas.onpointerup=canvas.onpointercancel=()=>drag=null;
  app.querySelector('#studio-reset').onclick=()=>{angle=homeAngle;tilt=homeTilt;draw();};
  app.querySelector('#studio-stl').onclick=async event=>{
    const button=event.currentTarget, status=app.querySelector('#studio-status');
    button.disabled=true;status.textContent='正在生成打印模型…';
    await new Promise(resolve=>setTimeout(resolve,35));
    try{
      if(!name||!validSize)return;
      const blob=studioSTL(dimensions().width,plate,relief,upright(),sz,varied()?letterRim:null);
      const link=document.createElement('a');link.href=URL.createObjectURL(blob);
      link.download='姓名牌-'+name+'-'+shape+'.stl';link.click();
      setTimeout(()=>URL.revokeObjectURL(link.href),30000);
      status.textContent='STL 已生成，可按毫米导入切片软件。';
    }catch(error){status.textContent=error.message||'生成失败，请重试。';}
    finally{button.disabled=!name||!validSize;}
  };
  app.querySelector('#studio-save').onclick=()=>{
    const {textWidth,left}=dimensions(), points=decoration().map(([x,y])=>[+x.toFixed(3),+(-y).toFixed(3)]);
    const contour=(inset)=>{
      const pts=[];
      tagOutline({beginPath(){},moveTo(x,y){pts.push([x,-y]);},lineTo(x,y){pts.push([x,-y]);},
        quadraticCurveTo(cx,cy,x,y){const [ax,ay]=pts.at(-1);for(let k=1;k<=12;k++){
          const t=k/12,u=1-t;pts.push([u*u*ax+2*u*t*cx+t*t*x,u*u*ay-2*u*t*cy-t*t*y]);}},
        bezierCurveTo(cx,cy,dx,dy,x,y){
          const [ax,ay]=pts.at(-1);
          for(let k=1;k<=16;k++){
            const t=k/16,u=1-t;
            pts.push([u**3*ax+3*u*u*t*cx+3*u*t*t*dx+t**3*x,u**3*ay-3*u*u*t*cy-3*u*t*t*dy-t**3*y]);
          }
        },
        closePath(){}},inset);
      return JSON.stringify(pts.map(p=>p.map(v=>+v.toFixed(3))));
    };
    const source=`// M3 造物实验室 · 单位 mm
name = ${JSON.stringify(name)};
font_name = "${typefaces[typeface].cad}";
original_strokes = ${typeface==="original"};
text_width = ${textWidth.toFixed(2)};
left = ${left};
w = max(35,left+text_width+6);
$fn=80;
${framed()?Object.entries(upright()?verticalStrokes:strokes).map(([ch,lines],i)=>'module glyph'+i+'(){for(line='+JSON.stringify(lines)+') for(j=[1:len(line)-1]) hull() for(t=[j-1,j]) translate([line[t][0],-line[t][1]]) circle(r=6);}').join('\n'):''}
${orangeOriginal()?Object.entries(orangeLetters).map(([ch,lines],i)=>'module orange'+i+'(){for(line='+JSON.stringify(lines)+') for(j=[1:len(line)-1]) hull() for(t=[j-1,j]) translate([line[t][0],-line[t][1]]) circle(r='+ (ch==='博'?.59:.96)+');}').join('\n'):''}
module letters(){
 ${orangeOriginal()?'for(i=[0:len(name)-1]) translate([12*i,0]) if(name[i]=="王") orange0(); else if(name[i]=="一") orange1(); else if(name[i]=="博") orange2(); else translate([6,0]) text(name[i],size=10,font=font_name,halign="center",valign="center");':varied()?'scales=[1.02,1.10,1.06]; function pos(i)=i<=0?0:pos(i-1)+12*scales[(i-1)%3]; for(i=[0:len(name)-1]) let(k=scales[i%3]) translate([pos(i)+6*k,0]) if(original_strokes && name[i]=="李") scale(.112*k) glyph0(); else if(original_strokes && name[i]=="太") scale(.112*k) glyph1(); else if(original_strokes && name[i]=="白") scale(.112*k) glyph2(); else text(name[i],size=10*k,font=font_name,halign="center",valign="center");':upright()?'for(i=[0:len(name)-1]) translate([(i+.5)*12,0]) rotate(90) if(original_strokes && name[i]=="周") scale(.112) glyph0(); else if(original_strokes && name[i]=="杰") scale(.112) glyph1(); else if(original_strokes && name[i]=="伦") scale(.112) glyph2(); else text(name[i],size=10,font=font_name,halign="center",valign="center");':'resize([text_width,0],auto=true) text(name,size=11.2,font=font_name,valign="center");'}
}
rotate(${upright()?-90:0}) scale([${sz.x},${sz.y},1]) union(){
 color("${colors.plate}") linear_extrude(${sz.thickness*.72}) difference(){
 ${(framed()||orangeCover())?'polygon('+contour(0)+');':shape==='胶囊牌'?'hull() for(x=[9.9,w-9.9]) translate([x,0]) circle(r=9.5);':shape==='电影票'?'difference(){ hull() for(x=[2.4,w-2.4],y=[-7.5,7.5]) translate([x,y]) circle(r=2); for(y=[-9.5,9.5]) translate([10,y]) circle(r=2); }':`   union(){
     hull() for(x=[6.7,left+text_width-3.7]) translate([x,0]) circle(r=2.7);
     translate([5.2,0]) circle(r=4.8);
     ${points.length?'hull() for(y=[-1.3,1.3]) translate([16,y]) circle(r=7.6);':''}
     translate([left,0]) offset(r=2.13) letters();
   }
`}
   ${varied()?'translate([3.5,0]) scale([1.45,2.65]) circle(r=1);':orange?'translate([4.5,0]) circle(r=1.9);':'translate([5.2,0]) circle(r=2.2);'}
 }
 ${framed()?'color("'+colors.border+'") translate([0,0,'+(sz.thickness*.72-.01)+']) linear_extrude('+(sz.thickness*.28+.01)+') difference(){offset(r='+ (varied()?.425:0) +') polygon('+contour(varied()?.95:0)+');offset(delta='+ (varied()?-.425:-.95) +') polygon('+contour(varied()?.95:0)+');'+(varied()?'translate([0,-1.4]) square([2.2,2.8]);':'')+'}':''}
 color("${colors.text}") translate([left,0,${sz.thickness*.72-.01}]) linear_extrude(${sz.thickness*.28+.01}) letters();
 ${points.length?'color("'+colors.decor+'") translate([16,0,'+(sz.thickness*.72-.01)+']) linear_extrude('+(sz.thickness*.28+.01)+') polygon('+JSON.stringify(points)+');':''}
}`;
    const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([source],{type:'text/plain;charset=utf-8'}));a.download='姓名牌-'+name+'-'+shape+'.scad';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  };
}
