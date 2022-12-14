if ($(".location_job-empty-state").length <= 0) {
    setTimeout(function() {
        // Get the head tag
        var head_ID = document.getElementsByTagName("head")[0]; 
        // Create script element       
        var script_element = document.createElement('script');
        // Set the script type to JavaScript
        script_element.type = 'text/javascript';
        // External JS file
        script_element.src = 'https://tools.refokus.com/slider-generator/bundle.v1.0.0.js';
        head_ID.appendChild(script_element);
        $(".location_job-item").css('height', 'auto');
        setTimeout(function() {
            $(".slick-track").css('display', 'flex');
        }, 100);
    }, 500);
}
else {
    $(".location_job-item.is-more-jobs").remove();
    $(".location_jobs-slider-arrow").remove();
}