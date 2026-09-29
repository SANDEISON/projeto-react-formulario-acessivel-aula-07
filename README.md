# Formulário acessível com React - Aula 07

Projeto didático sobre formulários controlados, validação, feedback ao usuário e acessibilidade básica.

## Executar

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

```bash
npm install
npm run dev
```

Abra a URL mostrada pelo Vite, normalmente `http://localhost:5173`. Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Mapa dos tópicos

| Tópico | Arquivo | Evidência |
| --- | --- | --- |
| Campo controlado | `RegistrationForm.jsx` | `value`/`checked` vêm do estado e `onChange` atualiza o estado. |
| Atualização imutável | `RegistrationForm.jsx` | Spread cria novos objetos de valores e erros. |
| Envio | `RegistrationForm.jsx` | `onSubmit` chama `preventDefault()` e valida os dados. |
| Validação | `validation/validateRegistration.js` | Função pura devolve um objeto de erros por campo. |
| Feedback | `RegistrationForm.jsx` | Erros próximos ao campo e região `aria-live` comunicam o resultado. |
| Acessibilidade | `FormField.jsx` | `label`, ids, `aria-invalid`, `aria-describedby` e `role="alert"`. |
| Agrupamento | `RegistrationForm.jsx` | `fieldset` e `legend` dão contexto aos radios. |
| Elevação de estado | `App.jsx` | O envio válido sobe e aparece em `SubmissionSummary`. |

## Roteiro de exploração

1. Digite no campo nome e observe o estado controlar o valor.
2. Envie o formulário vazio e acompanhe o foco no primeiro erro.
3. Inspecione o vínculo entre `label htmlFor`, `input id` e mensagens de ajuda.
4. Preencha os dados corretamente e observe a região de status e o resumo.
5. Use apenas Tab, Shift+Tab, Espaço e Enter para concluir o formulário.
6. Abra `validateRegistration.js` e acrescente uma regra sem alterar o componente.

## Desafios

- Adicione um campo de telefone com mensagem de formato esperado.
- Valide um campo ao sair dele usando `onBlur`.
- Mostre um resumo de erros com links que movam o foco para cada campo.
- Desabilite o botão durante uma simulação de envio assíncrono.
- Teste contraste e navegação por teclado antes de publicar.

## Publicar no GitHub

Crie um repositório remoto vazio e execute:

```bash
git init -b main
git add .
git commit -m "feat: adiciona projeto da aula 07"
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

## Referências

- https://react.dev/reference/react-dom/components/input
- https://react.dev/reference/react-dom/components/select
- https://developer.mozilla.org/docs/Learn_web_development/Extensions/Forms
- https://www.w3.org/WAI/tutorials/forms/

