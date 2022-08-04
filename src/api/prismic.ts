import * as prismic from '@prismicio/client'

const repositoryName = 'soundpadapp'
const repositoryEndpoint = prismic.getRepositoryEndpoint(repositoryName);
export const client = prismic.createClient(repositoryEndpoint, {
  accessToken: 'MC5ZdXdzeFJBQUFDSUFrOXNM.LO-_ve-_ve-_vSEe77-9MiESPe-_vTXvv73vv71rTe-_vWLvv73vv73vv73vv70OKR7vv70kQe-_ve-_vRU'
})