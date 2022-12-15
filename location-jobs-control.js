if ($(".vertical-card-list_empty-state.is-news").length >= 0) {
    $("#news-arrow-prev").remove();
    $("#news-arrow-next").remove();
}

if ($(".vertical-card-list_empty-state.is-jobs").length >= 0) {
    $("#jobs-arrow-prev").remove();
    $("#jobs-arrow-next").remove();
}

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
    $(".slick-slider_item").css('height', 'auto');
    setTimeout(function() {
        $(".slick-track").css('display', 'flex');
    }, 100);
}, 500);