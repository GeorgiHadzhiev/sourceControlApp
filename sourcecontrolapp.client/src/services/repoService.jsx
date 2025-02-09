import * as request from  './requester.jsx'
const baseUrl = 'https://localhost:7035/Repo'

// The "request" function and it's extentions take in the following params:
// 1st param - The url endpoint you want to shoot to, as a string.
// 2nd param - the given data you want to send, as an object.
// 3rd param - a bool flag for whether or not the given user owns the data that's being requested. 
// If any params are not relevant to the given request they can be left out. 
const create = async (repoData) => request.post(`${baseUrl}/Create`, repoData)


const repoService = {

    create,

}

export default repoService;