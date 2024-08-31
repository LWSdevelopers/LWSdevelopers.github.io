// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Um dos cuidados que um condutor de um veículo equipado com travões de ar comprimido deve ter, é:",
    a : ["Verificar a pressão de ar no respectivo manómetro antes de pôr o veículo em andamento.", "Verificar a pressão de ar pelo respectivo amperímetro antes de pôr o veículo em andamento.", "Verificar o nível de ar no compressor de ar antes de pôr o veículo em andamento.",]
  },
  {
    q : "As peças que compõem o motor necessitam de lubrificação para:",
    a : ["Reduzir o seu desgaste e aquecimento.", "Aumentar a sua potência.", "O veículo “pegar” facilmente de manhã.",]
  },
  {
    q : "Manga de eixo e barra transversal pertencem:",
    a : ["Ao sistema de direção.", "Á caixa de velocidades.", "Ao sistema de suspensão",]
  },
  {
    q : "Fazem parte da embraiagem:",
    a : ["Rolamento ou carvão de encosto, disco de ferodo e prato de pressão.", "Parafuso sem-fim e o sector, cavilhões, manga de eixo.", "Veio primário, veio secundário, veio intermediário.",]
  },
  {
    q : "Qual o fio que, no sistema elétrico de um automóvel, transporta corrente de baixa tensão?",
    a : ["O que vai da bateria ao motor de arranque.", "O que vai do distribuidor às velas de inflamação.", "O que vai do borne central da bobine ao borne lateral do rotor do distribuidor.",]
  },
  {
    q : "Qual dos seguintes motivos pode dar origem a uma derrapagem?",
    a : ["Velocidade não adequada às condições da via.", "Ultrapassar numa via estreita com dois sentidos.", "Não reduzir a velocidade no cruzamento com outros veículos.",]
  },
  {
    q : "Qual poderá ser a causa do alternador não gerar corrente elétrica?",
    a : ["Correia da ventoinha desapertada.", "Bateria com bornes sujos.", "Correia da ventoinha muito apertada.",]
  },
  {
    q : "Para aumentar a durabilidade do motor e o seu estado de conservação, deve-se:",
    a : ["Substituir o filtro de óleo nos períodos recomendados.", "Substituir o óleo de lubrificação todos os dias.", "Arrefecer a água de refrigeração antes de arrancar o motor.",]
  },
  {
    q : "Se na condução do veículo notar que a direção está pesada (dura), a causa poderá ser:",
    a : ["Excesso de peso sobre o eixo da frente do veículo.", "Caixa de direção com óleo em excesso.", "Excesso de pressão nos pneus das rodas da frente.",]
  } ,
  {
    q : "Qual o órgão que tem a finalidade de ligar e desligar o motor dos restantes componentes do sistema de transmissão?",
    a : ["Embraiagem.", "Caixa de velocidades.", "Diferencial",]
  },
  {
    q : "O que pode acontecer se o terminal de um dos cabos ligados à bateria estiver mal apertado?",
    a : ["O motor de arranque não funciona.", "Pode ocorrer uma explosão da bateria.", "Pode dar origem a um curto-circuito.",]
  },
  {
    q : "Como se verifica se os depósitos dos travões a ar têm pressão suficiente?",
    a : ["Através do respetivo manómetro.", "Através do vacuómetro.", "Através do termómetro.",]
  },
  {
    q : "A circulação da água entre o motor e o radiador é forçada:",
    a : ["Pela bomba de água..", "Pela correia da ventoinha.", "Por termossifão.",]
  } ,
  {
    q : "No sistema elétrico de um automóvel, qual o órgão que fornece corrente elétrica de alta tensão?",
    a : ["A bobine.", "O alternador.", "A bateria",]
  },
  {
    q : "Para evitar avarias no sistema de alimentação de um motor Diesel, deve-se ter o cuidado de não deixar esgotar:",
    a : ["O gasóleo do depósito de combustível, mantendo o sistema sem ar.", "O gasóleo do depósito de combustível, mantendo o sistema com ar.", "A gasolina do depósito de combustível, mantendo o sistema sem ar.",]
  },
  {
    q : "Em qual dos seguintes casos se torna mais fácil movimentar o volante da direção:",
    a : ["Se existir uma bomba hidráulica na direção.", "Se o veículo estiver equipado com servo-freio.", "Quando se roda o volante com o veículo parado.", "Com os pneus da frente com baixa pressão.",]
  },
  {
    q : "Satélites e planetários são engrenagens que pertencem:",
    a : ["Ao diferencial.", "À caixa de velocidades.", "À suspensão",]
  } ,
  {
    q : "As escovas do motor de arranque são feitas em:",
    a : ["Liga de grafite com alta percentagem de cobre.", "Ferro fundido.", "Liga de aço e cobre.", "Liga de alumínio",]
  },
  {
    q : "Nos travões hidráulicos, as pastilhas são acionadas e pressionadas contra o disco:",
    a : ["Pelos êmbolos dos cilindros.", "Pelos pratos de pressão.", "Pela pressão do ar",]
  },
  {
    q : "Num pneu de um automóvel pesado com a inscrição 295/80R22.5:",
    a : ["O número 22.5 é referente ao diâmetro interior (igual ao da jante).", "A letra R significa que o pneu é do tipo “Diagonal”.", "O número 80 é referente à largura do pneu.",]
  },
  {
    q : "De noite, mesmo com o motor acelerado, as luzes de um automóvel começam a perder intensidade. Qual poderá ser a causa?",
    a : ["Correia do alternador muito frouxa.", "Bateria com pouca carga", "Bateria com excesso de carga.",]
  } ,
  {
    q : "Se um motor de explosão apresenta um alto consumo de combustível a causa poderá ser:",
    a : ["Avaria nas velas de inflamação.", "Fuga de óleo nos amortecedores", "Desgaste no disco de travão.",]
  },
  {
    q : "Os travões hidráulicos actuam por meio:",
    a : ["Do óleo existente no depósito do sistema hidráulico.", "Do ar existente no depósito do sistema hidráulico.", "Do óleo existente no cárter do motor",]
  },
  {
    q : "O órgão eléctrico que gera corrente de baixa tensão para a bateria é:",
    a : ["O dínamo ou alternador.", "O distribuidor", "O motor de arranque.",]
  },
  {
    q : "Um dos cuidados que requer a bateria é manter os elementos sempre cobertos de electrólito:",
    a : ["Até 1 cm acima das placas.", "Até 10 cm acima das placas.", "Até 1 cm abaixo das placas.",]
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



