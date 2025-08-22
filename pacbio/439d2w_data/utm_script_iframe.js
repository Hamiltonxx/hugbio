// Listen for UTM parameters incoming from parent window
 window.addEventListener("message", function(event){
    // Parse the URL
    function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(event.data);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    // Give the URL parameters variable names
    var source = getParameterByName('utm_source');
    var medium = getParameterByName('utm_medium');
    var campaign = getParameterByName('utm_campaign');
    var content = getParameterByName('utm_content');
    var term = getParameterByName('utm_term');

    // Put the variable names into the hidden fields in the form. selector should be "p.YOURFIELDNAME input"
    document.querySelector("p.utm_source input").value = source;
    document.querySelector("p.utm_source_last_touch input").value = source;
    document.querySelector("p.utm_medium input").value = medium;
    document.querySelector("p.utm_medium_last_touch input").value = medium;
    document.querySelector("p.utm_campaign input").value = campaign;
    document.querySelector("p.utm_campaign_last_touch input").value = campaign;
    document.querySelector("p.utm_content input").value = content;
    document.querySelector("p.utm_content_last_touch input").value = content;
    document.querySelector("p.utm_term input").value = term;
    document.querySelector("p.utm_term_last_touch input").value = term;
});