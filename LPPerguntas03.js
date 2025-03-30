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
    question: 'Sempre que o veiculo esteja parado ou estacionado do lado esquerdo da faixa de rodagem:',
    answers: [
      {
        answer: 'os passageiros devem entrar e sair pelo lado esquerdo do veículo.',
        correct: true,
      },
      {
        answer: 'o condutor deve entrar e sair pelo lado esquerdo do veículo.',
        correct: false,
      },
      {
        answer: 'os passageiros devem entrar e sair pelo lado direito do veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que deve fazer quando um velocípede segue no mesmo sentido de trânsito?',
    answers: [
      {
        answer: 'Ultrapassa-lo a grande velocidade',
        correct: false,
      },
      {
        answer: 'Ter em atenção a instabilidade desse veículo.',
        correct: true,
      },
      {
        answer: 'Utilizar sinais sonoros',
        correct: false,
      },
    ],
  },
  {
    question: 'Os acidentes de viação são um problema que afecta:',
    answers: [
      {
        answer: 'Toda a sociedade',
        correct: true,
      },
      {
        answer: 'Só os condutores',
        correct: false,
      },
      {
        answer: 'Só as vítimas.',
        correct: false,
      },
    ],
  },
  {
    question: 'O álcool influência de forma negativa o desempenho da tarefa de condução?',
    answers: [
      {
        answer: 'Não, se tomado no tempo do almoço',
        correct: false,
      },
      {
        answer: 'Sim',
        correct: true,
      },
      {
        answer: 'Não, porque é um estimulante',
        correct: false,
      },
    ],
  },
  {
    question: 'Nas passagens de nível, os condutores estão obrigados a:',
    answers: [
      {
        answer: 'Passar quando as cancelas ou barreiras estejam em movimento.',
        correct: false,
      },
      {
        answer: 'Engrenar uma velocidade mais baixa durante o atravessamento.',
        correct: false,
      },
      {
        answer: 'Certificar-se que a intensidade do tráfego não o obriga a imobilizar o veículo sobre ela.',
        correct: true,
      },
    ],
  },
  {
    question: 'A marcha atrás, é uma manobra que deve ser efectuada:',
    answers: [
      {
        answer: 'O mais a direita possível, em local de boa visibilidade.',
        correct: false,
      },
      {
        answer: 'Lentamente e o mais possível à esquerda.',
        correct: true,
      },
      {
        answer: 'O mais rapidamente possível em local onde não prejudique o trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se tem a carta de condução da categoria B há menos de um ano e conduz um automóvel ligeiro de passageiros, não pode exceder a velocidade de:',
    answers: [
      {
        answer: '90 km/h',
        correct: true,
      },
      {
        answer: '80 km/h',
        correct: false,
      },
      {
        answer: '120 km/h',
        correct: false,
      },
      {
        answer: '100 km/h',
        correct: false,
      },
    ],
  },
  {
    question: 'A finalidade dos sistemas de segurança activa e passiva dos veículos, é:',
    answers: [
      {
        answer: 'Reduzir os acidentes de trânsito e as suas consequências.',
        correct: true,
      },
      {
        answer: 'Poder circular sem prestar atenção a estrada.',
        correct: false,
      },
      {
        answer: 'Pode circular em alta velocidade sem perigo',
        correct: false,
      },
    ],
  },
  {
    question: 'Se o condutor sofre de uma doença, o que deve fazer para reduzir o risco de ter um acidente?',
    answers: [
      {
        answer: 'Conhecer os efeitos secundários dos medicamentos.',
        correct: true,
      },
      {
        answer: 'Ignorar os sintomas para evitar distrações.',
        correct: false,
      },
      {
        answer: 'Interromper a medicação que estiver a tomar, se tem que conduzir.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que veículos podem conduzir as pessoas que só possuam a carta de condução da categoria B?',
    answers: [
      {
        answer: 'Automóveis ligeiros',
        correct: true,
      },
      {
        answer: 'Todos os tipos de automóveis',
        correct: false,
      },
      {
        answer: 'Motociclos, com ou sem carro',
        correct: false,
      },
    ],
  },
  {
    question: 'Entende-se por cruzamento de veículos:',
    answers: [
      {
        answer: 'Quando na mesma via, se encontram dois veículos transitando no mesmo sentido.',
        correct: false,
      },
      {
        answer: 'Quando dois veículos, circulando na mesma fila, o que se encontra atrás passa para diante do outro.',
        correct: false,
      },
      {
        answer: 'Quando os condutores de dois veículos que transitam na mesma via e em sentidos opostos, passam um pelo outro em simultâneo.',
        correct: true,
      },
    ],
  },
  {
    question: 'Na tarefa da condução, em que momento é a audição um sentido muito importante?',
    answers: [
      {
        answer: 'Na tomada de decisão',
        correct: false,
      },
      {
        answer: 'Na recolha de informação',
        correct: true,
      },
      {
        answer: 'No tratamento da informação',
        correct: false,
      },
    ],
  },
  {
    question: 'Durante a noite, quando deve o condutor utilizar as luzes de cruzamento?',
    answers: [
      {
        answer: 'No cruzamento com outros veículos ou quando esteja a menos de 100 metros do veículo que segue á sua frente.',
        correct: true,
      },
      {
        answer: 'Fora das localidades, nos locais em que a iluminação permita uma visibilidade inferior a 25 metros.',
        correct: false,
      },
      {
        answer: 'Só no cruzamento com pessoas ou animais.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em curva de visibilidade reduzida, pode ultrapassar?',
    answers: [
      {
        answer: 'Não, a menos que sejam possíveis duas ou mais filas de trânsito no mesmo sentido e não se faça pela parte reservada ao sentido contrário.',
        correct: true,
      },
      {
        answer: 'Não, em nenhum caso',
        correct: false,
      },
      {
        answer: 'Sim, utilizando os dispositivos luminosos e sonoros',
        correct: false,
      },
    ],
  },
  {
    question: 'A fadiga, é um estado que pode influenciar a recolha de informação durante a condução?',
    answers: [
      {
        answer: 'Não',
        correct: false,
      },
      {
        answer: 'Sim, tal como influencia toda a tarefa da condução.',
        correct: true,
      },
      {
        answer: 'Sim, mas apenas influencia a recolha de informação em condução urbana.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao transitar, é necessário manter entre os veículos uma distância de segurança?',
    answers: [
      {
        answer: 'Sim, unicamente uma distância lateral.',
        correct: false,
      },
      {
        answer: 'Sim, mas apenas em relação aos veículos que transitam a minha frente.',
        correct: false,
      },
      {
        answer: 'Sim, em relação ao trânsito que me rodeia.',
        correct: true,
      },
    ],
  },
  {
    question: 'O condutor, ao colocar a carga num veículo, entre outros cuidados deve:',
    answers: [
      {
        answer: 'colocar a carga mais pesada na parte reservada aos passageiros.',
        correct: false,
      },
      {
        answer: 'colocar a carga mais pesada na parte superior do veículo.',
        correct: false,
      },
      {
        answer: 'Evitar que a carga possa vir a cair sobre a via.',
        correct: true,
      },
    ],
  },
  {
    question: 'Transitar com o veículo em velocidade inferior á metade da velocidade máxima estabelecida para a via, retardando ou obstruindo o trânsito, constitui contravenção:',
    answers: [
      {
        answer: 'Grave',
        correct: false,
      },
      {
        answer: 'Média',
        correct: true,
      },
      {
        answer: 'Leve',
        correct: false,
      },
    ],
  },
  {
    question: 'O agente regulador de trânsito, parado com o braço direito levantado, e a palma visível na frente, manda:',
    answers: [
      {
        answer: 'Parar o tráfego que venha da frente.',
        correct: true,
      },
      {
        answer: 'Parar o tráfego que venha da frente e da retaguarda.',
        correct: false,
      },
      {
        answer: 'Parar o tráfego que venha da retaguarda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Pode conduzir um automóvel ligeiro com reboque com a carta de condução da categoria B?',
    answers: [
      {
        answer: 'Não, e necessária a da categoria G.',
        correct: false,
      },
      {
        answer: 'Sim, desde que o peso bruto do reboque não exceda 750 kg.',
        correct: true,
      },
      {
        answer: 'Sim, desde que o peso bruto do reboque não exceda 3500 kg.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que veículos, consideram-se prioritários?',
    answers: [
      {
        answer: 'Os que transitam em missão urgente de socorro e comitivas governamentais, assinalando adequadamente a sua marcha.',
        correct: true,
      },
      {
        answer: 'As comotivas governamentais',
        correct: false,
      },
      {
        answer: 'As ambulâncias',
        correct: false,
      },
    ],
  },
  {
    question: 'Os condutores devem utilizar as luzes de presença (mínimos):',
    answers: [
      {
        answer: 'Em condições de visibilidade insuficiente, enquanto aguardam a abertura de passagem de nível.',
        correct: true,
      },
      {
        answer: 'Ao circular de dia com boa visibilidade.',
        correct: false,
      },
      {
        answer: 'Apenas durante a paragem ou estacionamento dentro das localidades.',
        correct: false,
      },
    ],
  },
  {
    question: 'Pode transpor um condutor a linha existente no eixo da via - barra central contínua?',
    answers: [
      {
        answer: 'Não. Nunca pode transpor a linha contínua no eixo da via.',
        correct: true,
      },
      {
        answer: 'Sim, para ultrapassar',
        correct: false,
      },
      {
        answer: 'Sim, para mudar de direção',
        correct: false,
      },
    ],
  },
  {
    question: 'As ordens dos agentes reguladores do trânsito, prevalecem sobre os sinais luminosos:',
    answers: [
      {
        answer: 'Vermelha',
        correct: false,
      },
      {
        answer: 'De qualquer cor',
        correct: true,
      },
      {
        answer: 'Verde',
        correct: false,
      },
      {
        answer: 'Amarela',
        correct: false,
      },
    ],
  },
  {
    question: 'Conduzir sob influência de álcool, sob efeitos de substâncias legalmente consideradas como estupefacientes ou psicotrópicas, constitui contravenção:',
    answers: [
      {
        answer: 'Leve',
        correct: false,
      },
      {
        answer: 'Média',
        correct: false,
      },
      {
        answer: 'Grave',
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
