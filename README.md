<small>(for the English version, <a href="#en">click here</a>)</small>

# Playground Functions
<h2>:brazil: Português</h2>
<p id="pt">Projeto de JavaScript desenvolvido por mim (<a href="https://www.linkedin.com/in/raphaelameidamartins/" target="_blank" rel="external">Raphael Martins</a>) ao final do Bloco 4 do Módulo 1 do curso de Desenvolvimento Web da <a href="https://www.betrybe.com" targe="_blank" rel="nofollow">Trybe</a>. Obtive aprovação com 100% dos requisitos obrigatórios e opcionais atingidos.</p>
<p>O projeto consistiu em uma série de desafios de lógica de programação utilizando funções.</p>

![Minha nota no projeto - My grade of the project](./nota.png)

### Requisitos
<ol>
  <li>Crie uma função usando o operador &&
    <p>JavaScript possui um operador lógico <code>&&</code>, o qual recebe dois valores e retorna <code>true</code> se ambos os valores são verdadeiros, e retorna `false` se algum deles não o for.</p>
    <p>Considerando isso, implemente na função <code>compareTrue</code>, um código que ao receber dois parâmetros booleanos deve:</p>
    <ul>
      <li>Retornar <code>true</code> se ambos os valores forem verdadeiros;</li>
      <li>Retornar <code>false</code> se um ou ambos os parâmetros forem falsos.</li>
    </ul>
  </li>
  <li>Crie uma função que calcule a área de um triângulo
    <p>Escreva uma função com o nome <code>calcArea</code> que receba um valor de base (chamado <code>base</code>) e outro de altura (chamado <code>height</code>) de um triângulo e retorne o cálculo da sua área.</p>
    <p>Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.</p>
  </li>
  <li>Crie uma função que divida a frase
    <p>Escreva uma função com o nome <code>splitSentence</code>, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.</p>
    <p>Exemplo: se a função receber a string <code>"go Trybe"</code>, o retorno deverá ser <code>['go', 'Trybe']</code>.</p>
  </li>
  <li>Crie uma função que use concatenação de strings
    <p>Escreva uma função com o nome <code>concatName</code> que, ao receber uma array de strings, retorne uma string com o formato <code>'ÚLTIMO ITEM, PRIMEIRO ITEM'</code>, independente do tamanho da array.</p>
    <p>Isso quer dizer que, caso o parâmetro passado para <code>concatName</code> seja a Array <code>['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']</code>, a função deverá retornar <code>Paolillo, Lucas</code>.</p>
  </li>
  <li>Crie uma função que calcule a quantidade de pontos no futebol
    <p>Escreva uma função com o nome <code>footballPoints</code> que receba o número de vitórias (esse parâmetro deverá se chamar <code>wins</code>) e o número de empates (esse parâmetro deverá se chamar <code>ties</code>) e retorne a quantidade de pontos que o time marcou em um campeonato.</p>
    <p>Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.</p>
  </li>
  <li>Crie uma função que calcule a repetição do maior número
    <p>Escreva uma função chamada <code>highestCount</code> que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.</p>
    <p>Exemplo: caso o parâmetro de <code>highestCount</code> seja uma array com valores <code>[9, 1, 2, 3, 9, 5, 7]</code>, a função deverá retornar <code>2</code>, que é a quantidade de vezes que o número <code>9</code> (maior número do array) se repete.</p>
  </li>
  <li>Crie uma função de Caça ao Rato
    <p>Imagine que existem dois gatos, os quais chamaremos <code>cat1</code> e <code>cat2</code>, e que ambos estão caçando um mesmo rato chamado <code>mouse</code>. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.</p>
    <p>Sabendo disso, crie uma função chamada <code>catAndMouse</code> que, ao receber a posição de <code>mouse</code>, <code>cat1</code> e <code>cat2</code>, <strong>nessa ordem</strong>, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).</p>
    <p>Exemplo: caso o gato <code>cat2</code> esteja a 2 unidades de distância do rato, e <code>cat1</code> esteja a 3 unidades, sua função deverá retornar <code>"cat2"</code>.</p>
    <p>Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string <code>"os gatos trombam e o rato foge"</code>.</p>
  </li>
  <li>Crie uma função FizzBuzz
    <p>Crie uma função chamada <code>fizzBuzz</code> que receba uma array de números e retorne uma array da seguinte forma:</p>
    <ul>
      <li>Para cada número do Array que seja divisível apenas por 3, apresente uma string <code>"fizz"</code>;</li>
      <li>Para cada número do Array que seja divisível apenas por 5, apresente uma string <code>"buzz"</code>;</li>
      <li>Caso o número seja divisível por 3 e 5, retorne a string <code>"fizzBuzz"</code>;</li>
      <li>Caso o número não possa ser dividido por 3 nem por 5, retorne a string <code>"bug!"</code>;</li>
    </ul>
    <p>Exemplo: caso o parâmetro seja <code>[2, 15, 7, 9, 45]</code>, sua função deverá retornar <code>["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]</code>.</p>
  </li>
  <li>Crie uma função que Codifique e Decodifique
    <p>Crie duas funções: a primeira deverá se chamar <code>encode</code> e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, conforme o formato a seguir:</p>
      a -> 1 \
      e -> 2 \
      i -> 3 \
      o -> 4 \
      u -> 5
    <p>Ou seja, caso o parâmetro de <code>encode</code> seja <code>"hi there!"</code>, o retorno deverá ser <code>"h3 th2r2!"</code>.</p>
    <p>A segunda função deverá se chamar <code>decode</code> e faz o contrário de <code>encode</code> - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de <code>decode</code> seja <code>"h3 th2r2!"</code>, o retorno deverá ser <code>"hi there!"</code>).</p>
  </li>
  <li>Crie uma função de Lista de Tecnologias contendo
  tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado <code>name</code> com um nome.
  <p>Para cada tecnologia no array, crie um objeto com a seguinte estrutura:</p>

