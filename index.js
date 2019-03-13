var restify = require('restify');
var axios = require('axios');
const swagger = require('./test.json');
const toJsonSchema = require('to-json-schema');
var renameKeys = require('rename-keys');



var server = restify.createServer({
    name: 'Swaggeneame',
    version: '1.0.0'
});
server.use(restify.plugins.queryParser({
    mapParams: true
}));
server.use(restify.plugins.bodyParser({
    mapParams: true
}));
server.use(restify.plugins.acceptParser(server.acceptable));


server.get('/make/swagger', function(req, res, next) {
    res.send(200);
    return next();
});

/**
 * @return {string}
 */
function ChildRecursive(body) {
    let cabecera = '\n|Campo|Tipo|Descripción|Valores posibles - Formato|Valor de ejemplo|\n' +
                    '|:---|:---:|:---:|:---:|---:|\n'
     let md= getElem(body,'','',cabecera);
     const regex = /\.0./gm
    const regex2 = /\n.+\.object/gm;

    const subst = `.`;
    const subst2 = ``;

    const result = md.replace(regex, subst);

     return result.replace(regex2,subst2);
}
function getElem(obj,prev='',type='',common=''){
    let mdreq

    if (prev !== '')
    {    //console.log('|'+prev+'|'+type+'||||\n')
        common += '|'+prev+'|'+type+'||||\n';
    }
    Object.keys(obj).forEach(function (item) {

        if (typeof obj[item] === 'object' || Array.isArray(obj[item]) && obj[item] !== null)
        {
            if (Array.isArray(obj[item]) && obj[item] !== null )
            {
                if(prev === '')
                {
                    let input = obj[item].slice(0,1);

                    common=getElem(input,item,'Array',common)
                }
                else
                {
                    let buldprev=prev+'.'+item;
                    let input = obj[item].slice(0,1);

                    common =getElem(input,buldprev,'Array',common)
                }

            }else{
            if(prev === '')
            {
                common=getElem(obj[item],item,typeof(obj[item]),common)
            }
            else
            {
                let buldprev=prev+'.'+item;
                common=getElem(obj[item],buldprev,typeof(obj[item]),common)
            }
            }
        }

        else {
            let buldprev;
            if(prev === ''){
                buldprev=item;}else{ buldprev=prev+'.'+item;}
                //console.log('|'+buldprev+'|'+typeof obj[item]+'|||'+obj[item]+'|\n');
                common += '|'+buldprev+'|'+typeof obj[item]+'|||'+obj[item]+'|\n';

        }
    }
    );

    mdreq = common;
    return mdreq;

}

async  function SendPeticionPOST(url,data) {
    let config = {
        headers: {
            "applicationCode":"ATG",
            "consumerId":"1234",
            "countryCode":"CHL",
            "requestTimestamp":"2018-12-12T12:12:12.444-03:00",
            "Content-Type": "application/json"
        }
    };
    try {
        const response = await axios.post('http://localhost:8081/'+url,data,config);
        return response.data;
        
    }
    catch (e) {
        console.log(e);
    }
}
function adddefinitionreq(jsonbodyObj)
{
   let schema = toJsonSchema(jsonbodyObj);
    swagger.definitions.RequestCreate = schema;
}
function adddefinitionres(jsonbodyObj)
{
    let schema = toJsonSchema(jsonbodyObj);
    swagger.definitions.Response = schema;
}
function countProperties(obj) {
    return Object.keys(obj).length;
}

function changes(request, response) {
    let descriptiones = "\n# 1. Modo de Consumo\n## 1.1 URI\n| Ambiente | API Endpoint                                              | Token Endpoint                      |\n| -------- |:----------------------------------------------------------|:----------------------------------------------------|\n| UAT      |https://apiinternaluat.entel.cl/common/businessInteraction/v1/notifications | https://apiinternaluat.entel.cl/auth/oauth/v2/token |\n| PRD      |https://apiinternal.entel.cl/common/businessInteraction/v1/notifications    | https://apiinternal.entel.cl/auth/oauth/v2/token   |\n\n\n# 2. Estructura de entrada (Request)\n## 2.1. Parametros Header\n\n| Campo            | Tipo              | Obligatorio | Descripcion                                                                                                                                                           | Valores posibles - Formato               |\n| -----------------| ------------------| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------|\n| Content-Type     | string            | Si          | Indica el tipo de contenido del cuerpo del mensaje enviado al destinatario                                                                                            | application/json; charset=utf-8          |\n| Authorization    | string            | Si          | Token de acceso alfanumerico obtenido de la autenticación OAuth                                                                                                       | Bearer xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx  |\n| applicationCode  | string            | Si          | Código único que representa al sistema consumidor. Es responsabilidad del consumidor enviar este valor                                                                | [Posibles valores](https://tdentel.atlassian.net/wiki/download/attachments/565838019/Master%20Headers%20Codes%20eUSB.xlsx?version=3&modificationDate=1531253559009&cacheVersion=1&api=v2)                  |\n| countryCode      | string            | Si          | Identifica el país desde donde se origina la petición. Es responsabilidad del consumidor enviar este valor                                                            | CHL (Chile), PER (Perú)                  |\n| consumerId       | string            | Si          | Código único de identificación de la ejecución, que identifica el evento del consumidor. Es responsabilidad del consumir enviar este valor según las reglas definidas |[Reglas](https://tdentel.atlassian.net/wiki/download/attachments/1151374/Master%20Headers%20Codes%20eUSB.xlsx?api=v2) |\n| requestTimestamp | string (Datetime) | Si          | Fecha, hora y timezone en el cual se envía la petición del consumidor.                                                                                                | YYYY-MM-DDThh:mm:ss.sss-Z                |  \n\n\n\n## 3.2. Estructura Request Body\n\n    "+ChildRecursive(request)+"              \n  \n# 4. Estructura de salida (Response)\n\n| Campo | Tipo | Descripcion |\n|---------------------------|----------|--------------------------------------------------------------------|\n"+ChildRecursive(response)+"\n";
    //console.log(descriptiones)
    return descriptiones;

}

function ChangeNamePath(name) {
     swagger.paths = renameKeys(swagger.paths, function(key, val) {
         return '/'+name;

     });



    }

server.post('/make/swagger/*', async function (req, res, next) {
    swagger.info.title = "APIM-example";
    swagger.info.description = "Ejemplo de Creacion de un swagger";
    //ChildRecursive(req.body);
    adddefinitionreq(req.body);
    let response = await SendPeticionPOST(req.params[Object.keys(req.params)[0]], req.body);
    //ChildRecursive(response);
    adddefinitionres(response);
    ChangeNamePath(req.params[Object.keys(req.params)[0]]);
    swagger.paths[Object.keys(swagger.paths)[0]].post.description= changes(req.body,response);
    res.setHeader('content-type', 'application/json');
    //console.log(swagger.paths);
    res.send(JSON.parse(JSON.stringify(swagger)));
    return next();
});


server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
