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
  Loader2
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
            particleCount: 70,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#10B981', '#059669', '#34D399', '#38BDF8'],
          });
        } catch (_) {}

        setStatusFeedback({
          type: 'success',
          message: result.message || 'Your message has been sent successfully!',
        });
        setToast({
          type: 'success',
          message: 'Message delivered! Thank you for getting in touch.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (result.code === 'SMTP_NOT_CONFIGURED') {
        setStatusFeedback({
          type: 'unconfigured',
          message: result.message || 'SMTP service is currently not configured on this server environment.',
          directEmail: result.directEmail || personalDetails.email,
        });
        setToast({
          type: 'warning',
          message: 'Server mail is unconfigured. Direct email client link is ready below.',
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
          message: result.error || 'Failed to submit message. Please try emailing directly.',
          directEmail: result.directEmail || personalDetails.email,
        });
      }
    } catch (err) {
      setStatusFeedback({
        type: 'error',
        message: 'An unexpected connection error occurred. Please reach out directly via email.',
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

  return (
    <section 
      id="contact" 
      className={`py-20 relative border-t transition-colors ${
        isDark ? 'bg-[#0B0F17] border-[#30363D]/60' : 'bg-[#F3F4F6] border-[#E2E8F0]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border transition-colors ${
            isDark 
              ? 'bg-[#161B22] border-[#30363D] text-emerald-400' 
              : 'bg-white border-[#E2E8F0] text-emerald-600 shadow-sm'
          }`}>
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // CONTACT</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
          }`}>
            Get In Touch
          </h2>
          <p className={`mt-2 text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
          }`}>
            Have an open Python or FastAPI backend role, project, or technical question? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Information */}
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details Card */}
            <div className={`p-6 rounded-2xl border portfolio-card space-y-4 ${
              isDark 
                ? 'bg-[#161B22] border-[#30363D] shadow-card-dark' 
                : 'bg-white border-[#E2E8F0] shadow-card-light'
            }`}>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Direct Contact Channels
              </span>

              {/* Email Row */}
              <div className={`flex items-center justify-between gap-3 p-3 rounded-xl border ${
                isDark ? 'bg-[#0B0F17] border-[#30363D]' : 'bg-[#F8FAFC] border-[#E2E8F0]'
              }`}>
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                  <a
                    href={`mailto:${personalDetails.email}`}
                    className={`text-xs sm:text-sm font-mono truncate hover:text-emerald-500 transition-colors ${
                      isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
                    }`}
                  >
                    {personalDetails.email}
                  </a>
                </div>
                <button
                  onClick={copyEmailAddress}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-500 transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Row */}
              <div className={`flex items-center justify-between gap-3 p-3 rounded-xl border ${
                isDark ? 'bg-[#0B0F17] border-[#30363D]' : 'bg-[#F8FAFC] border-[#E2E8F0]'
              }`}>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <a
                    href={`tel:${personalDetails.phone.replace(/\s+/g, '')}`}
                    className={`text-xs sm:text-sm font-mono hover:text-emerald-500 transition-colors ${
                      isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
                    }`}
                  >
                    {personalDetails.phone}
                  </a>
                </div>
                <button
                  onClick={copyPhoneNumber}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-500 transition-colors shrink-0 cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Row */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{personalDetails.location}</span>
              </div>
            </div>

            {/* Profiles Card */}
            <div className={`p-6 rounded-2xl border portfolio-card space-y-3 ${
              isDark 
                ? 'bg-[#161B22] border-[#30363D] shadow-card-dark' 
                : 'bg-white border-[#E2E8F0] shadow-card-light'
            }`}>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Profiles & Repositories
              </span>

              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-3 rounded-xl border text-xs font-mono transition-colors ${
                  isDark 
                    ? 'bg-[#0B0F17] border-[#30363D] text-[#E5E7EB] hover:border-emerald-500/50 hover:text-emerald-400' 
                    : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] hover:border-emerald-300 hover:text-emerald-600'
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
                className={`flex items-center justify-between p-3 rounded-xl border text-xs font-mono transition-colors ${
                  isDark 
                    ? 'bg-[#0B0F17] border-[#30363D] text-[#E5E7EB] hover:border-emerald-500/50 hover:text-emerald-400' 
                    : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] hover:border-emerald-300 hover:text-emerald-600'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-cyan-subtle" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className={`p-6 sm:p-8 rounded-2xl border portfolio-card ${
              isDark 
                ? 'bg-[#161B22] border-[#30363D] shadow-card-dark' 
                : 'bg-white border-[#E2E8F0] shadow-card-light'
            }`}>
              <div className={`mb-6 pb-4 border-b flex items-center justify-between ${
                isDark ? 'border-[#30363D]/80' : 'border-[#E2E8F0]'
              }`}>
                <div>
                  <h3 className={`text-lg font-bold tracking-tight ${
                    isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
                  }`}>
                    Send a Message
                  </h3>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                    I'll respond promptly to backend engineering inquiries.
                  </p>
                </div>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                  isDark 
                    ? 'bg-[#0B0F17] border-[#30363D] text-emerald-400' 
                    : 'bg-emerald-50 border-emerald-100 text-emerald-600'
                }`}>
                  <Send className="w-4 h-4" />
                </div>
              </div>

              {/* Status Feedback Banners */}
              {statusFeedback && (
                <div className="mb-5">
                  {statusFeedback.type === 'success' && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold mb-0.5">Message Delivered</strong>
                        {statusFeedback.message}
                      </div>
                    </div>
                  )}

                  {statusFeedback.type === 'unconfigured' && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs space-y-2">
                      <div className="flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block font-semibold mb-0.5">Notice:</strong>
                          {statusFeedback.message}
                        </div>
                      </div>
                      <div className="pt-2">
                        <a
                          href={mailtoLink}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Email Client</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {statusFeedback.type === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold mb-0.5">Error:</strong>
                        {statusFeedback.message}
                        <div className="mt-1.5">
                          <a href={mailtoLink} className="text-emerald-400 underline font-mono text-xs">
                            Send directly via email →
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Contact Form Element */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className={`block text-xs font-mono font-medium ${
                      isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
                    }`}>
                      Name <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Johnson"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                        fieldErrors.name
                          ? 'border-rose-500 bg-rose-500/10'
                          : isDark
                            ? 'bg-[#0B0F17] border-[#30363D] text-[#E5E7EB] focus:border-emerald-500'
                            : 'bg-white border-[#E2E8F0] text-[#0F172A] focus:border-emerald-500'
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-[11px] text-rose-400 font-mono">{fieldErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className={`block text-xs font-mono font-medium ${
                      isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
                    }`}>
                      Email <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                        fieldErrors.email
                          ? 'border-rose-500 bg-rose-500/10'
                          : isDark
                            ? 'bg-[#0B0F17] border-[#30363D] text-[#E5E7EB] focus:border-emerald-500'
                            : 'bg-white border-[#E2E8F0] text-[#0F172A] focus:border-emerald-500'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-[11px] text-rose-400 font-mono">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className={`block text-xs font-mono font-medium ${
                    isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
                  }`}>
                    Subject <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Python Backend Developer Role / Inquiry"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                      fieldErrors.subject
                        ? 'border-rose-500 bg-rose-500/10'
                        : isDark
                          ? 'bg-[#0B0F17] border-[#30363D] text-[#E5E7EB] focus:border-emerald-500'
                          : 'bg-white border-[#E2E8F0] text-[#0F172A] focus:border-emerald-500'
                    }`}
                  />
                  {fieldErrors.subject && (
                    <p className="text-[11px] text-rose-400 font-mono">{fieldErrors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className={`block text-xs font-mono font-medium ${
                    isDark ? 'text-[#E5E7EB]' : 'text-[#0F172A]'
                  }`}>
                    Message <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the opportunity or project details..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors resize-y ${
                      fieldErrors.message
                        ? 'border-rose-500 bg-rose-500/10'
                        : isDark
                          ? 'bg-[#0B0F17] border-[#30363D] text-[#E5E7EB] focus:border-emerald-500'
                          : 'bg-white border-[#E2E8F0] text-[#0F172A] focus:border-emerald-500'
                    }`}
                  />
                  {fieldErrors.message && (
                    <p className="text-[11px] text-rose-400 font-mono">{fieldErrors.message}</p>
                  )}
                </div>

                {/* Form Action */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-medium text-xs flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
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