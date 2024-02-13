const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "variável x = 5;",
        "var x = 5;",
        "let x = 5;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída do seguinte código? console.log(2 + '2');",
      respostas: [
        "4",
        "22",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função JavaScript é usada para imprimir algo no console?",
      respostas: [
        "console.print()",
        "log()",
        "print()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para verificar igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o tipo de dado retornado pelo operador typeof?",
      respostas: [
        "String",
        "Object",
        "String ou Number",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      respostas: [
        "Arredonda um número para o inteiro mais próximo.",
        "Formata um número com um número específico de casas decimais.",
        "Retorna o valor absoluto de um número.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de linha",
        "/* Este é um comentário de linha */",
        "<!-- Este é um comentário de linha -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Retorna o tipo de dado de uma variável.",
        "Compara o tipo de dados de duas variáveis.",
        "Converte o tipo de dado de uma variável.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado de 10 + 5 + '5' em JavaScript?",
      respostas: [
        "20",
        "105",
        "Erro",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
      dt.querySelector('input').value = item.respostas.indexOf(item)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
        corretas.delete(item);
        if(estaCorreta) {
          corretas.add(item);
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt);
    }
  
    quizItem.querySelector('dl dt').remove();
  
  
    quiz.appendChild(quizItem);
  }