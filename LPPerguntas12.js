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
    question: 'O condutor, pode fazer a verificação do nível do óleo no motor do veículo?',
    answers: [
      {
        answer: 'Sim, desde que saiba a forma correcta de verificação.',
        correct: true,
      },
      {
        answer: 'Sim, desde que mantenha o motor do veiculo a trabalhar.',
        correct: false,
      },
      {
        answer: 'Não, apenas técnicos especializados o podem fazer.',
        correct: false,
      },
    ],
  },
  {
    question: 'Uma criança de 8 anos, como deve viajar num automóvel equipado com cintos de segurança em todos os lugares?',
    answers: [
      {
        answer: 'E indiferente, sempre que utilize um sistema de retenção homologado e adaptado ao seu tamanho e peso.',
        correct: false,
      },
      {
        answer: 'No banco da retaguarda, com um sistema de retenção homologado e adaptado ao seu tamanho e peso.',
        correct: true,
      },
      {
        answer: 'No banco da frente, com um sistema de retenção homologado e adaptado ao seu tamanho e peso.',
        correct: false,
      },
      {
        answer: 'Basta utilizar o cinto de segurança do banco da retaguarda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Uma mulher gravida, é obrigada a usar o cinto de segurança?',
    answers: [
      {
        answer: 'Sim e é muito importante que esteja bem colocado porque senão, tanto ela como a criança, podem sofrer lesões graves em caso de acidente.',
        correct: true,
      },
      {
        answer: 'Não, porque é prejudicial para a criança.',
        correct: false,
      },
      {
        answer: 'Não é obrigatório, mas é aconselhável.',
        correct: false,
      },
      {
        answer: 'Sim, mas apenas fora das cidades.',
        correct: false,
      },
    ],
  },
  {
    question: 'Deixar de indicar com antecedência, mediante gesto regulamentar de braço ou luz indicadora de direcção do veículo, o início da marcha, a realização da manobra de parar o veículo, a mudança de direcção ou de faixa de circulação, constitui contravenção:',
    answers: [
      {
        answer: 'Média',
        correct: true,
      },
      {
        answer: 'Leve',
        correct: false,
      },
      {
        answer: 'Grave',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual e a velocidade instantânea que não deve exceder os automóveis ligeiros de passageiros e mistos dentro das localidades?',
    answers: [
      {
        answer: '80 km/h',
        correct: false,
      },
      {
        answer: '50 km/h, se tem reboque.',
        correct: false,
      },
      {
        answer: '60 km/h',
        correct: true,
      },
      {
        answer: '40 km/h',
        correct: false,
      },
    ],
  },
  {
    question: 'O sono pode provocar um accidente durante o dia?',
    answers: [
      {
        answer: 'Sim, mas só se conduz sob a influência de álcool.',
        correct: false,
      },
      {
        answer: 'Sim, os acidentes motivados pelo sono também acontecem durante o dia.',
        correct: true,
      },
      {
        answer: 'Não, esse tipo de acidentes só acontecem a noite.',
        correct: false,
      },
      {
        answer: 'Sim, mas apenas durante as primeiras horas da manhã.',
        correct: false,
      },
    ],
  },
  {
    question: 'Das seguintes, indique qual é a afirmações verdadeiras:',
    answers: [
      {
        answer: 'O instituto nacional de transportes terrestres, é o orgão que coordena e fiscaliza o funcionamento das escolas de condução.',
        correct: true,
      },
      {
        answer: 'A cobrança de multas por infracção ao Código da Estrada, e feita só na repartição do agente autuante.',
        correct: false,
      },
      {
        answer: 'Os condutores que abandonam voluntariamente as pessoas vítimas de acidentes de viação que tenham causado, permanecem impunes.',
        correct: false,
      },
      {
        answer: 'A condução em estado de embriagues, é permitida.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ė proibido ultrapassar:',
    answers: [
      {
        answer: 'Imediatamente antes e nas passagens para peões.',
        correct: true,
      },
      {
        answer: 'Nas estradas que só tenham uma via de trânsito para cada sentido.',
        correct: false,
      },
      {
        answer: 'Depois dos cruzamentos.',
        correct: false,
      },
      {
        answer: 'Em todas as curvas.',
        correct: false,
      },
    ],
  },
  {
    question: 'O feixe luminoso emitido pelas luzes de cruzamento (médios), deve projectar-se no solo',
    answers: [
      {
        answer: 'E iluminá-lo eficazmente, numa distância não superior a 30 metros.',
        correct: true,
      },
      {
        answer: 'E no mínimo, iluminá-lo a 100 metros.',
        correct: false,
      },
      {
        answer: 'E iluminá-lo eficazmente, numa distância não superior a 50 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Numa curva de visibilidade reduzida, pode ultrapassar o veículo que circula a sua frente?',
    answers: [
      {
        answer: 'Não, se para o fazer tiver que pisar ou transpor a linha continua.',
        correct: true,
      },
      {
        answer: 'Sim; utilizando os dispositivos luminosos ou sonoros.',
        correct: false,
      },
      {
        answer: 'Sim, já que o condutor deve encostar o seu veiculo para deixar-me passar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Conduzir em condições atmosféricas adversas:',
    answers: [
      {
        answer: 'Reduz a fadiga.',
        correct: false,
      },
      {
        answer: 'Afecta a taxa de alcoolemia',
        correct: false,
      },
      {
        answer: 'Afecta a distância de travagem.',
        correct: true,
      },
    ],
  },
  {
    question: 'O documento que titula a habilitação para conduzir automóveis, motociclos, triciclos e quadriciclos, designa-se por:',
    answers: [
      {
        answer: 'Licença de condução.',
        correct: false,
      },
      {
        answer: 'Carta de condução.',
        correct: true,
      },
      {
        answer: 'Livrete de condução.',
        correct: false,
      },
      {
        answer: 'Licença especial de condução.',
        correct: false,
      },
    ],
  },
  {
    question: 'Numa subida, com barra central contínuo, pode inverter o sentido de marcha?',
    answers: [
      {
        answer: 'Não, já que existe uma lomba de visibilidade reduzida.',
        correct: true,
      },
      {
        answer: 'Sim, só é proibido fazê-lo nas curvas de visibilidade reduzida.',
        correct: false,
      },
      {
        answer: 'Sim, porque não existe sinalização que o proíba.',
        correct: false,
      },
      {
        answer: 'Sim.',
        correct: false,
      },
    ],
  },
  {
    question: 'Numa curva de visibilidade, reduzida pode ultrapassar?',
    answers: [
      {
        answer: 'Não',
        correct: true,
      },
      {
        answer: 'Sim, depois de sinalizá-lo.',
        correct: false,
      },
      {
        answer: 'Sim; utilizando os sinais sonoros',
        correct: false,
      },
    ],
  },
  {
    question: 'Se pretender inverter o sentido de marcha, deve ter em conta:',
    answers: [
      {
        answer: 'Que é proibido fazê-lo em todos os cruzamentos e entroncamentos.',
        correct: false,
      },
      {
        answer: 'Que só é permitido fazê-lo nas rotundas.',
        correct: false,
      },
      {
        answer: 'Que a manobra deve ser feita em local e de forma a não prejudicar o trânsito.',
        correct: true,
      },
      {
        answer: 'Que é proibido fazê-lo dentro das localidades .',
        correct: false,
      },
    ],
  },
  {
    question: 'Para a iluminação da via, os condutores devem ligar as luzes:',
    answers: [
      {
        answer: 'Mínimas ou médias.',
        correct: false,
      },
      {
        answer: 'Mínimas ou máximas.',
        correct: false,
      },
      {
        answer: 'Médias ou máximas.',
        correct: true,
      },
    ],
  },
  {
    question: 'Para praticar uma condução segura, o condutor deve:',
    answers: [
      {
        answer: 'Preocupar-se em ser o mais rápido.',
        correct: false,
      },
      {
        answer: 'Ter em atenção apenas a sinalização existente.',
        correct: false,
      },
      {
        answer: 'Avaliar constantemente tudo que me rodeia.',
        correct: true,
      },
    ],
  },
  {
    question: 'Os automóveis ligeiros de passageiros, devem estar equipados com sinais de pré-sinalização de perigo?',
    answers: [
      {
        answer: 'Sim, um colete reflector e um triângulo de pré-sinalização de perigo.',
        correct: false,
      },
      {
        answer: 'Sim, dois triângulos de pré-sinalização de perigo e um colete reflector.',
        correct: true,
      },
      {
        answer: 'Sim, apenas são obrigatórios dois triângulos de pré-sinalização de perigo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um torniquete é:',
    answers: [
      {
        answer: 'Uma tira larga de pano, amarrada firmemente em torno de um membro.',
        correct: true,
      },
      {
        answer: 'Um pedaço de pau curto amarrado em torno de um membro.',
        correct: false,
      },
      {
        answer: 'Um pedaço de papel onde se menciona a parte do corpo que foi amarrada.',
        correct: false,
      },
      {
        answer: 'Uma pega de madeira, utilizada para aliviar a dor da vítima de acidente.',
        correct: false,
      },
    ],
  },
  {
    question: 'É aconselhável viajar a noite para evitar a fadiga?',
    answers: [
      {
        answer: 'Sim, viajar durante a noite é sempre mais seguro.',
        correct: false,
      },
      {
        answer: 'Não, porque o sono aparece mais facilmente.',
        correct: true,
      },
      {
        answer: 'Sim, se a viagem é longa.',
        correct: false,
      },
      {
        answer: 'Sim, porque há menos tráfego.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que devem fazer os condutores se o sinal luminoso de uma intersecção esta avariado?',
    answers: [
      {
        answer: 'Ceder a passagem aos condutores que se apresentem pela direita.',
        correct: true,
      },
      {
        answer: 'Ceder a passagem a todos os condutores que se apresentem pela via transversal.',
        correct: false,
      },
      {
        answer: 'Continuar a marcha, já que tenho prioridade de passagem.',
        correct: false,
      },
      {
        answer: 'Ceder a passagem aos condutores que se apresentem pela esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quais são os princípios gerais do socorrismo?',
    answers: [
      {
        answer: 'Prevenir, alertar e socorrer.',
        correct: true,
      },
      {
        answer: 'Prevenir, socorrer e evacuar.',
        correct: false,
      },
      {
        answer: 'Prevenir, observar e socorrer.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos veículos de mercadorias, a carga deve ser disposta de modo a que:',
    answers: [
      {
        answer: 'Seja assegurado o equilíbrio do veículo, parado ou em movimento.',
        correct: true,
      },
      {
        answer: 'Fique livre o maior espaço possível a retaguarda da caixa de carga.',
        correct: false,
      },
      {
        answer: 'O principal peso fique sobre o eixo da retaguarda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a principal causa de acidentes rodoviários?',
    answers: [
      {
        answer: 'O Homem.',
        correct: true,
      },
      {
        answer: 'A via.',
        correct: false,
      },
      {
        answer: 'O veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Dentro das localidades, em vias com mais de uma via de trânsito no mesmo sentido, o condutor deve utilizar:',
    answers: [
      {
        answer: 'A via de trânsito mais a direita.',
        correct: false,
      },
      {
        answer: 'A via de trânsito da esquerda, podendo mudar para a da direita sempre que lhe apeteça.',
        correct: false,
      },
      {
        answer: 'A via de trânsito mais conveniente ao seu destino.',
        correct: true,
      },
      {
        answer: 'a via de trânsito mais a esquerda, podendo utilizar outra só para ultrapassar ou mudar de direcção.',
        correct: false,
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
