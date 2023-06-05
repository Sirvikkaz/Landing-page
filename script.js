//script

const toggle = document.querySelector('#toggle');
const appear = document.querySelector('#appear');
const toggle_value = getComputedStyle(appear)
toggle.addEventListener('click', ()=>{
    if(toggle_value.display=='none'){
        console.log(toggle_value.display)
        appear.style.display='block';
        appear.style.opacity = '1';
        toggle.className = "fa-sharp fa-solid fa-xmark";
        console.log(toggle_value.width)
    }else{
        appear.style.display='none';
        toggle.className = "fa-solid fa-list";
    }
})

const firstColor = 0;
let currentColor = 0;
const next = document.querySelector('.next');
var monkey = document.getElementById("mon_skel")
const previous = document.querySelector('.previous')
var mainArr = document.getElementsByClassName('mainArr');
const lastColor = mainArr.length-1;
const mainDiv = ['main3-card1', 'main3-card2', 'main3-card3']
next.addEventListener('click', ()=>{
currentColor++
if(currentColor>lastColor){
currentColor = firstColor;
}
console.log('Hello world')
mainArr.className = mainArr[currentColor];
if(currentColor==0){
    mainArr[lastColor].style.display = 'none';
    return  mainArr[0].style.display = 'block';
    //main[lastMain].style.display = 'none';
      console.log(currentMain)
      //currentMain = 1;
  }
  mainArr[currentColor-1].style.display = 'none';
  console.log(currentColor)
  mainArr[currentColor].style.display = 'block';
})
previous.addEventListener('click', ()=>{
    currentColor--;
    if(currentColor==0){
    mainArr[currentColor+1].style.display = 'none';
    mainArr[currentColor].style.display = 'block';
    }
    else if(currentColor==1){
    mainArr[currentColor+1].style.display = 'none';
    mainArr[currentColor].style.display = 'block';
   
    }
   else if(currentColor<firstColor){
    mainArr[currentColor+1].style.display = 'none';
    mainArr[lastColor].style.display = 'block';
    currentColor = 2
   }
})