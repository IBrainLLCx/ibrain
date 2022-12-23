const canvas = document.getElementById('snow-canvas');
const ctx = canvas.getContext('2d');
let snowflakes = [];


function generateSnowflakes() {
    for (let i = 0; i < 50; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width, // random x position
        y: Math.random() * canvas.height, // random y position
        radius: Math.random() * 3 + 1, // random radius between 1 and 4
        speed: Math.random() * 1 + 0.5 // random speed between 0.5 and 1.5
      });
    }
  }
  

  function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas
    ctx.fillStyle = 'white'; // set the fill color to white
    snowflakes.forEach(snowflake => {
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }
  

  function updateSnowflakes() {
    snowflakes.forEach(snowflake => {
      snowflake.y += snowflake.speed; // update the y position
      if (snowflake.y > canvas.height) {
        // if the snowflake goes off the bottom of the canvas,
        // reset its y position to the top of the canvas
        snowflake.y = 0;
      }
    });
  }

  function animateSnowflakes() {
    generateSnowflakes(); // generate new snowflakes
    drawSnowflakes(); // draw the snowflakes on the canvas
    updateSnowflakes(); // update the position of the snowflakes
    requestAnimationFrame(animateSnowflakes); // request the next animation frame
  }
  
  requestAnimationFrame(animateSnowflakes); // start the animation
  
