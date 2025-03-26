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
    question: 'Exploração perceptiva é:',
    answers: [
      {
        answer: 'Procedimentos do condutor, para recolher do ambiente rodoviário, as informações importantes para a tarefa de condução.',
        correct: true,
      },
      {
        answer: 'Procedimentos do condutor para manter a trajectória do veículo controlada.',
        correct: false,
      },
      {
        answer: 'Procedimentos do condutor para realizar manobras mais rapidamente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):',
    answers: [
      {
        answer: 'Automóveis ligeiros de mercadorias sem reboque dentro das localidades 50, fora das localidades 100.',
        correct: false,
      },
      {
        answer: 'Automóveis ligeiros de mercadorias sem reboque dentro das localidades 60, fora das localidades 100.',
        correct: true,
      },
      {
        answer: 'Automóveis ligeiros de mercadorias sem reboque dentro das localidades 50, fora das localidades 90.',
        correct: false,
      },
      {
        answer: 'Automóveis ligeiros de mercadorias sem reboque dentro das localidades 60, fora das localidades 80.',
        correct: false,
      },
    ],
  },
  {
    question: 'Factores de risco serão.',
    answers: [
      {
        answer: 'Todos os factores que aumentem o risco de acidente.',
        correct: true,
      },
      {
        answer: 'Todas as marcas rodoviárias que contenham riscos.',
        correct: false,
      },
      {
        answer: 'Todos os factores externos ao condutor.',
        correct: false,
      },
      {
        answer: 'Todos os elementos exteriores a um veículo que possam provocar riscos na pintura.',
        correct: false,
      },
    ],
  },
  {
    question: 'O vento afecta a estabilidade do veículo:',
    answers: [
      {
        answer: 'Especialmente em zonas abertas de planície, zonas marítimas costeiras ou de montanha.',
        correct: true,
      },
      {
        answer: 'Especialmente em zonas de parques de estacionamento fechados.',
        correct: false,
      },
      {
        answer: 'Especialmente em zonas urbanas com muitos edifícios altos.',
        correct: false,
      },
      {
        answer: 'Não',
        correct: false,
      },
    ],
  },
  {
    question: 'A definição de paragem é:',
    answers: [
      {
        answer: 'Imobilização de um veículo pelo tempo estritamente necessário para a entrada ou saída de passageiros ou para breves operações de carga ou desdescarga.',
        correct: false,
      },
      {
        answer: 'Estacionamento de um veículo pelo tempo estritamente necessário para a entrada ou saída de passageiros ou para breves operações de carga ou descarga.',
        correct: false,
      },
      {
        answer: 'Imobilização de um veículo pelo tempo estritamente necessário para a estrada ou saída de passageiros ou para breves operações de carga ou descarga, desde que o condutor esteja pronto a retomar a marcha.',
        correct: true,
      },
    ],
  },
  {
    question: 'Quando transitem fora das localidades, os automóveis pesados devem guardar entre si:',
    answers: [
      {
        answer: 'Um intervalo mínimo de 30 metros, excepto durante o tempo necessário para faze r uma ultrapassagem.',
        correct: false,
      },
      {
        answer: 'Um intervalo mínimo de 50 metros, excepto durante o tempo necessário para fazer uma ultrapassagem.',
        correct: true,
      },
      {
        answer: 'Uma distância que lhe permita ver as rodas de trás do que circula à sua frente.',
        correct: false,
      },
    ],
  },
  {
    question: 'A distância de reacção é influenciada por:',
    answers: [
      {
        answer: 'Velocidade e tempo de reacção.',
        correct: true,
      },
      {
        answer: 'Apenas por factores externos ao condutor.',
        correct: false,
      },
      {
        answer: 'Tempo de reacção e estado da via.',
        correct: false,
      },
      {
        answer: 'Distância de travagem e tempo de reacção.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em caso de nevoeiro (cacimba), o que devemos ter presente, ao considerar a distância de segurança?',
    answers: [
      {
        answer: 'Que há zonas mais densas onde a visibilidade repentinamente se reduz.',
        correct: true,
      },
      {
        answer: 'Que como a velocidade praticada pelos veículos é menor devemos seguir mais perto possível do veículo da frente.',
        correct: false,
      },
      {
        answer: 'Que basta manter uma distância pequena independentemente da velocidade.',
        correct: false,
      },
      {
        answer: 'Que essa distância depende unicamente do tipo de veículo que à nossa frente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se existir combustível despejado na via, deve:',
    answers: [
      {
        answer: 'Cobri-lo com terra para evitar que este chegue aos esgotos pluviais e para minimizar o risco de incêndio ou derrapagens.',
        correct: true,
      },
      {
        answer: 'Cobri-lo com ramos para evitar que este chegue aos esgotos pluviais e para minimizar o risco de incêndio ou derrapagens.',
        correct: false,
      },
      {
        answer: 'Lavar a via com água para evitar que este chegue aos esgotos pluviais e para minimizar o risco de incêndio ou derrapagens.',
        correct: false,
      },
    ],
  },
  {
    question: 'Numa paragem ou estacionamento irregular:',
    answers: [
      {
        answer: 'A contravenção é punida com a multa de 500,00 Mt.',
        correct: true,
      },
      {
        answer: 'A contravenção é punida com a multa de 3000,00 Mt.',
        correct: false,
      },
      {
        answer: 'A contravenção é punida com a multa de 1000,00 Mt.',
        correct: false,
      },
      {
        answer: 'A contravenção é punida com a multa de 2000,00 Mt.',
        correct: false,
      },
    ],
  },
  {
    question: 'Clique na afirmação incorrecta:',
    answers: [
      {
        answer: 'Regra geral, as condições da circulação urbana levam ao aumento do consumo de combustível.',
        correct: false,
      },
      {
        answer: 'O intervalo de tempo de segurança corresponde ao tempo decorrido desde que o veículo à minha frente passa por um ponto fixo de referência até passarmos por esse mesmo ponto.',
        correct: false,
      },
      {
        answer: 'Encontrando-se dependente do tipo de via, a distância de reacção é maior em auto-estrada do que em vias urbanas.',
        correct: true,
      },
      {
        answer: 'O tempo de reacção depende de factores internos do condutor.',
        correct: false,
      },
    ],
  },
  {
    question: 'O condutor de veículo utilizado no transporte colectivo de passageiros, só pode parar nas faixas de rodagem para:',
    answers: [
      {
        answer: 'A entrada e saída de passageiros, em qualquer lugar que lhe de mais jeito.',
        correct: false,
      },
      {
        answer: 'A entrada e saída de passageiros nos locais especialmente destinados a esse fim.',
        correct: true,
      },
      {
        answer: 'Carregar e descarregar mercadorias, só durante o dia.',
        correct: false,
      },
      {
        answer: 'Carregar e descarregar mercadorias, só durante a noite.',
        correct: false,
      },
    ],
  },
  {
    question: 'Assinale a afirmação falsa relativa a eventuais efeitos da chuva intensa.',
    answers: [
      {
        answer: 'Quando passar num lençol de água e o veículo deslizar, é aconselhável pressionar o travão até que a aderência das rodas seja retomada',
        correct: true,
      },
      {
        answer: 'A água acumulada no solo pode reduzir a eficácia do funcionamento dos travões.',
        correct: false,
      },
      {
        answer: 'O aquaplanning pode ser agravado pelo mau estado dos pneumáticos e pela circulação com velocidade  excessiva.',
        correct: false,
      },
      {
        answer: 'Na faixa de rodagem sempre que esteja sinalizada com linha longitudinal contínua e a distância entre esta e o veículo seja inferior a 3 metros',
        correct: false,
      },
    ],
  },
  {
    question: 'Quem exceder de 40 Km/h até 60 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, dentro das localidades é punido:',
    answers: [
      {
        answer: 'Com multa de 4 000,00 Mt e contravenção grave.',
        correct: true,
      },
      {
        answer: 'Com multa de 4.000,00 Mt e contravenção média.',
        correct: false,
      },
      {
        answer: 'Com multa de 6.000,00 Mt e contravenção grave.',
        correct: false,
      },
      {
        answer: 'Com multa de 2.000,00 Mt e contravenção grave.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando se circula numa zona com grande intensidade de vento, além de reduzir a velocidade, qual deve ser o comportamento a adoptar:',
    answers: [
      {
        answer: 'Acelerar para passar mais rapidamente pela zona onde o vento sopra forte.',
        correct: false,
      },
      {
        answer: 'Segurar o volante com maior firmeza.',
        correct: true,
      },
      {
        answer: 'Segurar o volante com especial suavidade por forma a não contrariar as oscilações do veículo.',
        correct: false,
      },
      {
        answer: 'Rodar ligeiramente o volante para o lado contrário à direcção do vento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Das seguintes, qual ou quais não fazem parte das virtudes profissionais necessárias para a boa condução de veículos automóveis:',
    answers: [
      {
        answer: 'Responsabilidade.',
        correct: false,
      },
      {
        answer: 'Cortesia e boas maneiras.',
        correct: false,
      },
      {
        answer: 'Egoísmo.',
        correct: true,
      },
      {
        answer: 'Honestidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em especial á noite, com nevoeiro (cacimba) as luzes de estrada:',
    answers: [
      {
        answer: 'Devem ser evitadas porque permitem uma maior visibilidade a maior distancia.',
        correct: false,
      },
      {
        answer: 'Devem ser usadas porque permitem uma maior visibilidade a maior distância.',
        correct: false,
      },
      {
        answer: 'São as mais aconselháveis para garantir alguma visibilidade.',
        correct: false,
      },
      {
        answer: 'Devem ser evitadas porque reflectem-se no nevoeiro impedindo a visibilidade a maior distancia.',
        correct: true,
      },
    ],
  },
  {
    question: 'O vento afecta a estabilidade do veículo:',
    answers: [
      {
        answer: 'Particularmente quando é muito forte em tuneis.',
        correct: false,
      },
      {
        answer: 'Particularmente quando é muito forte e sopra lateralmente.',
        correct: true,
      },
      {
        answer: 'Particularmente em veículos de caixa aberta.',
        correct: false,
      },
      {
        answer: 'Não',
        correct: false,
      },
    ],
  },
  {
    question: 'A distância de travagem é afectada, em circulação sob condições atmosféricas adversas?',
    answers: [
      {
        answer: 'Sim',
        correct: true,
      },
      {
        answer: 'Não',
        correct: false,
      },
      {
        answer: 'Sim, mas só afecta o tempo de reacção.',
        correct: false,
      },
      {
        answer: 'Afecta principalmente a distância de reação.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nota-se mais a influência do vento no comportamento dinâmico do veículo:',
    answers: [
      {
        answer: 'No atravessamento de localidades com prédios altos.',
        correct: false,
      },
      {
        answer: 'No atravessamento de pontes ou viadutos, em especial em vias de velocidade mais elevada.',
        correct: true,
      },
      {
        answer: 'Nos de caixa aberta comparados com os de caixa mais alta e fechada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quem exceder em mais de 80 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, fora das localidades é punido:',
    answers: [
      {
        answer: 'Com multa de 8.000,00 Mt e contravenção grave.',
        correct: true,
      },
      {
        answer: 'Com multa de 8.000,00 Mt e contravenção leve.',
        correct: false,
      },
      {
        answer: 'Com multa de 8.000,00 Mt e contravenção média.',
        correct: false,
      },
      {
        answer: 'Com multa de 6.000,00 Mt e contravenção grave.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os veículos com uma massa maior:',
    answers: [
      {
        answer: 'Estão sujeitos a forças físicas maiores em situação de mudança de direção, aceleração e travagem.',
        correct: true,
      },
      {
        answer: 'A massa do veículo não interfere na dinâmica do veículo.',
        correct: false,
      },
      {
        answer: 'Estão sujeitos a forças físicas menores em situação de mudança de direção, aceleração e travagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica uma curta distância existente entre os veículos que circulam á minha frente?',
    answers: [
      {
        answer: 'Que devo moderar a velocidade.", "Que devo ultrapassar para não estar em perigo.',
        correct: true,
      },
      {
        answer: 'Que vou entrar numa localidade.',
        correct: false,
      },
      {
        answer: 'Que circulo mais rápido do que eles.',
        correct: false,
      },
    ],
  },
  {
    question: 'A expressão “TRAVAR COM O MOTOR” significa:',
    answers: [
      {
        answer: 'Engrenar uma mudança de maior força em andamento e não acelerar.',
        correct: true,
      },
      {
        answer: 'Utilizar o motor de arranque para auxiliar a travagem.',
        correct: false,
      },
      {
        answer: 'Desligar o motor, mantendo uma mudança engrenada.',
        correct: false,
      },
      {
        answer: 'Engrenar uma mudança de menor força em andamento e não acelerar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Manter uma distância de segurança relativamente aos veículos à frente e à rectaguarda:',
    answers: [
      {
        answer: 'Garante que não transita em excesso de velocidade.',
        correct: false,
      },
      {
        answer: 'Não é necessário dentro das localidades, já que os veículos circulam a uma velocidade reduzida.',
        correct: false,
      },
      {
        answer: 'Garante espaço de visibilidade, de acção e de reacção.',
        correct: true,
      },
      {
        answer: 'Não é necessário dado que em relação aos de trás não posso fazer nada.',
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
