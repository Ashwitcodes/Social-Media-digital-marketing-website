'use client';

import { useEffect, useState } from 'react';

interface ContactFormProps {
  selectedService?: string;
}

interface LeadAnalysis {
  priority: 'high' | 'medium' | 'low';
  category: string;
  sentiment: 'positive' | 'neutral' | 'negative';
}

export function ContactForm({ selectedService }: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(selectedService || '');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadAnalysis, setLeadAnalysis] = useState<LeadAnalysis | null>(null);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/10 border-red-400/20 text-red-600';
      case 'medium':
        return 'bg-amber-500/10 border-amber-400/20 text-amber-600';
      case 'low':
        return 'bg-emerald-500/10 border-emerald-400/20 text-emerald-600';
      default:
        return 'bg-gray-500/10 border-gray-400/20 text-gray-600';
    }
  };

  const getSentimentEmoji = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return '😊';
      case 'negative':
        return '😟';
      default:
        return '😐';
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !description.trim()) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Analyzing your request with AI...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          service: service.trim() || 'General service inquiry',
          description: description.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || 'Unable to send request.');
      }

      if (result.analysis) {
        setLeadAnalysis(result.analysis);
      }

      setStatus({
        type: 'success',
        message: result?.message || '✅ Your request has been analyzed and received successfully. We will contact you within 24 hours.',
      });
      setName('');
      setPhone('');
      setDescription('');
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'There was a problem sending your request. Please try again later.',
      });
      setLeadAnalysis(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/80">
      <div className="max-w-4xl mx-auto rounded-[2rem] border border-border bg-card/80 p-8 shadow-xl shadow-black/5">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Service Request</p>
          <h2 className="mt-4 text-4xl font-bold text-foreground">Tell us what you need</h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Fill out this quick form and our team will reach out to you. The selected service will automatically appear when you click a service card.
          </p>
        </div>

        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-foreground">
              Full Name
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                required
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-foreground">
              Phone / WhatsApp
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Enter your number"
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                required
              />
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-foreground">
            Requested Service
            <input
              type="text"
              value={service}
              onChange={(event) => setService(event.target.value)}
              placeholder="Selected service or your requirement"
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-foreground">
            Description
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Describe your project or service requirement"
              className="min-h-[160px] w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
              required
            />
          </label>

          {leadAnalysis && status?.type === 'success' && (
            <div className={`rounded-2xl px-4 py-4 border ${getPriorityColor(leadAnalysis.priority)}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold capitalize text-sm">
                    {leadAnalysis.priority === 'high' ? '🚀' : leadAnalysis.priority === 'medium' ? '⚡' : '📊'} {leadAnalysis.priority} Priority Lead
                  </p>
                  <p className="text-xs mt-1 capitalize opacity-80">Category: {leadAnalysis.category}</p>
                </div>
                <span className="text-2xl">{getSentimentEmoji(leadAnalysis.sentiment)}</span>
              </div>
            </div>
          )}

          {status ? (
            <div
              className={`rounded-2xl px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-400/20'
                  : status.type === 'error'
                  ? 'bg-red-500/10 text-red-600 border border-red-400/20'
                  : 'bg-slate-500/10 text-slate-600 border border-slate-400/20'
              }`}
            >
              {status.message}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Analyzing & Sending...' : 'Send Request'}
          </button>
        </form>
      </div>
    </section>
  );
}
