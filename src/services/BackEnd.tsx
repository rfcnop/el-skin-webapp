import axios from 'axios';

const backEnd = axios.create(
  {
    baseURL: process.env.EL_SKIN_BASE_URL || 'http://localhost:3001/' // assim, dá pra pegar de variável de ambiente, quando presente
  }
);

export default backEnd;

// obs: um interceptor de request é bom para colocar tokens de login, etc

backEnd.interceptors.response.use(
  resposta => resposta,
  erro => {
    console.log(erro);
    switch(erro.status) {
    case 404:
      console.log('404: página não encontrada');
      break;
    default:
      console.log(`Status: ${erro.status}`);
    }
    return Promise.reject(erro);
  }
);
