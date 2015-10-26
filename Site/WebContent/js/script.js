/* script.js */

function ChamaHome(){
	document.getElementById('conteudo1').style.display = "block";
	document.getElementById('conteudo2').style.display = "none";
	document.getElementById('conteudo3').style.display = "none";
	document.getElementById('conteudo4').style.display = "none";
}

function ChamaProduto(){
	document.getElementById('conteudo1').style.display = "none";
	document.getElementById('conteudo2').style.display = "block";
	document.getElementById('conteudo3').style.display = "none";
	document.getElementById('conteudo4').style.display = "none";
	Produtos();
}

function ChamaCarrinho(){
	document.getElementById('conteudo1').style.display = "none";
	document.getElementById('conteudo2').style.display = "none";
	document.getElementById('conteudo3').style.display = "block";
	document.getElementById('conteudo4').style.display = "none";
	Cesta();
}

function ChamaContato(){
	document.getElementById('conteudo1').style.display = "none";
	document.getElementById('conteudo2').style.display = "none";
	document.getElementById('conteudo3').style.display = "none";
	document.getElementById('conteudo4').style.display = "block";
	Contato();
}

function Produtos(){
	$.ajax({url:'Produtos.html',success: function(data){
		$('#conteudo2').html(data);}});
}

function Cesta(){
	$.ajax({url:'Cesta.html',success: function(data){
		$('#conteudo3').html(data);}});
}

function Contato(){
	$.ajax({url:'Contato.html',success: function(data){
		$('#conteudo4').html(data);}});
}