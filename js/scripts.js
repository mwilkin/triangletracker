$(document).ready(function() {
  $("#input form").submit(function() {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if ((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2) {
      alert("Sorry. Such a tragedy, you don't have triangle.")
    } else if (side1 === side2 && side2 === side3) {
      alert("You have an equilateral triangle.");
    } else if (side1 === side2 || side2 === side3 || side3 === side1) {
      alert("You have an isosceles triangle.");
    } else {
      alert("You have a scalene triangle.");
    }


  });
});
