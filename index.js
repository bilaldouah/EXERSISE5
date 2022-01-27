function loaded(){  } 

function Conjuguer(){
    var str = document.getElementById("text").value; 

    //remove white space
    str=str.replace(/\s/g, '');

    //retrieve terminaison
    var terminaison = str.substr(str.length-2,str.length-1);
    if(terminaison=='er')
    {
        var res = str.substr(0,str.length-2);
 
        document.getElementById("affichage").innerHTML += 'Je = ' +res+'e<br>';
        document.getElementById("affichage").innerHTML += 'Tu = ' +res+'es<br>';
        document.getElementById("affichage").innerHTML += 'Il = ' +res+'e<br>';
        document.getElementById("affichage").innerHTML += 'Nous = ' +res+'ons<br>';
        document.getElementById("affichage").innerHTML += 'Vous = ' +res+'ez<br>';
        document.getElementById("affichage").innerHTML += 'Ils = ' +res+'ent<br>';
    
         
    }
 
  

}