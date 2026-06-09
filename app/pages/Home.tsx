import { ArrowRight, Package, BarChart3, Truck, Store, RotateCcw, ShieldCheck, Bot, MapPin, Layers } from 'lucide-react';

const LOGO = 'https://byzjsafupehesiwbqkxt.supabase.co/storage/v1/object/public/brand-assets/deryv-logo.png';

const features = [
  { id:'lot', icon:Package, title:'LOT Intake', desc:'Upload manifests, create LOTs, and track purchase cost, freight, pallet count, vendor, and funding partner. Review before committing inventory.', points:['Upload vendor manifests','Track purchase cost & freight','Vendor & funding partner tracking','Review before committing'] },
  { id:'inv', icon:Layers, title:'Inventory Management', desc:'Track every item from intake to sale. Generate QR and barcode labels. Track condition, status, cost basis, MSRP, and recovery.', points:['Item-level tracking intake to sale','QR & barcode label generation','Condition and status management','Cost basis & MSRP tracking'] },
  { id:'wh', icon:MapPin, title:'Warehouse Operations', desc:'Manage locations, zones, racks, shelves, and bins. Scan items with QR or barcode. Move inventory with full audit history.', points:['Multi-zone location structure','QR/barcode scan to move','Full audit trail of movements','Bin-level precision'] },
  { id:'mkt', icon:Store, title:'Marketplace Listing', desc:'Create marketplace listing drafts and sync to eBay and Shopify when connected. deryv remains the inventory source of truth.', points:['Draft listings from inventory','Sync to eBay & Shopify','deryv as source of truth','Order import & fulfillment'] },
  { id:'ship', icon:Truck, title:'Shipping Operations', desc:'ShipStation-powered rates and labels. Scan to pack, print or reprint labels, and save tracking and shipping cost back into deryv.', points:['ShipStation rate shopping','Scan-to-pack workflow','Print & reprint labels','Tracking & cost saved automatically'] },
  { id:'ret', icon:RotateCcw, title:'Returns Processing', desc:'Track returns, reinspect inventory, and route items back to stock, repair, scrap, or vendor claim.', points:['Return intake & tracking','Reinspection workflow','Route to stock, repair, or scrap','Vendor claim support'] },
  { id:'rep', icon:BarChart3, title:'Reports', desc:'Inventory valuation, COGS, recovery analysis, sales summaries, shipping cost summaries, and supply and component usage.', points:['Inventory valuation report','COGS & recovery analysis','Sales & shipping summaries','Supply & component usage'] },
  { id:'ai', icon:Bot, title:'AI Ops', desc:'Listing draft assistance, manifest review, pricing explanation, and an operational assistant — built into deryv. No OpenAI account required.', points:['Listing draft assistance','Manifest review assistance','Pricing explanation','Built-in — no OpenAI setup required'] },
];

const integrations = [
  { name:'eBay', desc:'List, sync, import orders, and update fulfillment.' },
  { name:'Shopify', desc:'Manage product/listing workflows, import orders, sync inventory, and update fulfillment.' },
  { name:'ShipStation', desc:'Get rates, create labels, print/reprint labels, and save tracking back into deryv.' },
  { name:'QuickBooks', desc:'Export operational accounting reports — inventory valuation, COGS, shipping cost summaries, and sales summaries.' },
];

const security = [
  { t:'Multi-tenant Architecture', d:"Every organization's data is isolated. No cross-tenant data exposure." },
  { t:'Role-Based Access', d:'Admin, manager, warehouse, accounting, and viewer roles with scoped permissions.' },
  { t:'Secure Cloud Infrastructure', d:'Hosted on enterprise-grade cloud infrastructure with automatic security updates.' },
  { t:'Server-Side Credentials', d:'Integration credentials are stored and used server-side. Never exposed to the browser.' },
  { t:'Organization-Scoped Data', d:'All queries and operations are scoped to the authenticated organization.' },
  { t:'Audit Logs', d:'Operational actions are logged with user, timestamp, and context.' },
];

