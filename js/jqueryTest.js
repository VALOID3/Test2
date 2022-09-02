/*
$(".test").click(function(){
    //$("p").hide();
   // $(".test").hide();
   //$("#link").hide();
   $(this).hide();
});

//EVENTOS BASICOS

$(".test").click(function(){
console.log("click");
});

$(".test").mouseleave(function(){console.log("mouseleave");});
$(".test").mouseenter(function(){console.log("enter");});
$(".test").mouseup(function(){console.log("up");});
$(".test").mousedown(function(){console.log("downm");});

$("input").focus(function(){
    console.log("enfocando la casilla");
});

$("input").blur(function(){
    console.log("quitamos de la casilla");
});

$(".test").on({
    mouseleave: function(){
        console.log("mouseleave");
    },
    mouseup: function(){
        console.log("up");
    }
});
*/

$(document).ready(function(){
$("p").hide();
$("ul").hide();
   // $("#EjecutarEventos").click(function(){
       // var temp = $("#textoTest").text();
       // var temp = $("#textoTest").html();
       //var temp = $("#textoTest").val();
       // var temp = $("#textoTest").attr("nombrePersona");

     //  $("#textoTest").html("<a href='#' > link a:  hello world <a>");
      // $("input").val("Oscar G.");
     // $("#link").html("www.google.com");
     //  $("#link").attr("href","https://www.google.com" );
        //console.log(temp);

       // $("#contenedor").append('<div class="C1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam debitis aperiam hic quas aliquid nemo placeat distinctio nihil veritatis, molestias, unde quibusdam harum id. Veniam cupiditate nobis repellendus numquam! </div>');
      // $("#contenedor").prepend('<div class="C1">CONENIDO NUEVO--> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam debitis aperiam hic quas aliquid nemo placeat distinctio nihil veritatis, molestias, unde quibusdam harum id. Veniam cupiditate nobis repellendus numquam! </div>');
     // $("#contenedor").before("<b> Before --> </b>");
     // $("#contenedor").after("<b> <-- After </b>");

   //  $("#contenedor").html("");
   //$("#contenedor").empty();

   //$("p").css("color","red");
  /* $("p").css({
    "color":"red",
    "background-color":"yellow",
    "font-size": "200%"
   });*/

   //$("p").addClass("pAfterClick");
  /* $("p").toggleClass("pAfterClick");
    });
*/

$("#correo").keypress(function(){
    $("p").show();
    let temp = $(this).val();
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;

    if(temp.match(pattern)){
        console.log("correcto");
        $("p").html("correo correcto");
        $("p").css("color", "green");
    }else{
        console.log("falso");
        $("p").html("correo no valido");
        $("p").css("color", "red");
    }

console.log(temp);
});

$("#pass").keyup(function(){
    $("ul").show();
    let temp = $(this).val();

    if(temp.match(/[a-z]/)){
        $("#Minus").css("color", "green");
    }else{
        $("#Minus").css("color", "red");
      //  return false;
    }

    if(temp.match(/[A-Z]/)){
        $("#Mayus").css("color", "green");
    }else{
        $("#Mayus").css("color", "red");
       // return false;
    }

    if(temp.match(/[0-9]/)){
        $("#Num").css("color", "green");
    }else{
        $("#Num").css("color", "red");
     //   return false;
    }

    if(temp.match(/[!\@\$\%\#\&\(\)\_\-\*\+\-\=\?\¿\<\>\.\,]/)){
        $("#Sig").css("color", "green");
    }else{
        $("#Sig").css("color", "red");
     //   return false;
    }


    if(temp.length > 6){
        $("#Lon").css("color", "green");
    }else{
        $("#Lon").css("color", "red");
      //  return false;
    }


   // return true;
});

});


