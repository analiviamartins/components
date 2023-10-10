import axios from 'axios';

const URL_API = 'https://valorant-api.com/v1/agents'

const agentes =  async () => {
    try {
        const resposta = await axios.get(URL_API);
        return resposta.data;
    } catch(error){
        throw error;
    }

}
export default agentes