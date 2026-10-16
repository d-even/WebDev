(()=>{
const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
// code:[name, iso2, units per 1 USD]
const C={USD:['United States Dollar','us',1],EUR:['Euro','eu',.8929],GBP:['British Pound','gb',.7544],AED:['UAE Dirham','ae',3.6725],ARS:['Argentine Peso','ar',1050],AUD:['Australian Dollar','au',1.4337],BDT:['Bangladeshi Taka','bd',121],BHD:['Bahraini Dinar','bh',.376],BRL:['Brazilian Real','br',5.45],CAD:['Canadian Dollar','ca',1.4211],CHF:['Swiss Franc','ch',.8322],CLP:['Chilean Peso','cl',940],CNY:['Chinese Yuan','cn',7.25],COP:['Colombian Peso','co',4200],CZK:['Czech Koruna','cz',22.9],DKK:['Danish Krone','dk',6.66],EGP:['Egyptian Pound','eg',49],GHS:['Ghanaian Cedi','gh',16],HKD:['Hong Kong Dollar','hk',7.8],HUF:['Hungarian Forint','hu',360],IDR:['Indonesian Rupiah','id',15700],ILS:['Israeli Shekel','il',3.75],INR:['Indian Rupee','in',84],ISK:['Icelandic Krona','is',138],JOD:['Jordanian Dinar','jo',.709],JPY:['Japanese Yen','jp',158.3],KES:['Kenyan Shilling','ke',129],KRW:['South Korean Won','kr',1370],KWD:['Kuwaiti Dinar','kw',.306],KZT:['Kazakhstani Tenge','kz',480],LKR:['Sri Lankan Rupee','lk',300],MAD:['Moroccan Dirham','ma',9.8],MXN:['Mexican Peso','mx',19.8],MYR:['Malaysian Ringgit','my',4.3],NGN:['Nigerian Naira','ng',1600],NOK:['Norwegian Krone','no',10.9],NPR:['Nepalese Rupee','np',134],NZD:['New Zealand Dollar','nz',1.6],OMR:['Omani Rial','om',.385],PEN:['Peruvian Sol','pe',3.75],PHP:['Philippine Peso','ph',57],PKR:['Pakistani Rupee','pk',278],PLN:['Polish Zloty','pl',3.9],QAR:['Qatari Riyal','qa',3.64],RON:['Romanian Leu','ro',4.45],RUB:['Russian Ruble','ru',92],SAR:['Saudi Riyal','sa',3.75],SEK:['Swedish Krona','se',10.5],SGD:['Singapore Dollar','sg',1.31],THB:['Thai Baht','th',34],TRY:['Turkish Lira','tr',34],TWD:['New Taiwan Dollar','tw',32],TZS:['Tanzanian Shilling','tz',2700],UAH:['Ukrainian Hryvnia','ua',41],VND:['Vietnamese Dong','vn',25000],ZAR:['South African Rand','za',17.8]};
const POP=['EUR','GBP','USD'],CODES=Object.keys(C),RANGES={'1D':[1,24],'1W':[7,28],'1M':[30,30],'3M':[90,60],'1Y':[365,90],'5Y':[1825,120]};
const TICK=[['USD','CAD',-.18],['EUR','USD',-.04],['USD','JPY',.04],['GBP','USD',.21],['USD','CHF',-.06],['EUR','GBP',-.25],['AUD','USD',.12],['USD','INR',.07],['USD','CNY',-.02]];
const rate=(a,b)=>C[b][2]/C[a][2];
const fmtR=r=>r.toFixed(r>=100?2:r<.01?6:4);
const fmtN=(n,d=2)=>n.toLocaleString('en-US',{maximumFractionDigits:d,minimumFractionDigits:d});
const pct=p=>`<span class="${p<0?'dn':'up'}">${p<0?'▼':'▲'} ${p>0?'+':''}${p.toFixed(2)}%</span>`;
const ld=(k,d)=>{try{return JSON.parse(localStorage[k])??d}catch{return d}};
const sv=(k,v)=>{try{localStorage[k]=JSON.stringify(v)}catch{}};

const S={from:'USD',to:'EUR',amt:1000,range:'1M',tab:'history',fav:ld('fxf',[]),log:ld('fxl',[])};
const flag=c=>`<img class="flag" src="https://flagcdn.com/w40/${C[c][1]}.png" alt="" loading="lazy" onerror="this.style.visibility='hidden'">`;

// deterministic pseudo-random history (seeded by pair+range)
function series(a,b,rg){
  const [days,n]=RANGES[rg];let h=2166136261;
  for(const ch of a+b+rg)h=Math.imul(h^ch.charCodeAt(0),16777619);
  const rnd=()=>(h=Math.imul(h^h>>>15,2246822507)+1013904223|0,((h>>>0)%1e6)/1e6);
  const r=rate(a,b),vol=.004*Math.sqrt(days/n)+.0004,w=[0];
  for(let i=1;i<n;i++)w.push(w[i-1]+(rnd()-.5)*2*vol);
  const end=w[n-1],now=Date.now();
  return w.map((v,i)=>({v:r*Math.exp(v-end),t:now-(n-1-i)*days*864e5/n}));
}

// ticker
$('#tape').innerHTML=[...TICK,...TICK].map(([a,b,p])=>`<span>${a}/${b}<b>${fmtR(rate(a,b))}</b>${pct(p)}</span>`).join('');
$('#count').textContent=CODES.length;
$('#pause').onclick=e=>{const p=document.body.classList.toggle('paused');e.target.textContent=p?'▶':'❚❚'};

// converter
const parse=()=>parseFloat($('#amt').value.replace(/,/g,''))||0;
function render(){
  const{from:f,to:t}=S,r=rate(f,t);
  $('#out').value=fmtN(S.amt*r);
  $('#rate').textContent=`1 ${f} = ${fmtR(r)} ${t}`;
  $$('.cur').forEach(b=>b.innerHTML=`${flag(S[b.dataset.s])}${S[b.dataset.s]}`);
  const fav=S.fav.includes(f+t);
  Object.assign($('#fav'),{textContent:(fav?'★':'☆')+' FAVORITE'}).classList.toggle('on',fav);
  $('#nf').textContent=S.fav.length;$('#nl').textContent=S.log.length;
  $$('#tabs button').forEach(b=>b.classList.toggle('on',b.dataset.t===S.tab));
  panel();
}
const set=o=>{Object.assign(S,o);render()};
$('#amt').oninput=e=>{
  const v=e.target.value.replace(/[^\d.]/g,'').replace(/(\..*)\./g,'$1'),[i,d]=v.split('.');
  e.target.value=(i?(+i).toLocaleString('en-US'):'')+(d!==undefined?'.'+d.slice(0,4):'');
  S.amt=parse();render();
};
$('#swap').onclick=()=>set({from:S.to,to:S.from});
$('#fav').onclick=()=>{const k=S.from+S.to,i=S.fav.indexOf(k);i<0?S.fav.push(k):S.fav.splice(i,1);sv('fxf',S.fav);render();toast(i<0?'Saved to favorites':'Removed')};
$('#log').onclick=()=>{S.log.unshift({f:S.from,t:S.to,a:S.amt,r:S.amt*rate(S.from,S.to),d:Date.now()});S.log=S.log.slice(0,50);sv('fxl',S.log);render();toast('Conversion logged')};
let tt;const toast=m=>{const e=$('#toast');e.textContent=m;e.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('on'),1600)};

// currency picker
let dd=null;
function closeDD(){dd?.remove();dd=null}
function openDD(side){
  closeDD();
  const host=$('#f-'+side),cur=S[side];let q='',idx=0,items=[];
  dd=document.createElement('div');dd.className='dd';
  dd.innerHTML=`<div class="s">⌕<input placeholder="Search currencies..." aria-label="Search currencies"><kbd>Ctrl K</kbd></div><div class="list"></div>`;
  host.append(dd);
  const inp=$('input',dd),list=$('.list',dd);
  const draw=()=>{
    const m=c=>!q||(c+C[c][0]).toLowerCase().includes(q);
    const pop=POP.filter(m).sort(),oth=CODES.filter(c=>!POP.includes(c)&&m(c)).sort();
    items=[...pop,...oth];idx=Math.min(idx,Math.max(items.length-1,0));
    const row=c=>`<button class="opt${items[idx]===c?' hi':''}" data-c="${c}">${flag(c)}<b>${c}</b><small>${C[c][0]}</small>${c===cur?'✓':''}</button>`;
    list.innerHTML=items.length?(pop.length?`<h6>POPULAR<span>${pop.length}</span></h6>`+pop.map(row).join(''):'')+(oth.length?`<h6>OTHER CURRENCIES<span>${oth.length}</span></h6>`+oth.map(row).join(''):''):'<div class="empty">No matches</div>';
    $('.hi',list)?.scrollIntoView({block:'nearest'});
  };
  const pick=c=>{closeDD();if(!c)return;c===S[side==='from'?'to':'from']?set({from:S.to,to:S.from}):set({[side]:c})};
  inp.oninput=()=>{q=inp.value.trim().toLowerCase();idx=0;draw()};
  inp.onkeydown=e=>{
    const k=e.key;
    if(k==='ArrowDown'||k==='ArrowUp'){e.preventDefault();idx=(idx+(k==='ArrowDown'?1:-1)+items.length)%items.length;draw()}
    else if(k==='Enter')pick(items[idx]);
    else if(k==='Escape')closeDD();
  };
  list.onclick=e=>pick(e.target.closest('.opt')?.dataset.c);
  draw();inp.focus();
}
$$('.cur').forEach(b=>b.onclick=e=>{e.stopPropagation();dd&&dd.parentElement.id==='f-'+b.dataset.s?closeDD():openDD(b.dataset.s)});
document.onclick=e=>{if(dd&&!dd.contains(e.target))closeDD();if(!e.target.closest('#acc'))$('#accMenu').hidden=true};
document.onkeydown=e=>{if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();openDD('from')}else if(e.key==='Escape')closeDD()};

