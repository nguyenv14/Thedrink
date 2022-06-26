function isnumberkey(e){
    var charcode = (e.which) ? e.which : e.keycode;
    if(charcode>31 && (charcode < 48 || charcode >57)){
        alert("Does not enter the char!!!")
        return false
    }
    return true
}



const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');
btnHam.addEventListener('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
});


function ischarkey(e){
    var charcode = (e.which) ? e.which : e.keycode;
    if(charcode >= 48 && charcode <= 57 ){
        alert("Does not enter the number!!!")
        return false
    }
        // return false
    return true
}


function openpass(){
    document.getElementById('password').type = "text";
    document.getElementById('open').style.display = "none";
    document.getElementById('close').style.display = "block";
}

function closepass(){
    document.getElementById('password').type = "password";
    document.getElementById('open').style.display = "block";
    document.getElementById('close').style.display = "none";
}


function openpass1(){
    document.getElementById('password1').type = "text";
    document.getElementById('open1').style.display = "none";
    document.getElementById('close1').style.display = "block";
}

function closepass1(){
    document.getElementById('password1').type = "password";

    document.getElementById('open1').style.display = "block";
    document.getElementById('close1').style.display = "none";
}

function opensignin1(){
    document.getElementById('content').style.display = 'flex';
    document.getElementById('container').style.display = 'block';
};
function exit(){
 document.getElementById('content').style.display = 'none';
}

function opensignoutclosesignin(){
     document.getElementById('signup').style.display = 'block';
     document.getElementById('signin').style.display = 'none';
 }
 function opensigninclosesignout(){
     document.getElementById('signin').style.display = 'block';
     document.getElementById('signup').style.display = 'none';
 }



 function open1(){
    document.getElementById('content-1').style.display = 'flex';
    document.getElementById('container-1').style.display = 'block';
};
function exit1(){
 document.getElementById('content-1').style.display = 'none';
};


function cvoneone() {
    let cvtwo = document.getElementById('cvone');

    cvtwo.innerHTML = '<img src="../Picture/okiwa.png">'
}
function cvonetwo() {
    let cvtwo = document.getElementById('cvone');

    cvtwo.innerHTML = '<img src="../Picture/okiwa1.png">'
}
function cvonethree() {
    let cvtwo = document.getElementById('cvone');

    cvtwo.innerHTML = '<img src="../Picture/okiwa2.png">'
}