// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Exploração perceptiva é:",
    a : ["Procedimentos do condutor, para recolher do ambiente rodoviário, as informações importantes para a tarefa de condução.", "Procedimentos do condutor para manter a trajectória do veículo controlada.", "Procedimentos do condutor para realizar manobras mais rapidamente.",]
  },
  {
    q : "Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):",
    a : ["Automóveis ligeiros de mercadorias sem reboque dentro das localidades 60, fora das localidades 100.", "Automóveis ligeiros de mercadorias sem reboque dentro das localidades 50, fora das localidades 100.", "Automóveis ligeiros de mercadorias sem reboque dentro das localidades 50, fora das localidades 90.", "Automóveis ligeiros de mercadorias sem reboque dentro das localidades 60, fora das localidades 80.",]
  },
  {
    q : "Factores de risco serão.",
    a : ["Todos os factores que aumentem o risco de acidente.", "Todas as marcas rodoviárias que contenham riscos.", "Todos os factores externos ao condutor.", "Todos os elementos exteriores a um veículo que possam provocar riscos na pintura.",]
  },
  {
    q : "O vento afecta a estabilidade do veículo:",
    a : ["Especialmente em zonas abertas de planície, zonas marítimas costeiras ou de montanha.", "Especialmente em zonas de parques de estacionamento fechados.", "Especialmente em zonas urbanas com muitos edifícios altos.", "Não",]
  },
  {
    q : "A definição de paragem é:",
    a : ["Imobilização de um veículo pelo tempo estritamente necessário para a estrada ou saída de passageiros ou para breves operações de carga ou descarga, desde que o condutor esteja pronto a retomar a marcha.", "Estacionamento de um veículo pelo tempo estritamente necessário para a entrada ou saída de passageiros ou para breves operações de carga ou descarga.", "Imobilização de um veículo pelo tempo estritamente necessário para a entrada ou saída de passageiros ou para breves operações de carga ou desdescarga.",]
  },
  {
    q : "Quando transitem fora das localidades, os automóveis pesados devem guardar entre si:",
    a : ["Um intervalo mínimo de 50 metros, excepto durante o tempo necessário para fazer uma ultrapassagem.", "Um intervalo mínimo de 30 metros, excepto durante o tempo necessário para faze r uma ultrapassagem .", "Uma distância que lhe permita ver as rodas de trás do que circula à sua frente.", "Um intervalo mínimo de 80 metros, excepto durante o tempo necessário para fazer um a ultrapassagem.",]
  },
  {
    q : "A distância de reacção é influenciada por:",
    a : ["Velocidade e tempo de reacção.", "Apenas por factores externos ao condutor.", "Tempo de reacção e estado da via.", "Distância de travagem e tempo de reacção.",]
  },
  {
    q : "Em caso de nevoeiro (cacimba), o que devemos ter presente, ao considerar a distância de segurança?",
    a : ["Que há zonas mais densas onde a visibilidade repentinamente se reduz.", "Que como a velocidade praticada pelos veículos é menor devemos seguir mais perto possível do veículo da frente.", "Que basta manter uma distância pequena independentemente da velocidade.", "Que essa distância depende unicamente do tipo de veículo que à nossa frente.",]
  },
  {
    q : "Se existir combustível despejado na via, deve:",
    a : ["Cobri-lo com terra para evitar que este chegue aos esgotos pluviais e para minimizar o risco de incêndio ou derrapagens.", "Cobri-lo com ramos para evitar que este chegue aos esgotos pluviais e para minimizar o risco de incêndio ou derrapagens.", "Lavar a via com água para evitar que este chegue aos esgotos pluviais e para minimizar o risco de incêndio ou derrapagens.",]
  } ,
  {
    q : "Numa paragem ou estacionamento irregular:",
    a : ["A contravenção é punida com a multa de 500,00 Mt.", "A contravenção é punida com a multa de 3000,00 Mt.", "A contravenção é punida com a multa de 1000,00 Mt.", "A contravenção é punida com a multa de 2000,00 Mt.",]
  },
  {
    q : "Clique na afirmação incorrecta:",
    a : ["Encontrando-se dependente do tipo de via, a distância de reacção é maior em auto-estrada do que em vias urbanas:", "Regra geral, as condições da circulação urbana levam ao aumento do consumo de combustível. ​", "O intervalo de tempo de segurança corresponde ao tempo decorrido desde que o veículo à minha frente passa por um ponto fixo de referência até passarmos por esse mesmo ponto.", "O tempo de reacção depende de factores internos do condutor.",]
  },
  {
    q : "O condutor de veículo utilizado no transporte colectivo de passageiros, só pode parar nas faixas de rodagem para:",
    a : ["A entrada e saída de passageiros nos locais especialmente destinados a esse fim.", "A entrada e saída de passageiros, em qualquer lugar que lhe de mais jeito.", "Carregar e descarregar mercadorias, só durante o dia.", "Carregar e descarregar mercadorias, só durante a noite.",]
  },
  {
    q : "Assinale a afirmação falsa relativa a eventuais efeitos da chuva intensa.",
    a : ["Quando passar num lençol de água e o veículo deslizar, é aconselhável pressionar o travão até que a aderência das rodas seja retomada", "A água acumulada no solo pode reduzir a eficácia do funcionamento dos travões.", "O aquaplanning pode ser agravado pelo mau estado dos pneumáticos e pela circulação com velocidade  excessiva.", "Na faixa de rodagem sempre que esteja sinalizada com linha longitudinal contínua e a distância entre esta e o veículo seja inferior a 3 metros",]
  } ,
  {
    q : "Quem exceder de 40 Km/h até 60 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, dentro das localidades é punido:",
    a : ["Com multa de 4 000,00 Mt e contravenção grave.", "Com multa de 4.000,00 Mt e contravenção média.", "Com multa de 6.000,00 Mt e contravenção grave.", "Com multa de 2.000,00 Mt e contravenção grave.",]
  },
  {
    q : "Quando se circula numa zona com grande intensidade de vento, além de reduzir a velocidade, qual deve ser o comportamento a adoptar:",
    a : ["Segurar o volante com maior firmeza.", "Acelerar para passar mais rapidamente pela zona onde o vento sopra forte.", "Segurar o volante com especial suavidade por forma a não contrariar as oscilações do veículo.", "Rodar ligeiramente o volante para o lado contrário à direcção do vento..",]
  },
  {
    q : "Das seguintes, qual ou quais não fazem parte das virtudes profissionais necessárias para a boa condução de veículos automóveis:",
    a : ["Egoísmo.", "Cortesia e boas maneiras.", "Responsabilidade.", "Honestidade.",]
  },
  {
    q : "Em especial á noite, com nevoeiro (cacimba) as luzes de estrada:",
    a : ["Devem ser evitadas porque reflectem-se no nevoeiro impedindo a visibilidade a maior distancia.", "São as mais aconselháveis para garantir alguma visibilidade.", "Devem ser evitadas porque permitem uma maior visibilidade a maior distancia.", "Devem ser usadas porque permitem uma maior visibilidade a maior distância.",]
  } ,
  {
    q : "O vento afecta a estabilidade do veículo:",
    a : ["Particularmente quando é muito forte e sopra lateralmente.", "Particularmente quando é muito forte em tuneis.", "Particularmente em veículos de caixa aberta.", "Não",]
  },
  {
    q : "A distância de travagem é afectada, em circulação sob condições atmosféricas adversas?",
    a : ["Sim", "Sim, mas só afecta o tempo de reacção.", "Não", "Afecta principalmente a distância de reação.",]
  },
  {
    q : "Nota-se mais a influência do vento no comportamento dinâmico do veículo:",
    a : ["No atravessamento de pontes ou viadutos, em especial em vias de velocidade mais elevada.", "No atravessamento de localidades com prédios altos.", "Nos de caixa aberta comparados com os de caixa mais alta e fechada.",]
  },
  {
    q : "Quem exceder em mais de 80 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, fora das localidades é punido:",
    a : ["Com multa de 8.000,00 Mt e contravenção grave.", "Com multa de 8.000,00 Mt e contravenção leve.", "Com multa de 8.000,00 Mt e contravenção média.", "Com multa de 6.000,00 Mt e contravenção grave.",]
  } ,
  {
    q : "Os veículos com uma massa maior:",
    a : ["Estão sujeitos a forças físicas maiores em situação de mudança de direção, aceleração e travagem.", "A massa do veículo não interfere na dinâmica do veículo.", "Estão sujeitos a forças físicas menores em situação de mudança de direção, aceleração e travagem.",]
  },
  {
    q : "O que indica uma curta distância existente entre os veículos que circulam á minha frente?",
    a : ["Que devo moderar a velocidade.", "Que devo ultrapassar para não estar em perigo. ​", "Que vou entrar numa localidade.", "Que circulo mais rápido do que eles.",]
  },
  {
    q : "A expressão “TRAVAR COM O MOTOR” significa:",
    a : ["Engrenar uma mudança de maior força em andamento e não acelerar.", "Utilizar o motor de arranque para auxiliar a travagem.", "Desligar o motor, mantendo uma mudança engrenada.", "Engrenar uma mudança de menor força em andamento e não acelerar.",]
  },
  {
    q : "Manter uma distância de segurança relativamente aos veículos à frente e à rectaguarda:",
    a : ["Garante espaço de visibilidade, de acção e de reacção.", "Não é necessário dentro das localidades, já que os veículos circulam a uma velocidade reduzida.", "Garante que não transita em excesso de velocidade.", "Não é necessário dado que em relação aos de trás não posso fazer nada.",]
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



