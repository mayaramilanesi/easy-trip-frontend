# Easy Trip

Easy Trip é uma aplicação web que permite aos usuários visualizar e navegar por uma lista de viagens disponíveis. A aplicação é construída com React e utiliza Vite como ferramenta de construção.

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

## Configuração do Projeto

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd easy-trip
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Crie um arquivo `.env` na raiz do projeto e adicione a variável de ambiente necessária:**

   ```plaintext
   API_URL=<sua_url_da_api>
   ```

   Substitua `<sua_url_da_api>` pela URL da API que você está usando para buscar as viagens.

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou outra porta, se especificado).

## Estrutura do Projeto

- `src/`: Contém o código-fonte da aplicação.
  - `components/`: Componentes React reutilizáveis.
  - `services/`: Serviços para interagir com a API.
  - `App.jsx`: Componente principal da aplicação.
  - `main.jsx`: Ponto de entrada da aplicação.
  - `App.css`: Estilos globais da aplicação.
- `index.html`: O arquivo HTML principal.
- `vite.config.js`: Configurações do Vite.
- `package.json`: Dependências e scripts do projeto.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria uma versão otimizada para produção.
- `npm run preview`: Visualiza a versão de produção localmente.


