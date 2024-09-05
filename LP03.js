// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Sempre que o veiculo esteja parado ou estacionado do lado esquerdo da faixa de rodagem:",
    a : ["os passageiros devem entrar e sair pelo lado esquerdo do veículo.", "o condutor deve entrar e sair pelo lado esquerdo do veículo.", "os passageiros devem entrar e sair pelo lado direito do veículo.",]
  },
  {
    q : "O que deve fazer quando um velocípede segue no mesmo sentido de trânsito?",
    a : ["Ter em atenção a instabilidade desse veículo.", "Ultrapassa-lo a grande velocidade", "Utilizar sinais sonoros",]
  },
  {
    q : "Os acidentes de viação são um problema que afecta:",
    a : ["Toda a sociedade", "Só os condutores", "Só as vítimas",]
  },
  {
    q : "O álcool influência de forma negativa o desempenho da tarefa de condução?",
    a : ["Sim", "Não, se tomado no tempo do almoço", "Não, porque é um estimulante",]
  },
  {
    q : "Nas passagens de nível, os condutores estão obrigados a:",
    a : ["certificar-se que a intensidade do tráfego não o obriga a imobilizar o veículo sobre ela.", "engrenar uma velocidade mais baixa durante o atravessamento.", "passar quando as cancelas ou barreiras estejam em movimento.",]
  },
  {
    q : "A marcha atrás, é uma manobra que deve ser efectuada:",
    a : ["lentamente e o mais possível à esquerda.", "o mais a direita possível, em local de boa visibilidade.", "o mais rapidamente possível em local onde não prejudique o trânsito.",]
  },
  {
    q : "Se tem a carta de condução da categoria B há menos de um ano e conduz um automóvel ligeiro de passageiros, não pode exceder a velocidade de:",
    a : ["90 km/h", "80 km/h", "120 km/h", "100 km/h",]
  },
  {
    q : "A finalidade dos sistemas de segurança activa e passiva dos veículos, é:",
    a : ["Reduzir os acidentes de trânsito e as suas consequências.", "Poder circular sem prestar atenção a estrada.", "Pode circular em alta velocidade sem perigo",]
  },
  {
    q : "Se o condutor sofre de uma doença, o que deve fazer para reduzir o risco de ter um acidente?",
    a : ["Conhecer os efeitos secundários dos medicamentos.", "Ignorar os sintomas para evitar distrações.", "Interromper a medicação que estiver a tomar, se tem que conduzir.",]
  } ,
  {
    q : "Que veículos podem conduzir as pessoas que só possuam a carta de condução da categoria B?",
    a : ["Automóveis ligeiros", "Todos os tipos de automóveis", "Motociclos, com ou sem carro",]
  },
  {
    q : "Entende-se por cruzamento de veículos:",
    a : ["Quando os condutores de dois veículos que transitam na mesma via e em sentidos opostos, passam um pelo outro em simultâneo.", "Quando na mesma via, se encontram dois veículos transitando no mesmo sentido.", "Quando dois veículos, circulando na mesma fila, o que se encontra atrás passa para diante do outro.",]
  },
  {
    q : "Na tarefa da condução, em que momento é a audição um sentido muito importante?",
    a : ["Na recolha de informação", "Na tomada de decisão", "No tratamento da informação",]
  },
  {
    q : "Durante a noite, quando deve o condutor utilizar as luzes de cruzamento?",
    a : ["No cruzamento com outros veículos ou quando esteja a menos de 100 metros do veículo que segue á sua frente.", "Fora das localidades, nos locais em que a iluminação permita uma visibilidade inferior a 25 metros.", "Só no cruzamento com pessoas ou animais.",]
  } ,
  {
    q : "Em curva de visibilidade reduzida, pode ultrapassar?",
    a : ["Não, a menos que sejam possíveis duas ou mais filas de trânsito no mesmo sentido e não se faça pela parte reservada ao sentido contrário.", "Não, em nenhum caso", "Sim, utilizando os dispositivos luminosos e sonoros",]
  },
  {
    q : "A fadiga, é um estado que pode influenciar a recolha de informação durante a condução?",
    a : ["Sim, tal como influencia toda a tarefa da condução.", "Sim, mas apenas influencia a recolha de informação em condução urbana.", "Não",]
  },
  {
    q : "Ao transitar, é necessário manter entre os veículos uma distância de segurança?",
    a : ["Sim, em relação ao trânsito que me rodeia.", "Sim, mas apenas em relação aos veículos que transitam a minha frente.", "Sim, unicamente uma distância lateral.",]
  },
  {
    q : "O condutor, ao colocar a carga num veículo, entre outros cuidados deve:",
    a : ["Evitar que a carga possa vir a cair sobre a via.", "colocar a carga mais pesada na parte superior do veículo.", "colocar a carga mais pesada na parte reservada aos passageiros.",]
  } ,
  {
    q : "Transitar com o veículo em velocidade inferior á metade da velocidade máxima estabelecida para a via, retardando ou obstruindo o trânsito, constitui contravenção:",
    a : ["Média", "Leve", "Grave",]
  },
  {
    q : "O agente regulador de trânsito, parado com o braço direito levantado, e a palma visível na frente, manda:",
    a : ["Parar o tráfego que venha da frente.", "Parar o tráfego que venha da frente e da retaguarda.", "Parar o tráfego que venha da retaguarda.",]
  },
  {
    q : "Pode conduzir um automóvel ligeiro com reboque com a carta de condução da categoria B?",
    a : ["Sim, desde que o peso bruto do reboque não exceda 750 kg.", "Sim, desde que o peso bruto do reboque não exceda 3500 kg.", "Não, e necessária a da categoria G.",]
  },
  {
    q : "Que veículos, consideram-se prioritários?",
    a : ["Os que transitam em missão urgente de socorro e comitivas governamentais, assinalando adequadamente a sua marcha.", "As comotivas governamentais", "As ambulâncias",]
  } ,
  {
    q : "Os condutores devem utilizar as luzes de presença (mínimos):",
    a : ["Em condições de visibilidade insuficiente, enquanto aguardam a abertura de passagem de nível.", "Ao circular de dia com boa visibilidade.", "Apenas durante a paragem ou estacionamento dentro das localidades.",]
  },
  {
    q : "Pode transpor um condutor a linha existente no eixo da via - barra central contínua?",
    a : ["Não. Nunca pode transpor a linha contínua no eixo da via.", "Sim, para ultrapassar", "Sim, para mudar de direção",]
  },
  {
    q : "As ordens dos agentes reguladores do trânsito, prevalecem sobre os sinais luminosos:",
    a : ["De qualquer cor", "Verde", "Amarelo", "Vermelho",]
  },
  {
    q : "Conduzir sob influência de álcool, sob efeitos de substâncias legalmente consideradas como estupefacientes ou psicotrópicas, constitui contravenção:",
    a : ["Grave", "Média", "Leve",]
  }
];

