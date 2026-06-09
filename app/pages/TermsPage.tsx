const S = {fontSize:13,color:'#4B5563',lineHeight:1.8};
const H = {fontSize:16,fontWeight:600,color:'#111827',marginBottom:8,marginTop:0};
const WRAP = {maxWidth:720,margin:'0 auto',padding:'80px 24px',fontFamily:'-apple-system,BlinkMacSystemFont,"Inter","Segoe UI",sans-serif'};

const sections = [
{t:'1. Acceptance of Terms',b:'By accessing or using deryv ("Service"), you agree to these Terms of Service. If you do not agree, do not use the Service.'},
{t:'2. BETA Service',b:"deryv is currently in BETA. The Service is provided as-is during BETA. Features may be added, changed, or removed. We do not guarantee uninterrupted or error-free operation during BETA. We appreciate your feedback."},
{t:'3. Account Responsibilities',b:'You are responsible for maintaining the security of your account credentials. You are responsible for all activity under your account. Notify us immediately of any unauthorized access. deryv is not liable for losses from unauthorized account access.'},
{t:'4. Acceptable Use',b:"You may use deryv only for lawful business operations. You may not use deryv to store or process unlawful data, interfere with the platform, access other organizations' data, or violate any applicable law."},
{t:'5. Third-Party Integrations',b:"deryv integrates with eBay, Shopify, ShipStation, and QuickBooks. Your use of these integrations is subject to each platform's own terms of service. deryv is not responsible for the availability or accuracy of third-party platforms."},
{t:'6. Data Accuracy',b:'You are responsible for the accuracy of data you enter into deryv. Reports, valuations, and exports are based on the data you provide. deryv does not independently verify operational data.'},
{t:'7. No Professional Advice',b:'deryv is an operational software tool. Nothing in the Service constitutes accounting, legal, tax, or financial advice. Reports exported from deryv should be reviewed by your accountant or financial advisor before use in tax filings or financial statements.'},
{t:'8. Limitation of Liability',b:"To the fullest extent permitted by law, deryv shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. deryv's total liability shall not exceed the amount you paid for the Service in the 12 months preceding the claim."},
{t:'9. Termination',b:'We may suspend or terminate your account at any time for violation of these Terms or for any other reason with reasonable notice. You may cancel your account at any time by contacting us.'},
{t:'10. Changes to Terms',b:'We may update these Terms from time to time. We will notify registered users of material changes. Continued use of the Service after changes constitutes acceptance of the updated Terms.'},
{t:'11. Contact',b:'For questions about these Terms, contact us at hello@deryvos.com.'},
];

export default function Terms() {
  return (
    <div style={WRAP}>
      <h1 style={{fontSize:'clamp(28px,4vw,40px)',fontWeight:700,letterSpacing:'-0.02em',color:'#111827',marginBottom:8}}>Terms of Service</h1>
      <p style={{fontSize:13,color:'#9CA3AF',marginBottom:48}}>Last updated: June 2025 · BETA Terms</p>
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
