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
  </li>
  <li>Crie uma função que calcule a repetição do maior número
    <p>Escreva uma função chamada `highestCount` que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.</p>
    <p>Exemplo: caso o parâmetro de `highestCount` seja uma array com valores `[9, 1, 2, 3, 9, 5, 7]`, a função deverá retornar `2`, que é a quantidade de vezes que o número `9` (maior número do array) se repete.</p>
  </li>
  <li>Crie uma função de Caça ao Rato
    <p>Imagine que existem dois gatos, os quais chamaremos de `cat1` e `cat2`, e que ambos estão caçando um mesmo rato chamado `mouse`. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.</p>
    <p>Sabendo disso, crie uma função chamada `catAndMouse` que, ao receber a posição de `mouse`, `cat1` e `cat2`, **nessa ordem**, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).</p>
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
    <p>Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida **e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida**.</p>
    <p>O número na frente de cada bebida está no intervalo entre 1 e 9.    </p>
  </ul>
  <p>**Dica:** pesquise por algo similar a `get all integers inside a string js`.</p>
  </li>
</ol>

<h2 id="en">:us: English</h2>
<p>JavaScript project develop by me (<a href="https://www.linkedin.com/in/raphaelameidamartins/" target="_blank" rel="external">Raphael Martins</a>) in the end of the Unit 4 Module 1 of the Web Development course at <a href="https://www.betrybe.com" targe="_blank" rel="nofollow">Trybe</a>. I was approved with 100% of the mandatory and optional requirements met, and following all the Linter rules of best practices and code standardization.</p>
<p>We had to solve programming logic challenges by using functions.</p>