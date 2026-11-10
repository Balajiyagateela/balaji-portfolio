import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, Copy, Check, CheckCircle2, Terminal, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';
import { sendContactMessage } from '../services/api';
import Card3D from '../components/Card3D';
import MagneticButton from '../components/MagneticButton';
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
  const [statusFeedback, setStatusFeedback] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusFeedback(null);
    setFieldErrors({});

    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendContactMessage(formData);

      if (result.success) {
        try {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#10B981', '#059669', '#38BDF8', '#34D399'],
          });
        } catch (_) {}

        setStatusFeedback({
          type: 'success',
          message: 'Your message was sent successfully.',
        });
        setToast({
          type: 'success',
          message: 'Your message was sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (result.errors) {
        setFieldErrors(result.errors);
        setStatusFeedback({
          type: 'validation',
          message: 'Please correct the highlighted form errors.',
        });
      } else {
        // Safe professional fallback message (no internal credentials exposed)
        setStatusFeedback({
          type: 'fallback',
          message: result.message || 'Unable to send your message right now. Please try again later.',
          directEmail: result.directEmail || personalDetails.email,
        });
      }
    } catch (err) {
      setStatusFeedback({
        type: 'fallback',
        message: 'Unable to send your message right now. Please try again later.',
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
      className="py-24 relative border-t border-[var(--border)]"
    >
      <div className="bs-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] shadow-sm">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[var(--text-primary)]">
            Get in Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Interested in discussing backend architecture, API engineering, or technical opportunities? Feel free to reach out directly through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Methods in 3D Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <Card3D
              maxTilt={4}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-7 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] shadow-card space-y-4"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] font-bold block">
                01 // Direct Channel
              </span>

              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1.5 font-bold text-[var(--accent)]">
                    <Mail className="w-4 h-4" />
                    <span>Email Address</span>
                  </span>
                  <button
                    onClick={copyEmailAddress}
                    className="p-1 rounded text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                    title="Copy email address"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[var(--accent)]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="block text-base sm:text-lg font-mono truncate text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-semibold"
                >
                  {personalDetails.email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[var(--text-secondary)] pt-1 px-1 font-medium">
                <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <span>{personalDetails.location}</span>
              </div>

              {/* Direct WhatsApp Channel */}
              <a
                href={personalDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-[#25D366] transition-colors group"
                title="Chat with Balaji on WhatsApp"
              >
                <div className="flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-[#25D366] shrink-0">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <div>
                    <span className="font-heading font-semibold text-xs sm:text-sm text-[var(--text-primary)] block group-hover:text-[#25D366] transition-colors">
                      WhatsApp Chat
                    </span>
                    <span className="text-xs font-mono text-[var(--text-secondary)]">
                      {personalDetails.whatsappNumber}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </Card3D>

            {/* Online Profiles Card */}
            <Card3D
              maxTilt={4}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-7 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] shadow-card space-y-3"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] font-bold block">
                02 // Professional Profiles
              </span>

              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-xs sm:text-sm font-mono text-[var(--text-primary)] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[var(--accent)]" />
                  <span>github.com/Balajiyagateela</span>
                </div>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-xs sm:text-sm font-mono text-[var(--text-primary)] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[var(--accent)]" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </Card3D>

          </div>

          {/* Right Column: Contact Message Inquiry Form in 3D Container */}
          <div className="lg:col-span-7">
            <Card3D
              maxTilt={3}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] shadow-card"
            >
              <div className="mb-6 pb-4 border-b border-[var(--border)] flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[var(--text-primary)]">
                    Send a Message
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    Leave your contact details and message, and I'll get back to you promptly.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--accent)]/30 bg-[var(--accent-subtle)] text-[var(--accent)]">
                  <Send className="w-5 h-5" />
                </div>
              </div>

              {/* Status Feedback */}
              {statusFeedback && (
                <div className="mb-5">
                  {statusFeedback.type === 'success' && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold mb-0.5">Message Sent</strong>
                        {statusFeedback.message}
                      </div>
                    </div>
                  )}

                  {statusFeedback.type === 'fallback' && (
                    <div className="p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-sm space-y-3">
                      <div className="flex items-start gap-2.5 text-[var(--text-secondary)]">
                        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[var(--text-primary)] font-medium leading-relaxed">
                            {statusFeedback.message}
                          </p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <a
                          href={mailtoLink}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[#0B0F17] font-semibold text-xs sm:text-sm transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Open in Email Client ({personalDetails.email})</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {statusFeedback.type === 'validation' && (
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm flex items-center gap-2.5">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{statusFeedback.message}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Form Inputs */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-mono font-medium text-[var(--text-primary)]">
                      Name <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Johnson"
                      className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none transition-colors ${
                        fieldErrors.name
                          ? 'border-rose-500 bg-rose-500/10'
                          : 'border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] focus:border-[var(--accent)] placeholder:text-[var(--text-muted)]'
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-xs text-rose-400 font-mono font-semibold mt-1">{fieldErrors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-mono font-medium text-[var(--text-primary)]">
                      Email Address <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none transition-colors ${
                        fieldErrors.email
                          ? 'border-rose-500 bg-rose-500/10'
                          : 'border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] focus:border-[var(--accent)] placeholder:text-[var(--text-muted)]'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-rose-400 font-mono font-semibold mt-1">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-mono font-medium text-[var(--text-primary)]">
                    Subject <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Backend Architecture Discussion / Role Opportunity"
                    className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none transition-colors ${
                      fieldErrors.subject
                        ? 'border-rose-500 bg-rose-500/10'
                        : 'border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] focus:border-[var(--accent)] placeholder:text-[var(--text-muted)]'
                    }`}
                  />
                  {fieldErrors.subject && (
                    <p className="text-xs text-rose-400 font-mono font-semibold mt-1">{fieldErrors.subject}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-mono font-medium text-[var(--text-primary)]">
                    Message <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project scope, or opportunity details..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none transition-colors resize-y ${
                      fieldErrors.message
                        ? 'border-rose-500 bg-rose-500/10'
                        : 'border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] focus:border-[var(--accent)] placeholder:text-[var(--text-muted)]'
                    }`}
                  />
                  {fieldErrors.message && (
                    <p className="text-xs text-rose-400 font-mono font-semibold mt-1">{fieldErrors.message}</p>
                  )}
                </div>

                <div className="pt-3 flex justify-end">
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-60 text-[#0B0F17] font-bold text-sm sm:text-base flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </MagneticButton>
                </div>
              </form>

            </Card3D>
          </div>

        </div>

      </div>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* Floating Unobtrusive WhatsApp Button in Bottom-Right Corner */}
      <a
        href={personalDetails.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Balaji on WhatsApp"
        title="Chat on WhatsApp (+91 63024 35600)"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg shadow-black/30 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-white">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </section>
  );
}
