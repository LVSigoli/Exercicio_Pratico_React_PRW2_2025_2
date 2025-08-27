# Configuração do VS Code para Frontend

Este projeto utiliza **React/Next.js** com **JavaScript**, e recomenda-se configurar o VS Code para manter **formatação e qualidade de código consistentes**.

O setup envolve:

- **EditorConfig**: padroniza indentação, final de linha e espaços em branco.
- **Prettier**: formatação automática do código.
- **ESLint**: validação de boas práticas e regras de lint.

---

## 1️⃣ Instalar extensões no VS Code

No VS Code, instale as seguintes extensões:

1. **EditorConfig for VS Code**
   - Permite que o editor respeite o `.editorconfig` do projeto.
2. **Prettier – Code formatter**
   - Formata automaticamente seu código seguindo o `.prettierrc`.
3. **ESLint**
   - Aplica regras de lint e integração com Prettier.

---

## 2️⃣ Configuração do VS Code (User Settings)

Abra o **User Settings** (`Ctrl + Shift + P ,` e selecione User settings JSON) e cole o json a baixo:

```json
{
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.run": "onSave",
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```

## 🗂 Estrutura do Frontend

O frontend está organizado em pastas para manter **modularidade e clareza** no projeto:

- **`/assets`**
  Contém arquivos estáticos como imagens, fontes e ícones.

- **`/components`**
  Componentes reutilizáveis da interface, como botões, cards, formulários e elementos visuais.

- **`/contexts`**
  Contextos do React para gerenciamento de estado global, no caso, toasts.

- **`/hooks`**
  Hooks personalizados que encapsulam lógica reutilizável, como requisições à API, manipulação de formulários ou controle de timers (Não sei se teremos no projeto).

- **`/services` ou `/services/api`**
  Funções responsáveis por comunicação com APIs externas ou backend, encapsulando chamadas HTTP e tratamento de dados.
