function neight(){
    var element= document.body
    element.classList.remove("day");
    element.classList.add("dark");
}
 function day(){
    var element= document.body
    element.classList.remove("dark");
    element.classList.add("day");
 }
 function migifos(){
    var element= document.getElementById("myGifos")
    element.classList.remove("myGifos");
    element.classList.add("dark-myGifos");
 }
 function migifos2(){
    var element= document.getElementById("myGifos")
    element.classList.remove("dark-myGifos");
    element.classList.add("myGifos");
 }

 function imagenAdarck(){
    var imagen = document.querySelector('.imag');
    imagen.src = 'Imagenes/dark.png'
 }
 function imagenLupa(){
  var imagen = document.getElementById('lupa');
  imagen.src = 'Imagenes/lupa.svg'
}
 function imagenAday(){
    var imagen = document.querySelector('.imag');
    imagen.src = 'Imagenes/gifOF_logo.png'
 }

 
 function displayTending(){
   var element= document.getElementById("ocultar")
    element.classList.remove("oculto");
    element.classList.add("oculto2");
 }

 function searchDisplay2() {
   var element= document.getElementById("displayBusc")
    element.classList.remove("displayBusc1");
    element.classList.add("displayBusc");
           
   }



   //SUGERIDOS//
   function tendinJonathan(){
    let resultado= document.querySelector("h5");
    resultado.innerHTML = j + " (resultados) ";  
    TendinJonathan()   
  }
   function TendinJonathan(){
      displayTending()
      searchDisplay2()
   const j = "jonathan";
    const apiKey = "NEFYUoCc2oGtJXUTgWQn1HCNbprr2z8n";
    const path = `http://api.giphy.com/v1/gifs/search?q=&api_key=${apiKey}&q=${j}`;
    fetch(path).then(function (res) {
        return res.json()
    }).then(function (json) {
        console.log (json.data[0].images.fixed_width.url)
        const resultsEl = document.getElementById ('resultBusc')
        let resultsHTML = ' '
       json.data.forEach (function(obj){
           console.log (obj)      
         resultsHTML += `<img 
                        src="${obj.images.fixed_width.url}" 
                        class= "items"
                        width="${obj.images.fixed_width.width}"
                        height="${obj.images.fixed_width.height}"
                        alt="${obj.title}"
                        >`
        })
        resultsEl.innerHTML = resultsHTML
    }).catch (function(err) {
      console.log (err.message)
    })
}
//SailorMun
function SailorMun(){
  let resultado= document.querySelector("h5");
  resultado.innerHTML = s + " (resultados) ";  
  sailorMun()   
}
function sailorMun(){
   displayTending()
   searchDisplay2()
const s = "Sailor Mun";
 const apiKey = "NEFYUoCc2oGtJXUTgWQn1HCNbprr2z8n";
 const path = `http://api.giphy.com/v1/gifs/search?q=&api_key=${apiKey}&q=${s}`;
 fetch(path).then(function (res) {
     return res.json()
 }).then(function (json) {
     console.log (json.data[0].images.fixed_width.url)
     const resultsEl = document.getElementById ('resultBusc')
     let resultsHTML = ' '
    json.data.forEach (function(obj){
        console.log (obj)      
      resultsHTML += `<img 
                     src="${obj.images.fixed_width.url}" 
                     class= "items"
                     width="${obj.images.fixed_width.width}"
                     height="${obj.images.fixed_width.height}"
                     alt="${obj.title}"
                     >`
     })
     resultsEl.innerHTML = resultsHTML
 }).catch (function(err) {
   console.log (err.message)
 })
}

//FabFive//
function FabFive(){
  let resultado= document.querySelector("h5");
  resultado.innerHTML = f + " (resultados) ";  
  fabFive()   
}
function fabFive(){
   displayTending()
   searchDisplay2()
const f = "Fab Five";
 const apiKey = "NEFYUoCc2oGtJXUTgWQn1HCNbprr2z8n";
 const path = `http://api.giphy.com/v1/gifs/search?q=&api_key=${apiKey}&q=${f}`;
 fetch(path).then(function (res) {
     return res.json()
 }).then(function (json) {
     console.log (json.data[0].images.fixed_width.url)
     const resultsEl = document.getElementById ('resultBusc')
     let resultsHTML = ' '
    json.data.forEach (function(obj){
        console.log (obj)      
      resultsHTML += `<img 
                     src="${obj.images.fixed_width.url}" 
                     class= "items"
                     width="${obj.images.fixed_width.width}"
                     height="${obj.images.fixed_width.height}"
                     alt="${obj.title}"
                     >`
     })
     resultsEl.innerHTML = resultsHTML
 }).catch (function(err) {
   console.log (err.message)
 })
}

//Unicornios//
function Unicorns(){
  let resultado= document.querySelector("h5");
  resultado.innerHTML = u + " (resultados) ";  
  unicorns()   
}

function unicorns(){
   displayTending()
   searchDisplay2()
   const u = "unicorns";
 const apiKey = "NEFYUoCc2oGtJXUTgWQn1HCNbprr2z8n";
 const path = `http://api.giphy.com/v1/gifs/search?q=&api_key=${apiKey}&q=${u}`;
 fetch(path).then(function (res) {
     return res.json()
 }).then(function (json) {
     console.log (json.data[0].images.fixed_width.url)
     const resultsEl = document.getElementById ('resultBusc')
     let resultsHTML = ' '
    json.data.forEach (function(obj){
        console.log (obj)      
      resultsHTML += `<img 
                     src="${obj.images.fixed_width.url}" 
                     class= "items"
                     width="${obj.images.fixed_width.width}"
                     height="${obj.images.fixed_width.height}"
                     alt="${obj.title}"
                     >`
     })
     resultsEl.innerHTML = resultsHTML
 }).catch (function(err) {
   console.log (err.message)
 })
}