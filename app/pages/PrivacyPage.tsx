const S = {fontSize:13,color:'#4B5563',lineHeight:1.8};
const H = {fontSize:16,fontWeight:600,color:'#111827',marginBottom:8,marginTop:0};
const WRAP = {maxWidth:720,margin:'0 auto',padding:'80px 24px',fontFamily:'-apple-system,BlinkMacSystemFont,"Inter","Segoe UI",sans-serif'};

const sections = [
  {t:'1. Information We Collect',b:'When you create a deryv account, we collect your name, email address, and organization name. During use, we collect business operational data you enter including inventory records, LOT information, warehouse locations, orders, shipping data, and reports. If you connect third-party integrations, we may collect OAuth tokens or API credentials to operate those integrations on your behalf. Credentials are stored server-side and never exposed to the browser.'},
  {t:'2. How We Use Your Data',b:"Your data is used exclusively to operate the deryv platform on your behalf. This includes powering your inventory, LOT intake, warehouse, marketplace listing, shipping, and reporting workflows. We do not sell your data. We do not share operational data with third parties except as required to operate authorized integrations."},
  {t:'3. Data Security',b:'deryv stores data on secure cloud infrastructure. All data is transmitted over HTTPS. Integration credentials are stored server-side and never exposed to the browser. Your data is scoped to your organization and other organizations cannot access it. We apply role-based access controls within your organization.'},
  {t:'4. Third-Party Services',b:'deryv integrates with eBay, Shopify, ShipStation, and QuickBooks. When you authorize these integrations, your operational data may be exchanged with these platforms. Each has its own privacy policy. deryv is not responsible for the data practices of third-party platforms.'},
  {t:'5. Data Retention',b:'We retain your account and operational data while your account is active. If you request deletion, we will delete or anonymize your data in accordance with applicable law within a reasonable period. Some data may be retained in backup systems for up to 90 days after deletion.'},
  {t:'6. BETA Notice',b:'deryv is currently in BETA. Features and data practices may change. We will update this policy as the product evolves and notify registered users of material changes.'},
  {t:'7. Your Rights',b:'You have the right to access, correct, or delete the personal data we hold about you. To make a request, contact us at hello@deryvos.com.'},
  {t:'8. Contact',b:'For privacy-related questions or requests, contact us at hello@deryvos.com.'},
];

export default function Privacy() {
  return (
    <div style={WRAP}>
      <h1 style={{fontSize:'clamp(28px,4vw,40px)',fontWeight:700,letterSpacing:'-0.02em',color:'#111827',marginBottom:8}}>Privacy Policy</h1>
      <p style={{fontSize:13,color:'#9CA3AF',marginBottom:48}}>Last updated: June 2025 · Effective during BETA</p>
      <div style={{display:'flex',flexDirection:'column',gap:32}}>
        {sections.map(s=>(
          <div key={s.t} style={{borderBottom:'1px solid rgba(0,0,0,0.06)',paddingBottom:32}}>
            <h2 style={H}>{s.t}</h2>
            <p style={S}>{s.b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}