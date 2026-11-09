import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  AlertTriangle, 
  CheckCircle2, 
  Terminal, 
  ExternalLink,
  ShieldAlert,
  Loader2
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { sendContactMessage } from '../services/api';
import Toast from '../components/Toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusFeedback, setStatusFeedback] = useState(null); // { type: 'success' | 'error' | 'unconfigured', message, details }
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific field error upon typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const copyEmailAddress = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusFeedback(null);
    setFieldErrors({});

    // Client-side quick pre-validation
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address format.';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject line is required.';
    if (!formData.message.trim()) {
      errors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please write at least 10 characters so I have context for your message.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendContactMessage(formData);

      if (result.success) {
        setStatusFeedback({
          type: 'success',
          message: result.message || 'Your message has been sent successfully via SMTP!',
        });
        setToast({
          type: 'success',
          message: 'Message delivered! Thank you for getting in touch.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (result.code === 'SMTP_NOT_CONFIGURED') {
        // Honest disclosure when SMTP is not configured
        setStatusFeedback({
          type: 'unconfigured',
          message: result.message || 'Email delivery service is currently not configured on this server environment.',
          directEmail: result.directEmail || personalDetails.email,
        });
        setToast({
          type: 'warning',
          message: 'Server SMTP is unconfigured. Direct mailto option is ready below.',
        });
      } else if (result.errors) {
        // Validation errors returned from server
        setFieldErrors(result.errors);
        setStatusFeedback({
          type: 'error',
          message: result.error || 'Validation failed. Please correct the highlighted errors.',
        });
      } else {
        // General or network error
        setStatusFeedback({
          type: 'error',
          message: result.error || 'Failed to submit contact message. Please try emailing directly.',
          directEmail: result.directEmail || personalDetails.email,
        });
        setToast({
          type: 'error',
          message: result.error || 'Error contacting server.',
        });
      }
    } catch (err) {
      setStatusFeedback({
        type: 'error',
        message: 'An unexpected connection error occurred. Please reach out via email directly.',
        directEmail: personalDetails.email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate mailto link with encoded query parameters
  const mailtoLink = `mailto:${personalDetails.email}?subject=${encodeURIComponent(
    formData.subject || 'Python Backend Developer Inquiry'
  )}&body=${encodeURIComponent(
    `From: ${formData.name || 'Visitor'}\nEmail: ${formData.email || ''}\n\n${formData.message || ''}`
  )}`;

  const copyPreparedMessage = () => {
    const text = `Subject: ${formData.subject}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#080b11] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>07 // CONTACT & INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-2 text-slate-400 text-sm font-mono">
            Have an open Python / FastAPI backend role or project discussion? Send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#0e131f] border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  Primary Contact
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <a
                    href={`mailto:${personalDetails.email}`}
                    className="text-sm font-mono text-slate-200 hover:text-blue-400 transition-colors truncate"
                  >
                    {personalDetails.email}
                  </a>
                </div>
                <button
                  onClick={copyEmailAddress}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Direct messages regarding Python backend engineering, REST API development, or architecture opportunities receive priority responses.
              </p>
            </div>

            {/* Social & Professional Presence */}
            <div className="p-6 rounded-2xl bg-[#0e131f] border border-slate-800 shadow-xl space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Professional Profiles
              </span>

              <div className="space-y-2.5">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-slate-800 text-slate-300 hover:text-white transition-all text-xs font-mono"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-400" />
                    <span>github.com/Balajiyagateela</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-slate-800 text-slate-300 hover:text-white transition-all text-xs font-mono"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn (Editable Link)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Location & Architecture Context */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-mono">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Location: {personalDetails.location}</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-500">
                Backend API service operates on Node.js/Express.js without any database retention. Inbound inquiries are transmitted via SMTP or direct mail client.
              </p>
            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e131f] border border-slate-800 shadow-xl">
              
              <div className="mb-6 pb-4 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Endpoints: POST /api/contact • Rate-limited & sanitized
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </div>
              </div>

              {/* Status Feedback Banners */}
              {statusFeedback && (
                <div className="mb-6 animate-fade-in">
                  {statusFeedback.type === 'success' && (
                    <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-emerald-300 font-semibold mb-0.5">
                          Message Delivered
                        </strong>
                        {statusFeedback.message}
                      </div>
                    </div>
                  )}

                  {statusFeedback.type === 'unconfigured' && (
                    <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs space-y-3">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-amber-300 font-semibold mb-0.5">
                            SMTP Service Unconfigured
                          </strong>
                          {statusFeedback.message}
                        </div>
                      </div>
                      <div className="pt-2 border-t border-amber-800/40 flex flex-wrap items-center gap-3">
                        <a
                          href={mailtoLink}
                          className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Mail Client</span>
                        </a>
                        <button
                          type="button"
                          onClick={copyPreparedMessage}
                          className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-200 border border-amber-600/40 text-xs font-mono flex items-center gap-1.5 transition-colors"
                        >
                          {copiedMessage ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedMessage ? 'Copied to Clipboard' : 'Copy Prepared Message'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {statusFeedback.type === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-3">
                      <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-rose-300 font-semibold mb-0.5">
                          Delivery Notice
                        </strong>
                        {statusFeedback.message}
                        <div className="mt-2">
                          <a
                            href={mailtoLink}
                            className="text-blue-400 hover:underline font-mono"
                          >
                            Click here to email directly via your mail client →
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono text-slate-300">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        fieldErrors.name
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-[11px] text-rose-400 font-mono mt-1">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono text-slate-300">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        fieldErrors.email
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-[11px] text-rose-400 font-mono mt-1">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="block text-xs font-mono text-slate-300">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Python Backend Developer Role / FastAPI Project"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      fieldErrors.subject
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {fieldErrors.subject && (
                    <p className="text-[11px] text-rose-400 font-mono mt-1">
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-xs font-mono text-slate-300">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the opportunity, engineering challenges, or inquiry..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-y ${
                      fieldErrors.message
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {fieldErrors.message && (
                    <p className="text-[11px] text-rose-400 font-mono mt-1">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
                  <div className="text-[11px] font-mono text-slate-500">
                    * Stateless transmission • No database retention
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-medium text-xs flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Floating Toast Notification */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}