export default function Home() {
  return (
    <div style={{fontFamily:'-apple-system,BlinkMacSystemFont,"Inter","Segoe UI",sans-serif'}}>
      {/* Hero */}
      <section style={{background:'#fff',padding:'96px 0 64px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,padding:'4px 12px',borderRadius:99,border:'1px solid rgba(0,0,0,0.08)',background:'#ECFDF5',marginBottom:32}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'#3ECF8E',flexShrink:0}}></span>
            <span style={{fontSize:12,fontWeight:500,color:'#3ECF8E'}}>Now in BETA</span>
          </div>
          <h1 style={{fontSize:'clamp(36px,5vw,60px)',fontWeight:700,lineHeight:1.15,letterSpacing:'-0.02em',color:'#111827',marginBottom:24,maxWidth:800}}>
            Warehouse Operations.<br/>Inventory Intelligence.<br/><span style={{color:'#3ECF8E'}}>Marketplace Automation.</span>
          </h1>
          <p style={{fontSize:18,color:'#6B7280',lineHeight:1.7,maxWidth:640,marginBottom:40}}>
            deryv gives resale, liquidation, fulfillment, and warehouse teams one system to intake LOTs, track inventory, manage warehouse movement, create marketplace listings, ship orders, process returns, and understand true cost basis.
          </p>
          <div style={{display:'flex',flexWrap:'wrap',gap:12}}>
            <a href="https://app.deryvOS.com" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:8,background:'#3ECF8E',color:'#fff',fontWeight:600,fontSize:14,textDecoration:'none'}}>
              Launch App <ArrowRight size={16}/>
            </a>
            <a href="/contact" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:8,border:'1px solid rgba(0,0,0,0.08)',background:'#fff',color:'#111827',fontWeight:600,fontSize:14,textDecoration:'none'}}>
              Request Access
            </a>
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section style={{background:'#fff',paddingBottom:80}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <div style={{borderRadius:12,border:'1px solid rgba(0,0,0,0.08)',overflow:'hidden',background:'#F9FAFB'}}>
            <div style={{background:'#fff',borderBottom:'1px solid rgba(0,0,0,0.08)',padding:'12px 16px',display:'flex',alignItems:'center',gap:8}}>
              <span style={{width:12,height:12,borderRadius:'50%',background:'#FCA5A5',display:'block'}}></span>
              <span style={{width:12,height:12,borderRadius:'50%',background:'#FCD34D',display:'block'}}></span>
              <span style={{width:12,height:12,borderRadius:'50%',background:'#6EE7B7',display:'block'}}></span>
              <span style={{marginLeft:12,fontSize:12,color:'#9CA3AF',fontFamily:'monospace'}}>app.deryvOS.com</span>
            </div>
            <div style={{padding:24}}>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:12,marginBottom:12}}>
                {[{l:'Command Center',i:'⚡',v:'Operations Hub',s:'Live status dashboard'},{l:'LOT Intake',i:'📦',v:'47 Active LOTs',s:'$284,000 inventory cost'},{l:'Inventory',i:'🗃️',v:'2,847 Items',s:'94.2% tracked'},{l:'Shipping',i:'🚚',v:'128 Labels',s:'This month'}].map(c=>(
                  <div key={c.l} style={{background:'#fff',borderRadius:8,padding:16,border:'1px solid rgba(0,0,0,0.08)'}}>
                    <div style={{fontSize:24,marginBottom:8}}>{c.i}</div>
                    <div style={{fontSize:11,fontWeight:500,color:'#9CA3AF',marginBottom:4,textTransform:'uppercase',letterSpacing:'0.05em'}}>{c.l}</div>
                    <div style={{fontSize:14,fontWeight:600,color:'#111827'}}>{c.v}</div>
                    <div style={{fontSize:12,color:'#9CA3AF',marginTop:2}}>{c.s}</div>
                  </div>
                ))}
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:12}}>
                {[{l:'Recovery Rate',v:'68.4%',t:'+2.1% vs last month'},{l:'Avg Cost Basis',v:'$12.40',t:'-$0.80 vs last month'},{l:'Marketplace Orders',v:'312',t:'+18 this week'}].map(s=>(
                  <div key={s.l} style={{background:'#fff',borderRadius:8,padding:16,border:'1px solid rgba(0,0,0,0.08)'}}>
                    <div style={{fontSize:11,fontWeight:500,color:'#9CA3AF',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:4}}>{s.l}</div>
                    <div style={{fontSize:28,fontWeight:700,color:'#111827'}}>{s.v}</div>
                    <div style={{fontSize:12,color:'#3ECF8E',marginTop:4}}>{s.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{padding:'80px 0',borderTop:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <h2 style={{fontSize:'clamp(28px,4vw,40px)',fontWeight:700,letterSpacing:'-0.02em',color:'#111827',marginBottom:12}}>Everything your warehouse operation needs</h2>
          <p style={{fontSize:17,color:'#6B7280',maxWidth:600,marginBottom:48,lineHeight:1.6}}>Built for modern resale, liquidation, fulfillment, and warehouse businesses that need one operational system.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:16}}>
            {features.map(f=>{
              const Icon = f.icon;
              return (
                <div key={f.id} style={{background:'#fff',border:'1px solid rgba(0,0,0,0.08)',borderRadius:12,padding:24}}>
                  <div style={{width:40,height:40,borderRadius:8,background:'#ECFDF5',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16}}>
                    <Icon size={20} color="#3ECF8E"/>
                  </div>
                  <h3 style={{fontSize:15,fontWeight:600,color:'#111827',marginBottom:8}}>{f.title}</h3>
                  <p style={{fontSize:13,color:'#6B7280',lineHeight:1.6,marginBottom:12}}>{f.desc}</p>
                  <ul style={{listStyle:'none',padding:0,margin:0}}>
                    {f.points.map(p=>(
                      <li key={p} style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:12,color:'#6B7280',marginBottom:4}}>
                        <span style={{width:4,height:4,borderRadius:'50%',background:'#3ECF8E',flexShrink:0,marginTop:5}}></span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" style={{padding:'80px 0',borderTop:'1px solid rgba(0,0,0,0.08)',background:'#F9FAFB'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <h2 style={{fontSize:'clamp(28px,4vw,40px)',fontWeight:700,letterSpacing:'-0.02em',color:'#111827',marginBottom:12}}>Integrates with the tools you use</h2>
          <p style={{fontSize:17,color:'#6B7280',maxWidth:600,marginBottom:48,lineHeight:1.6}}>deryv connects with your marketplace, shipping, and accounting platforms. deryv is the operational source of truth — your integrations extend that data outward.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:16}}>
            {integrations.map(i=>(
              <div key={i.name} style={{background:'#fff',border:'1px solid rgba(0,0,0,0.08)',borderRadius:12,padding:24}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
                  <span style={{fontSize:20,fontWeight:700,color:'#111827'}}>{i.name}</span>
                  <span style={{fontSize:11,fontWeight:600,padding:'2px 8px',borderRadius:99,background:'#ECFDF5',color:'#3ECF8E'}}>BETA</span>
                </div>
                <p style={{fontSize:13,color:'#6B7280',lineHeight:1.6}}>{i.desc}</p>
              </div>
            ))}
          </div>
          <p style={{marginTop:24,fontSize:13,color:'#9CA3AF'}}>deryv integrates with these platforms. Integrations listed are not official partnerships.</p>
        </div>
      </section>

      {/* Security */}
      <section id="security" style={{padding:'80px 0',borderTop:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:16}}>
            <ShieldCheck size={18} color="#3ECF8E"/>
            <span style={{fontSize:13,fontWeight:500,color:'#3ECF8E'}}>Security & Trust</span>
          </div>
          <h2 style={{fontSize:'clamp(28px,4vw,40px)',fontWeight:700,letterSpacing:'-0.02em',color:'#111827',marginBottom:12}}>Built for business data you can trust</h2>
          <p style={{fontSize:17,color:'#6B7280',maxWidth:600,marginBottom:48,lineHeight:1.6}}>deryv is designed with security and data integrity at its core.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:16}}>
            {security.map(s=>(
              <div key={s.t} style={{background:'#fff',border:'1px solid rgba(0,0,0,0.08)',borderRadius:12,padding:24,display:'flex',gap:12}}>
                <div style={{width:32,height:32,borderRadius:8,background:'#ECFDF5',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <ShieldCheck size={16} color="#3ECF8E"/>
                </div>
                <div>
                  <h3 style={{fontSize:14,fontWeight:600,color:'#111827',marginBottom:4}}>{s.t}</h3>
                  <p style={{fontSize:13,color:'#6B7280',lineHeight:1.6}}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'80px 0',borderTop:'1px solid rgba(0,0,0,0.08)',background:'#F9FAFB',textAlign:'center'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <h2 style={{fontSize:'clamp(28px,4vw,40px)',fontWeight:700,letterSpacing:'-0.02em',color:'#111827',marginBottom:16}}>One system. Your whole operation.</h2>
          <p style={{fontSize:17,color:'#6B7280',maxWidth:480,margin:'0 auto 40px',lineHeight:1.6}}>Get started with deryv today and bring your warehouse, inventory, and marketplace workflows into one place.</p>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:12}}>
            <a href="https://app.deryvOS.com" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:8,background:'#3ECF8E',color:'#fff',fontWeight:600,fontSize:14,textDecoration:'none'}}>
              Launch App <ArrowRight size={16}/>
            </a>
            <a href="/contact" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:8,border:'1px solid rgba(0,0,0,0.08)',background:'#fff',color:'#111827',fontWeight:600,fontSize:14,textDecoration:'none'}}>
              Request Access
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}