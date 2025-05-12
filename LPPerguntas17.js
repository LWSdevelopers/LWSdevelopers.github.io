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
    question: 'Só pode ser ordenada a suspensão do trânsito por:',
    answers: [
      {
        answer: 'Motivos de segurança, de emergência grave ou de obras, ou com o fim de realizar a conservação dos pavimentos, instalações e obras de arte.',
        correct: true,
      },
      {
        answer: 'Motivos de segurança, de emergência grave ou de obras, ou com o fim de promover produtos e marcas de automóveis.',
        correct: false,
      },
      {
        answer: 'Ser feriado e haver festejos.',
        correct: false,
      },
      {
        answer: 'Ser fim de semana.',
        correct: false,
      },
    ],
  },
  {
    question: 'A entrada e saída de passageiros deve fazer-se:',
    answers: [
      {
        answer: 'Sempre pelo lado esquerdo.',
        correct: false,
      },
      {
        answer: 'Pelo lado permitido para a paragem.',
        correct: true,
      },
      {
        answer: 'Sempre o condutor pela direita e os restantes ocupantes pela esquerda.',
        correct: false,
      },
      {
        answer: 'Pelo lado direito ou esquerdo indistintamente.',
        correct: false,
      },
    ],
  },
  {
    question: 'A tarefa da condução:',
    answers: [
      {
        answer: 'É uma actividade potencialmente perigosa, de elevada responsabilidade e que exige conhecimentos técnicos e experiência adequada.',
        correct: true,
      },
      {
        answer: 'É uma actividade, de baixa responsabilidade e que exige conhecimentos técnicos e experiência.',
        correct: false,
      },
      {
        answer: 'É uma actividade, de elevada responsabilidade que não exige muitos conhecimentos técnicos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Excepto o disposto em regulamentos locais e em caso de manifesta necessidade:',
    answers: [
      {
        answer: 'Pode utilizar-se o lado direito da faixa de rodagem para ultrapassar ou mudar de direcção.',
        correct: true,
      },
      {
        answer: 'Pode utilizar-se o lado direito da faixa de rodagem para a manobra de marcha atrás.',
        correct: false,
      },
      {
        answer: 'Pode utilizar-se o lado direito da faixa de rodagem para estacionar.',
        correct: false,
      },
      {
        answer: 'Pode utilizar-se o lado direito da faixa de rodagem para conduzir a grande velocidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'A experiencia na condução é importante na avaliação que cada condutor faz de uma situação?',
    answers: [
      {
        answer: 'Errado',
        correct: false,
      },
      {
        answer: 'Certo, mas só em condução fora das localidades.',
        correct: false,
      },
      {
        answer: 'Certo',
        correct: true,
      },
      {
        answer: 'Certo, mas só em condução urbana',
        correct: false,
      },
    ],
  },
  {
    question: 'A distância mínima a guardar em relação ao veículo que transita à minha frente:',
    answers: [
      {
        answer: 'Não deve ser inferior a 30 metros.',
        correct: false,
      },
      {
        answer: 'Deve ser aquela que me permita, se necessário, imobilizar o veiculo em segurança.',
        correct: true,
      },
      {
        answer: 'Não deve ser superior à distância de paragem.',
        correct: false,
      },
      {
        answer: 'Deve ser aquela que me permita ver as rodas traseiras do veiculo que vai à minha frente.',
        correct: false,
      },
    ],
  },
  {
    question: 'A definição de tara é:',
    answers: [
      {
        answer: 'Peso do veículo em vazio.',
        correct: true,
      },
      {
        answer: 'Peso do veiculo mais o condutor.',
        correct: false,
      },
      {
        answer: 'Peso da carga que o veículo transporta.',
        correct: false,
      },
      {
        answer: 'Peso do veículo com carga.',
        correct: false,
      },
    ],
  },
  {
    question: 'A Condução Defensiva deve ser mais pró-activa, isto significa que:',
    answers: [
      {
        answer: 'Deve prever as situações antes de acontecerem e mesmo que não aconteçam prever a probabilidade que aconteçam.',
        correct: true,
      },
      {
        answer: 'Deve ser mais rápida e activa para sair rapidamente das zonas de perigo.',
        correct: false,
      },
      {
        answer: 'Deve adivinhar as situações de perigo e concentrar-se em aproximar-se o mais possível da berma para se proteger.',
        correct: false,
      },
      {
        answer: 'Deve estar atendo aos ruídos estranhos dos veículos no trânsito e sinalizar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Posso circular pela parte direita da faixa de rodagem numa via urbana com duplo sentido e uma faixa para cada sentido?',
    answers: [
      {
        answer: 'Sim, para ultrapassar.',
        correct: true,
      },
      {
        answer: 'Sim, em via urbana posso circular pela via da esquerda ou a da direita.',
        correct: false,
      },
      {
        answer: 'Sim, na aproximação a um cruzamento em que pretenda mudar de direcção à direita.',
        correct: false,
      },
      {
        answer: 'Não.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nas descidas de inclinação acentuada:',
    answers: [
      {
        answer: 'Os automóveis pesados não podem transitar sem utilizarem o motor como auxiliar do travão.',
        correct: true,
      },
      {
        answer: 'Os automóveis ligeiros não podem transitar sem utilizarem o motor como auxiliar do travão.',
        correct: false,
      },
      {
        answer: 'Só os automóveis pesados de passageiros não podem transitar sem utilizarem o motor como auxiliar do travão.',
        correct: false,
      },
      {
        answer: 'Todos os automóveis não podem transitar sem utilizarem o motor como auxiliar do travão.',
        correct: false,
      },
    ],
  },
  {
    question: 'A capacidade de o condutor prever e antecipar aumenta:',
    answers: [
      {
        answer: 'Com a velocidade do veículo.',
        correct: false,
      },
      {
        answer: 'Com a idade do condutor.',
        correct: false,
      },
      {
        answer: 'Com a experiência.',
        correct: true,
      },
      {
        answer: 'Com a categoria do veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):',
    answers: [
      {
        answer: 'Automóveis pesados de passageiros dentro das localidades 50, fora das localidades 120.',
        correct: false,
      },
      {
        answer: 'Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 100.',
        correct: true,
      },
      {
        answer: 'Automóveis pesados de passageiros dentro das localidades 50, fora das localidades 100.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um dos perigos da circulação nocturna são os encandeamentos. Como devo proceder ao ser encandeado pelo veículo que me segue:',
    answers: [
      {
        answer: 'Diminuir a velocidade e sinalizar para permitir que este me ultrapasse.',
        correct: true,
      },
      {
        answer: 'Acelerar ao máximo até perde-lo de vista.',
        correct: false,
      },
      {
        answer: 'Ligar as luzes de emergência e imobilizar o meu veículo.',
        correct: false,
      },
      {
        answer: 'Fechar os olhos durante 2 ou 3 segundos para a recuperação ser mais rápida.',
        correct: false,
      },
    ],
  },
  {
    question: 'A definição de auto-estrada é:',
    answers: [
      {
        answer: 'Via publica destinada a transito rápido, com separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal.',
        correct: true,
      },
      {
        answer: 'Via publica destinada a transito lento, com separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal.',
        correct: false,
      },
      {
        answer: 'Via publica destinada a transito rápido, sem separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que provoca num condutor, a elevada ingestão de bebidas alcoólicas?',
    answers: [
      {
        answer: 'O aumento das capacidades de avaliação das distâncias.',
        correct: false,
      },
      {
        answer: 'A redução da capacidade de reação.',
        correct: true,
      },
      {
        answer: 'O aumento da capacidade de atenção e concentração.',
        correct: false,
      },
      {
        answer: 'A redução da distancia de paragem.',
        correct: false,
      },
    ],
  },
  {
    question: 'A condução nocturna deve influenciar a velocidade a que circulo?',
    answers: [
      {
        answer: 'Não, porque se ligar as luzes de estrada vejo melhor a via do que durante o dia.',
        correct: false,
      },
      {
        answer: 'Não, porque quando a visibilidade é menor devo ligar as luzes de estrada.',
        correct: false,
      },
      {
        answer: 'Sim, porque influencia a recolha de informação.',
        correct: true,
      },
    ],
  },
  {
    question: 'O condutor de um veículo em marcha deve:',
    answers: [
      {
        answer: 'Manter uma distância lateral de 2 metros para evitar acidentes entre o seu veículo e os veículos que transitam na mesma faixa de rodagem, no mesmo sentido ou em sentido oposto.',
        correct: false,
      },
      {
        answer: 'Manter uma distância lateral de 3 metros para evitar acidentes entre o seu veículo e os veículos que transitam na mesma faixa de rodagem, no mesmo sentido ou em sentido oposto.',
        correct: false,
      },
      {
        answer: 'Manter uma distância lateral suficiente para evitar acidentes entre o seu veículo e os veículos que transitam na mesma faixa de rodagem, no mesmo sentido ou em sentido oposto.',
        correct: true,
      },
    ],
  },
  {
    question: 'Em caso de nevoeiro (cacimba) forte:',
    answers: [
      {
        answer: 'Deve pensar em seguir viagem o mais depressa possível para sair da zona de nevoeiro rapidamente.',
        correct: false,
      },
      {
        answer: 'Deve pensar em parar em um local seguro e aguardar que o nevoeiro levante.',
        correct: true,
      },
      {
        answer: 'Deve ligar as luzes de estrada e as luzes de emergência para ser mais facilmente visto pelos outros condutores.',
        correct: false,
      },
    ],
  },
  {
    question: 'A distância percorrida desde que o condutor identifica um perigo até que o veiculo pare completamente:',
    answers: [
      {
        answer: 'É maior quanto maior for a velocidade.',
        correct: true,
      },
      {
        answer: 'Só varia se o veículo ou via estão em mau estado.',
        correct: false,
      },
      {
        answer: 'Depende apenas do estado dos travões.',
        correct: false,
      },
      {
        answer: 'Depende apenas do estado do condutor.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os sinais sonoros devem ser:',
    answers: [
      {
        answer: 'Longos e insistentes, usados como forma de protesto contra interrupções do trânsito ou como meios de chamamento.',
        correct: false,
      },
      {
        answer: 'Breves, usados de forma moderada e em caso algum devem servir de meio de protesto contra interrupções do trânsito ou como meios de chamamento.',
        correct: true,
      },
      {
        answer: 'Breves, usados de forma moderada e podem servir de meio de protesto contra interrupções do trânsito ou com meios de chamamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'A distância percorrida desde que o condutor identifica um perigo até que o veiculo pare completamente:',
    answers: [
      {
        answer: 'É maior quanto maior for a atenção',
        correct: false,
        },
        {
        answer: 'É maior quanto maior for a velocidade.',
        correct: true,
      },
      {
        answer: 'Só varia se o veículo ou via estão em mau estado.',
        correct: false,
      },
      {
        answer: 'Depende apenas do estado dos travões.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um dos perigos da circulação nocturna são os encandeamentos. Como devo proceder ao ser encandeado pelo veículo que me segue:',
    answers: [
      {
        answer: 'Diminuir a velocidade e sinalizar para permitir que este me ultrapasse.',
        correct: true,
      },
      {
        answer: 'Fechar os olhos durante 2 ou 3 segundos para a recuperação ser mais rápida.',
        correct: false,
      },
      {
        answer: 'Ligar as luzes de emergência e imobilizar o meu veículo.',
        correct: false,
      },
      {
        answer: 'Acelerar ao máximo até perde-lo de vista.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como medida defensiva, o condutor deve:',
    answers: [
      {
        answer: 'Dar a conhecer as suas intenções através de sinalização.',
        correct: true,
      },
      {
        answer: 'Parar sempre que se aproxime de um cruzamento para evitar um acidente.',
        correct: false,
      },
      {
        answer: 'Deve usar sempre a buzina para alertar outros utentes da via da sua presença.',
        correct: false,
      },
      {
        answer: 'Circular com óculos escuros para evitar encadeamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'A distância mínima a guardar em relação ao veículo que transita à minha frente:',
    answers: [
      {
        answer: 'Deve ser aquela que me permita, se necessário, imobilizar o veiculo em segurança.',
        correct: true,
      },
      {
        answer: 'Deve ser aquela que me permita ver as rodas traseiras do veiculo que vai à minha frente.',
        correct: false,
      },
      {
        answer: 'Não deve ser superior à distância de paragem.',
        correct: false,
      },
      {
        answer: 'Não deve be inferior a 30 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Posso circular pela parte direita da faixa de rodagem numa via urbana com duplo sentido e uma faixa para cada sentido?',
    answers: [
      {
        answer: 'Sim, na aproximação a um cruzamento em que pretenda mudar de direcção à direita.',
        correct: false,
      },
      {
        answer: 'Sim, em via urbana posso circular pela via da esquerda ou a da direita.',
        correct: false,
      },
      {
        answer: 'Sim, para ultrapassar.',
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
  const buttons = answerBox.querySelectorAll('button');
  buttons.forEach((button) => {
    button.disabled = true; // Desativa todos os botões após uma resposta
    if (button.getAttribute('correct-answer') === 'true') {
      button.classList.add('correct-answer'); // Destaca a resposta correta
    } else {
      button.classList.add('wrong-answer'); // Destaca as respostas erradas
    }
  });

  if (btn.getAttribute('correct-answer') === 'true') {
    points++; // Incrementa a pontuação se a resposta estiver correta
  }

  // Avança para a próxima pergunta após um pequeno intervalo
  setTimeout(() => {
    if (actualQuestion < questions.length) {
      createQuestion(actualQuestion);
    } else {
      showScore();
    }
  }, 1000);
}

// Exibe a pontuação final
function showScore() {
  quizzContainer.classList.add('hide');
  scoreContainer.classList.remove('hide');

  const scoreText = scoreContainer.querySelector('#score-text');
  scoreText.textContent = `Você acertou ${points} de ${questions.length} perguntas!`;
}

// Inicializa o quizz
init();

