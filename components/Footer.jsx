export default function Footer() {
  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/anestesia.questoes",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.1" />
        </svg>
      )
    },
    {
      label: "Telegram",
      href: "https://t.me/+TM-DUc7qW6NlYjYx",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 4L3 11l5 2 2 6 3-4 4 3 4-14z" />
        </svg>
      )
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100080507006181",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z" />
        </svg>
      )
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/5515991008159",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 12a8 8 0 10-15 4l-1 4 4-1a8 8 0 0012-7z" />
          <path d="M9 9c0 2 3 5 5 5h1l1-2-2-1-1 1c-1 0-2-1-2-2l1-1-1-2-2 1v1z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <div>
          <p>© 2026 Anestesia Questões. Todos os direitos reservados.</p>
          <div className="footer-social" aria-label="Redes sociais">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} title={item.label}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-links">
          <a href="/termos-de-uso">Termos de Uso</a>
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="https://anestesia-questoes-aluno.vercel.app/aluno/entrar" target="_blank" rel="noopener noreferrer">
            Entrar
          </a>
        </div>
      </div>
    </footer>
  );
}
