import PostCheckoutLayout from "@/components/PostCheckoutLayout";

export const metadata = {
  title: "Pagamento confirmado | Anestesia Questões",
  description: "Compra aprovada. Veja os próximos passos para acessar sua plataforma."
};

export default function SuccessPage({ searchParams }) {
  const appUrl = searchParams?.appUrl;
  const supportUrl = searchParams?.supportUrl;
  const loginUrl = `${(appUrl || "https://anestesia-questoes-aluno.vercel.app").replace(/\/$/, "")}/aluno/entrar`;

  return (
    <PostCheckoutLayout
      flag="Pagamento confirmado"
      title="Sua assinatura foi aprovada e seu acesso está sendo liberado"
      subtitle="Parabéns pela decisão. Em poucos instantes você já pode entrar na plataforma e iniciar seus simulados e questões."
      steps={[
        {
          title: "1. Verifique seu e-mail de compra",
          description: "Confira caixa de entrada, spam e promoções para localizar as instruções de acesso."
        },
        {
          title: "2. Use o mesmo e-mail no login",
          description: "Acesse com o e-mail da compra para criar senha e ativar sua conta com segurança."
        },
        {
          title: "3. Comece pelo primeiro simulado",
          description: "Inicie com um bloco de questões para mapear seu nível e definir a estratégia de revisão."
        }
      ]}
      appUrl={appUrl}
      supportUrl={supportUrl}
      primaryLabel="Entrar na plataforma"
      secondaryLabel="Falar com o suporte"
      primaryHref={loginUrl}
      secondaryHref={supportUrl}
      quickHelp="Se o acesso não chegar em alguns minutos, nossa equipe resolve rápido no WhatsApp com seu e-mail de compra."
    />
  );
}
