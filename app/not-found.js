export default function NotFound() {
  return (
    <div className="status-shell">
      <div className="status-card">
        <p className="status-flag">404 — Página não encontrada</p>
        <h1 style={{ marginTop: "0.5rem", fontSize: "1.6rem" }}>
          Essa página não existe
        </h1>
        <p className="status-subtitle">
          O endereço que você acessou não foi encontrado. Verifique o link ou volte para a página inicial.
        </p>
        <div className="status-actions">
          <a href="/" className="btn btn-primary">
            Voltar ao início
          </a>
          <a
            href="https://wa.me/5515991008159"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
