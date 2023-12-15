// // api.js
var DOMAIN = "https://backend.zerogram.co/api"

function getblogs() {
	$.ajax({
	  url: DOMAIN+'/project', // Replace with your API endpoint
	  method: 'GET',
	  dataType: 'json',
	  success: function(data) {
		console.log('blogs found',data);
		displayblogs(data);
	  },
	  error: function() {
		console.log('API request failed.');
	  }
	});
  }

  function displayblogs(blogEntries) {
    var container = $('#blogs-row');

    blogEntries.forEach(function(entry) {
        entry.link = 'project-single.html?id='+entry._id
        var blogEntryDiv = $('<div>', {
            class: 'col-md-4 ftco-animate  fadeInUp ftco-animated',
        });

        var blogEntryContent = $('<div>', {
            class: 'blog-entry',
        });

        var blogImageLink = $('<a>', {
            href: entry.link,
            class: 'block-20',
            style: 'background-image: url(' + entry.coverImage + ');',
        });

        var textContent = $('<div>', {
            class: 'text px-4 pt-3 pb-4',
        });

        var metaDiv = $('<div>', {
            class: 'meta',
        });

        var innerDiv = $('<div>',{

        });
        
        var authorLink = $('<a>', {
            href: '#',
            text: entry.creator,
        });

        var headingH3 = $('<h3>',{
          class: 'heading'
        });

        var headingLink = $('<a>', {
            href: entry.link,
            text: entry.name,
        });
        
        var clearp = $('<p>',{
          class: 'clearfix'
        })

        var readMoreLink = $('<a>', {
            href: entry.link,
            class: 'float-left read btn btn-primary',
            text: 'Read more',
        });

        // Assemble the elements
        innerDiv.append(authorLink);
        metaDiv.append(innerDiv);
        headingH3.append(headingLink);
        clearp.append(readMoreLink);
        textContent.append(metaDiv, headingH3, clearp);
        // blogImageLink.append(textContent);
        blogEntryContent.append(blogImageLink,textContent);
        blogEntryDiv.append(blogEntryContent);

        // Append the blog entry content to the container
        container.append(blogEntryDiv);
        $('#spinner').css('display','none');

    });
}


  $(document).ready(function() {
    $('#spinner').css('display','flex');

	  getblogs();
  });
  