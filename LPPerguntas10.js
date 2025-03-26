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
    question: 'Sempre que saia de um caminho particular, o condutor deve:',
    answers: [
      {
        answer: 'Ceder a passagem a todos e quaisquer veículos.',
        correct: true,
      },
      {
        answer: 'Ceder a passagem apenas aos veículos a motor.',
        correct: false,
      },
      {
        answer: 'Avançar porque tem prioridade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Pode afectar a segurança rodoviária o facto de estacionar fora dos locais apropriados?',
    answers: [
      {
        answer: 'Não, porque os outros veículos estão imobilizados.',
        correct: false,
      },
      {
        answer: 'Sim, quando obriga os peões a usarem a faixa de rodagem.',
        correct: true,
      },
      {
        answer: 'Sim, e por isso que deve estacionar em cima dos passeios.',
        correct: false,
      },
      {
        answer: 'Não, desde que se mantenham vias descongestionadas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos túneis, que luzes devem utilizar os veículos?',
    answers: [
      {
        answer: 'De cruzamento, se existe a possibilidade de encandear os condutores que circulem em sentido contrario.',
        correct: true,
      },
      {
        answer: 'De presenca.',
        correct: false,
      },
      {
        answer: 'De estrada, se existe a possibilidade de encandear os condutores que circulem em sentido contrario.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como deve ser feita a carga e descarga de um veículo na via publica?',
    answers: [
      {
        answer: 'Pela retaguarda ou pelo lado da faixa de rodagem junto da qual o veículo esteja parado ou estacionado.',
        correct: true,
      },
      {
        answer: 'Sempre pela retaguarda.',
        correct: false,
      },
      {
        answer: 'Sempre pela direita.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os efeitos do álcool, quando alcançam o seu nivel mais alto?',
    answers: [
      {
        answer: 'Imediatamente depois de ter tomado o último copo.',
        correct: false,
      },
      {
        answer: 'Duas horas depois de ter tomado o último copo.',
        correct: false,
      },
      {
        answer: 'Entre 30 a 90 minutes depois do consumo de álcool.',
        correct: true,
      },
      {
        answer: 'Quatro horas depois de ter tomado o último copo.',
        correct: true,
      },
    ],
  },
  {
    question: 'É permitido levar um bebe nos braços quando o veículo esta em circulação?',
    answers: [
      {
        answer: 'Sim, se a viagem é curta.',
        correct: false,
      },
      {
        answer: 'Não, deve sempre usar um dispositivo adequado ao tamanho e ao peso do bebé.',
        correct: true,
      },
      {
        answer: 'Sim, sempre que a velocidade seja muito reduzida.',
        correct: false,
      },
      {
        answer: 'Sim, mas apenas nos assentos traseiros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para praticar uma condução defensiva, o condutor deve:',
    answers: [
      {
        answer: 'Estar especialmente atento a ocorrência de situações inesperadas.',
        correct: true,
      },
      {
        answer: 'Utilizar sinais sonoros durante a noite, dentro das localidades',
        correct: false,
      },
      {
        answer: 'Seguir a velocidade elevada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como proceder, se observar pelo espelho retrovisor a aproximação de um veículo prioritário, assinalando  adequadamente a sua marcha de urgência?',
    answers: [
      {
        answer: 'Chegar-se o mais possível para a esquerda podendo, se necessário, utilizar a berma.',
        correct: true,
      },
      {
        answer: 'Acelerar para não prejudicar a sua marcha.',
        correct: false,
      },
      {
        answer: 'Chegar-se o mais possível para o lado direito da faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'Deixar livre uma passagem do lado esquerdo da faixa de rodagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Depois de ingerir álcool, o condutor fica:',
    answers: [
      {
        answer: 'com menos capacidade de conduzir de forma responsável.',
        correct: true,
      },
      {
        answer: 'com mais atenção na tarefa da condução.',
        correct: false,
      },
      {
        answer: 'com melhor apreciação das distancias e das velocidades.',
        correct: false,
      },
      {
        answer: 'com capacidade de condução mais apurada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os condutores de motociclos, dentro das localidades, não devem exceder a velocidade  instantânea de:',
    answers: [
      {
        answer: '50 km/h.',
        correct: true,
      },
      {
        answer: '30 km/h.',
        correct: false,
      },
      {
        answer: '40 km/h.',
        correct: false,
      },
      {
        answer: '90 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como o álcool afecta tarefa de conduzir?',
    answers: [
      {
        answer: 'Melhora a apreciação das velocidades.',
        correct: false,
      },
      {
        answer: 'Melhora a apreciação das distâncias.',
        correct: false,
      },
      {
        answer: 'Reduz o campo de visão do condutor.',
        correct: true,
      },
      {
        answer: 'Aumenta a atenção do condutor, assim que as distrações são reduzidas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um círculo amarelo cortado, no pavimento, com desenho de um motociclista ao centro, significa:',
    answers: [
      {
        answer: 'Trânsito proibido a ciclomotores.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a motociclos.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a velocipedes.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao ligar as luzes, se no painel aparecer o símbolo do farol, com a cor azul, indica que:',
    answers: [
      {
        answer: 'Estão ligadas as luzes de estrada (máximos).',
        correct: true,
      },
      {
        answer: 'Estão ligadas as luzes de cruzamento (médios).',
        correct: false,
      },
      {
        answer: 'Estão ligadas as luzes de presença.',
        correct: false,
      },
    ],
  },
  {
    question: 'É sempre proibido inverter o sentido de marcha nos túneis?',
    answers: [
      {
        answer: 'Sim, em todos os túneis.',
        correct: true,
      },
      {
        answer: 'Sim, quando a visibilidade for reduzida.',
        correct: false,
      },
      {
        answer: 'Sim, se o túnel for de um só sentido.',
        correct: false,
      },
    ],
  },
  {
    question: 'Pode ter consequências num acidente o facto de não levar o cinto de segurança bem colocado?',
    answers: [
      {
        answer: 'Não, se o veiculo estiver equipado com airbag.',
        correct: false,
      },
      {
        answer: 'Sim, porque pode provocar ferimentos graves.',
        correct: true,
      },
      {
        answer: 'Não, o cinto e sempre eficaz.',
        correct: false,
      },
      {
        answer: 'Sim, por isso o seu uso não e obrigatório.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que deve fazer se perceber que o seu veículo vai ser ultrapassado?',
    answers: [
      {
        answer: 'Impedir que seja realizada a manobra, aumentando a velocidade.',
        correct: false,
      },
      {
        answer: 'Facilitar a ultrapassagem desviando-se para a direita e não aumentando a velocidade.',
        correct: false,
      },
      {
        answer: 'Afastar-se o mais possível para a esquerda e não aumentar a velocidade, enquanto não for ultrapassado.',
        correct: true,
      },
      {
        answer: 'Não mudar a sua posição na faixa de rodagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando a aderência do veículo ao piso é menor, a distância de travagem aumenta logo, deve-se:',
    answers: [
      {
        answer: 'Reduzir a distância de segurança.',
        correct: false,
      },
      {
        answer: 'Aumentar a velocidade.',
        correct: false,
      },
      {
        answer: 'Diminuir a velocidade.',
        correct: true,
      },
      {
        answer: 'Manter a velocidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'O tempo que passa desde que o condutor observa um perigo até que actue sobre os comandos do veículo:',
    answers: [
      {
        answer: 'não varia na mesma pessoa.',
        correct: false,
      },
      {
        answer: 'pode aumentar, dependendo do seu estado físico e psicológico.',
        correct: true,
      },
      {
        answer: 'é chamado tempo de paragem.',
        correct: false,
      },
      {
        answer: 'é igual em todas as pessoas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Pode influenciar na eficácia do cinto de segurança a posição do assento?',
    answers: [
      {
        answer: 'Sim, não é recomendado inclinar o assento muito para trás.',
        correct: true,
      },
      {
        answer: 'Não',
        correct: false,
      },
      {
        answer: 'Não, se o veículo estiver equipado com outros sistemas de segurança passiva.',
        correct: false,
      },
      {
        answer: 'Sim, perde a eficácia quando o encosto do banco esta quase vertical.',
        correct: false,
      },
    ],
  },
  {
    question: 'A regulamentação do trânsito no interior das localidades compete:',
    answers: [
      {
        answer: 'às Delegações Provinciais do instituto de transportes terrestres.',
        correct: false,
      },
      {
        answer: 'aos Corpos Administrativos ou aos Conselhos Municipais.',
        correct: true,
      },
      {
        answer: 'à Policia de Trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como deve colocar os sinais de pré-sinalização de perigo, se o veiculo avariado fica imobilizado num local onde não é visível a 100 metros de distância?',
    answers: [
      {
        answer: 'À frente e a retaguarda do veiculo, a uma distância não inferior a 30 metros.", "À frente e a retaguarda do veículo, a uma distância de 10 metros.',
        correct: true,
      },
      {
        answer: 'Não é necessário coloca-los nesta situação.',
        correct: false,
      },
      {
        answer: 'Só um pela retaguarda do veículo a uma distância de 50 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os peões podem transitar pela faixa de rodagem nesta estrada?',
    answers: [
      {
        answer: 'Sim, com prudência e por forma a não prejudicar o trânsito de veículos.',
        correct: true,
      },
      {
        answer: 'Sim e devem fazê-lo pela esquerda da faixa de rodagem, em relação ao seu sentido de marcha.',
        correct: false,
      },
      {
        answer: 'Não, nesta estrada não podem transitar, já que não tem bermas.',
        correct: false,
      },
      {
        answer: 'Sim, mais só quando necessitem atravessar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Transita corretamente um peão, o colo visível, que caminha do lado esquerdo da faixa de rodagem?',
    answers: [
      {
        answer: 'Não, porque deve transitar pelo lado direito, em relação ao seu sentido de marcha.',
        correct: true,
      },
      {
        answer: 'Não, já que e proibido transitar pela berma.',
        correct: false,
      },
      {
        answer: 'Sim',
        correct: false,
      },
    ],
  },
  {
    question: 'As setas luminosos, são sinais importantes?',
    answers: [
      {
        answer: 'Sim',
        correct: true,
      },
      {
        answer: 'Sim, só nas portagens',
        correct: false,
      },
      {
        answer: 'Não, são raras',
        correct: false,
      },
    ],
  },
  {
    question: 'Durante as viagens, é aconselhavel parar e descansar?',
    answers: [
      {
        answer: 'Não, porque alonga o tempo da viagem e aumenta a fadiga.',
        correct: false,
      },
      {
        answer: 'Sim, 20 ou 30 minutos a cada 8 horas.',
        correct: false,
      },
      {
        answer: 'Sim, 20 ou 30 minutos a cada 2 horas.',
        correct: true,
      },
      {
        answer: 'Não, se a viagem for durante a noite.',
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
