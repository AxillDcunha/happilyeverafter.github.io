const Post = require('../models/Post')

module.exports = {

	get: (params) => {
		return new Promise((resolve, reject) => {
			Post.find(params)
			.then(posts => {
				resolve(Post.convertToJson(posts))
			})
			.catch(err => {
				reject(err)
			})
		})
	},

	getById: (id) => {
		return new Promise((resolve, reject) => {
			Post.findById(id)
			.then(post => {
				resolve(post.summary())
			})
			.catch(err => {
				reject(new Error(Post.resourceName + ' ' + id + ' not found.'))
			})
		})
	},

	post: (body) => {
		return new Promise((resolve, reject) => {
			Post.create(body)
			.then(post => {
				resolve(post.summary())
			})
			.catch(err => {
				reject(err)
			})
		})
	},

	put: (id, params) => {
		return new Promise((resolve, reject) => {
			Post.findByIdAndUpdate(id, params, {new:true})
			.then(post => {
				resolve(post.summary())
			})
			.catch(err => {
				reject(err)
			})
		})
	},

	delete: (id) => {
		return new Promise((resolve, reject) => {
			Post.findByIdAndRemove(id)
			.then(() => {
				resolve()
			})
			.catch(err => {
				reject(err)
			})
		})
	}

}
