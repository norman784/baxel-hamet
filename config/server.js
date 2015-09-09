var options = {
	development: {
		port: 3000,
		publicPath: process.cwd() + '/public',
		upload: {
			uploadDir: process.cwd() + '/tmp',
			multipart: false
		}	
	},
	production: {
		port: 80,
		publicPath: process.cwd() + '/public',
		upload: {
			uploadDir: process.cwd() + '/tmp',
			multipart: false
		}	
	}
}

module.exports = options[process.env.environment] || options.production;