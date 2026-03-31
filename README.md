# Anestesia Questões - Landing de Conversão (Next.js)

## Executar localmente

1. Instale dependências:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

3. Build de produção:

```bash
npm run build && npm run start
```

## Rotas implementadas

- `/` - Landing principal de máxima conversão
- `/checkout/sucesso` - Confirmação de compra (Eduzz)
- `/checkout/processando` - Pagamento em processamento
- `/checkout/boas-vindas` - Acesso liberado

## Query params opcionais nas páginas de checkout

- `appUrl` - URL base do app do aluno
- `supportUrl` - URL de suporte (WhatsApp)
