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


server.post('/enterprise/workforce/resource/v1/workOrders/:id', function(req, res, next) {
    var customers =
        {"result": {
                "transactionId": "0000016953b2cfb6-b3c13",
                "code": "200",
                "description": "OK",
                "descriptionDetail": "Procesamiento concluído exitosamente",
                "responseTimestamp": "2019/03/13T09:44:48.622"
            },
            "activityId": 12948,
            "resourceId": "Bco Chile - Zona Metropolitana",
            "resourceInternalId": 270,
            "date": "2019-03-13",
            "apptNumber": "INC000000012",
            "recordType": "regular",
            "status": "pending",
            "activityType": "Instalar-Software-Aplicativo",
            "duration": 60,
            "travelTime": 30,
            "customerName": "Juan Perez-U",
            "customerNumber": "13995098-4-U",
            "customerPhone": "+56963400375",
            "customerEmail": "juan@gmail.com-U",
            "customerCell": "+56963400374",
            "streetAddress": "1 norte 1630",
            "city": "TALCA",
            "stateProvince": "Región del Maule",
            "language": "en",
            "languageISO": "en-US",
            "timeZone": "(UTC-04:00) Santiago - Chile Time (CLT)",
            "timeZoneIANA": "America/Santiago",
            "longitude": -70.65196,
            "latitude": -33.44222,
            "slaWindowStart": "2018-10-22 13:00:00",
            "slaWindowEnd": "2018-10-22 17:00:00",
            "startTime": "2019-03-13 00:00:00",
            "endTime": "2019-03-13 01:00:00",
            "timeOfBooking": "2019-03-12 10:22:11",
            "resourceTimeZone": "(UTC-04:00) Santiago - Chile Time (CLT)",
            "resourceTimeZoneIANA": "America/Santiago",
            "resourceTimeZoneDiff": -180,
            "A_COMUNA": "TALCA",
            "A_COMPANY_ID": "CPY000000004252",
            "A_LOCATION_ID": "STE000000003935",
            "A_SOURCE_SYSTEM": "AGE-COR",
            "A_DATE_TICKET": "2018/10/22 11:17",
            "A_COMPANY_NAME": "ENTEL SA",
            "A_ALIAS_COMPANY": "Alias empresa",
            "A_LOCATION": "EU Torre Titanium Piso 16",
            "A_REF_LOCALIDAD": "Referencia Dirección",
            "A_REGION": "Región Metropolitana",
            "A_BUILDING": "AMUNA20-U",
            "A_PRIORITY": "Media-U",
            "A_DISPATCH_NOTES": "Notas del despacho",
            "A_DISPATCH_SUMMARY": "Favor instalar WinZIp",
            "A_TICKET_STATUS": "Pendiente-U",
            "M_ARME": "MCI000000759662|Provisión|1C.NB.LEN.13GEN2I7|ejm.: 2E.PC_HPP.PR4000.Q|10|10|0000750905~MCI000000759662|Provisión|1C.NB.LEN      .13GEN2I7|ejm.: 2E.PC_HPP.PR4000.Q|10|10|0000750905~MCI000000759662|Provisión|1C.NB.LEN.13GEN2I7|ejm.: 2E.PC_HPP.PR4000         .Q|10|10|0000750905~",
            "M_COD_A1": "1C.NB.LEN.13GEN2I7-U",
            "M_COD_A2": "1C.NB.LEN.13GEN2I8-U",
            "M_COD_A3": "1C.NB.LEN.13GEN2I9-U",
            "M_COD_A4": "1C.NB.LEN.13GEN2Z1-U",
            "M_COD_A5": "1C.NB.LEN.13GEN2Z2-U",
            "A_CONDITION": "3.- Sin pérdida-U",
            "A_FABRICANTE": "WinZip Labs",
            "A_GROUP": "CECOM Cnt",
            "M_ID_REQUEST_A1": "RCI000000659661_1",
            "M_ID_REQUEST_A2": "RCI000000659662-2",
            "M_ID_REQUEST_A3": "RCI000000659663-3",
            "M_ID_REQUEST_A4": "RCI000000659664-4",
            "M_ID_REQUEST_A5": "RCI00000065966-45",
            "A_IMPACT": "4.- Menor Localizado",
            "M_NAME_A1": "2E.PC_HPP.PR4000.Q-U",
            "M_NAME_A2": "2E.PC_HPP.PR4000.W-U",
            "M_NAME_A3": "2E.PC_HPP.PR4000.H-U",
            "M_NAME_A4": "2E.PC_HPP.PR4000.G-U",
            "M_NAME_A5": "2E.PC_HPP.PR4000.L-U",
            "A_MODEL": "Sin Modelo-U",
            "A_PENDING_REASON": "SIN VISITA-U",
            "A_CATOPE_N1": "Servicio Mesa de Ayuda-U",
            "A_CATPRO_N1": "Negocio define-U",
            "A_CATOPE_N2": "Gestión de aplicaciones-U",
            "A_CATPRO_N2": "Negocio define-U",
            "A_CATOPE_N3": "Revisar-U",
            "A_CATPRO_N3": "Negocio define-U",
            "A_PRODUCTO": "Negocio define-U",
            "A_NOTES": "Actualizando WO desde Postman en la tarde",
            "A_ORIGIN_REPORTED": "Mesas CO-U",
            "A_SOURCE_REPORTED": "Teléfono-U",
            "A_POS": "POS12334",
            "M_Q_ORDER_A1": "3-U",
            "M_Q_ORDER_A2": "10-U",
            "M_Q_ORDER_A3": "10-U",
            "M_Q_ORDER_A4": "10-U",
            "M_Q_ORDER_A5": "10-U",
            "A_TYPE_INC": "Restauracion de servicio-U",
            "M_TYPE_A1": "Provisión-A",
            "M_TYPE_A2": "Provisión-B",
            "M_TYPE_A3": "Provisión-C",
            "M_TYPE_A4": "Provisión-D",
            "M_TYPE_A5": "Provisión-E",
            "A_TYPE_TICKET": "INCIDENCIA",
            "A_URGENCY": "4.- Baja",
            "A_CUSTOMERVALIDATOR": "PEREZ DIAZ ALEJANDRA",
            "A_USER": "ESTEBAN CARVAJAL",
            "A_TROUBLETICKET_REASON": "no aplica",
            "E_MARCA_EQ1": "HP EQ01",
            "E_MARCA_EQ2": "HP EQ02",
            "E_MARCA_EQ3": "HP EQ03",
            "E_MARCA_EQ4": "HP EQ04",
            "E_MARCA_EQ5": "HP EQ05",
            "E_MARCA_RETIRED_EQ1": "R-HP0003EQ01",
            "E_MARCA_RETIRED_EQ2": "R-HP0003EQ02",
            "E_MARCA_RETIRED_EQ3": "R-HP03003EQ0",
            "E_MARCA_RETIRED_EQ4": "R-HP0003EQ04",
            "E_MARCA_RETIRED_EQ5": "R-SEQ05",
            "A_ENGINEER_NOTES": "en camino a instalaciones del cliente",
            "E_ROTULO_EQ1": "ROTEQ1",
            "E_ROTULO_EQ2": "ROTEQ2",
            "E_ROTULO_EQ3": "ROTEQ3",
            "E_ROTULO_EQ4": "ROTEQ4",
            "E_ROTULO_EQ5": "ROTEQ5",
            "E_ROTULO_RETIRED_EQ1": "R-ROT-EQ01",
            "E_ROTULO_RETIRED_EQ2": "R-ROT-EQ02",
            "E_ROTULO_RETIRED_EQ3": "R-ROT-EQ03",
            "E_ROTULO_RETIRED_EQ4": "R-ROT-EQ04",
            "E_ROTULO_RETIRED_EQ5": "R-ROT-EQ05",
            "E_SERIAL_NUMBER_EQ1": "S1233EQ1",
            "E_SERIAL_NUMBER_EQ2": "S1233EQ2",
            "E_SERIAL_NUMBER_EQ3": "S1233EQ3",
            "E_SERIAL_NUMBER_EQ4": "S1233EQ4",
            "E_SERIAL_NUMBER_EQ5": "S1233EQ5",
            "E_SERIAL_NUMBER_RETIRED_EQ1": "R-SEQ01",
            "E_SERIAL_NUMBER_RETIRED_EQ2": "R-SEQ02",
            "E_SERIAL_NUMBER_RETIRED_EQ3": "R-SEQ03",
            "E_SERIAL_NUMBER_RETIRED_EQ4": "R-SEQ04",
            "E_SERIAL_NUMBER_RETIRED_EQ5": "R-H5P0003EQ05",
            "A_FORCED_APPOINTMENT": "false",
            "M_SAP_ORDER_NUM_A1": "MCI000000759661-U",
            "M_SAP_ORDER_NUM_A2": "MCI000000759662-U",
            "M_SAP_ORDER_NUM_A3": "MCI000000759663-U",
            "M_SAP_ORDER_NUM_A4": "MCI000000759664-U",
            "M_SAP_ORDER_NUM_A5": "MCI000000759665-U",
            "aidwo": "12948",
            "A_USER_DOMAIN": "JJPEREZ",
            "A_CLOSING_REASON": "13000",
            "A_RECEIVES_CUSTOMER": "Juan Perez",
            "A_CLOSING_REASON_SUSPENDED": "33000",
            "E_Q_INSTALLED": "5",
            "E_Q_UNINSTALLED": "5",
            "A_CANCELATION_REASON": "ya no tiene problema",
            "A_RESIDENTE": "VOLANTE",
            "A_CLOSING_REASON_OK": "5000",
            "A_FUTURE_CONTACT_DATE": "2019-02-25",
            "A_CANCELATION_NOTES": "se cancela",
            "A_CANCELATION_DATE": "2019-02-22 10:30:00",
            "A_SCHEDULER_USER": "lcham1",
            "requiredInventories": {
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://api.etadirect.com/rest/ofscCore/v1/activities/12948/requiredInventories"
                    }
                ]
            },
            "linkedActivities": {
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://api.etadirect.com/rest/ofscCore/v1/activities/12948/linkedActivities"
                    }
                ]
            },
            "resourcePreferences": {
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://api.etadirect.com/rest/ofscCore/v1/activities/12948/resourcePreferences"
                    }
                ]
            },
            "workSkills": {
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://api.etadirect.com/rest/ofscCore/v1/activities/12948/workSkills"
                    }
                ]
            },
            "links": [
                {
                    "rel": "canonical",
                    "href": "https://api.etadirect.com/rest/ofscCore/v1/activities/12948"
                },
                {
                    "rel": "describedby",
                    "href": "https://api.etadirect.com/rest/ofscCore/v1/metadata-catalog/activities"
                },
                {
                    "rel": "route",
                    "href": "https://api.etadirect.com/rest/ofscCore/v1/resources/Bco Chile - Zona Metropolitana/routes/2019-03-13"
                }
            ]
        };

    res.setHeader('content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(customers));

    return next();
});




server.post('/product/loyalty/v1/loyaltyProducts/search', function(req, res, next) {
    var customers =
        {
                    "result": {
                        "transactionId": "0000016953b2cfb6-16e4fa",
                        "code": "200",
                        "description": "OK",
                        "descriptionDetail": "Procesamiento concluído exitosamente",
                        "responseTimestamp": "2019-03-20T11:33:36.260"
                    },
                    "InvalidHeader": {
                        "Result": {
                            "description": "Ejecución Exitosa",
                            "status": "OK"
                }
            }
        };

    res.setHeader('content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(customers));

    return next();
});
server.listen(8081, function() {
    console.log('%s listening at %s', server.name, server.url);
});
