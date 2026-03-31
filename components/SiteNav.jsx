const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" }
];

export default function SiteNav() {
  return (
    <header className="site-header" id="inicio">
      <div className="container nav-wrapper">
        <a href="#inicio" className="brand" aria-label="Anestesia Questões">
          <img src="/assets/logo-icon.png" alt="" width="38" height="38" />
          <span>Anestesia Questões</span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-ctas">
          <a
            href="https://anestesia-questoes-aluno.vercel.app/aluno/entrar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            Entrar
          </a>
          <a
            href="#planos"
            className="btn btn-primary btn-sm"
          >
            Assinar
          </a>
        </div>
      </div>
    </header>
  );
}
