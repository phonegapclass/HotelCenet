//eventos
$(function(){
	document.addEventListener("deviceready", function(){
		window.location.href="#registro";
		$('#regEnv').click(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEma').val();
			var tel = $('#regTel').val();
			
			if(nom != '' && mail != '' && tel != ''){
				navigator.notification.confirm(nom+'\n'+mail+'\n'+tel,function(btn){
					switch(btn){
						case 1:
							navigator.notification.beep(2);
							break;
						case 2:
							navigator.notification.vibrate(500);
							break;
					}
				},'Datos de Registro','Beep,Vibrar,Cancelar');	
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