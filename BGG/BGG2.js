const pics = [
    'url("B1.jpg")',
    'url("B2.jpg")',
    'url("B3.jpg")',
    'url("B4.jpg")',
];

const pic = document.querySelector('section');

function showImage(){
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img;
}