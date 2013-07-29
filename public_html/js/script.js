
function load_gravatar_profile(data) {
    var thumbnailURL = data.entry[0].thumbnailUrl;
    
    $("#gravatar_thumbnail").attr("src", thumbnailURL + "?size=140");
}

$(function() {
    $.getJSON("http://en.gravatar.com/edtorbett.json?callback=?", null, load_gravatar_profile);
});