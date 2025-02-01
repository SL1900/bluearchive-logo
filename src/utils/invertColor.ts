export function InvertColor(color: string) {
    if (color.indexOf('#') === 0) {
        color = color.slice(1);
    }
    if (color.length === 3) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    if (color.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    let r = parseInt(color.slice(0, 2), 16);
    let g = parseInt(color.slice(2, 4), 16);
    let b = parseInt(color.slice(4, 6), 16);

    let r_str = (255 - r).toString(16);
    let g_str = (255 - g).toString(16);
    let b_str = (255 - b).toString(16);

    return "#" + r_str.padStart(2,"0") + g_str.padStart(2, "0") + b_str.padStart(2, "0");
}
