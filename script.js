const DEFAULT_ROWS = [
  {"Date":"17-07-2026","Time":"16:30:12","Transaction Details":"Paid to RAJAMOHAMMEDS","Amount":-50,"Tags":"#Groceries","CAT":"Food","SUB CAT":"Fruits","Freq":"Recurring","Avoidable":false},
  {"Date":"17-07-2026","Time":"08:07:35","Transaction Details":"Paid to Jayam And Co","Amount":-500,"Tags":"#Fuel","CAT":"Transport","SUB CAT":"Fuel","Freq":"Recurring","Avoidable":false},
  {"Date":"16-07-2026","Time":"19:05:17","Transaction Details":"Paid to Periyasamy P","Amount":-80,"Tags":"#Groceries","CAT":"Food","SUB CAT":"Fruits","Freq":"Recurring","Avoidable":false},
  {"Date":"16-07-2026","Time":"09:19:54","Transaction Details":"Paid to Chima Lama L","Amount":-300,"Tags":"#Food","CAT":"Food","SUB CAT":"Fruits","Freq":"Recurring","Avoidable":false},
  {"Date":"14-07-2026","Time":"09:46:44","Transaction Details":"Paid to Dhanalakshmi R","Amount":-4000,"Tags":"#Entertainment","CAT":"Hobbies","SUB CAT":"Swimming","Freq":"Non-recurring","Avoidable":false},
  {"Date":"14-07-2026","Time":"08:01:50","Transaction Details":"Paid to Sri Kandha Agency","Amount":-500,"Tags":"#Fuel","CAT":"Transport","SUB CAT":"Fuel","Freq":"Recurring","Avoidable":false},
  {"Date":"13-07-2026","Time":"14:24:15","Transaction Details":"Paid to Ajithkumar Ramesh","Amount":-70,"Tags":"#Food","CAT":"Food","SUB CAT":"Snacks","Freq":"Recurring","Avoidable":false},
  {"Date":"13-07-2026","Time":"14:22:45","Transaction Details":"Paid to Green Chefs","Amount":-65,"Tags":"#Food","CAT":"Food","SUB CAT":"Snacks","Freq":"Recurring","Avoidable":false},
  {"Date":"13-07-2026","Time":"11:22:02","Transaction Details":"Paid to Zerodha Broking Limited","Amount":-2000,"Tags":"#Financial Services","CAT":"Investment","SUB CAT":"Zerodha","Freq":"Recurring","Avoidable":false},
  {"Date":"11-07-2026","Time":"14:29:23","Transaction Details":"Paid to Syed Mubarak","Amount":-50,"Tags":"#Entertainment","CAT":"Food","SUB CAT":"Snacks","Freq":"Recurring","Avoidable":false},
  {"Date":"09-07-2026","Time":"14:05:22","Transaction Details":"Paid to Sermakani T","Amount":-130,"Tags":"#Groceries","CAT":"Food","SUB CAT":"Snacks","Freq":"Recurring","Avoidable":false},
  {"Date":"09-07-2026","Time":"13:33:09","Transaction Details":"Money sent to J Deepaak","Amount":-288,"Tags":"#Money Transfer","CAT":"Food","SUB CAT":"Crescent","Freq":"Recurring","Avoidable":false},
  {"Date":"09-07-2026","Time":"12:38:28","Transaction Details":"Paid to M S Eye One Hospital","Amount":-400,"Tags":"#Medical","CAT":"Health","SUB CAT":"Eye check up","Freq":"Non-recurring","Avoidable":false},
  {"Date":"08-07-2026","Time":"21:38:01","Transaction Details":"Paid to Bhimass Food","Amount":-20,"Tags":"#Food","CAT":"Food","SUB CAT":"Water","Freq":"Recurring","Avoidable":false},
  {"Date":"08-07-2026","Time":"21:05:57","Transaction Details":"Paid to Chennai Metro Rail Ltd","Amount":-24,"Tags":"#Travel","CAT":"Transport","SUB CAT":"Metro","Freq":"Recurring","Avoidable":false},
  {"Date":"08-07-2026","Time":"15:43:18","Transaction Details":"Paid to Roppen Transportation Services Private Limited","Amount":-33,"Tags":"#Taxi","CAT":"Transport","SUB CAT":"Cab","Freq":"Recurring","Avoidable":false},
  {"Date":"08-07-2026","Time":"14:46:16","Transaction Details":"Paid to Sri Gurunath Stores","Amount":-205,"Tags":"#Groceries","CAT":"Food","SUB CAT":"Others","Freq":"Recurring","Avoidable":false},
  {"Date":"08-07-2026","Time":"10:43:29","Transaction Details":"Paid to Nithya Amirtham Indian Food Pvt Ltd Mylapore","Amount":205,"Tags":"#Food","CAT":"Food","SUB CAT":"Nithya Amirtham","Freq":"Recurring","Avoidable":false},
  {"Date":"08-07-2026","Time":"08:56:11","Transaction Details":"Paid to Vijayalakshmi A","Amount":-100,"Tags":"#Miscellaneous","CAT":"Transport","SUB CAT":"Cab","Freq":"Recurring","Avoidable":false},
  {"Date":"08-07-2026","Time":"08:54:09","Transaction Details":"Paid to Roppen Transportation Services Private Limited","Amount":-140,"Tags":"#Taxi","CAT":"Transport","SUB CAT":"Cab","Freq":"Recurring","Avoidable":false},
  {"Date":"08-07-2026","Time":"07:40:03","Transaction Details":"Money sent to Sam Sweetlin A","Amount":-34,"Tags":"#Money Transfer","CAT":"Transport","SUB CAT":"Cab","Freq":"Recurring","Avoidable":false},
  {"Date":"08-07-2026","Time":"06:40:09","Transaction Details":"Paid to Chennai Metro Rail Ltd","Amount":-24,"Tags":"#Travel","CAT":"Transport","SUB CAT":"Metro","Freq":"Recurring","Avoidable":false},
  {"Date":"07-07-2026","Time":"22:30:12","Transaction Details":"Paid to Ixigo","Amount":-6223,"Tags":"#Travel","CAT":"Transport","SUB CAT":"Flight","Freq":"Non-recurring","Avoidable":false},
  {"Date":"07-07-2026","Time":"17:04:19","Transaction Details":"Paid to PUGALENDHIP","Amount":-80,"Tags":"#Shopping","CAT":"Food","SUB CAT":"Snacks","Freq":"Recurring","Avoidable":false},
  {"Date":"07-07-2026","Time":"11:29:49","Transaction Details":"Automatic payment of Udemy","Amount":-546,"Tags":"#Education","CAT":"Hobbies","SUB CAT":"Udemy","Freq":"Non-recurring","Avoidable":false},
  {"Date":"06-07-2026","Time":"13:26:16","Transaction Details":"Paid to Jeevanantham S","Amount":-40,"Tags":"#Miscellaneous","CAT":"Groceries","SUB CAT":"printout","Freq":"Non-recurring","Avoidable":false},
  {"Date":"06-07-2026","Time":"13:16:07","Transaction Details":"Paid to Sports Gallery","Amount":-100,"Tags":"#Shopping","CAT":"Hobbies","SUB CAT":"Shuttle cork","Freq":"Non-recurring","Avoidable":false},
  {"Date":"06-07-2026","Time":"13:07:23","Transaction Details":"Paid to Airtel Payments Bank Limited","Amount":-85.46,"Tags":"#Bill Payments","CAT":"Telecom","SUB CAT":"Airtel","Freq":"Recurring","Avoidable":false},
  {"Date":"06-07-2026","Time":"12:47:34","Transaction Details":"Paid to Pazhamudir Nilayam Counter 5 EDC","Amount":-91,"Tags":"#Groceries","CAT":"Food","SUB CAT":"Fruits","Freq":"Recurring","Avoidable":false},
  {"Date":"06-07-2026","Time":"12:36:33","Transaction Details":"Paid to Thirumurugan Pollution Testing Centre","Amount":-200,"Tags":"#Travel","CAT":"Transport","SUB CAT":"Pollution certificate","Freq":"Non-recurring","Avoidable":false},
  {"Date":"04-07-2026","Time":"14:54:19","Transaction Details":"Paid to KARTHIKEYAN AND Co","Amount":-500,"Tags":"#Fuel","CAT":"Transport","SUB CAT":"Fuel","Freq":"Recurring","Avoidable":false},
  {"Date":"04-07-2026","Time":"08:11:37","Transaction Details":"Paid to Zerodha Broking Ltd","Amount":-1,"Tags":"#Miscellaneous","CAT":"Investment","SUB CAT":"Zerodha","Freq":"Recurring","Avoidable":false},
  {"Date":"02-07-2026","Time":"15:39:43","Transaction Details":"Money sent to Kuttalam Pillai R","Amount":-800,"Tags":"#Money Transfer","CAT":"Transport","SUB CAT":"Car repair","Freq":"Non-recurring","Avoidable":false},
  {"Date":"01-07-2026","Time":"20:22:27","Transaction Details":"Money sent to Yaswanthkumar P","Amount":-115,"Tags":"#Money Transfer","CAT":"Transport","SUB CAT":"Cab","Freq":"Recurring","Avoidable":false},
  {"Date":"01-07-2026","Time":"18:02:22","Transaction Details":"Paid to Thaimann Siruthaniya Unavagam","Amount":-185,"Tags":"#Shopping","CAT":"Food","SUB CAT":"Thaiman","Freq":"Recurring","Avoidable":false},
  {"Date":"01-07-2026","Time":"15:58:02","Transaction Details":"Money sent to Edwin C","Amount":-118,"Tags":"#Money Transfer","CAT":"Transport","SUB CAT":"Cab","Freq":"Recurring","Avoidable":false},
  {"Date":"01-07-2026","Time":"11:14:21","Transaction Details":"Money sent to Kuttalam Pillai R","Amount":-5000,"Tags":"#Money Transfer","CAT":"Transport","SUB CAT":"Car repair","Freq":"Non-recurring","Avoidable":false}
];

