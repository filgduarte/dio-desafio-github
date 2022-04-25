# :package: WEBPACK

O Webpack é um **module bundler**, ou seja, um empacotador de módulos para aplicações JavaScript. Ele gera um bundle que será utilizado no HTML, em ES5.

Link oficial: https://webpack.js.org/

# Configuração
Principais conceitos do Webpack:

- **Entry**: utilizando grafo, o Webpack precisa de um ponto de entrada para buscar todos os módulos e dependências
- **Output**: Determina quais os bundlers que o Webpack irá emitir.
- **Loaders**: Permitem que o Webpack gerencie arquivos que não são Javascript
- **Plugins**: Podem ser utilizados para otimização de pacotes, minificação, injeção de scripts e muito mais.
- **Mode**: Utilizados para abordagem de configuração zero. É possível configurar módulos como `production`, `development` ou `none`.

Criação do arquivo webpack.config.js:

- `npm i -D webpack webpack-cli`
- `"build": "webpack --mode production"`
- `npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev`