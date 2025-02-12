let bmw = document.querySelector('#bmw');
console.log(bmw);
bmw.addEventListener('click', moveBmw);

function moveBmw(ev) {
  console.log(ev);
  ev.target.classList.toggle('move-right');
}

let infoSections = document.querySelectorAll('article section nav');

infoSections.forEach(function(element){
 
  element.addEventListener('click', showInfo);

});

function showInfo(element) {
  this.parentNode.classList.toggle('visible');
  if(this.innerHTML == 'i'){
    this.innerHTML = 'x';
  }else{
    this.innerHTML = 'i';
  }
}