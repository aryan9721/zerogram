function postFormData(name, email, message) {
  console.log('submiiting',name,email,message);
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
    url: "https://backend.zerogram.co/api/contact", // Specify the URL
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
    //   url: "https://backend.zerogram.co/api/contact",
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
  