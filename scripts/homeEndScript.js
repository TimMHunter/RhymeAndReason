
    //Grab image placing, make image location array, and make an image index
var myImage = document.getElementById("mainImage");
var imageArray = ["https://thaimicromedia.files.wordpress.com/2011/06/graphic-art-bug-wallpapers_7218_1600x1200.jpg", 
        "http://cdn.allwallpaper.in/wallpapers/2400x1350/8516/grunge-vector-graphic-art-musical-graphics-beige-background-2400x1350-wallpaper.jpg", 
        "http://www.twinfactory.co.uk/wp-content/uploads/2013/04/large.jpg"];
var imageIndex = 0;

    //Rotates images by using the image index value
function changeImage(){
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if(imageIndex >= imageArray.length){
        imageIndex = 0;
    }
}

    //Calls changeImage every 5 seconds
var intervalHandle = setInterval(changeImage, 5000);

    //Stops the interval upon selection
myImage.onclick = function(){
    clearInterval(intervalHandle);
};


//Personal Experimentation

    //Create handles, style option array, and index for array.
var pageStyle = document.getElementById("styling");
var styleToggle = document.getElementById("styleToggle");
var homeStyleArray = ["css/bluewhiteaside.css", "css/redblackaside.css"];
var sideStyleArray = ["css/bluewhitecenter.css", "css/redblackcenter.css"];
var styleIndex;
var homeStylePreference = localStorage.getItem("homeStylePreference");
var sideStylePreference = localStorage.getItem("sideStylePreference");

if(homeStylePreference === "css/bluewhiteaside.css"){
    styleIndex = 1;
}else{
    styleIndex = 0;
}

    //Function that on click switches to next style in array.
styleToggle.onclick = function (){
    localStorage.setItem("homeStylePreference", homeStyleArray[styleIndex]);
    localStorage.setItem("sideStylePreference", sideStyleArray[styleIndex]);
    pageStyle.setAttribute("href", localStorage.getItem("homeStylePreference"));
    styleIndex++;
    if(styleIndex >= homeStyleArray.length){
        styleIndex = 0;
    }
};


