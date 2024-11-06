function calculateRectangleArea() {
    const width = document.getElementById('rectWidth').value;
    const height = document.getElementById('rectHeight').value;
    if (width && height) {
        const area = width * height;
        document.getElementById('rectangleArea').innerText = `Area: ${area}`;
        
        const rect = document.getElementById('rectangle');
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('x', (200 - width) / 2);  
        rect.setAttribute('y', (200 - height) / 2); 
    } else {
        document.getElementById('rectangleArea').innerText = 'Please enter both width and height';
    }
}

function calculateTriangleArea() {
    const base = document.getElementById('triBase').value;
    const height = document.getElementById('triHeight').value;
    if (base && height) {
        const area = 0.5 * base * height;
        document.getElementById('triangleArea').innerText = `Area: ${area}`;
        
        const triangle = document.getElementById('triangle');
        triangle.setAttribute('points', `100,${100 - height / 2} ${100 + base / 2},${100 + height / 2} ${100 - base / 2},${100 + height / 2}`);  // Centering the triangle
    } else {
        document.getElementById('triangleArea').innerText = 'Please enter both base and height';
    }
}

function calculateCircleArea() {
    const radius = document.getElementById('circleRadius').value;
    if (radius) {
        const area = Math.PI * radius * radius;
        document.getElementById('circleArea').innerText = `Area: ${area.toFixed(2)}`;
        
        const circle = document.getElementById('circle');
        circle.setAttribute('cx', 100);  
        circle.setAttribute('cy', 100);  
        circle.setAttribute('r', radius);
    } else {
        document.getElementById('circleArea').innerText = 'Please enter the radius';
    }
}
