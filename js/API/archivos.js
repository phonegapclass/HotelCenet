//archivos
function subirFoto(foto){
		alert(1);
		var options = new FileUploadOptions();
		options.fileKey="file";
		options.fileName="foto";
		options.mimeType="image/jpeg";

		var params = {};
		params.value1 = "test";
		params.value2 = "param";

		options.params = params;

		var ft = new FileTransfer();
		ft.upload(foto, "http://www.igitsoft.com/pgtest.php", function(r){
			alert(2);
			navigator.notification.confirm("Registro Satifactorio\nRespuesta: "+r.responseCode,function(btn){
				switch(btn){
					case 1:
						navigator.notification.beep(2);
						break;
					case 2:
						navigator.notification.vibrate(500);
						break;
				}
				window.location.href="#page";
				//Confirmar Registro Localmente
			},'Gracias','Beep,Vibrar,Cancelar');
		}, function(err){
			alert('Error: '+err.code);
		}, options);
}

