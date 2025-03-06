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
    question: 'Os elementos que constituem a suspensão são:',
    answers: [
      {
        answer: 'Os pneumáticos, as molas e os amortecedores.',
        correct: true,
      },
      {
        answer: 'Os pneumáticos, os amortecedores e as barras de direção.',
        correct: false,
      },
      {
        answer: 'Os pneumáticos, as barras de torção e os planetários.',
        correct: false,
      },
    ],
  },
  {
    question: 'No sistema elétrico de um automóvel, qual o orgão que fornece corrente elétrica de alta tensão?',
    answers: [
      {
        answer: 'O alternador.',
        correct: false,
      },
      {
        answer: 'A bobine.',
        correct: true,
      },
      {
        answer: 'A bateria.',
        correct: false,
      },
      {
        answer: 'O motor de arranque.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando em piso molhado e sem travar o veículo entra em derrapagem, a causa pode ser:',
    answers: [
      {
        answer: 'Pneus gastos.',
        correct: true,
      },
      {
        answer: 'Ar no sistema de travagem hidráulico.',
        correct: false,
      },
      {
        answer: 'Molas e amortecedores rijos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Uma carga muito pesada e pouco volumosa colocada muito à frente da caixa de carga:',
    answers: [
      {
        answer: 'Aumenta excessivamente o peso incidente sobre as rodas diretrizes, tornando difícil o manejo da direção.',
        correct: true,
      },
      {
        answer: 'Aumenta excessivamente o peso incidente sobre as rodas traseiras, sobrecarregando o diferencial.',
        correct: false,
      },
      {
        answer: 'Pode provocar o arrebentamento das rodas de trás.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos motores diesel , o que provoca a combustão quando o gasóleo é injetado nos cilindros?',
    answers: [
      {
        answer: 'A bobine.',
        correct: false,
      },
      {
        answer: 'A faísca que salta das velas.',
        correct: false,
      },
      {
        answer: 'A alta temperatura do ar na câmara de combustão.',
        correct: true,
      },
    ],
  },
  {
    question: 'O filtro de combustível tem como função:',
    answers: [
      {
        answer: 'Facilitar a circulação do combustível.',
        correct: false,
      },
      {
        answer: 'Reter as partículas de pó e sujidade existentes no combustível.',
        correct: true,
      },
      {
        answer: 'Filtrar o ar que passa para os cilindros.',
        correct: false,
      },
      {
        answer: 'Proteger o sistema de lubrificação do motor.',
        correct: false,
      },
    ],
  },
  {
    question: 'Periodicamente o nível do óleo no cárter do motor é verificado:',
    answers: [
      {
        answer: 'Por meio de uma vareta com dois traços, existente num dos flancos (lados) do motor.',
        correct: true,
      },
      {
        answer: 'Por meio de um manómetro, existente na cabeça do motor.',
        correct: false,
      },
      {
        answer: 'Por meio de uma vareta com dois traços, existente no depósito de expansão.',
        correct: false,
      },
      {
        answer: 'Por meio de um termómetro, existente no radiador.',
        correct: false,
      },
    ],
  },
  {
    question: 'O dispositivo catalisador intercalado no tubo de escape tem por finalidade:',
    answers: [
      {
        answer: 'Reduzir ao mínimo as emissões poluentes que o motor expulsa.',
        correct: true,
      },
      {
        answer: 'Garantir o arrefecimento do sistema de escape.',
        correct: false,
      },
      {
        answer: 'Reduzir ao mínimo a poluição sonora.',
        correct: false,
      },
      {
        answer: 'Aumentar a velocidade de saída dos gases de escape.',
        correct: false,
      },
    ],
  },
  {
    question: 'O condutor não deve iniciar a marcha do veículo:',
    answers: [
      {
        answer: 'Se a pressão do ar dos travões for insuficiente.',
        correct: true,
      },
      {
        answer: 'Sem accionar repetidas vezes o pedal de travão.',
        correct: false,
      },
      {
        answer: 'Se a temperatura do motor não for suficiente.',
        correct: false,
      },
      {
        answer: 'Sem accionar repetidas vezes o pedal do acelerador.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando existe dificuldade em pôr o motor a trabalhar, pode-se insistir com o motor de arranque?',
    answers: [
      {
        answer: 'A insistência excessiva causa danos na bateria.',
        correct: true,
      },
      {
        answer: 'Sim, desde que a bateria tenha líquido suficiente.',
        correct: false,
      },
      {
        answer: 'Sempre até que o motor comece a trabalhar.',
        correct: false,
      },
      {
        answer: 'Sim, desde que o motor esteja quente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que efeito produzem os amortecedores descarregados?',
    answers: [
      {
        answer: 'O veículo ganha maior estabilidade.',
        correct: false,
      },
      {
        answer: 'Torna-se difícil movimentar a direcção.',
        correct: false,
      },
      {
        answer: 'As molas oscilam demasiadamente.',
        correct: true,
      },
      {
        answer: 'A suspensão torna-se muito dura.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para que serve o alternador?',
    answers: [
      {
        answer: 'Para fornecer corrente à bobine.',
        correct: false,
      },
      {
        answer: 'Para evitar que a bateria se descarregue.',
        correct: true,
      },
      {
        answer: 'Para carregar o dínamo.',
        correct: false,
      },
      {
        answer: 'Para alimentar o motor de arranque.',
        correct: false,
      },
    ],
  },
  {
    question: 'A presença de água misturada com óleo do motor de um automóvel significa:',
    answers: [
      {
        answer: 'Junta de cabeça do motor com fugas.',
        correct: true,
      },
      {
        answer: 'Bomba de água avariada.',
        correct: false,
      },
      {
        answer: 'Radiador com fugas.',
        correct: false,
      },
      {
        answer: 'Bomba de óleo avariada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Com a direção desalinhada, o que poderá acontecer?',
    answers: [
      {
        answer: 'Desgaste anormal dos pneus.',
        correct: true,
      },
      {
        answer: 'O veículo fica sem direção.',
        correct: false,
      },
      {
        answer: 'Aquecimento excessivo dos pneus.',
        correct: false,
      },
    ],
  },
  {
    question: 'A condução de um veículo autotanque pode ser difícil e perigosa quando a respetiva cisterna:',
    answers: [
      {
        answer: 'Está completamente cheia.',
        correct: false,
      },
      {
        answer: 'Não está completamente cheia.',
        correct: true,
      },
      {
        answer: 'Está fechada.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sistema hidráulico da direcção assistida permite virar:',
    answers: [
      {
        answer: 'Com um ângulo maior.',
        correct: false,
      },
      {
        answer: 'Com menos volta do volante.',
        correct: false,
      },
      {
        answer: 'Com menos esforço do condutor.',
        correct: true,
      },
      {
        answer: 'Com menos velocidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Onde estão montados o manómetro do óleo, o indicador do nível de combustível e o termómetro?',
    answers: [
      {
        answer: 'Na carroçaria do veículo.',
        correct: false,
      },
      {
        answer: 'No compartimento do motor.',
        correct: false,
      },
      {
        answer: 'No painel de instrumentos do veículo.',
        correct: true,
      },
      {
        answer: 'Debaixo do pára-brisas.',
        correct: false,
      },
    ],
  },
  {
    question: 'No transporte de animais vivos é muito perigoso:',
    answers: [
      {
        answer: 'Transitar com velocidade moderada.',
        correct: false,
      },
      {
        answer: 'Variar bruscamente a velocidade e a direção.',
        correct: true,
      },
      {
        answer: 'Alterar a velocidade sem o auxílio da caixa de velocidades.',
        correct: false,
      },
      {
        answer: 'Fazer uso do travão com frequência',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o orgão do motor que transmite o movimento da cambota ao veio de excêntricos?',
    answers: [
      {
        answer: 'Correia de distribuição.',
        correct: true,
      },
      {
        answer: 'Correia da ventoinha.',
        correct: false,
      },
      {
        answer: 'Impulsores.',
        correct: false,
      },
      {
        answer: 'Biela.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual a característica mais importante duma direção assistida?',
    answers: [
      {
        answer: 'Só é possível manejar a direção com o veículo em andamento.',
        correct: false,
      },
      {
        answer: 'A direção pode ser manejada com pouco esforço do condutor.',
        correct: true,
      },
      {
        answer: 'A direção pode ser manejada com pouco esforço do condutor.',
        correct: false,
      },
      {
        answer: 'Nunca é necessário proceder à sua lubrificação.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o inconveniente de conduzir com o pé apoiado no pedal da embraiagem?',
    answers: [
      {
        answer: 'Pode causar danos no rolamento de encosto.',
        correct: true,
      },
      {
        answer: 'Desgaste dos rolamentos da caixa de velocidades.',
        correct: false,
      },
      {
        answer: 'Desgaste excessivo dos carretos da caixa de velocidades.',
        correct: false,
      },
      {
        answer: 'O motor aquece excessivamente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos motores de explosão, qual o tipo de corrente que percorre as velas de ignição?',
    answers: [
      {
        answer: 'Alta tensão.',
        correct: true,
      },
      {
        answer: 'Contínua intermitente.',
        correct: false,
      },
      {
        answer: 'Baixa tensão.',
        correct: false,
      },
      {
        answer: 'Alternada trifásica.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos travões hidráulicos, as pastilhas são empurradas e pressionadas contra o disco:',
    answers: [
      {
        answer: 'Pelos êmbolos dos cilindros.',
        correct: true,
      },
      {
        answer: 'Pelo servo-freio.',
        correct: false,
      },
      {
        answer: 'Pelos pratos de pressão.',
        correct: false,
      },
      {
        answer: 'Pela pressão do ar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os amortecedores do sistema de suspensão servem para:',
    answers: [
      {
        answer: 'Reduzir a amplitude das oscilações das molas.',
        correct: true,
      },
      {
        answer: 'Contrariar a inclinação do veículo nas curvas.',
        correct: false,
      },
      {
        answer: 'Reduzir o peso que incide sobre as rodas.',
        correct: false,
      },
      {
        answer: 'Evitar o atrito dos pneus com o solo.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que pode acontecer quando os cabos ligados à bateria estão oxidados ou pouco apertados?',
    answers: [
      {
        answer: 'O alternador não funciona.',
        correct: false,
      },
      {
        answer: 'A bateria descarrega-se totalmente.',
        correct: false,
      },
      {
        answer: 'O motor de arranque não funciona.',
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
