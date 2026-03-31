import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Termos de Uso | Anestesia Questões",
  description: "Condições de uso da plataforma Anestesia Questões."
};

export default function TermsPage() {
  return (
    <>
      <LegalHeader />
      <main className="legal-page">
        <section className="container legal-shell">
          <p className="section-kicker">Documento Legal</p>
          <h1>Termos de Uso</h1>
          <p className="legal-updated">Última atualização: 31 de março de 2026.</p>

          <div className="legal-block">
            <h2>1. Objeto e abrangência</h2>
            <p>
              O Anestesia Questões é uma plataforma educacional online voltada para médicos e residentes em anestesiologia, com foco em preparação para TEA, TSA e residência médica.
            </p>
            <p>
              Estes Termos de Uso se aplicam a todos os visitantes, usuários e membros, cadastrados ou não, que utilizem o site, a plataforma e serviços relacionados.
            </p>
          </div>

          <div className="legal-block">
            <h2>2. Aceitação dos termos</h2>
            <p>
              Ao navegar na plataforma, criar conta ou contratar um plano, você declara que leu, compreendeu e concorda com estes Termos de Uso e com a Política de Privacidade.
            </p>
            <p>
              Caso não concorde com as condições deste documento, não utilize os serviços do Anestesia Questões.
            </p>
          </div>

          <div className="legal-block">
            <h2>3. Cadastro, conta e segurança</h2>
            <p>
              Para acessar funcionalidades privadas, é necessário cadastro com informações verdadeiras, atualizadas e completas.
            </p>
            <p>
              Você é responsável por manter a confidencialidade de login e senha, bem como por todas as atividades realizadas em sua conta.
            </p>
            <p>
              Em caso de suspeita de uso indevido, comunique imediatamente pelo e-mail <a href="mailto:contato@anestesiaquestoes.com.br">contato@anestesiaquestoes.com.br</a>.
            </p>
          </div>

          <div className="legal-block">
            <h2>4. Uso permitido e condutas proibidas</h2>
            <p>É proibido utilizar a plataforma para:</p>
            <ul>
              <li>publicar conteúdo ilícito, ofensivo, difamatório, fraudulento ou que viole direitos de terceiros;</li>
              <li>tentar obter acesso não autorizado a sistemas, contas, dados ou infraestrutura;</li>
              <li>distribuir malware, scripts maliciosos ou práticas que comprometam segurança e disponibilidade;</li>
              <li>copiar, revender, sublicenciar, reproduzir ou explorar comercialmente conteúdo sem autorização;</li>
              <li>utilizar identidade falsa, personificar terceiros ou fraudar informações de cadastro e pagamento.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>5. Planos, pagamento e reajustes</h2>
            <p>
              O acesso aos serviços pagos depende da contratação de plano disponível no checkout oficial. Você autoriza a cobrança pelos meios de pagamento escolhidos no ato da compra.
            </p>
            <p>
              O Anestesia Questões poderá atualizar preços, planos e condições comerciais a qualquer tempo, com efeitos para novas contratações ou renovações futuras.
            </p>
          </div>

          <div className="legal-block">
            <h2>6. Cancelamento e reembolso</h2>
            <p>
              Nos termos da legislação aplicável, compras realizadas no site podem ser canceladas em até 7 (sete) dias corridos, contados da contratação, com solicitação pelo e-mail <a href="mailto:contato@anestesiaquestoes.com.br">contato@anestesiaquestoes.com.br</a>.
            </p>
            <p>
              O reembolso será processado conforme o meio de pagamento utilizado, podendo depender de prazos de operadoras, bancos e intermediadores de pagamento. Para cartão, boleto e PIX, o prazo operacional informado atualmente pode chegar a até 60 (sessenta) dias.
            </p>
            <p>
              Regras específicas de assinatura, renovação e eventuais encargos de cancelamento para planos promocionais ou anuais serão apresentadas no checkout no momento da contratação e passam a integrar este Termo.
            </p>
          </div>

          <div className="legal-block">
            <h2>7. Propriedade intelectual</h2>
            <p>
              Todo conteúdo da plataforma, incluindo textos, questões, comentários, layout, identidade visual, vídeos, gráficos, bancos de dados e materiais didáticos, é protegido por direitos autorais e demais normas de propriedade intelectual.
            </p>
            <p>
              Não é permitido copiar, reproduzir, distribuir, adaptar, fazer engenharia reversa ou disponibilizar conteúdo da plataforma sem autorização prévia e expressa.
            </p>
          </div>

          <div className="legal-block">
            <h2>8. Disponibilidade e limitações</h2>
            <p>
              O serviço é disponibilizado no estado em que se encontra, podendo sofrer interrupções temporárias, manutenções, atualizações, indisponibilidades ou limitações técnicas.
            </p>
            <p>
              O Anestesia Questões não garante resultado acadêmico específico, aprovação em provas ou ausência total de falhas técnicas, embora adote esforços razoáveis para qualidade e continuidade do serviço.
            </p>
          </div>

          <div className="legal-block">
            <h2>9. Suspensão e encerramento de conta</h2>
            <p>
              O Anestesia Questões poderá suspender ou encerrar contas, com ou sem aviso prévio, em casos de violação destes Termos, uso indevido, fraude, risco à segurança, determinação legal ou inadimplemento.
            </p>
          </div>

          <div className="legal-block">
            <h2>10. Proteção de dados e privacidade</h2>
            <p>
              O tratamento de dados pessoais segue a Política de Privacidade e a legislação vigente, incluindo a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).
            </p>
          </div>

          <div className="legal-block">
            <h2>11. Alterações destes termos</h2>
            <p>
              Este documento poderá ser atualizado periodicamente. A versão vigente será sempre publicada nesta página com data de atualização.
            </p>
            <p>
              O uso continuado da plataforma após a publicação de alterações caracteriza concordância com os novos termos.
            </p>
          </div>

          <div className="legal-block">
            <h2>12. Contato e foro</h2>
            <p>
              Em caso de dúvidas, solicitações ou notificações, entre em contato em <a href="mailto:contato@anestesiaquestoes.com.br">contato@anestesiaquestoes.com.br</a>.
            </p>
            <p>
              Fica eleito o foro da Comarca da Capital do Estado de São Paulo, com renúncia de qualquer outro, para dirimir conflitos relacionados a este Termo, ressalvados os direitos legais do consumidor.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
