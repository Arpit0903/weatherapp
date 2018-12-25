function goHome()
{ 
    let empt=document.getElementById("city_name").value;
    if(empt=="" || empt.includes("enter city name here....")){
        window.location.href='/home.html';
        return;
    }
    else{
        window.location.href='/weather.html';
        return;
    }
    retrurn true;


        