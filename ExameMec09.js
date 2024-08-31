// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Qual o fio que, no circuito de inflamação por bateria, transporta corrente de baixa tensão?",
    a : ["O que vai da bobine ao borne lateral do distribuidor.", "O que vai da bateria ao motor de arranque.", "O que vai da bateria às velas de inflamação.",]
  },
  {
    q : "Quando o motor funciona com o filtro de ar muito sujo:",
    a : ["O motor tem dificuldades em acelerar e consome mais combustível.", "As impurezas entram para o cilindro e a combustão torna-se deficiente", "O motor tem tendência a acelerar rapidamente e consome mais combustível.",]
  },
  {
    q : "Se o ângulo de convergência das rodas está muito fechado, os pneus da frente gastam-se mais:",
    a : ["Nos bordos exteriores.", "Nos bordos interiores", "Na parte central",]
  },
  {
    q : "Nos motores a gasolina, a bobine tem como função transformar a corrente:",
    a : ["De baixa em alta tensão.", "Contínua em alterna.", "De alta em baixa tensão",]
  },
  {
    q : "Como se verifica o nível do diferencial?",
    a : ["Desapertando o bujão.", "Com vareta graduada.", "Contrariar a inclinação do veículo nas curvas.",]
  },
  {
    q : "O ponteiro do indicador de temperatura subiu demasiado. O condutor fica avisado de que:",
    a : ["A bomba de água deixou de funcionar.", "A bomba de combustível não funciona.", "A temperatura está ideal.",]
  },
  {
    q : "Se os pneus das rodas da frente apresentarem desgaste excessivo num dos bordos laterais, qual poderá ser a causa?",
    a : ["Direção desalinhada.", "Pressão excessivamente baixa.", "Pressão excessivamente alta.",]
  },
  {
    q : "Qual o sistema de suspensão mecânica, mais utilizado no eixo dianteiro?",
    a : ["Sistema independente ", "Sistema pneumático.", "Sistema de eixo rígido.",]
  },
  {
    q : "Qual o fio que, no circuito de inflamação por bateria, transporta corrente de baixa tensão?",
    a : ["O que vai da bobine ao borne lateral do distribuidor.", "O que vai da bateria às velas de inflamação.", "O que vai da bateria ao motor de arranque.",]
  } ,
  {
    q : "O termóstato abre e fecha por ação:",
    a : ["Da temperatura da água.", "Da bomba da água.", "Da correia da ventoinha.",]
  },
  {
    q : "Com o motor parado como se verifica se o motor tem óleo ao nível?",
    a : ["Por meio da vareta graduada que existe no flanco do motor..", "Por meio da vareta graduada que existe na cabeça do motor.", "Por meio do respetivo manómetro.",]
  },
  {
    q : "Como se chama o órgão que impede a passagem de impurezas do óleo para os canais de lubrificação?",
    a : ["Filtro de óleo.", "Filtro de ar.", "Manómetro de óleo.",]
  },
  {
    q : "A suspensão de rodas independentes tem duas características muito importantes, Quais são?",
    a : ["Grande adaptabilidade de cada roda ao solo e redução do peso não suspenso.", "Extrema simplicidade do conjunto e reduzida manutenção.", "Extrema simplicidade do conjunto e elevada capacidade de carga.",]
  } ,
  {
    q : "Um dos cuidados a ter com os veículos equipados com travões de ar comprimido é:",
    a : ["Nunca parar o motor enquanto o veículo estiver em andamento.", "Nunca parar o motor enquanto o ar não encher o compressor.", "Nunca deixar esgotar o ar dos pneus.",]
  },
  {
    q : "Os órgãos de suspensão dos veículos automóveis são os que se destinam:",
    a : ["A amortecer ou anular as oscilações bruscas provenientes das irregularidades do terreno.", "A ligar e desligar o motor à caixa de velocidades.", "A suspender o veículo quando os pneus furam.",]
  },
  {
    q : "A ruptura precoce das juntas de transmissão, elásticas ou não, pode dever-se a:",
    a : ["Brusquidão a embraiar, principalmente com o veículo carregado.", "Brusquidão a desembraiar, principalmente com o veículo sob carga.", "Efeito diferencial pouco alcançado",]
  },
  {
    q : "Uma carga muito pesada e pouco volumosa colocada muito à frente na caixa de carga:",
    a : ["Aumenta excessivamente o peso incidente sobre as rodas diretrizes, tornado difícil o manejo da direção.", "Aumenta excessivamente o peso incidente sobre as rodas traseiras, sobrecarregando o diferencial.", "Pode provocar o arrebentamento das rodas de trás.",]
  } ,
  {
    q : "O alternador tem a seguinte finalidade:",
    a : ["Alimentar a bateria.", "Transformar a corrente da baixa em alta tensão.", "Dar a primeira rotação ao motor.",]
  },
  {
    q : "As velas de incandescência servem para:",
    a : ["Aquecer as câmaras de combustão, facilitando o arranque a frio do motor Diesel.", "Alimentar as lâmpadas de incandescências dos faróis de iluminação do veículo.", "Aquecer as câmaras de combustão, facilitando o arranque a frio do motor à gasolina.",]
  },
  {
    q : "Qual o combustível utilizado nos motores Diesel?",
    a : ["Gasóleo.", "Gasóleo ou gasolina.", "Gasolina e ar.",]
  },
  {
    q : "A valvulina é utilizada:",
    a : ["Na caixa de velocidades.", "Nos travões.", "No motor diesel.",]
  } ,
  {
    q : "Um dos cuidados que requer a bateria é:",
    a : ["Conservar os bornes limpos e untados com massa consistente ou vazelina.", "Conservar os bornes limpos e untados com massa consistente ou àgua destilada.", "Conservar os bornes limpos e untados com vazelina ou electrólito.",]
  },
  {
    q : "Qual o instrumento que serve para indicar se a lubrificação do motor se está a fazer em boas ou más condições?",
    a : ["O manómetro.", "O amperímetro", "O dinamómetro",]
  },
  {
    q : "O óleo da lubrificação dos motores poderá servir nos travões hidráulicos ?",
    a : ["Não , porque estraga as borrachas no sistema de travões.", "Sim, desde que seja óleo 15W40.", "Sim, nos travões de veículos ligeiros.",]
  },
  {
    q : "Um pneu com a medida 195R15 deverá ser utilizado numa roda com jante:",
    a : ["De diâmetro igual a 15 polegadas.", "De diâmetro igual a 19,5 cm", "De diâmetro igual a 15 cm.",]
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



