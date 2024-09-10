// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Fumar enquanto conduz:",
    a : ["pode afectar a atenção na condução.", "reduz a agressividade do condutor.", "é proibido.", "é aconselhável, pois ajuda a manter a atenção.",]
  },
  {
    q : "Circular com os pneus do veículo velhos:",
    a : ["é perigoso, porque endurecem e agarram-se pior a estrada.", "só é perigoso se os pneus tem cortes ou deformações.", "não é perigoso se tem o piso com uma boa profundidade.",]
  },
  {
    q : "É perigoso conduzir quando o condutor está cansado?",
    a : ["Sim, porque o condutor demora mais tempo a reagir.", "Não há perigo, já que o cansaço relaxa.", "Não, porque se conduz mais devagar.", "Sim, mais só quando se conduz dentro das localidades.",]
  },
  {
    q : "Para concluir uma ultrapassagem com segurança, o condutor deve retornar a esquerda.",
    a : ["depois de ter a certeza que não resulta perigo para os veículos ultrapassados.", "depois de 200 metros á frente do veículo ultrapassado.", "sem necessidade de sinalizar o retorno á esquerda.", "só quando se apresenta outro veículo em sentido contrário.",]
  },
  {
    q : "Que deve fazer o condutor perante a marca rodoviária que delimita a via de trânsito da esquerda?",
    a : ["Abrandar a marcha, se circula pela via de trânsito que delimita.", "Abrandar a marcha, se circula pela via de trânsito da direita.", "Aumentar a velocidade, se circula pela via de trânsito que delimita.", "Parar",]
  },
  {
    q : "Têm prioridade de passagem os condutores:",
    a : ["que transitem pelas auto-estradas, em relação aos veículos que se apresentem pelos ramais de acesso.", "que saiam de um prédio ou caminho particular.", "que entrem numa rotunda.", "que entrem numa auto-estrada pelos respetivos ramais de acesso.",]
  },
  {
    q : "Pode transportar uma criança neste motociclo?",
    a : ["Sim, se tem pelo menos 7 anos e leva o capacete devidamente ajustado e apertado.", "Sim, num assento adicional.", "Não, nunca.", "Sim, se tem pelo menos 3 anos e leva o capacete devidamente ajustado e apertado.",]
  },
  {
    q : "Para garantir uma proteção adequada, os sistemas de retenção de crianças devem ser:",
    a : ["Adequados ao tamanho e peso da criança.", "Colocados sem cautela em cima dos bancos do veículo.", "Da cor dos estofos do veículo.",]
  },
  {
    q : "Dentro das localidades, onde é proibido parar o seu veículo?",
    a : ["A menos de 5 metros para um e outro lado dos cruzamentos, entroncamentos e rotundas.", "A menos de 50 metros dos cruzamentos ou entroncamentos.", "No lado da faixa de rodagem em que esteja uma linha descontínua de cor amarela.", "Em segunda fila.",]
  } ,
  {
    q : "Com que frequência deve verificar o condutor a pressão dos pneus do seu veículo?",
    a : ["Duas vezes por mês, quando os pneus estão frios.", "Não é necessário verificar a pressão dos pneus.", "Duas vezes por mês, quando os pneus estão quentes.", "Apenas ao fazer uma viagem longa.",]
  },
  {
    q : "Entrada/Saida numa rotinda, quem tem prioridade de passagem?",
    a : ["O condutor que circula dentro da rotunda.", "O condutor que chegar primeiro.", "O condutor que entra na rotunda.", "O condutor que circule com uma velocidade mais elevada.",]
  },
  {
    q : "A condução defensiva é importante?",
    a : ["Sim, evita grande transtornos, e acidentes na via pública", "Não, se desejar ser rápido",]
  },
  {
    q : "Para conduzir com segurança, é necessário colocar corretamente as mãos no volante?",
    a : ["Sim, sempre", "Não, só é necessário regular o encosto de cabeça.", "Apenas quando se conduz nas auto-estradas.", "Depende da intensidade do trânsito",]
  } ,
  {
    q : "Que deve fazer para evitar atropelar um ciclista?",
    a : ["Deixar uma separação lateral suficiente para o ultrapassar com segurança.", "Aproximar-se dele para que se desvie para a esquerda.", "Buzinar quando se aproximar dele.", "Aumentar a velocidade para ultrapassa-lo rapidamente.",]
  },
  {
    q : "Nesta via de duplo sentido, onde deve estacionar se não existem locais destinados para este fim?",
    a : ["Paralelamente ao lado esquerdo no sentido da marcha.", "O mais próximo possível do limite direito da faixa de rodagem, paralelamente a esta e no sentido da marcha.", "Nesta situação é proibido parar ou estacionar.", "Nos passeios.",]
  },
  {
    q : "Quando se devem utilizar as luzes de estrada?",
    a : ["Quando a iluminação não permita uma boa visibilidade e não cause encandeamento aos outros utentes.", "Na aproximação a uma passagem de nível fechada.", "No cruzamento com outros veículos.", "Durante a paragem ou detenção da marcha do veículo.",]
  },
  {
    q : "Quando os pneus tem uma pressão incorreta:",
    a : ["Desgastam-se mais e correm maior risco de rebentar.", "Melhora a estabilidade do veículo e o seu conforto.", "Desgastam-se menos e tem menos risco de rebentar.", "Consome-se menos combustível.",]
  } ,
  {
    q : "O condutor que tenha ficado imobilizado num cruzamento regulado por sinalização luminosa, deve:",
    a : ["Sair dele, mesmo que não esteja autorizado a avançar e não embarace o trânsito de outros utentes.", "Esperar que a sinalização luminosa mude para verde.", "Ligar as luzes de perigo e esperar que a sinalização luminosa mude para verde.", "Utilizar os sinais sonoros até que o deixem avançar.",]
  },
  {
    q : "O que significa responsabilidade moral?",
    a : ["Responder pelos seus próprios actos.", "Responder perante o Tribunal.", "Prestar contas perante os membros da sociedade.",]
  },
  {
    q : "quando existe dificuldade na recolha de informação, a velocidade:",
    a : ["Deve diminuir.", "Deve manter-se, desde que as luzes do veículo estejam ligadas", "Deve aumentar.",]
  },
  {
    q : "Para não causar perigo e por em causa a segurança das pessoas e das coisas, os condutores devem:",
    a : ["regular a velocidade atendendo as características do veiculo, as condições da via e ao estado do condutor.", "ficar em ponto morto nas descidas muito inclinadas.", "circular nos limites máximos de velocidade das estradas.", "circular abaixo dos limites mínimos de velocidade.",]
  } ,
  {
    q : "Que luz aparece antes de acender a luz amarela de um semáforo?",
    a : ["A luz verde.", "A luz amarela intermitente.", "A luz vermelha.",]
  },
  {
    q : "O condutor que esta sob os efeitos do sono:",
    a : ["leva mais tempo para reagir e comete mais erros.", "reage mais rapidamente do que em condições normais.", "é mais concentrado e menos distraído.", "leva menos tempo a tomar decisões",]
  },
  {
    q : "Qual dos seguintes procedimentos causa maior distração durante a condução?",
    a : ["Utilizar o telefone móvel.", "Sinalizar as manobras.", "Observar os sinais.", "Ouvir a rádio.",]
  },
  {
    q : "Os condutores devem ceder passagem:",
    a : ["aos peões que tenham iniciado a travessia sobre a passagem para peões.", "aos condutores que saiam de um parque de estacionamento.", "aos condutores de velocípedes que se apresentem pela direita numa intersecção.", "aos veículos que se apresentem nos ramais de acesso das auto-estradas.",]
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



