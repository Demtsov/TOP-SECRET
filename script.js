let lastScroll=0;
const defaultOffset=200;
const header= document.querySelector('.fixed-top');
const scrollPosition=()=> window.pageXOffset || document.documentElement.scrollTop;
const containHide=()=> header.classList.contains('hide');
window.addEventListener('scroll', () => {
if(scrollPosition()>lastScroll && !containHide){
    //scroll down
    header.classList.add('hide')
}
 else if(scrollPosition<lastScroll){
    //scroll up
    header.classList.remove('hide')
 }   
})