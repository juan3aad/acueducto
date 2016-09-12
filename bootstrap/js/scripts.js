jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    //$.backstretch("recursos/img/1.jpg");
    
    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('#frmLogin').on('submit', function(e) {
		
		var identificacion = $('#form-identificacion').val();
		//var contrasena = $('#form-password').val();

		alert("Hola");
		if(identificacion == "" ) {
    		e.preventDefault();
    		$('#form-identificacion').addClass('input-error');
    	}else{
			//alert(usuario);
		}
		
		/*if(contrasena == "" ) {
    		e.preventDefault();
    		$('#form-password').addClass('input-error');
    	}else{
			//alert(contrasena);
		}*/
		
		if(identificacion != ""){
			
			var resultado;
			//var url = "usuario/usuario.php"; // El script a dónde se realizará la petición.
			var url = "./../model/TblPersonaLogin.php"; // El script a dónde se realizará la petición.
			
			//alert ("DAtos URL"+url);
			var dataString = $('#frmLogin').serialize();

			alert('Datos serializados: '+dataString); 
		
			$.ajax({
			   type: "GET",
			   url: url,
			   data: dataString , // Adjuntar los campos del formulario enviado.
			   success: function(data)
			   {
				   alert ("valor: "+data);
					if(data==1){
						// DIRECCIONAR AL MENU
						//	alert("OK");
					/* $("#info-login").removeClass("error-login");	
					$("#info-login").addClass("usuario-correcto");	
					$("#info-login").html("Usuario Correcto"); */
						
						window.location="menu.php";
						
					}
					else{
						// DIRECCIONAR PAGINA DE ERROR
						//alert("Error");
						$("#info-login").removeClass("usuario-correcto");
						$("#info-login").addClass("error-login");
						$("#info-login").html("Identificacion Incorrecta");
					}
			   }
			 });
			
		}
    	return false; // Evitar ejecutar el submit del formulario.
    });

});
