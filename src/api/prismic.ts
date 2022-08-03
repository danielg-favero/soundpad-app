import * as prismic from '@prismicio/client'

const repositoryName = 'soundpad-app'
const repositoryEndpoint = prismic.getRepositoryEndpoint(repositoryName);
export const client = prismic.createClient(repositoryEndpoint, {
  accessToken: 'MC5ZdXFuTFJBQUFDQUFqT19H.77-9De-_ve-_ve-_ve-_vRLvv70KZ--_ve-_ve-_ve-_ve-_vVBh77-9Me-_ve-_vSB1Di7vv73vv70g77-9GzLvv70'
})