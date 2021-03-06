var restify = require('restify');
var axios = require('axios');
var qs = require('qs');

const swagger = require('./test.json');

const toJsonSchema = require('to-json-schema');
var renameKeys = require('rename-keys');

const options = {
    postProcessFnc: (type, schema, value, defaultFunc) =>
        (type === 'integer' || type === 'string') ? {...schema,example:value} : defaultFunc(type, schema, value),

};
Object.prototype.isEmpty = function() {
    for(var key in this) {
        if(this.hasOwnProperty(key))
            return false;
    }
    return true;
}

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

async function getCredencials(client_id, secret_id) {
    const data = qs.stringify({
        grant_type: 'client_credentials',
        client_id: client_id,
        client_secret: secret_id,
        scope: 'oob'
    });
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    };

    try {
        const response = await axios.post('https://10.49.22.7:8443/auth/oauth/v2/token', data, headers);
        return response.data;

    } catch (e) {
        console.log(e);
    }


}

async  function SendPeticion(url,data,method,client_id,secret_id) {
    let barrear = await  getCredencials(client_id,secret_id);
    console.log(barrear);
    let config = {
        headers: {
            "applicationCode":"ATG",
            "consumerId":"1234",
            "countryCode":"CHL",
            "requestTimestamp":"2018-12-12T12:12:12.444-03:00",
            "Content-Type": "application/json",
            "Authorization": "Bearer "+barrear

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

   return toJsonSchema(jsonbodyObj,options);
}
function adddefinitionres(jsonbodyObj)
{
    return toJsonSchema(jsonbodyObj,options);
}

function deleteparameterBody() {
    swagger.paths[Object.keys(swagger.paths)[0]].post.parameters.splice(4)

}

function ChildRecursive2(queery) {
    let cabecera = '\n|Campo|Tipo|Descripción|Valores posibles - Formato|Valor de ejemplo|\n' +
                    '|:---|:---:|:---:|:---:|---:|\n'
    Object.keys(queery).forEach(function (item) {
        cabecera += '|'+item+'|query|||'+queery[item]+'|\n';
    });
    return cabecera;
}

function changes(request, response,uri,tenimosquerry = true,queery = {}) {
    let descriptiones;
    if( typeof request !== 'undefined' && Object.keys(request).length !== 0 ) {
        if (tenimosquerry)
         descriptiones = "\n# 1. Modo de Consumo\n## 1.1 URI\n| Ambiente | API Endpoint                                              | Token Endpoint                      |\n| -------- |:----------------------------------------------------------|:----------------------------------------------------|\n| UAT      |https://apiinternaluat.entel.cl/" + uri + " | https://apiinternaluat.entel.cl/auth/oauth/v2/token |\n| PRD      |https://apiinternal.entel.cl/" + uri + "    | https://apiinternal.entel.cl/auth/oauth/v2/token   |\n\n\n# 2. Estructura de entrada (Request)\n## 2.1. Parametros Header\n\n| Campo            | Tipo              | Obligatorio | Descripcion                                                                                                                                                           | Valores posibles - Formato               |\n| -----------------| ------------------| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------|\n| Content-Type     | string            | Si          | Indica el tipo de contenido del cuerpo del mensaje enviado al destinatario                                                                                            | application/json; charset=utf-8          |\n| Authorization    | string            | Si          | Token de acceso alfanumerico obtenido de la autenticación OAuth                                                                                                       | Bearer xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx  |\n| applicationCode  | string            | Si          | Código único que representa al sistema consumidor. Es responsabilidad del consumidor enviar este valor                                                                | [Posibles valores](https://tdentel.atlassian.net/wiki/download/attachments/565838019/Master%20Headers%20Codes%20eUSB.xlsx?version=3&modificationDate=1531253559009&cacheVersion=1&api=v2)                  |\n| countryCode      | string            | Si          | Identifica el país desde donde se origina la petición. Es responsabilidad del consumidor enviar este valor                                                            | CHL (Chile), PER (Perú)                  |\n| consumerId       | string            | Si          | Código único de identificación de la ejecución, que identifica el evento del consumidor. Es responsabilidad del consumir enviar este valor según las reglas definidas |[Reglas](https://tdentel.atlassian.net/wiki/download/attachments/1151374/Master%20Headers%20Codes%20eUSB.xlsx?api=v2) |\n| requestTimestamp | string (Datetime) | Si          | Fecha, hora y timezone en el cual se envía la petición del consumidor.                                                                                                | YYYY-MM-DDThh:mm:ss.sss-Z                |  \n\n\n\n## 3.2. Estructura Request Body\n\n    " + ChildRecursive(request) + "              \n  \n# 4. Estructura de salida (Response)\n\n" + ChildRecursive(response) + "\n\n\n\n# 5.  Códigos de  retorno\n\nA continuacion los posibles codigos retornados para este servicio\n\n| Code Status  HTTP                    | Descripción HTTP                                                                              |\n|--------------------------------------|:----------------------------------------------------------------------------------------------|\n| 200 - OK                             | Respuesta estándar para peticiones correctas.                                                 |\n| 201 - CREADO                         | La petición ha sido completada y ha resultado en la creación de un nuevo recurso.             |\n| 400 - PETICIÓN INCORRECTA            | La solicitud contiene sintaxis errónea y no debería repetirse.                                |\n| 401 - NO AUTORIZADO                  | El token de autorización ingresado es inválido.                                               |\n| 404 - NO ENCONTRADO                  | Recurso no encontrado.                                                                        |\n| 405 - MÉTODO NO PERMITIDO            | Una peticiÓn fue hecha a una URI utilizando un método de solicitud no soportado por dicha URI |\n| 422 - ENTIDAD NO PROCESADA           | La solicitud está bien formada pero fue imposible seguirla debido a errores semánticos.       |\n| 429 - LIMITE DE SOLICITUDES EXCEDIDO | Se ha excedido el límite de solicitudes para un período de tiempo determinado .               | \n| 500 - ERROR EN EL SERVIDOR           | El servidor ha encontrado un error inesperado.                                                |\n";
        //console.log(descriptiones)
        else{
            descriptiones = "\n# 1. Modo de Consumo\n## 1.1 URI\n| Ambiente | API Endpoint                                              | Token Endpoint                      |\n| -------- |:----------------------------------------------------------|:----------------------------------------------------|\n| UAT      |https://apiinternaluat.entel.cl/" + uri + " | https://apiinternaluat.entel.cl/auth/oauth/v2/token |\n| PRD      |https://apiinternal.entel.cl/" + uri + "    | https://apiinternal.entel.cl/auth/oauth/v2/token   |\n\n\n# 2. Estructura de entrada (Request)\n## 2.1. Parametros Header\n\n| Campo            | Tipo              | Obligatorio | Descripcion                                                                                                                                                           | Valores posibles - Formato               |\n| -----------------| ------------------| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------|\n| Content-Type     | string            | Si          | Indica el tipo de contenido del cuerpo del mensaje enviado al destinatario                                                                                            | application/json; charset=utf-8          |\n| Authorization    | string            | Si          | Token de acceso alfanumerico obtenido de la autenticación OAuth                                                                                                       | Bearer xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx  |\n| applicationCode  | string            | Si          | Código único que representa al sistema consumidor. Es responsabilidad del consumidor enviar este valor                                                                | [Posibles valores](https://tdentel.atlassian.net/wiki/download/attachments/565838019/Master%20Headers%20Codes%20eUSB.xlsx?version=3&modificationDate=1531253559009&cacheVersion=1&api=v2)                  |\n| countryCode      | string            | Si          | Identifica el país desde donde se origina la petición. Es responsabilidad del consumidor enviar este valor                                                            | CHL (Chile), PER (Perú)                  |\n| consumerId       | string            | Si          | Código único de identificación de la ejecución, que identifica el evento del consumidor. Es responsabilidad del consumir enviar este valor según las reglas definidas |[Reglas](https://tdentel.atlassian.net/wiki/download/attachments/1151374/Master%20Headers%20Codes%20eUSB.xlsx?api=v2) |\n| requestTimestamp | string (Datetime) | Si          | Fecha, hora y timezone en el cual se envía la petición del consumidor.                                                                                                | YYYY-MM-DDThh:mm:ss.sss-Z                |  \n\n\n\n## 3.2. Estructura Request Body\n\n    " + ChildRecursive(request) + " \n  \n ## 3.2. Estructura Request Query \n\n  "+ChildRecursive2(queery)+"              \n  \n# 4. Estructura de salida (Response)\n\n" + ChildRecursive(response) + "\n\n\n\n# 5.  Códigos de  retorno\n\nA continuacion los posibles codigos retornados para este servicio\n\n| Code Status  HTTP                    | Descripción HTTP                                                                              |\n|--------------------------------------|:----------------------------------------------------------------------------------------------|\n| 200 - OK                             | Respuesta estándar para peticiones correctas.                                                 |\n| 201 - CREADO                         | La petición ha sido completada y ha resultado en la creación de un nuevo recurso.             |\n| 400 - PETICIÓN INCORRECTA            | La solicitud contiene sintaxis errónea y no debería repetirse.                                |\n| 401 - NO AUTORIZADO                  | El token de autorización ingresado es inválido.                                               |\n| 404 - NO ENCONTRADO                  | Recurso no encontrado.                                                                        |\n| 405 - MÉTODO NO PERMITIDO            | Una peticiÓn fue hecha a una URI utilizando un método de solicitud no soportado por dicha URI |\n| 422 - ENTIDAD NO PROCESADA           | La solicitud está bien formada pero fue imposible seguirla debido a errores semánticos.       |\n| 429 - LIMITE DE SOLICITUDES EXCEDIDO | Se ha excedido el límite de solicitudes para un período de tiempo determinado .               | \n| 500 - ERROR EN EL SERVIDOR           | El servidor ha encontrado un error inesperado.                                                |\n";

        }
    }
    else{
        if (tenimosquerry){
         descriptiones = "\n# 1. Modo de Consumo\n## 1.1 URI\n| Ambiente | API Endpoint                                              | Token Endpoint                      |\n| -------- |:----------------------------------------------------------|:----------------------------------------------------|\n| UAT      |https://apiinternaluat.entel.cl/" + uri + " | https://apiinternaluat.entel.cl/auth/oauth/v2/token |\n| PRD      |https://apiinternal.entel.cl/" + uri + "    | https://apiinternal.entel.cl/auth/oauth/v2/token   |\n\n\n# 2. Estructura de entrada (Request)\n## 2.1. Parametros Header\n\n| Campo            | Tipo              | Obligatorio | Descripcion                                                                                                                                                           | Valores posibles - Formato               |\n| -----------------| ------------------| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------|\n| Content-Type     | string            | Si          | Indica el tipo de contenido del cuerpo del mensaje enviado al destinatario                                                                                            | application/json; charset=utf-8          |\n| Authorization    | string            | Si          | Token de acceso alfanumerico obtenido de la autenticación OAuth                                                                                                       | Bearer xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx  |\n| applicationCode  | string            | Si          | Código único que representa al sistema consumidor. Es responsabilidad del consumidor enviar este valor                                                                | [Posibles valores](https://tdentel.atlassian.net/wiki/download/attachments/565838019/Master%20Headers%20Codes%20eUSB.xlsx?version=3&modificationDate=1531253559009&cacheVersion=1&api=v2)                  |\n| countryCode      | string            | Si          | Identifica el país desde donde se origina la petición. Es responsabilidad del consumidor enviar este valor                                                            | CHL (Chile), PER (Perú)                  |\n| consumerId       | string            | Si          | Código único de identificación de la ejecución, que identifica el evento del consumidor. Es responsabilidad del consumir enviar este valor según las reglas definidas |[Reglas](https://tdentel.atlassian.net/wiki/download/attachments/1151374/Master%20Headers%20Codes%20eUSB.xlsx?api=v2) |\n| requestTimestamp | string (Datetime) | Si          | Fecha, hora y timezone en el cual se envía la petición del consumidor.                                                                                                | YYYY-MM-DDThh:mm:ss.sss-Z                |  \n\n\n# 4. Estructura de salida (Response)\n\n" + ChildRecursive(response) + "\n \n\n\n\n# 5.  Códigos de  retorno\n\nA continuacion los posibles codigos retornados para este servicio\n\n| Code Status  HTTP                    | Descripción HTTP                                                                              |\n|--------------------------------------|:----------------------------------------------------------------------------------------------|\n| 200 - OK                             | Respuesta estándar para peticiones correctas.                                                 |\n| 201 - CREADO                         | La petición ha sido completada y ha resultado en la creación de un nuevo recurso.             |\n| 400 - PETICIÓN INCORRECTA            | La solicitud contiene sintaxis errónea y no debería repetirse.                                |\n| 401 - NO AUTORIZADO                  | El token de autorización ingresado es inválido.                                               |\n| 404 - NO ENCONTRADO                  | Recurso no encontrado.                                                                        |\n| 405 - MÉTODO NO PERMITIDO            | Una peticiÓn fue hecha a una URI utilizando un método de solicitud no soportado por dicha URI |\n| 422 - ENTIDAD NO PROCESADA           | La solicitud está bien formada pero fue imposible seguirla debido a errores semánticos.       |\n| 429 - LIMITE DE SOLICITUDES EXCEDIDO | Se ha excedido el límite de solicitudes para un período de tiempo determinado .               | \n| 500 - ERROR EN EL SERVIDOR           | El servidor ha encontrado un error inesperado.                                                |\n";
         deleteparameterBody();
        }
        else{
            descriptiones = "\n# 1. Modo de Consumo\n## 1.1 URI\n| Ambiente | API Endpoint                                              | Token Endpoint                      |\n| -------- |:----------------------------------------------------------|:----------------------------------------------------|\n| UAT      |https://apiinternaluat.entel.cl/" + uri + " | https://apiinternaluat.entel.cl/auth/oauth/v2/token |\n| PRD      |https://apiinternal.entel.cl/" + uri + "    | https://apiinternal.entel.cl/auth/oauth/v2/token   |\n\n\n# 2. Estructura de entrada (Request)\n## 2.1. Parametros Header\n\n| Campo            | Tipo              | Obligatorio | Descripcion                                                                                                                                                           | Valores posibles - Formato               |\n| -----------------| ------------------| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------|\n| Content-Type     | string            | Si          | Indica el tipo de contenido del cuerpo del mensaje enviado al destinatario                                                                                            | application/json; charset=utf-8          |\n| Authorization    | string            | Si          | Token de acceso alfanumerico obtenido de la autenticación OAuth                                                                                                       | Bearer xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx  |\n| applicationCode  | string            | Si          | Código único que representa al sistema consumidor. Es responsabilidad del consumidor enviar este valor                                                                | [Posibles valores](https://tdentel.atlassian.net/wiki/download/attachments/565838019/Master%20Headers%20Codes%20eUSB.xlsx?version=3&modificationDate=1531253559009&cacheVersion=1&api=v2)                  |\n| countryCode      | string            | Si          | Identifica el país desde donde se origina la petición. Es responsabilidad del consumidor enviar este valor                                                            | CHL (Chile), PER (Perú)                  |\n| consumerId       | string            | Si          | Código único de identificación de la ejecución, que identifica el evento del consumidor. Es responsabilidad del consumir enviar este valor según las reglas definidas |[Reglas](https://tdentel.atlassian.net/wiki/download/attachments/1151374/Master%20Headers%20Codes%20eUSB.xlsx?api=v2) |\n| requestTimestamp | string (Datetime) | Si          | Fecha, hora y timezone en el cual se envía la petición del consumidor.                                                                                                | YYYY-MM-DDThh:mm:ss.sss-Z                |  \n\n\n\n## 3.2. Estructura Request Querry\n\n      "+ChildRecursive2(queery)+"            \n  \n# 4. Estructura de salida (Response)\n\n" + ChildRecursive(response) + "\n \n\n\n\n# 5.  Códigos de  retorno\n\nA continuacion los posibles codigos retornados para este servicio\n\n| Code Status  HTTP                    | Descripción HTTP                                                                              |\n|--------------------------------------|:----------------------------------------------------------------------------------------------|\n| 200 - OK                             | Respuesta estándar para peticiones correctas.                                                 |\n| 201 - CREADO                         | La petición ha sido completada y ha resultado en la creación de un nuevo recurso.             |\n| 400 - PETICIÓN INCORRECTA            | La solicitud contiene sintaxis errónea y no debería repetirse.                                |\n| 401 - NO AUTORIZADO                  | El token de autorización ingresado es inválido.                                               |\n| 404 - NO ENCONTRADO                  | Recurso no encontrado.                                                                        |\n| 405 - MÉTODO NO PERMITIDO            | Una peticiÓn fue hecha a una URI utilizando un método de solicitud no soportado por dicha URI |\n| 422 - ENTIDAD NO PROCESADA           | La solicitud está bien formada pero fue imposible seguirla debido a errores semánticos.       |\n| 429 - LIMITE DE SOLICITUDES EXCEDIDO | Se ha excedido el límite de solicitudes para un período de tiempo determinado .               | \n| 500 - ERROR EN EL SERVIDOR           | El servidor ha encontrado un error inesperado.                                                |\n";
            deleteparameterBody();
        }
    }
    return descriptiones;

}

function ChangeNamePath(name) {
    return renameKeys(swagger.paths, function(key, val) {
         return '/'+name;

     });
}

server.post('/make/swagger/*', function (req, res, next) {
    let swagger = require('./test.json');

    workalldocu(req,res,'post',swagger);
    return next;
});
server.put('/make/swagger/*', function (req, res, next) {
    let swagger = require('./test.json');

    workalldocu(req,res,'put',swagger);
    return next;
});
server.del('/make/swagger/*', function (req, res, next) {
    let swagger = require('./test.json');

    workalldocu(req,res,'delete',swagger);
    return next;
});
server.get('/make/swagger/*', function (req, res, next) {
    let swagger = require('./test.json');

    workalldocu(req,res,'get',swagger);
    return next;
});

server.post('/make/swagger/path/*', function (req, res, next) {
    let swagger = require('./test.json');

    workbody2(req,res,'post',swagger);
    return next;
});
server.put('/make/swagger/path/*', function (req, res, next) {
    let swagger = require('./test.json');

    workbody2(req,res,'put',swagger);
    return next;
});
server.del('/make/swagger/path/*', function (req, res, next) {
    let swagger = require('./test.json');

    workbody2(req,res,'delete',swagger);
    return next;
});
server.get('/make/swagger/path/*', function (req, res, next) {
    let swagger = require('./test.json');

    workbody2(req,res,'get',swagger);
    return next;
});
function changesMethod(path) {
    return renameKeys(swagger.paths[Object.keys(swagger.paths)[0]], function(key, val) {
        return path;

    });


}
async function workbody2(req, res, methood,original) {
    let sw = original;
    delete  sw.definitions.RequestCreate;
    // limpiar parametros
    //console.log(original.paths["/common/businessInteraction/v1/notifications"].post.parameters[4])
    let bodyrequest =        {
        "description": "Estructura request a envíar.",
        "in": "body",
        "name": "body",
        "required": true,
        "schema": {
        }
    };
    bodyrequest.schema = adddefinitionreq(req.body);
    let querry = req.query;
    sw.paths[Object.keys(swagger.paths)[0]] = changesMethod('post');
    sw.paths[Object.keys(swagger.paths)[0]].post.responses["200"].schema = swagger.paths[Object.keys(swagger.paths)[0]].post.responses["200"].schema

    sw.paths[Object.keys(swagger.paths)[0]].post.parameters = sw.paths[Object.keys(swagger.paths)[0]].post.parameters.filter(parametro => parametro.in != 'query');
    sw.paths[Object.keys(swagger.paths)[0]].post.parameters = sw.paths[Object.keys(swagger.paths)[0]].post.parameters.filter(parametro => parametro.in != 'body');
    sw.info.title = ""+req.headers['title']+"";
    sw.info.description = ""+req.headers['description']+"";
    if (typeof req.body !== 'undefined' && Object.keys(req.body).length !== 0  )  {
        sw.paths[[Object.keys(sw.paths)[0]]].post.parameters[sw.paths[Object.keys(swagger.paths)[0]].post.parameters.length ] = bodyrequest;
        //sw.definitions.RequestCreate = adddefinitionreq(req.body);
        }

    let response = await SendPeticion(req.params[Object.keys(req.params)[0]], req.body,methood,""+req.headers['client_id']+"",""+req.headers['secret_id']+"");
    sw.paths[Object.keys(swagger.paths)[0]].post.responses["200"].schema = adddefinitionres(response)
    //sw.definitions.Response = adddefinitionres(response);
    sw.paths = ChangeNamePath(req.params[Object.keys(req.params)[0]]);
    sw.paths[Object.keys(swagger.paths)[0]].post.description = changes(req.body, response, req.params[Object.keys(req.params)[0]],querry.isEmpty(),querry);
    if (!querry.isEmpty())
    {
        Object.keys(querry).forEach(function (item) {
            let querrystringtype = {
                "default": ""+querry[item]+"",
                "description": "<Cambiar a mano>",
                "in": "query",
                "name": ""+item+"",
                "required": true,
                "type": "string"
            };
            sw.paths[[Object.keys(sw.paths)[0]]].post.parameters.push(querrystringtype)

        });


    }
    sw.paths[Object.keys(swagger.paths)[0]] = changesMethod(methood);
    res.setHeader('content-type', 'application/json');
    //console.log(swagger.paths);
    res.send(JSON.parse(JSON.stringify(sw.paths)));


}


async function workalldocu(req, res, methood,original) {
     let sw = original;
    delete  sw.definitions.RequestCreate;
     // limpiar parametros
     //console.log(original.paths["/common/businessInteraction/v1/notifications"].post.parameters[4])
    let bodyrequest =        {
        "description": "Estructura request a envíar.",
        "in": "body",
        "name": "body",
        "required": true,
        "schema": {
            "$ref": "#/definitions/RequestCreate"
        }
    };
    let querry = req.query;
    sw.paths[Object.keys(swagger.paths)[0]] = changesMethod('post');
    sw.paths[Object.keys(swagger.paths)[0]].post.parameters = sw.paths[Object.keys(swagger.paths)[0]].post.parameters.filter(parametro => parametro.in != 'query');
    sw.paths[Object.keys(swagger.paths)[0]].post.parameters = sw.paths[Object.keys(swagger.paths)[0]].post.parameters.filter(parametro => parametro.in != 'body');
    sw.info.title = ""+req.headers['title']+"";
    sw.info.description = ""+req.headers['description']+"";
    if (typeof req.body !== 'undefined' && Object.keys(req.body).length !== 0  )  {
        sw.paths[[Object.keys(sw.paths)[0]]].post.parameters[sw.paths[Object.keys(swagger.paths)[0]].post.parameters.length ] = bodyrequest;
        sw.definitions.RequestCreate = adddefinitionreq(req.body);}
    else{
    }
    let response = await SendPeticion(req.params[Object.keys(req.params)[0]], req.body,methood);
    sw.definitions.Response = adddefinitionres(response);
    sw.paths = ChangeNamePath(req.params[Object.keys(req.params)[0]]);
    sw.paths[Object.keys(swagger.paths)[0]].post.description = changes(req.body, response, req.params[Object.keys(req.params)[0]],querry.isEmpty(),querry);
    if (!querry.isEmpty())
    {
        Object.keys(querry).forEach(function (item) {
            let querrystringtype = {
                "default": ""+querry[item]+"",
                "description": "<Cambiar a mano>",
                "in": "query",
                "name": ""+item+"",
                "required": true,
                "type": "string"
            };
            sw.paths[[Object.keys(sw.paths)[0]]].post.parameters.push(querrystringtype)

        });


    }
    sw.paths[Object.keys(swagger.paths)[0]] = changesMethod(methood);
    res.setHeader('content-type', 'application/json');
    //console.log(swagger.paths);
    res.send(JSON.parse(JSON.stringify(sw)));


}

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
