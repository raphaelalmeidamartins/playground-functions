<small>(for the English version, <a href="#en">click here</a>)</small>

# Playground Functions
<h2>:brazil: Português</h2>
<p id="pt">Projeto de JavaScript desenvolvido por mim (<a href="https://www.linkedin.com/in/raphaelameidamartins/" target="_blank" rel="external">Raphael Martins</a>) ao final do Bloco 4 do Módulo 1 do curso de Desenvolvimento Web da <a href="https://www.betrybe.com" targe="_blank" rel="nofollow">Trybe</a>. Obtive aprovação com 100% dos requisitos obrigatórios e opcionais atingidos, e seguindo as todas as regras de padronização do código e boas práticas do Linter.</p>
<p>O projeto consistiu em uma série de desafios de lógica de programação utilizando funções.</p>

### Requisitos
<ol>
  <li>Crie uma função usando o operador &&
    <p>JavaScript possui um operador lógico `&&`, o qual recebe dois valores e retorna `true` se ambos os valores são verdadeiros, e retorna `false` se algum dos valores não o for.</p>
    <p>Considerando isso, implemente na função `compareTrue`, um código que ao receber dois parâmetros booleanos deve:</p>
    <ul>
      <li>Retornar `true` se ambos os valores forem verdadeiros;</li>
      <li>Retornar `false` se um ou ambos os parâmetros forem falsos.</li>
    </ul>
  </li>
  <li>Crie uma função que calcule a área de um triângulo
    <p>Escreva uma função com o nome `calcArea` que receba um valor de base (chamado `base`) e outro de altura (chamado `height`) de um triângulo e retorne o cálculo da sua área.</p>
    <p>Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.</p>
  </li>
  <li>Crie uma função que divida a frase
    <p>Escreva uma função com o nome `splitSentence`, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.</p>
    <p>Exemplo: se a função receber a string `"go Trybe"`, o retorno deverá ser `['go', 'Trybe']`.</p>
  </li>
  <li>Crie uma função que use concatenação de strings
    <p>Escreva uma função com o nome `concatName` que, ao receber uma array de strings, retorne uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`, independente do tamanho da array.</p>
    <p>Isso quer dizer que, caso o parâmetro passado para `concatName` seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar `Paolillo, Lucas`.</p>
  </li>
  <li>Crie uma função que calcule a quantidade de pontos no futebol
    <p>Escreva uma função com o nome `footballPoints` que receba o número de vitórias (esse parâmetro deverá se chamar `wins`) e o número de empates (esse parâmetro deverá se chamar `ties`) e retorne a quantidade de pontos que o time marcou em um campeonato.</p>
    <p>Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.</p>
  </li>
  <li>Crie uma função que calcule a repetição do maior número
    <p>Escreva uma função chamada `highestCount` que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.</p>
    <p>Exemplo: caso o parâmetro de `highestCount` seja uma array com valores `[9, 1, 2, 3, 9, 5, 7]`, a função deverá retornar `2`, que é a quantidade de vezes que o número `9` (maior número do array) se repete.</p>
  </li>
  <li>Crie uma função de Caça ao Rato
    <p>Imagine que existem dois gatos, os quais chamaremos de `cat1` e `cat2`, e que ambos estão caçando um mesmo rato chamado `mouse`. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.</p>
    <p>Sabendo disso, crie uma função chamada `catAndMouse` que, ao receber a posição de `mouse`, `cat1` e `cat2`, <strong>nessa ordem</strong>, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).</p>
    <p>Exemplo: caso o gato `cat2` esteja a 2 unidades de distância do rato, e `cat1` esteja a 3 unidades, sua função deverá retornar `"cat2"`.</p>
    <p>Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string `"os gatos trombam e o rato foge"`.</p>
  </li>
  <li>Crie uma função FizzBuzz
    <p>Crie uma função chamada `fizzBuzz` que receba uma array de números e retorne uma array da seguinte forma:</p>
    <ul>
      <li>Para cada número do Array que seja divisível apenas por 3, apresente uma string `"fizz"`;</li>
      <li>Para cada número do Array que seja divisível apenas por 5, apresente uma string `"buzz"`;</li>
      <li>Caso o número seja divisível por 3 e 5, retorne a string `"fizzBuzz"`;</li>
      <li>Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`;</li>
    </ul>
    <p>Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar `["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]`.</p>
  </li>
  <li>Crie uma função que Codifique e Decodifique
    <p>Crie duas funções: a primeira deverá se chamar `encode` e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:</p>
      a -> 1 \
      e -> 2 \
      i -> 3 \
      o -> 4 \
      u -> 5
    <p>Ou seja, caso o parâmetro de `encode` seja `"hi there!"`, o retorno deverá ser `"h3 th2r2!"`.</p>
    <p>A segunda função deverá se chamar `decode` e faz o contrário de `encode` - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de `decode` seja `"h3 th2r2!"`, o retorno deverá ser `"hi there!"`).</p>
  </li>
  <li>Crie uma função de Lista de Tecnologias
  tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado `name` com um nome.
  <p>Para cada tecnologia no array, crie um objeto com a seguinte estrutura:</p>

