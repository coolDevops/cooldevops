// Carousel functionality 
$('#myCarousel').carousel();


// Contact form submission
$(document).ready(function() {

    jQuery("#clickme").click( function() {
        $('body').css('cursor', 'wait');
        var form=$('#contactForm');
        $.ajax({
            type: "POST",
            url: "http://cooldevops_contact.dev/",
            data: form.serialize(),
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
        $('body').css('cursor', 'default');
   });
});