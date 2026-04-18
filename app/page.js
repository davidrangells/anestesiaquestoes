import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

const whatsappBase = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/5515991008159";

const painPoints = [
  "Você estuda muito, mas sem saber com precisão o que mais cai em TEA, TSA e Residência.",
  "Falta um banco realmente organizado para revisar por tema, prova e nível de dificuldade.",
  "A rotina corrida da residência reduz seu tempo e aumenta a insegurança na reta final.",
  "Sem métricas claras, fica difícil corrigir lacunas e evoluir com consistência."
];

const benefitIcons = {
  "Banco de questões orientado por prova":
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  "Simulados personalizados":
    "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "Comentários e explicações":
    "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  "Dashboard de desempenho":
    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  "Estudo no computador e celular":
    "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "Plataforma nova, rápida e organizada":
    "M13 10V3L4 14h7v7l9-11h-7z"
};

const benefits = [
  {
    title: "Banco de questões orientado por prova",
    description:
      "Pratique com foco em TEA, TSA e residência usando filtros por tema, grau de dificuldade e objetivo de preparação."
  },
  {
    title: "Simulados personalizados",
    description:
      "Monte sessões estratégicas para treinar tomada de decisão, ritmo de prova e retenção de conteúdo clínico."
  },
  {
    title: "Comentários e explicações",
    description:
      "Transforme cada erro em aprendizado com feedback objetivo para revisar com segurança e profundidade."
  },
  {
    title: "Dashboard de desempenho",
    description:
      "Visualize seus pontos fortes e fracos para definir o que revisar primeiro e acelerar sua evolução."
  },
  {
    title: "Estudo no computador e celular",
    description:
      "Acesse a plataforma de forma fluida em qualquer dispositivo, sem perder continuidade na rotina."
  },
  {
    title: "Plataforma nova, rápida e organizada",
    description:
      "Experiência moderna, navegação intuitiva e estrutura premium para estudar com foco total no resultado."
  }
];

const steps = [
  "Entre na plataforma com seu login.",
  "Selecione TEA, TSA ou Residência e aplique os filtros que fazem sentido para seu momento.",
  "Resolva questões e simulados com estratégia de prova.",
  "Acompanhe sua evolução no dashboard e ajuste o plano de revisão."
];

const differentials = [
  {
    type: "negative",
    title: "Estudo solto",
    points: [
      "Conteúdo disperso em várias fontes",
      "Baixa previsibilidade de desempenho",
      "Decisões de revisão no improviso"
    ]
  },
  {
    type: "positive",
    title: "Anestesia Questões",
    points: [
      "Banco estruturado para provas reais",
      "Métricas claras para decisão objetiva",
      "Fluxo de estudo inteligente e contínuo"
    ]
  }
];

const testimonials = [
  {
    quote:
      "Passei a estudar com direção. O filtro por tema e os simulados mudaram meu ritmo de preparação.",
    author: "Maria Eduarda, R2",
    initials: "ME"
  },
  {
    quote:
      "A experiência é rápida, organizada e objetiva. Hoje eu reviso com base em dados, não em achismo.",
    author: "Guilherme S., preparação para TEA",
    initials: "GS"
  },
  {
    quote:
      "Finalmente encontrei uma plataforma focada na realidade da nossa prova, sem conteúdo solto.",
    author: "Michelly Pires, candidata ao TSA",
    initials: "MP"
  }
];

// TODO: atualize price com os valores reais dos planos antes de publicar
const plans = [
  {
    id: "me-tea",
    label: "Plano ME/TEA",
    volume: "+1.600 questões",
    price: "R$ 1.048",
    period: "/ano",
    features: [
      "Foco em ME1, ME2, ME3 e TEA",
      "Filtros por tema e nível",
      "Simulados e comentários explicativos",
      "Dashboard de desempenho",
      "12 meses de acesso + garantia de 7 dias"
    ],
    btnLabel: "Assinar ME/TEA",
    btnClass: "btn-outline btn-block",
    whatsappMsg: "Olá! Quero assinar o Plano ME/TEA do Anestesia Questões.",
    featured: false
  },
  {
    id: "tsa",
    label: "Plano TSA",
    volume: "+2.500 questões",
    price: "R$ 1.398",
    period: "/ano",
    badge: "Melhor Escolha para Aprovação Completa",
    features: [
      "Questões de TSA, TEA e residência (ME1, ME2, ME3)",
      "Cobertura ampliada para preparação avançada",
      "Simulados personalizados + revisão inteligente",
      "Análise de desempenho para ajustes finos",
      "12 meses de acesso + garantia de 7 dias"
    ],
    btnLabel: "Assinar TSA",
    btnClass: "btn-primary btn-block",
    whatsappMsg: "Olá! Quero assinar o Plano TSA do Anestesia Questões.",
    featured: true
  }
];

