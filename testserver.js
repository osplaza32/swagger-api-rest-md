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


server.post('/customer/customerOrder/v2/productOrders', function(req, res, next) {
    var customers =
        {
            "result": {
                "code": 200,
                "description": "ok",
                "descriptionDetail": "Operacion concluida exitosamente",
                "responseTimestamp": "2018/05/14T10:16:10.484",
                "transactionId": "0000016349eeab2d-2c9"
            },"CustomerOrder": {
                "Catalog": {
                    "name": "",
                    "value": ""
                },
                "CustomerQuote": {
                    "ID": "2617371978",
                    "quoteOn": ""
                },
                "Note": [
                    {
                        "author": "",
                        "creationDate": "2018-02-26T00:23:56.625Z",
                        "text": "adc adf"
                    }
                ],
                "RelatedEntity": [
                    {
                        "Account": [
                            {
                                "BillingAccount": {
                                    "billDocumentType": "",
                                    "billingCycle": "94",
                                    "billingCycleDate": "2018-02-26T00:23:56.625Z",
                                    "bscsBillingAccountId": "1-1ARKJM",
                                    "bscsCustomerId": "1-1ARKJM"
                                },
                                "externalID": "1-1ARKJM",
                                "name": "",
                                "type": "billing"
                            }
                        ],
                        "Contact": [
                            {
                                "contactType": "email",
                                "contactValue": "qq@qq.com"
                            }
                        ],
                        "CustomerPayment": {
                            "Store": {
                                "ID": ""
                            },
                            "additionalChargeAmount": {
                                "amount": 0
                            },
                            "balanceDueAmount": {
                                "amount": 1990
                            },
                            "subTotalAmount": {
                                "amount": 1990
                            },
                            "taxValue": {
                                "amount": 318
                            },
                            "totalAmount": {
                                "amount": 1990
                            },
                            "transactionType": ""
                        },
                        "Delivery": {
                            "Contact": {
                                "contactType": "email",
                                "contactValue": "qq@qq.com"
                            },
                            "GeographicAddress": {
                                "Address": {
                                    "AbsoluteLocalLocation": {
                                        "x": "",
                                        "y": ""
                                    },
                                    "ID": "",
                                    "addressNumber": "dd",
                                    "addressNumberPrefix": "",
                                    "addressNumberSuffix": "",
                                    "addressReference": "cc",
                                    "addressType": "",
                                    "edificationType": "",
                                    "externalAddressId": "",
                                    "normalizeAddress": "",
                                    "settlementType": "",
                                    "streetNameFull": {
                                        "name": "AA"
                                    },
                                    "sttlementName": "SANTIAGO",
                                    "subUnitNr": "",
                                    "zipCode": "0000"
                                },
                                "GeographicArea": {
                                    "city": "SANTIAGO",
                                    "commune": "METROPOLITANA DE SANTIAGO",
                                    "district": "",
                                    "location": "",
                                    "region": ""
                                },
                                "country": "CHILE",
                                "province": "SANTIAGO"
                            },
                            "IndividualIdentification": {
                                "number": "16654985-K",
                                "type": "RUT"
                            },
                            "IndividualName": {
                                "firstName": "sin",
                                "lastName": "sin inform",
                                "maidenName": ""
                            },
                            "OrderDelivery": {
                                "ID": ""
                            },
                            "Store": {
                                "ID": "91"
                            },
                            "activeFlag": "true",
                            "allowsDeliveryOrder": "true",
                            "allowsScheduling": "true",
                            "deliveryReserveSlotId": "",
                            "deliveryType": "delivery",
                            "logisticOperatorId": "CHL-BRI-STA"
                        },
                        "SalesChannel": {
                            "ID": "4407",
                            "createBy": "RemotoInventarioPropioOnline",
                            "creationDate": "2018-02-26T00:23:56.625Z",
                            "employeeID": "100",
                            "orderCommercialChannel": "WEB",
                            "rutChannel": "",
                            "salesRegion": ""
                        },
                        "SlotDelivery": {
                            "ID": "201802280000700008",
                            "dateAvailableSlot": "2018-02-28T03:00:00Z",
                            "finalHour": "18:00:00Z",
                            "initialHour": "12:00:00Z",
                            "scheduleType": "PROGRAMADO",
                            "slotType": "NORMAL",
                            "standartSLA": ""
                        }
                    }
                ],
                "RelatedParty": [
                    {
                        "CustomerAccount": {
                            "ID": "1-1ARKJ9",
                            "Individual": {
                                "IndividualName": {
                                    "firstName": "sin",
                                    "lastName": "sin inform",
                                    "maidenName": ""
                                },
                                "nationality": "",
                                "typeCode": ""
                            },
                            "MarketSegment": {
                                "ID": "Personas"
                            },
                            "currencyCode": "",
                            "customerType": "",
                            "revenueClass": "",
                            "subType": ""
                        },
                        "IndividualIdentification": {
                            "number": "16654985-K",
                            "type": "RUT"
                        }
                    }
                ],
                "biSpecification": "",
                "biType": "",
                "channel": "WEB",
                "correlationID": "",
                "createdBy": "EUSBUSER",
                "createdDate": "2018-02-26T08:22:02.000Z",
                "description": "",
                "expirationDate": "2018-02-27T08:22:12.000Z",
                "externalOrderId": "",
                "isBundled": 0,
                "isLocked": "false",
                "lastModifiedDate": "2018-03-29T13:17:58.228Z",
                "mode": "NON_INTERACTIVE",
                "modifiedBy": "980ef51e-0755-42ca-b342-5ba71e3085d2",
                "oneTimePrice": {
                    "basePrice": "4980",
                    "discountPrice": "0",
                    "promotionPrice": "0"
                },
                "owner": "1-1ARKJ9",
                "recurringPrice": {
                    "basePrice": "0",
                    "discountPrice": "0",
                    "promotionPrice": "0"
                },
                "requestID": "",
                "requestedCompletionDate": "2018-03-28T08:25:25.592Z",
                "requestedStartDate": "2018-02-26T00:23:56.625Z",
                "requester": "980ef51e-0755-42ca-b342-5ba71e3085d2",
                "shoppingCartID": "250043877",
                "state": "CLOSED.SUBMITTED",
                "submittedDate": "2018-02-26T08:25:25.000Z"
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
