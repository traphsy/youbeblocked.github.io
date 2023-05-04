const pics = [
    'url("H1.jpg")',
    'url("H2.jpg")',
    'url("H3.jpg")',
    'url("H4.jpg")',
];

const pic = document.querySelector('section');

function showImage(){
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img;
}