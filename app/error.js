"use client";

export default function Error({ reset }) {
  return (
    <div className="status-shell">
      <div className="status-card">
        <p className="status-flag">Algo deu errado</p>
        <h1 style={{ marginTop: "0.5rem", fontSize: "1.6rem" }}>
          Ocorreu um erro inesperado
        </h1>
        <p className="status-subtitle">
          Não conseguimos carregar essa página. Tente novamente ou entre em contato se o problema persistir.
        </p>
        <div className="status-actions">
          <button className="btn btn-primary" onClick={() => reset()}>
            Tentar novamente
          </button>
          <a href="/" className="btn btn-ghost">
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}
