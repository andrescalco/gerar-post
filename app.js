var canvas = document.querySelector('#my-canvas');
var ctx = canvas.getContext( '2d' );

canvas.width = 600;
canvas.height = 460;

var img1 = new Image();

img1.onload = function () {

    ctx.drawImage(img1, 0, 0);
};

img1.src = 'img/bg-post-fb.jpg';

function reset() {

	ctx.drawImage(img1, 0, 0);

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