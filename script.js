$(document).ready(function (){
    $("#design-img").click(function (){
        $(".design-text").toggle();
        $("#design-img").toggle();
    });
});

$(document).ready(function () {
    $(".design-text").click(function () {
      $(".design-text").toggle();
      $("#design-img").toggle();
    });
  });

  $(document).ready(function () {
    $("#development-img").click(function () {
      $(".development-text").toggle();
      $("#development-img").toggle();
    });
  });
  
  $(document).ready(function () {
    $(".development-text").click(function () {
      $(".development-text").toggle();
      $("#development-img").toggle();
    });
  });
  
  $(document).ready(function () {
    $("#product-img").click(function () {
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
  
  $(".image1").hover(() => {
    $(".wrk1").toggle();
  });
  
  $(".image2").hover(() => {
    $(".wrk2").toggle();
  });
  
  $(".image3").hover(() => {
    $(".wrk3").toggle();
  });
  
  $(".image4").hover(() => {
    $(".wrk4").toggle();
  });
  
  
  $(".image5").hover(() => {
    $(".wrk5").toggle();
  });
  
  
  $(".image6").hover(() => {
    $(".wrk6").toggle();
  });
  
  $(".image7").hover(() => {
    $(".wrk7").toggle();
  });
  
  
  $(".image8").hover(() => {
    $(".wrk8").toggle();
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