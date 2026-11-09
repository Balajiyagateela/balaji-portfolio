import React, { useEffect } from 'react';
import { CheckCircle2, AlertTriangle, AlertCircle, X } from 'lucide-react';

export default function Toast({ type = 'info', message, onClose, duration = 6000 }) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const typeConfig = {
    success: {
      bg: 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200',
      icon: CheckCircle2,
      iconColor: 'text-emerald-400',
    },
    warning: {
      bg: 'bg-amber-950/90 border-amber-500/50 text-amber-200',
      icon: AlertTriangle,
      iconColor: 'text-amber-400',
    },
    error: {
      bg: 'bg-rose-950/90 border-rose-500/50 text-rose-200',
      icon: AlertCircle,
      iconColor: 'text-rose-400',
    },
    info: {
      bg: 'bg-blue-950/90 border-blue-500/50 text-blue-200',
      icon: AlertCircle,
      iconColor: 'text-blue-400',
    },
  }[type] || {
    bg: 'bg-slate-900 border-slate-700 text-slate-200',
    icon: AlertCircle,
    iconColor: 'text-slate-400',
  };

  const Icon = typeConfig.icon;

  return (
    <div className={`fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl border shadow-2xl backdrop-blur-md flex items-start gap-3 animate-fade-in ${typeConfig.bg}`}>
      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${typeConfig.iconColor}`} />
      <div className="flex-1 text-xs leading-relaxed">
        {message}
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-md hover:bg-white/10 transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4 opacity-70 hover:opacity-100" />
      </button>
    </div>
  );
}

