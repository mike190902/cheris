function cramer() {
var a1 = document.getElementById('a1');
var a1=parseFloat(a1);
var b1 =document.getElementById('b1');
var b1=parseFloat(b1);
var c1 = document.getElementById('c1');
var c1=parseInt(c1);
var a2 =document.getElementById('a2');
var a2=parseFloat(a2);
var b2 =document.getElementById('b2');
var b2=parseInt(b2);
var c2 =document.getElementById('c2');
var c2=parseFloat(c2);

	var x=((c1*b2)-(c2*b1));
	var y=((a1*c2)-(a2*c1));
	var r=((a1*b2)-(a2*b1));

		 x= (x/r);
		 y= (y/r);

		document.getElementById('x').value=x;
		document.getElementById('y').value=y;
	
}