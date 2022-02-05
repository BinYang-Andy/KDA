const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
//Display the Menu when clicked

const mobileMenu = () =>{
    menu.classList.toggle('is-actived');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);

//navgation system when scrolling
const highlightMenu =()=>{
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const girlsMenu = document.querySelector('#girls-page');
    const aboutMenu = document.querySelector('#about-page');
    let scrollPos = window.scrollY;

    // console.log(scrollPos);
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        girlsMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPos < 1400 ){
        girlsMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        return;

    }

    else if(window.innerWidth > 960 && scrollPos < 2293 ){
        aboutMenu.classList.add('highlight');
        girlsMenu.classList.remove('highlight');
        return;
    }

    if(elem && window.innerWidth < 960 && scrollPos < 600 || elem){
        elem.classList.remove('highlight');
    }

}

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);



//hide the menu when clicking on menu item

const hideMobileMenu=()=>{
    const menuBars = document.querySelector('.is-actived')
    if(window.innerWidth <= 949 && menuBars){
        menu.classList.toggle('is-actived')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);

//The girls images change when click

var img = document.querySelector('.opaque');
var text = document.querySelector('.description__container');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');

btn1.addEventListener('click',() => {
    img.src = '/img/Ahri.jpg';
    text.innerHTML = "Ahri<br>As the leader, founder, and main vocalist of K/DA, Ahri graces the stage with confident charm. The calm center of the group, she values authentic self-expression and encourages her team to do the same. Ahri takes pride in discovering new talents and shaping them towards their full potential.";
})


btn2.addEventListener('click',() => {
    img.src = '/img/Akali.jpg';
    text.innerHTML="Akali<br>Akali is the main rapper of the group, boasting street punk style with a brash, dangerous streak. She constantly keeps her team on their toes—and values her creative independence most of all. Akali’s always spinning on new projects and refuses to compromise for her art.";

})

btn3.addEventListener('click',() => {
    img.src = '/img/Evelynn.jpg';
    text.innerHTML="Evelynn<br>Evelynn is K/DA’s lead vocalist, wielding a hypnotic stage presence like no other. Never one to stay in the shadows, she relishes the crowd’s reactions to her masterfully crafted image. Co-founder of K/DA alongside her counterpart Ahri, Evelynn edges the group towards their most thrilling creative risks.";
})

btn4.addEventListener('click',() => {
    img.src = '/img/Kaisa.jpg';
    text.innerHTML="Kaisa<br>As the main dancer and team choreographer, Kai'Sa strives for perfection. Her intense, quiet focus pushes the team forward with otherworldly concepts and pristine attention to detail. Kai'Sa embraces a cosmopolitan approach to life, finding inspiration in every corner of the world.";
})






