//front end logic
//Why do these event handlers not work if loaded before page?
$(function () {
  $(".devour").on("click", function(){
    event.preventDefault();
    console.log("Devour Button Clicked");
    let id = $(this).data("id");
    console.log(id);
    $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
          console.log("Burger now devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });

  $("#create").on("click", function(){
    event.preventDefault();
    console.log("Submit Burger Clicked");
    let newBurger = $("#burgerName").val().trim();
    $.ajax("/api/burgers", {
        type: "POST",
        data: {burgerName:newBurger}
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });
})