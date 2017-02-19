module.exports = {
	uri: "mongodb://localhost/cookbook-app",
	opts: {
		server: { 
			auto_reconnect: true,
			poolSize: 40
		},
		user: "root"
	}
};