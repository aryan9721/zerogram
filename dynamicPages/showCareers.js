// // api.js
var DOMAIN = "https://backend.zerogram.co/api"

function getblogs() {
	$.ajax({
	  url: DOMAIN+'/career', // Replace with your API endpoint
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
    if (!Array.isArray(blogEntries)) {
      console.log('API response is not an array of careers.');
      return;
  }

  if (blogEntries.length === 0) {
      console.log('No careers found in the API response.');
      var text = $('<h3>', {
        text: 'There are no openings at the moment. Email us at info@zerogram.co for a speculative discussion.',
        style: "margin: 5%"
      });
      container.append(text);
      $('#spinner').css('display','none');
      return;
  }
    blogEntries.forEach(function(entry) {
        entry.link = 'career-single.html?id='+entry._id
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
            text: entry.openingName,
        });
        
        var clearp = $('<p>',{
          class: 'clearfix'
        })

        var readMoreLink = $('<a>', {
            href: entry.link,
            class: 'float-left read btn btn-primary',
            text: 'Know more',
        });

        // Assemble the elements
        // innerDiv.append(authorLink);
        // metaDiv.append(innerDiv);
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
  