```
{
  tech: "NomeTech",
  name: name
}
```

  <p>Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo <code>tech</code> no objeto.</p>
  <p>A saída da sua função deve ser uma lista de objetos ordenada pelo campo <code>tech</code> dos objetos com o formato acima.</p>

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

  <p>Caso o array venha vazio sua função deve retornar <code>'Vazio!'</code></p>
  </li>
</ol>

### Bônus
<ol start="11">
  <li>Crie uma função de Número de Telefone
    <p>Crie uma função chamada <code>generatePhoneNumber</code> que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.</p>
    <p>Exemplo: caso o parâmetro da função seja <code>[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]</code>, <code>generatePhoneNumber</code> deverá retornar <code>(12) 34567-8901</code>.</p>
      <ul>
        <li>Se a função receber um array com tamanho diferente de 11, a mesma deve retornar <cpde>"Array com tamanho incorreto."</cpde>.</li>
        <li>Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, <code>generatePhoneNumber</code> deverá retornar a string <code>"não é possível gerar um número de telefone com esses valores"</code>.</li>
      </ul>
  </li>
  <li>Crie uma função de Condição de existência de um triângulo
    <p>Um triângulo é composto de três linhas: <code>lineA</code>, <code>lineB</code> e <code>lineC</code>. Crie uma função chamada <code>triangleCheck</code> que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.</p>
    <p>Para tanto, tenha em mente algumas considerações:</p>
      <ul>
        <li>Para ser possível formar um triângulo, a medida de qualquer um dos lados deve ser menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.</li>
        <li>Para obter o valor absoluto de um número em JavaScript, pesquise pela função <code>Math.abs</code>.</li>
        <li>O retorno da sua função deverá ser um booleano.
          <p>Exemplo: o retorno de <code>triangleCheck(10, 14, 8)</code> deverá ser <code>true</code>.</p>
        </li>
      </ul>
  </li>
  <li>Crie uma função de Boas-vindas ao Bar da Trybe!
  Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.
<p>Crie a função <code>hydrate</code> que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:</p>

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
  <p><strong>Dica:</strong> pesquise por algo similar a <code>get all integers inside a string js</code>.</p>
  </li>
</ol>
<br>

