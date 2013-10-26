//eventos
$(function(){
	document.addEventListener("deviceready", function(){
		window.location.href="#registro";
		$('#regEnv').click(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEma').val();
			var tel = $('#regTel').val();
			var foto = $('#regFoto').attr('foto');
			
			if(nom != '' && mail != '' && tel != '' && foto != '' && foto != undefined){
				enviarDatos(nom,mail,tel,foto);
			}else{
				navigator.notification.alert('Todos los campos son requeridos',null,'Error','Aceptar');
			}
		});
		
		//Tomar Foto
		$('#regFoto').click(function(){
			tomarFoto();
		});
	}, false);
});

/*(function jQuery(selector){
	...
	return obj;
})$;*/