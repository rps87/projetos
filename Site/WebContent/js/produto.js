/* produto.js */

function ExibiInformacao(){
	//var segundos = 3; //3segundos

	$.ajax({success: function(data){
			$('#informacao').fadeIn(100).html("PRODUTO COMPRADO!!!");
			$("#informacao").fadeOut(1500);
		}});
}