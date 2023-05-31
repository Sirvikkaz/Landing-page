//script

const toggle = document.querySelector('#toggle');
const appear = document.querySelector('#appear');
const toggle_value = getComputedStyle(appear)
toggle.addEventListener('click', ()=>{
    if(toggle_value.display=='none'){
        console.log(toggle_value.display)
        appear.style.display='block';
        appear.style.transition = 'transition: 5s ease-in width';
        console.log(toggle_value.width)
    }else{
        appear.style.display='none';
    }
})
//for switching Images
const images = ["monkey_skeleton.png","monkeyy_nft.png","monkeyyy.png"];
var content = [


]
var apep = document.getElementsByClassName('main_apep');
/*if(apep[1]){
    console.log('Hello')
document.getElementsByClassName('main_apep')[1].innerHTML = '<p>Bored Ape Smoke Club </p>'
}*/
const firstColor = 0;
const lastColor = images.length-1;
let currentColor = 0;
const next = document.querySelector('.next');
var monkey = document.getElementById("mon_skel")
const previous = document.querySelector('.previous')
var apep = document.getElementsByClassName('main_apep');
next.addEventListener('click', ()=>{
    currentColor++;
    if(currentColor>lastColor){
        currentColor=firstColor;
    }
    monkey.src=images[currentColor];
    console.log(images[currentColor])
    console.log(images[1])
    if((images[currentColor])==(images[1])){
        document.getElementById('main3_cardpp').innerHTML= '<p class="main_apep main3-cardp">Bored Ape Smoke Club</p>';
        document.querySelector('.main3-size').innerHTML = '<p class="main3-size">2.23 ETH</p>';
        document.querySelector('."btn btn-btn').innerHTML = '<a href="" class="btn btn-btn">Place a Bid</a>'
    }
    else if((images[currentColor])==(images[2])){
        document.getElementById('main3_cardpp').innerHTML= '<p class="main_apep main3-cardp">Mutant Ape King Queen</p>';
        document.querySelector('.main3-size').innerHTML = '<p class="main3-size">6.08 ETH</p>';
        document.querySelector('."btn btn-btn').innerHTML = '<a href="" class="btn btn-btn">Place a Bid</a>'
    }
    else{
        document.getElementById('main3_cardpp').innerHTML= '<p class="main_apep main3-cardp">Ape Zombie with Lobster </p>'; 
        document.querySelector('.main3-size').innerHTML = '<p class="main3-size">5.12 ETH</p>'; 
        document.querySelector('."btn btn-btn').innerHTML = '<a href="" class="btn btn-btn">Place a Bid</a>'
    }
})
previous.addEventListener('click', ()=>{
    currentColor--;
    if(currentColor<firstColor){
        currentColor=lastColor;
    }
    monkey.src=images[currentColor]
    if((images[currentColor])==(images[1])){
        document.getElementById('main3_cardpp').innerHTML= '<p class="main_apep main3-cardp">Bored Ape Smoke Club</p>';
        document.querySelector('.main3-size').innerHTML = '<p class="main3-size">2.23 ETH</p>';
        document.querySelector('."btn btn-btn').innerHTML = '<a href="" class="btn btn-btn">Place a Bid</a>'
    }
    else if((images[currentColor])==(images[2])){
        document.getElementById('main3_cardpp').innerHTML= '<p class="main_apep main3-cardp">Mutant Ape King Queen</p>';
        document.querySelector('.main3-size').innerHTML = '<p class="main3-size">6.08 ETH</p>';
        document.querySelector('."btn btn-btn').innerHTML = '<a href="" class="btn btn-btn">Place a Bid</a>'
    }
    else{
        document.getElementById('main3_cardpp').innerHTML= '<p class="main_apep main3-cardp">Ape Zombie with Lobster </p>';
        document.querySelector('.main3-size').innerHTML = '<p class="main3-size">5.12 ETH</p>';   
        document.querySelector('."btn btn-btn').innerHTML = '<a href="" class="btn btn-btn">Place a Bid</a>'
    }
})