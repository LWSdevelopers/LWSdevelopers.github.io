// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Durante o tempo de escape de um motor de combustão interna, como se encontram as válvulas?",
    a : ["A de admissão fechada e a de escape aberta.", "As duas abertas", "A de admissão aberta e a de escape fechada.",]
  },
  {
    q : "Para que os travões atuem com eficácia num veículo com servo-freio, o condutor deve:",
    a : ["Durante a condução, manter o motor sempre a trabalhar.", "Ter o cuidado de acelerar ao mesmo tempo que trava.", "Ter o cuidado de desembraiar sempre que trava.",]
  },
  {
    q : "Deve-se deitar água no radiador quando o motor ainda estiver quente?",
    a : ["Sim, desde que o motor esteja trabalhar", "Não, nunca.", "Sim, desde que o motor esteja parado.", "Sim, desde que a água esteja quente.",]
  },
  {
    q : "O que se nota na condução de um automóvel que não tenha as rodas da frente alinhadas?",
    a : ["Com o volante direito, o veículo desvia-se para um dos lados.", "Não se nota nada de especial.", "Com o volante direito, o veículo desvia-se para um dos lados.",]
  },
  {
    q : "O diferencial serve para:",
    a : ["As rodas motoras rodarem com velocidades diferentes.", "Transmitir o movimento do motor à caixa de velocidades.", "Ligar a embraiagem à caixa de velocidades.",]
  },
  {
    q : "Se os amortecedores hidráulicos de um automóvel estiverem descarregados, o condutor nota:",
    a : ["Oscililação demasiada das molas.", "Dificuldade de travagem.", "Aumento de desagaste dos pneus.",]
  },
  {
    q : "Para evitar avarias no sistema de lubrificação do motor, periódicamente, deve-se substituir:",
    a : ["O filtro de óleo.", "A bomba de óleo.", "O filtro de ar.",]
  },
  {
    q : "Qual é a principal função das touches?",
    a : ["A transmissão do movimento das cames às hastes das válvulas.", "Lubrificar as válvulas", "Na zona central.", "Guiar as válvulas no seu deslocamento.",]
  },
  {
    q : "Durante o transporte de materiais pulverulentas em automóvel de mercadorias de caixa aberta, o condutor deve assegurar-se de que:",
    a : ["A mercadoria transportada não se espalhe pelo ar e pela faixa de rodagem.", "A mercadoria transportada não se espalhe pela caixa de carga.", "O peso da mercadoria não ultrapasse a tara do automóvel.",]
  } ,
  {
    q : "O nível do eletrólito da bateria deverá permanecer sempre:",
    a : ["Acima das placas.", "Abaixo das placas.", "A meio das placas", "Ao nível das placas.",]
  },
  {
    q : "Quando salta a faísca nos pólos das velas dum motor a gasolina a quatro tempos, qual a posição das válvulas de escape e de admissão?",
    a : ["Ambas fechadas.", "Ambas abertas.", "A de escape começa a abrir e a de admissão está fechada",]
  },
  {
    q : "A função do injetor nos motores Diesel é:",
    a : ["Injetar o gasóleo na câmara de combustão.", "Injetar a gasolina na câmara de explosão.", "Injetar a mistura combustível na quantidade e momento certos.",]
  },
  {
    q : "Quando se verifica excessiva dificuldade em engrenar uma mudança, a causa poderá ser:",
    a : ["Sincronizador avariado.", "Disco de embraiagem ligeiramente gasto.", "Caixa de velocidade com excesso de valvulina.",]
  } ,
  {
    q : "Num sistema de travagem do tipo hidráulico, purgar os travões consiste em:",
    a : ["Retirar o ar das tubagens.", "Filtrar o líquido do circuito.", "Afinar as maxilas.",]
  },
  {
    q : "Se o carburador tiver a bóia rota, qual poderá ser a consequência?",
    a : ["O motor afoga-se e pára.", "O motor ganha mais potência.", "Trabalha no relanti.",]
  },
  {
    q : "Os pneus de um automóvel ligeiro podem danificar-se seriamente quando:",
    a : ["Passam por buracos e sobem passeios.", "Circulam com pressão ligeiramente superior ao normal.", "Circulam em estradas com areia.",]
  },
  {
    q : "Alinhar a direção significa:",
    a : ["Afinar a convergência ou a divergência das rodas direcionais.", "Anular todas as folgas da direção.", "Regular as folgas da direção.",]
  } ,
  {
    q : "O dispositivo de acoplamento que em conjunto com um motor de elétrico permite que o motor de combustão arranque, denomina-se:",
    a : ["Bendix", "Bobine", "Solenoide",]
  },
  {
    q : "O sistema anti bloqueio ABS, actua:",
    a : ["Em cada uma das rodas independentes.", "Na transmissão", "Na Direção",]
  },
  {
    q : "Durante o transporte de materiais pulverulentas em automóvel pesado, o condutor deve assegurar-se de que:",
    a : ["A mercadoria transportada não se espalhe pelo ar e pela faixa de rodagem.", "A mercadoria transportada não se espalhe pela caixa de carga.", "O peso da mercadoria não ultrapasse a tara do automóvel.",]
  },
  {
    q : "Os orgãos que servem para impedir a passagem dos gases da câmara de explosão para o cárter são:",
    a : ["Os segmentos", "Os êmbolos", "As válvulas",]
  } ,
  {
    q : "A existência de ar nos tubos de um sistema de travagem hidráulico:",
    a : ["Pode tornar a travagem nula ou ineficiente.", "Produz uma travagem desigual nas várias rodas.", "Não afeta a eficiência de travagem.", "Aumenta a força de travagem.",]
  },
  {
    q : "O que se nota na condução de um automóvel que não tenha a direção alinhada?",
    a : ["Com o volante direito, o veículo desvia-se para um dos lados.", "O veículo trava mais numa das rodas.", "Não se nota nada de especial.",]
  },
  {
    q : "Se conduzir um veículo equipado com travões pneumáticos, qual o instrumento que deve dar atenção?",
    a : ["Manômetro de ar.", "Amperímetro", "Voltímetro", "Termómetro",]
  },
  {
    q : "O disco de embraiagem é empurrado contra o volante do motor:",
    a : ["Pelo prato de pressão.", "Pelo rolamento ou carvão de encosto.", "Pelo veio primário da caixa de velocidades.", "Pelo veio de transmissão.",]
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



