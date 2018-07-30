// 223 Math medium


/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    let left = Math.max(A, E);
    let right = Math.min(C, G);
    let down = Math.max(B, F);
    let up = Math.min(D, H);

    if (right > left && up > down)
        return (C - A) * (D - B) + (G - E) * (H - F) - (right - left) * (up - down);
    return (C - A) * (D - B) + (G - E) * (H - F)
};
console.time("exec time:");
console.log(computeArea(-2, -2, 2, 2, -3, -3, 3, -1));
console.timeEnd("exec time:");
