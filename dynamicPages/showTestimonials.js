// Function to generate testimonial HTML
// function generateTestimonialHTML(testimonial) {
//     return `
//             <div class="item">
//                 <div class="testimony-wrap text-center">
//                     <div class="text p-3">
//                         <p class="mb-4">${testimonial.review}</p>
//                         <div class="user-img mb-4" style="background-image: url(${testimonial.creatorImage})">
//                             <span class="quote d-flex align-items-center justify-content-center">
//                                 <i class="fa fa-quote-left"></i>
//                             </span>
//                         </div>
//                         <p class="name">${testimonial.name}</p>
//                         <span class="position">${testimonial.designation}</span>
//                     </div>
//                 </div>
//             </div>
//         `;
// }

// Function to initialize the testimonial carousel
// function initializeTestimonialCarousel(testimonials) {
//     console.log(testimonials);
//     $.each(testimonials, function (index, testimonial) {
//         // var itemHtml = generateTestimonialHTML(testimonial);
//         console.log(`#review${index + 1}`, testimonial);
//         $(`#review${index + 1}`).text(testimonial.review);
//         $(`#name${index + 1}`).text(testimonial.name);
//         $(`#desg${index + 1}`).text(testimonial.designation);
//         $(`#pic${index + 1}`).css("background-image", "url(" + testimonial.creatorImage + ")");
//     });

//     // Initialize the owl carousel
//     $("#testimonial-carousel").owlCarousel({
//         items: 1,
//         loop: false,
//         margin: 10,
//         autoplay: true,
//         autoplayTimeout: 3000,
//         autoplayHoverPause: true
//     });
// }
// function updateTestimonials(testimonials) {
//     console.log(testimonials);
//     $(document).ready(function () {
//         // Iterate through each testimonial and update the HTML content
//         console.log('ready');
//         $.each(testimonials, function (index, testimonial) {
//             var indexToUse = index + 1; // Since your elements are named name1, review1, etc.
//             console.log(testimonial);
//             // Update the content of the elements using the current testimonial
//             $("#review" + indexToUse).text(testimonial.review);
//             $("#name" + indexToUse).text(testimonial.name);
//             $("#pic" + indexToUse).css("background-image", "url(" + testimonial.creatorImage + ")");
//             $("#desg" + indexToUse).text(testimonial.designation);
//         });

//         // Initialize the owl carousel
//         $('.carousel-testimony').owlCarousel({
//             // Your carousel options
//         });
//     });
// }
function displayData(dataArray) {
    var owl = $('#myid');
    // Loop through the array and append each item to the Owl Carousel
    dataArray.forEach(function (item) {
        var newItem = `<div class="item">
                            <div class="testimony-wrap text-center">
                                <div class="text p-3">
                                    <p class="mb-4 black">${item.review}</p>
                                    <div class="user-img mb-4" style="background-image: url(${item.creatorImage})">
                                        <span class="quote d-flex align-items-center justify-content-center">
                                            <i class="fa fa-quote-left"></i>
                                        </span>
                                    </div>
                                    <p class="name black">${item.name}</p>
                                    <span class="position black">${item.designation}</span>
                                </div>
                            </div>
                        </div>`;
        owl.append(newItem);
        $('#spinner').css('display','none');

    });

    // Initialize Owl Carousel
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
}

const staticData = [
    {
        "_id": "654939fea7be94f615ff6a63",
        "name": "David Healey",
        "designation": "Managing Director, SmartGrid Solutions",
        "rating": "5",
        "review": `Zerogram's ability to navigate complex sustainability challenges and deliver
        concise, practical solutions has greatly enhanced the quality of our service delivery.`,
        "creatorImage": "../images/david.jpeg",
        "__v": 0
    },
    {
        "_id": "654939fea7be94f615ff6a63",
        "name": "Sarah Matthews",
        "designation": "Headmistress, Truro High School",
        "rating": "5",
        "review": `The roadmap crafted by Zerogram not only addresses our unique needs but also provides a clear and strategic plan
        to navigate the complexities of decarbonisation.`,
        "creatorImage": "../images/sarah.jpeg",
        "__v": 0
    },
    {
        "_id": "654939fea7be94f615ff6a63",
        "name": "Marie Kirbyshaw",
        "designation": "Chief Executive, The Culture Trust, Luton",
        "rating": "5",
        "review": `I wholeheartedly recommend Zerogram to any
        organization seeking a partner in their journey towards a more sustainable and environmentally responsible future.`,
        "creatorImage": "../images/luton.jpeg",
        "__v": 0
    },
];

function fetchTestimonials() {
    $.ajax({
        url: "https://backend.zerogram.co/api/testimonial",
        method: "GET",
        dataType: "json", // Assuming the API returns JSON
        success: function (data) {
            if (data.length != 5) {
                alert('invalid review please make it 5!!!')
            }
            else {
                console.log(data);
                displayData(staticData);
            }
        },
        error: function (error) {
            console.log('Error fetching testimonials:', error);
        }
    });
}
$(document).ready(function () {
    $('#spinner').css('display','flex');
    fetchTestimonials();
});
