
function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  
  function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function (element, key) {
      acc[key] = func(element, key);
    });
    return acc;
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
var st='ST'
var lb='LB'
var players=[ // array of players 
{id:0,
image:"/images/Mbappe.JPG",
position:st,
name:"Mbappe",
},
{id:1,
    image:"/images/maradona.png",
    position:st,
    name:"Maradona",
    },
    {id:2,
        image:"/images/Messi_158023.png",
        position:st,
        name:"Messi",
},



]
function makePlayer(id,image,position,name){ // factory function to add attributs player 
    return{
        id,image,position,name
    }
}
var neymar=makePlayer(5,"/images/neymar.png",'RW',"Neymar")
var dembele=makePlayer(6,"/images/dembele.png",'RW',"Dembele")
var Salah=makePlayer(7,"/images/Salah.png",'RW',"Salah")
var Robben=makePlayer(8,"/images/Robben.png",'LW',"Robben")
var Ozil=makePlayer(9,"images/Ozil.png",'LW',"Ozil")
var Henry=makePlayer(10,"images/Henry.png",'LW',"Henry")
var Xavi=makePlayer(11,"images/xavi.png",'CM',"Xavi")
var Iniesta=makePlayer(12,"images/iniesta.png",'CM',"Iniesta")
var Modric=makePlayer(13,"images/Modric.png","CM","Modric")
var Ronaldinho=makePlayer(14,"images/Ronaldinho.png","CM","Ronaldinho")
var Zanetti=makePlayer(15,"images/zanetti.png","CM","Zanetti")
var buska=makePlayer(16,"images/buska.png","CM","buska")
var puyol=makePlayer(17,"images/puyol.png","CB","Puyol")
var maldini =makePlayer(18,"images/Maldini.png","CB","Maldini")
var Nesta =makePlayer(19,"images/nesta.png","CB","Nesta")
var Ramos=makePlayer(20,"images/ramos.png","CB","Ramos")
var carlos=makePlayer(21,"images/carlos.png","CB","Carlos")
var Cafu=makePlayer(22,"images/cafu.png","CB","Cafu")
var Buffon=makePlayer(23,"images/buffon.png","GK","Buffon")
var Casillas=makePlayer(24,"images/casillas.png","GK","Casillas")
var Dida=makePlayer(25,"images/dida.png","GK","CDida")




players.push(neymar,dembele,Salah,Robben,Ozil, Henry,Xavi,Iniesta,Modric,Ronaldinho,Zanetti,buska,puyol,Nesta,maldini,Ramos,carlos,Cafu,Buffon,Casillas,Dida)

function getPosition(position){ // filter by position each player 
    var arr =filter(players,function(element){
        return element.position===position
    })
    console.log("arrr",arr)
    $("#imgtest").append(`<div id='contain' class=container-${position} ></div>`) // append to imgtest div html with class container 


    each(arr,function(element){
        $(`.container-${position}`).append(`<img  id=${element.id} class="img"  src=${element.image}>`); // loops for this div 
    });
}

// GK
$("#GK")[0].onclick=function(){
  getPosition("GK")
  each(  $("#contain")[0].children,function(element,i){
    element.onclick=function(){
      console.log(element.id)
      dragElement(element);

    }
  })  
}

$("#CBR")[0].onclick=function(){
  getPosition("CB")
  each( $("#contain")[0].children,function(element,i){
    element.onclick=function(){
      console.log(element.id)

      dragElement(element);

    }
  })  
}

$("#CBL")[0].onclick=function(){
  getPosition("CB")
  each( $("#contain")[0].children,function(element,i){
    element.onclick=function(){
      console.log(element.id)
      dragElement(element);

    }
  })  

}
$("#RB")[0].onclick=function(){
  getPosition("CB")
  each( $("#contain")[0].children,function(element,i){
    element.onclick=function(){
      console.log(element.id)
      dragElement(element);

    }
  })  

}
$("#LB")[0].onclick=function(){
  getPosition("CB")
  each( $("#contain")[0].children,function(element,i){
    element.onclick=function(){
      console.log(element.id)
      dragElement(element);

    }
  })  

}

$("#PA")[0].onclick=function(){
  getPosition("CM")
  each( $("#contain")[0].children,function(element,i){
    element.onclick=function(){
      console.log(element.id)
      dragElement(element);

    }
  })  

}

$("#CMR")[0].onclick=function(){
  getPosition("CM")
  each( $("#contain")[0].children,function(element,i){
    element.onclick=function(){
      console.log(element.id)
      dragElement(element);

    }
  })  

}

$("#CML")[0].onclick=function(){
  getPosition("CM")
  each( $("#contain")[0].children,function(element,i){
    element.onclick=function(){
      console.log(element.id)
      dragElement(element);

    }
  })  

}

$("#LW")[0].onclick=function(){
  getPosition("LW")
  each( $("#contain")[0].children,function(element,i){
    element.onclick=function(){
      console.log(element.id)
      dragElement(element);

    }
  })  

}

$("#RW")[0].onclick=function(){
  getPosition("RW")
  each( $("#contain")[0].children,function(element,i){
    element.onclick=function(){
      console.log(element.id)
      dragElement(element);

    }
  })  

}
$("#ST")[0].onclick=function(){
  getPosition("ST")
  each( $("#contain")[0].children,function(element,i){
    element.onclick=function(){
      console.log(element.id)
      dragElement(element);

    }
  })  

}

// $("#AC").on('click',function(e){
//   getPosition("GK")
// })

$(".img").on('click',function(e){
   
    console.log( "aa",document.getElementById(`${this.id}`));
    document.getElementById(`${this.id}`);
  console.log(document.getElementById(`${this.id}`));
    dragElement(document.getElementById(`${this.id}`));

})



// console.log("test",dra)
// dragElement(document.getElementById("1"));

function dragElement(elmnt) {
  elmnt.style.position='absolute'
    //  elmnt.style.top=0
    // elmnt.style.left=0

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    console.log( elmnt.style.top)
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



      


    

















  







