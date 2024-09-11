// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "O condutor, pode fazer a verificação do nível do óleo no motor do veículo?",
    a : ["Sim, desde que saiba a forma correcta de verificação.", "Sim, desde que mantenha o motor do veiculo a trabalhar.", "Não, apenas técnicos especializados o podem fazer.",]
  },
  {
    q : "Uma criança de 8 anos, como deve viajar num automóvel equipado com cintos de segurança em todos os lugares?",
    a : ["No banco da retaguarda, com um sistema de retenção homologado e adaptado ao seu tamanho e peso.", "E indiferente, sempre que utilize um sistema de retenção homologado e adaptado ao seu tamanho e peso.", "No banco da frente, com um sistema de retenção homologado e adaptado ao seu tamanho e peso.", "Basta utilizar o cinto de segurança do banco da retaguarda.",]
  },
  {
    q : "Uma mulher gravida, é obrigada a usar o cinto de segurança?",
    a : ["Sim e é muito importante que esteja bem colocado porque senão, tanto ela como a criança, podem sofrer lesões graves em caso de acidente.", "Não, porque é prejudicial para a criança.", "Não é obrigatório, mas é aconselhável.", "Sim, mas apenas fora das cidades.",]
  },
  {
    q : "Deixar de indicar com antecedência, mediante gesto regulamentar de braço ou luz indicadora de direcção do veículo, o início da marcha, a realização da manobra de parar o veículo, a mudança de direcção ou de faixa de circulação, constitui contravenção:",
    a : ["Média", "Leve", "Grave",]
  },
  {
    q : "Qual e a velocidade instantânea que não deve exceder os automóveis ligeiros de passageiros e mistos dentro das localidades?",
    a : ["60 km/h", "50 km/h, se tem reboque.", "80 km/h", "40 km/h",]
  },
  {
    q : "O sono pode provocar um accidente durante o dia?",
    a : ["Sim, os acidentes motivados pelo sono também acontecem durante o dia.", "Sim, mas só se conduz sob a influência de álcool.", "Não, esse tipo de acidentes só acontecem a noite.", "Sim, mas apenas durante as primeiras horas da manhã.",]
  },
  {
    q : "Das seguintes, indique qual é a afirmações verdadeiras:",
    a : ["O instituto nacional de transportes terrestres, é o orgão que coordena e fiscaliza o funcionamento das escolas de condução.", "A cobrança de multas por infracção ao Código da Estrada, e feita só na repartição do agente autuante.", "Os condutores que abandonam voluntariamente as pessoas vítimas de acidentes de viação que tenham causado, permanecem impunes.", "A condução em estado de embriagues, é permitida.",]
  },
  {
    q : "Ė proibido ultrapassar:",
    a : ["Imediatamente antes e nas passagens para peões.", "Nas estradas que só tenham uma via de trânsito para cada sentido.", "Depois dos cruzamentos.", "Em todas as curvas.",]
  },
  {
    q : "O feixe luminoso emitido pelas luzes de cruzamento (médios), deve projectar-se no solo",
    a : ["E iluminá-lo eficazmente, numa distância não superior a 30 metros.", "E no mínimo, iluminá-lo a 100 metros.", "E iluminá-lo eficazmente, numa distância não superior a 50 metros.",]
  } ,
  {
    q : "Numa curva de visibilidade reduzida, pode ultrapassar o veículo que circula a sua frente?",
    a : ["Não, se para o fazer tiver que pisar ou transpor a linha continua.", "Sim; utilizando os dispositivos luminosos ou sonoros.", "Sim, já que o condutor deve encostar o seu veiculo para deixar-me passar.",]
  },
  {
    q : "Conduzir em condições atmosféricas adversas:",
    a : ["Afecta a distância de travagem.", "Afecta a taxa de alcoolemia", "Reduz a fadiga.",]
  },
  {
    q : "O documento que titula a habilitação para conduzir automóveis, motociclos, triciclos e quadriciclos, designa-se por:",
    a : ["Carta de condução.", "Licença de condução.", "Livrete de condução.", "Licença especial de condução.",]
  },
  {
    q : "Numa subida, com barra central contínuo, pode inverter o sentido de marcha?",
    a : ["Não, já que existe uma lomba de visibilidade reduzida.", "Sim, só é proibido fazê-lo nas curvas de visibilidade reduzida.", "Sim, porque não existe sinalização que o proíba.", "Sim",]
  } ,
  {
    q : "Numa curva de visibilidade, reduzida pode ultrapassar?",
    a : ["Não", "Sim, depois de sinalizá-lo.", "Sim; utilizando os sinais sonoros",]
  },
  {
    q : "Se pretender inverter o sentido de marcha, deve ter em conta:",
    a : ["que a manobra deve ser feita em local e de forma a não prejudicar o trânsito.", "que é proibido fazê-lo em todos os cruzamentos e entroncamentos.", "que é proibido fazê-lo dentro das localidades .", "que só é permitido fazê-lo nas rotundas.",]
  },
  {
    q : "Para a iluminação da via, os condutores devem ligar as luzes de:",
    a : ["Médios ou máximos.", "Mínimos ou máximos.", "Mínimos ou médios.",]
  },
  {
    q : "Para praticar uma condução segura, o condutor deve:",
    a : ["Avaliar constantemente tudo que me rodeia.", "Preocupar-se em ser o mais rápido.", "Ter em atenção apenas a sinalização existente.",]
  } ,
  {
    q : "Os automóveis ligeiros de passageiros, devem estar equipados com sinais de pré-sinalização de perigo?",
    a : ["Sim, dois triângulos de pré-sinalização de perigo e um colete reflector.", "Sim, um colete reflector e um triângulo de pré-sinalização de perigo.", "Sim, apenas são obrigatórios dois triângulos de pré-sinalização de perigo.", "Não",]
  },
  {
    q : "Um torniquete é:",
    a : ["uma tira larga de pano, amarrada firmemente em torno de um membro.", "um pedaço de pau curto amarrado em torno de um membro.", "um pedaço de papel onde se menciona a parte do corpo que foi amarrada.", "uma pega de madeira, utilizada para aliviar a dor da vítima de acidente.",]
  },
  {
    q : "É aconselhável viajar a noite para evitar a fadiga?",
    a : ["Não, porque o sono aparece mais facilmente.", "Sim, viajar durante a noite é sempre mais seguro.", "Sim, se a viagem é longa.", "Sim, porque há menos tráfego.",]
  },
  {
    q : "Que devem fazer os condutores se o sinal luminoso de uma intersecção esta avariado?",
    a : ["Ceder a passagem aos condutores que se apresentem pela direita.", "Ceder a passagem a todos os condutores que se apresentem pela via transversal.", "Continuar a marcha, já que tenho prioridade de passagem.", "Ceder a passagem aos condutores que se apresentem pela esquerda.",]
  } ,
  {
    q : "Quais são os princípios gerais do socorrismo?",
    a : ["Prevenir, alertar e socorrer.", "Prevenir, observar e socorrer.", "Prevenir, socorrer e evacuar.",]
  },
  {
    q : "Nos veículos de mercadorias, a carga deve ser disposta de modo a que:",
    a : ["Seja assegurado o equilíbrio do veículo, parado ou em movimento.", "Fique livre o maior espaço possível a retaguarda da caixa de carga.", "O principal peso fique sobre o eixo da retaguarda.",]
  },
  {
    q : "Qual é a principal causa de acidentes rodoviários?",
    a : ["O Homem.", "A via.", "O veículo.",]
  },
  {
    q : "Dentro das localidades, em vias com mais de uma via de trânsito no mesmo sentido, o condutor deve utilizar:",
    a : ["a via de trânsito mais conveniente ao seu destino.", "a via de trânsito mais a direita.", "a via de trânsito da esquerda, podendo mudar para a da direita sempre que lhe apeteça.", "a via de trânsito mais a esquerda, podendo utilizar outra só para ultrapassar ou mudar de direcção.",]
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



