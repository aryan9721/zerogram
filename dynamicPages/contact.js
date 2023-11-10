function postFormData(name, email, message) {
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("status", "open");
  
    $.ajax({
      url: "http://localhost:4000/api/contact",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (result) {
        alert('Thanks for contacting us, you will recieve an email from us soon!')
        console.log(result);
      },
      error: function (error) {
        alert('An error occured, Please try again after sometime!')
        console.log('error', error);
      }
    });
  }
  
  function contactForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
  
    postFormData(name, email, message);
  }
  