(function(){
  "use strict";

  const INR = new Intl.NumberFormat('en-IN', {maximumFractionDigits:0});
  const fmt = n => '₹' + INR.format(Math.round(n));
  const STORAGE_KEY = 'ledger_entries_v1';

  const PALETTE = ['#9c3b34','#3f6b4f','#b8763a','#4a7a8c','#7a5c8a','#5f6b3a','#a8583f','#3a5f6b','#8a6b3a','#6b3a5f','#3a6b52','#6b5a3a'];
  const paletteFor = (i) => PALETTE[i % PALETTE.length];

  let rawRows = [];
  let selectedCategory = null;
  let selectedFreq = null;
  let selectedAvoidable = false;
  let viewMode = 'month'; // 'month' | 'year'
  let selectedMonth = null; // 'YYYY-MM'
  let selectedYear = null;
  let catChart, splitChart, timeChart;

  // ---------- Parsing helpers ----------
  function parseAmount(v){
    if(typeof v === 'number') return v;
    if(!v) return 0;
    const cleaned = String(v).replace(/,/g,'').trim();
    const n = parseFloat(cleaned);
    return isNaN(n) ? 0 : n;
  }
  function parseDate(v){
    if(typeof v === 'string'){
      const m = v.trim().match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
      if(m) return new Date(parseInt(m[3],10), parseInt(m[2],10)-1, parseInt(m[1],10));
      const d2 = new Date(v);
      if(!isNaN(d2)) return d2;
    }
    if(typeof v === 'number'){
      const d = XLSX.SSF.parse_date_code(v);
      if(d) return new Date(d.y, d.m-1, d.d);
    }
    return null;
  }
  function normalize(json){
    return json.map(r => {
      const amount = parseAmount(r['Amount']);
      const date = parseDate(r['Date']);
      const cat = (r['CAT'] || 'Uncategorised').toString().trim();
      const subcat = (r['SUB CAT'] || 'Other').toString().trim();
      const freq = (r['Freq'] || '').toString().trim();
      const avoidableRaw = r['Avoidable'];
      const avoidable = avoidableRaw === true || String(avoidableRaw).trim().toLowerCase() === 'true';
      return {
        date,
        dateKey: date ? isoDay(date) : 'unknown',
        time: (r['Time'] || '').toString().trim(),
        details: r['Transaction Details'] || '',
        amount,
        tags: r['Tags'] || '',
        cat, subcat, freq,
        isRecurring: freq.toLowerCase() === 'recurring',
        avoidable,
        isSpend: amount < 0
      };
    }).filter(r => r.date);
  }
  function isoDay(d){ return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0'); }
  function isoMonth(d){ return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0'); }
  function shortDay(d){ return d.toLocaleDateString('en-IN', {day:'2-digit', month:'short'}); }
  function formatDateStr(d){ return String(d.getDate()).padStart(2,'0') + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + d.getFullYear(); }
  function formatTimeStr(d){ return String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0') + ':' + String(d.getSeconds()).padStart(2,'0'); }

  // ---------- Persistence (no file picking — data lives in this browser by default) ----------
  function loadInitialRows(){
    try{
      const cached = localStorage.getItem(STORAGE_KEY);
      if(cached){
        const parsed = JSON.parse(cached);
        return parsed.map(r => ({...r, date:new Date(r.date)}));
      }
    }catch(e){}
    return normalize(DEFAULT_ROWS);
  }
  function persistRows(){
    try{
      const serializable = rawRows.map(r => ({...r, date:r.date.toISOString()}));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
    }catch(e){}
  }

  rawRows = loadInitialRows();
  persistRows();

  function initPeriod(){
    const months = [...new Set(rawRows.map(r => isoMonth(r.date)))].sort();
    const years = [...new Set(rawRows.map(r => r.date.getFullYear()))].sort((a,b)=>a-b);
    selectedMonth = months.length ? months[months.length-1] : isoMonth(new Date());
    selectedYear = years.length ? years[years.length-1] : new Date().getFullYear();
  }
  initPeriod();

  function inSelectedPeriod(r){
    if(!r.date) return false;
    return viewMode === 'month' ? isoMonth(r.date) === selectedMonth : r.date.getFullYear() === selectedYear;
  }

  function refreshPeriodOptions(){
    const sel = document.getElementById('periodSelect');
    if(viewMode === 'month'){
      const months = [...new Set(rawRows.map(r => isoMonth(r.date)))].sort().reverse();
      if(months.length === 0) months.push(isoMonth(new Date()));
      if(!months.includes(selectedMonth)) selectedMonth = months[0];
      sel.innerHTML = months.map(m => {
        const [y,mm] = m.split('-').map(Number);
        const label = new Date(y, mm-1, 1).toLocaleDateString('en-IN', {month:'long', year:'numeric'});
        return `<option value="${m}"${m===selectedMonth ? ' selected' : ''}>${label}</option>`;
      }).join('');
    } else {
      const years = [...new Set(rawRows.map(r => r.date.getFullYear()))].sort((a,b)=>b-a);
      if(years.length === 0) years.push(new Date().getFullYear());
      if(!years.includes(selectedYear)) selectedYear = years[0];
      sel.innerHTML = years.map(y => `<option value="${y}"${y===selectedYear ? ' selected' : ''}>${y}</option>`).join('');
    }
  }

  document.getElementById('viewModeToggle').addEventListener('click', (e) => {
    const btn = e.target.closest('.pill');
    if(!btn) return;
    viewMode = btn.dataset.val;
    refreshPeriodOptions();
    renderAll();
  });
  document.getElementById('periodSelect').addEventListener('change', (e) => {
    if(viewMode === 'month') selectedMonth = e.target.value;
    else selectedYear = parseInt(e.target.value, 10);
    renderAll();
  });
  refreshPeriodOptions();

  // ---------- Tabs ----------
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      const target = btn.dataset.screen === 'add' ? 'screenAdd' : 'screenDashboard';
      document.getElementById(target).classList.add('active');
      if(target === 'screenAdd') prepareAddForm();
    });
  });
  document.getElementById('viewDashboardBtn').addEventListener('click', () => {
    document.querySelector('.tab[data-screen="dashboard"]').click();
  });

  // ---------- KPI click-to-filter ----------
  const recurringCard = document.getElementById('kpiRecurringCard');
  const nonRecurringCard = document.getElementById('kpiNonRecurringCard');
  const avoidableCard = document.getElementById('kpiAvoidableCard');
  recurringCard.addEventListener('click', () => toggleFreq('Recurring'));
  nonRecurringCard.addEventListener('click', () => toggleFreq('Non-recurring'));
  avoidableCard.addEventListener('click', () => toggleAvoidable());
  [recurringCard, nonRecurringCard, avoidableCard].forEach(el => {
    el.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); el.click(); } });
  });
  function toggleFreq(freq){ selectedFreq = (selectedFreq === freq) ? null : freq; renderAll(); }
  function toggleAvoidable(){ selectedAvoidable = !selectedAvoidable; renderAll(); }

  function currentRows(){
    return rawRows.filter(r =>
      inSelectedPeriod(r) &&
      (!selectedCategory || r.cat === selectedCategory) &&
      (!selectedFreq || (selectedFreq === 'Recurring' ? r.isRecurring : !r.isRecurring)) &&
      (!selectedAvoidable || r.avoidable)
    );
  }
  function baseFilteredRows(){
    return rawRows.filter(r =>
      inSelectedPeriod(r) &&
      (!selectedFreq || (selectedFreq === 'Recurring' ? r.isRecurring : !r.isRecurring)) &&
      (!selectedAvoidable || r.avoidable)
    );
  }

  // ---------- Rendering ----------
  function renderAll(){
    const rows = currentRows();
    renderMeta();
    renderKpis(rows);
    renderCatChart();
    renderSplitChart(rows);
    renderTimeChart(rows);
    renderCrumb();
  }

  function renderMeta(){
    const dates = rawRows.map(r => r.date).filter(Boolean).sort((a,b)=>a-b);
    if(dates.length === 0){ document.getElementById('ledgerMeta').textContent = 'No entries yet'; return; }
    const first = shortDay(dates[0]), last = shortDay(dates[dates.length-1]);
    document.getElementById('ledgerMeta').innerHTML = rawRows.length + ' entries<br>' + first + ' — ' + last;
  }

  function renderKpis(rows){
    const spendRows = rows.filter(r => r.isSpend);
    const total = spendRows.reduce((s,r) => s + Math.abs(r.amount), 0);
    const recurring = spendRows.filter(r => r.isRecurring).reduce((s,r) => s + Math.abs(r.amount), 0);
    const nonRecurring = spendRows.filter(r => !r.isRecurring).reduce((s,r) => s + Math.abs(r.amount), 0);
    const avoidableTotal = spendRows.filter(r => r.avoidable).reduce((s,r) => s + Math.abs(r.amount), 0);

    document.getElementById('kpiTotal').textContent = fmt(total);
    document.getElementById('kpiTotalFoot').textContent = selectedCategory ? selectedCategory.toLowerCase() + ' spend' : 'total spend';
    document.getElementById('kpiRecurring').textContent = fmt(recurring);
    document.getElementById('kpiRecurringSub').textContent = (total ? Math.round(recurring/total*100) : 0) + '% of spend';
    document.getElementById('kpiNonRecurring').textContent = fmt(nonRecurring);
    document.getElementById('kpiNonRecurringSub').textContent = (total ? Math.round(nonRecurring/total*100) : 0) + '% of spend';
    document.getElementById('kpiAvoidable').textContent = fmt(avoidableTotal);
    document.getElementById('kpiAvoidableSub').textContent = (total ? Math.round(avoidableTotal/total*100) : 0) + '% of spend';
    document.getElementById('kpiCount').textContent = rows.length;
    let countSub = [];
    if(selectedCategory) countSub.push('in ' + selectedCategory);
    if(selectedFreq) countSub.push(selectedFreq.toLowerCase());
    if(selectedAvoidable) countSub.push('can be avoided');
    document.getElementById('kpiCountSub').textContent = countSub.length ? countSub.join(' · ') : 'transactions';

    document.getElementById('kpiRecurringCard').classList.toggle('active', selectedFreq === 'Recurring');
    document.getElementById('kpiNonRecurringCard').classList.toggle('active', selectedFreq === 'Non-recurring');
    document.getElementById('kpiAvoidableCard').classList.toggle('active', selectedAvoidable);
  }

  function renderCrumb(){
    const wrap = document.getElementById('crumbWrap');
    wrap.innerHTML = '';
    if(selectedCategory){
      const el = document.createElement('div');
      el.className = 'crumb';
      el.innerHTML = 'Category: ' + selectedCategory + '&nbsp;&nbsp;<span class="x">&times;</span>';
      el.addEventListener('click', () => { selectedCategory = null; renderAll(); });
      wrap.appendChild(el);
    }
    if(selectedFreq){
      const el = document.createElement('div');
      el.className = 'crumb';
      el.innerHTML = 'Type: ' + selectedFreq + '&nbsp;&nbsp;<span class="x">&times;</span>';
      el.addEventListener('click', () => { selectedFreq = null; renderAll(); });
      wrap.appendChild(el);
    }
    if(selectedAvoidable){
      const el = document.createElement('div');
      el.className = 'crumb';
      el.innerHTML = 'Can be avoided only&nbsp;&nbsp;<span class="x">&times;</span>';
      el.addEventListener('click', () => { selectedAvoidable = false; renderAll(); });
      wrap.appendChild(el);
    }
  }

  function renderCatChart(){
    const ctx = document.getElementById('catChart').getContext('2d');
    const title = document.getElementById('catTitle');
    const hint = document.getElementById('catHint');
    let labels, values, onClick, colors;

    if(!selectedCategory){
      title.textContent = 'Spend by category';
      hint.textContent = 'Click a bar to open its sub-categories and filter everything below.';
      const map = {};
      baseFilteredRows().filter(r => r.isSpend).forEach(r => { map[r.cat] = (map[r.cat]||0) + Math.abs(r.amount); });
      const entries = Object.entries(map).sort((a,b) => b[1]-a[1]);
      labels = entries.map(e => e[0]);
      values = entries.map(e => e[1]);
      colors = labels.map((_,i) => paletteFor(i));
      onClick = (idx) => { selectedCategory = labels[idx]; renderAll(); };
    } else {
      title.textContent = selectedCategory + ' — sub-categories';
      hint.textContent = 'Showing sub-categories of ' + selectedCategory + '. Use the chip above to go back.';
      const map = {};
      baseFilteredRows().filter(r => r.isSpend && r.cat === selectedCategory).forEach(r => { map[r.subcat] = (map[r.subcat]||0) + Math.abs(r.amount); });
      const entries = Object.entries(map).sort((a,b) => b[1]-a[1]);
      labels = entries.map(e => e[0]);
      values = entries.map(e => e[1]);
      colors = labels.map((_,i) => paletteFor(i+3));
      onClick = null;
    }

    if(catChart) catChart.destroy();
    catChart = new Chart(ctx, {
      type:'bar',
      data:{ labels, datasets:[{ data:values, backgroundColor:colors, borderRadius:3, maxBarThickness:38 }] },
      options:{
        indexAxis:'y',
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
          legend:{display:false},
          tooltip:{
            backgroundColor:'#21301f',
            titleFont:{family:'IBM Plex Mono'},
            bodyFont:{family:'IBM Plex Mono'},
            callbacks:{ label:(c) => ' ' + fmt(c.parsed.x) }
          }
        },
        scales:{
          x:{ ticks:{ font:{family:'IBM Plex Mono', size:11}, callback:(v)=>fmt(v) }, grid:{color:'#dcd0ac'} },
          y:{ ticks:{ font:{family:'Inter', size:12} }, grid:{display:false} }
        },
        onClick:(evt, elements) => { if(!onClick || !elements.length) return; onClick(elements[0].index); },
        onHover:(evt, elements) => { evt.native.target.style.cursor = (onClick && elements.length) ? 'pointer' : 'default'; }
      }
    });
  }

  function renderSplitChart(rows){
    const spendRows = rows.filter(r => r.isSpend);
    const recurring = spendRows.filter(r => r.isRecurring).reduce((s,r) => s + Math.abs(r.amount), 0);
    const nonRecurring = spendRows.filter(r => !r.isRecurring).reduce((s,r) => s + Math.abs(r.amount), 0);
    document.getElementById('splitTitle').textContent = selectedCategory ? 'Recurring vs. non-recurring — ' + selectedCategory : 'Recurring vs. non-recurring';

    const ctx = document.getElementById('splitChart').getContext('2d');
    if(splitChart) splitChart.destroy();
    splitChart = new Chart(ctx, {
      type:'doughnut',
      data:{
        labels:['Recurring','Non-recurring'],
        datasets:[{
          data:[recurring, nonRecurring],
          backgroundColor:['#3f6b4f','#b8763a'],
          borderColor:'#f5efe0',
          borderWidth:3,
          offset:[selectedFreq === 'Recurring' ? 14 : 0, selectedFreq === 'Non-recurring' ? 14 : 0]
        }]
      },
      options:{
        responsive:true,
        maintainAspectRatio:false,
        cutout:'62%',
        plugins:{
          legend:{ position:'bottom', labels:{ font:{family:'Inter', size:12}, color:'#21301f', boxWidth:10 } },
          tooltip:{
            backgroundColor:'#21301f',
            bodyFont:{family:'IBM Plex Mono'},
            callbacks:{ label:(c) => ' ' + c.label + ': ' + fmt(c.parsed) }
          }
        },
        onClick:(evt, elements) => { if(!elements.length) return; toggleFreq(['Recurring','Non-recurring'][elements[0].index]); },
        onHover:(evt, elements) => { evt.native.target.style.cursor = elements.length ? 'pointer' : 'default'; }
      }
    });
  }

  const weekendBandPlugin = {
    id:'weekendBands',
    beforeDatasetsDraw(chart){
      const {ctx, chartArea, scales} = chart;
      const xScale = scales.x;
      const meta = chart.$weekendDates;
      if(!meta || !chartArea) return;
      ctx.save();
      meta.forEach((isWeekend, idx) => {
        if(!isWeekend) return;
        const x0 = xScale.getPixelForValue(idx) - (xScale.width / meta.length)/2;
        const x1 = xScale.getPixelForValue(idx) + (xScale.width / meta.length)/2;
        ctx.fillStyle = 'rgba(216,203,163,0.45)';
        ctx.fillRect(x0, chartArea.top, x1-x0, chartArea.bottom - chartArea.top);
      });
      ctx.restore();
    }
  };

  function renderTimeChart(rows){
    document.getElementById('weekendLegend').style.display = viewMode === 'year' ? 'none' : 'inline';
    if(viewMode === 'year') renderTimeChartYearly(rows);
    else renderTimeChartDaily(rows);
  }

  function renderTimeChartDaily(rows){
    document.getElementById('timeTitle').textContent = selectedCategory ? 'Spend over time — ' + selectedCategory : 'Spend over time';

    const byDay = {}, countByDay = {};
    rows.filter(r => r.isSpend).forEach(r => {
      byDay[r.dateKey] = (byDay[r.dateKey] || 0) + Math.abs(r.amount);
      countByDay[r.dateKey] = (countByDay[r.dateKey] || 0) + 1;
    });
    const days = Object.keys(byDay).sort();
    const dayObjs = days.map(k => { const [y,m,d] = k.split('-').map(Number); return new Date(y, m-1, d); });
    const labels = dayObjs.map(shortDay);
    const values = days.map(k => byDay[k]);
    const counts = days.map(k => countByDay[k]);
    const isWeekend = dayObjs.map(d => d.getDay() === 0 || d.getDay() === 6);
    const fullDates = dayObjs.map(d => d.toLocaleDateString('en-IN', {weekday:'long', day:'numeric', month:'long', year:'numeric'}));

    const ctx = document.getElementById('timeChart').getContext('2d');
    if(timeChart) timeChart.destroy();
    timeChart = new Chart(ctx, {
      type:'line',
      data:{ labels, datasets:[{
        data:values, borderColor:'#9c3b34', backgroundColor:'rgba(156,59,52,0.12)',
        pointBackgroundColor:'#9c3b34', pointRadius:3, pointHoverRadius:5, tension:0.25, fill:true, borderWidth:2
      }]},
      options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
          legend:{display:false},
          tooltip:{
            enabled:true, mode:'index', intersect:false,
            backgroundColor:'#21301f',
            titleFont:{family:'IBM Plex Mono', size:12, weight:'600'},
            bodyFont:{family:'IBM Plex Mono', size:12},
            footerFont:{family:'Inter', size:11, style:'italic'},
            padding:12, cornerRadius:4, displayColors:false,
            callbacks:{
              title:(items) => fullDates[items[0].dataIndex],
              label:(c) => 'Spent: ' + fmt(c.parsed.y),
              afterLabel:(c) => counts[c.dataIndex] + ' transaction' + (counts[c.dataIndex] === 1 ? '' : 's'),
              footer:(items) => isWeekend[items[0].dataIndex] ? 'Weekend' : null
            }
          }
        },
        interaction:{ mode:'index', intersect:false },
        scales:{
          x:{ ticks:{ font:{family:'IBM Plex Mono', size:11}, maxRotation:60, minRotation:0 }, grid:{display:false} },
          y:{ ticks:{ font:{family:'IBM Plex Mono', size:11}, callback:(v)=>fmt(v) }, grid:{color:'#dcd0ac'} }
        }
      },
      plugins:[weekendBandPlugin]
    });
    timeChart.$weekendDates = isWeekend;
    timeChart.update();
  }

  function renderTimeChartYearly(rows){
    document.getElementById('timeTitle').textContent =
      (selectedCategory ? 'Spend over the year — ' + selectedCategory : 'Spend over the year') + ' · ' + selectedYear;

    const byMonth = new Array(12).fill(0);
    const countByMonth = new Array(12).fill(0);
    rows.filter(r => r.isSpend).forEach(r => {
      const mi = r.date.getMonth();
      byMonth[mi] += Math.abs(r.amount);
      countByMonth[mi] += 1;
    });
    const monthNames = Array.from({length:12}, (_,i) => new Date(selectedYear, i, 1).toLocaleDateString('en-IN', {month:'short'}));

    const ctx = document.getElementById('timeChart').getContext('2d');
    if(timeChart) timeChart.destroy();
    timeChart = new Chart(ctx, {
      type:'line',
      data:{ labels:monthNames, datasets:[{
        data:byMonth, borderColor:'#9c3b34', backgroundColor:'rgba(156,59,52,0.12)',
        pointBackgroundColor:'#9c3b34', pointRadius:4, pointHoverRadius:6, tension:0.3, fill:true, borderWidth:2
      }]},
      options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
          legend:{display:false},
          tooltip:{
            backgroundColor:'#21301f',
            titleFont:{family:'IBM Plex Mono', size:12, weight:'600'},
            bodyFont:{family:'IBM Plex Mono', size:12},
            footerFont:{family:'Inter', size:11, style:'italic'},
            padding:12, cornerRadius:4, displayColors:false,
            callbacks:{
              title:(items) => monthNames[items[0].dataIndex] + ' ' + selectedYear,
              label:(c) => 'Spent: ' + fmt(c.parsed.y),
              afterLabel:(c) => countByMonth[c.dataIndex] + ' transaction' + (countByMonth[c.dataIndex] === 1 ? '' : 's')
            }
          }
        },
        interaction:{ mode:'index', intersect:false },
        scales:{
          x:{ ticks:{ font:{family:'IBM Plex Mono', size:11} }, grid:{display:false} },
          y:{ ticks:{ font:{family:'IBM Plex Mono', size:11}, callback:(v)=>fmt(v) }, grid:{color:'#dcd0ac'} }
        }
      }
    });
  }

  // ---------- Export to Excel (on demand) ----------
  document.getElementById('exportBtn').addEventListener('click', () => {
    const headers = ['Date','Time','Transaction Details','Amount','Tags','CAT','SUB CAT','Freq','Avoidable'];
    const sorted = rawRows.slice().sort((a,b) => b.date - a.date || String(b.time).localeCompare(String(a.time)));
    const exportRows = sorted.map(r => ({
      'Date': formatDateStr(r.date), 'Time': r.time || '', 'Transaction Details': r.details,
      'Amount': r.amount, 'Tags': r.tags, 'CAT': r.cat, 'SUB CAT': r.subcat, 'Freq': r.freq,
      'Avoidable': r.avoidable ? 'TRUE' : 'FALSE'
    }));
    const ws = XLSX.utils.json_to_sheet(exportRows, {header:headers});
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Transactions');
    XLSX.writeFile(wb, 'ledger-export.xlsx');
    showToast('Downloaded ledger-export.xlsx');
  });

  // ---------- Toast ----------
  let toastTimer;
  function showToast(msg){
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
  }

  // ---------- Add Expense form ----------
  const entryForm = document.getElementById('entryForm');
  const fCatSel = document.getElementById('fCat');
  const fCatNewInp = document.getElementById('fCatNew');
  const fSubcatSel = document.getElementById('fSubcat');
  const fSubcatNewInp = document.getElementById('fSubcatNew');
  const fTypeToggle = document.getElementById('fTypeToggle');
  const fFreqToggle = document.getElementById('fFreqToggle');
  const fAvoidableToggle = document.getElementById('fAvoidableToggle');

  function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function uniqueCats(){ return [...new Set(rawRows.map(r => r.cat))].filter(Boolean).sort(); }
  function uniqueSubcats(cat){ return [...new Set(rawRows.filter(r => r.cat === cat).map(r => r.subcat))].filter(Boolean).sort(); }

  function populateSubcatOptions(cat){
    fSubcatNewInp.style.display = 'none';
    if(!cat){
      fSubcatSel.innerHTML = '<option value="__new__">+ New sub-category…</option>';
      fSubcatNewInp.style.display = 'block';
      return;
    }
    const subs = uniqueSubcats(cat);
    fSubcatSel.innerHTML = subs.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('') +
      '<option value="__new__">+ New sub-category…</option>';
  }
  function refreshCategoryOptions(){
    const cats = uniqueCats();
    fCatSel.innerHTML = cats.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('') +
      '<option value="__new__">+ New category…</option>';
    fCatNewInp.style.display = 'none';
    populateSubcatOptions(cats[0] || null);
  }
  fCatSel.addEventListener('change', () => {
    const isNew = fCatSel.value === '__new__';
    fCatNewInp.style.display = isNew ? 'block' : 'none';
    populateSubcatOptions(isNew ? null : fCatSel.value);
  });
  fSubcatSel.addEventListener('change', () => {
    fSubcatNewInp.style.display = fSubcatSel.value === '__new__' ? 'block' : 'none';
  });
  document.querySelectorAll('.pill-toggle').forEach(group => {
    group.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill');
      if(!btn) return;
      group.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  function prepareAddForm(){
    refreshCategoryOptions();
    const now = new Date();
    document.getElementById('fDate').value = isoDay(now);
    document.getElementById('fTime').value = formatTimeStr(now);
  }

  entryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const details = document.getElementById('fDetails').value.trim();
    const amountRaw = parseFloat(document.getElementById('fAmount').value);
    if(!details || !amountRaw || amountRaw <= 0) return;

    const type = fTypeToggle.querySelector('.pill.active').dataset.val;
    const amount = type === 'spend' ? -Math.abs(amountRaw) : Math.abs(amountRaw);

    let cat = fCatSel.value === '__new__' ? fCatNewInp.value.trim() : fCatSel.value;
    let subcat = (fCatSel.value === '__new__' || fSubcatSel.value === '__new__') ? fSubcatNewInp.value.trim() : fSubcatSel.value;
    if(!cat || !subcat) return;

    const freq = fFreqToggle.querySelector('.pill.active').dataset.val;
    const avoidable = fAvoidableToggle.querySelector('.pill.active').dataset.val === 'yes';
    const tags = document.getElementById('fTags').value.trim();

    const dateVal = document.getElementById('fDate').value;
    const [y,m,d] = dateVal ? dateVal.split('-').map(Number) : [null,null,null];
    const date = y ? new Date(y, m-1, d) : new Date();
    const time = document.getElementById('fTime').value || formatTimeStr(new Date());

    rawRows.push({
      date, dateKey:isoDay(date), time, details, amount, tags, cat, subcat, freq,
      isRecurring: freq === 'Recurring', avoidable, isSpend: amount < 0
    });
    persistRows();
    selectedCategory = null;
    selectedFreq = null;
    selectedMonth = isoMonth(date);
    selectedYear = date.getFullYear();
    refreshPeriodOptions();
    renderAll();

    showToast((type === 'spend' ? 'Added ' + fmt(Math.abs(amount)) + ' → ' : 'Added ' + fmt(Math.abs(amount)) + ' received → ') + cat + ' / ' + subcat);

    entryForm.reset();
    document.querySelectorAll('.pill-toggle').forEach(g => g.querySelectorAll('.pill').forEach((p,i) => p.classList.toggle('active', i === 0)));
    prepareAddForm();
    document.getElementById('fDetails').focus();
  });

  // ---------- Init ----------
  renderAll();

})();