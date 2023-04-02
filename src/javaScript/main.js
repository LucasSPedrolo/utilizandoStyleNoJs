const secaoPrincipal = document.querySelector(".secaoPrincipal");
const ps = secaoPrincipal.querySelectorAll("p");
const estiloBody = getComputedStyle(document.body);
const backGroundBody = estiloBody.backgroundColor;


for (valor of ps){
    valor.style.backgroundColor = backGroundBody;
    valor.style.color = "#fff";
}