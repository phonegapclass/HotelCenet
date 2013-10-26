//eventos
$(function(){
	document.addEventListener("deviceready", function(){
		window.location.href="#registro";
		$('#regEnv').click(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEma').val();
			var tel = $('#regTel').val();
			
			if(nom != '' && mail != '' && tel != ''){
				enviarDatos(nom,mail,tel);
			}else{
				navigator.notification.alert('Todos los campos son requeridos',null,'Error','Aceptar');
			}
		});
	}, false);
});

/*(function jQuery(selector){
	...
	return obj;
})$;*/