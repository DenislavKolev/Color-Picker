$(document).ready(function(){

    var $red = $('#red');
    var $green = $('#green');
    var $blue = $('#blue')
    var $redVal = $('#firstVal');
    var $greenVal = $('#secondVal');
    var $blueVal = $('#thirdVal');
    var $div = $('#filled');
    var $input = $('input[type=color]');
    var rgb = $('#valueRGB');





    setInterval(values, 100)
    function values(){
        $redVal.html($red.val());
        $greenVal.html($green.val());
        $blueVal.html($blue.val());
        var backgroundColor = 'rgb(' + $red.val() + ',' + $green.val() + ','+ $blue.val() + ')';
        $div.css('background-color', backgroundColor);
        rgb.html('Color code: ' + backgroundColor)

    }

    $('#click').click(backGr)

    function backGr(){
        $('header h1').css('background-color', $input.val())
        if($input.val() == '#000000') $('header h1').css('color', '#ffffff')
        else $('header h1').css('color', '#000000')
    }
})