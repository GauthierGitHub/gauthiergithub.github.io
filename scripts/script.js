$("#print-btn").click(function () {
    var url = "http://ec2-15-188-119-107.eu-west-3.compute.amazonaws.com/cv/";
    //api.apiflash.com
    $.ajax({
        type: "GET",
        url: "https://api.apiflash.com/v1/urltoimage?access_key=daf64b4418814bad9cc6cac408e451dd&url=" + url + "&width=2480&height=3508",
        data: "data",
        dataType: "dataType",
        success: function (response) {
            console.log(response);
        }
    });
});