```
{
  tech: "NomeTech",
  name: name
}
```

  <p>Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo `tech` no objeto.</p>
  <p>A saída da sua função deve ser uma lista de objetos ordenada pelo campo `tech` dos objetos com o formato acima.</p>

Exemplo:
```
Entradas da função:

["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Saída:

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
```

  <p>Caso o array venha vazio sua função deve retornar 'Vazio!'</p>
  </li>
</ol>

### Bônus
<ol start="11">
  <li>Crie uma função de Número de Telefone
    <p>Crie uma função chamada `generatePhoneNumber` que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.</p>
    <p>Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], `generatePhoneNumber` deverá retornar `(12) 34567-8901`.</p>
      <ul>
        <li>Se a função receber um array com tamanho diferente de 11, a mesma deve retornar `"Array com tamanho incorreto."`.</li>
        <li>Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, `generatePhoneNumber` deverá retornar a string `"não é possível gerar um número de telefone com esses valores"`.</li>
      </ul>
  </li>
  <li>Crie uma função de Condição de existência de um triângulo
    <p>Um triângulo é composto de três linhas: `lineA`, `lineB` e `lineC`. Crie uma função chamada `triangleCheck` que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.</p>
    <p>Para tanto, tenha em mente algumas considerações:</p>
      <ul>
        <li>Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.</li>
        <li>Para obter o valor absoluto de um número em JavaScript, pesquise pela função `Math.abs`.</li>
        <li>O retorno da sua função deverá ser um booleano.
          <p>Exemplo: o retorno de `triangleCheck(10, 14, 8)` deverá ser `true`.</p>
        </li>
      </ul>
  </li>
  <li>Crie uma função de boas vindas ao Bar da Trybe!
  Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.
<p>Crie a função `hydrate` que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:</p>

```
String recebida:
  "1 cerveja"
String retornada:
  "1 copo de água"
```

```
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
```

```
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
```
    
  <h4>Notas</h4>
  <ul>
    <li>Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida <strong>e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida.</strong></li>
    <li>O número na frente de cada bebida está no intervalo entre 1 e 9.</li>
  </ul>
  <p><strong>Dica:</strong> pesquise por algo similar a `get all integers inside a string js`.</p>
  </li>
</ol>
<br>

<h2 id="en">:us: English</h2>
<p>JavaScript project develop by me (<a href="https://www.linkedin.com/in/raphaelameidamartins/" target="_blank" rel="external">Raphael Martins</a>) in the end of the Unit 4 Module 1 of the Web Development course at <a href="https://www.betrybe.com" targe="_blank" rel="nofollow">Trybe</a>. I was approved with 100% of the mandatory and optional requirements met, and following all the Linter rules of best practices and code standardization.</p>
<p>We had to solve programming logic challenges by using functions.</p>

