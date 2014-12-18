$(document).ready(function(){
	$('#button1').click(function(){
		$('#canvas1').drawArc({
			strokeStyle: '#D2F279',
			strokeWidth: 5,
			x: 200,
			y: 200,
			radius: 50,
			fillStyle: '#E0F89F'
		  })
		  .drawArc({
		  	fillStyle: '#9979F2',
		  	x: 100,
		  	y: 100,
		  	radius: 25
		  })
		  .drawArc({
		  	fillStyle: '#B79FF8',
		  	x: 300,
		  	y: 150,
		  	radius: 100
		  })
		  .drawLine({
			  strokeStyle: '#F8E89F',
			  strokeWidth: 4,
			  rounded: true,
			  startArrow: true,
			  arrowRadius: 15,
			  arrowAngle: 90,
			  x1: 200, y1: 300,
			  x2: 150, y2: 125,
			  x3: 200, y3: 115
		  })
		  .drawBezier({
			  strokeStyle: '#72D4F2',
			  strokeWidth: 4,
			  rounded: true,
			  startArrow: true,
			  endArrow: true,
			  arrowRadius: 15,
			  arrowAngle: 90,
			  x1: 10, y1: 100,
			  cx1: 150, cy1: 300,
			  cx2: 80, cy2: 400,
			  x2: 150, y2: 400,
			  cx3: 250, cy3: 350,
			  cx4: 100, cy4: 50,
			  x3: 250, y3: 200
		  })
		  .drawPolygon({
			  fillStyle: '#589',
			  strokeStyle: '#000',
			  x: 100, y: 400,
			  radius: 50,
			  sides: 5,
			  rotate: 25
		  })
		  .drawVector({
			  strokeStyle: '#F29072',
			  strokeWidth: 4,
			  rounded: true,
			  endArrow: true,
			  arrowRadius: 15,
			  arrowAngle: 90,
			  x: 380, y: 340,
			  a1: 180, l1: 100,
			  a2: 90, l2: 100
		})
		.drawImage({
			source: 'img/canvas1.jpg',
			x:225,
			y:225
		}); //end draw arc 
	}); // end button1 click  

	$('#clear').click(function(){
		$('#canvas1').clearCanvas();
	}); //end click-clear

	$('#image').change(function(){
		if($('#image').val() == 'cute') {
			$('#canvas2').drawImage({
				source: 'img/canvas3-1.jpg',
				x: 225,
				y: 225
			});
		} else if($('#image').val() == 'goofy') {
			$('#canvas2').drawImage({
				source: 'img/canvas3-4.jpg',
				x: 225,
				y: 225
			});
		} else if($('#image').val() == 'grumpy') {
			$('#canvas2').drawImage({
				source: 'img/canvas3-2.jpeg',
				x: 225,
				y: 225
			});
		} else if($('#image').val() == 'diva') {
			$('#canvas2').drawImage({
				source: 'img/canvas1.jpg',
				x: 225,
				y: 225
			});
		} else  {
			$('#canvas2').drawImage({
				source: 'img/canvas3-2.jpg',
				x: 225,
				y: 225
			});
		} //end if
	}); //end change

	$('#create').click(function(){
		var line1 = $('#line1').val().toUpperCase();

		$('#canvas2').drawText({
			fillStyle: '#fff',
			strokeStyle: '#000',
			strokeWidth: 3,
			x: 225,
			y: 50,
			fontSize: '5em',
			fontFamily: 'Impact, sans-serif',
			text: line1
		})
		.drawText({
			fillStyle: '#fff',
			strokeStyle: '#000',
			strokeWidth: 3,
			x: 225,
			y: 400,
			fontSize: '5em',
			fontFamily: 'Impact, sans-serif',
			text: "Be Happy!"
		}); //end draw text

	}); //end click
}); //end ready