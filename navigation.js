function pageTrail(hash){const p=(hash||'#home').replace(/^#/,'').split('/');const trail=[{name:'探索首页',href:'#home'}];
 if(p[0]==='paths')trail.push({name:'学习路径',href:'#paths'});
 else if(p[0]==='about')trail.push({name:'关于',href:'#about'});
 else if(p[0]==='progress')trail.push({name:'我的足迹',href:'#progress'});
 else if(p[0]==='lab'){
 trail.push({name:'学习路径',href:'#paths'});const names={model:'三维建模',print:'3D 打印',circuit:'电子电路',code:'创意编程'};
 if(names[p[1]])trail.push({name:names[p[1]],href:'#lab/'+p[1]});
 if(p[1]==='model'&&['tinkercad','fusion360'].includes(p[2])){
 trail.push({name:p[2]==='tinkercad'?'Tinkercad':'Fusion 360',href:'#lab/model/'+p[2]});
 if(p[3])trail.push({name:p[3]==='basics'?(p[2]==='tinkercad'?'熟悉工具':'基础操作实验'):(p[2]==='tinkercad'&&p[3]==='project-1'?'螺栓放置盒':p[2]==='tinkercad'&&p[3]==='project-2'?'专属铭牌定制':p[2]==='tinkercad'&&p[3]==='project-3'?'趣味骰子':p[2]==='tinkercad'&&p[3]==='project-4'?'卡通飞机':'干中学项目 '+p[3].replace('project-','')),href:'#lab/model/'+p[2]+'/'+p[3]});
 if(p[2]==='tinkercad'&&p[3]==='basics'&&p[4]){const n=Number((p[4]||'').replace('unit-',''));const name=p[4]==='play'?'五个互动实验':typeof toolLessons!=='undefined'&&toolLessons[n]?toolLessons[n].title:'学习小节';trail.push({name,href:hash})}
 }}return trail;}
function refreshPageNavigation(){const trail=pageTrail(location.hash),current=trail[trail.length-1],parent=trail[trail.length-2];const back=document.getElementById('page-parent');back.hidden=!parent;if(parent){back.href=parent.href;back.title='返回'+parent.name;back.setAttribute('aria-label','返回上一级：'+parent.name)}document.getElementById('page-trail').innerHTML=trail.map((t,i)=>i===trail.length-1?`<span aria-current="page">${t.name}</span>`:`<a href="${t.href}">${t.name}</a><span class="trail-separator" aria-hidden="true">/</span>`).join('');document.getElementById('page-trail').setAttribute('aria-label','当前位置：'+current.name)}
window.addEventListener('hashchange',refreshPageNavigation);refreshPageNavigation();
