function takeScreenshotAndRedirect() {
    // Define the area to capture (x, y, width, height)
    const captureArea = {
        x: 100, // Replace with your desired x-coordinate
        y: 100, // Replace with your desired y-coordinate
        width: 800, // Replace with your desired width
        height: 600 // Replace with your desired height
    };

    // Create a new canvas to capture the image
    const captureCanvas = document.createElement('canvas');
    const captureCtx = captureCanvas.getContext('2d');

    // Set dimensions to match the capture area
    captureCanvas.width = captureArea.width;
    captureCanvas.height = captureArea.height;

    // Draw the specified area of the screen onto the capture canvas
    html2canvas(document.body, {
        x: captureArea.x,
        y: captureArea.y,
        width: captureArea.width,
        height: captureArea.height
    }).then(canvas => {
        captureCtx.drawImage(canvas, captureArea.x, captureArea.y, captureArea.width, captureArea.height, 0, 0, captureArea.width, captureArea.height);

        // Convert canvas to data URL (image)
        const screenshotData = captureCanvas.toDataURL('image/png');

        // Optionally download the image
        const link = document.createElement('a');
        link.href = screenshotData;
        link.download = 'screenshot.png'; // Set filename
        link.click();

        // Redirect to Google.com
        window.location.href = 'https://www.google.com';
    });
}

// Load html2canvas library
var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js';
document.head.appendChild(script);
