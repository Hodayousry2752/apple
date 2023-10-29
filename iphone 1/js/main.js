
let smallImgs= document.querySelectorAll('.sm-img');
let iphoneImgs= document.querySelector('.ip-img');

for(let i=0;i<smallImgs.length;i++){
    smallImgs[i].addEventListener('click',function(){
        document.body.style.backgroundColor=smallImgs[i].id;
        iphoneImgs.src=smallImgs[i].src;
    })
}