var quiz = {
  // (PART B) PROPERTIES
  hNow : null, // html current question number
  hQns : null, // html questions
  hAns : null, // html answers
  qorder : [], // questions order
  aorder : [], // answers order
  qnow : 0,    // current question
  score : 0,   // correctly answered

  // (PART C) SHUFFLE ARRAY
  // CREDIT : https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
  shuffle : a => {
    for (let i=a.length-1; i>0; i--) { 
      let j = Math.floor(Math.random() * (i + 1)); 
      [a[i], a[j]] = [a[j], a[i]]; 
    } 
    return a; 
  },

  // (PART D) INIT QUIZ
  init : () => {
    // (D1) GET HTML ELEMENTS
    quiz.hNow = document.getElementById("qcurrent");
    quiz.hQns = document.getElementById("qquestion");
    quiz.hAns = document.getElementById("qanswer");

    // (D2) SHUFFLE QUESTIONS ORDER
    quiz.qorder = [];
    for (let i=0; i<qa.length; i++) { quiz.qorder.push(i); }
    quiz.shuffle(quiz.qorder);

    // (D3) SHOW QUESTION
    quiz.qnow = -1;
    quiz.next();
  },

  // (PART E) NEXT QUESTION
  next : () => {
    // (E1) NEXT QUESTION - SHOW SCORE IF END
    quiz.qnow++;
    if (quiz.qnow == qa.length) {
      quiz.hNow.innerHTML = "RESULTADO";
      quiz.hQns.innerHTML = `Sua nota foi de ${quiz.score} acertos, de ${qa.length} questões.         Faça os testes mais vezes, se estabilize e passe no exame teórico, de primeira.                                               Oi 🤓, o aplicativo é gratuito, nos ajude a partilhar. Não se esqueça de convidar os seus amigos!`;
      quiz.hAns.innerHTML = "";
      // quiz.hAns.innerHTML = "<div onclick='quiz.init()'>Restart</div>";
      return;
    }

    // (E2) GET CURRENT QUESTION
    let qn = qa[quiz.qorder[quiz.qnow]];

    // (E3) SHUFFLE ANSWERS
    quiz.aorder = [];
    for (let i=0; i<qn.a.length; i++) { quiz.aorder.push(i); }
    quiz.shuffle(quiz.aorder);

    // (E4) SHOW QUESTION & ANSWER OPTIONS
    quiz.hNow.innerHTML = `PERGUNTA ${quiz.qnow+1} / ${qa.length}`;
    quiz.hQns.innerHTML = qn.q;
    quiz.hAns.innerHTML = "";
    quiz.aorder.forEach(i => {
      let opt = document.createElement("div");
      opt.className = "option";
      opt.innerHTML = qn.a[i];
      opt.order = i;
      opt.onclick = () => quiz.pick(i);
      quiz.hAns.appendChild(opt);
    });
  },
  
  // (PART F) ON PICKING AN ANSWER OPTION
  pick : i => {
    // (F1) CORRECTLY ANSWERED
    if (i==0) { quiz.score++; }

    // (F2) UPDATE ANSWER HTML
    document.querySelectorAll("#qanswer div.option").forEach(opt => {
      opt.onclick = "";
      if (opt.order==0) { opt.classList.add("correct"); }
      else if (opt.order==i) { opt.classList.add("wrong"); }
    });

    // (F3) WAIT FOR 1 SECOND BEFORE NEXT QUESTION
    setTimeout(quiz.next, 3050);
  }
};
window.addEventListener("load", quiz.init);



