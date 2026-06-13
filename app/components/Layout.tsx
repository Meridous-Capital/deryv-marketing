import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const LOGO = 'https://byzjsafupehesiwbqkxt.supabase.co/storage/v1/object/public/brand-assets/deryv-logo.png';

const NAV_LINKS = [
  {href:'/#features',label:'Features'},
  {href:'/#integrations',label:'Integrations'},
  {href:'/#security',label:'Security'},
  {href:'/contact',label:'Contact'},
];

function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header style={{position:'sticky',top:0,zIndex:50,background:'#fff',borderBottom:'1px solid rgba(0,0,0,0.08)',fontFamily:'-apple-system,BlinkMacSystemFont,"Inter","Segoe UI",sans-serif'}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',height:64,display:'flex',alignItems:'center',justifyContent:'space-between',gap:24}}>
        <Link to="/" style={{display:'flex',alignItems:'center',textDecoration:'none',flexShrink:0}}>
          <img src={LOGO} alt="deryv" style={{height:30,width:'auto'}}/>
        </Link>

        <nav className="deryv-desktop-nav" style={{display:'flex',alignItems:'center',gap:24,flex:1,justifyContent:'center'}}>
          {NAV_LINKS.map(l=>(
            <a key={l.href} href={l.href} style={{fontSize:14,fontWeight:500,color:'#6B7280',textDecoration:'none',transition:'color 0.15s'}}
              onMouseEnter={e=>(e.currentTarget.style.color='#111827')}
              onMouseLeave={e=>(e.currentTarget.style.color='#6B7280')}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="deryv-desktop-actions" style={{display:'flex',alignItems:'center',gap:12,flexShrink:0}}>
          <a href="/contact" style={{fontSize:14,fontWeight:500,color:'#6B7280',textDecoration:'none'}}>Request Access</a>
          <a href="https://app.deryvOS.com" style={{display:'inline-flex',alignItems:'center',padding:'8px 18px',borderRadius:8,background:'#3ECF8E',color:'#fff',fontWeight:600,fontSize:14,textDecoration:'none'}}>
            Launch App
          </a>
        </div>

        <button
          className="deryv-menu-btn"
          aria-label="Toggle menu"
          onClick={()=>setOpen(o=>!o)}
          style={{display:'none',background:'none',border:'none',padding:8,cursor:'pointer',flexShrink:0}}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="deryv-mobile-menu" style={{borderTop:'1px solid rgba(0,0,0,0.08)',padding:'8px 24px 16px',display:'flex',flexDirection:'column',gap:4}}>
          {NAV_LINKS.map(l=>(
            <a key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{fontSize:15,fontWeight:500,color:'#374151',textDecoration:'none',padding:'10px 0'}}>
              {l.label}
            </a>
          ))}
          <a href="/contact" onClick={()=>setOpen(false)} style={{fontSize:15,fontWeight:500,color:'#374151',textDecoration:'none',padding:'10px 0'}}>Request Access</a>
          <a href="https://app.deryvOS.com" onClick={()=>setOpen(false)} style={{display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'12px 18px',borderRadius:8,background:'#3ECF8E',color:'#fff',fontWeight:600,fontSize:15,textDecoration:'none',marginTop:8}}>
            Launch App
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .deryv-desktop-nav, .deryv-desktop-actions { display: none !important; }
          .deryv-menu-btn { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{borderTop:'1px solid rgba(0,0,0,0.08)',fontFamily:'-apple-system,BlinkMacSystemFont,"Inter","Segoe UI",sans-serif'}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'64px 24px 48px'}}>
        <div className="deryv-footer-grid" style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:40,marginBottom:48}}>
          <div>
            <img src={LOGO} alt="deryv" style={{height:26,width:'auto',marginBottom:12}}/>
            <p style={{fontSize:13,color:'#9CA3AF',maxWidth:260,lineHeight:1.6,margin:0}}>
              Operational system for resale, liquidation, fulfillment, and warehouse businesses.
            </p>
          </div>
          <div>
            <h4 style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em',color:'#9CA3AF',marginBottom:12,marginTop:0}}>Product</h4>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {[{h:'/#features',l:'Features'},{h:'/#integrations',l:'Integrations'},{h:'/#security',l:'Security'},{h:'https://app.deryvOS.com',l:'Launch App'}].map(i=>(
                <a key={i.l} href={i.h} style={{fontSize:13,color:'#6B7280',textDecoration:'none'}}>{i.l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em',color:'#9CA3AF',marginBottom:12,marginTop:0}}>Company</h4>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <Link to="/contact" style={{fontSize:13,color:'#6B7280',textDecoration:'none'}}>Contact</Link>
              <a href="/contact" style={{fontSize:13,color:'#6B7280',textDecoration:'none'}}>Request Access</a>
            </div>
          </div>
          <div>
            <h4 style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em',color:'#9CA3AF',marginBottom:12,marginTop:0}}>Legal</h4>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <Link to="/privacy" style={{fontSize:13,color:'#6B7280',textDecoration:'none'}}>Privacy Policy</Link>
              <Link to="/terms" style={{fontSize:13,color:'#6B7280',textDecoration:'none'}}>Terms of Service</Link>
            </div>
          </div>
        </div>
        <div style={{borderTop:'1px solid rgba(0,0,0,0.08)',paddingTop:24,display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
          <p style={{fontSize:13,color:'#9CA3AF',margin:0}}>© {new Date().getFullYear()} deryv. All rights reserved.</p>
          <div style={{display:'flex',gap:16}}>
            <Link to="/privacy" style={{fontSize:13,color:'#9CA3AF',textDecoration:'none'}}>Privacy</Link>
            <Link to="/terms" style={{fontSize:13,color:'#9CA3AF',textDecoration:'none'}}>Terms</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .deryv-footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .deryv-footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',background:'#fff',color:'#111827'}}>
      <Header/>
      <main style={{flex:1}}>{children}</main>
      <Footer/>
    </div>
  );
}
