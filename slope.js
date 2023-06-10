var canvas = document.getElementById("myCanvas");
      var context = canvas.getContext("2d");

      // Draw the mountain
      context.fillStyle = "#FFFAFA";
      context.beginPath();
      context.moveTo(0, 650);
      context.lineTo(500, 200);
      context.lineTo(1000, 650);
      context.closePath();
      context.fill();

      // Draw pine trees
      context.fillStyle = "#1B5E20"; // Dark green color for trees

      // Large pine tree on the mountain
      context.beginPath();
      context.moveTo(350, 500);
      context.lineTo(450, 500);
      context.lineTo(400, 350);
      context.closePath();
      context.fill();

      // Small pine trees scattered around the mountain
      drawPineTree(200, 600);
      drawPineTree(250, 550);
      drawPineTree(700, 600);
      drawPineTree(750, 550);

      // Draw rocks
      context.fillStyle = "#7D7D7D"; // Gray color for rocks

      // Large rock on the mountain
      context.beginPath();
      context.arc(600, 400, 50, 0, Math.PI * 2);
      context.closePath();
      context.fill();

      // Small rocks scattered around the mountain
      drawRock(300, 400);
      drawRock(700, 450);
      drawRock(800, 400);

      // Function to draw a pine tree
      function drawPineTree(x, y) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + 20, y + 50);
        context.lineTo(x - 20, y + 50);
        context.closePath();
        context.fill();
      }

      // Function to draw a rock
      function drawRock(x, y) {
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2);
        context.closePath();
        context.fill();
      }