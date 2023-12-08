// // api.js
var DOMAIN = "https://backend.zerogram.co/api"

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
    var spinner = $('#spinner');
    spinner.css('display','flex')
    var title = $('#blog-title');
    var desc = $('#blog-desc');
    var author = $('#blog-author');
    var bg = $('#blog-cover');
    var aboutauthor = $('#about-author');
    var creatorImage = $('#author-image');
    title.text(blog.title);
    desc.html(blog.description);
    title.text(blog.title);
    author.text('Author: '+blog.creator);
    aboutauthor.text(blog.aboutCreator);
    creatorImage.attr("src",blog.creatorImage);
    var blog = $('#text');
    spinner.css('display','none')
    blog.css('display','block');


    // bg.css('background-image', 'url(' + blog.coverImage + ')');
}


  $(document).ready(function() {
	  getblogs();
  });
  