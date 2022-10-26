let faleft=document.getElementsByTagName('h1')
let falef=document.getElementById("demo")


// let rightfa=document.querySelectorAll('.fa-solid')
console.log('hello');




let sidemenu=document.getElementsByClassName('sidemenu')[0]


function openmenu(){
    sidemenu.style.right='0'
    console.log('hello');
}

function closemenu(){
    console.log('hi');
    sidemenu.style.right='-200px'
}





function date_format(date) {
    // write your code here


   let second= date.replaceAll('/','-');
   let result=second;



let result2;
// console.log(result2)


if (date.length==8){
    let year=date.slice(0,4);
    let month=date.slice(5,6);
    let day=date.slice(7,8);
    let final=month+'/'+day+'/'+year

  result2 = final
//   .replace(year,day);
//   .replace(year,day);
//  console.log(result2)
}

else if (date.length==9){
    let year=date.slice(0,4);
    let month=date.slice(5,7);
    let day=date.slice(8,9);
    result2=month+'/'+day+'/'+year

}

else if (date.length==10){
    let year=date.slice(0,4);
    let month=date.slice(5,7);
    let day=date.slice(8,10);

     
result2=month+'/'+day+'/'+year
  

// console.log(result2)

}

let finalresult=date+'|'+result+'|'+ result2;
return finalresult;
}
  
console.log(date_format('2020/1/1'))
console.log(date_format('2019/12/28'))//12/28/2019  month/day/year
console.log(date_format('2010/10/30'))




function replaceThe(txt) {

    for (let i = 0; i < txt.length; i++) {
      if(txt[i]=='a'|'e'){
txt[i-1].replace('the','a')
      }
    
        
    }
    return txt
 
 }

 console.log(replaceThe('Here is the apple'))

//  let slideIndex = 1;
//  showSlides(slideIndex);
 
//  function plusSlides(n) {
//    showSlides(slideIndex +=(n) );
//  }
 

 
//  function showSlides(n) {
//    let i;
//    let slides = document.getElementsByClassName("mySlides");
 
//    console.log(slides)
//    if (n > slides.length) {slideIndex = 1}    
//    console.log('slides')
//    if (n < 1) {slideIndex = slides.length}
//    for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";  
//      console.log(slides[i])
//    }
 
//    slides[slideIndex-1].style.display = "block";  
  
//  }
var indexes = {
    firstSliderIndex: 1,
    secondSliderIndex: 2,
};
showSlides(indexes.firstSliderIndex, 'first', 'firstSliderIndex');
// Next/previous controls
function plusSlides(n, id, index) { // n - number of slide, id - container id, index - current slide number in slider
    showSlides(indexes[index] += n, id, index);
}
// Thumbnail image controls
function currentSlide(n, id, index) {
    showSlides(indexes[index] = n, id, index);
}

function showSlides(n, id, index) {
    var i;
    var slides = document.querySelectorAll(`#${id} .mySlides`);
    var dots = document.querySelectorAll(`#${id} .dot`);
    if (n > slides.length) {
        indexes[index] = 1;
    }
    if (n < 1) {indexes[index] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[indexes[index]-1].style.display = "block";
    dots[indexes[index]-1].className += " active";
}