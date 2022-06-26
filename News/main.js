







function opensignin(){
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