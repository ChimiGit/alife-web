let FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM;
if (typeof process !== 'undefined') {
	({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
	process.stdout && process.stdout.isTTY;
}
