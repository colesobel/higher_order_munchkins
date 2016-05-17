var munchkins = ["kim", "tim", "sim", "bim", "whim"] ;
$("#cats2_image").hide();
$("#catsfilter2_image").hide();
$("#catsreduce2_image").hide();
$("#catsmap2_image").hide();


// Batch 1

// $("#munchies1trigger").on("click", function (){
//     $("#cats1_image").show();
//     $("#cats2_image").hide();
//
//     //clear out existing feedback div.
//     $("#munchies1div").html("");
//
//     var truck = [];
//     var user_input = $("#munchies1").val();
//
//     if(user_input.length < 1){
//       $("#munchies1div").html("you must enter some code");
//       return;
//     }
//
//     try {
//       truck.push(eval(user_input));
//       if( ( (user_input).indexOf("function") > -1 ) || ( (user_input).indexOf("=>")  > -1 )) {
//         truck.forEach(function(thing){
//           $("#munchies1div").html("ready to roll");
//           $("#cats1_image").hide();
//           $("#cats2_image").show();
//         });
//       } else {
//         $("#munchies1div").html("your code works, but is this a higher order function?");
//       }
//    } catch(err){
//         $("#munchies1div").html("syntax error:  try again");
//    }
// });
//
//
//
// // Batch 2
//
// $("#munchies2trigger").on("click", function (){
//     $("#cats1_image").show();
//     $("#cats2_image").hide();
//
//     //clear out existing feedback div.
//     $("#munchies2div").html("");
//
//     var filt = [];
//     var user_input = $("#munchies2").val();
//
//     if(user_input.length < 1){
//       $("#munchies2div").html("you must enter some code");
//       return;
//     }
//
//     try {
//       filt.push(eval(user_input));
//       if( ( (user_input).indexOf("filter") > -1 ) ) {
//         filt.forEach(function(thing){
//           $("#munchies2div").html("ready to roll");
//           $("#catsfilter1_image").hide();
//           $("#catsfilter2_image").show();
//         });
//       } else {
//         $("#munchies2div").html("your code works, but is this a higher order function?");
//       }
//    } catch(err){
//         $("#munchies2div").html("syntax error:  try again");
//    }
// });


// Batch 3

$("#munchies3trigger").on("click", function (){
    $("#cats1_image").show();
    $("#cats2_image").hide();

    //clear out existing feedback div.
    $("#munchies3div").html("");
    var munchkins = [5,7,2,10,1];
    var total = munchkins.reduce(function(a, b) {
        return a+b;
    }, 0);
    var user_input = $("#munchies3").val();
    // var user_answer = eval(user_input);
    var red = []

    if(user_input.length < 1){
      $("#munchies3div").html("you must enter some code");
      return;
    }

    try {
      console.log(user_input);
      console.log(user_answer);
      red.push(eval(user_input));
      if( ( (user_input).indexOf("reduce") > -1) && user_input === total) {
        red.forEach(function(thing){
          $("#munchies3div").html("ready to roll");
          $("#catsreduce1_image").hide();
          $("#catsreduce2_image").show();
        });
      } else {
        $("#munchies3div").html("your code works, but is this a higher order function?");
      }
   } catch(err){
        $("#munchies3div").html("syntax error:  try again");
   }
});


//Batch 4

// $("#munchies4trigger").on("click", function (){
//     $("#cats1_image").show();
//     $("#cats2_image").hide();
//
//     //clear out existing feedback div.
//     $("#munchies4div").html("");
//     var munchkins = [5, 7, 2, 10, 1]
//     var mapped = [];
//     var correct = [25, 49, 4, 100, 1];
//     var user_input = $("#munchies4").val();
//
//     if(user_input.length < 1){
//       $("#munchies4div").html("you must enter some code");
//       return;
//     }
//
//     try {
//       mapped.push(eval(user_input));
//       console.log(mapped)
//       console.log(user_input);
//       if( ( (user_input).indexOf("map") > -1 ) && mapped.join('') === correct.join('')) {
//         mapped.forEach(function(thing){
//           $("#munchies4div").html("ready to roll");
//           $("#catsmap1_image").hide();
//           $("#catsmap2_image").show();
//         });
//     } else if ( ( (user_input).indexOf("map") > -1 ) && mapped.join('') !== correct.join('')) {
//         $("#munchies4div").html("You are not getting the correct result");
//         $("#catsmap2_image").hide();
//
//     } else {
//         $("#munchies4div").html("your code works, but is this a higher order function?");
//         $("#catsmap2_image").hide();
//       }
//    } catch(err){
//         $("#munchies4div").html("syntax error:  try again");
//    }
// });
