function normalizeUrl(url, fallback) {
  if (!url || typeof url !== "string") return fallback;
  return url.trim() || fallback;
}

export default function PostCheckoutLayout({
  flag,
  title,
  subtitle,
  steps,
  appUrl,
  supportUrl,
  primaryLabel,
  secondaryLabel,
  primaryHref,
  secondaryHref,
  quickHelp
}) {
  const platformUrl = normalizeUrl(appUrl, "https://anestesia-questoes-aluno.vercel.app");
  const whatsappUrl = normalizeUrl(supportUrl, "https://wa.me/5515991008159");

  return (
    <main className="status-shell">
      <section className="status-card">
        <a className="status-top" href="/" aria-label="Voltar para a landing page">
          <img src="/assets/logo-icon.png" alt="" width="34" height="34" />
          <span>Anestesia Questões</span>
        </a>

        <p className="status-flag">{flag}</p>
        <h1>{title}</h1>
        <p className="status-subtitle">{subtitle}</p>

        <div className="quick-grid">
          {steps.map((step) => (
            <article className="quick-step" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="status-actions">
          <a className="btn btn-primary" href={primaryHref || platformUrl} target="_blank" rel="noopener noreferrer">
            {primaryLabel}
          </a>
          <a className="btn btn-ghost" href={secondaryHref || whatsappUrl} target="_blank" rel="noopener noreferrer">
            {secondaryLabel}
          </a>
        </div>

        <div className="quick-faq">{quickHelp}</div>
      </section>
    </main>
  );
}
