//servidor
function enviarDatos(nom,mail,tel,foto){
	$.ajax({
		type: "POST",
		url: "http://www.igitsoft.com/pgtest.php",
		data: "nom="+nom+"&mai="+mail+"&tel="+tel
	}).done(function( msg ) {
		if(msg==1){
			subirFoto(foto);	
		}else{
			navigator.notification.alert("Hubo un error en el registro",null,"Error","Aceptar");
		}
	});
}