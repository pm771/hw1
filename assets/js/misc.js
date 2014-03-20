/**
 * Created by Eugene on 3/18/14.
 */


// attaches event handler to the Search button
$(document).ready(function(){
    $("#main_search").click(function(event){
        event.preventDefault();
        // hide Main components
        $("[id^='main']").hide();
        // reveal Search components
        $("[id^='search']").show();
    });
});

$(document).ready(function(){
    $("#link_home").click(function(event){
        // event.preventDefault();
        // hide Search components
        $("[id^='search']").hide();

        // reveal Search components
        $("[id^='main']").show();
    });
});



function fillFeaturedProducts (dataFile) {
    // remove any existing content
    var ft = $('#featured_products');
    ft.empty();
    // populate new stuff from a co-located JSON file
    $.getJSON(dataFile, function(data) {
        var htmlString = "";
        $.each(data.items, function(i, item) {
            htmlString += '<li class="col-sm-4">';
            htmlString += '<div class="col-md-4">';
            htmlString += '<a href="javascript:void(0)"><img src="' + item.thumb + '" alt="" class="img-responsive"></a>';
            htmlString += '</div>';
            htmlString += '<div class="product-description-holder col-md-8">';
            htmlString += '<h2><a href="javascript:void(0)">' + item.title + '</a></h2>';
            htmlString += "<b>Item's description: </b>" + item.description + '</p>';
            htmlString += '</div></li>';
        });
        ft.html(htmlString);
    });

}
