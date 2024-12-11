// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'As bombas de óleo de engrenagem são constituídas por:',
    answers: [
      {
        answer: 'Duas rodas dentadas, com o mesmo diâmetro.',
        correct: true,
      },
      {
        answer: 'Dois lóbulos',
        correct: false,
      },
      {
        answer: 'Três rodas dentadas',
        correct: false,
      },
    ],
  },
  {
    question: 'Durante o funcionamento de um motor de ciclo a quatro tempos, o êmbolo desloca-se do PMS para o PMI nos tempos de:',
    answers: [
      {
        answer: 'Admissão e escape',
        correct: false,
      },
      {
        answer: 'Admissão e combustão/explosão.',
        correct: true,
      },
      {
        answer: 'Compressão e escape',
        correct: false,
      },
    ],
  },
  {
    question: 'O que é ABS?',
    answers: [
      {
        answer: 'Sistema antibloqueio de rodas',
        correct: true,
      },
      {
        answer: 'Travão mecânico',
        correct: false,
      },
      {
        answer: 'Travão pneumático',
        correct: false,
      },
    ],
  },
  {
    question: 'As válvulas têm folgas, para:',
    answers: [
      {
        answer: 'Para compensar a sua dilatação',
        correct: true,
      },
      {
        answer: 'Não prenderem',
        correct: false,
      },
      {
        answer: 'Abrirem facilmente',
        correct: false,
      },
    ],
  },
  {
    question: 'Como fazer a manutenção de um filtro de ar?',
    answers: [
      {
        answer: 'Limpar com óleo',
        correct: false,
      },
      {
        answer: 'Limpar com ar',
        correct: false,
      },
      {
        answer: 'Substituir periodicamente.',
        correct: true,
      },
    ],
  },
  {
    question: 'No caso de uma bomba de óleo accionada pela árvore de cames, por cada volta completa desta, o eixo da bomba roda:',
    answers: [
      {
        answer: '6 voltas.',
        correct: false,
      },
      {
        answer: '1 volta.',
        correct: true,
      },
      {
        answer: '2 voltas.',
        correct: false,
      },
      {
        answer: '3 voltas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quantos carretos tem o veio primário de um veículo com uma caixa de 4 velocidades?',
    answers: [
      {
        answer: '1 carreto.',
        correct: true,
      },
      {
        answer: '2 carreto.',
        correct: false,
      },
      {
        answer: '3 carreto.',
        correct: false,
      },
    ],
  },
  {
    question: 'Indique o elemento que não faz parte do conjunto de componentes de uma válvula:',
    answers: [
      {
        answer: 'Camisa.',
        correct: true,
      },
      {
        answer: 'Mola',
        correct: false,
      },
      {
        answer: 'Meia lua',
        correct: false,
      },
    ],
  },
  {
    question: 'Onde engrena o carreto do motor de arranque?',
    answers: [
      {
        answer: 'Coroa dentada do volante do motor.',
        correct: true,
      },
      {
        answer: 'Coroa dentada do veio primário',
        correct: false,
      },
      {
        answer: 'No eixo secundário da caixa de velocidades',
        correct: false,
      },
    ],
  },
  {
    question: 'As bombas de água dispõem um furo, para:',
    answers: [
      {
        answer: 'Drenar o sistema, quando está cheio.',
        correct: true,
      },
      {
        answer: 'Lubrificar a bomba de agua',
        correct: false,
      },
      {
        answer: 'Ventilar o corpo ou bomba',
        correct: false,
      },
    ],
  },
  {
    question: 'Carburador tem como função:',
    answers: [
      {
        answer: 'Separar o ar da gasolina',
        correct: false,
      },
      {
        answer: 'Filtrar a gasolina',
        correct: false,
      },
      {
        answer: 'Pulverizar a gasolina e misturar com ar.',
        correct: true,
      },
    ],
  },
  {
    question: 'O deflector do radiador não deverá ser retirado porque:',
    answers: [
      {
        answer: 'Aumenta o ruído da ventoinha',
        correct: false,
      },
      {
        answer: 'Anula o funcionamento da ventoinha',
        correct: true,
      },
      {
        answer: 'É perigo',
        correct: false,
      },
    ],
  },
  {
    question: 'Um turbo compressor é acionado:',
    answers: [
      {
        answer: 'Pelos gases de escape do motor',
        correct: true,
      },
      {
        answer: 'Por uma correia ligada á cambota',
        correct: false,
      },
      {
        answer: 'Pelos gases de admissão do motor',
        correct: false,
      },
    ],
  },
  {
    question: 'Os órgãos que compõem a suspensão, por exemplo molas, amortecedores, braços oscilantes, são classificados como:',
    answers: [
      {
        answer: 'Massa não suspensa.',
        correct: true,
      },
      {
        answer: 'Massa suspensa',
        correct: false,
      },
      {
        answer: 'Nenhuma opção é correta',
        correct: false,
      },
    ],
  },
  {
    question: 'No tempo de admissão o êmbolo:',
    answers: [
      {
        answer: 'Sobe com a válvula de admissão fechada.',
        correct: false,
      },
      {
        answer: 'Desce com a válvula de admissão aberta.',
        correct: true,
      },
      {
        answer: 'Desce com a válvula de admissão fechada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Com o veículo parado e o motor a funcionar, o veio de transmissão:',
    answers: [
      {
        answer: 'Roda para direita',
        correct: false,
      },
      {
        answer: 'Roda para esquerda',
        correct: false,
      },
      {
        answer: 'Não roda.',
        correct: true,
      },
    ],
  },
  {
    question: 'Onde se encontra situada a turbina que, devido a um eixo comum, movimenta o turbo compressor?',
    answers: [
      {
        answer: 'No coletor de admissão',
        correct: false,
      },
      {
        answer: 'Na cabeça do motor',
        correct: false,
      },
      {
        answer: 'No coletor de escape.',
        correct: true,
      },
    ],
  },
  {
    question: 'Para se medir a folga da válvula deve-se rodar o motor até que fique a válvula na posição de:',
    answers: [
      {
        answer: 'Desmontada',
        correct: false,
      },
      {
        answer: 'Completamente fechada',
        correct: true,
      },
      {
        answer: 'Completamente aberta',
        correct: false,
      },
    ],
  },
  {
    question: 'Num dos veios excêntricos, a parte de encaixo/dentado localizado na ponta do veio:',
    answers: [
      {
        answer: 'Nos motores a gasolina, serve para accionar o distribuidor.',
        correct: true,
      },
      {
        answer: 'Nos motores a gasóleo, serve para accionar a bomba injectora.',
        correct: false,
      },
      {
        answer: 'Nenhuma opção',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a válvula, no tampão do radiador, que controla a pressão do sistema de arrefecimento e deixa sair o excesso de água ou vapor, quando necessário?',
    answers: [
      {
        answer: 'Válvula de vácuo',
        correct: false,
      },
      {
        answer: 'Válvula de pressão.',
        correct: true,
      },
      {
        answer: 'Válvula de escape',
        correct: false,
      },
    ],
  },
  {
    question: 'A mola de lâminas fecha-se ao quadro por:',
    answers: [
      {
        answer: 'Um brinco e uma cavilha.',
        correct: true,
      },
      {
        answer: 'Rebites',
        correct: false,
      },
      {
        answer: 'Encaixe',
        correct: false,
      },
    ],
  },
  {
    question: 'Durante o funcionamento de um motor á 4 tempos',
    answers: [
      {
        answer: 'A árvore de cames efectua metade das rotações da cambota.',
        correct: true,
      },
      {
        answer: 'A árvore de cames efectua o triplo das rotações da cambota.',
        correct: false,
      },
      {
        answer: 'A árvore de cames efectua o dobro das rotações da cambota.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os amortecedores a gás funcionam de forma idêntica aos hidráulicos. Qual ou quais dos fluídos operam nos amortecedores a gás?',
    answers: [
      {
        answer: 'Óleo e azoto sob pressão.',
        correct: true,
      },
      {
        answer: 'Óleo',
        correct: false,
      },
      {
        answer: 'Hidrogênio',
        correct: false,
      },
    ],
  },
  {
    question: 'Com que peça se une o pé da biela ao êmbolo?',
    answers: [
      {
        answer: 'Cavilha.',
        correct: true,
      },
      {
        answer: 'Bronze',
        correct: false,
      },
      {
        answer: 'Cardan',
        correct: false,
      },
    ],
  },
  {
    question: 'Na verificação da estanquicidade de um sistema de arrefecimento, se o manómetro de verificação indicar uma queda de pressão, isso significa que:',
    answers: [
      {
        answer: 'Termostato avariado',
        correct: false,
      },
      {
        answer: 'A ventoinha não está funcionando',
        correct: false,
      },
      {
        answer: 'Existem fugas no circuito.',
        correct: true,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 3050);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
