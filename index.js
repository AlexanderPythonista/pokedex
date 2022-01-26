const pokemonContainer = document.querySelector('.pokemon-container')
const spinner = document.querySelector('#spinner')
const previous = document.querySelector('#previous')
const next = document.querySelector('#next')
const home = document.querySelector('#home')
const form= document.querySelector('#form')
const submit= document.querySelector('#submit')
const pokedex= document.querySelector('#pokedex')
let offset=1
let limit=8
submit.preventDefault

submit.addEventListener('click', (e)=>{
    if(form.value.length !=0){
    submit.preventDefault
    offset =1
    removeChildNodes(pokemonContainer)
    fetchPokemons(offset,limit)
    const input = document.querySelector('#form').value=''
    
}})
pokedex.addEventListener('click', (e)=>{
    if(form.value.length !=0){
    submit.preventDefault
    offset =1
    removeChildNodes(pokemonContainer)
    fetchPokemons(offset,limit)
    const input = document.querySelector('#form').value=''
    
}})
previous.addEventListener('click', ()=>{
    if(offset!=1){
    removeChildNodes(pokemonContainer)
    offset -=9
    fetchPokemons(offset,limit)
}})
form.addEventListener('keyup', (e)=>{
    e.preventDefault()
const input = document.querySelector('#form')
const form = input.value.toLowerCase()


if(form.length ==0){
    offset =1
    fetchPokemons(offset,limit)
}

input.reset
removeChildNodes(pokemonContainer)
fetchPokemon(form)
offset =10


})
home.addEventListener('click', ()=>{
    if(offset!=1){
    removeChildNodes(pokemonContainer)
    offset =1
    fetchPokemons(offset,limit)
}})
next.addEventListener('click', ()=>{
    offset +=9
    removeChildNodes(pokemonContainer)
    fetchPokemons(offset,limit)
})

async function  fetchPokemon(id) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res=>res.json())
    .then(async data =>{
        await createPokemon(data)
        spinner.style.display="none"
        alert.log('Que Miras ? te crees hacker por pulsar F12???')

    })
}

async function fetchPokemons(offset,limit){
    spinner.style.display="block"
    for(let i =offset; i<=offset + limit ; i++){
      await   fetchPokemon(i)
    }
}

