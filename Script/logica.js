
function menuCambio(id_Div,nombre) {
  if(id_Div.className == nombre + "Oculto") {
      id_Div.className = nombre + "Visible";
  } else {
      id_Div.className = nombre + "Oculto";
  }
}
function cambiarModoDark(){
        neight()
        migifos()
        imagenAdarck() 
}
function cambiarModoLight(){
        day()
        migifos2()
        imagenAday()
}


//DISPLAY-SEARCH-BTN
function searchDisplay() {
imagenLupa()  
document.getElementById("displayBusc").setAttribute("class", "displayBusc1");
document.getElementById("btnBusc").setAttribute("class","boton_buscar2" );
        
}


//SUJERIDOS//
    const j = "Jonathan Vanness honey";
    const apiKey = "NEFYUoCc2oGtJXUTgWQn1HCNbprr2z8n";
    const path = `http://api.giphy.com/v1/gifs/search?q=&api_key=${apiKey}&limit=1&q=${j}`;
    fetch(path).then(function (res) {
        return res.json()
    }).then(function (json) {
        console.log (json.data[0].images.fixed_width.url)
        const resultsEl = document.getElementById ('jonathan')
        let resultsHTML = ' '
       json.data.forEach (function(obj){
           console.log (obj)      
         resultsHTML += `<img 
                        src="${obj.images.fixed_width.url}" 
                        class= "item"
                        width="${obj.images.fixed_width.width}"
                        height="${obj.images.fixed_width.height}"
                        alt="${obj.title}"
                        >`
        })
        resultsEl.innerHTML = resultsHTML
    }).catch (function(err) {
      console.log (err.message)
    })
    
    //SailorMun//
    const s = "Sailor Mercury";
    const path2 = `http://api.giphy.com/v1/gifs/search?q=&api_key=${apiKey}&limit=1&q=${s}`;
    fetch(path2).then(function (res) {
        return res.json()
    }).then(function (json) {
        console.log (json.data[0].images.fixed_width.url)
        const resultsEl = document.getElementById ('SailorMun')
        let resultsHTML = ' '
       json.data.forEach (function(obj){
           console.log (obj)      
         resultsHTML += `<img 
                        src="${obj.images.fixed_width.url}" 
                        class= "item"
                        width="${obj.images.fixed_width.width}"
                        height="${obj.images.fixed_width.height}"
                        alt="${obj.title}"
                        >`
        })
        resultsEl.innerHTML = resultsHTML
    }).catch (function(err) {
      console.log (err.message)
    }) 
    //FabFive//
    const f = "Fab five";
    const path3 = `http://api.giphy.com/v1/gifs/search?q=&api_key=${apiKey}&limit=1&q=${f}`;
    fetch(path3).then(function (res) {
        return res.json()
    }).then(function (json) {
        console.log (json.data[0].images.fixed_width.url)
        const resultsEl = document.getElementById ('FabFive')
        let resultsHTML = ' '
       json.data.forEach (function(obj){
           console.log (obj)      
         resultsHTML += `<img 
                        src="${obj.images.fixed_width.url}" 
                        class="item"
                        width="${obj.images.fixed_width.width}"
                        height="${obj.images.fixed_width.height}"
                        alt="${obj.title}"
                        >`
        })
        resultsEl.innerHTML = resultsHTML
    }).catch (function(err) {
      console.log (err.message)
    }) 
   //Unicornios//
   const u = "Unicornio";   
    const path4 = `http://api.giphy.com/v1/gifs/search?q=&api_key=${apiKey}&limit=1&q=${u}`;
    fetch(path4).then(function (res) {
        return res.json()
    }).then(function (json) {
        console.log (json.data[0].images.fixed_width.url)
        const resultsEl = document.getElementById ('UnicornsRainbows')
        let resultsHTML = ' '
       json.data.forEach (function(obj){
           console.log (obj)      
         resultsHTML += `<img 
                        src="${obj.images.fixed_width.url}" 
                        class="item"
                        width="${obj.images.fixed_width.width}"
                        height="${obj.images.fixed_width.height}"
                        alt="${obj.title}"
                        >`
        })
        resultsEl.innerHTML = resultsHTML        
    }).catch (function(err) {
      console.log (err.message)
    })  

  //TENDENCIAS//
const resultadoTendencias = document.getElementById("gifTendencias")
const paths = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
fetch(paths)
  .then(response => response.json())
  .then(json => {
    json.data
      .map(gif => gif.images.fixed_height.url)
      .forEach(url => {
        let img = document.createElement('img')
        img.src = url
        document.getElementById("gifTendencias").appendChild(img).classList.add("items");
      })
  })
  .catch(error => document.body.appendChild = error)

 //SEARCH -BOTON//
 function buscars(){
  let busqueda= document.getElementById("inputBusc")
  console.log(busqueda)
  let q=busqueda.value
  let resultado= document.querySelector("h5");
  resultado.innerHTML = q + " (resultados) ";  
  search(q)
  displayTending()
  searchDisplay2()
  
}
 
function search (q){
 const path5 = `http://api.giphy.com/v1/gifs/search?q=&api_key=${apiKey}&q=${q}`
 fetch(path5).then(function (res) {
  return res.json()
}).then(function (json) {
  console.log (json.data[0].images.fixed_width.url)
  const resultsEl = document.getElementById ('resultBusc')
  let resultsHTML = " "
 json.data.forEach (function(obj){
     console.log (obj)      
   resultsHTML += `<img 
                  src="${obj.images.fixed_width.url}" 
                  class="items"                  
                  alt="${obj.title}"
                  >`
  })
  resultsEl.innerHTML = resultsHTML
}).catch (function(err) {
console.log (err.message)
})  

}
 


