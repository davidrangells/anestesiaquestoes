# Checkout de Sucesso (Eduzz)

## URL da página

- `https://SEU-DOMINIO/checkout/sucesso/`

## Como configurar na Eduzz

1. Abra o checkout/produto na Eduzz.
2. Configure a URL de redirecionamento pós-pagamento para:
   - `https://SEU-DOMINIO/checkout/sucesso/`
3. Salve e publique.

## Links configuráveis

A página já funciona sem configuração extra, com estes padrões:

- Portal do aluno: `https://anestesia-questoes-aluno.vercel.app/aluno/entrar`
- Suporte: `https://wa.me/5515991008159`

Se quiser customizar sem alterar o código, use query string na URL:

- `?alunoAppUrl=https://seu-portal.com&supportWhatsAppUrl=https://wa.me/55...`

Exemplo:

- `https://SEU-DOMINIO/checkout/sucesso/?alunoAppUrl=https://anestesia-questoes-aluno.vercel.app&supportWhatsAppUrl=https://wa.me/5515991008159`

Também é possível injetar config global antes de `success.js`:

```html
<script>
  window.LANDING_RUNTIME_CONFIG = {
    alunoAppUrl: "https://anestesia-questoes-aluno.vercel.app",
    supportWhatsAppUrl: "https://wa.me/5515991008159",
  };
</script>
```
