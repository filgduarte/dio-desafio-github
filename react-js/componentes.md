# :bricks: TRABALHANDO COM COMPONENTES
Para criar uma nova aplicação ReactJS:

    npx create-react-app nome-da-aplicacao

Será criada uma pasta `nome-da-aplicacao` contendo as seguintes subpastas:

- `node_modules`: Pasta com todos os módulos do Node. Essa pasta não é enviada para o Git, conforme instrução no arquivo `.gitignore`.
- `public`: Aqui ficam todos os arquivos "públicos", como o `index.html`, css, favicon etc. O único realmente necessário é o `index.html`.
- `src`: Pasta com os arquivos fonte da aplicação. Os únicos arquivos realmente necessários são o `index.js` e o `App.js`.

O React não aceita componentes irmãos num mesmo retorno. Caso seja necessário fazer isso, é necessário encapsular esses componentes numa div ou em um React Fragment:

    <>
        <h1>Hello World</h1>
        <p>Eu sou um parágrafo</p>
    </>