// account menu
$('#acc').onclick=e=>{e.stopPropagation();const m=$('#accMenu');m.hidden=!m.hidden};
$('#accMenu').onclick=e=>{const a=e.target.dataset.a;if(!a)return;a==='clearfav'?(S.fav=[],sv('fxf',[])):(S.log=[],sv('fxl',[]));$('#accMenu').hidden=true;render()};

// tabs + panels
$('#tabs').onclick=e=>{const t=e.target.closest('button')?.dataset.t;t&&set({tab:t})};
const ago=ts=>new Date(ts).toLocaleString([], {month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
function panel(){
  const p=$('#panel'),{from:f,to:t}=S;
  if(S.tab==='history'){
    const d=series(f,t,S.range),o=d[0].v,l=d.at(-1).v,ch=l-o,pc=ch/o*100,up=ch>=0;
    const rows=[['OPEN',fmtR(o)],['LAST',fmtR(l)],['CHANGE',`<span class="${up?'up':'dn'}">${up?'+':''}${ch.toFixed(l>=100?2:4)}</span>`],['% CHANGE',pct(pc)]];
    p.innerHTML=`<div class="stats">${rows.map(([k,v])=>`<div class="stat"><label>${k}</label><b>${v}</b></div>`).join('')}
      <div class="ranges">${Object.keys(RANGES).map(r=>`<button data-r="${r}"${r===S.range?' class="on"':''}>${r}</button>`).join('')}</div></div>
      <div class="chart"><svg viewBox="0 0 700 240" id="svg"></svg><div id="tip"></div></div>`;
    $('.ranges',p).onclick=e=>e.target.dataset.r&&set({range:e.target.dataset.r});
    chart(d,up);
  }else if(S.tab==='compare'){
    const ids=['EUR','GBP','JPY','CAD','AUD','CHF','INR','CNY','MXN','SGD'].filter(c=>c!==f).slice(0,8);
    p.innerHTML=`<table><tr><th>${S.amt?fmtN(S.amt,0):1} ${f} →</th><th>RATE</th><th>RECEIVE</th><th>1M</th></tr>${ids.map(c=>{const d=series(f,c,'1M');return`<tr class="go" data-c="${c}"><td>${flag(c)} <b>${c}</b></td><td>${fmtR(rate(f,c))}</td><td>${fmtN(S.amt*rate(f,c))}</td><td>${pct((d.at(-1).v/d[0].v-1)*100)}</td></tr>`}).join('')}</table>`;
    p.onclick=e=>{const c=e.target.closest('tr')?.dataset.c;c&&set({to:c,tab:'history'})};
  }else if(S.tab==='favs'){
    p.onclick=e=>{const b=e.target.closest('[data-k]');if(!b)return;const k=b.dataset.k;
      if(e.target.classList.contains('x')){S.fav=S.fav.filter(x=>x!==k);sv('fxf',S.fav);render()}else set({from:k.slice(0,3),to:k.slice(3),tab:'history'})};
    p.innerHTML=S.fav.length?S.fav.map(k=>`<div class="li" data-k="${k}" role="button" tabindex="0">${flag(k.slice(0,3))}<b>${k.slice(0,3)}/${k.slice(3)}</b><span>${fmtR(rate(k.slice(0,3),k.slice(3)))}</span><button class="x" aria-label="Remove">✕</button></div>`).join(''):'<div class="empty">No favorites yet. Tap ☆ FAVORITE to save a pair.</div>';
  }else{
    p.onclick=null;
    p.innerHTML=S.log.length?S.log.map(l=>`<div class="li"><b>${fmtN(l.a)} ${l.f}</b><span>→ ${fmtN(l.r)} ${l.t}</span><small>${ago(l.d)}</small></div>`).join(''):'<div class="empty">No conversions logged yet.</div>';
  }
  if(S.tab!=='compare'&&S.tab!=='favs')p.onclick=null;
}

// SVG chart with hover tooltip
function chart(d,up){
  const W=700,H=240,P=10,vs=d.map(x=>x.v),mn=Math.min(...vs),mx=Math.max(...vs),sp=mx-mn||1;
  const X=i=>P+i/(d.length-1)*(W-2*P),Y=v=>P+(1-(v-mn)/sp)*(H-2*P-10)+5;
  const pts=d.map((x,i)=>`${X(i).toFixed(1)},${Y(x.v).toFixed(1)}`),col=up?'#2bff5c':'#ff4d4d';
  const svg=$('#svg'),tip=$('#tip');
  svg.innerHTML=`<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${col}" stop-opacity=".25"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></linearGradient></defs>
    ${[0,1,2,3].map(i=>`<line x1="0" x2="${W}" y1="${P+i*(H-2*P)/3}" y2="${P+i*(H-2*P)/3}" stroke="#222"/>`).join('')}
    <path d="M${pts.join('L')}L${W-P},${H}L${P},${H}Z" fill="url(#g)"/><polyline points="${pts.join(' ')}" fill="none" stroke="${col}" stroke-width="2" stroke-linejoin="round"/>
    <g id="hv" display="none"><line y1="0" y2="${H}" stroke="#555"/><circle r="4" fill="${col}"/></g>`;
  const hv=$('#hv');
  svg.onpointermove=e=>{
    const b=svg.getBoundingClientRect(),i=Math.max(0,Math.min(d.length-1,Math.round(((e.clientX-b.left)/b.width*W-P)/(W-2*P)*(d.length-1))));
    const x=X(i),y=Y(d[i].v);hv.setAttribute('display','');
    $('line',hv).setAttribute('x1',x);$('line',hv).setAttribute('x2',x);$('circle',hv).setAttribute('cx',x);$('circle',hv).setAttribute('cy',y);
    tip.style.cssText=`display:block;left:${12+x/W*b.width}px;top:${12+y/H*b.height}px`;
    tip.innerHTML=`<b>${fmtR(d[i].v)}</b> · ${ago(d[i].t)}`;
  };
  svg.onpointerleave=()=>{hv.setAttribute('display','none');tip.style.display='none'};
}
render();
})();