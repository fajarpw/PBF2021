import { domainPath } from './Config'

const PostAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'appplication/json'
            },
            body: JSON.stringify(data)
        })
            .then(Response => Response.json())
            .then((result) => {
                resolve(result)
            }, (err) => {
                reject(err)
            })
    })
    return promise
}

export default PostAPI