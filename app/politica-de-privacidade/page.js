import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidade | Anestesia Questões",
  description: "Política de privacidade e proteção de dados do Anestesia Questões."
};

export default function PrivacyPage() {
  return (
    <>
      <LegalHeader />
      <main className="legal-page">
        <section className="container legal-shell">
          <p className="section-kicker">Documento Legal</p>
          <h1>Política de Privacidade</h1>
          <p className="legal-updated">Última atualização: 31 de março de 2026.</p>

          <div className="legal-block">
            <h2>1. Compromisso com sua privacidade</h2>
            <p>
              O Anestesia Questões tem compromisso com o tratamento responsável de dados pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
            </p>
            <p>
              Esta Política explica como coletamos, usamos, armazenamos, compartilhamos e protegemos seus dados ao utilizar nosso site, plataforma e serviços.
            </p>
          </div>

          <div className="legal-block">
            <h2>2. Dados que coletamos</h2>
            <p>Podemos coletar as seguintes categorias de dados:</p>
            <ul>
              <li>dados cadastrais: nome, e-mail, telefone e informações de identificação da conta;</li>
              <li>dados de pagamento e cobrança, processados por parceiros especializados;</li>
              <li>dados de uso da plataforma: interações, progresso, desempenho e histórico de estudo;</li>
              <li>dados de atendimento: mensagens enviadas por e-mail, suporte e canais de contato;</li>
              <li>dados técnicos: dispositivo, navegador, logs, cookies e identificadores de sessão.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>3. Finalidades do tratamento</h2>
            <p>Tratamos os dados pessoais para:</p>
            <ul>
              <li>prestar os serviços contratados e liberar acesso à plataforma;</li>
              <li>processar pagamentos, cobranças, estornos e suporte financeiro;</li>
              <li>enviar comunicações operacionais, avisos de serviço e segurança da conta;</li>
              <li>melhorar funcionalidades, estabilidade, navegação e experiência do usuário;</li>
              <li>cumprir obrigações legais, regulatórias, fiscais e ordens de autoridades competentes;</li>
              <li>realizar comunicações de marketing quando houver base legal aplicável.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>4. Bases legais</h2>
            <p>
              O tratamento pode se basear, conforme o caso, em execução de contrato, cumprimento de obrigação legal, legítimo interesse e consentimento, nos termos da LGPD.
            </p>
          </div>

          <div className="legal-block">
            <h2>5. Compartilhamento de dados</h2>
            <p>Seus dados podem ser compartilhados com:</p>
            <ul>
              <li>prestadores essenciais para operação da plataforma (hospedagem, tecnologia, suporte e analytics);</li>
              <li>parceiros de pagamento, antifraude e meios de cobrança;</li>
              <li>autoridades públicas, quando houver obrigação legal ou ordem válida.</li>
            </ul>
            <p>
              Não comercializamos seus dados pessoais. Compartilhamentos ocorrem somente quando necessários para operação, segurança, cumprimento legal e execução dos serviços.
            </p>
          </div>

          <div className="legal-block">
            <h2>6. Cookies e tecnologias similares</h2>
            <p>
              Utilizamos cookies e tecnologias correlatas para autenticação, segurança, desempenho e análise de uso. Você pode gerenciar preferências diretamente em seu navegador, observando que a desativação de certos cookies pode impactar funcionalidades.
            </p>
          </div>

          <div className="legal-block">
            <h2>7. Armazenamento e retenção</h2>
            <p>
              Os dados são armazenados pelo tempo necessário para cumprir as finalidades desta Política e exigências legais, regulatórias, contratuais e de defesa em processos administrativos ou judiciais.
            </p>
            <p>
              Quando cabível e solicitado, seus dados poderão ser excluídos ou anonimizados, respeitadas obrigações legais de retenção.
            </p>
          </div>

          <div className="legal-block">
            <h2>8. Segurança da informação</h2>
            <p>
              Adotamos medidas técnicas e administrativas adequadas para proteger dados contra acessos não autorizados, perda, alteração, divulgação ou destruição indevida, incluindo criptografia de tráfego e controles de acesso.
            </p>
            <p>
              Apesar dos esforços, nenhum sistema é completamente invulnerável. Recomendamos manter senha forte, uso individual da conta e boas práticas de segurança digital.
            </p>
          </div>

          <div className="legal-block">
            <h2>9. Direitos do titular</h2>
            <p>Nos termos da LGPD, você pode solicitar, quando aplicável:</p>
            <ul>
              <li>confirmação da existência de tratamento e acesso aos dados;</li>
              <li>correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
              <li>portabilidade, revogação de consentimento e informações sobre compartilhamentos;</li>
              <li>eliminação de dados tratados com consentimento, quando cabível.</li>
            </ul>
            <p>
              Solicitações podem ser enviadas para <a href="mailto:contato@anestesiaquestoes.com.br">contato@anestesiaquestoes.com.br</a>.
            </p>
          </div>

          <div className="legal-block">
            <h2>10. Menores de idade</h2>
            <p>
              A plataforma é destinada a público com 13 anos ou mais, conforme sua política atual. Caso identifiquemos tratamento indevido de dados de menores em desacordo com a legislação aplicável, adotaremos medidas de regularização e exclusão cabíveis.
            </p>
          </div>

          <div className="legal-block">
            <h2>11. Sites e serviços de terceiros</h2>
            <p>
              Nosso site pode conter links para ambientes de terceiros. Esta Política não se aplica a sites externos, que possuem regras próprias de privacidade e segurança.
            </p>
          </div>

          <div className="legal-block">
            <h2>12. Atualizações desta política</h2>
            <p>
              Esta Política pode ser atualizada periodicamente. A versão vigente estará sempre disponível nesta página com a respectiva data de revisão.
            </p>
          </div>

          <div className="legal-block">
            <h2>13. Contato</h2>
            <p>
              Para dúvidas, solicitações ou reclamações sobre privacidade e dados pessoais, entre em contato pelo e-mail <a href="mailto:contato@anestesiaquestoes.com.br">contato@anestesiaquestoes.com.br</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
