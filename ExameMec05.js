// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Periodicamente o condutor deve verificar:",
    a : ["O nível de óleo do motor com a vareta graduada.", "As ligações da bateria.", "A abertura dos platinados.",]
  },
  {
    q : "Actuando na porca de afinação de um injector, regula-se:",
    a : ["A pressão de injecção através da tensão na mola.", "A abertura do orifício de injecção.", "A válvula de entrada do gasóleo no injector.",]
  },
  {
    q : "Em caso de avaria da bomba de água:",
    a : ["O motor aquece excessivamente.", "O termostato não abre.", "Após o arranque o motor leva mais tempo a aquecer.", "O motor não trabalha.",]
  },
  {
    q : "Qual o inconveniente de conduzir com o pé apoiado no pedal da embraiagem?",
    a : ["Gripagem do rolamento de encosto ou desgaste no carvão de encosto.", "Gripagem do disco da embraiagem.", "A embraiagem pode patinar.",]
  },
  {
    q : "Qual poderá ser a causa de um veículo com travão hidráulico só travar com o pedal muito a fundo?",
    a : ["Maxilas muito afastadas ou calços muito gastos.", "Bom nível de óleo no sistema de travagem.", "Maxilas muito apertadas ou calços novos.",]
  },
  {
    q : "O movimento de semi-rotação dos êmbolos dos elementos da bomba injectora serve para:",
    a : ["Regular a quantidade de gasóleo a ser consumido", "Alimentar o motor de arranque.", "Transformar a corrente de baixa em alta tensão.",]
  },
  {
    q : "Os pneus gastam-se muito na parte central do piso, quando rodam:",
    a : ["Com pressão muito elevada.", "Com a direcção desalinhada.", "Com as rodas desequilibradas.", "Com pressão muito baixa.",]
  },
  {
    q : "Periodicamente o líquido que se deve meter nas baterias, para repor o nível do electrólito, é:",
    a : ["Água destilada.", "Água das torneiras.", "Ácido sulfúrico e água.",]
  },
  {
    q : "Como deve ser transportado um volume cujo peso seja igual à capacidade de carga máxima do veículo?",
    a : ["No centro da caixa de carga.", "O mais próximo possível da cabina.", "Centrado sobre o eixo da retaguarda.",]
  } ,
  {
    q : "Se os amortecedores estiverem descarregados:",
    a : ["As molas oscilam demasiadamente.", "Torna-se difícil movimentar a direcção.", "O número de oscilações das molas diminui.",]
  },
  {
    q : "O que provoca o arrefecimento do motor?",
    a : ["É a água que circula pelas camisas de água do motor.", "É o ar que circula pelo cárter do motor.", "É o ar que circula pelas camisas de ar do motor.", "É a água que circula pelo cárter do motor.",]
  },
  {
    q : "A direção assistida permite:",
    a : ["Diminuir o esforço do condutor no volante.", "Aumentar o ângulo de viragem.", "Diminuir a desmultiplicação no volante.", "Alinhar a direção com as rodas.",]
  },
  {
    q : "Os principais componentes do sistema de transmissão são:",
    a : ["Embraiagem, caixa de velocidades e diferencial.", "Veio de transmissão, volante do motor e pneus.", "Pendural, barra lateral, parafuso sem-fim e sector.",]
  } ,
  {
    q : "Os fusíveis servem para:",
    a : ["Proteger a instalação elétrica.", "Evitar que a bateria se descarregue.", "Evitar curto-circuito.",]
  },
  {
    q : "Nos travões hidráulicos, as pastilhas são acionadas e pressionadas contra o disco:",
    a : ["Pelos êmbolos dos cilindros.", "Pela pressão do ar.", "Pelos pratos de pressão.",]
  },
  {
    q : "Que cuidados deve ter com as molas de lâminas do sistema de suspensão?",
    a : ["Não pôr carga excessiva, trazer devidamente lubrificadas as cavilhas e evitar covas.", "Não se requer cuidados especiais, se partirem devem ser substituídas.", "Colocar a carga na caixa de carga sempre à retaguarda.",]
  },
  {
    q : "No motor a falta do filtro de ar facilita a entrada das impurezas nos cilindros, o que pode provocar:",
    a : ["Desgaste dos cilindros.", "Gripagem do motor.", "Sobreaquecimento do motor.",]
  } ,
  {
    q : "Um pneu com pressão muito inferior à recomendada, apresenta maior desgaste:",
    a : ["Nos bordos laterais..", "No lado direito.", "Na zona central.",]
  },
  {
    q : "Qual a função da placa de díodos (retificador de tensão) do alternador?",
    a : ["Transformar a corrente alternada em contínua e proteger a bateria de uma possível descarga.", "Regular a intensidade de corrente das velas.", "Transformar a corrente de baixa em alta tensão.",]
  },
  {
    q : "Que tipo de motor tem uma relação de compressão mais alta?",
    a : ["O motor de combustão", "O motor de explosão", "Não há diferença.",]
  },
  {
    q : "A finalidade do filtro de gasóleo, é:",
    a : ["Reter as impurezas contidas no gasóleo.", "Filtrar o óleo contido no gasóleo.", "Filtrar a água existente no gasóleo.",]
  } ,
  {
    q : "Para que a água circule no radiador é preciso que o termóstato a deixe circular depois de:",
    a : ["de a água atingir a temperatura de 70ºC a 80ºC.", "de a água atingir a temperatura de 100ºC", "de a água atingir a temperatura de 40ºC", "de a água atingir a temperatura de 120ºC",]
  },
  {
    q : "Num motor que funciona num ciclo a quatro tempos, de quatro cilindros em linha, em cada 2 voltas completas da cambota:",
    a : ["Dão-se quatro combustões.", "Dão-se duas combustões.", "Dão-se 3 combustões",]
  },
  {
    q : "Os travões pneumáticos actuam por meio:",
    a : ["Do ar comprimido pelo compressor ligado ao motor.", "Do ar comprimido por um compressor eléctrico.", "Da depressão de um sistema hidráulico.",]
  },
  {
    q : "O que pode acontecer quando os cabos ligados à bateria estão oxidados ou pouco apertados?",
    a : ["Não funcionar o motor de arranque.", "Descarregar-se totalmente a bateria.", "Um incêndio provocado por curto circuito.",]
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



