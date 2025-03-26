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
    question: 'O braço direito esticado para a direita, e depois dobrado até á cabeça, o agente regulador de trânsito, manda:',
    answers: [
      {
        answer: 'Avançar o tráfego que venha da direita.',
        correct: true,
      },
      {
        answer: 'Parar o tráfego que da direita", "Avançar o tráfego que venha da esquerda',
        correct: false,
      },
    ],
  },
  {
    question: 'Entende-se por moral:',
    answers: [
      {
        answer: 'A sensação de frustração depois da violação das regras de trânsito.',
        correct: false,
      },
      {
        answer: 'Conjunto de regras de conduta e de valores no seio de uma sociedade ou de um grupo.',
        correct: true,
      },
      {
        answer: 'A condução defensiva praticada com o intuito de evitar acidentes de viação.',
        correct: false,
      },
    ],
  },
  {
    question: 'Antebraço levantado, o cotovelo virado para a frente, o agente regulador manda:',
    answers: [
      {
        answer: 'Avançar o tráfego que venha da frente',
        correct: true,
      },
      {
        answer: 'Parar o tráfego que venha da frente',
        correct: false,
      },
      {
        answer: 'Avançar o tráfego que venha da retaguarda',
        correct: false,
      },
    ],
  },
  {
    question: 'Se a viagem é curta, é obrigatório utilizar o cinto de segurança?',
    answers: [
      {
        answer: 'Sim, para o condutor e para os passageiros transportados.',
        correct: true,
      },
      {
        answer: 'Sim, mas so para o condutor.',
        correct: false,
      },
      {
        answer: 'Não',
        correct: false,
      },
    ],
  },
  {
    question: 'O que deve fazer o condutor se a fila da esquerda estiver a circular mais rapidamente?',
    answers: [
      {
        answer: 'Sinalizar e mudar de fila',
        correct: false,
      },
      {
        answer: 'Mudar de fila',
        correct: false,
      },
      {
        answer: 'Manter-se na fila de trânsito em que se encontra.',
        correct: true,
      },
    ],
  },
  {
    question: 'É proibido estacionar:',
    answers: [
      {
        answer: 'no lado da faixa de rodagem em que esteja uma linha continua de cor branca.',
        correct: false,
      },
      {
        answer: 'Em cima do passeio',
        correct: true,
      },
      {
        answer: 'de noite, nas faixas de rodagem das localidades.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os jovens, tem mais possibilidades de ter acidentes rodoviários?',
    answers: [
      {
        answer: 'Sim, normalmente fazem uma avaliação incorreta dos riscos.',
        correct: true,
      },
      {
        answer: 'Sim, a sua visão e mais reduzida.',
        correct: false,
      },
      {
        answer: 'Não',
        correct: false,
      },
    ],
  },
  {
    question: 'A idade mínima para poder obter a carta de condução da categoria B, é:',
    answers: [
      {
        answer: '18',
        correct: true,
      },
      {
        answer: '16',
        correct: false,
      },
      {
        answer: '25',
        correct: false,
      },
      {
        answer: '21',
        correct: false,
      },
    ],
  },
  {
    question: 'Deixar de dar prioridade de passagem nos cruzamentos ou entroncamentos não sinalizados ao veículo que vier da direita, constitui contravenção:',
    answers: [
      {
        answer: 'Grave',
        correct: true,
      },
      {
        answer: 'Média',
        correct: false,
      },
      {
        answer: 'Leve',
        correct: false,
      },
    ],
  },
  {
    question: 'De dia e com boa visibilidade, que veículos estão obrigados a transitar com as luzes de cruzamento acesas?',
    answers: [
      {
        answer: 'Os motociclos e ciclomotores',
        correct: true,
      },
      {
        answer: 'Os motociclos, mas só quando circulem fora das localidades.',
        correct: false,
      },
      {
        answer: 'Todos os veículo',
        correct: false,
      },
    ],
  },
  {
    question: 'Nas estradas com dois sentidos de circulação, que devem fazer os condutores que pretendam mudar de direção para a direita?',
    answers: [
      {
        answer: 'Aproximar-se com a necessária antecedência do limite direito da faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'Chegar-se o mais possível para a esquerda.',
        correct: false,
      },
      {
        answer: 'Aproximar-se com a devida antecedência do eixo da via.',
        correct: true,
      },
    ],
  },
  {
    question: 'A que altura deve ficar a parte central do encosto de cabeça, para garantir uma proteção eficaz em caso de acidente rodoviário?',
    answers: [
      {
        answer: 'Por cima da cabeça',
        correct: false,
      },
      {
        answer: 'A altura dos olhos',
        correct: true,
      },
      {
        answer: 'O mais baixo possível',
        correct: false,
      },
    ],
  },
  {
    question: 'As pessoas que são encontradas a conduzir sem possuir carta de condução:',
    answers: [
      {
        answer: 'São punidas com pena de prisão de três dias a seis meses e multa de 5000 MT.',
        correct: true,
      },
      {
        answer: 'São punidas com pena de prisão de um a três dias e multa de 5000 MT.',
        correct: false,
      },
      {
        answer: 'Não podem ser punidas',
        correct: false,
      },
    ],
  },
  {
    question: 'É comum que um operador de obras/com sinal, sinalize:',
    answers: [
      {
        answer: 'Uma paragem obrigatória',
        correct: true,
      },
      {
        answer: 'Aproximação de uma estrada com prioridade',
        correct: false,
      },
      {
        answer: 'Paragem obrigatória em quatro vias.',
        correct: false,
      },
    ],
  },
  {
    question: 'Pode provocar distração no condutor:',
    answers: [
      {
        answer: 'Mudar de velocidade.',
        correct: false,
      },
      {
        answer: 'Manipulação de GPS, durante a condução.',
        correct: true,
      },
      {
        answer: 'Olha no espelho retrovisor',
        correct: false,
      },
    ],
  },
  {
    question: 'Transitar em sentido oposto ao estabelecido, constitui contravenção:',
    answers: [
      {
        answer: 'Leve',
        correct: false,
      },
      {
        answer: 'Grave',
        correct: false,
      },
      {
        answer: 'Grave',
        correct: true,
      },
    ],
  },
  {
    question: 'Pode o condutor evitar um acidente devido ao mau estado do seu veículo?',
    answers: [
      {
        answer: 'Não, as falhas mecânicas são sempre imprevisíveis e inevitáveis.',
        correct: false,
      },
      {
        answer: 'Não, porque todos os acidentes são inevitáveis.',
        correct: false,
      },
      {
        answer: 'Sim, porque o estado do seu veículo depende dele.',
        correct: true,
      },
    ],
  },
  {
    question: 'O condutor que pretende iniciar a sua marcha, deve:',
    answers: [
      {
        answer: 'só sinalizar a sua intenção, já que os demais condutores devem ceder-lhe a passagem.',
        correct: false,
      },
      {
        answer: 'certificar-se que pode fazê-lo sem perigo e sinalizar a sua intenção com antecedência.',
        correct: true,
      },
      {
        answer: 'ligar a luz intermitente do lado direito e avançar.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sistema de iluminação dos veículos automóveis:',
    answers: [
      {
        answer: 'ajuda a ver bem a estrada e a que o veículos seja visto.',
        correct: true,
      },
      {
        answer: 'só se utiliza para sinalizar as manobras.',
        correct: false,
      },
      {
        answer: 'não tem manutenção.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que fazer ao chegar numa intersecção de vias?',
    answers: [
      {
        answer: 'Ceder a passagem aos veículos que se apresentem pela esquerda.',
        correct: false,
      },
      {
        answer: 'Demonstrar prudência especial, moderando a velocidade e ceder a passagem aos veículos que tenham prioridade.',
        correct: true,
      },
      {
        answer: 'Apenas ceder a passagem aos peões que tenham prioridade.',
        correct: false,
      },
    ],
  },
  {
    question: 'O condutor dum ciclomotor, Pode levar o capacete ajustado e apertado?',
    answers: [
      {
        answer: 'Não, porque não garante uma protecção eficaz em caso de acidente.',
        correct: true,
      },
      {
        answer: 'Sim, sempre que seja um modelo aprovado oficialmente.',
        correct: false,
      },
      {
        answer: 'Sim, já que não é obrigatório para os condutores de ciclomotores.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se conduzir por muito tempo sem descansar:',
    answers: [
      {
        answer: 'A condução torna-se perigosa',
        correct: true,
      },
      {
        answer: 'aumenta a atenção do condutor.',
        correct: false,
      },
      {
        answer: 'Aumenta a segurança',
        correct: false,
      },
    ],
  },
  {
    question: 'O cruzamento de veículos, numa intercessão de vias e sem sinalização, quem deve passar em primeiro?',
    answers: [
      {
        answer: 'Os condutores que se apresentam pela direita',
        correct: true,
      },
      {
        answer: 'Todos os condutores que circulem pela via transversal.',
        correct: false,
      },
      {
        answer: 'Os condutores que se apresentem pela esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se a viagem é curta, é obrigatório utilizar o cinto de segurança?',
    answers: [
      {
        answer: 'Sim, para o condutor e para os passageiros transportados.',
        correct: true,
      },
      {
        answer: 'Não',
        correct: false,
      },
      {
        answer: 'Não, se não sai da localidade',
        correct: false,
      },
    ],
  },
  {
    question: 'Os condutores de motociclos, ciclomotores ou velocípedes, podem circular a par na faixa de rodagem?',
    answers: [
      {
        answer: 'Sim',
        correct: false,
      },
      {
        answer: 'Sim, se não causarem perigo ou embaraço ao trânsito.',
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
