import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://soundpad-app.prismic.io/api/v2',
    headers: {
        Authorization: 'MC5ZdXFuTFJBQUFDQUFqT19H.77-9De-_ve-_ve-_ve-_vRLvv70KZ--_ve-_ve-_ve-_ve-_vVBh77-9Me-_ve-_vSB1Di7vv73vv70g77-9GzLvv70'
    }
})
  