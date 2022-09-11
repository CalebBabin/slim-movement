
/**
 * @param {number} a 
 * @param {number} b 
 * @param {number} p a float between 0.0 and 1.0
 * @returns number between a and b
 */
export const lerp = (a, b, p) => {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return min + (max - min) * p;
}

/**
 * @param {number} x a float between 0.0 and 1.0
 * @returns number between 0.0 and 1.0
 */
export const easeInOutSine = (x) => {
	return -(Math.cos(Math.PI * x) - 1) / 2;
}