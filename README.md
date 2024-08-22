# To-Do List (Arquitetura em Camadas)

Esse projeto visa aos alunos explicar um pouco sobre a arquitetura em camadas, onde utilizaremos 4 camadas para representar nossa aplicação backend.

## Tecnologias Utilizadas

- Backend
  - Supabase
  - Express
  - TS Node Dev
- Frontend
  - React e React DOM
  - ViteJS
  - Axios

Ambas as stacks abaixo foram desenvolvidas em TypeScript.

## Instalação e Execução

### ✅ Backend

Para rodar o projeto, precisamos entender que nossa aplicação está dividida em 2 módulos (Backend / Frontend). Dito isso, vamos botar a mão na massa. Primeiramente, `clone` o projeto em sua máquina.

```bash
  git clone https://github.com/ElemarLeonel/todo-list-arq-camadas.git
```

Feito o processo acima, acesse primeiramente a pasta backend, onde iremos executar a nossa API. Rode o seguinte comando para instalar as dependências:

```bash
  cd backend
  npm install
```

Feito isso, agora duplique o arquivo `.env.example` e renomeie para `.env` ou para `.env.local` e coloque as suas credenciais do Supabase:

```bash
SUPABASE_URL=<sua_url_supabase>
SUPABASE_KEY=<sua_anon_key_supabase>
```

Adicione a variável de ambiente `PORT` dentro do seu arquivo `.env` caso queira executar em outra porta a API. Por padrão, ela executará na porta 50000.

```bash
PORT=<sua_porta_aqui>
```

Agora é somente executar a aplicação backend utilizando o seguinte comando:

```bash
npm run dev
```

### ✅ Frontend

Caso você esteja no diretório backend, você irá precisar voltar para o diretório raíz e logo em seguida, entrar na pasta `frontend`. Veja só:

```bash
  cd ..
  cd frontend
```

Rode o seguinte comando para instalar as dependências:

```bash
  npm install
```

Com as dependências instaladas, agora é só executar o comando para rodar nosso frontend. Veja:

```bash
npm run dev
```

## Authors

- [@elemarleonel](https://github.com/ElemarLeonel/)
