$(document).ready(function (){
    $("#desgn-img").click(function (){
        $(".design-text").toggle();
        $("#desgn-img").toggle();
    });
});
$(document).ready(function () {
    $("#product-img").click(function () {
      $(".development-text").toggle();
      $("#product-img").toggle();
    });
  });
  $(document).ready(function () {
    $("#product-img").click(function () {
      $(".prod-management-text").toggle();
      $("#product-img").toggle();
    });
  });
  
  $(document).ready(function () {
    $("#develop").click(function () {
      $(".design-show").toggle();
      $("#develop").toggle();
    });
  });
  
  $(document).ready(function () {
    $(".development-text").click(function () {
      $(".development-text").toggle();
      $("#product-img").toggle();
    });
  });
  
  $(document).ready(function () {
    $("#product").click(function () {
      $(".prod-management-text").toggle();
      $("#product-img").toggle();
    });
  });
  
  $(document).ready(function () {
    $(".prod-management-text").click(function () {
      $(".prod-management-text").toggle();
      $("#product-img").toggle();
    });
  });
  
  $(".photo1").hover(() => {
    $(".work1").toggle();
  });
  
  $(".photo2").hover(() => {
    $(".work2").toggle();
  });
  
  $(".photo3").hover(() => {
    $(".work3").toggle();
  });
  
  $(".photo4").hover(() => {
    $(".work4").toggle();
  });
  
  
  $(".photo5").hover(() => {
    $(".work5").toggle();
  });
  
  
  $(".photo6").hover(() => {
    $(".work6").toggle();
  });
  
  $(".photo7").hover(() => {
    $(".work7").toggle();
  });
  
  
  $(".photo8").hover(() => {
    $(".work8").toggle();
  });
  
  
  function validate() {
    let name = document.getElementById("contact").value;
    let mail = document.getElementById("mail").value;
    let message = document.getElementById("message").value;
    if (name.length < 2 || name.length === "") {
      alert("please Enter your full name");
    }
  
    if (name.length > 2 && message.length < 10) {
      alert("meassage too short");
    }
    if (name.length > 2 && message.length > 10) {
      alert(
        "Hi " +
        name +
        " we have received your message. Thank you for keeping in touch"
      );
    }
  }
  
  var button = document.getElementById("button");
  button.addEventListener("click", () => {
    validate();
  });