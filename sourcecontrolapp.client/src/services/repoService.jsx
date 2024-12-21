import * as request from  './requester.jsx'
const baseUrl = 'https://localhost:7035/Repo'

const create = async (albumData) => request.post(`${baseUrl}/Create`, albumData,false)



const repoService = {

    create,

}

export default repoService;