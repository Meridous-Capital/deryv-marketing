import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-[#ECFDF5] flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3ECF8E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 className="text-2xl font-semibold text-[#111827] mb-3">Request received</h2>
          <p className="text-[#6B7280]">Thanks, {form.name}. We'll be in touch at {form.email} within 1–2 business days.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-xl mx-auto">
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#3ECF8E] mb-3">Early Access</span>
          <h1 className="text-4xl font-bold text-[#111827] mb-4">Request access to deryv</h1>
          <p className="text-lg text-[#6B7280]">We're onboarding a limited number of warehouse and e-commerce teams. Tell us about your operation.</p>
        </div>
        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1">Full name <span className="text-red-500">*</span></label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" className="w-full border border-[rgba(0,0,0,0.12)] rounded-lg px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1">Work email <span className="text-red-500">*</span></label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@company.com" className="w-full border border-[rgba(0,0,0,0.12)] rounded-lg px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#374151] mb-1">Company <span className="text-red-500">*</span></label>
            <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Logistics" className="w-full border border-[rgba(0,0,0,0.12)] rounded-lg px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#374151] mb-1">Your role</label>
            <select name="role" value={form.role} onChange={handleChange} className="w-full border border-[rgba(0,0,0,0.12)] rounded-lg px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]">
              <option value="">Select…</option>
              <option>Warehouse Manager</option>
              <option>Operations Director</option>
              <option>E-commerce Owner</option>
              <option>Logistics Coordinator</option>
              <option>IT / Systems</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#374151] mb-1">Tell us about your operation</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Number of SKUs, current tools, biggest pain points…" className="w-full border border-[rgba(0,0,0,0.12)] rounded-lg px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] resize-none" />
          </div>
          <button onClick={handleSubmit} className="w-full bg-[#3ECF8E] hover:bg-[#34b97c] text-white font-semibold rounded-lg py-3 text-sm transition-colors">
            Request early access
          </button>
          <p className="text-xs text-center text-[#9CA3AF]">We respect your privacy. No spam, ever.</p>
        </div>
      </div>
    </section>
  );
}
