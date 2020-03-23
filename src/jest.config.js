const { defaults } = require('jest-config');
module.exports = {
	setupFiles: [
		'jest-canvas-mock',
		'<rootDir>/config/jest/setupFiles'
	]
};