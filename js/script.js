var canvas = document.getElementById("canvas");

		var ctx = canvas.getContext("2d");

        // imagem godzilla
		var img = new Image();

		img.src = "img/god.png";

		img.onload = function() {
			ctx.drawImage(img, 1000, 0);
		}
	
		ctx.fillStyle = "#87ceeb"; 
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = "#ffd700"; 
		ctx.beginPath();
		ctx.arc(100, 80, 40, 0, 2 * Math.PI);
		ctx.fill();

		ctx.fillStyle = "#ffffff"; 

		ctx.beginPath();
		ctx.arc(200, 120, 20, 0, 2 * Math.PI);
		ctx.arc(240, 120, 20, 0, 2 * Math.PI);
		ctx.arc(220, 140, 20, 0, 2 * Math.PI);
		ctx.fill();

		ctx.beginPath();
		ctx.arc(350, 100, 25, 0, 2 * Math.PI);
		ctx.arc(390, 100, 25, 0, 2 * Math.PI);
		ctx.arc(370, 120, 25, 0, 2 * Math.PI);
		ctx.fill();

		ctx.fillStyle = "#808080"; 
		ctx.fillRect(0, 500, canvas.width, 150);

		ctx.fillStyle = "#a0522d"; 

		ctx.fillRect(50, 350, 100, 150);
		ctx.fillRect(200, 330, 120, 170);
		ctx.fillRect(380, 370, 80, 130);

		ctx.fillStyle = "#ff0000"; 

		ctx.fillRect(270, 450, 80, 40); 
		ctx.fillRect(270, 435, 20, 15); 
		ctx.fillRect(330, 435, 20, 15); 

		ctx.fillStyle = "#000000";

		ctx.beginPath();
		ctx.arc(280, 480, 20, 0, 2 * Math.PI);
		ctx.fill();

		ctx.beginPath();
		ctx.arc(350, 480, 20, 0, 2 * Math.PI);
		ctx.fill();