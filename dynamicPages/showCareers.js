// // api.js
var DOMAIN = "http://localhost:4000/api"

function getcareers() {
	$.ajax({
	  url: DOMAIN+'/career', // Replace with your API endpoint
	  method: 'GET',
	  dataType: 'json',
	  success: function(data) {
		console.log('careers found',data);
		displaycareers(data);
	  },
	  error: function() {
		console.log('API request failed.');
	  }
	});
  }

  function displaycareers(careers) {
    var container = $('#careers-row');

    if (!Array.isArray(careers)) {
        console.log('API response is not an array of careers.');
        return;
    }

    if (careers.length === 0) {
        console.log('No careers found in the API response.');
        return;
    }

    careers.forEach(function(career) {
        var staffDiv = $('<div>', {
            class: 'col-md-6 col-lg-3 ftco-animate  fadeInUp ftco-animated'
        });

        var staffContent = $('<div>', {
            class: 'staff'
        });

        var staffImage = $('<div>', {
            class: 'img',
            style: 'background-image: url(' + career.coverImage + ');'
        });

        var textContent = $('<div>', {
            class: 'text px-4 pt-2'
        });

        var careerName = $('<h3>', {
            text: career.openingName
        });

        var bio = $('<div>', {
            class: 'faded',
            html: '<p> Job Description' + career.description + '</p>' + 
                  '<p> Salary: ' + career.salary + '</p>' + 
                  '<a href='+ career.applyNowLink +'><button class="applyNowButton"> Apply now </button></a>'
        });

        // Assemble the elements
        textContent.append(careerName, bio);
        staffContent.append(staffImage, textContent);
        staffDiv.append(staffContent);

        // Append the career content to the container
        container.append(staffDiv);
    });
}

function hello(params) {
  var container = $('.row');
  container.append('<h1>hi</h1>');

}
  
  $(document).ready(function() {
	  getcareers();
  });
  