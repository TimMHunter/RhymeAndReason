

    //Create handles, style option array, and index for array.
var pageStyle = document.getElementById("styling");
var sideStylePreference = localStorage.getItem("sideStylePreference");

if(sideStylePreference === null){
    localStorage.setItem("sideStylePreference", "css/redblackcenter.css");
    sideStylePreference = localStorage.getItem("sideStylePreference");
}

pageStyle.setAttribute("href", sideStylePreference);

