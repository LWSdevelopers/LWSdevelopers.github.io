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
    question: 'Das seguintes, qual ou quais não fazem parte das virtudes profissionais necessárias para a boa condução de veículos automóveis',
    answers: [
      {
        answer: 'Egoismo.',
        correct: true,
      },
      {
        answer: 'Cortesia e boas maneiras.',
        correct: false,
      },
      {
        answer: 'Responsabilidade.',
        correct: false,
      },
      {
        answer: 'Honestidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao travar, o que é que pode acontecer se os travões actuarem de forma desigual sobre as rodas do mesmo eixo?',
    answers: [
      {
        answer: 'As rodas bloqueiam.',
        correct: false,
      },
      {
        answer: 'O veículo altera a sua trajetória.',
        correct: true,
      },
      {
        answer: 'Melhora a estabilidade do veículo.',
        correct: false,
      },
      {
        answer: 'A distância de paragem diminui.',
        correct: false,
      },
    ],
  },
  {
    question: 'Todos os condutores de veículos ou animais são obrigados a:',
    answers: [
      {
        answer: 'obedecer ao sinal de paragem feito pelas autoridades com competência para fiscalização do trânsito.',
        correct: true,
      },
      {
        answer: 'reduzir ou suspender intencionalmente a circulação, formando filas de trânsito desnecessárias.',
        correct: false,
      },
      {
        answer: 'abandonar os veículos nos locais de estacionamento sem motivo justificado.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nas vias públicas, os peões devem transitar:',
    answers: [
      {
        answer: 'pelos passeios, pistas ou passagens a eles destinados ou, se não existirem, pelas bermas.',
        correct: true,
      },
      {
        answer: 'pela faixa de rodagem, mesmo que existam bermas.',
        correct: false,
      },
      {
        answer: 'sempre pelas bermas, mesmo que existam pistas especiais destinadas a eles.',
        correct: false,
      },
      {
        answer: 'pelos passeios, se empurram um veiculo de tracção manual.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica a marca rodoviária amarela que ficam nos lados da estrada?',
    answers: [
      {
        answer: 'Estacionamento condicionado.',
        correct: false,
      },
      {
        answer: 'Proibição de paragem.',
        correct: false,
      },
      {
        answer: 'Proibição de estacionamento.',
        correct: true,
      },
    ],
  },
  {
    question: 'Nos veículos destinados ao transporte de passageiros ou mistos:',
    answers: [
      {
        answer: 'a carga pode ocultar a matricula e os dispositivos de sinalização e iluminação.',
        correct: false,
      },
      {
        answer: 'a carga deve estar arrumada por forma a que seja devidamente assegurado o equilíbrio do veículo.',
        correct: true,
      },
      {
        answer: 'carga pode ultrapassar os contornos do veículo.',
        correct: false,
      },
      {
        answer: 'a carga deve colocar-se na parte reservada aos passageiros, mesmo que reduza a visibilidade do condutor.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em caso de avaria, os sinais de pré-sinalização de perigo devem colocar-se por forma a ficar bem visíveis a uma distância de:',
    answers: [
      {
        answer: 'pelo menos 100 metros.',
        correct: true,
      },
      {
        answer: 'pelo menos 50 metros.',
        correct: false,
      },
      {
        answer: '10 metros',
        correct: false,
      },
      {
        answer: 'pelo menos 25 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando os amortecedores estão desgastados:',
    answers: [
      {
        answer: 'A distância de travagem aumenta perigosamente.',
        correct: true,
      },
      {
        answer: 'Reduz-se o risco de aquaplanagem.',
        correct: false,
      },
      {
        answer: 'Reduz-se a distância de paragem.',
        correct: false,
      },
      {
        answer: 'Aumenta a aderencia dos pneus.',
        correct: false,
      },
    ],
  },
  {
    question: 'Deve utilizar-se as luzes de perigo:',
    answers: [
      {
        answer: 'em caso de imobilização por acidente ou avaria, se origina perigo para os demais utentes da via.',
        correct: true,
      },
      {
        answer: 'para avisar os outros utentes que o veículo vai fazer marcha atras.',
        correct: false,
      },
      {
        answer: 'apenas quando o veículo esteja a ser rebocado.',
        correct: false,
      },
      {
        answer: 'ao estacionar em segunda fila.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para conduzir com segurança, deve moderar especialmente a velocidade:',
    answers: [
      {
        answer: 'nas curvas, lombas e outros locais de visibilidade reduzida.',
        correct: true,
      },
      {
        answer: 'nos locais assinalados com sinais de obrigação.',
        correct: false,
      },
      {
        answer: 'nos cruzamentos e entroncamentos nos que tenha prioridade de passagem.',
        correct: false,
      },
      {
        answer: 'só nas pontes, tuneis e passagens de nível.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se pretender inverter o sentido de marcha numa via cuja largura não permite fazê-lo sem prejudicar o trânsito, deve:',
    answers: [
      {
        answer: 'Fazer a manobra, mesmo que prejudique o trânsito.',
        correct: false,
      },
      {
        answer: 'Parar o veículo perto do eixo da via e esperar até que não haja tráfego.',
        correct: false,
      },
      {
        answer: 'Continuar até encontrar um local adequado onde não prejudique o trânsito.',
        correct: true,
      },
      {
        answer: 'Inverter o sentido de marcha com o menor número de manobras possíveis.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que entende-se por consciência moral?',
    answers: [
      {
        answer: 'A faculdade de permitir a passagem dos peões na mudança de direção para a esquerda.',
        correct: false,
      },
      {
        answer: 'A faculdade de a pessoa distinguir entre o bem e o mal, de julgar os seus actos e de adoptar uma determinada forma de conduta.',
        correct: true,
      },
      {
        answer: 'A capacidade de o individuo interpretar os sinais de trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que se entende por inconsciência?',
    answers: [
      {
        answer: 'O estado no qual o cérebro não esta a funcionar bem.',
        correct: true,
      },
      {
        answer: 'O aumento da frequencia das pulsações por minuto.',
        correct: false,
      },
      {
        answer: 'O estado em que o peito da vítima de acidente de viação, desce e sobe regularmente.',
        correct: false,
      },
      {
        answer: 'A perda de sangue, resultante da abertura dos vasos sanguíneos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Considera-se sob influencia de álcool, o condutor que apresente uma taxa de álcool igual ou superior a:',
    answers: [
      {
        answer: '0.3 mg/l no teste de ar expirado, ou de 0.6 mg/l em teste sanguíneo.',
        correct: true,
      },
      {
        answer: '0.6 mg/l no teste de ar expirado, ou de 0.9 mg/l em teste sanguíneo.',
        correct: false,
      },
      {
        answer: '1 mg/l no teste de ar expirado, ou de 0.3 mg/l em teste sanguíneo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Pode uma criança com idade inferior a 3 anos viajar no banco da frente do automóvel?',
    answers: [
      {
        answer: 'Sim, sempre que utilize o cinto de segurança.',
        correct: false,
      },
      {
        answer: 'Sim, utilizando um sistema de retenção virado para a retaguarda e com a almofada de ar frontal (airbag) do lado do passageiro desactivado.',
        correct: true,
      },
      {
        answer: 'Sim, quando o automóvel não tenha nenhum cinto de segurança.',
        correct: false,
      },
      {
        answer: 'Não, em nenhum caso.',
        correct: false,
      },
    ],
  },
  {
    question: 'Dentro das localidades, os tractores agrícolas não devem exceder a velocidade instantânea de:',
    answers: [
      {
        answer: '60 km/h.',
        correct: false,
      },
      {
        answer: '20 km/h.',
        correct: false,
      },
      {
        answer: '30 km/h.',
        correct: true,
      },
    ],
  },
  {
    question: 'É necessário verificar o nível do líquido de travão com frequência?',
    answers: [
      {
        answer: 'Não, porque não se desgasta com o uso.',
        correct: false,
      },
      {
        answer: 'Sim, para juntar óleo do motor em caso de necessidade.',
        correct: false,
      },
      {
        answer: 'Sim e deve ser substituído dentro do período indicado pelo fabricante.',
        correct: true,
      },
      {
        answer: 'Sim, mas não precisa de ser substituído.',
        correct: false,
      },
    ],
  },
  {
    question: 'O condutor, quando mude de direcção, tem que ceder passagem aos peões que estejam a atravessar a faixa de rodagem?',
    answers: [
      {
        answer: 'Não',
        correct: false,
      },
      {
        answer: 'Sim',
        correct: true,
      },
      {
        answer: 'Sim, mas só aos que o façam pela passagem para peões.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os automóveis pesados de passageiros, fora das localidades, não devem exceder a velocidade instantânea de:',
    answers: [
      {
        answer: '100km/h.',
        correct: true,
      },
      {
        answer: '120km/h.',
        correct: false,
      },
      {
        answer: '80km/h.',
        correct: false,
      },
      {
        answer: '140km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os automóveis classificam-se em:',
    answers: [
      {
        answer: 'Motociclos, Ciclomotores, Triciclos, Quadriciclos, ligeiros e Pesados.',
        correct: false,
      },
      {
        answer: 'Ligeiros e Pesados.',
        correct: true,
      },
      {
        answer: 'Ligeiros, Pesados e Mistos.',
        correct: false,
      },
      {
        answer: 'Ligeiros, Pesados e Motociclos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Considera-se ultrapassagem quando:',
    answers: [
      {
        answer: 'Dois veículos, circulando na mesma fila, o que se encontra atrás passa para diante do outro.',
        correct: true,
      },
      {
        answer: 'Os condutores iniciam a marcha, certificando-se de que podem fazê-lo, sem perigo de colidir com um veículo animal que transite no mesmo sentido.',
        correct: false,
      },
      {
        answer: 'Os condutores que saiam de qualquer parque de estacionamento cedem passagem aos outros utentes da via.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os condutores de velocípedes devem transitar:',
    answers: [
      {
        answer: 'O mais próximo possível das bermas ou passeios do lado esquerdo.',
        correct: true,
      },
      {
        answer: 'Só pelas pistas especiais, tendo proibido transitar pela faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'Pelos passeios.',
        correct: false,
      },
      {
        answer: 'Pela via de trânsito mais a esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que deve fazer perante um ferido que tenha uma forte hemorragia na perna?',
    answers: [
      {
        answer: 'Cobrir a ferida e levantar-lhe a perna para reduzir a hemorragia.',
        correct: true,
      },
      {
        answer: 'Deve sempre fazer um torniquete na perna lesionada.',
        correct: false,
      },
      {
        answer: 'Por pomada na ferida.',
        correct: false,
      },
    ],
  },
  {
    question: 'Podem deixar de respeitar as regras e os sinais de trânsito os condutores de veículos prioritários?',
    answers: [
      {
        answer: 'Sim, quando a sua missão o exigir, mas devem respeitar as ordens dos agentes reguladores do trânsito.',
        correct: true,
      },
      {
        answer: 'Sim, incluindo as ordens dos agentes reguladores do trânsito.',
        correct: false,
      },
      {
        answer: 'Sim, excepto a prioridade de passagem nas intersecções.',
        correct: false,
      },
      {
        answer: 'Não.',
        correct: false,
      },
    ],
  },
  {
    question: 'De que modo, o consumo de álcool altera o comportamento do condutor?',
    answers: [
      {
        answer: 'Reduz a sua agressividade na condução.',
        correct: false,
      },
      {
        answer: 'Diminui os seus erros na condução.',
        correct: false,
      },
      {
        answer: 'Aumenta a autoconfiança, e por isso aumentam os riscos.',
        correct: true,
      },
      {
        answer: 'Diminui o seu tempo de reacção.',
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
