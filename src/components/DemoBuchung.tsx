import { useEffect } from 'react';

declare global {
  interface Window {
    Cal: any;
  }
}

export default function DemoBuchung() {
  useEffect(() => {
    const existing = document.querySelector('script[data-cal-embed="brain-ui"]');
    if (existing) return;

    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.setAttribute('data-cal-embed', 'brain-ui');
    script.onload = () => {
      const Cal = window.Cal;
      if (!Cal) return;
      Cal('init', 'brain-ui-demo', { origin: 'https://app.cal.com' });
      Cal.ns['brain-ui-demo']('inline', {
        elementOrSelector: '#cal-embed-target',
        config: { layout: 'month_view' },
        calLink: 'brain-ui/demo',
      });
      Cal.ns['brain-ui-demo']('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <section
      id="demo-buchung"
      aria-labelledby="demo-buchung-heading"
      className="max-w-6xl mx-auto px-6 py-16 md:py-24"
    >
      <h2
        id="demo-buchung-heading"
        className="font-medium mb-4"
        style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text-primary)' }}
      >
        Demo buchen
      </h2>
      <p
        className="mb-8"
        style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)' }}
      >
        Waehlen Sie einen Termin und erleben Sie Brain UI live mit Ihren eigenen Dispositionsdaten.
      </p>
      <div
        id="cal-embed-target"
        style={{ minHeight: '600px' }}
        aria-label="Terminbuchungs-Kalender fuer Brain UI Demo"
      />
    </section>
  );
}