//eventos
$(function(){
	document.addEventListener("deviceready", function(){
		if(!estaRegistrado())
			window.location.href="#registro";
		$('#regEnv').tap(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEma').val();
			var tel = $('#regTel').val();
			var foto = $('#regFoto').attr('foto');
			
			if(nom != '' && mail != '' && tel != '' && foto != '' && foto != undefined){
				$('.loader').show();
				$('.title div').text('enviando datos');
				$(this).hide();
				enviarDatos(nom,mail,tel,foto);
			}else{
				navigator.notification.alert('Todos los campos son requeridos',null,'Error','Aceptar');
			}
		});
		
		//Tomar Foto
		$('#regFoto').tap(function(){
			tomarFoto();
		});
	}, false);
});

/*(function jQuery(selector){
	...
	return obj;
})$;*/