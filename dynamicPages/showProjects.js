// // api.js
var DOMAIN = "https://backend.zerogram.co/api"

function getProjects() {
	$.ajax({
	  url: DOMAIN+'/project', // Replace with your API endpoint
	  method: 'GET',
	  dataType: 'json',
	  success: function(data) {
		console.log('projects found',data);
		displayProjects(data);
	  },
	  error: function() {
		console.log('API request failed.');
	  }
	});
  }

  function displayProjects(projects) {
    var container = $('#projects-row');

    if (!Array.isArray(projects)) {
        console.log('API response is not an array of projects.');
        return;
    }

    if (projects.length === 0) {
        console.log('No projects found in the API response.');
        console.log('No careers found in the API response.');
        var text = $('<h3>', {
          text: 'No Projects are available right now!'
        });
        container.append(text);
        $('#spinner').css('display','none');
        return;
    }

    projects.forEach(function(project) {
        var staffDiv = $('<div>', {
            class: 'col-md-6 col-lg-4 ftco-animate  fadeInUp ftco-animated'
        });

        var staffContent = $('<div>', {
            class: 'staff'
        });

        var staffImage = $('<div>', {
            class: 'img',
            style: 'background-image: url(' + project.coverImage + ');'
        });

        var textContent = $('<div>', {
            class: 'text px-4 pt-2'
        });

        var projectName = $('<h3>', {
            text: project.name
        });

        var bio = $('<div>', {
            class: 'faded',
            html: '<p>' + project.description + '</p>'
        });

        // Assemble the elements
        textContent.append(projectName, bio);
        staffContent.append(staffImage, textContent);
        staffDiv.append(staffContent);

        // Append the project content to the container
        container.append(staffDiv);
        $('#spinner').css('display','none');

    });
}

function hello(params) {
  var container = $('.row');
  container.append('<h1>hi</h1>');

}
  
  $(document).ready(function() {
    $('#spinner').css('display','flex');
	  getProjects();
  });
  