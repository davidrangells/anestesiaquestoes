import PostCheckoutLayout from "@/components/PostCheckoutLayout";

export const metadata = {
  title: "Pagamento em processamento | Anestesia Questões",
  description: "Seu pagamento está em análise. Veja o que fazer enquanto aguarda a confirmação."
};

export default function ProcessingPage({ searchParams }) {
  const appUrl = searchParams?.appUrl;
  const supportUrl = searchParams?.supportUrl;

  return (
    <PostCheckoutLayout
      flag="Pagamento em processamento"
      title="Estamos aguardando a confirmação do seu pagamento"
      subtitle="Isso pode levar alguns instantes, dependendo da forma de pagamento escolhida no checkout da Eduzz."
      steps={[
        {
          title: "1. Aguarde a confirmação automática",
          description: "Você receberá o status no e-mail informado durante a compra."
        },
        {
          title: "2. Evite repetir a compra",
          description: "Para não gerar cobranças duplicadas, aguarde antes de tentar novamente."
        },
        {
          title: "3. Em caso de demora, acione o suporte",
          description: "Com seu e-mail e comprovante, o time ajuda rapidamente a validar sua situação."
        }
      ]}
      appUrl={appUrl}
      supportUrl={supportUrl}
      primaryLabel="Ir para página de login"
      secondaryLabel="Preciso de ajuda no suporte"
      quickHelp="Compra em processamento é normal em alguns meios de pagamento. Se ultrapassar o prazo previsto no checkout, fale com o suporte."
    />
  );
}
