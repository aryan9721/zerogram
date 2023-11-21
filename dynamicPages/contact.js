function postFormData(name, email, message) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var data = {
    name: name,
    email: email,
    message: message,
    status: "Pending"
  };
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    data: JSON.stringify(data), // Use data instead of raw
    contentType: 'application/json', // Set content type explicitly
    url: "http://3.82.10.94:4000/api/contact", // Specify the URL
    success: function (result) {
      console.log(result);
      alert('Thanks for contacting us, you will recieve an email from us soon!');
      window.location.reload();
    },
    error: function (error) {
      alert('An error occured, Please try again after sometime!');
      console.log('error', error);
    }
  };
  $.ajax(requestOptions);

    // $.ajax({
    //   url: "http://3.82.10.94:4000/api/contact",
    //   type: "POST",
    //   data: raw,
    //   processData: false,
    //   contentType: false,
    //   success: function (result) {
    //     alert('Thanks for contacting us, you will recieve an email from us soon!')
    //     console.log(result);
    //   },
    //   error: function (error) {
    //     alert('An error occured, Please try again after sometime!')
    //     console.log('error', error);
    //   }
    // });
  }
  
  function contactForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var submit = $('#submit-button');
    submit.text('Submitting...');
    postFormData(name, email, message);
  }
  