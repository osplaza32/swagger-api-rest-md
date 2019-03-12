var restify = require('restify');




var server = restify.createServer({
    name: 'Recived',
    version: '1.0.0'
});
server.use(restify.plugins.queryParser({
    mapParams: true
}));
server.use(restify.plugins.bodyParser({
    mapParams: true
}));
server.use(restify.plugins.acceptParser(server.acceptable));







server.post('/Customer/MegaTest/DieOrLife', function(req, res, next) {
    var customers =
        { name: 'Felix Jones', gender:'M' };

    res.setHeader('content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(customers));

    return next();
});
server.listen(8081, function() {
    console.log('%s listening at %s', server.name, server.url);
});
