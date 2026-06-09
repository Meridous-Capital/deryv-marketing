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

        <nav style={{display:'flex',alignItems:'center',gap:24,flex:1,justifyContent:'center'}}>
          {NAV_LINKS.map(l=>(
            <a key={l.href} href={l.href} style={{fontSize:14,fontWeight:500,color:'#6B7280',textDecoration:'none',transition:'color 0.15s'}}
              onMouseEnter={e=>(e.currentTarget.style.color='#111827')}
              onMouseLeave={e=>(e.currentTarget.style.color='#6B7280')}>
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{display:'flex',alignItems:'center',gap:12,flexShrink:0}}>
          <a href="/contact" style={{fontSize:14,fontWeight:500,color:'#6B7280',textDecoration:'none'}}>Request Access</a>
          <a href="https://app.deryvOS.com" style={{display:'inline-flex',alignItems:'center',padding:'8px 18px',borderRadius:8,background:'#3ECF8E',color:'#fff',fontWeight:600,fontSize:14,textDecoration:'none'}}>
            Launch App
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{borderTop:'1px solid rgba(0,0,0,0.08)',fontFamily:'-apple-system,BlinkMacSystemFont,"Inter","Segoe UI",sans-serif'}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'64px 24px 48px'}}>
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:40,marginBottom:48}}>
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