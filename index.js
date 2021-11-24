const menu = document.querySelector('#mobile-menu');
const menuLinks =  document.querySelector('.navbar-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
var images=[ 'images/Women/img43.jpg','images/Women/img44.jpg','images/Women/img48.jpg','images/Women/img52.jpg','images/Women/img50','images/Women/img49.jpg','images/Children/img1.jpg','images/Children/img2.jpg','images/Children/img3.jpg','images/Children/img4.jpg','images/Children/img5.jpg','images/Children/img6.jpg','images/Children/img7.jpg','images/Children/img16.jpg','images/Children/img11.jpg','images/Children/img10.jpg'];
var i=0;
function slideShow(){
    document.getElementById("image").src=images[i];

    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("slideShow()" , 2000);
}
window.onload = slideShow;

var noti = document.querySelector('h3');
var select = document.querySelector('.select');
var button = document.getElementsByTagName('button');
for(but of button)
{
    but.addEventListener('click', (e)=>{
        var add =Number(noti.getAttribute('data-count')|| 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');

        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText ="Buy-now";
        if (clone) {
            noti.onclick =()=>{
                select.classList.toggle('display');
            }
        }
        //image animation to cart//
        var image = e.target.parentNode.querySelector('img');
        var span = e.target.parentNode.querySelector('span');
        var s_image =image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add('active');
        setTimeout(()=>{
            span.removeChild(s_image);
            span.classList.remove('active');   
        } ,500 )

    })
}