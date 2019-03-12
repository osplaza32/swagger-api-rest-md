var restify = require('restify');
var axios = require('axios');
const swagger = require('./test.json');
const toJsonSchema = require('to-json-schema');



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

function ChildRecursive(body) {
    let cabecera = '\n|Campo|Tipo|Descripción|Valores posibles - Formato|Valor de ejemplo|\n\n' +
                    '|:---|:---:|:---:|:---:|---:|\n\n'
    let compilado = getElem(body,'','',cabecera);
    console.log(compilado);


}
function getElem(obj,prev='',type='',common=''){


    if (prev !== '')
    {    //console.log('|'+prev+'|'+type+'||||\n')
        common += '|'+prev+'|'+type+'||||\n\n';
    }
    Object.keys(obj).forEach(function (item) {

        if (typeof obj[item] === 'object' || Array.isArray(obj[item]) && obj[item] !== null)
        {
            if (Array.isArray(obj[item]) && obj[item] !== null )
            {
                if(prev === '')
                {
                    let input = obj[item].slice(0,1);

                    getElem(input,item,'Array',common)
                }
                else
                {
                    let buldprev=prev+'.'+item;
                    let input = obj[item].slice(0,1);

                    getElem(input,buldprev,'Array',common)
                }

            }else{
            console.log(obj[item]);
            if(prev === '')
            {
                getElem(obj[item],item,typeof(obj[item]),common)
            }
            else
            {
                let buldprev=prev+'.'+item;
                getElem(obj[item],buldprev,typeof(obj[item]),common)
            }
            }
        }

        else {
            let buldprev;
            if(prev === ''){
                buldprev=item;}else{ buldprev=prev+'.'+item;}
                //console.log('|'+buldprev+'|'+typeof obj[item]+'|||'+obj[item]+'|\n');
                common += '|'+buldprev+'|'+typeof obj[item]+'|||'+obj[item]+'|\n\n';
        }
    }
    );

    return common;
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
   let schema = toJsonSchema(jsonbodyObj,{strings: {detectFormat: true}});
    swagger.definitions.RequestCreate = schema;
}
function adddefinitionres(jsonbodyObj)
{
    let schema = toJsonSchema(jsonbodyObj,{strings: {detectFormat: true}});
    swagger.definitions.Response = schema;
}
function countProperties(obj) {
    return Object.keys(obj).length;
}

server.post('/make/swagger/*', async function (req, res, next) {
    swagger.info.title = "APIM-example";
    swagger.info.description = "Ejemplo de Creacion de un swagger";
    ChildRecursive(req.body);
    //adddefinitionreq(req.body);
    //let response = await SendPeticionPOST(req.params[Object.keys(req.params)[0]], req.body);
    //ChildRecursive(response);
    //adddefinitionres(response);
    //res.setHeader('content-type', 'application/json');
    //res.send(JSON.parse(JSON.stringify(swagger)));
    return next();
});


server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
