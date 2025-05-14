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
    question: 'O agente regulador de trânsito, parado, com o braço esquerdo esticado horizontalmente, e a palma visível, manda:',
    answers: [
      {
        answer: 'Parar o tráfego que venha da esquerda',
        correct: false,
      },
      {
        answer: 'Avançar o tráfego que venha da esquerda',
        correct: false,
      },
      {
        answer: 'Parar o tráfego que venha da retaguarda.',
        correct: true,
      },
    ],
  },
  {
    question: 'Desde o anoitecer até ao amanhecer, pode deixar as luzes de cruzamento acesas quando o veículo estiver estacionado?',
    answers: [
      {
        answer: 'Sim, é obrigatório',
        correct: false,
      },
      {
        answer: 'Não é obrigatório',
        correct: true,
      },
      {
        answer: 'Não é proibido deixar qualquer luz acessa, em qualquer situação',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos dias quentes, é recomendável:',
    answers: [
      {
        answer: 'evitar conduzir com o ar condicionado ligado.',
        correct: false,
      },
      {
        answer: 'fazer menos descansos durante a viagem, para chegar ao destino o mais rapidamente possível.',
        correct: false,
      },
      {
        answer: 'efectuar mais descansos durante uma viagem, porque a fadiga e o sono aparecem mais facilmente.',
        correct: true,
      },
    ],
  },
  {
    question: 'Utilizar o veículo em via pública, demonstrar ou exibir manobra de arranque brusco, derrapagem ou travagem com deslizamento de pneus, constitui contravenção:',
    answers: [
      {
        answer: 'Grave',
        correct: true,
      },
      {
        answer: 'Leve',
        correct: false,
      },
      {
        answer: 'Média',
        correct: false,
      },
    ],
  },
  {
    question: 'Em acidente de viação com vítima, deixar de prestar ou providenciar socorro, constitui contravenção:',
    answers: [
      {
        answer: 'Média',
        correct: false,
      },
      {
        answer: 'Leve',
        correct: false,
      },
      {
        answer: 'Grave',
        correct: true,
      },
    ],
  },
  {
    question: 'Salvo no caso de perigo iminente, que deve fazer o condutor se tem que diminuir subitamente a velocidade do veículo?',
    answers: [
      {
        answer: 'Advertir utilizando sinais sonoros',
        correct: false,
      },
      {
        answer: 'Certificar-se que não resulta perigo, nomeadamente para os condutores dos veículos que o sigam.',
        correct: true,
      },
      {
        answer: 'Apenas utilizar as luzes de perigo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante uma passagem de nível que não dispuser de protecção ou sinalização, o condutor:',
    answers: [
      {
        answer: 'Só pode iniciar a travessia depois de se certificar de que não se aproxima um veículo ferroviário.',
        correct: true,
      },
      {
        answer: 'Está obrigado a utilizar sinais sonoros.',
        correct: false,
      },
      {
        answer: 'Tem que inverter o sentido de marcha e seguir outra via.',
        correct: false,
      },
    ],
  },
  {
    question: 'A utilização de sinais sonoros é permitida:',
    answers: [
      {
        answer: 'Em casos de perigo eminente',
        correct: true,
      },
      {
        answer: 'Dentro das localidades, para prevenir ultrapassagens',
        correct: false,
      },
      {
        answer: 'Como meio de manifestação, ou protesto',
        correct: false,
      },
    ],
  },
  {
    question: 'Dentro das localidades, pode utilizar sinais sonoros:',
    answers: [
      {
        answer: 'so em caso de manifestar uma necessidade, como no caso de um perigo eminente',
        correct: true,
      },
      {
        answer: 'Durante a noite',
        correct: false,
      },
      {
        answer: 'Na aproximação de uma curva',
        correct: false,
      },
    ],
  },
  {
    question: 'O facto de conduzir de noite, deve ter influência na velocidade a que segue?',
    answers: [
      {
        answer: 'Sim',
        correct: true,
      },
      {
        answer: 'Sim, mas apenas dentro da localidade',
        correct: false,
      },
      {
        answer: 'Não, se conheço bem a estrada',
        correct: false,
      },
    ],
  },
  {
    question: 'Como se comportar quando a linha faz separação de vias de trânsito?',
    answers: [
      {
        answer: 'Abrandar',
        correct: false,
      },
      {
        answer: 'Pisar ou transpor a linha',
        correct: false,
      },
      {
        answer: 'Circular a sua esquerda, quando a linha fizer a separação de sentidos de trânsito.',
        correct: true,
      },
    ],
  },
  {
    question: 'Quando na faixa de rodagem existam placas, postes, ilhéus direcionais ou dispositivos semelhantes, como deve transitar?',
    answers: [
      {
        answer: 'Obrigatoriamente pela direita, se estão numa via de sentido único.',
        correct: false,
      },
      {
        answer: 'Dando-lhes a direita, se estão numa via de dois sentidos.',
        correct: true,
      },
      {
        answer: 'Pela direita ou pela esquerda, se estão numa via de dois sentidos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Entende-se por prioridade de passagem:',
    answers: [
      {
        answer: 'O direito que o condutor tem de passar em primeiro lugar.',
        correct: true,
      },
      {
        answer: 'A obrigação que o condutor tem de imobilizar o veiculo num cruzamento com sinal de paragem obrigatória.',
        correct: false,
      },
      {
        answer: 'A movimentação de veículos e animais nas vias de comunicação rodoviária.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num cruzamento de veículos, qual deve passar em primeiro?',
    answers: [
      {
        answer: 'O veículo que tiver a sua direita livre',
        correct: true,
      },
      {
        answer: 'O mais apressado',
        correct: false,
      },
      {
        answer: 'Qualquer veículo pode passar',
        correct: false,
      },
    ],
  },
  {
    question: 'Numa estrada de duplo sentido de circulação, como deve circular:',
    answers: [
      {
        answer: 'Pela direita',
        correct: false,
      },
      {
        answer: 'Pela esquerda e mantendo uma distância lateral suficiente para evitar acidentes.',
        correct: true,
      },
      {
        answer: 'Pelo centro, já que não existe linha que delimite os sentidos da circulação.',
        correct: false,
      },
    ],
  },
  {
    question: 'O estado emocional do condutor, é um factor de ordem interna, que influencia:',
    answers: [
      {
        answer: 'Apenas a distância de travagem.',
        correct: false,
      },
      {
        answer: 'Apenas a distância de segurança.',
        correct: false,
      },
      {
        answer: 'O tempo de reacção e a distância de travagem.',
        correct: true,
      },
    ],
  },
  {
    question: 'A que grupo pertence a marca rodoviária branca(linha contínua e descontínua)?',
    answers: [
      {
        answer: 'Marcas orientadoras de sentido de trânsito.',
        correct: false,
      },
      {
        answer: 'Marcas transversais.',
        correct: false,
      },
      {
        answer: 'Marcas longitudinais.',
        correct: true,
      },
    ],
  },
  {
    question: 'Se os ocupantes do veículo não utilizarem o cinto de segurança, o airbag é eficaz?',
    answers: [
      {
        answer: 'Sim, sempre que os passageiros estejam sentados corretamente.',
        correct: false,
      },
      {
        answer: 'Não, pode causar lesões graves.',
        correct: true,
      },
      {
        answer: 'Sim o airbag é sempre eficaz.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a validade que tem a carta de condução da categoria B?',
    answers: [
      {
        answer: 'Cinco anos',
        correct: true,
      },
      {
        answer: 'Dez anos',
        correct: false,
      },
      {
        answer: 'Quatro anos',
        correct: false,
      },
      {
        answer: 'Três anos',
        correct: false,
      },
    ],
  },
  {
    question: 'Os direitos humanos:',
    answers: [
      {
        answer: 'São universais, intransmissíveis e de reivindicação perante o Estado.',
        correct: false,
      },
      {
        answer: 'São universais, individuais, inatos e de reivindicação.',
        correct: true,
      },
      {
        answer: 'São universais, naturais e de reivindicação.',
        correct: false,
      },
    ],
  },
  {
    question: 'Dentro das localidades, é proibido parar ou estacionar:',
    answers: [
      {
        answer: 'A menos de 5 metros antes das passagens assinaladas para a travessia de peões e velocípedes.',
        correct: true,
      },
      {
        answer: 'A menos de 25 metros para um e outro lado dos cruzamentos ou entroncamentos.',
        correct: false,
      },
      {
        answer: 'Na faixa de rodagem, ou qualquer caso',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando se considera velocidade excessiva?',
    answers: [
      {
        answer: 'Sempre que o condutor não possa fazer parar o veículo no espaço livre visível a sua frente, ou exceda os limites de velocidade fixados nos termos legais.',
        correct: true,
      },
      {
        answer: 'Quando acelera pouco',
        correct: false,
      },
      {
        answer: 'Apenas quando o condutor exceda os limites de velocidade fixados nos termos legais.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num acidente grave com feridos, o que fazer se não saber como ajudar?',
    answers: [
      {
        answer: 'Não lhes tocar, e ligar ao 112',
        correct: true,
      },
      {
        answer: 'Abandonar o local e não fazer nada',
        correct: false,
      },
      {
        answer: 'Retirar rapidamente, e levá-los ao hospital',
        correct: false,
      },
    ],
  },
  {
    question: 'Posso ultrapassar veículos que estejam a ultrapassar os outros?',
    answers: [
      {
        answer: 'Não, a menos que não seja necessário utilizar a parte da faixa de rodagem reservada ao trânsito em sentido contrário.',
        correct: true,
      },
      {
        answer: 'Sim, sempre que o sinalize com a necessária antecedência.',
        correct: false,
      },
      {
        answer: 'Não, mesmo que sejam possíveis três ou mais filas de trânsito no mesmo sentido.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para auxiliar uma vítima de um acidente rodoviário, deve dar-lhe alimentos ou bebidas?',
    answers: [
      {
        answer: 'Não, só se pode dar medicamentos, tranquilizante',
        correct: false,
      },
      {
        answer: 'Sim, só se pedir',
        correct: false,
      },
      {
        answer: 'Não',
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
