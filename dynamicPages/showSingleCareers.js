// // api.js
var DOMAIN = "https://backend.zerogram.co/api"

function getblogs() {
	$.ajax({
	  url: DOMAIN+'/career', // Replace with your API endpoint
	  method: 'GET',
	  dataType: 'json',
	  success: function(data) {
		console.log('blogs found',data);
		filterBlog(data);
	  },
	  error: function() {
		console.log('API request failed.');
	  }
	});
  }

  function filterBlog(blogs) {
    // Get the URL parameter 'id' from the current URL
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
  
    // Check if the idParam is not null
    if (idParam) {
      // Find the blog with the matching '_id'
      const matchingBlog = blogs.find(blog => blog._id === idParam);
  
      // Log the matching blog (if found)
      if (matchingBlog) {
        console.log(matchingBlog);
        displayBlog(matchingBlog);
      } else {
        alert("No matching blog found.");
      }
    }
  }

  function displayBlog(blog) {
    var spinner = $('#spinner');
    spinner.css('display','flex')
    var title = $('#blog-title');
    var desc = $('#blog-desc');
    var author = $('#blog-author');
    var bg = $('#ap');
    var aboutauthor = $('#about-author');
    var creatorImage = $('#author-image');
    title.text(blog.openingName);
    desc.html(blog.description);
    // bg.html('<button class="applyNowButton" data-career="' + JSON.stringify(blog) + '"> Apply now </button>')
    var button = document.createElement("button");

    // Set class and data-career attribute
    button.className = "applyNowButton";
    button.setAttribute("data-career", JSON.stringify(blog));

    // Set button text
    button.textContent = "Apply now";

    // Assuming bg is a function to set HTML content
    bg.html(button.outerHTML);
    title.text(blog.openingName);
    author.text('Author: '+blog.creator);
    aboutauthor.text(blog.aboutCreator);
    creatorImage.attr("src",blog.creatorImage);
    var blog = $('#text');
    spinner.css('display','none')
    blog.css('display','block');
    $('.applyNowButton').click(function() {
      var careerData = $(this).data('career');
      console.log(blog);
      openApplyModal(careerData);
  });

    // bg.css('background-image', 'url(' + blog.coverImage + ')');
}

function openApplyModal(careerData) {
  // Populate the modal with career data here
  // For example, update the form fields with careerData values

  // Open the modal
  $("#applyModal").css("display", "block");
  $(".overlay").css("display", "block");
  $("#applyBtn").data('career', careerData);

  // You can also do additional operations with careerData as needed
  // console.log('Apply Now button clicked for career:', careerData);
}
  $(document).ready(function() {
	  getblogs();
  });
  