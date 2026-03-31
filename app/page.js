import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

const checkoutUrl = "https://chk.eduzz.com/2219590";

const painPoints = [
  "Você estuda muito, mas sem saber com precisão o que mais cai em TEA, TSA e Residência.",
  "Falta um banco realmente organizado para revisar por tema, prova e nível de dificuldade.",
  "A rotina corrida da residência reduz seu tempo e aumenta a insegurança na reta final.",
  "Sem métricas claras, fica difícil corrigir lacunas e evoluir com consistência."
];

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
    title: "Estudo solto",
    points: [
      "Conteúdo disperso em várias fontes",
      "Baixa previsibilidade de desempenho",
      "Decisões de revisão no improviso"
    ]
  },
  {
    title: "Anestesia Questões",
    points: [
      "Banco estruturado para provas reais",
      "Métricas claras para decisão objetiva",
      "Fluxo de estudo inteligente e contínuo"
    ]
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
        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Plataforma Premium de Questões para Anestesiologia</p>
              <h1>
                A preparação mais estratégica para <span>TEA, TSA e Residência</span>
              </h1>
              <p className="lead">
                Banco completo de questões, simulados personalizados e métricas de desempenho para médicos e residentes que querem estudar com direção e performar no nível da prova.
              </p>

              <div className="audience-tags" aria-label="Perfis atendidos">
                <span>Residentes R1, R2 e R3</span>
                <span>Especialização em Anestesiologia</span>
                <span>Candidatos a TEA e TSA</span>
              </div>

              <div className="cta-row">
                <a className="btn btn-primary" href={checkoutUrl} target="_blank" rel="noopener noreferrer">
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

        <section className="section section-soft" id="solucao">
          <div className="container solution-grid">
            <div>
              <p className="section-kicker">Solução Estratégica</p>
              <h2>Uma plataforma única para transformar estudo em aprovação</h2>
              <p className="section-text">
                O Anestesia Questões organiza sua preparação em um fluxo claro: você filtra o que importa, treina com intenção e acompanha dados reais para corrigir lacunas antes da prova.
              </p>
              <p className="section-text">
                Em vez de estudar de forma fragmentada, você segue uma estratégia mensurável e consistente até o dia do exame.
              </p>
              <a className="btn btn-primary solution-cta" href={checkoutUrl} target="_blank" rel="noopener noreferrer">
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

        <section className="section" id="beneficios">
          <div className="container">
            <p className="section-kicker">Principais benefícios</p>
            <h2>Clareza para estudar melhor e evoluir mais rápido</h2>
            <div className="benefit-grid">
              {benefits.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

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

        <section className="section" id="prova-social">
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
              <article className="card testimonial-card">
                <p>
                  "Passei a estudar com direção. O filtro por tema e os simulados mudaram meu ritmo de preparação."
                </p>
                <strong>Maria Eduarda, R2</strong>
              </article>
              <article className="card testimonial-card">
                <p>
                  "A experiência é rápida, organizada e objetiva. Hoje eu reviso com base em dados, não em achismo."
                </p>
                <strong>Guilherme S., preparação para TEA</strong>
              </article>
              <article className="card testimonial-card">
                <p>
                  "Finalmente encontrei uma plataforma focada na realidade da nossa prova, sem conteúdo solto."
                </p>
                <strong>Michelly Pires, candidata ao TSA</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="diferenciais">
          <div className="container">
            <p className="section-kicker">Diferenciais</p>
            <h2>Por que o Anestesia Questões converte esforço em resultado</h2>
            <div className="diff-grid">
              {differentials.map((block) => (
                <article key={block.title} className="card">
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

        <section className="section" id="planos">
          <div className="container">
            <p className="section-kicker">Planos e oferta</p>
            <h2>Escolha o plano ideal para seu momento de carreira</h2>
            <p className="section-text plans-intro">
              Você assina com segurança via Eduzz, recebe acesso rápido e começa a estudar no mesmo dia.
            </p>

            <div className="plans-grid">
              <article className="card plan-card">
                <p className="plan-label">Plano ME/TEA</p>
                <p className="plan-volume">+1.600 questões</p>
                <ul>
                  <li>Foco em ME1, ME2, ME3 e TEA</li>
                  <li>Filtros por tema e nível</li>
                  <li>Simulados e comentários explicativos</li>
                  <li>Dashboard de desempenho</li>
                  <li>12 meses de acesso + garantia de 7 dias</li>
                </ul>
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-block"
                >
                  Assinar ME/TEA
                </a>
              </article>

              <article className="card plan-card featured">
                <p className="plan-badge">Melhor Escolha para Aprovação Completa</p>
                <p className="plan-label">Plano TSA</p>
                <p className="plan-volume">+2.500 questões</p>
                <ul>
                  <li>Questões de TSA, TEA e residência (ME1, ME2, ME3)</li>
                  <li>Cobertura ampliada para preparação avançada</li>
                  <li>Simulados personalizados + revisão inteligente</li>
                  <li>Análise de desempenho para ajustes finos</li>
                  <li>12 meses de acesso + garantia de 7 dias</li>
                </ul>
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block"
                >
                  Assinar TSA
                </a>
              </article>
            </div>

            <p className="security-note">
              Pagamento seguro via Eduzz. Se não fizer sentido para você, solicite reembolso em até 7 dias.
            </p>
          </div>
        </section>

        <section className="section section-soft" id="faq">
          <div className="container">
            <p className="section-kicker">FAQ</p>
            <h2>Perguntas frequentes antes de assinar</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section final-cta" id="fechamento">
          <div className="container">
            <h2>Seu próximo resultado começa com estratégia de estudo</h2>
            <p>
              Se você quer chegar em TEA, TSA ou Residência com mais confiança, direção e consistência, o melhor momento para estruturar sua preparação é agora.
            </p>
            <div className="cta-row cta-center">
              <a className="btn btn-primary" href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Quero Assinar Agora
              </a>
              <a className="btn btn-ghost" href="https://wa.me/5515991008159" target="_blank" rel="noopener noreferrer">
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
