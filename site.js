(function(){
var KEY='pba-done-v1',RK='pba-role-v1';
var done={};try{done=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(done))}catch(e){}}
function copyText(t,b){var ok=function(){var o=b.textContent;b.textContent='Copied!';b.classList.add('ok');setTimeout(function(){b.textContent=o;b.classList.remove('ok')},1400)};
 if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(ok,function(){fb(t);ok()})}else{fb(t);ok()}}
function fb(t){var a=document.createElement('textarea');a.value=t;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}document.body.removeChild(a)}
document.querySelectorAll('[data-copy]').forEach(function(b){b.addEventListener('click',function(){var el=document.getElementById(b.getAttribute('data-copy'));copyText(el.innerText.trim(),b)})});
var boxes=document.querySelectorAll('input[data-done]');
function prog(){var vis=Array.prototype.filter.call(boxes,function(x){return !x.closest('.prompt').classList.contains('hidden')});
 var n=vis.filter(function(x){return x.checked}).length;var t=document.getElementById('progtxt');if(t){t.textContent=n+' of '+vis.length+' tried';document.getElementById('progbar').style.width=(vis.length?100*n/vis.length:0)+'%'}}
boxes.forEach(function(x){var id=x.getAttribute('data-done');x.checked=!!done[id];x.closest('.prompt').classList.toggle('done',x.checked);
 x.addEventListener('change',function(){done[id]=x.checked;save();x.closest('.prompt').classList.toggle('done',x.checked);prog()})});
var chips=document.querySelectorAll('.chip[data-role]');
function setRole(r){chips.forEach(function(c){c.setAttribute('aria-pressed',c.getAttribute('data-role')===r?'true':'false')});
 document.querySelectorAll('.prompt[data-roles]').forEach(function(p){var rs=p.getAttribute('data-roles').split(' ');p.classList.toggle('hidden',!(r==='all'||rs.indexOf('all')>-1||rs.indexOf(r)>-1))});
 document.querySelectorAll('section[data-agent]').forEach(function(s){var any=s.querySelectorAll('.prompt:not(.hidden)').length;var e=s.querySelector('.empty');if(e)e.style.display=any?'none':'block'});
 try{localStorage.setItem(RK,r)}catch(e){}prog()}
chips.forEach(function(c){c.addEventListener('click',function(){setRole(c.getAttribute('data-role'))})});
var q=new URLSearchParams(location.search).get('role');var r0=q||localStorage.getItem(RK)||'all';
if(!document.querySelector('.chip[data-role="'+r0+'"]'))r0='all';if(chips.length)setRole(r0);
var rs=document.getElementById('reset');if(rs)rs.addEventListener('click',function(){done={};save();boxes.forEach(function(x){x.checked=false;x.closest('.prompt').classList.remove('done')});prog()});
})();
