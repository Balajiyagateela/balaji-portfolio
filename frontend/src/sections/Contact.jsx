import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  AlertTriangle, 
  CheckCircle2, 
  Terminal, 
  ExternalLink,
  ShieldAlert,
  Loader2,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';
import { sendContactMessage } from '../services/api';
import { useTheme } from '../context/ThemeContext';
import Toast from '../components/Toast';

export default function Contact() {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusFeedback, setStatusFeedback] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(personalDetails.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusFeedback(null);
    setFieldErrors({});

    // Client-side quick validation
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email format.';
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
        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#2563eb', '#3b82f6', '#60a5fa', '#10b981'],
          });
        } catch (_) {}

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
        setStatusFeedback({
          type: 'unconfigured',
          message: result.message || 'SMTP service is not configured on this server environment.',
          directEmail: result.directEmail || personalDetails.email,
        });
        setToast({
          type: 'warning',
          message: 'Server SMTP is unconfigured. Direct mail client option is ready.',
        });
      } else if (result.errors) {
        setFieldErrors(result.errors);
        setStatusFeedback({
          type: 'error',
          message: result.error || 'Validation failed. Please correct the highlighted errors.',
        });
      } else {
        setStatusFeedback({
          type: 'error',
          message: result.error || 'Failed to submit contact message. Please try emailing directly.',
          directEmail: result.directEmail || personalDetails.email,
        });
      }
    } catch (err) {
      setStatusFeedback({
        type: 'error',
        message: 'An unexpected connection error occurred. Please email directly.',
        directEmail: personalDetails.email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section 
      id="contact" 
      className={`py-24 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#030712] border-blue-950/60' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // GET IN TOUCH</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Contact & Inquiries
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm font-mono">
            Have an open Python / FastAPI backend engineering opportunity? Reach out directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Email Card */}
            <div className={`p-7 rounded-2xl border space-y-4 ${
              isDark 
                ? 'bg-[#080d1a] border-blue-900/40 shadow-xl' 
                : 'bg-slate-50 border-slate-200 shadow-md'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Direct Email
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-bold">
                  Primary
                </span>
              </div>

              <div className={`flex items-center justify-between gap-3 p-3.5 rounded-xl border ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                  <a
                    href={`mailto:${personalDetails.email}`}
                    className={`text-xs sm:text-sm font-mono truncate hover:text-blue-500 transition-colors ${
                      isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}
                  >
                    {personalDetails.email}
                  </a>
                </div>
                <button
                  onClick={copyEmailAddress}
                  className="p-1.5 rounded-lg bg-blue-600/10 text-blue-500 hover:bg-blue-600/20 transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className={`flex items-center justify-between gap-3 p-3.5 rounded-xl border ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                  <a
                    href={`tel:${personalDetails.phone.replace(/\s+/g, '')}`}
                    className={`text-xs sm:text-sm font-mono hover:text-blue-500 transition-colors ${
                      isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}
                  >
                    {personalDetails.phone}
                  </a>
                </div>
                <button
                  onClick={copyPhoneNumber}
                  className="p-1.5 rounded-lg bg-blue-600/10 text-blue-500 hover:bg-blue-600/20 transition-colors shrink-0 cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>Location: {personalDetails.location}</span>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className={`p-7 rounded-2xl border space-y-3.5 ${
              isDark 
                ? 'bg-[#080d1a] border-blue-900/40 shadow-xl' 
                : 'bg-slate-50 border-slate-200 shadow-md'
            }`}>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Professional Profiles
              </span>

              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-3.5 rounded-xl border text-xs font-mono font-medium transition-all ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-blue-500 hover:text-white' 
                    : 'bg-white border-slate-200 text-slate-800 hover:border-blue-400'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>github.com/Balajiyagateela</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-3.5 rounded-xl border text-xs font-mono font-medium transition-all ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-blue-500 hover:text-white' 
                    : 'bg-white border-slate-200 text-slate-800 hover:border-blue-400'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-500" />
                  <span>linkedin.com/in/balaji-yagateela-059922253</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Stateless Backend Architecture Disclaimer */}
            <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
              isDark 
                ? 'bg-slate-950/60 border-slate-800/80 text-slate-500' 
                : 'bg-slate-100 border-slate-200 text-slate-600'
            }`}>
              <strong className="block mb-0.5 text-blue-500 font-mono">Stateless Transmission Notice:</strong>
              This application has zero database persistence. Form submissions are dispatched directly via SMTP or available for one-click mail client transmission.
            </div>

          </motion.div>

          {/* Right Column: Functional Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className={`p-7 sm:p-9 rounded-3xl border shadow-xl ${
              isDark 
                ? 'bg-[#080d1a] border-blue-900/40 shadow-black/40' 
                : 'bg-white border-slate-200 shadow-slate-200/50'
            }`}>
              <div className="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Send an Inquiry
                  </h3>
                  <p className="text-xs font-mono text-blue-500 dark:text-blue-400 mt-0.5">
                    POST /api/contact • Rate-limited & Sanitized
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-blue-600/10 text-blue-500 flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </div>
              </div>

              {/* Status Feedback Banners */}
              {statusFeedback && (
                <div className="mb-6">
                  {statusFeedback.type === 'success' && (
                    <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-emerald-300 font-semibold mb-0.5">Message Delivered!</strong>
                        {statusFeedback.message}
                      </div>
                    </div>
                  )}

                  {statusFeedback.type === 'unconfigured' && (
                    <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs space-y-3">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-amber-300 font-semibold mb-0.5">SMTP Unconfigured Notice:</strong>
                          {statusFeedback.message}
                        </div>
                      </div>
                      <div className="pt-2 border-t border-amber-800/40 flex flex-wrap items-center gap-3">
                        <a
                          href={mailtoLink}
                          className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Mail Client</span>
                        </a>
                        <button
                          type="button"
                          onClick={copyPreparedMessage}
                          className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-200 border border-amber-600/40 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                        >
                          {copiedMessage ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedMessage ? 'Copied' : 'Copy Message Text'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {statusFeedback.type === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-3">
                      <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-rose-300 font-semibold mb-0.5">Delivery Notice:</strong>
                        {statusFeedback.message}
                        <div className="mt-2">
                          <a href={mailtoLink} className="text-blue-400 underline font-mono text-xs">
                            Click here to email directly via your mail client →
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className={`block text-xs font-mono font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                        fieldErrors.name
                          ? 'border-rose-500 bg-rose-500/10'
                          : isDark
                            ? 'bg-slate-900 border-slate-800 text-white focus:border-blue-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-[11px] text-rose-400 font-mono">{fieldErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className={`block text-xs font-mono font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                        fieldErrors.email
                          ? 'border-rose-500 bg-rose-500/10'
                          : isDark
                            ? 'bg-slate-900 border-slate-800 text-white focus:border-blue-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-[11px] text-rose-400 font-mono">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className={`block text-xs font-mono font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Python Backend Developer Role / FastAPI Project"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                      fieldErrors.subject
                        ? 'border-rose-500 bg-rose-500/10'
                        : isDark
                          ? 'bg-slate-900 border-slate-800 text-white focus:border-blue-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                    }`}
                  />
                  {fieldErrors.subject && (
                    <p className="text-[11px] text-rose-400 font-mono">{fieldErrors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className={`block text-xs font-mono font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the engineering role, project requirements, or inquiry..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors resize-y ${
                      fieldErrors.message
                        ? 'border-rose-500 bg-rose-500/10'
                        : isDark
                          ? 'bg-slate-900 border-slate-800 text-white focus:border-blue-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                    }`}
                  />
                  {fieldErrors.message && (
                    <p className="text-[11px] text-rose-400 font-mono">{fieldErrors.message}</p>
                  )}
                </div>

                {/* Form Actions */}
                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <span className="text-[11px] font-mono text-slate-400">
                    * Stateless transmission • Zero database retention
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer disabled:cursor-not-allowed"
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
          </motion.div>

        </div>

      </div>

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
