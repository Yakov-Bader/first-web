//export {show};
values=document.querySelectorAll('.inputs input');
val = [...values];
val.forEach(input => input.addEventListener('change',update));
val.forEach(input => input.addEventListener('mousemove',update));
function update(){
    document.documentElement.style.setProperty(`--${this.name}`,this.value);
}
function show(id){
    let element = document.getElementById(id);
    element.classList.toggle("show");
}
function mobileMenu(){
    show('mobile-menu');
    document.getElementById("lines/x").classList.toggle("lines");
    document.getElementById("lines/x").classList.toggle("x");
}
function openMainClass(mainNum){
    let pic = document.getElementById(`down${mainNum}`);
        pic.classList.toggle("down");
        pic.classList.toggle("up");
    show(`mainClass${mainNum}`);
}