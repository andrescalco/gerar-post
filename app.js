var canvas = document.querySelector('#my-canvas');
var ctx = canvas.getContext( '2d' );

canvas.width = 600;
canvas.height = 460;

ctx.fillStyle = '#2980b9';
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = '#ffffff';
ctx.fillRect(50,50,500,350);

function reset() {
	
	ctx.fillStyle = '#2980b9';
	ctx.fillRect(0,0,canvas.width,canvas.height);

	ctx.fillStyle = '#ffffff';
	ctx.fillRect(50,50,500,350);

}


var link = document.querySelector('#download');
    
link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);


var titulo;
var traducao;

document.getElementById('palavra').addEventListener('keyup', function() {
	var stringTitle = document.getElementById('palavra').value;
	
	titulo = stringTitle;

	reset();

	ctx.fillStyle = '#000';
	ctx.font = "60px Times New Roman";
	ctx.textAlign = "center";
	ctx.fillText(stringTitle,(canvas.width / 2), (canvas.height / 2));

	if (traducao) {
		ctx.fillStyle = '#282828';
		ctx.font = "16px Arial";
		ctx.textAlign = "center";
		ctx.fillText(traducao,(canvas.width / 2), 300);
	}

});

document.getElementById('traducao').addEventListener('keyup', function() {
	var stringTitle = document.getElementById('traducao').value;
	
	traducao = stringTitle;

	reset();

	if (titulo) {
		ctx.fillStyle = '#000';
		ctx.font = "60px Times New Roman";
		ctx.textAlign = "center";
		ctx.fillText(titulo,(canvas.width / 2), (canvas.height / 2));
	}

	ctx.fillStyle = '#282828';
	ctx.font = "16px Arial";
	ctx.textAlign = "center";
	ctx.fillText(stringTitle,(canvas.width / 2), 300);

});