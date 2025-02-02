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
    question: 'Para os condutores de transporte de serviço publico ou de carga perigosa, quando em exercício, a taxa de álcool deve ser de',
    answers: [
      {
        answer: '0.0 mg/l',
        correct: true,
      },
      {
        answer: '0.20 mg/l',
        correct: false,
      },
      {
        answer: '0.1 mg/l',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o comportamento correcto para ajudar em caso de acidente?',
    answers: [
      {
        answer: 'Não fazer nada ate chegarem os agentes da autoridade.',
        correct: false,
      },
      {
        answer: 'Parar o veículo sem criar perigo e proteger a zona para evitar novos acidentes.',
        correct: true,
      },
      {
        answer: 'Transportar imediatamente os feridos mais graves para o hospital mais próximo.',
        correct: false,
      },
      {
        answer: 'Tirar os feridos do veículo para verificar seu estado.',
        correct: false,
      },
    ],
  },
  {
    question: 'A condução defensiva é:',
    answers: [
      {
        answer: 'a forma ponderada como o individuo conduz um veiculo automovel, de modo a evitar acidentes.',
        correct: true,
      },
      {
        answer: 'a movimentação e imobilização de veiculos, pessoas e animais nas vias de comunicação rodoviária.',
        correct: false,
      },
      {
        answer: 'a circulação de veiculos e animais na via pública.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para combater a fadiga e o sono, o melhor remedio é:',
    answers: [
      {
        answer: 'Parar de conduzir, descansar e, se necessário, dormir um pouco.',
        correct: true,
      },
      {
        answer: 'Conduzir com o banco inclinado para trás.',
        correct: false,
      },
      {
        answer: 'Tomar uma bebida com álcool.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quais os procedimentos que o condutor deve adoptar antes de iniciar uma ultrapassagem?',
    answers: [
      {
        answer: 'Deve apenas observar o retrovisor.',
        correct: false,
      },
      {
        answer: 'Apenas deve sinalizar a sua intenção, já que as luzes indicadoras de direcção Ihe dão prioridade para realizar a manobra.',
        correct: false,
      },
      {
        answer: 'Deve certificar-se de que a pode fazer sem perigo e sinalizar a manobra aos outros condutores.',
        correct: true,
      },
    ],
  },
  {
    question: 'Conduzir um automóvel com uma parte do corpo fora do veículo, constitui:',
    answers: [
      {
        answer: 'Contravenção leve',
        correct: false,
      },
      {
        answer: 'Contravenção média',
        correct: true,
      },
      {
        answer: 'Contravenção grave',
        correct: false,
      },
    ],
  },
  {
    question: 'Como deve pisar o pedal de travão, em caso de necessidade de travagem de emergência, com um veículo que tenha ABS?',
    answers: [
      {
        answer: 'Até ao fundo, sem soltar até que o veículo pare.',
        correct: true,
      },
      {
        answer: 'Sem muita força, porque pode bloquear as rodas',
        correct: false,
      },
      {
        answer: 'Ao mesmo tempo, com o pedal do acelerador.',
        correct: false,
      },
    ],
  },
  {
    question: 'Onde é proibido fazer inversão de sentido marcha?',
    answers: [
      {
        answer: 'Nos cruzamentos ou entroncamentos de visibilidade reduzida.',
        correct: true,
      },
      {
        answer: 'Fora das localidades.',
        correct: false,
      },
      {
        answer: 'Nas rotundas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Pode favorecer o aparecimento da fadiga, ao volante:.',
    answers: [
      {
        answer: 'Conduzir por muito tempo, sem descanso.',
        correct: true,
      },
      {
        answer: 'Usar o AC.',
        correct: false,
      },
      {
        answer: 'Descansar frequentemente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como deve actuar o condutor, caso queira fazer uma curva?',
    answers: [
      {
        answer: 'Adaptar a velocidade, antes de entrar na curva.',
        correct: true,
      },
      {
        answer: 'Aumentar a velocidade antes da curva.',
        correct: false,
      },
      {
        answer: 'Reduzir a velocidade dentro da curva.',
        correct: false,
      },
    ],
  },
  {
    question: 'Numa via de dois sentidos, posso ultrapassar o veiculo que assinala a sua intenção de ultrapassar o veiculo que o precede?',
    answers: [
      {
        answer: 'Sim, pela direita.',
        correct: false,
      },
      {
        answer: 'Sim, pela esquerda.',
        correct: false,
      },
      {
        answer: 'Não!',
        correct: true,
      },
    ],
  },
  {
    question: 'O que deve fazer o condutor quando a intensidade do tráfego é grande?',
    answers: [
      {
        answer: 'Utilizar sinais sonoros.',
        correct: false,
      },
      {
        answer: 'Praticar a condução defensiva.',
        correct: true,
      },
      {
        answer: 'Aumentar a velocidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'É permitido que uma criança de 6 anos viaje no banco da frente de um automóvel?',
    answers: [
      {
        answer: 'Sim, se não tiver bancos ou cintos de segurança na retaguarda.',
        correct: true,
      },
      {
        answer: 'Sim, sempre que utilize um cinto de segurança.',
        correct: false,
      },
      {
        answer: 'Em nenhum caso.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os condutores de motociclos simples, fora das localidades, não devem exceder a velocidade instantânea de:',
    answers: [
      {
        answer: '90 km/h',
        correct: true,
      },
      {
        answer: '45 km/h',
        correct: false,
      },
      {
        answer: '120 km/h',
        correct: false,
      },
    ],
  },
  {
    question: 'Para ter mais segurança, os peões devem:',
    answers: [
      {
        answer: 'fazer o atravessamento da faixa de rodagem o mais lentamente possível.',
        correct: false,
      },
      {
        answer: 'Transitar pelo lado direito, em relação ao seu sentido de marcha, a não ser que tal comprometa a sua segurança.',
        correct: true,
      },
      {
        answer: 'Transitar sempre do lado esquerdo da faixa de rodagem, em relação ao seu sentido de marcha.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os automóveis ligeiros de passageiros e mistos com reboque, fora das localidades, não devem exceder a velocidade instantânea de:',
    answers: [
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
        correct: true,
      },
    ],
  },
  {
    question: 'Existe algum truque para conseguir eliminar o álcool do corpo do condutor, de uma forma mais rápida?',
    answers: [
      {
        answer: 'Consumir alguma substância psicotrópica.',
        correct: false,
      },
      {
        answer: 'Sim, tomar doces.',
        correct: false,
      },
      {
        answer: 'Não!',
        correct: true,
      },
    ],
  },
  {
    question: 'Nas passagem de nivel, os condutores estão obrigados a:',
    answers: [
      {
        answer: 'Aumentar a velocidade para atravessar rapidamente.',
        correct: false,
      },
      {
        answer: 'Certificar-se que a intensidade do tráfego não o obriga a imobilizar o veiculo sobre ela.',
        correct: true,
      },
      {
        answer: 'Engrenar uma velocidade mais baixa durante o atravessamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Numa situação, impossível de efectuar o cruzamento com segurança, como deve proceder o condutor?',
    answers: [
      {
        answer: 'Reduzir a velocidade ou parar, de modo a dar a passagem ao outro veiculo.',
        correct: true,
      },
      {
        answer: 'Nada, porque eu tenho a prioridade.',
        correct: false,
      },
      {
        answer: 'Utilizar sinais sonoros, para que o outro condutor pare.',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante um obstáculo imprevisto que o obriga a reduzir subitamente a velocidade, o condutor deve:',
    answers: [
      {
        answer: 'Sinalizar a situação utilizando os máximos e os médios alternadamente.',
        correct: false,
      },
      {
        answer: 'Ligar as luzes de perigo para avisar os outros utentes da via.',
        correct: true,
      },
      {
        answer: 'Ligar as luzes de presença para avisar os outros utentes da via.',
        correct: false,
      },
    ],
  },
  {
    question: 'A marca rodoviária de cor amarela (Área facilmente congestionavel), indica ou:',
    answers: [
      {
        answer: 'Reforça a regra que impede a imobilização de veículos no centro da intersecção.',
        correct: true,
      },
      {
        answer: 'Obriga todos os veículos a parar no cruzamento.',
        correct: false,
      },
      {
        answer: 'Proíbe todos os veículos a parar no cruzamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Conduzindo-se com chuva:',
    answers: [
      {
        answer: 'Deve aumentar a distância de segurança para o veículo da frente.',
        correct: true,
      },
      {
        answer: 'Aumenta a distância de reação.',
        correct: false,
      },
      {
        answer: 'A distância de travagem é menor.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao circular com velocidade excessiva:',
    answers: [
      {
        answer: 'Aumenta a probabilidade de ter um acidente.',
        correct: true,
      },
      {
        answer: 'O condutor tem um tempo de reação mais reduzido.',
        correct: false,
      },
      {
        answer: 'O consumo de combustível é menor.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica a marca rodoviária branca (sinal de pavimento triangular)?',
    answers: [
      {
        answer: 'Cedência de prioridade.',
        correct: true,
      },
      {
        answer: 'Faixa de sentido reversível.',
        correct: false,
      },
      {
        answer: 'Aproximação de passagem de nível.',
        correct: false,
      },
    ],
  },
  {
    question: 'O consumo do cannabis afecta o comportamento do condutor?',
    answers: [
      {
        answer: 'Sim, diminui a sonolência.',
        correct: false,
      },
      {
        answer: 'Não!',
        correct: false,
      },
      {
        answer: 'Sim, aumenta o tempo de reação',
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
