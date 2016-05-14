$(document).ready(function(){
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4, 
    slidesToScroll: 4,
    arrows: true,  
  });
  
  // jQuery Trigger : when you click on the submit button #submitIngredients
  // run a function that
  //   selects all checked inputs
  //   compares them predefiend lists
  //   outputs proper link
  
//    $('#submitIngredients').click(function(){
//      var ingList = Array.prototype.map($("input:checked"),function(){return $(this).attr("id")});
//      console.log(ingList);
//      if( ingList == ["asparagus", "avocado", "quinoa"])
//      {
//        alert ("Hey, check out this link : http://pinchandswirl.com/2013/09/warm-kale-and-quinoa-salad-with-avocado-almonds-and-feta/");
//        location.href = "http://pinchandswirl.com/2013/09/warm-kale-and-quinoa-salad-with-avocado-almonds-and-feta/";
//      }
//      });
// });
});