const faqs = [
  {
    q: "Para quais provas a plataforma é indicada?",
    a: "A plataforma foi desenhada para quem está se preparando para TEA, TSA e Residência/ME (R1, R2 e R3)."
  },
  {
    q: "Funciona no celular?",
    a: "Sim. Você pode estudar no celular e no computador com ótima experiência de uso em ambos."
  },
  {
    q: "Quanto tempo de acesso eu tenho?",
    a: "Os planos atuais entregam 12 meses de acesso com atualizações contínuas durante o período."
  },
  {
    q: "Como funciona pagamento, renovação e cancelamento?",
    a: "A assinatura é feita no checkout da Eduzz com fluxo seguro. As regras de renovação e cancelamento ficam claras no checkout antes da confirmação."
  },
  {
    q: "Existe garantia?",
    a: "Sim. Você conta com garantia de 7 dias para avaliar a plataforma com tranquilidade."
  }
];

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Plataforma Premium de Questões para Anestesiologia</p>
              <h1>
                A preparação mais estratégica para{" "}
                <span>TEA, TSA e Residência</span>
              </h1>
              <p className="lead">
                Banco completo de questões, simulados personalizados e métricas de desempenho
                para médicos e residentes que querem estudar com direção e performar no nível da prova.
              </p>

              <div className="audience-tags" aria-label="Perfis atendidos">
                <span>Residentes R1, R2 e R3</span>
                <span>Especialização em Anestesiologia</span>
                <span>Candidatos a TEA e TSA</span>
              </div>

              <div className="cta-row">
                <a className="btn btn-primary" href="#planos">
                  Assinar e Começar Agora
                </a>
                <a className="btn btn-ghost" href="#como-funciona">
                  Ver Como Funciona
                </a>
              </div>

              <p className="micro-proof">
                +4.100 questões combinadas nos módulos • 12 meses de acesso • 7 dias de garantia
              </p>
            </div>

            <aside className="hero-panel" aria-label="Resumo de valor da plataforma">
              <h2>O que você destrava ao assinar</h2>
              <ul>
                <li>Questões organizadas por prova, tema e nível</li>
                <li>Simulados para treino realista e tomada de decisão</li>
                <li>Comentários para revisão orientada por erro</li>
                <li>Dashboard para acompanhar evolução com clareza</li>
                <li>Experiência rápida no desktop e no mobile</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Dor */}
        <section className="section" id="dor">
          <div className="container">
            <p className="section-kicker">Diagnóstico</p>
            <h2>Se preparar sem método custa tempo, confiança e desempenho</h2>
            <div className="pain-grid">
              {painPoints.map((item) => (
                <article key={item} className="card">
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Solução */}
        <section className="section section-soft" id="solucao">
          <div className="container solution-grid">
            <div>
              <p className="section-kicker">Solução Estratégica</p>
              <h2>Uma plataforma única para transformar estudo em aprovação</h2>
              <p className="section-text">
                O Anestesia Questões organiza sua preparação em um fluxo claro: você filtra o que
                importa, treina com intenção e acompanha dados reais para corrigir lacunas antes da prova.
              </p>
              <p className="section-text">
                Em vez de estudar de forma fragmentada, você segue uma estratégia mensurável e
                consistente até o dia do exame.
              </p>
              <a className="btn btn-primary solution-cta" href="#planos">
                Quero Estudar com Estratégia
              </a>
            </div>
            <div className="solution-proof" aria-label="Provas de valor">
              <p><strong>Foco real:</strong> TEA, TSA e Residência</p>
              <p><strong>Execução:</strong> banco de questões + simulados + revisão</p>
              <p><strong>Controle:</strong> métricas para decisão de estudo</p>
              <p><strong>Performance:</strong> plataforma moderna e rápida</p>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="section" id="beneficios">
          <div className="container">
            <p className="section-kicker">Principais benefícios</p>
            <h2>Clareza para estudar melhor e evoluir mais rápido</h2>
            <div className="benefit-grid">
              {benefits.map((item) => (
                <article key={item.title} className="card benefit-card">
                  <div className="benefit-icon" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={benefitIcons[item.title]} />
                    </svg>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="section section-soft" id="como-funciona">
          <div className="container">
            <p className="section-kicker">Como funciona</p>
            <h2>Quatro passos para um estudo inteligente</h2>
            <div className="steps-grid">
              {steps.map((step, index) => (
                <article className="step-card" key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Mockup da plataforma */}
        <section className="section" id="plataforma">
          <div className="container">
            <p className="section-kicker">A plataforma</p>
            <h2>Interface pensada para quem estuda com objetivo</h2>
            <p className="section-text">
              Navegação rápida, filtros por prova e tema, simulados cronometrados e dashboard que
              mostra exatamente onde você está na preparação.
            </p>
            <div className="mockup-shell" aria-label="Preview da interface da plataforma">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span /><span /><span />
                </div>
                <div className="mockup-tabs">
                  <span className="mockup-tab active">TEA</span>
                  <span className="mockup-tab">TSA</span>
                  <span className="mockup-tab">Residência</span>
                </div>
              </div>
              <div className="mockup-body">
                <aside className="mockup-sidebar">
                  <p className="mockup-label">Filtros</p>
                  <div className="mockup-filter active">Farmacologia</div>
                  <div className="mockup-filter">Anestesia Geral</div>
                  <div className="mockup-filter">Bloqueios</div>
                  <div className="mockup-filter">Emergências</div>
                  <hr className="mockup-divider" />
                  <p className="mockup-label">Progresso</p>
                  <div className="mockup-stat-row">
                    <span>Acertos</span><strong>78%</strong>
                  </div>
                  <div className="mockup-stat-row">
                    <span>Questões</span><strong>142</strong>
                  </div>
                  <div className="mockup-progress-bar">
                    <div className="mockup-progress-fill" style={{ width: "78%" }} />
                  </div>
                </aside>
                <div className="mockup-main">
                  <div className="mockup-question-meta">
                    <span className="mockup-badge">TEA 2023 · Farmacologia</span>
                    <span className="mockup-qnum">Questão 4 / 10</span>
                  </div>
                  <p className="mockup-question">
                    Qual dos agentes halogenados apresenta menor coeficiente de solubilidade sangue-gás,
                    resultando em indução e recuperação mais rápidas?
                  </p>
                  <div className="mockup-options">
                    {["Isoflurano", "Sevoflurano", "Desflurano", "Halotano"].map((opt, i) => (
                      <div
                        key={opt}
                        className={`mockup-option${i === 2 ? " correct" : i === 1 ? " selected" : ""}`}
                      >
                        <span className="mockup-option-letter">{String.fromCharCode(65 + i)}</span>
                        {opt}
                      </div>
                    ))}
                  </div>
                  <div className="mockup-explanation">
                    <strong>Comentário:</strong> O desflurano possui o menor coeficiente de solubilidade
                    sangue-gás (0,42), o que resulta em indução e recuperação mais rápidas comparado
                    aos demais halogenados.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prova Social */}
        <section className="section section-soft" id="prova-social">
          <div className="container">
            <p className="section-kicker">Prova social e autoridade</p>
            <h2>Credibilidade para quem leva aprovação a sério</h2>
            <div className="stats-grid">
              <article className="card stat-card">
                <strong>+4.100</strong>
                <p>questões combinadas entre os módulos atuais</p>
              </article>
              <article className="card stat-card">
                <strong>12 meses</strong>
                <p>de acesso para estudo contínuo e estruturado</p>
              </article>
              <article className="card stat-card">
                <strong>7 dias</strong>
                <p>de garantia para testar a plataforma sem risco</p>
              </article>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((item) => (
                <article key={item.author} className="card testimonial-card">
                  <p>"{item.quote}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" aria-hidden="true">{item.initials}</div>
                    <strong>{item.author}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="section" id="diferenciais">
          <div className="container">
            <p className="section-kicker">Diferenciais</p>
            <h2>Por que o Anestesia Questões converte esforço em resultado</h2>
            <div className="diff-grid">
              {differentials.map((block) => (
                <article key={block.title} className={`card diff-card diff-card-${block.type}`}>
                  <h3>{block.title}</h3>
                  <ul>
                    {block.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Planos */}
        <section className="section section-soft" id="planos">
          <div className="container">
            <p className="section-kicker">Planos e oferta</p>
            <h2>Escolha o plano ideal para seu momento de carreira</h2>
            <p className="section-text plans-intro">
              Você assina com segurança via Eduzz, recebe acesso rápido e começa a estudar no mesmo dia.
            </p>

            <div className="urgency-note" role="note">
              🔒 Acesso liberado em minutos após confirmação &nbsp;·&nbsp; Garantia de 7 dias sem risco &nbsp;·&nbsp; Cancele quando quiser
            </div>

            <div className="plans-grid">
              {plans.map((plan) => (
                <article key={plan.id} className={`card plan-card${plan.featured ? " featured" : ""}`}>
                  {plan.badge && <p className="plan-badge">{plan.badge}</p>}
                  <p className="plan-label">{plan.label}</p>
                  <p className="plan-volume">{plan.volume}</p>
                  <div className="plan-price">
                    <strong>{plan.price}</strong>
                    <span>{plan.period}</span>
                  </div>
                  <ul>
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  {/* TODO: substitua o href pelo link do checkout Eduzz quando disponível */}
                  <a
                    href={`${whatsappBase}?text=${encodeURIComponent(plan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${plan.btnClass}`}
                  >
                    {plan.btnLabel}
                  </a>
                </article>
              ))}
            </div>

            <p className="security-note">
              Pagamento seguro via Eduzz. Se não fizer sentido para você, solicite reembolso em até 7 dias.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-soft" id="faq">
          <div className="container">
            <p className="section-kicker">FAQ</p>
            <h2>Perguntas frequentes antes de assinar</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary>
                    <span>{item.q}</span>
                    <svg
                      className="faq-chevron"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section final-cta" id="fechamento">
          <div className="container">
            <h2>Seu próximo resultado começa com estratégia de estudo</h2>
            <p>
              Se você quer chegar em TEA, TSA ou Residência com mais confiança, direção e
              consistência, o melhor momento para estruturar sua preparação é agora.
            </p>
            <div className="cta-row cta-center">
              <a className="btn btn-primary" href="#planos">
                Quero Assinar Agora
              </a>
              <a
                className="btn btn-ghost"
                href={whatsappBase}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tirar Dúvidas no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
