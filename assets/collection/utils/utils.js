export function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
export function replaceAll(source, from, to, caseSensitive = true) {
    return source.replace(new RegExp(from.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, '\\$&'), (!caseSensitive ? 'gi' : 'g')), (typeof (to) === 'string') ? to.replace(/\$/g, '$$$$') : to);
}
export function str2rgb(str) {
    const rgb = [];
    const result = str.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    rgb[0] = result[1];
    rgb[1] = result[2];
    rgb[2] = result[3];
    if (rgb[3]) {
        rgb[3] = result[4];
    }
    return rgb;
}
export function rgb2str(r, g, b, a) {
    if (a) {
        return `rgba(${r},${g},${b},${a})`;
    }
    else {
        return `rgb(${r},${g},${b})`;
    }
}
export function grayscale(r, g, b, amount = 1) {
    var intensity = 0.3 * r + 0.59 * g + 0.11 * b;
    return rgb2str(Math.floor(intensity * amount + r * (1 - amount)), Math.floor(intensity * amount + g * (1 - amount)), Math.floor(intensity * amount + b * (1 - amount)));
}
