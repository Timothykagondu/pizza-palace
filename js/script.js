function myFunction(){
   var score=0;
   var numofquestions = 3
   var ansarr = ['small','olives','crispy'];

   var size = document.forms['quiz'][size].value;
   var toppings = document.forms['quiz'][toppings].value;
   var crust = document.forms['quiz'][crust].value;

   for(var i = 1; i <= numofquestions; i++){
      if(eval('q'+i)== ''){
         alert("you havent ordered yet" +i);
      }

      for(var i = 1; i <= numofquestions; i++){
         if(eval('q'+i)== ansarr[i-1]){
            score++;
         }
      }
      var results = document.getElementById(results);
      results.innerHTML="<h2>You pay" + score + numofquestions+
      alert('you payment'+score+numofquestions)
   }

}