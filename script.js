//Création d'une boucle pour intéragir avec l'API PokeApi afin de récupérer des informations sur les 15 premiers pokemons.

for(let i =1; i < 16; i++){
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
   .then(response => response.json())
   .then(data => {

    //Permet l'ajout d'une carte pokémon dans la div pokemonContainer.

     document.querySelector('#pokemonContainer').innerHTML += `
     <div class="pokemon ${data.types[0].type.name}">
              <div class="imgContainer">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="${data.name}"/>
              </div>
              <div class="info">
                  <h3 class="name">${data.name[0].toUpperCase()}${data.name.slice(1)}</h3>
                  <span class="type">Type: <span>${data.types[0].type.name[0].toUpperCase()}${data.types[0].type.name.slice(1)}</span></span>
              </div>
          </div>
  `
  
   });
  }

  //Mise en place d'un compteur avec la variable offset.
  
  let offset = 0;

  //Mise sur écoute du clic sur le bouton Next qui permettra de déclencher une fonction qui affichera les informations de 15 pokémons de plus.
  
  document.querySelector('#next').addEventListener('click',
  
    function () {
  
    //Incrémente de 15 la varibale offset. 
      offset+= 15;

      //Création d'une boucle permettant d'afficher les 15 pokémons suivants
  
     for(let i = offset+1; i <= offset+15; i++){
  
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
       .then(response => response.json())
       .then(data => {
         document.querySelector('#pokemonContainer').innerHTML += `
         <div class="pokemon ${data.types[0].type.name} ">
                  <div class="imgContainer">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="${data.name}"/>
                  </div>
                  <div class="info">
                      <h3 class="name">${data.name[0].toUpperCase()}${data.name.slice(1)}</h3>
                      <span class="type">Type: <span>${data.types[0].type.name[0].toUpperCase()}${data.types[0].type.name.slice(1)}</span></span>
                  </div>
              </div>
  `
            
  
       });
   }
  });

