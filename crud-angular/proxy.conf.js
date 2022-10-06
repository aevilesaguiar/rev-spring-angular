//prática recomendada: é como se estivesse fazendo chamadas para o mesmo domínio e não importa que um está na porta 4200 e outro na porta 8080
const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8080/',//toda vez que eu fizer um /api no angular ele vai redirecionar para http://localhost:8080/api
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;

//incluir no package.json    "start": "ng serve --proxy-config proxy.conf.js",
//e agora quando for executar esse arquivo usaremos o npm run start e não mais o ng serve, para que possamos sempre usar o proxy
