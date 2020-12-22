const PROXY_CONFIG = [
	{
		context: ['/api', '/sanctum/csrf-cookie', '/images', '/storage'],
		target: 'http://localhost:8000',
		secure: false,
	},
]

module.exports = PROXY_CONFIG
