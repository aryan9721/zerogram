    // Function to generate testimonial HTML
    function generateTestimonialHTML(testimonial) {
        return `
            <div class="item">
                <div class="testimony-wrap text-center">
                    <div class="text p-3">
                        <p class="mb-4">${testimonial.review}</p>
                        <div class="user-img mb-4" style="background-image: url(${testimonial.creatorImage})">
                            <span class="quote d-flex align-items-center justify-content-center">
                                <i class="fa fa-quote-left"></i>
                            </span>
                        </div>
                        <p class="name">${testimonial.name}</p>
                        <span class="position">${testimonial.designation}</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Function to initialize the testimonial carousel
    function initializeTestimonialCarousel(testimonials) {
        console.log(testimonials);
        $.each(testimonials, function(index, testimonial) {
            // var itemHtml = generateTestimonialHTML(testimonial);
            console.log(`#review${index+1}`,testimonial);
            $(`#review${index+1}`).text(testimonial.review);
            $(`#name${index+1}`).text(testimonial.name);
            $(`#desg${index+1}`).text(testimonial.designation);
            $(`#pic${index+1}`).css("background-image", "url(" + testimonial.creatorImage + ")");
        });

        // Initialize the owl carousel
        // $("#testimonial-carousel").owlCarousel({
        //     items: 1,
        //     loop: true,
        //     margin: 10,
        //     autoplay: true,
        //     autoplayTimeout: 3000,
        //     autoplayHoverPause: true
        // });
    }

    function fetchTestimonials() {
        $.ajax({
            url: "http://localhost:4000/api/testimonial",
            method: "GET",
            dataType: "json", // Assuming the API returns JSON
            success: function(data) {
                if (data.length!=5){
                    alert('invalid review please make it 5!!!')
                }
                else{
                    console.log(data);
                    initializeTestimonialCarousel(data);
                }
            },
            error: function(error) {
                console.log('Error fetching testimonials:', error);
            }
        });
    }

    fetchTestimonials();
