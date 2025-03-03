// animating the text

$(document).ready(function() {
    $('.text').textillate({ 
        loop: true,
        sync: true,

        in: {
            effect: 'bounceIn', // Use the correct effect name as a string
        },
        
        out: {
            effect: 'bounceOut', // Use the correct effect name as a string
        },
    });
});
// 		min: 1,