### Requirements
<ol>
  <li>Create a function using the && operator
    <p>JavaScript has a logic operator `&&` that receives two values, returns `true` if both of them are true, and `false` if one of them it's not.</p>
    <p>Knowing that, insert a code in the function `compareTrue` so if it receives two boolean parameters, it should:</p>
    <ul>
      <li>Return `true` if both values are true;</li>
      <li>Return `false` if one of them or both are false.</li>
    </ul>
  </li>
  <li>Write a function that calculates the area of a triangle
    <p>Develop a function named `calcArea`, it should receive the values `base`, and `height` of a triangle as parameters, and return its area.</p>
    <p>Remember the formula: area of a triangle = (base * height) / 2.</p>
  </li>
  <li>Create a function that slipt a sentence
    <p>Create the function `splitSentence` that receives a string and returns an array of strings split in every space on the original string.</p>
    <p>Example: if the function receives the string `"go Trybe"`, it should return `['go', 'Trybe']`.</p>
  </li>
  <li>Create a function that uses strings concatenation
    <p>Write a function named `concatName` that receives an array of strings, and returns a string following the template: `'LAST ITEM, FIRST ITEM'`, no matter the length of the array.</p>
    <p>That means, if the given parameter is ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], the function should return `Paolillo, Lucas`.</p>
  </li>
  <li>Create a function that calculates the scores of a football tournament
    <p>Write a function named `footballPoints` that receives the number of `wins` and `ties`. It should return how many scores the team got in the tournament. Consider that each win is worth 3 scores and each tie is worth 1 score.</p> 
  </li>
  <li>Create a function that calculates how many times the highest number repeats in a given array
    <p>Write a function named `highestCount` that receives an array of numbers, and returns how many times the highest number repeats itself in the array.</p>
    <p>Example: if the given parameters is `[9, 1, 2, 3, 9, 5, 7]`, the function should return `2`, that is the number of times the number `9` (the highest number in the array) repeats itself.</p>
  </li>
  <li>Create a mouse hunt function
    <p>Imagine that there are two cats named `cat1` and `cat2`, and both are hunting the same mouse named `mouse`. All the animals are on a straight line represented by a number.</p>
    <p>Knowing that, write a function named `catAndMouse` that receives the postion of `mouse`, `cat1` and `cat2`, <strong>in this respective order</strong>, calculates the distance between the mouse and each cat, and returns what cat is going to be able to reach the mouse first (the one closer to the mouse).</p>
    <p>Example: if the `cat2` is 2 units away from the mouse, and the `cat1` is 3 units, your function should return `"cat2"`.</p>
    <p>If both cats are away in the same distance from the mouse, the function should return the string `"os gatos trombam e o rato foge" ("the cats crashed and the mouse ran away")`.</p>
  </li>
  <li>Create a function FizzBuzz
    <p>Write a function named `fizzBuzz` that receives an array of numbers and return another array following the criteria below:</p>
    <ul>
      <li>For each number of the original array that is divisible only by 3, the new array should have the string `"fizz"`;</li>
      <li>For each number of the original array that is divisible only by 5, the new array should have the string `"buzz"`;</li>
      <li>If the number is divisible by both 3 and 5, the new array should have the string `"fizzBuzz"`;</li>
      <li>If the number isn't divisible by 3 or 5, the new array should have the string `"bug!"`;</li>
    </ul>
    <p>Example: if the given array is [2, 15, 7, 9, 45], your function should return `["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]`.</p>
  </li>
  <li>Create encode and decode functions
    <p>Write two functions: the first one named `encode` that receives a lower case string as parameter and returns the same string, but with all vowels repleaced by numbers. Following the values below:</p>
      a -> 1 \
      e -> 2 \
      i -> 3 \
      o -> 4 \
      u -> 5
    <p>That means, if the given string is `"hi there!"`, the function `encode` should return `"h3 th2r2!"`.</p>
    <p>the second function should be named `decode` and do the opposite of `encode` - that means, if it receives a lower case string it should replace numbers with the corresponding vowels (so, if the given string is `"h3 th2r2!"`, `decode` should return `"hi there!"`).</p>
  </li>
  <li>Create a function of technologies you want to learn. It should also receive a second parameter `name` with a name.
  <p>For each technology in the array, create an object with the following structure:</p>

```
{
  tech: "NomeTech",
  name: name
}
```

  <p>Theses objects should be inserted in another array in ascending order sorted by their `tech` key.</p>
  <p>The output of your function should be an array of objects.</p>

Example:
```
Parameters of the function:

["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Output:

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
```

  <p>If the given array is empty, your function should return 'Vazio!' ('Empty').</p>
  </li>
</ol>

### Bonus
<ol start="11">
  <li>Crie uma função de Número de Telefone
    <p>Crie uma função chamada `generatePhoneNumber` que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.</p>
    <p>Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], `generatePhoneNumber` deverá retornar `(12) 34567-8901`.</p>
      <ul>
        <li>Se a função receber um array com tamanho diferente de 11, a mesma deve retornar `"Array com tamanho incorreto."`.</li>
        <li>Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, `generatePhoneNumber` deverá retornar a string `"não é possível gerar um número de telefone com esses valores"`.</li>
      </ul>
  </li>
  <li>Crie uma função de Condição de existência de um triângulo
    <p>Um triângulo é composto de três linhas: `lineA`, `lineB` e `lineC`. Crie uma função chamada `triangleCheck` que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.</p>
    <p>Para tanto, tenha em mente algumas considerações:</p>
      <ul>
        <li>Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.</li>
        <li>Para obter o valor absoluto de um número em JavaScript, pesquise pela função `Math.abs`.</li>
        <li>O retorno da sua função deverá ser um booleano.
          <p>Exemplo: o retorno de `triangleCheck(10, 14, 8)` deverá ser `true`.</p>
        </li>
      </ul>
  </li>
  <li>Crie uma função de boas vindas ao Bar da Trybe!
  Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.
<p>Crie a função `hydrate` que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:</p>

```
String recebida:
  "1 cerveja"
String retornada:
  "1 copo de água"
```

```
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
```

```
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
```
    
  <h4>Notas</h4>
  <ul>
    <li>Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida <strong>e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida.</strong></li>
    <li>O número na frente de cada bebida está no intervalo entre 1 e 9.</li>
  </ul>
  <p><strong>Dica:</strong> pesquise por algo similar a `get all integers inside a string js`.</p>
  </li>
</ol>