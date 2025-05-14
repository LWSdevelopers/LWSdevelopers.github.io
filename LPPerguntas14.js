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
    question: 'A ingestão de drogas:',
    answers: [
      {
        answer: 'Afecta o equilíbrio e a personalidade do condutor.',
        correct: true,
      },
      {
        answer: 'Só afecta a personalidade do condutor.',
        correct: false,
      },
      {
        answer: 'Se for um consumidor habitual têm pouca influência no seu acto de conduzir.',
        correct: false,
      },
    ],
  },
  {
    question: 'A distância de reacção:',
    answers: [
      {
        answer: 'É o espaço percorrido pelo veículo durante o tempo de travagem.',
        correct: false,
      },
      {
        answer: 'É o espaço percorrido pelo veículo durante o tempo de reacção do condutor.',
        correct: true,
      },
      {
        answer: 'É o espaço percorrido pelo veículo durante a travagem atá à efectiva paragem.',
        correct: false,
      },
      {
        answer: 'É o espaço percorrido pelo veiculo até que o condutor identifica um perigo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Parar ou estacionar, é proibido:',
    answers: [
      {
        answer: 'A menos de 3 m para frente e 15 m para um e outro lado dos sinais indicativos da paragem dos veículos de transporte colectivo de passageiros, consoante circulem ou não sobre carris.',
        correct: true,
      },
      {
        answer: 'A menos de 3 m para frente e 10 m para um e outro lado dos indicativos da paragem dos veículos de transporte colectivo de passageiros , consoante circulem ou não sobre carris.',
        correct: false,
      },
      {
        answer: 'A menos de 1 m para a frente e 10 m para um e outro lado dos sinais indicativo da paragem dos veículos de transporte colectivo de passageiros , consoante circulem ou não sobre carris.',
        correct: false,
      },
    ],
  },
  {
    question: 'Porque lado o trânsito de veículos ou de animais é feito:',
    answers: [
      {
        answer: 'Pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios mas a uma distância destes que permita evitar qualquer acidente.',
        correct: true,
      },
      {
        answer: 'Pela direita das faixas de rodagem e o mais próximo possível das bermas ou passeios mas a uma distância destes que permita evitar qualquer acidente.',
        correct: false,
      },
      {
        answer: 'Pela esquerda das faixas de rodagem e o mais longe possível das bermas ou passeios mas a uma distância destes que permita evitar qualquer acidente.',
        correct: false,
      },
    ],
  },
  {
    question: 'A recolha de informação é afectada pela condução nocturna. Assim, de noite devo:',
    answers: [
      {
        answer: 'Circular muito devagar.',
        correct: false,
      },
      {
        answer: 'Manter a mesma velocidade.',
        correct: false,
      },
      {
        answer: 'Moderar a velocidade.',
        correct: true,
      },
      {
        answer: 'Aumentar um pouco a velocidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'A definição de faixa de rodagem é:',
    answers: [
      {
        answer: 'Parte da via pública com três sentidos.',
        correct: false,
      },
      {
        answer: 'Parte da via pública especialmente destinada ao trânsito de veículos.',
        correct: true,
      },
      {
        answer: 'Toda a via pública especialmente destinada ao trânsito de veículos.',
        correct: false,
      },
      {
        answer: 'Parte da via pública especialmente destinada ao trânsito de peões.',
        correct: false,
      },
    ],
  },
  {
    question: 'A aquaplanagem (hidroplanagem) pode ocorrer:',
    answers: [
      {
        answer: 'Se eu não adaptar a velocidade as condições do piso.',
        correct: true,
      },
      {
        answer: 'Apenas com pneus lisos.',
        correct: false,
      },
      {
        answer: 'Em todas as condições ambientais adversas a condução.',
        correct: false,
      },
      {
        answer: 'Somente quando está chover intensamente.',
        correct: false,
      },
    ],
  },
  {
    question: 'O comportamento dos peões deve despertar a nossa atenção?',
    answers: [
      {
        answer: 'Sim, sempre e em todas situações.',
        correct: true,
      },
      {
        answer: 'Sim, apenas em circulação urbana.',
        correct: false,
      },
      {
        answer: 'Não, quem deve prestar atenção aos veículos são os peões.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual pode se a consequência da fadiga na condução?',
    answers: [
      {
        answer: 'Diminuição da vigilância em relação ao meio envolvente.',
        correct: true,
      },
      {
        answer: 'Diminuição da distância de paragem.',
        correct: false,
      },
      {
        answer: 'Maior rapidez dos reflexos.',
        correct: false,
      },
      {
        answer: 'Diminuição do tempo de reacção.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quem exceder de 30 Km/h a 60 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, fora das localidades é punido:',
    answers: [
      {
        answer: 'Com multa de 2.000,00 Mt e contravenção média.',
        correct: true,
      },
      {
        answer: 'Com multa de 2.000,00 Mt e contravenção leve.',
        correct: false,
      },
      {
        answer: 'Com multa de 2.000,00 Mt e contravenção grave.',
        correct: false,
      },
      {
        answer: 'Com multa de 3.000,00 Mt e contravenção média.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para ter a posição mais correcta, o condutor deve ter em conta:',
    answers: [
      {
        answer: 'O tipo de via onde transita e as condições adversas.',
        correct: false,
      },
      {
        answer: 'O ajuste do cinto de segurança e a fácil regulação dos espelhos retrovisores.',
        correct: false,
      },
      {
        answer: 'A morfologia física, a utilização eficaz dos controlos e comandos e a segurança e o conforto do condutor.',
        correct: true,
      },
    ],
  },
  {
    question: 'O estado de alerta do condutor, é influenciado pela fadiga, afetando a forma como:',
    answers: [
      {
        answer: 'O veículo se comporta no ambiente rodoviário.',
        correct: false,
      },
      {
        answer: 'O condutor recolhe as informações relevantes do ambiente rodoviário.',
        correct: true,
      },
      {
        answer: 'O condutor realiza a manobra de ultrapassagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que é força centrípeta?',
    answers: [
      {
        answer: 'Ė de sentido contrário ao da força centrifuga.',
        correct: true,
      },
      {
        answer: 'Só ocorre nos veículos pesados.',
        correct: false,
      },
      {
        answer: 'Ė igual  á força centrifuga.',
        correct: false,
      },
      {
        answer: 'Só ocorre quando o veículo vai em linha recta.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como é punida a colocação de obstáculos que possam impedir ou embaraçar o trânsito e comprometer a segurança e comodidade dos utentes da via?',
    answers: [
      {
        answer: 'Multa de 1. 000.00 Mt.',
        correct: true,
      },
      {
        answer: 'Multa de 3.000.00 Mt.',
        correct: false,
      },
      {
        answer: 'Multa de 500.00 Mt.',
        correct: false,
      },
      {
        answer: 'Multa 2.000.00 Mt.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):',
    answers: [
      {
        answer: 'Automóveis ligeiros de passageiros e mistos com reboque dentro das localidades 60, fora das localidades 80.',
        correct: false,
      },
      {
        answer: 'Automóveis ligeiros de passageiros e mistos com reboque dentro das localidades 60, fora das localidades 100.',
        correct: true,
      },
      {
        answer: 'Automóveis ligeiros de passageiros e mistos com reboque dentro das localidades 50, fora das localidades 90.',
        correct: false,
      },
    ],
  },
  {
    question: 'O condutor determina qual é a resposta motora a executar, em que processo da tarefa da condução.',
    answers: [
      {
        answer: 'Antecipação.',
        correct: false,
      },
      {
        answer: 'Recolha.',
        correct: false,
      },
      {
        answer: 'Decisão',
        correct: true,
      },
      {
        answer: 'Previsão.',
        correct: false,
      },
    ],
  },
  {
    question: 'O calor excessivo é prejudicial:',
    answers: [
      {
        answer: 'Para o veículo mas não para o condutor.',
        correct: false,
      },
      {
        answer: 'Para o condutor mas não para o veículo.',
        correct: false,
      },
      {
        answer: 'Não afecta a condução.',
        correct: false,
      },
      {
        answer: 'Para o condutor e também para o veículo.',
        correct: true,
      },
    ],
  },
  {
    question: 'Entende-se por tarefa de condução aquela que tem como principal objectivo:',
    answers: [
      {
        answer: 'O controlo do trânsito e dos sinais dos outros condutores.',
        correct: false,
      },
      {
        answer: 'O controlo de um veículo e do espaço envolvente.',
        correct: true,
      },
      {
        answer: 'O autocontrolo no trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como devo actuar perante a diminuição da aderência, que provoca o aumento da distância de travagem?',
    answers: [
      {
        answer: 'Diminuir a velocidade.',
        correct: true,
      },
      {
        answer: 'Aumentar a velocidade.',
        correct: false,
      },
      {
        answer: 'Manter a velocidade.',
        correct: false,
      },
      {
        answer: 'A diminuição da aderência diminui a distância de travagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em caso de nevoeiro (cacimba) os 4 piscas ou luzes de emergência só devem ser utilizados:',
    answers: [
      {
        answer: 'Quando o veículo circular a uma velocidade moderada.',
        correct: false,
      },
      {
        answer: 'Se o veículo estiver imobilizado, a circular a velocidades muito baixas ou quando fizer uma travagem forte e repentina.',
        correct: true,
      },
      {
        answer: 'Devem ser usadas sempre.',
        correct: false,
      },
      {
        answer: 'Sempre que mudar de direcção ou iniciar uma ultrapassagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'A definição de inversão do sentido da marcha é:',
    answers: [
      {
        answer: 'Manobra através da qual o condutor coloca o veículo em sentido oposto, na mesma direcção.',
        correct: true,
      },
      {
        answer: 'Manobra através da qual o condutor coloca o veículo no mesmo sentido e na mesma direcção.',
        correct: false,
      },
      {
        answer: 'Manobra através da qual o condutor coloca o veículo no mesmo sentido.',
        correct: false,
      },
      {
        answer: 'Manobra através da qual o condutor coloca o veículo no mesmo sentido, em direcção oposta.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como deve colocar os sinais de pré-sinalização de perigo, se o veículo avariado fica imobilizado num local onde não é visível a 100 metros de distância?',
    answers: [
      {
        answer: 'A frente e à retaguarda do veículo, a uma distância não inferior a 30 metros.',
        correct: true,
      },
      {
        answer: 'A frente e à retaguarda do veículo, a uma distância de 10 metros.',
        correct: false,
      },
      {
        answer: 'Não e necessário colocá-los nesta situação.',
        correct: false,
      },
    ],
  },
  {
    question: 'Depois de ter tomado bebidas alcoólicas, o processo de absorção começa:',
    answers: [
      {
        answer: 'Imediatamente.',
        correct: true,
      },
      {
        answer: 'Trinta minutos depois.',
        correct: false,
      },
      {
        answer: 'Duas horas depois.',
        correct: false,
      },
      {
        answer: 'Depois de 24h',
        correct: false,
      },
    ],
  },
  {
    question: 'Parar ou estacionar, é proibido:',
    answers: [
      {
        answer: 'Na faixa de rodagem sempre que esteja sinalizada com linha longitudinal contínua e a distância entre esta e o veiculo seja inferior a 3 metros.',
        correct: true,
      },
      {
        answer: 'Na faixa de rodagem sempre que esteja sinalizada com linha longitudinal contínua e a distância entre esta e o veículo seja inferior a 5 metros.',
        correct: false,
      },
      {
        answer: 'Na faixa de rodagem sempre que esteja sinalizada com linha longitudinal contínua e a distância entre esta e o veículo seja inferior a 2 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'As ordens dos agentes reguladores do trânsito',
    answers: [
      {
        answer: 'Só prevalecem sobre as prescrições resultantes dos sinais quando exista sinalização vertical.',
        correct: false,
      },
      {
        answer: 'Não prevalecem sobre as prescrições resultantes dos sinais e sobre as regras de trânsito.',
        correct: false,
      },
      {
        answer: 'Prevalecem sobre as prescrições resultantes dos sinais e sobre as regras de trânsito',
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
