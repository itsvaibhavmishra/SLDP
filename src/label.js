// Defining labelmap

const labelMap = {
    1:{name: 'Hello', color: 'orange'},
    2:{name: 'Friend', color: 'green'},
    3:{name: 'Yes', color: 'blue'},
    4:{name: 'No', color: 'magenta'},
    5:{name: 'Thank You', color: 'yellow'},
    6:{name: 'Ok', color: 'purple'},
    7:{name: 'Bathroom', color: 'lime'},
    8:{name: 'Please', color: 'pink'},
    9:{name: '1000 Years of Death', color: 'red'}
};

// Creating drawing fuction
// rectangle drawing function drawRect, ctx is for canvas
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
    for (let i = 0; i < boxes.length; i++) {
        if(boxes[i] && classes[i] && scores[i] > threshold) {
            // extracting variables
            const [y, x, height, width] = boxes[i];
            // extracting y, x, height and width from the box component of detections (boxes[i])
            const text = classes[i];
            // extracting text : 1-9 from the class component (classes[i])

            // styling
            ctx.storkeStyle = labelMap[text]['color']; // name and color of detection
            ctx.linewidth = 10;
            ctx.fillStyle = 'white';
            ctx.font = '30px Consolas';

            // drawing
            ctx.beginPath();
            // appending text and threshold with detected items
            ctx.fillText(labelMap[text]['name'] + ' : ' + Math.round(scores[i] * 100)/100, x * imgWidth, x * imgHeight-10);
            // configuring rectangle i.e. 640/320 = 2 and 480/320 = 1.5
            ctx.rect(x * imgWidth, y * imgHeight, width * imgWidth/2, height * imgHeight/1.5);
            ctx.stroke();
        }
    }
}