<h2 id="en">:us: English</h2>
<p>JavaScript project developed by me (<a href="https://www.linkedin.com/in/raphaelameidamartins/" target="_blank" rel="external">Raphael Martins</a>) at the end of the Unit 4 Module 1 of the Web Development course at <a href="https://www.betrybe.com" targe="_blank" rel="nofollow">Trybe</a>. I was approved with 100% of the mandatory and optional requirements met.</p>
<p>We had to solve programming logic challenges by using functions.</p>

![My grade of the project - Minha nota no projeto](./nota.png)

### Requirements
<ol>
  <li>Create a function using the <code>&&</code> operator
    <p>JavaScript has a logic operator <code>&&</code> that receives two values, returns <code>true</code> if both of them are true, and <code>false</code> if one of them it's not.</p>
    <p>Knowing that insert a code in the function <code>compareTrue</code> so if it receives two boolean parameters, it should:</p>
    <ul>
      <li>Return <code>true</code> if both values are true;</li>
      <li>Return <code>false</code> if one or both of them are false.</li>
    </ul>
  </li>
  <li>Write a function that calculates the area of a triangle
    <p>Develop a function named <code>calcArea</code>, it should receive the values <code>base</code>, and <code>height</code> of a triangle as parameters, and return its area.</p>
    <p>Remember the formula: area of a triangle = (base * height) / 2.</p>
  </li>
  <li>Create a function that split a sentence
    <p>Create the function <code>splitSentence</code> that receives a string and returns an array of strings split in every space on the original string.</p>
    <p>Example: if the function receives the string <code>"go Trybe"</code>, it should return <code>['go', 'Trybe']</code>.</p>
  </li>
  <li>Create a function that uses strings concatenation
    <p>Write a function named <code>concatName</code> that receives an array of strings, and returns a string following the template: <code>'LAST ITEM, FIRST ITEM'</code>, no matter the length of the array.</p>
    <p>That means if the given parameter is <code>['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']</code>, the function should return <code>Paolillo, Lucas</code>.</p>
  </li>
  <li>Create a function that calculates the scores of a football tournament
    <p>Write a function named <code>footballPoints</code> that receives the number of <code>wins</code> and <code>ties</code>. It should return how many scores the team got in the tournament. Consider that each win is worth 3 scores and each tie is worth 1 score.</p> 
  </li>
  <li>Create a function that calculates how many times the highest number repeats in a given array
    <p>Write a function named <code>highestCount</code> that receives an array of numbers, and returns how many times the highest number repeats itself in the array.</p>
    <p>For example: if the given parameter is <code>[9, 1, 2, 3, 9, 5, 7]</code>, the function should return <code>2</code>, that is the number of times the number <code>9</code> (the highest number in the array) repeats itself.</p>
  </li>
  <li>Create a mouse hunt function
    <p>Imagine that there are two cats named <code>cat1</code>, and <code>cat2</code>, and both are hunting the same mouse named <code>mouse</code>. All the animals are on a straight line represented by a number.</p>
    <p>Knowing that, write a function named <code>catAndMouse</code> that receives the position of <code>mouse</code>, <code>cat1</code> and <code>cat2</code>, <strong>in this respective order</strong>, calculates the distance between the mouse and each cat and returns what cat is going to be able to reach the mouse first (the one closer to the mouse).</p>
    <p>For example: if the <code>cat2</code> is 2 units away from the mouse, and the <code>cat1</code> is 3 units, your function should return <code>"cat2"</code>.</p>
    <p>If both cats are away at the same distance from the mouse, the function should return the string <code>"os gatos trombam e o rato foge"</code> ("the cats crashed, and the mouse ran away").</p>
  </li>
  <li>Create a function FizzBuzz
    <p>Write a function named <code>fizzBuzz</code> that receives an array of numbers and return another array following the criteria below:</p>
    <ul>
      <li>For each number of the original array that is divisible only by 3, the new array should have the string <code>"fizz"</code>;</li>
      <li>For each number of the original array that is divisible only by 5, the new array should have the string <code>"buzz"</code>;</li>
      <li>If the number is divisible by both 3 and 5, the new array should have the string <code>"fizzBuzz"</code>;</li>
      <li>If the number isn't divisible by 3 or 5, the new array should have the string <code>"bug!"</code>;</li>
    </ul>
    <p>For example: if the given array is <code>[2, 15, 7, 9, 45]</code>, your function should return <code>["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]</code>.</p>
  </li>
  <li>Create encode and decode functions
    <p>Write two functions: the first one named <code>encode</code> that receives a lower case string as a parameter and returns the same string, but with all vowels replaced by numbers. Following the values below:</p>
      a -> 1 \
      e -> 2 \
      i -> 3 \
      o -> 4 \
      u -> 5
    <p>That means if the given string is <code>"hi there!"</code>, the function <code>encode</code> should return <code>"h3 th2r2!"</code>.</p>
    <p>The second function should be named <code>decode</code> and do the opposite of <code>encode</code> - that means, if it receives a lower case string it should replace numbers with the corresponding vowels (so, if the given string is <code>"h3 th2r2!"</code>, <code>decode</code> should return <code>"hi there!"</code>).</p>
  </li>
  <li>Create a function of technologies you want to learn. It should also receive a second parameter <code>name</code> with a name.
  <p>For each technology in the array, create an object with the following structure:</p>

```
{
  tech: "NomeTech",
  name: name
}
```

  <p>These objects should be inserted in another array in ascending order, sorted by their <code>tech</code> key.</p>
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

  <p>If the given array is empty, your function should return <code>'Vazio!'</code> ('Empty').</p>
  </li>
</ol>

### Bonus
<ol start="11">
  <li>Create a Phone Number function
    <p>Write a function named <code>generatePhoneNumber</code> that receives an array with 11 numbers and returns a phone number with parentheses, dash, and spaces.</p>
    <p>Example: if the given array is <code>[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]</code>, <code>generatePhoneNumber</code> should return <code>(12) 34567-8901</code>.</p>
      <ul>
        <li>If the length of the given array is different from 11, the function should return <code>"Array com tamanho incorreto."</code> ("Array with incorrect length").</li>
        <li>If some number of the array is lower than 0, higher than 9 and repeats three times or more, <code>generatePhoneNumber</code> should return the string <code>"não é possível gerar um número de telefone com esses valores"</code> ("it's not possible to generate a phone number with these values").</li>
      </ul>
  </li>
  <li>Create a function to verify if a triangle is valid
    <p>A triangle has three lines: <code>lineA</code>, <code>lineB</code> e <code>lineC</code>. Write a function named <code>triangleCheck</code> that receives the lines as parameters and returns if it's possible to make a triangle with their values.</p>
    <p>Consider the following pieces of information:</p>
      <ul>
        <li>To be possible to make a triangle, the length of any line should be lower than the sum of the other ones and higher than the absolute value of the difference between their lengths.</li>
        <li>To obtain the absolute value of a number in JavaScript, search for the function <code>Math.abs</code>.</li>
        <li>Your function should return a boolean value.
          <p>Example: <code>triangleCheck(10, 14, 8)</code> should return <code>true</code>.</p>
        </li>
      </ul>
  </li>
  <li>Create a welcome function of the Trybe's pub! According to the rules of the pub, for each cup of alcoholic drink, the person needs to drink a cup of water to avoid a hangover.
<p>Write a function named <code>hydrate</code> that receives a string, and returns how many cups of water the person needs to drink. Examples:</p>

```
Given string:
  "1 cerveja"
Returned string:
  "1 copo de água"
```

```
Given string:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
Returned string:
  "7 copos de água"
```

```
Given string:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
Returned string:
  "7 copos de água"
```
    
  <h4>Notes</h4>
  <ul>
    <li>To simplify, let's consider anything with a number at the beginning as a drink <strong>and that the string will always be provided with the template "how many cups (in numbers) + type of drink".</strong></li>
    <li>The number at the beginning of each drink is a number from 1 to 9.</li>
  </ul>
  <p><strong>Hint:</strong> search for something like <code>get all integers inside a string js</code>.</p>
  </li>
</ol>