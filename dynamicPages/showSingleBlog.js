// // api.js
var DOMAIN = "http://localhost:4000/api"

function getblogs() {
	$.ajax({
	  url: DOMAIN+'/blog', // Replace with your API endpoint
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
    var title = $('#blog-title');
    var desc = $('#blog-desc');
    var author = $('#blog-author');
    var bg = $('#blog-cover');
    title.text(blog.title);
    desc.html(blog.description);
    title.text(blog.title);
    author.text('Author: '+blog.creator)
    bg.css('background-image', 'url(' + blog.coverImage + ')');
}


  $(document).ready(function() {
	  getblogs();
  });
  