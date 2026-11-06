// Temas das 15 redações
const TEMAS = [
  "Mudanças no ciclo da água", "Canetas emagrecedoras e pressão estética", "Inteligência artificial e fake news",
  "Agronegócio e sustentabilidade", "Apostas online entre jovens", "Exclusão digital no Brasil",
  "Cultura fitness e padrão de beleza", "Cidadania indígena", "Algoritmos e consumo",
  "Preservação dos monumentos históricos", "Exploração espacial e responsabilidade social",
  "Fauna brasileira ameaçada", "Migração e xenofobia", "Eventos climáticos extremos", "Lixo eletrônico"
];

const cards = document.getElementById("cards");
const modal = document.getElementById("modal");
let atual = 0, ultimoFoco = null;

TEMAS.forEach((tema, i) => {
  const b = document.createElement("button");
  b.className = "card";
  b.innerHTML = `<span class="n">Redação ${i + 1}</span><span class="t">${tema}</span><span class="p">Ler texto</span>`;
  b.addEventListener("click", () => abrir(i));
  cards.appendChild(b);
});

function abrir(i) {
  ultimoFoco = document.activeElement;
  atual = i;
  mostrar();
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("fechar").focus();
}

function mostrar() {
  document.getElementById("modal-num").textContent = `Redação ${atual + 1} de ${TEMAS.length}`;
  document.getElementById("modal-titulo").textContent = TEMAS[atual];
  const box = document.getElementById("modal-texto");
  box.innerHTML = "";
  TEXTOS[atual + 1].forEach(par => {
    const p = document.createElement("p");
    p.textContent = par;
    box.appendChild(p);
  });
  document.querySelector(".modal-box").scrollTop = 0;
  document.getElementById("anterior").disabled = atual === 0;
  document.getElementById("proxima").disabled = atual === TEMAS.length - 1;
}

function fechar() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (ultimoFoco) ultimoFoco.focus();
}

document.getElementById("fechar").addEventListener("click", fechar);
document.getElementById("anterior").addEventListener("click", () => { atual--; mostrar(); });
document.getElementById("proxima").addEventListener("click", () => { atual++; mostrar(); });
modal.addEventListener("click", e => { if (e.target === modal) fechar(); });
document.addEventListener("keydown", e => {
  if (modal.hidden) return;
  if (e.key === "Escape") fechar();
  if (e.key === "ArrowLeft" && atual > 0) { atual--; mostrar(); }
  if (e.key === "ArrowRight" && atual < TEMAS.length - 1) { atual++; mostrar(); }
});