function hello_click()
{
	var val1 = document.getElementById("text1").value;
	var val2 = document.getElementById("text2").value;
	var val3 = _test_cpp_func1(val1,val2);

	alert('HELLO == ' + val3);
}
function world_click()
{
	_test_cpp_func2();
}
function canvas_draw()
{
	var canvas1=document.getElementById("canvas1");
	var context=canvas1.getContext("2d");
	context.fillStyle="#FF0000";
	context.fillRect(0,0,400,300);

	context.moveTo(10,10);
	context.lineTo(150,50);
	context.lineTo(10,50);
	context.stroke();

	context.fillStyle="yellow";
	context.fillRect(0,0,250,100)

	context.transform(1,0.5,-0.5,1,30,10);
	context.fillStyle="red";
	context.fillRect(0,0,250,100);

	context.transform(1,0.5,-0.5,1,30,10);
	context.fillStyle="blue";
	context.fillRect(0,0,250,100);
}

mergeInto(LibraryManager.library,{hello_click});
mergeInto(LibraryManager.library,{world_click});
mergeInto(LibraryManager.library,{canvas_draw});
