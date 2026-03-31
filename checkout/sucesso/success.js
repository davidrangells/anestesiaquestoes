(function () {
  var DEFAULT_ALUNO_APP_URL = "https://anestesia-questoes-aluno.vercel.app";
  var DEFAULT_SUPPORT_WHATSAPP_URL = "https://wa.me/5515991008159";

  var config = window.LANDING_RUNTIME_CONFIG || {};
  var params = new URLSearchParams(window.location.search);

  var alunoAppUrl =
    (config.alunoAppUrl && String(config.alunoAppUrl).trim()) ||
    (params.get("alunoAppUrl") && String(params.get("alunoAppUrl")).trim()) ||
    DEFAULT_ALUNO_APP_URL;

  var supportWhatsAppUrl =
    (config.supportWhatsAppUrl && String(config.supportWhatsAppUrl).trim()) ||
    (params.get("supportWhatsAppUrl") && String(params.get("supportWhatsAppUrl")).trim()) ||
    DEFAULT_SUPPORT_WHATSAPP_URL;

  var alunoEntrarUrl = alunoAppUrl.replace(/\/$/, "") + "/aluno/entrar";

  var ctaPrimary = document.getElementById("cta-access-primary");
  var ctaSecondary = document.getElementById("cta-access-secondary");
  var ctaSupport = document.getElementById("cta-support-whatsapp");

  if (ctaPrimary) ctaPrimary.setAttribute("href", alunoEntrarUrl);
  if (ctaSecondary) ctaSecondary.setAttribute("href", alunoEntrarUrl);
  if (ctaSupport) ctaSupport.setAttribute("href", supportWhatsAppUrl);
})();
