// Carousel functionality
$('#myCarousel').carousel();

// Contact form submission
$(document).ready(function() {

    $('#contactForm').submit(function() {

        $.ajax({
            type: "POST",
            url: "http://cooldevops_contact.dev/contact/",
            data: $("#contactForm").serialize(),
            dataType: "json",

            success: function(msg) {
                $("#formResponse").removeClass('error');
                $("#formResponse").removeClass('success');
                $("#formResponse").addClass(msg.status);
                $("#formResponse").html(msg.message);

            },
            error: function() {
                $("#formResponse").removeClass('success');
                $("#formResponse").addClass('error');
                $("#formResponse").html("There was an error submitting the form. Please try again.");
            }
        });
    });
});
