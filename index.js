var restify = require('restify');
var axios = require('axios');




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
    //console.log(typeof(body))
    getElem(body)


}
function getElem(obj,prev='',type=''){
    if (prev !== '')
    {    console.log('|'+prev+'|'+type+'||')
    }
    Object.keys(obj).forEach(function (item) {

        if (typeof obj[item] === 'object' ||  Array.isArray(obj[item])  && obj[item] !== null)
        {   if(prev === '')
        {
            getElem(obj[item],item,typeof(obj[item]))
        }
        else
        {
            let buldprev=prev+'.'+item;
            getElem(obj[item],buldprev,typeof(obj[item]))


        }
        }
        else
            {
                let buldprev=prev+'.'+item;
                console.log('|'+buldprev+'|'+typeof obj[item]+'||')


            }
    });

}

function SendPeticion(body, headers) {
    let config = {
        headers: {
            "applicationCode":"ATG",
            "consumerId":"1234",
            "countryCode":"CHL",
            "requestTimestamp":"2018-12-12T12:12:12.444-03:00",
            "Content-Type": "application/json"

        }
    };
    post(headers['apigateway'],body,config).then(function (response) {
        console.log(response.data);
    })
        .catch(function (error) {
            console.log(error);
        });


}
function get(url) {
    return axios.get(url);
}
function post(url) {
    return axios.post(url);
}


server.post('/make/swagger', function(req, res, next) {
    ChildRecursive(req.body);
    SendPeticion(req.body,req.headers);

    res.send(200);
    return next();
});
server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
