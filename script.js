
window.onload = function() {
    var gif = document.getElementById('gif');
    var containerWidth = document.getElementById('container').offsetWidth;
    var containerHeight = document.getElementById('container').offsetHeight;
    
    // Move the GIF from left to right
    setTimeout(function() {
        gif.style.left = (containerWidth + 100) + 'px'; 
    }, 3000);

    // Rotate the GIF
    setTimeout(function() {
        gif.style.transform = 'translateY(-50%) rotate(60deg)';
    }, 6000);

    setTimeout(function() {
        gif.style.left = '0px';
        gif.style.top = (containerHeight - 300) + 'px'; 
        gif.style.transform = 'translateY(-60%) rotate(0deg)'; 
    }, 8000); 
}

