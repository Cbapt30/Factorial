
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#inputNumber").val());
      var result = 1;
      for (count = number; count > 1; count--) {
        result *= count
      }

    console.log(result);

    $("#result").text(result);
  });
});
