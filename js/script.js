var canvas = document.getElementById("canvas");

		var ctx = canvas.getContext("2d");

		// cores
		var corCinza = "#c7c7c7";
		var corAzul = "#0074d9";
		var corVerde = "#2ecc71";
		var corAmarelo = "#f1c40f";
		var corCeu = "#87ceeb";
		var corSol = "#fcd12a";
		var corNuvem = "#ffffff";
		var corVermelho = "#e74c3c";

		// ceu
		ctx.fillStyle = corCeu;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// sol
		ctx.beginPath();
		ctx.arc(100, 100, 50, 0, Math.PI*2);
		ctx.fillStyle = corSol;
		ctx.fill();

		// nuvens
		ctx.beginPath();
		ctx.arc(200, 100, 20, 0, Math.PI*2);
		ctx.arc(230, 100, 25, 0, Math.PI*2);
		ctx.arc(270, 100, 20, 0, Math.PI*2);
		ctx.fillStyle = corNuvem;
		ctx.fill();

		ctx.beginPath();
		ctx.arc(400, 50, 30, 0, Math.PI*2);
		ctx.arc(450, 50, 40, 0, Math.PI*2);
		ctx.arc(500, 50, 30, 0, Math.PI*2);
		ctx.fillStyle = corNuvem;
		ctx.fill();

		// rua
		ctx.fillStyle = corCinza;
		ctx.fillRect(0, 350, canvas.width, 50);

		// predio 1
		ctx.fillStyle = corCinza;
		ctx.fillRect(50, 150, 100, 200);

		// janela predio 1
		ctx.fillStyle = corAzul;
		ctx.fillRect(60, 170, 40, 40);

		// predio 2
		ctx.fillStyle = corCinza;
		ctx.fillRect(200, 100, 150, 250);

		// porta predio 2
		ctx.fillStyle = corAzul;
		ctx.fillRect(250, 250, 50, 100);

		// predio 3
		ctx.fillStyle = corCinza;
		ctx.fillRect(400, 150, 100, 200);

		// predio 3
		ctx.fillStyle = corAzul;
		ctx.fillRect(410, 170, 40, 40);

		// Define as dimensoes do carro
		var largura = 100;
		var altura = 50;
		var raio = 15;

		// Define a posicao do carro
		var posX = 0;
		var posY = 350;

		// Desenha o carro
		ctx.beginPath();
		ctx.fillStyle = corVerde;
		ctx.rect(posX, posY - altura/2, largura, altura/2);
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.fillStyle = corVermelho;
		ctx.arc(posX + raio, posY, raio, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(posX + largura - raio, posY, raio, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.fillStyle = corAzul;
		ctx.rect(posX + largura/4, posY - altura, largura/2, altura/2);
		ctx.fill();
		ctx.closePath();