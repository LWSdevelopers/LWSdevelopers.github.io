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
    question: 'A linha transversal descontinua, é uma:',
    answers: [
      {
        answer: 'Linha de cedência de prioridade',
        correct: true,
      },
      {
        answer: 'Linha de paragem obrigatória',
        correct: false,
      },
      {
        answer: 'Linha descontínua de aviso',
        correct: false,
      },
    ],
  },
  {
    question: 'A luz de cruzamento (médios), destina-se a iluminar a via para frente do veículo numa distância até:',
    answers: [
      {
        answer: '50 metros',
        correct: false,
      },
      {
        answer: '30 metros',
        correct: true,
      },
      {
        answer: '20 metros',
        correct: false,
      },
    ],
  },
  {
    question: 'O que deve fazer o condutor que circula por uma auto-estrada?',
    answers: [
      {
        answer: 'Aumentar a distância de segurança, por se seguir a velocidades mais elevadas.',
        correct: true,
      },
      {
        answer: 'Diminuir a distância de segurança, por se seguir a velocidades elevadas.',
        correct: false,
      },
      {
        answer: 'Circular pela via de trânsito mais a direita, ainda que a via da esquerda se encontre livre de trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'O uso de capacete, protege a cabeça:',
    answers: [
      {
        answer: 'é obrigatório para os condutores e passageiros de motociclos e ciclomotores.',
        correct: true,
      },
      {
        answer: 'é recomendável para os condutores e passageiros de motociclos, mas não é obrigatório.',
        correct: false,
      },
      {
        answer: 'só é obrigatório para os condutores e passageiros de motociclos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se durante a marcha detectar um furo num pneu deve:',
    answers: [
      {
        answer: 'Prosseguir ainda que seja a uma velocidade muito reduzida.',
        correct: false,
      },
      {
        answer: 'Imobilizar imediatamente o veículo na faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'Retirar o veículo da faixa de rodagem ou, se não o pode fazer, aproxima-lo o mais possível do limite esquerdo desta.',
        correct: true,
      },
    ],
  },
  {
    question: 'É necessário regular e ajustar o encosto de cabeça para a altura dos ocupantes?',
    answers: [
      {
        answer: 'Não, se o veículo tiver cintos de segurança.',
        correct: false,
      },
      {
        answer: 'Sim, porque pode evitar lesões na zona do pescoço.',
        correct: true,
      },
      {
        answer: 'Não é necessário, porque e apenas um elemento de conforto.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que entende por Sanção',
    answers: [
      {
        answer: 'O prémio ou castigo anexo as ações humanas.',
        correct: true,
      },
      {
        answer: 'A repetição de valores positivos.',
        correct: false,
      },
      {
        answer: 'A repetição de valores negativos',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante a luz verde, não deve avançar:',
    answers: [
      {
        answer: 'Quando pela intensidade de trânsito, seja previsível a imobilização no centro da intersecção.',
        correct: true,
      },
      {
        answer: 'Quando no passeio existam peões que pretendam iniciar a travessia da faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'Quando um agente regulador de trânsito se encontre nas proximidades.',
        correct: false,
      },
    ],
  },
  {
    question: 'Com a finalidade de verificar as suas características e condições de segurança, os automóveis ligeiros e motociclos devem ser apresentados a inspeção:',
    answers: [
      {
        answer: 'quatro anos após a data da matrícula e depois anualmente.',
        correct: true,
      },
      {
        answer: 'dois anos após a data da matrícula e depois anualmente.',
        correct: false,
      },
      {
        answer: 'dois anos após a data da matrícula, até fazerem quatro anos e depois anualmente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Fora das localidades, os condutores de ciclomotores e quadriciclos, não devem exceder a velocidade instantânea de:',
    answers: [
      {
        answer: '45 km/h',
        correct: true,
      },
      {
        answer: '35 km/h',
        correct: false,
      },
      {
        answer: '50 km/h',
        correct: false,
      },
    ],
  },
  {
    question: 'O braço esticado para a esquerda, e depois dobrado até a cabeça, o agente regulador manda:',
    answers: [
      {
        answer: 'Está a cumprimentar.',
        correct: false,
      },
      {
        answer: 'Parar o tráfego da direita", "Avançar o tráfego da direita',
        correct: false,
      },
      {
        answer: 'Avançar o tráfego que venha da esquerda.',
        correct: true,
      },
    ],
  },
  {
    question: 'Podem ser submetidos as provas para a detecção de álcool ou substâncias estupefacientes ou psicotrópicas:',
    answers: [
      {
        answer: 'Só os condutores que sejam intervenientes em acidentes de trânsito.',
        correct: false,
      },
      {
        answer: 'Os peões, sempre que sejam intervenientes em acidentes de trânsito e os condutores.',
        correct: true,
      },
      {
        answer: 'Apenas os condutores de veículos automóveis.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os sistemas de segurança passiva dos veículos, tem a função de:',
    answers: [
      {
        answer: 'Evitar ou reduzir as lesões que podem ocorrer no caso de sofrer um acidente.',
        correct: true,
      },
      {
        answer: 'Transmitir uma sensação de segurança quando se circula a velocidades elevadas.',
        correct: false,
      },
      {
        answer: 'Evitar os acidentes',
        correct: false,
      },
    ],
  },
  {
    question: 'Se pretender mudar de direção para a direita numa via de sentido único, onde deve posicionar-se?',
    answers: [
      {
        answer: 'Na direita da faixa de rodagem',
        correct: true,
      },
      {
        answer: 'É indiferente',
        correct: false,
      },
      {
        answer: 'Na esquerda da faixa de rodagem',
        correct: false,
      },
    ],
  },
  {
    question: 'É perigoso utilizar o telefone móvel durante a condução?',
    answers: [
      {
        answer: 'Não, quando a conversa não durar muito tempo.',
        correct: false,
      },
      {
        answer: 'Sim, porque reduz a atenção necessária para conduzir com segurança.',
        correct: true,
      },
      {
        answer: 'Sim, mas só quando se utilizar um aparelho mãos livres.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual e a função do cinto de segurança de um veículo?',
    answers: [
      {
        answer: 'Manter os ocupantes sentados na posição correta.',
        correct: false,
      },
      {
        answer: 'Permitir que os ocupantes se desloquem sobre o assento em caso de acidente.',
        correct: false,
      },
      {
        answer: 'Reter e proteger os ocupantes numa colisão.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que deve fazer o condutor que circula por uma auto-estrada?',
    answers: [
      {
        answer: 'Circular pela via de trânsito mais a direita, ainda que a via da esquerda se encontre livre de trânsito.',
        correct: false,
      },
      {
        answer: 'Diminuir a distância de segurança, por se seguir a velocidades elevadas.',
        correct: false,
      },
      {
        answer: 'Aumentar a distância de segurança, por se seguir a velocidades mais elevadas.',
        correct: true,
      },
    ],
  },
  {
    question: 'Que deve fazer o condutor de um veículo avariado enquanto não for devidamente estacionado ou removido?',
    answers: [
      {
        answer: 'Colocar um sinal de pré-sinalização de perigo 10 metros a retaguarda do veículo.',
        correct: false,
      },
      {
        answer: 'Adoptar as medidas necessárias para que os outros se apercebam da sua presença.',
        correct: true,
      },
      {
        answer: 'Colocar os sinais de pré-sinalização de perigo e depois vestir o colete reflector.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que sinais indicam que o condutor esta fatigado?',
    answers: [
      {
        answer: 'Bocejos e desconforto no pescoço e nas costas.',
        correct: true,
      },
      {
        answer: 'Alta precisão e eficácia ao efectuar as manobras.',
        correct: false,
      },
      {
        answer: 'Relaxamento dos músculos do pescoço e das costas.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que entende-se por liberdade?',
    answers: [
      {
        answer: 'A condução de veículos automóveis por longos períodos de tempo.',
        correct: false,
      },
      {
        answer: 'O poder que o Homem tem de agir, de praticar uma ação sem qualquer pressão ou constrangimento.',
        correct: true,
      },
      {
        answer: 'Faculdade de num cruzamento não sinalizado, avançar sem observar a regra de prioridade.',
        correct: false,
      },
    ],
  },
  {
    question: 'As ultrapassagens devem fazer-se:',
    answers: [
      {
        answer: 'pela direita dos veículos ou animais.',
        correct: true,
      },
      {
        answer: 'pela direita ou pela esquerda, se houver espaço suficiente na berma.',
        correct: false,
      },
      {
        answer: 'nas curvas de visibilidade reduzida.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um torniquete é',
    answers: [
      {
        answer: 'uma tira larga de pano, amarrada firmemente em torno de um membro.',
        correct: true,
      },
      {
        answer: 'um pedaço de papel onde se menciona a parte do corpo que foi amarrada.',
        correct: false,
      },
      {
        answer: 'uma pega de madeira, utilizada para aliviar a dor da vitima de acidente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que veículos devem ter o seguro de responsabilidade civil para transitar na via pública?',
    answers: [
      {
        answer: 'Os veículos a motor.',
        correct: true,
      },
      {
        answer: 'Apenas os veículos automóveis.',
        correct: false,
      },
      {
        answer: 'Só os ciclomotores.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ė necessário verificar com frequência o sistema de iluminação?',
    answers: [
      {
        answer: 'Sim, para se assegurar que todas as luzes funcionam e que os faróis estão bem regulados.',
        correct: true,
      },
      {
        answer: 'Não, é suficiente a revisão na inspeção periódica obrigatória.',
        correct: false,
      },
      {
        answer: 'Não, porque se deve fazer unicamente numa oficina.',
        correct: false,
      },
    ],
  },
  {
    question: 'A luz de estrada, destina-se a iluminar a via para frente do veículo numa distância:',
    answers: [
      {
        answer: 'Não inferior a 150 metros',
        correct: false,
      },
      {
        answer: 'Não inferior a 50 metros',
        correct: false,
      },
      {
        answer: 'Não, inferior a 100 metros',
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
  }, 4030);
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
