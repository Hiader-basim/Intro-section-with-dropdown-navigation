const Features = document.querySelector("header nav .features");
const f_arrow_down = document.querySelector("header nav .features .down");
const f_arrow_up = document.querySelector("header nav .features .up");
const features_list = document.querySelector("header nav .features .features-list");

f_arrow_down.addEventListener("click" ,() =>{
    f_arrow_down.style.display = "none";
    f_arrow_up.style.display = "inline-block";
    features_list.style.display = "block";
});
f_arrow_up.addEventListener("click" ,() =>{
    f_arrow_up.style.display = "none";
    f_arrow_down.style.display = "inline-block";
    features_list.style.display = "none";
});

const company = document.querySelector("header nav .company");
const c_arrow_down = document.querySelector("header nav .company .down");
const c_arrow_up = document.querySelector("header nav .company .up");
const company_list = document.querySelector("header nav .company .company-list");

c_arrow_down.addEventListener("click" ,() =>{
    c_arrow_down.style.display = "none";
    c_arrow_up.style.display = "inline-block";
    company_list.style.display = "block";
});
c_arrow_up.addEventListener("click" ,() =>{
    c_arrow_up.style.display = "none";
    c_arrow_down.style.display = "inline-block";
    company_list.style.display = "none";
});

const nav_mobile = document.querySelector("header nav");
const menu_bars = document.querySelector("header .minue-mobel .open");
const overLayer = document.querySelector(".overLayer");
const menu_close = document.querySelector(".close");

menu_bars.addEventListener("click",() =>{
    nav_mobile.classList.add("displayblock");
    overLayer.style.display="block";
});
menu_close.addEventListener("click" , () =>{
    nav_mobile.classList.remove("displayblock");
    overLayer.style.display = "none";
});