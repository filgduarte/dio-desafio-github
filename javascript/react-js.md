# :atom_symbol: REACTJS

O ReactJS é uma biblioteca JavaScript para criar interfaces de usuário.

Foi criado em 2011 por jordan Walke no Facebook, baseado no XHP, um framework para criação de HTML no PHP. Seu objetivo inicial era resolver problemas de manutenção e escalabilidade no mural de notícias da ferramenta.

Em 2012 ele começou a ser utilizado no Instagram e no ano seguinte foi anunciada a liberação OpenSource na JSConf Us.

Em 2015 foi lançado o React Native para aplicações mobile e o UWP (Universal Windows Platform) para aplicações desktop.

A principal função do ReactJS é a criação da interface para o usuário.

# JSX:
O JSX é uma sintaxe de marcação criada para usar HTML dentro do javascript. Não é HTML nem string:

    const element = <h1>Hello, world!</h1>;

O JSX não é obrigatório, ele é uma sintax sugar para `React.createElement`.

Os navegadores não interpretam o JSX, para isso é necessário um transpilador para que a aplicação possa entender o código. O mais utilizado é o Babel.

**Importante!** Como `class` é uma palavra reservada do javascript, quando for necessário declarar a classe de um elemento HTML, utiliza-se `className`.

No exemplo abaixo, declaramos uma variável chamada `name` e então a usamos dentro do JSX ao envolvê-la com chaves:

    const name = "Josh Perez";
    const element = <h1>Hello, {name}</h1>;

    reactDOM.render (
        element,
        document.getElementById('root')
    );

É possível inserir qualquer expressão Javascript válida dentro das chaves em JSX e inclusive chamar funções:

    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    const element = (
        <h1>
            Hello, {formatName(user)}!
        </h1>
    );

    ReactDOM.render(
        element,
        document.getElementById('root')
    );

# Renderização:
O React não trabalha diretamente com o DOM do navegador, mas com um DOM virtual.

Diferente de elementos DOM do navegador, elementos React são objetos simples e utilizam menos recursos. O React DOM é responsável por atualizar o DOM para exibir os elementos React.

Aplicações construídas apenas com React geralmente tem apenas um único nó raíz no DOM. Esse nó é chamado assim porque tudo dentro dele será gerenciado pelo React DOM.

    <div id="root"></div>

Para renderizar um elemento React em um nó raíz, passe abos para `ReactDOM.render()`:
    
    const element = <h1>Hellow, world!</h1>
    ReactDOM.render(element, document.getElementById('root));

Elementos React são imutáveis. Uma vez criados, não é possível alterar seus elementos filhos ou atributos. A única forma de atualizar a interface é criar um novo elemento e passá-lo para `ReactDOM.render()`.

Veja o exemplo de um relógio:

    function tick() {
        const element = (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );

        ReactDOM.render(element, document.getElementById('root'));
    }

    setInterval(tick, 1000);

Importante notar que o React atualiza somente o necessário. O React DOM compara o elemento novo e seus filhos com os anteriores e só aplica as modificações necessárias no DOM para levá-lo ao estado desejado.

Inspecionando o exemplo anterior, teríamos:

![Atualização](react-js/react-dom-updates.gif)

# Componentes e Props:
Componentes permitem dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente.

Cada componente deve ser o mais puro e abstrato possível. É importante que ele não tenha nenhum estado, regra de negócio ou tratamento acoplado a ele.

A maneira mais simples de definir um componente é através de uma função:

    function Welcome(props) {
        return <h1>Olá, {props.name}</h1>;
    }

Um componente pode ser chamado como uma tag HMTL e por isso os componentes devem sempre ser nomeados com a primeira letra maiúscula.

    const element = <Welcome name="Sara" />;

Quando o React vê um elemento representando um componente definido pelo usuário, ele passa atributos JSX e componentes filhos para esse componente como um único objeto. Nós chamamos esse objeto de  “props”.

Por exemplo, esse código renderiza “Olá, Sara” na página:

    function Welcome(props) {
        return <h1>Olá, {props.name}</h1>;
    }

    const element = <Welcome name="Sara" />;
    ReactDOM.render(
        element,
        document.getElementById('root')
    );

# Estados e Ciclo de Vida
O React possui 4 estados:
- Inicialização
- Montagem
- Atualização
- Desmontagem

Nenhum componente pai ou filho deve saber se outro componente possui estado ou não.

O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro, isso é feito via props.