export default function LegalHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <a href="/" className="brand" aria-label="Voltar para a página inicial">
          <img src="/assets/logo-icon.png" alt="" width="38" height="38" />
          <span>Anestesia Questões</span>
        </a>

        <div className="nav-ctas">
          <a className="btn btn-ghost btn-sm" href="/">
            Voltar ao Início
          </a>
          <a className="btn btn-primary btn-sm" href="https://anestesia-questoes-aluno.vercel.app/aluno/entrar" target="_blank" rel="noopener noreferrer">
            Entrar
          </a>
        </div>
      </div>
    </header>
  );
}
