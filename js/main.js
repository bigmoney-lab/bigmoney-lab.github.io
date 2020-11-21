
  function linkTo(){
      window.location.href = afurl;
  }


  var spinnerAction = function (){
  swal({
    title: "",
    text: "************************************************\n\nVítejte v Wheel of Fortune. Roztočte a získejte příležitost vyzkoušet své štěstí! \n\n ************************************************",
    confirmButtonText: 'Roztočit',
  },

  function(){
    var spinWin = document.getElementById("spin")
  
  //c = true;
    if (false) {
    
    } else {
    
      spinWin.addEventListener("animationstart", function(){
        console.log('animationstart');
      }, false);

    spinWin.className = spinWin.className + "spinAround"; 

    setTimeout(function(){
      //var r = alert("You got 1 extra spin!");
      swal({title:"",text:"\n \n Vyhráli jste 1 extra zatočení zdarma!\n\n",type:"success"},function(){
        console.log("success");
        spinWin.className = spinWin.className + " spinAround2";

        setTimeout(function(){
          spinWin.className = spinWin.className + " Op";
        },6600);
    
        
        setTimeout(function(){
          prize.style.display = "block";
        },7000);
    
        setTimeout(function(){
          //var r = alert("You got 1 extra spin!");
          var luckNum = "LAZ";
          for(var l = 0; l < 4; l++){
            luckNum = luckNum + Math.floor(Math.random()*10);
          }

          setTimeout(function(){
          	window.location.href = afurl;
          },10000);
          
          swal({
          title:"",
          text: "************************************************\n\nHurá! Jste o krok blíže k vaší ceně! Klikněte na OK! \n\n  \n\n************************************************\n\n",
          type:"success"},function(){
            window.location.href = afurl;
          });

    },8000);

      });

    },6500);
    
  }
  }

);
};

