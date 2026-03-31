"use client";

import { useState } from "react";

const checkoutUrl = "https://chk.eduzz.com/2219590";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" }
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    setMenuOpen((current) => !current);
  }

  function handleCloseMenu() {
    setMenuOpen(false);
  }

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
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Assinar
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={handleToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
      >
        <div className="container mobile-menu-inner">
          <nav className="mobile-nav-links" aria-label="Navegação principal mobile">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} onClick={handleCloseMenu}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mobile-nav-ctas">
            <a
              href="https://anestesia-questoes-aluno.vercel.app/aluno/entrar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
              onClick={handleCloseMenu}
            >
              Entrar
            </a>
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              onClick={handleCloseMenu}
            >
              Assinar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
