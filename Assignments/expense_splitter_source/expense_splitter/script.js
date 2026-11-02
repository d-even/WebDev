const palette = ['#635bdf','#f3a20b','#e8449a','#16b9a8','#4c9de8','#f07842'];
const people = [
  {id:'alex',name:'Alex Chen',initials:'AC',color:palette[0]},
  {id:'jordan',name:'Jordan Park',initials:'JP',color:palette[1]},
  {id:'sam',name:'Sam Rivera',initials:'SR',color:palette[2]},
  {id:'taylor',name:'Taylor Kim',initials:'TK',color:palette[3]}
];
const groups = [
 {id:'japan',name:'Trip to Japan',description:'Two weeks in Tokyo, Kyoto, and Osaka. Cherry blossom season 2024.',balance:216.47},
 {id:'apt',name:'Apartment 4B',description:'Shared household expenses and monthly bills.',balance:2267.09},
 {id:'lunch',name:'Office Lunch Crew',description:'Lunches, coffee runs, and team snacks.',balance:19.50},
 {id:'birthday',name:"Sarah’s Birthday Present",description:'A group gift for Sarah.',balance:0},
 {id:'camping',name:'Camping Weekend',description:'Cabin, food, and supplies for the weekend.',balance:177.79}
];
let activeGroup = 'japan';
let expenses = [
 {id:1,name:'Convenience store runs (accumulated)',amount:8340,currency:'¥',payer:'sam',date:'2024-03-27',split:['alex','jordan','sam','taylor'],kind:'expense',icon:''},
 {id:2,name:'Sam Rivera paid Taylor Kim',amount:8500,currency:'¥',payer:'sam',date:'2024-03-26',split:[],kind:'settlement',icon:'',from:'sam',to:'taylor'},
 {id:3,name:'Osaka Castle entry',amount:2400,currency:'¥',payer:'jordan',date:'2024-03-26',split:['alex','jordan','sam','taylor'],kind:'expense',icon:'',category:'fun'},
 {id:4,name:'Izakaya dinner in Dotonbori',amount:42600,currency:'¥',payer:'alex',date:'2024-03-25',split:['alex','jordan','sam','taylor'],kind:'expense',icon:'',category:'food',tag:'Shares'},
 {id:5,name:'Osaka street food tour',amount:28000,currency:'¥',payer:'taylor',date:'2024-03-25',split:['alex','jordan','sam','taylor'],kind:'expense',icon:'',category:'food'},
 {id:6,name:'Jordan Park paid Alex Chen',amount:150,currency:'$',payer:'jordan',date:'2024-03-24',split:[],kind:'settlement',icon:'',from:'jordan',to:'alex'},
 {id:7,name:'Don Quijote shopping haul',amount:18750,currency:'¥',payer:'sam',date:'2024-03-24',split:['alex','jordan','sam','taylor'],kind:'expense',icon:'',tag:'Exact'},
 {id:8,name:'Shinkansen Kyoto to Osaka',amount:13600,currency:'¥',payer:'alex',date:'2024-03-23',split:['alex','jordan','sam','taylor'],kind:'expense',icon:''},
 {id:9,name:'Kyoto ramen night',amount:6200,currency:'¥',payer:'taylor',date:'2024-03-22',split:['alex','jordan','sam','taylor'],kind:'expense',icon:'',category:'food'},
 {id:10,name:'Temple and garden tickets',amount:4800,currency:'¥',payer:'jordan',date:'2024-03-21',split:['alex','jordan','sam','taylor'],kind:'expense',icon:'',category:'fun'},
 {id:11,name:'Coffee and pastries',amount:2150,currency:'¥',payer:'sam',date:'2024-03-20',split:['alex','jordan','sam','taylor'],kind:'expense',icon:'',category:'food'},
 {id:12,name:'Tokyo metro cards',amount:6400,currency:'¥',payer:'alex',date:'2024-03-19',split:['alex','jordan','sam','taylor'],kind:'expense',icon:''},
 {id:13,name:'Sushi dinner',amount:18200,currency:'¥',payer:'taylor',date:'2024-03-18',split:['alex','jordan','sam','taylor'],kind:'expense',icon:'',category:'food'}
];
const $ = id => document.getElementById(id);
const person = id => people.find(p=>p.id===id) || people[0];
const money = (n,currency='$') => currency + Number(n).toLocaleString('en-US',{minimumFractionDigits:currency==='¥'?0:2,maximumFractionDigits:currency==='¥'?0:2});
const dateLabel = value => new Date(value+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'2-digit',year:'numeric'});
function avatar(p,extra=''){return `<span class="avatar ${extra}" style="background:${p.color}" title="${p.name}">${p.initials}</span>`}
function toast(message){const el=$('toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),2600)}
function renderGroups(){
 $('groupList').innerHTML=groups.map(g=>`<button class="group-item ${g.id===activeGroup?'active':''}" data-group="${g.id}"><span class="group-name">${g.name}</span><span class="group-balance ${g.balance===0?'zero':''}">${g.balance>0?'+':''}${money(g.balance)}</span></button>`).join('');
 document.querySelectorAll('[data-group]').forEach(b=>b.addEventListener('click',()=>{activeGroup=b.dataset.group;const g=groups.find(x=>x.id===activeGroup);$('groupTitle').textContent=g.name;$('groupDescription').textContent=g.description;renderGroups();renderActivity();toast(`Opened ${g.name}`)}));
}
function renderSummary(){
 const total=expenses.filter(e=>e.kind==='expense').reduce((s,e)=>s+e.amount,0);
 const settlements=expenses.filter(e=>e.kind==='settlement').length;
 const currency=expenses.find(e=>e.kind==='expense')?.currency||'$';
 $('totalSpent').textContent=money(total,currency);
 $('expenseCount').textContent=`${expenses.filter(e=>e.kind==='expense').length} expenses`;
 $('activityMeta').textContent=`${expenses.filter(e=>e.kind==='expense').length} expenses · ${settlements} settlements`;
 $('memberAvatars').innerHTML=people.map(p=>avatar(p)).join('');
 $('memberCount').textContent=`${people.length} members`;
}
function renderActivity(){
 const type=$('typeFilter').value,payer=$('payerFilter').value;
 const filtered=expenses.filter(e=>(type==='all'||e.kind===type)&&(payer==='all'||e.payer===payer));
 $('filterBadge').classList.toggle('hidden',type==='all'&&payer==='all');
 if(!filtered.length){$('activityList').innerHTML='<div class="empty-state">No activity matches these filters.</div>';return}
 $('activityList').innerHTML=filtered.map(e=>{
  const p=person(e.payer);const isSettle=e.kind==='settlement';
  let title=isSettle?`${person(e.from).name} <span class="paid-word">paid</span> ${person(e.to).name}`:e.name;
  return `<article class="activity-item ${isSettle?'settlement':''}" data-expense="${e.id}">
    <div class="activity-icon ${e.category||''}">${e.icon||'＋'}</div>
    <div class="activity-info"><div class="activity-title">${title}</div><div class="activity-sub">${avatar(p)}<span>${p.name}</span><span>·</span><span>${dateLabel(e.date)}</span>${isSettle?'<span class="tag green">Settlement</span>':e.tag?`<span class="tag">${e.tag}</span>`:''}</div></div>
    <div class="activity-amount">${money(e.amount,e.currency)}</div><button class="expand-btn" aria-label="Expand expense" data-expand="${e.id}">⌄</button>
    <div class="activity-extra hidden" id="extra-${e.id}">${isSettle?`Payment from ${person(e.from).name} to ${person(e.to).name}.`:`Paid by ${p.name}. Split between ${e.split.map(id=>person(id).name).join(', ')}.`} <button class="btn btn-small btn-secondary" data-delete="${e.id}">Delete</button></div>
   </article>`;
 }).join('');
 document.querySelectorAll('[data-expand]').forEach(b=>b.addEventListener('click',()=>{const el=$(`extra-${b.dataset.expand}`);el.classList.toggle('hidden');b.textContent=el.classList.contains('hidden')?'⌄':'⌃'}));
 document.querySelectorAll('[data-delete]').forEach(b=>b.addEventListener('click',()=>{expenses=expenses.filter(e=>e.id!==Number(b.dataset.delete));renderAll();toast('Activity removed')}));
 renderSummary();renderBalances();
}
function renderBalances(){
 const total=expenses.filter(e=>e.kind==='expense').reduce((s,e)=>s+e.amount,0);
 const youPaid=expenses.filter(e=>e.kind==='expense'&&e.payer==='alex').reduce((s,e)=>s+e.amount,0);
 const yourShare=expenses.filter(e=>e.kind==='expense'&&e.split.includes('alex')).reduce((s,e)=>s+e.amount/e.split.length,0);
 const currency=expenses.find(e=>e.kind==='expense')?.currency||'$';
 $('youPaid').textContent=money(youPaid,currency);$('yourShare').textContent=money(yourShare,currency);
 // Simplified illustrative balances from paid amounts minus equal shares.
 const bal=Object.fromEntries(people.map(p=>[p.id,0]));
 expenses.filter(e=>e.kind==='expense').forEach(e=>{bal[e.payer]+=e.amount;(e.split||[]).forEach(id=>bal[id]-=e.amount/(e.split.length||1))});
 expenses.filter(e=>e.kind==='settlement').forEach(e=>{bal[e.from]-=e.amount;bal[e.to]+=e.amount});
 $('memberBalances').innerHTML=people.map(p=>`<div class="balance-row"><div class="balance-name">${avatar(p)}<span>${p.name}</span></div><span class="balance-value ${bal[p.id]>0.01?'positive':bal[p.id]<-0.01?'negative':'zero'}">${bal[p.id]>0.01?'+':''}${money(bal[p.id],currency)}</span></div>`).join('');
 // Greedy suggested settlement list using current balances.
 const debtors=people.map(p=>({id:p.id,amount:-bal[p.id]})).filter(x=>x.amount>0.01).sort((a,b)=>b.amount-a.amount);
 const creditors=people.map(p=>({id:p.id,amount:bal[p.id]})).filter(x=>x.amount>0.01).sort((a,b)=>b.amount-a.amount);
 let i=0,j=0,transfers=[];
 while(i<debtors.length&&j<creditors.length){const amount=Math.min(debtors[i].amount,creditors[j].amount);if(amount>.01)transfers.push({from:debtors[i].id,to:creditors[j].id,amount});debtors[i].amount-=amount;creditors[j].amount-=amount;if(debtors[i].amount<.01)i++;if(creditors[j].amount<.01)j++}
 $('suggestedSettlements').innerHTML=transfers.length?transfers.slice(0,4).map((t,index)=>`<div class="settlement-row">${index===0?`<div class="settlement-person">${avatar(person(t.from))}<span>${person(t.from).name} owes you</span></div><div class="settlement-action"><span class="settlement-value">↙ +${money(t.amount,currency)}</span><button class="btn btn-secondary record-btn" data-record="${t.from}|${t.to}|${t.amount}">♧ Record</button></div>`:`${index===1?'<div class="settlement-label">OTHERS IN THIS GROUP</div>':''}<div class="settlement-person">${avatar(person(t.from))}<span>${person(t.from).name}</span><span>→</span>${avatar(person(t.to))}<span>${person(t.to).name}</span></div><div class="settlement-action"><span class="settlement-value">${money(t.amount,currency)}</span><button class="btn btn-secondary record-btn" data-record="${t.from}|${t.to}|${t.amount}">Settle</button></div>`}</div>`).join(''):'<div class="empty-state">Everyone is settled up 🎉</div>';
 document.querySelectorAll('[data-record]').forEach(b=>b.addEventListener('click',()=>{const [from,to,amount]=b.dataset.record.split('|');openSettle(`${from}|${to}`,Number(amount));}));
 $('owedAmount').textContent=money(Math.max(0,bal.alex),currency);
}
function renderSelects(){
 const opts=people.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
 $('expensePayer').innerHTML=opts;$('payerFilter').innerHTML='<option value="all">Everyone</option>'+opts;
 $('settlePair').innerHTML=people.map(a=>people.filter(b=>a.id!==b.id).map(b=>`<option value="${a.id}|${b.id}">${a.name} → ${b.name}</option>`).join('')).join('');
 $('splitMembers').innerHTML=people.map(p=>`<label class="split-chip">${avatar(p)}<span>${p.name}</span><input type="checkbox" value="${p.id}" checked /></label>`).join('');
}
function renderAll(){renderGroups();renderSummary();renderActivity()}
function openDialog(id){$(id).showModal()}
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>$(b.dataset.close).close()));
$('addExpenseBtn').addEventListener('click',()=>{ $('expenseForm').reset();$('expenseDate').value=new Date().toISOString().slice(0,10);$('splitMembers').querySelectorAll('input').forEach(i=>i.checked=true);openDialog('expenseDialog')});
$('expenseForm').addEventListener('submit',e=>{e.preventDefault();const split=[...$('splitMembers').querySelectorAll('input:checked')].map(i=>i.value);if(!split.length){toast('Choose at least one person to split with');return}const amount=Number($('expenseAmount').value);if(amount<=0)return;expenses.unshift({id:Date.now(),name:$('expenseName').value.trim(),amount,currency:$('expenseCurrency').value,payer:$('expensePayer').value,date:$('expenseDate').value,split,kind:'expense',icon:'＋'});$('expenseDialog').close();renderAll();toast('Expense added successfully')});
$('newGroupBtn').addEventListener('click',()=>{ $('groupForm').reset();openDialog('groupDialog')});
$('groupForm').addEventListener('submit',e=>{e.preventDefault();const name=$('newGroupName').value.trim();if(!name)return;const g={id:'g'+Date.now(),name,description:$('newGroupDescription').value.trim()||'A new shared expense group.',balance:0};groups.push(g);activeGroup=g.id;$('groupTitle').textContent=g.name;$('groupDescription').textContent=g.description;$('groupDialog').close();renderGroups();toast('Group created')});
$('settingsBtn').addEventListener('click',()=>{const g=groups.find(g=>g.id===activeGroup);$('settingsName').value=g.name;$('settingsDescription').value=g.description;openDialog('settingsDialog')});
$('settingsForm').addEventListener('submit',e=>{e.preventDefault();const g=groups.find(g=>g.id===activeGroup);g.name=$('settingsName').value.trim();g.description=$('settingsDescription').value.trim();$('groupTitle').textContent=g.name;$('groupDescription').textContent=g.description;$('settingsDialog').close();renderGroups();toast('Group settings saved')});
$('settleUpBtn').addEventListener('click',()=>openSettle());
function openSettle(pair,amount){if(pair)$('settlePair').value=pair;$('settleAmount').value=amount?Number(amount.toFixed(2)):'';openDialog('settleDialog')}
$('settleForm').addEventListener('submit',e=>{e.preventDefault();const [from,to]=$('settlePair').value.split('|');const amount=Number($('settleAmount').value);if(!amount||amount<=0)return;expenses.unshift({id:Date.now(),name:`${person(from).name} paid ${person(to).name}`,amount,currency:'$',payer:from,date:new Date().toISOString().slice(0,10),split:[],kind:'settlement',icon:'♧',from,to});$('settleDialog').close();renderAll();toast('Settlement recorded')});
$('filterToggle').addEventListener('click',()=>$('filterPanel').classList.toggle('hidden'));
$('typeFilter').addEventListener('change',renderActivity);$('payerFilter').addEventListener('change',renderActivity);
$('clearFilters').addEventListener('click',()=>{$('typeFilter').value='all';$('payerFilter').value='all';renderActivity()});
document.querySelectorAll('[data-theme]').forEach(b=>b.addEventListener('click',()=>{document.body.classList.toggle('light',b.dataset.theme==='light');document.querySelectorAll('[data-theme]').forEach(x=>x.classList.toggle('selected',x===b))}));
renderSelects();renderAll();
