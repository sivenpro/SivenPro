$(document).ready(function() {
    var htmlp1 = null;
    var htmlp2 = null;

    //Pasar html almacenado a funcion para generar PDF.
    function generaPdf(htmlp1, htmlp2) {
        var htmlHeader = htmlp1;
        var htmlBody = htmlp2;
        $.ajax({
            type: 'POST',
            url: "procesaDatosPDF.php",
            data: { "htmlHeader": htmlHeader, "htmlBody": htmlBody },
            success: function(html) {
                if (html) {
                    //Generar un Link para ofrecer ver/descargar el archivo al usuario.
                    //Basar link en el archivo local dentro del servidor.

                } else {
                    $("#alertaDl").html("No se pudo registrar");
                    $("#alertaDl").show();
                }
            }

        });
    }

    //Al hacer click en el boton para generar pdf, buscar el archivo php/html que contiene el div que se desea extraer
    //y almacenarlo dentro de una variable.
    $('#submitPdf').click(function() {
        generaPdf();
        // $.get("printView.php", function(html_string) {
        //     htmlp1 = html_string;
        //     console.log(htmlp1);
        //     $.get("printParte2.php", function(html_string2) {
        //         htmlp2 = html_string2;
        //         console.log(htmlp2);
        //         generaPdf(htmlp1, htmlp2);
        //     }, 'text');
        // }, 'text');

        //$('#testButton').text("hola");

    });


});
