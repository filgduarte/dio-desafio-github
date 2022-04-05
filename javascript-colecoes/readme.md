# :capital_abcd: JAVASCRIPT - COLEÇÕES

O ES6 introduziu dois novos tipos de objetos iteráveis: **Maps**, que são coleções ordenadas de pares chave-valor e **Sets**, que são coleções de valores únicos.

# Maps
Um map é uma coleção de pares chave-valor que pode usar qualquer tipo de dado como chave.

Os maps podem ser inicializados com a sintaxe `new map`:

    const map = new Map()

## Adicionando valores a um Map:

Para adicionar valores a um map utiliza-se o método `set()`, onde o primeiro argumento será a chave e o segundo argumento será o valor:

    map.set('firstName', 'Luke')
    map.set('lastName', 'Skywalker')
    map.set('occupation', 'Jedi Knight')

Isso gera o seguinte resultado:

    Output
    Map(3)
    0: {"firstName" => "Luke}
    1: {"lastName" => Skywalker}
    2: {"occupation" => "Jedi Knight"}

Além de definir manualmente os valores de um Map, é possível inicializar um Map já com valores através de uma Matriz de Matrizes:

    const map = new Map([
        ['firstName', 'Luke'],
        ['lastName', 'Skywalker'],
        ['occupation', 'Jedi Knight'],
    ])

## Convertendo Maps, Objetos e Arrays:

A sintaxe acima é a mesma do resultado da chamada `Object.entries()` em um Objeto. Isso proporciona uma maneira pronta de converter um Objeto em um Map:

    const luke = {
        firstName: 'Luke',
        lastName: 'Skywalker',
        occupation: 'Jedi Knight',
    }

    const map = new Map(Object.entries(luke))

Para converter um Map para Objeto, utiliza-se o seguinte código:

    const obj = Object.fromEntries(map)

Isso resultará no seguinte valor de `obj`:

    Output
    {firstName: "Luke", lastName: "Skywalker", occupation: "Jedi Knight"}

Também é possível converter um Map em Matriz:

    const arr = Array.from(map)

Isso resultará na seguinte Matriz para `arr`:

    Output
    [ ['firstName', 'Luke'],
    ['lastName', 'Skywalker'],
    ['occupation', 'Jedi Knight'] ]

## Chaves de Map
Os Maps aceitam qualquer tipo de dados como chave e não permitem valores de chave duplicados.
Exemplo:

    const map = new Map()

    map.set('1', 'String one')
    map.set(1, 'This will be overwritten')
    map.set(1, 'Number one')
    map.set(true, 'A Boolean')

Esse exemplo irá sobrepor a primeira chave `1` com a seguinte e tratará a string `'1'` e o número `1` como chaves únicas:

    Output
    0: {"1" => "String one"}
    1: {1 => "Number one"}
    2: {true => "A Boolean"}

Diferentemente, os Objetos transformam todas as chaves em strings.

Por esse motivo é possível configurar um Objeto como chave de um Map:

    // Create an object
    const objAsKey = { foo: 'bar' }

    const map = new Map()

    // Set this object as the key of a Map
    map.set(objAsKey, 'What will happen?')

O exemplo acima vai resultar em:

    Output
    key: {foo: "bar"}
    value: "What will happen?"

## Obtendo e excluindo itens de um Map:

A estrutura do Map possui muitas propriedades embutidas que tornam mais direto o trabalho com seus elementos:

Dado o Map abaixo:

    const map = new Map([
        ['animal', 'otter'],
        ['shape', 'triangle'],
        ['city', 'New York'],
        ['country', 'Bulgaria'],
    ])

É possível utilizar o método `has()` para verificar se existe um item em um Map:

    map.has('shark') // false
    map.has('country') // true

Para recuperar um valor pela chave, utiliza-se o método `get()`:

    map.get('animal') // "otter"

Um benefício que os Maps têm em relação aos Objetos é que você pode descobrir o tamanho de um Map através da propriedade `size`, assim como com uma Matriz com a propriedade `length`.

    map.size // 4

Para remover um item de um Map pela chave, utiliza-se o método `delete()`, que retornará `true` se houver um item e tiver sido excluído ou `false` se não corresponder a nenhum item.

    map.delete('city') // true

Por fim, é possível limpar todos os valores do Map com o método `map.clear()`.

## Chaves, valores e entradas:

É possível obter todas as chaves, valores e entradas de um Map com os métodos `keys()`, `values()` e `entries`, respectivamente.

Dado o Map abaixo:

    const map = new Map([
    [1970, 'bell bottoms'],
    [1980, 'leg warmers'],
    [1990, 'flannel'],
    ])

Teríamos os seguintes Outputs:

    map.keys() // MapIterator {1970, 1980, 1990}

    map.values() // MapIterator {"bell bottoms", "leg warmers", "flannel"}

    map.entries() // MapIterator {1970 => "bell bottoms", 1980 => "leg warmers", 1990 => "flannel"}

## Iteração com Map:
É possível iterar um Map através de um loop `forEach`:

    map.forEach((value, key) => {
        console.log(`${key}: ${value}`)
    })

Ou `for...of`:

    for (const [key, value] of map) {
        console.log(`${key}: ${value}`)
    }

---

# Sets (Conjuntos)
Um Set é uma coleção de valores únicos. Podem ser inicializados com a sintaxe `new Set()`.

    const set = new Set()

## Adicionando valores a um Set:
Os itens podem ser adicionados a um Set com o métod `add()`:

    set.add('Beethoven')
    set.add('Mozart')
    set.add('Chopin')

Como com os Maps, podem conter apenas valores únicos, qualquer tentativa de adicionar um valor que já exista será ignorada.

    set.add('Chopin') // Set will still contain 3 unique values

Também é possível inicializar os Sets com uma Matriz de valores. Se houver valores duplicados na matriz, eles serão removidos do conjunto.

    const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])

A declaração acima irá resultar em:

    Output
    Set(3) {"Beethoven", "Mozart", "Chopin"}

É possível converter um Set em Matriz com apenas uma linha de código:

    const arr = [ ...set]

Os Sets possuem muitos dos mesmos métodos e propriedados do Mapa, incluindo `delete()`, `has()`, `size` e `clear`, mas não possui um método de acessar um valor por chave ou índice como `map.get(key)` ou `arr[index]`.

## Iteração com Set:
Como os Sets não têm chaves, o primeiro e segundo parâmetros do callback do `forEach()` retornam o mesmo valor, então usa-se apenas `values()`:

    const set = new Set(['hi', 'hello', 'good day'])

    set.forEach((value) => console.log(value))

A versão com `for...of` ficaria:

    for (const value of set) {  
        console.log(value);
    }

Ambas as formas resultariam no seguinte:

    Output
    hi
    hello
    good day