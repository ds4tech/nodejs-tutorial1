
module.export = {
	apps: [{
		name: 'tut1',
		script: './index.js'
	}],
	deploy: {
		production: {
			user: 'ubuntu',
			host: 'ec2-34-250-72-252.eu-west-1.compute.amazonaws.com',
			key: '~/.ssh/id_rsa.pub',
			ref: 'origin/master',
			repo: 'git@github.com:ds4tech/tut1-nodejs.git'
			path: '/home/ubuntu/server/tut1-nodejs',
			'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
		}
	}
}