async function createPokemon(pokemon){

    const flipCard= document.createElement('div')
    flipCard.classList.add('flip-card')

    const cardContainer= document.createElement('div')
    cardContainer.classList.add('card-container')

    flipCard.appendChild(cardContainer)

    const card= document.createElement('div')
    await card.classList.add('pokemon-block')

    const spriteContainer = document.createElement('div')
    await spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite)

    const number = document.createElement('p')
    number.textContent= `#${pokemon.id.toString().padStart(3,0)}`


    const name = document.createElement('p')
    name.classList.add('name')
    const type = document.createElement('button')
    type.classList.add('type')
    const type2 = document.createElement('button')
    type2.classList.add('type2')
    name.textContent = pokemon.name
    type.textContent=pokemon.types[0].type.name
    
    try{
    type2.textContent=pokemon.types[1].type.name
    
}
catch{
   
    type2.classList.add('none')
}
    card.appendChild(spriteContainer)
    card.appendChild(number)
    card.appendChild(name)
  
    if(type.textContent == 'fire'){
        type.classList.add('btn-r')
        
    }if(type.textContent == 'water'){
        type.classList.add('btn-w')
    }if(type.textContent == 'poison'){
        type.classList.add('btn-p')
    }if(type.textContent == 'grass'){
        type.classList.add('btn-g')
    }
    if(type.textContent == 'flying'){
        type.classList.add('btn-f')
    }if(type.textContent == 'normal'){
        type.classList.add('btn-n')
    }if(type.textContent == 'bug'){
        type.classList.add('btn-b')
    }if(type.textContent == 'electric'){
        type.classList.add('btn-e')
    }if(type.textContent == 'ground'){
        type.classList.add('btn-gd')
    }if(type.textContent == 'fairy'){
        type.classList.add('btn-fy')
    }if(type.textContent == 'fighting'){
        type.classList.add('btn-fg')
    }if(type.textContent == 'psychic'){
        type.classList.add('btn-pc')
    }if(type.textContent == 'rock'){
        type.classList.add('btn-rk')
    }if(type.textContent == 'steel'){
        type.classList.add('btn-s')
    }
    if(type.textContent == 'ice'){
        type.classList.add('btn-i')
    }if(type.textContent == 'ghost'){
        type.classList.add('btn-gh')
    }if(type.textContent == 'dragon'){
        type.classList.add('btn-d')
    }if(type.textContent == 'dark'){
        type.classList.add('btn-dk')
    }



    if(type2.textContent == 'fire'){
        type2.classList.add('btn-r')
        
    }if(type2.textContent == 'water'){
        type2.classList.add('btn-w')
    }if(type2.textContent == 'poison'){
        type2.classList.add('btn-p')
    }if(type2.textContent == 'grass'){
        type2.classList.add('btn-g')
    }if(type2.textContent == 'flying'){
        type2.classList.add('btn-f')
    }if(type2.textContent == 'normal'){
        type2.classList.add('btn-n')
    }if(type2.textContent == 'bug'){
        type2.classList.add('btn-b')
    }if(type2.textContent == 'electric'){
        type2.classList.add('btn-e')
    }if(type2.textContent == 'ground'){
        type2.classList.add('btn-gd')
    }if(type2.textContent == 'fairy'){
        type2.classList.add('btn-fy')
    }if(type2.textContent == 'fighting'){
        type2.classList.add('btn-fg')
    }if(type2.textContent == 'psychic'){
        type2.classList.add('btn-pc')
    }if(type2.textContent == 'rock'){
        type2.classList.add('btn-rk')
    }if(type2.textContent == 'steel'){
        type2.classList.add('btn-s')
    }if(type2.textContent == 'ice'){
        type2.classList.add('btn-i')
    }if(type2.textContent == 'ghost'){
        type2.classList.add('btn-gh')
    }if(type2.textContent == 'dragon'){
        type2.classList.add('btn-d')
    }if(type2.textContent == 'dark'){
        type2.classList.add('btn-dk')
    }
    


    const types = document.createElement('div')
    types.classList.add('grid')
    types.appendChild(type)
    types.appendChild(type2)
    card.appendChild(types)

    const cardBack = document.createElement('div')
    cardBack.classList.add('pokemon-block-back')
    

    const spriteContainerB = document.createElement('div')
    await spriteContainerB.classList.add('img-container');

    const spriteb = document.createElement('img')
    spriteb.src = pokemon.sprites.front_shiny

    const p = document.createElement('div')
    
    await p.classList.add('p');





des=pokemon.species.url

await fetch((des))
.then(res=>res.json())
.then(async data=>{
    
    des=data.flavor_text_entries[26].flavor_text
    lang=data.flavor_text_entries[26].language.name
    
    
    
    if(lang!='es'){
        des=data.flavor_text_entries[28].flavor_text
       
        p.textContent=des
    }
 
    p.textContent=des
    if(lang!='es'){
        try {
            des=data.flavor_text_entries[43].flavor_text
            
            p.textContent=des    
        } catch (e) {
            des=data.flavor_text_entries[15].flavor_text
        }
        

    }
    if(lang!='es'){
        des=data.flavor_text_entries[27].flavor_text
       
        p.textContent=des

    }if(lang!='es'){
        des=data.flavor_text_entries[15].flavor_text
        
        p.textContent=des

    }if(lang!='es'){
        des=data.flavor_text_entries[23].flavor_text
        
        p.textContent=des

    }
})

/*
    try{
        if(des!='es'){
            des=pokemon.flavor_text_entries[28].flavor_text; console.log(des);
            p.value=des
        }else{
            p.value=pokemon.flavor_text_entries[26].flavor_text;
        }
    }catch(e){
        console.log(e);
    }
    */
    spriteContainerB.appendChild(spriteb)
    cardBack.appendChild(spriteContainerB)
    cardContainer.appendChild(card)
    cardContainer.appendChild(cardBack)
    cardBack.appendChild(p)
    await pokemonContainer.appendChild(flipCard)
}




function removeChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}
fetchPokemons(offset,limit);
