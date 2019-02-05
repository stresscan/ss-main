var propouseIndex = 1;
showPropouse(propouseIndex);

function plusSlides(n, no){
    if(no == undefined)
        showPropouse(propouseIndex += n);
    else
        showAchievements(n, no);
}

function currentSlide(n){
    showPropouse(propouseIndex = n)
}

function showPropouse(n)
{
        var i;
        var slides = document.getElementsByClassName("propouse");
        var dots = document.getElementsByClassName("dot");

        if(n > slides.length){  propouseIndex = 1; }

        if(n < 1){  propouseIndex = slides.length; }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[propouseIndex-1].style.display = "block";
        dots[propouseIndex-1].className += " active";
    
}

////////////////////////////////////

var achievIndex = [1, 1]
var achievId = ['partiner', 'award']
showAchievements(0, 0)
showAchievements(1, 0)

function showAchievements(id, pos)
{
    var i;
    var items = document.getElementsByClassName(achievId[id])
    achievIndex[id] += pos

    if(achievIndex[id] > items.length) {achievIndex[id] = 1 }
    if(achievIndex[id] < 1) {achievIndex[id] = items.length }

    for(i = 0; i < items.length; i++){
        items[i].style.display = "none"
    }

    items[achievIndex[id]-1].style.display = 'block'
}

/////////////////////////////////////

var coll = document.getElementsByClassName("collapsible");
var i;

for (i=0; i < coll.length; i++ ){
    coll[i].addEventListener("click", function(){
        
        this.classList.toggle("collapsible-active");
        var content = this.nextElementSibling;

        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
}
