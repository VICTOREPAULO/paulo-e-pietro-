let nota1 = parseInt(document.querySelector(".nota1").textContent);
console.log(nota1);
let nota2 = parseInt(document.querySelector(".nota2").textContent);
console.log(nota2);
let nota3 = parseInt(document.querySelector(".nota3").textContent);
console.log(nota3);
 const resultado = (nota1+nota2+nota3)/3;
 console.log(resultado.toFixed(2));

let aprovado = document.querySelector(".notaParcial");

 if(resultado>60){
    aprovado.textContent = "Parabens macaco";
    //se for maior que 180 aparece como aprovado
 }
 else{
    
    //se nao, aparece como reprovado e mostra quanto de nota precisa

   const resultado2 = 180-(nota1+nota2);
   console.log(resultado2.toFixed(2));

   aprovado.textContent = "Burro, falta " + resultado2;


 }









 

