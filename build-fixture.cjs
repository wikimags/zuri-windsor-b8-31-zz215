const fs=require('fs');const path=require('path');
const root=__dirname;const weights=[.12,.13,.14,.15,.18,.16,.12];
function split(n){const a=weights.map(w=>Math.floor(n*w));a[6]+=n-a.reduce((x,y)=>x+y,0);return a;}
const creative=[
 ['ZH-PROS','Prospecting - Home Essentials','ZH-C01','Room makeover video',1400,70000,1400,70],
 ['ZH-PROS','Prospecting - Home Essentials','ZH-C02','Storage carousel',700,35000,700,35],
 ['ZH-RET','Retargeting - Product Viewers','ZH-C03','Customer review video',700,28000,700,35],
 ['ZH-RET','Retargeting - Product Viewers','ZH-C04','Free delivery reminder',700,28000,700,35],
 ['ZH-LOY','Returning Customers','ZH-C05','New arrivals image',350,14000,350,35],
 ['ZH-LOY','Returning Customers','ZH-C06','Bundle savings carousel',350,14000,350,35]
];const rows=[];
for(let p=0;p<2;p++)for(const c of creative){const totals=p&&c[2]==='ZH-C01'?[2800,140000,700,14]:c.slice(4);const values=totals.map(split);for(let d=0;d<7;d++){const date=`2026-09-${String(9+p*7+d).padStart(2,'0')}`;const [spend,impressions,clicks,purchases]=values.map(v=>v[d]);rows.push({date,account_id:'zuri_home_b8_31',account_name:'Zuri Home B8-31 Synthetic',platform:'synthetic_paid_social',campaign_id:c[0],campaign_name:c[1],creative_id:c[2],creative_name:c[3],currency:'USD',reporting_timezone:'Africa/Nairobi',attribution_window:'7-day click',spend,impressions,clicks,purchases,revenue:purchases*100,data_status:'complete_test_fixture'});}}
rows.sort((a,b)=>a.date.localeCompare(b.date)||a.creative_id.localeCompare(b.creative_id));
const cols=Object.keys(rows[0]);const quote=v=>'"'+String(v).replaceAll('"','""')+'"';
fs.writeFileSync(path.join(root,'data/creative-daily.csv'),[cols.join(','),...rows.map(r=>cols.map(k=>quote(r[k])).join(','))].join('\n')+'\n');
fs.writeFileSync(path.join(root,'data/creative-daily.json'),JSON.stringify(rows,null,2));
function sum(rs){const s={rows:rs.length};for(const k of ['spend','impressions','clicks','purchases','revenue'])s[k]=rs.reduce((t,r)=>t+r[k],0);s.cpa=s.spend/s.purchases;s.roas=s.revenue/s.spend;return s;}
const validation={baseline:sum(rows.filter(r=>r.date<'2026-09-16')),comparison:sum(rows.filter(r=>r.date>='2026-09-16')),driver:{baseline:sum(rows.filter(r=>r.creative_id==='ZH-C01'&&r.date<'2026-09-16')),comparison:sum(rows.filter(r=>r.creative_id==='ZH-C01'&&r.date>='2026-09-16'))},campaigns:creative.filter((c,i)=>i%2===0).map(c=>({campaign_id:c[0],baseline:sum(rows.filter(r=>r.campaign_id===c[0]&&r.date<'2026-09-16')),comparison:sum(rows.filter(r=>r.campaign_id===c[0]&&r.date>='2026-09-16'))}))};
if(rows.length!==84||new Set(rows.map(r=>r.date+r.creative_id)).size!==84)throw Error('Invalid grain');
if(rows.some(r=>r.purchases>r.clicks||r.clicks>r.impressions))throw Error('Invalid funnel');
fs.writeFileSync(path.join(root,'evidence/expected-calculations.json'),JSON.stringify(validation,null,2));console.log(JSON.stringify(validation));
