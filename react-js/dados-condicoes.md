# :atom_symbol: CONCEITOS APLICADOS AOS TIPOS DE DADOS E CONDIÇÕES DA BIBLIOTECA

# Renderização condicional:
Para exibir um Elemento caso uma determinada condição seja verdadeira, utiliza-se o operador lógico `&&`. No exemplo abaixo, como a variável `hasCustommer` é `true`, será exibido o texto e botão abaixo do título.

    import React from "react";
    
    const buttonA = <button>Histórico dos Clientes</button>

    const hasCustomer = true;

    const App = () => {
        return (
            <div>
            <h1>Digital Innovation One</h1>
            {hasCustomer && (
                <div>
                    Clique no botão abaixo para visualizar o histórico dos clientes:<br />
                    {buttonA}
                </div>
            )}
        )
    }

Para criar uma condicional If-Else, utiliza-se os operadores ternários `?` e `:`.

    import React from "react";
    
    const buttonA = <button>Histórico dos Clientes</button>
    const buttonB = <button>Cadastrar Cliente</button>

    const hasCustomer = true;

    const App = () => {
        return (
            <div>
            <h1>Digital Innovation One</h1>
            {hasCustomer ? (
                <div>
                    Clique no botão abaixo para cadastrar um novo cliente:<br />
                    {buttonB}
                </div>
            ) : (

            )}
        )
    }

Uma boa prática para organizar melhor o código é encapsular os elementos condicionáveis em variáveis:

    import React from "react";
    
    const buttonA = <button>Histórico dos Clientes</button>
    const buttonB = <button>Cadastrar Cliente</button>

    const hasCustomer = true;

    const App = () => {
        const renderShowHistory = {
            <div>
                Clique no botão abaixo para visualizar o histórico dos clientes:<br />
                {buttonA}
            </div>
        }

        const renderAddCustomer = {
            <div>
                Clique abaixo para cadastrar o cliente
                <br />
                {buttonB}
            </div>
        }

        return (
            <div>
            <h1>Digital Innovation One</h1>
            {hasCustomer ? renderShowHistory : renderAddCustomer}
        )
    }

É possível também usar uma condicional para não exibir um elemento, como na função `showCustomer` abaixo:

    import React from "react";
    
    const buttonA = <button>Histórico dos Clientes</button>
    const buttonB = <button>Cadastrar Cliente</button>

    const hasCustomer = true;

    const App = () => {
        const renderShowHistory = {
            <div>
                Clique no botão abaixo para visualizar o histórico dos clientes:<br />
                {buttonA}
            </div>
        }

        const renderAddCustomer = {
            <div>
                Clique abaixo para cadastrar o cliente
                <br />
                {buttonB}
            </div>
        }

        const showCustomer = () => {
            if (!hasCustomer) return null;

            return (
                <div>
                    <h2>Nome do Cliente: Filipe Duarte</h2>
                </div>
            )
        }

        return (
            <div>
            <h1>Digital Innovation One</h1>
            {hasCustomer ? renderShowHistory : renderAddCustomer}
            <div>
                {showCustomer()}
            </div>
        )
    }

# Listas e Chaves
O React exige que itens de uma lista possuam uma chave identificadora `key`. Essa chave deve ser única entre elementos irmãos:

    import React from "react";
    
    const customer = [
        {
            id: 1,
            name: 'Elcir Duarte'
        },
        {
            id: 2,
            name: 'Filipe Duarte'
        },
        {
            id: 3,
            name: 'Israel Duarte'
        }
    ]

    const App = () => {
        const renderCustomers = (customer, index) => {
            return (
                <li key={'customer-${customer.id}'}>{customer.name}</li>
                // key será igual a "customer-1", "customer-2", "customer-3" etc
            )
        }

        return {
            <div>
            <h1>Digital Innovation One</h1>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        }
    }

# Manipulando Eventos
Manipular eventos em elementos React é muito semelhante a manipular eventos em elementos DOM, com algumas diferenças sintáticas:

- Eventos em React são nomeados usando camelCase ao invés de minúsculas.
- Com o JSX você passa uma função como manipulador de eventos em vez de um texto.
<!-- -->
    const showEvent = () => {
        console.log('Botão clicado')
    }

    const Button = <button onClick={showEvent}>Mostrar Evento</button>

Também é possível passar argumentos para a função de evento:

    const handleClick = (e, id) => {
        alert('ID do cliente: ${id}')
    }

    const renderCustomers = (customer, index) => {
        return (
            <li key={'customer-${customer.id}'}>{customer.name} <button onClick={(e) => handleClick(e, customer.id)}>Deletar cliente</button></li>
        )
    }

# Pensando do jeito React:
- Comece com um Mock.
- Separe a UI em uma hierarquia de Componentes.
- Crie uma versão estática em React.
- Identifique a representação mínima (mas completa) do State da UI.
- Identifique onde o State deve ficar.
- Adicione o fluxo de dados inverso.