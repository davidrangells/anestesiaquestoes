import PostCheckoutLayout from "@/components/PostCheckoutLayout";

export const metadata = {
  title: "Acesso liberado | Anestesia Questões",
  description: "Seu acesso foi ativado. Saiba como dar o primeiro passo na plataforma."
};

export default function WelcomePage({ searchParams }) {
  const appUrl = searchParams?.appUrl;
  const supportUrl = searchParams?.supportUrl;
  const baseApp = (appUrl || "https://anestesia-questoes-aluno.vercel.app").replace(/\/$/, "");

  return (
    <PostCheckoutLayout
      flag="Acesso liberado"
      title="Bem-vindo ao Anestesia Questões"
      subtitle="Sua plataforma está pronta. Agora é hora de estudar com método, foco e rotina orientada por dados."
      steps={[
        {
          title: "1. Defina seu objetivo",
          description: "Escolha TEA, TSA ou Residência para direcionar imediatamente seus filtros de estudo."
        },
        {
          title: "2. Faça um simulado inicial",
          description: "Use o primeiro simulado para identificar pontos fortes e lacunas com precisão."
        },
        {
          title: "3. Monte sua rotina de revisão",
          description: "Acompanhe o dashboard e priorize temas de maior impacto para subir sua performance."
        }
      ]}
      appUrl={appUrl}
      supportUrl={supportUrl}
      primaryLabel="Começar agora na plataforma"
      secondaryLabel="Suporte para primeiro acesso"
      primaryHref={`${baseApp}/aluno/entrar`}
      secondaryHref={supportUrl}
      quickHelp="Dica de alto desempenho: faça seu primeiro bloco de questões hoje para criar tração imediata na preparação."
    />
  );
}
