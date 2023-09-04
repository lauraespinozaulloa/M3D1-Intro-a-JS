let cantidad = document.querySelector(".cantidad");
let precio = document.querySelector(".precio-inicial");
let suma = document.querySelector(".adicion");
let resta = document.querySelector(".sustraccion");
let total = document.querySelector(".valor-total");

suma.addEventListener("click", ()=>{
    cantidad.innerHTML++; 
    total.innerHTML= cantidad.innerHTML * precio.innerHTML;
});

resta.addEventListener("click", ()=>{
    cantidad.innerHTML--;
    total.innerHTML = cantidad.innerHTML * precio.innerHTML;
});
