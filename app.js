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
    link.download = obj.traducao.split(' ').join('-').toLowerCase()+"-"+obj.strong.toUpperCase()+".png";
}, false);

var obj = {
	palavra : '',
	traducao : '',
	strong : ''
}

function desenhaPalavra(obj){
	ctx.fillStyle = '#000';
	ctx.font = "60px Times New Roman";
	ctx.textAlign = "center";
	ctx.fillText(obj.palavra,(canvas.width / 2), (canvas.height / 2));
}

function desenhaTraducao(obj){
	ctx.fillStyle = '#282828';
	ctx.font = "16px Arial";
	ctx.textAlign = "center";
	ctx.fillText(obj.traducao,(canvas.width / 2), 300);
}

function desenhaStrong(obj){
	ctx.fillStyle = '#282828';
	ctx.font = "14px Arial";
	ctx.textAlign = "center";
	ctx.fillText("Strong: " + obj.strong.toUpperCase(),(canvas.width / 2), 330);
}

function desenhaAll(obj) {
	reset();
	desenhaPalavra(obj);
	desenhaTraducao(obj);
	desenhaStrong(obj)
}

document.getElementById('palavra').addEventListener('keyup', function() {
	obj.palavra = document.getElementById('palavra').value;
	desenhaAll(obj)
});

document.getElementById('traducao').addEventListener('keyup', function() {
	obj.traducao = document.getElementById('traducao').value;
	desenhaAll(obj)
});

document.getElementById('strong').addEventListener('keyup', function() {
	obj.strong = document.getElementById('strong').value;
	desenhaAll(obj)
});
