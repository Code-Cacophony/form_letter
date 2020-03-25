$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var personInput = $("input#person").val();
    

    $(".person").append(personInput);
    
    $("#mail").show();

    event.preventDefault(); 
  });
});