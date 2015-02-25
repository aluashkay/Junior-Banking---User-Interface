function validate()
{
var thisForm = document.forms[0];
var emailP = /^[\w]+([\.\w-]*)?@[\w]+(\.[\w-]+)*(\.[a-z]{2,3})(\.[a-z]{2,3})*?$/i;
if(thisForm.Account_Number.value =="")
{
alert("Please fill in your account number.");
return false;
}
if(thisForm.Parent_Name.value =="")
{
alert("Please fill in your parent or guardian name.");
return false;
}
if(thisForm.Address.value =="")
{
alert("Please fill in your address.");
return false;
}
if(thisForm.Parent_Number.value =="")
{
alert("Please fill in your parent or guardian contact number.");
return false;
}
if(thisForm.DOB.value =="")
{
alert("Please fill your date of birth.");
return false;
}
if(thisForm.E-mail.value == "")
{
alert("Please fill your E-mail address.");
return false;
}
if(!emailP.test(thisForm.E-mail.value))
{
alert("Please fill your E-mail address correctly.");
return false;
}
if(thisForm.Brach.value =="")
{
alert("Please fill your local Lloyds brach");
return false;
}
}

function change_color()
{
	if(document.getElementById('backpicture').src.match("../images/star.jpg"))
	{
		document.getElementById('content').style.background="rgb(183,222,232)";
		document.getElementById('body').style.background="rgb(0,204,255)";
		document.getElementById('bottom_bar').style.background="rgb(183,222,232)";
		document.getElementById('backpicture').src="../images/sky.jpg";
	}
	else if(document.getElementById('backpicture').src.match("../images/sky.jpg"))
	{
		document.getElementById('content').style.background="rgb(142,180,227)";
		document.getElementById('body').style.background="rgb(23,55,94)";
		document.getElementById('bottom_bar').style.background="rgb(142,180,227)";
		document.getElementById('backpicture').src="../images/fish.jpg";
	}
	else if(document.getElementById('backpicture').src.match("../images/fish.jpg"))
	{
		document.getElementById('content').style.background="rgb(179,162,199)";
		document.getElementById('body').style.background="rgb(96,74,123)";
		document.getElementById('bottom_bar').style.background="rgb(179,162,199)";
		document.getElementById('backpicture').src="../images/star.jpg";
	}
}

/*
function change_color(obj)
{
		document.getElementById('content').style.background="rgb(183,222,232)";
		document.getElementById('nav_bar').style.color="rgb(33,89,104)";
		document.getElementById('body').style.background="rgb(0,204,255)";
		document.getElementById('bottom_bar').style.background="rgb(183,222,232)";
		document.getElementById('backpicture').src="sky.jpg";
		obj.onclick = changeTofish;
}

function changeTofish()
{
		document.getElementById('content').style.background="rgb(142,180,227)";
		document.getElementById('body').style.background="rgb(23,55,94)";
		document.getElementById('bottom_bar').style.background="rgb(142,180,227)";
		document.getElementById('backpicture').src="star.jpg";
}
*/


function blackBackground()
{
	document.body.style.background="url(Images/background.jpg) no-repeat center center fixed";
}

