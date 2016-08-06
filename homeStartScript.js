

    //Create handles, style option array, and index for array.
var pageStyle = document.getElementById("styling");
var homeStylePreference = localStorage.getItem("homeStylePreference");

if(homeStylePreference === null){
    localStorage.setItem("homeStylePreference", "css/redblackaside.css");
    homeStylePreference = localStorage.getItem("homeStylePreference");
}

pageStyle.setAttribute("href", homeStylePreference);



