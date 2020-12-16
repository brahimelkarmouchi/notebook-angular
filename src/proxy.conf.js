const PROXY_CONFIG = [
	{
		context: ['/api', '/sanctum/csrf-cookie', '/images'],
		target: 'http://localhost:8000',
		secure: false,
	},
]

module.exports = PROXY_CONFIG
