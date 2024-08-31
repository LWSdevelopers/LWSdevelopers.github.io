// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Um dos cuidados a ter com a bateria, é:",
    a : ["Adicionar, se necessário, água destilida até cobrir as placas.", "Periodicamente, substituir o eletrólito", "Periodicamente, adicionar ácido sulfúrico e água até cobrir as placas.",]
  },
  {
    q : "Num motor Diesel, o início da combustão deve-se:",
    a : ["À elevada temperatura do ar e injeção de combustível.", "À descarga da vela de incandescência.", " faísca produzida entre os pólos da vela.",]
  },
  {
    q : "Diz-se que a direção do veículo é assistida quando:",
    a : ["Uma bomba hidráulica reduz o esforço do condutor.", "É assistido automaticamente.", "Não é necessário proceder à lubrificação dos seus órgãos.", "As suas afinações se fazem automaticamente.",]
  },
  {
    q : "O sistema que tem a finalidade de transferir a força do motor às rodas, chama-se sistema de:",
    a : ["Transmissão.", "Suspensão", "Travões", "Direção",]
  },
  {
    q : "A  bateria consegue fornecer corrente elétrica ao motor de arranque e a todos os aparelhos de funcionamento elétrico, mesmo que o alternador não esteja em funcionamento:",
    a : ["A afirmação está certa..", "A afirmação está errada",]
  },
  {
    q : "Nos travões hidráulicos, a força muscular que o condutor exerce sobre o  pedal, transmite-se ao sistema de fricção da travagem das rodas por intermédio de um fluído (óleo):",
    a : ["A afirmação está certa.", "A afirmação está errada.",]
  },
  {
    q : "Nos motores de combustão interna (“Diesel”) a combustão nos cilindros começa quando:",
    a : ["O gasóleo é injetado.", "A faísca salta nos polos das velas.", "As duas válvulas se fecham.",]
  },
  {
    q : "Num automóvel, um incêndio provocado por gasolina inflamada nunca deverá ser apagado com:",
    a : ["Água.", "Uma manta ou areia.", "Extintor.",]
  },
  {
    q : "Porque se deve pôr o motor a trabalhar quando se deitar água no radiador com o motor quente?",
    a : ["Porque assim obriga-se a água a circular e não se corre o risco de o motor poder estalar..", "Porque assim o termóstato fica sempre aberto e a água circula livremente", "Porque assim obriga-se a água a circular e o radiador enche-se de água mais rápido",]
  },
  {
    q : "Para que a lubrificação se possa realizar em boas condições é conveniente:",
    a : ["Não deixar funcionar o motor em marcha lenta durante muito tempo, porque a bomba envia pouco óleo.", "Não deixar o gasóleo atingir o nível mínimo no depósito de combustível", "Não deixar funcionar o motor em marcha lenta durante muito tempo, porque a bomba envia pouca água.",]
  },
  {
    q : "Para que serve a ventoinha(ventilador)?",
    a : ["Serve para produzir uma corrente de ar destinado a promover o arrefecimento da água no radiador.", "Serve para produzir um jacto de água destinado à lavagem do radiador exteriormente", "Serve para produzir uma corrente de ar destinado à mistura (ar+gasolina).",]
  },
  {
    q : "Como se deve proceder antes de chegar a uma subida, quando o pavimento está coberto de gelo?",
    a : ["Reduzir a velocidade e engrenar uma velocidade de força..", "Aumentar a velocidade para sair rapidamente da zona gelada.", "Reduzir a velocidade o mais tarde possível.",]
  },
  {
    q : "Alguns veículos permitem “bloquear” o diferencial. Quando é necessário fazê-lo?
",
    a : ["Quando uma roda motora patine em areia, lama ou gelo.", "Quando o veículo transporta carga com elevado peso.", "Quando os travões estejam a travar mal.",]
  } ,
  {
    q : "Em determinados veículos, o condutor não deve iniciar a marcha enquanto:",
    a : ["A pressão do ar dos travões não for suficiente.", "O motor não atingir a temperatura máxima possível.", "O alternador não começar a carregar a bateria.",]
  },
  {
    q : "O esvaziamento rápido dos pneus , em caso de furo, não acontece:",
    a : ["Com tanta facilidade nos pneus sem câmaras de ar.", "Quando se transita com pressão um pouco inferior à normal.", "Nos pneus com câmaras de ar",]
  },
  {
    q : "A bateria nos automóveis:",
    a : ["Deve ter sempre um cabo ligado à massa.", "Nunca pode ser ligado a outra bateria.", "Fornece corrente ao borne central da bobina.",]
  },
  {
    q : "Qual o inconveniente de deixar a chave de ignição ligada com o motor parado?",
    a : ["Pode queimar-se a bobina.", "Podem incendiar-se os injetores", "Os enrolamentos do conjuntor-disjuntor podem aquecer.", "Pode queimar-se o alternador",]
  },
  {
    q : "Um automóvel que transporta uma carga muito alta, ao curvar para a direita, a carga tende a cair para:",
    a : ["A esquerda.", "A retaguarda", "A direita",]
  },
  {
    q : "O que acontece a uma parte do óleo de lubrificação do motor?",
    a : ["Lubrifica as paredes dos cilindros.", "Lubrifica as paredes internas das câmaras de combustão.", "Lubrifica o carvão da bomba de água.",]
  },
  {
    q : "Nos motores Diesel, se entrar ar para os órgãos do sistema de alimentação de combustível, o motor:",
    a : ["Para por falta de injeção.", "Trabalha normalmente.", "Trabalha só ao ralenti", "Fica a trabalhar acelerado",,]
  },
  {
    q : "Quando o gasóleo não chega à bomba injetora, qual poderá ser a causa?",
    a : ["Filtro de combustível entupido.", "Injetores sujos", "Tubo de retorno de gasóleo entupido.",]
  },
  {
    q : "No caso de uma mudança saltar, a causa será:",
    a : ["Mola fixadora do anel sincronizador fraca ou partida.", "Falta de lubrificação.", "Embraiagem a patinar",]
  },
  {
    q : "O condensador que está ligado aos platinados serve para:",
    a : ["Atrair a si a corrente que tende a saltar nos platinados.", "Transformar a corrente de baixa em alta tensão.", "Interromper a corrente de baixa tensão.",]
  },
  {
    q : "O que acontece quando a embraiagem está a patinar?",
    a : ["O veio primário recebe com deficiência o movimento do volante do motor", "O veio primário recebe movimento do volante do motor em boas condições", "O diferencial recebe com deficiência o movimento do veio de transmissão",]
  },
  {
    q : "Nos veículos com circuito de travões de ar comprimido, o ar que alimenta o travão de estacionamento vem de:",
    a : ["Um depósito próprio.", "Uma válvula do travão de pé.", "Um compressor",]
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



