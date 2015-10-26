function div4()
{
	document.getElementById('div4').style.display = "block";
	document.getElementById('div5').style.display = "none";
	document.getElementById('div6').style.display = "none";
	document.getElementById('div7').style.display = "none";
}

function div5()
{
	document.getElementById('div4').style.display = "none";
	document.getElementById('div5').style.display = "block";
	document.getElementById('div6').style.display = "none";
	document.getElementById('div7').style.display = "none";
}

function div6()
{
	document.getElementById('div4').style.display = "none";
	document.getElementById('div5').style.display = "none";
	document.getElementById('div6').style.display = "block";
	document.getElementById('div7').style.display = "none";
}

function div7()
{
	document.getElementById('div4').style.display = "none";
	document.getElementById('div5').style.display = "none";
	document.getElementById('div6').style.display = "none";
	document.getElementById('div7').style.display = "block";
}

function cadastra()
{
	div6();
	document.getElementById('sNome').value = document.getElementById('eNome').value;
	document.getElementById('sTel').value = document.getElementById('eTel').value;
	document.getElementById('sMail').value = document.getElementById('eMail').value;
}

function finaliza()
{
	div4();
	document.getElementById('eNome').value = "";
	document.getElementById('eTel').value = "";
	document.getElementById('eMail').value = "";
	document.getElementById('sNome').value = "";
	document.getElementById('sTel').value = "";
	document.getElementById('sMail').value = "";
}