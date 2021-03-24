//these are functions to convert hex numbers to rgb

function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`
}

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    // color.rgb = function()
    return color;
}

// hex(255, 100, 25);
// '#ff6419'