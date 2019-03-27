const toJsonSchema = require('to-json-schema');
const options = {
    postProcessFnc: (type, schema, value, defaultFunc) =>
        (type === 'integer' || type === 'string') ? {...schema,example: String(value)} : defaultFunc(type, schema, value),
};
var o = {
    "result": {
        "transactionId": "0000016850755ca4-243f5d",
        "code": "200",
        "description": "OK",
        "descriptionDetail": "Procesamiento concluído exitosamente",
        "responseTimestamp": "2019-03-27T09:45:20.951"
    },
    "clientOrchestrationStatus": "completed",
    "applicants": {
        "primaryConsumer": {
            "personalInformation": {
                "name": [
                    {
                        "identifier": "current"
                    }
                ],
                "chileanRut": "70093456",
                "chileanSerialNumber": "A000000001",
                "addresses": [
                    {
                        "identifier": "current"
                    }
                ],
                "customerReferenceIdentifier": "ENTEL"
            },
            "transactionId": "110760000000130752",
            "status": "completed",
            "ccb": {
                "ccb": {
                    "uuid": "3e345d27-035e-4cff-ad25-04e93c1104b2",
                    "transactionInfo": {
                        "documentNumber": "70093456",
                        "serialNumber": "A000000001",
                        "fatherSurname": "VERGARA",
                        "motherSurname": "ORTIZ",
                        "name": "JOSE IGNACIO  ",
                        "uuidTransaction": "",
                        "username": "ICSAAS_ENTEL_PROD",
                        "date": "none",
                        "hour": "none"
                    },
                    "expg04Section": {
                        "attributes": [
                            {
                                "variableName": "DIC_MONTOTOTALUF_02",
                                "value": "78.31"
                            },
                            {
                                "variableName": "DIC_MONTOTOTALUF_12",
                                "value": "219.27"
                            },
                            {
                                "variableName": "DIC_RUTNEG_GLO_00",
                                "value": "0,0,0,1261535,C2,N,N,0,N,N,SA,0"
                            },
                            {
                                "variableName": "DIC_CONEXCCOM_39",
                                "value": "SI"
                            },
                            {
                                "variableName": "DIC_MONTOTOTALUF_39",
                                "value": "0.00"
                            },
                            {
                                "variableName": "KPI_SEGFAC_01",
                                "value": "0"
                            },
                            {
                                "variableName": "KPI_SEGSII_01",
                                "value": "0"
                            },
                            {
                                "variableName": "KPI_RANGTRAB_01",
                                "value": "0"
                            },
                            {
                                "variableName": "KPI_RENTA_01",
                                "value": "1261535"
                            },
                            {
                                "variableName": "KPI_ISE_01",
                                "value": "C2"
                            },
                            {
                                "variableName": "KPI_PQUIEBRA_01",
                                "value": "N"
                            },
                            {
                                "variableName": "KPI_PENSION_01",
                                "value": "N"
                            },
                            {
                                "variableName": "KPI_RENTA_02",
                                "value": "0"
                            },
                            {
                                "variableName": "KPI_FONASA_01",
                                "value": "N"
                            },
                            {
                                "variableName": "KPI_ECLEAN_01",
                                "value": "N"
                            },
                            {
                                "variableName": "KPI_ACTCOMERCIAL_01",
                                "value": "SA"
                            },
                            {
                                "variableName": "CLEAN2",
                                "value": "0"
                            }
                        ]
                    }
                }
            },
            "equifax-chi-wcf": {
                "wcf": {
                    "data": {
                        "executecommercialDataResponse": {
                            "executeCommercialDataResult": {
                                "errors": {
                                    "errorData": []
                                },
                                "output": {
                                    "behavior": {
                                        "contactability": {
                                            "contactsDataDetail": {
                                                "addresses": {
                                                    "commercialAddresses": [
                                                        {
                                                            "streetAndNumber": "",
                                                            "lastAddressVerificationDate": 0,
                                                            "city": "",
                                                            "postalCode": 0,
                                                            "communes": ""
                                                        }
                                                    ]
                                                },
                                                "emails": {
                                                    "referenceData": []
                                                },
                                                "telephones": {
                                                    "referenceData": [
                                                        {
                                                            "referencyDesc": "2930402"
                                                        },
                                                        {
                                                            "referencyDesc": "2930401"
                                                        }
                                                    ]
                                                },
                                                "verificationAddresses": {
                                                    "addressVerifData": []
                                                },
                                                "websites": {
                                                    "referenceData": [
                                                        {
                                                            "referencyDesc": ""
                                                        }
                                                    ]
                                                }
                                            },
                                            "contactsDataSummary": {
                                                "addressCount": 1,
                                                "dateLastAddress": "",
                                                "emailLastDate": "",
                                                "lastEmail": "",
                                                "lastTelephone": "",
                                                "lastWebsite": "",
                                                "telephoneLastDate": "",
                                                "totalEmail": "0",
                                                "totalTelephone": "",
                                                "totalWebsite": "0",
                                                "websiteLastDate": ""
                                            }
                                        },
                                        "family": {
                                            "dateOfMarriage": "19980114",
                                            "maritalStatus": "C",
                                            "maritalStatusDescription": "",
                                            "spouseRut": "0091366169"
                                        },
                                        "identification": {
                                            "bankruptcy": {
                                                "bankruptcyResume": []
                                            },
                                            "identificationCompany": {
                                                "activities": {
                                                    "activities": []
                                                },
                                                "activity": "",
                                                "actualAddress": "",
                                                "bankruptciesQuantity": 0,
                                                "businessName": "",
                                                "email": "",
                                                "fantasyName": "",
                                                "initDate": "",
                                                "rut": "",
                                                "warrantyQuantity": "",
                                                "webSite": ""
                                            },
                                            "identificationPerson": {
                                                "age": 58,
                                                "dateOfBirth": 19610130,
                                                "deathDate": 0,
                                                "discrepancies": {
                                                    "detail": {
                                                        "detailDiscrepancies": []
                                                    },
                                                    "resume": {
                                                        "lastDiscrepancies": "",
                                                        "totalDiscrepancies": ""
                                                    }
                                                },
                                                "fatherSurname": "",
                                                "flagDeath": "NO",
                                                "flagIdentityVerification": "",
                                                "gender": "M",
                                                "genderDescription": "",
                                                "interdictDataList": {
                                                    "interdictDataExtractTemp": []
                                                },
                                                "interdictDate": 0,
                                                "interdictDescription": "",
                                                "interdictFlag": "0",
                                                "interdictResolution": "",
                                                "motherSurname": "",
                                                "name": "",
                                                "nameFull": "VERGARA ORTIZ JOSE IGNACIO",
                                                "nationality": "CHILENO",
                                                "nationalityType": "C",
                                                "otherInfo": {
                                                    "codIse": "NO",
                                                    "dateUpdateFonasaInfo": "",
                                                    "dateUpdateIse": "",
                                                    "dateUpdatePensionInfo": "",
                                                    "isFonasa": "",
                                                    "pensionSolidaria": ""
                                                },
                                                "rut": ""
                                            }
                                        },
                                        "srceI": {
                                            "blockedCardLess30Days": "",
                                            "blockedStatusFlag": "N",
                                            "codeExecution": "00",
                                            "descExcecution": "",
                                            "documentStatus": "N",
                                            "documentStatusReason": "DOCUMENTO NO EMITIDO",
                                            "documentStatusTimestamp": "00000000",
                                            "informationSource": "",
                                            "inquiredSerialID": "",
                                            "returnedSerialID": "",
                                            "serialNumberIndicator": "0"
                                        }
                                    },
                                    "capacity": {
                                        "currentEmploymentInformation": {
                                            "activity": {
                                                "activityOfTheEmployer": ""
                                            },
                                            "commercialCompanyData": {
                                                "actualizationDate": "",
                                                "addressOfTheEmployer": "",
                                                "cityEmployerAddress": "",
                                                "communesEmployerAddress": "",
                                                "employer": "",
                                                "laboralTelephone": "",
                                                "verificationDate": "",
                                                "verificationSource": ""
                                            }
                                        },
                                        "employmentInfo": {
                                            "jobCode": "",
                                            "jobDescription": "",
                                            "professionCode": 13,
                                            "professionDescription": "INGENIERO",
                                            "roleCode": 2,
                                            "roleDescription": "EMPLEADO"
                                        },
                                        "historical": {
                                            "commercialHistorical": []
                                        },
                                        "salary": {
                                            "dateUpdatePublicEmployeeInfo": "",
                                            "dateUpdateRentaInfo": "",
                                            "descCurrecy": "",
                                            "isPublicEmployee": "",
                                            "rentaFuncionarioPublico": "",
                                            "rentaPresunta": ""
                                        },
                                        "verifications": {
                                            "workVerifData": [
                                                {
                                                    "addressOfTheEmployer": "",
                                                    "city": "",
                                                    "sourceOfVerification": "",
                                                    "employer": "",
                                                    "telephone": "",
                                                    "activityOfTheEmployer": "",
                                                    "communes": "",
                                                    "verificationDate": "00000000"
                                                }
                                            ]
                                        }
                                    },
                                    "credit": {
                                        "bank": {
                                            "banksActive": {
                                                "commercialBanksActive": []
                                            },
                                            "closedCurrentAcount": {
                                                "commercialClosedCurrentAcount": []
                                            },
                                            "numberOfBlockedAccounts": 0,
                                            "totalBank": 0,
                                            "unableToOpenAccountIndicator": ""
                                        },
                                        "boletinConcursal": {
                                            "detailBoletinConcursal": {
                                                "commercialDetailBoletinConcursal": []
                                            },
                                            "summaryBolConcursal": {
                                                "flagBoletinConcursal": "",
                                                "publicationNumberBolConcursal": ""
                                            }
                                        },
                                        "consultRUT": {
                                            "detailConsultRUT": {
                                                "commercialDetailConsultRUT": [
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190304,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190221,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190206,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190206,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190206,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190206,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190125,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190125,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190125,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190125,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190125,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190124,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190124,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190124,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190124,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190124,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190124,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190124,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190124,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    },
                                                    {
                                                        "inquiryReportName": "PLATINUM",
                                                        "inquiryDate": 20190124,
                                                        "inquiryCompanyName": "ENTEL PCS TELECOMUNICACIONES S.A."
                                                    }
                                                ]
                                            },
                                            "inquiriesNumber": 190,
                                            "timelapseNumber": 6,
                                            "timelapseTypeUsed": "MESES"
                                        },
                                        "creditRisk": {
                                            "everclean": "",
                                            "evercleanDateUpdate": "",
                                            "historicalRate": {
                                                "commercialHistoricalRate": [
                                                    {
                                                        "period": 201902,
                                                        "rate": "028"
                                                    },
                                                    {
                                                        "period": 201901,
                                                        "rate": "061"
                                                    },
                                                    {
                                                        "period": 201812,
                                                        "rate": "061"
                                                    },
                                                    {
                                                        "period": 201811,
                                                        "rate": "061"
                                                    },
                                                    {
                                                        "period": 201810,
                                                        "rate": "061"
                                                    },
                                                    {
                                                        "period": 201809,
                                                        "rate": "061"
                                                    },
                                                    {
                                                        "period": 201808,
                                                        "rate": "061"
                                                    },
                                                    {
                                                        "period": 201807,
                                                        "rate": "215"
                                                    },
                                                    {
                                                        "period": 201806,
                                                        "rate": "215"
                                                    },
                                                    {
                                                        "period": 201805,
                                                        "rate": "215"
                                                    },
                                                    {
                                                        "period": 201804,
                                                        "rate": "215"
                                                    },
                                                    {
                                                        "period": 201803,
                                                        "rate": "388"
                                                    }
                                                ]
                                            },
                                            "historicalRatingReport": "",
                                            "importantAspect": {
                                                "commercialImportantAspect": [
                                                    {}
                                                ]
                                            },
                                            "originOfUse": "",
                                            "personsRate": 31,
                                            "predictorScale": {
                                                "maximumRate": "0",
                                                "minimumRate": "0",
                                                "percentageOfConsumers": "0",
                                                "typeOfRisk": "",
                                                "unpaymentProbability": "0"
                                            }
                                        },
                                        "debtsSummary": {
                                            "accessCamaraComercio": "SI",
                                            "amountAccumulated6Months": 6,
                                            "bed": {
                                                "commercialBED": [
                                                    {
                                                        "equifaxRegisterDate": 20190318,
                                                        "justificationDescription": "",
                                                        "documentType": "PG",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20190318,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "BANCO DE CHILE",
                                                        "unpaidAmount": 115232,
                                                        "chequeOperatioNumber": "               ",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20190211
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20190219,
                                                        "justificationDescription": "",
                                                        "documentType": "PG",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20190219,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "BANCO DE CHILE",
                                                        "unpaidAmount": 115232,
                                                        "chequeOperatioNumber": "               ",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20190109
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20190304,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20190304,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20181130
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20190205,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20190205,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20181031
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20190103,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20190103,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20180930
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20181203,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20181203,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20180831
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20181106,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20181106,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20180731
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20181001,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20181001,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20180630
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180903,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180903,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20180531
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180730,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180730,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20180430
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180704,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180704,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20180331
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180604,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180604,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20180228
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180503,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180503,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20180131
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180417,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180417,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20171231
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180417,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180417,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20171130
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180417,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180417,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20171031
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180417,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180417,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20170930
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180417,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180417,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20170831
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180417,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180417,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20170731
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180417,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180417,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20170630
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180417,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180417,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20170531
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180417,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180417,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20170430
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180417,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180417,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20170331
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180417,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180417,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 87409,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20170228
                                                    },
                                                    {
                                                        "equifaxRegisterDate": 20180417,
                                                        "justificationDescription": "",
                                                        "documentType": "PI",
                                                        "justificationDate": 0,
                                                        "visibilityDate": 20180417,
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "libradorName": "CAJA  COMPENSACION DE LOS ANDE",
                                                        "unpaidAmount": 6097,
                                                        "chequeOperatioNumber": "    02700549553",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "",
                                                        "debtType": "MOROSIDAD",
                                                        "typeReason": "",
                                                        "expirationDate": 20170131
                                                    }
                                                ]
                                            },
                                            "bolab": {
                                                "commercialBOLAB": []
                                            },
                                            "bolcom": {
                                                "commercialBOLCOM": [
                                                    {
                                                        "justificationDescription": "",
                                                        "documentType": "CM",
                                                        "justificationDate": 20190305,
                                                        "reasonType": "",
                                                        "creditType": "CO",
                                                        "boletinPage": 2086,
                                                        "notarioName": "",
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "boletinNumber": 4698,
                                                        "libradorName": "BANCO DE CHILE",
                                                        "unpaidAmount": 115232,
                                                        "chequeOperatioNumber": "846",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "SANTIAGO",
                                                        "debtType": "MOROSIDAD",
                                                        "expirationDate": 20181210,
                                                        "registerDate": 20190305
                                                    },
                                                    {
                                                        "justificationDescription": "",
                                                        "documentType": "CM",
                                                        "justificationDate": 20170328,
                                                        "reasonType": "",
                                                        "creditType": "DH",
                                                        "boletinPage": 945,
                                                        "notarioName": "",
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "boletinNumber": 4597,
                                                        "libradorName": "BANCO DE CHILE",
                                                        "unpaidAmount": 496042,
                                                        "chequeOperatioNumber": "11",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "SAN FERNANDO",
                                                        "debtType": "MOROSIDAD",
                                                        "expirationDate": 20161110,
                                                        "registerDate": 20170328
                                                    },
                                                    {
                                                        "justificationDescription": "",
                                                        "documentType": "CM",
                                                        "justificationDate": 20160628,
                                                        "reasonType": "",
                                                        "creditType": "CO",
                                                        "boletinPage": 901,
                                                        "notarioName": "",
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "boletinNumber": 4558,
                                                        "libradorName": "BANCO DE CHILE",
                                                        "unpaidAmount": 1500000,
                                                        "chequeOperatioNumber": "612",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "SAN FERNANDO",
                                                        "debtType": "MOROSIDAD",
                                                        "expirationDate": 20160414,
                                                        "registerDate": 20160628
                                                    },
                                                    {
                                                        "justificationDescription": "",
                                                        "documentType": "CM",
                                                        "justificationDate": 20160628,
                                                        "reasonType": "",
                                                        "creditType": "CO",
                                                        "boletinPage": 901,
                                                        "notarioName": "",
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "boletinNumber": 4558,
                                                        "libradorName": "BANCO DE CHILE",
                                                        "unpaidAmount": 120000,
                                                        "chequeOperatioNumber": "0",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "SAN FERNANDO",
                                                        "debtType": "MOROSIDAD",
                                                        "expirationDate": 20160414,
                                                        "registerDate": 20160628
                                                    },
                                                    {
                                                        "justificationDescription": "",
                                                        "documentType": "CM",
                                                        "justificationDate": 20160628,
                                                        "reasonType": "",
                                                        "creditType": "CO",
                                                        "boletinPage": 901,
                                                        "notarioName": "",
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "boletinNumber": 4558,
                                                        "libradorName": "BANCO DE CHILE",
                                                        "unpaidAmount": 1459270,
                                                        "chequeOperatioNumber": "408",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "SAN FERNANDO",
                                                        "debtType": "MOROSIDAD",
                                                        "expirationDate": 20160309,
                                                        "registerDate": 20160628
                                                    },
                                                    {
                                                        "justificationDescription": "",
                                                        "documentType": "CM",
                                                        "justificationDate": 20160628,
                                                        "reasonType": "",
                                                        "creditType": "CO",
                                                        "boletinPage": 901,
                                                        "notarioName": "",
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "boletinNumber": 4558,
                                                        "libradorName": "BANCO DE CHILE",
                                                        "unpaidAmount": 774081,
                                                        "chequeOperatioNumber": "117",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "SAN FERNANDO",
                                                        "debtType": "MOROSIDAD",
                                                        "expirationDate": 20160309,
                                                        "registerDate": 20160628
                                                    },
                                                    {
                                                        "justificationDescription": "",
                                                        "documentType": "CH",
                                                        "justificationDate": 20150825,
                                                        "reasonType": "FF",
                                                        "creditType": "",
                                                        "boletinPage": 1088,
                                                        "notarioName": "",
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "boletinNumber": 4514,
                                                        "libradorName": "BANCO DE CHILE",
                                                        "unpaidAmount": 1240973,
                                                        "chequeOperatioNumber": "562",
                                                        "moneyCode": "$",
                                                        "marketCode": "01",
                                                        "localidadName": "SAN FERNANDO",
                                                        "debtType": "PROTESTO",
                                                        "expirationDate": 20150804,
                                                        "registerDate": 20150825
                                                    }
                                                ]
                                            },
                                            "conectionAICSSErrorIndicator": "NO",
                                            "debtsSummaryDetail": {
                                                "amountLastDebts": "",
                                                "dateLastDebts": "",
                                                "totalAmountDebts": "0",
                                                "totalDebts": 0
                                            },
                                            "delinquencyNumber": 0,
                                            "docsAmountAccumulated12Months": 1132,
                                            "docsAmountAccumulated24Months": 2181,
                                            "docsAmountAccumulated6Months": 608,
                                            "docsAmountAccumulatedMoreThan24Months": 5690,
                                            "docsAmountFrom12To24Months": 1049,
                                            "docsAmountFrom6To12Months": 524,
                                            "docsAmountLast6Months": 608,
                                            "docsAmountMoreThan24Months": 5690,
                                            "icom": {
                                                "commercialICOM": []
                                            },
                                            "infoSectionIndicator": "SI",
                                            "lastDateBoletinLaboral": "",
                                            "market": {
                                                "commercialMarket": [
                                                    {
                                                        "marketDescription": "SERVICIOS FINANCIEROS",
                                                        "unpaidNumber": 32,
                                                        "unpaidAmount": 7871363,
                                                        "marketCode": "0001"
                                                    }
                                                ]
                                            },
                                            "protestSummary": {
                                                "amountLastProtest": "",
                                                "expirationDateLastProtest": 0,
                                                "totalAmountProtests": "0",
                                                "totalProtests": 7871,
                                                "totlAmountProtests": 7871363
                                            },
                                            "summaryBOLAB": {
                                                "amountLastBolab": "",
                                                "expirationDateLastBolab": 0,
                                                "totalAmountBolab": "0",
                                                "totalBolab": 0
                                            },
                                            "summaryBOLCOM": {
                                                "summaryAmountLast": "",
                                                "summaryExpirationDateLast": "",
                                                "summaryTotal": 25,
                                                "summaryTotalAmount": "0"
                                            },
                                            "summaryBed": {
                                                "summaryAmountLast": "",
                                                "summaryExpirationDateLast": "",
                                                "summaryTotal": 7,
                                                "summaryTotalAmount": "0"
                                            },
                                            "summaryIcom": {
                                                "summaryAmountLast": "",
                                                "summaryExpirationDateLast": "",
                                                "summaryTotal": 0,
                                                "summaryTotalAmount": "0"
                                            },
                                            "totalDocsAccumulated12Months": 12,
                                            "totalDocsAccumulated24Months": 24,
                                            "totalDocsAccumulatedMoreThan24Months": 8,
                                            "totalDocsBoletinProtestosEImpagos": 0,
                                            "totalDocsFrom12To24Months": 12,
                                            "totalDocsFrom6To12Months": 6,
                                            "totalDocsICOM": 0,
                                            "totalDocsLast6Months": 6,
                                            "totalDocsMoreThan24Months": 8,
                                            "totalMultaeInfraccionLaboralPrevisional": 0,
                                            "unpaidAmountPesos": "0",
                                            "unpaidAmountThousandPesos": 0,
                                            "unpaidLastAmount": 115232,
                                            "unpaidLastDebtType": "MOROSIDAD",
                                            "unpaidLastExpirationDate": 20190211,
                                            "unpaidNumberInformed": 0,
                                            "unpaidProtestDebtsThousandPesos": "0",
                                            "unpaidTotalAmount": 7871,
                                            "unpaidTotalNumber": 32
                                        },
                                        "detailImpedido": {
                                            "impedido": []
                                        },
                                        "justification": {
                                            "commercialJustification": []
                                        },
                                        "leaseSuiteDebtsSummary": {
                                            "leaseSuiteAccessCamaraComercio": "",
                                            "leaseSuiteAmountAccumulated6Months": 0,
                                            "leaseSuiteBED": {
                                                "leaseCommercialBED": []
                                            },
                                            "leaseSuiteBOLAB": {
                                                "leaseCommercialBOLAB": []
                                            },
                                            "leaseSuiteBOLCOM": {
                                                "leaseCommercialBOLCOM": []
                                            },
                                            "leaseSuiteConectionAICSSErrorIndicator": "S",
                                            "leaseSuiteDebtsSummaryDetail": {
                                                "leaseAmountLastDebts": "",
                                                "leaseDateLastDebts": "",
                                                "leaseTotalAmountDebts": "0",
                                                "leaseTotalDebts": 0,
                                                "withoutLeaseAmountLastDebts": "",
                                                "withoutLeaseDateLastDebts": "",
                                                "withoutLeaseTotalAmountDebts": "0",
                                                "withoutLeaseTotalDebts": 0
                                            },
                                            "leaseSuiteDelinquencyNumber": 0,
                                            "leaseSuiteDocsAmountAccumulated12Months": "0",
                                            "leaseSuiteDocsAmountAccumulated24Months": "0",
                                            "leaseSuiteDocsAmountAccumulated6Months": "0",
                                            "leaseSuiteDocsAmountAccumulatedMoreThan24Months": "0",
                                            "leaseSuiteDocsAmountFrom12To24Months": "0",
                                            "leaseSuiteDocsAmountFrom6To12Months": "0",
                                            "leaseSuiteDocsAmountLast6Months": "0",
                                            "leaseSuiteDocsAmountMoreThan24Months": "0",
                                            "leaseSuiteICOM": {
                                                "leaseCommercialICOM": []
                                            },
                                            "leaseSuiteInfoSectionIndicator": "",
                                            "leaseSuiteLastDateBoletinLaboral": "",
                                            "leaseSuiteMarket": {
                                                "leaseCommercialMarket": []
                                            },
                                            "leaseSuiteProtestSummary": {
                                                "leaseAmountLastProtest": "",
                                                "leaseExpirationDateLastProtest": "",
                                                "leaseTotalAmountProtests": "0",
                                                "leaseTotalProtests": 0
                                            },
                                            "leaseSuiteSummaryBOLAB": {
                                                "leaseAmountLastBolab": "",
                                                "leaseExpirationDateLastBolab": "",
                                                "leaseTotalAmountBolab": "0",
                                                "leaseTotalBolab": 0
                                            },
                                            "leaseSuiteTotalDocsAccumulated12Months": 0,
                                            "leaseSuiteTotalDocsAccumulated24Months": 0,
                                            "leaseSuiteTotalDocsAccumulatedMoreThan24Months": 0,
                                            "leaseSuiteTotalDocsBoletinProtestosEImpagos": 0,
                                            "leaseSuiteTotalDocsFrom12To24Months": 0,
                                            "leaseSuiteTotalDocsFrom6To12Months": 0,
                                            "leaseSuiteTotalDocsICOM": 0,
                                            "leaseSuiteTotalDocsLast6Months": 0,
                                            "leaseSuiteTotalDocsMoreThan24Months": 0,
                                            "leaseSuiteTotalMultaeInfraccionLaboralPrevisional": 0,
                                            "leaseSuiteUnpaidAmountPesos": "0",
                                            "leaseSuiteUnpaidLastAmount": "",
                                            "leaseSuiteUnpaidLastDebtType": "",
                                            "leaseSuiteUnpaidLastExpirationDate": "",
                                            "leaseSuiteUnpaidNumberInformed": 0,
                                            "leaseSuiteUnpaidProtestDebtsThousandPesos": "0",
                                            "leaseSuiteUnpaidTotalAmount": "0",
                                            "leaseSuiteUnpaidTotalNumber": "0",
                                            "leaseSummaryBed": {
                                                "summaryAmountLast": "",
                                                "summaryExpirationDateLast": "",
                                                "summaryTotal": 0,
                                                "summaryTotalAmount": "0"
                                            },
                                            "leaseSummaryBolcom": {
                                                "summaryAmountLast": "",
                                                "summaryExpirationDateLast": "",
                                                "summaryTotal": 0,
                                                "summaryTotalAmount": "0"
                                            },
                                            "leaseSummaryIcom": {
                                                "summaryAmountLast": "",
                                                "summaryExpirationDateLast": "",
                                                "summaryTotal": 0,
                                                "summaryTotalAmount": "0"
                                            },
                                            "unpaidTotalAmountWithoutLeaseSuite": "0",
                                            "unpaidTotalNumberWithoutLeaseSuite": "0",
                                            "withoutLeaseSuiteBED": {
                                                "withoutLeaseCommercialBED": []
                                            },
                                            "withoutLeaseSuiteBOLCOM": {
                                                "withoutLeaseCommercialBOLCOM": []
                                            },
                                            "withoutLeaseSummaryBed": {
                                                "summaryAmountLast": "",
                                                "summaryExpirationDateLast": "",
                                                "summaryTotal": 0,
                                                "summaryTotalAmount": "0"
                                            },
                                            "withoutLeaseSummaryBolcom": {
                                                "summaryAmountLast": "",
                                                "summaryExpirationDateLast": "",
                                                "summaryTotal": 0,
                                                "summaryTotalAmount": "0"
                                            }
                                        },
                                        "onp": {
                                            "detailONP": {
                                                "commercialDetailONP": []
                                            },
                                            "summaryONP": {
                                                "onpLastMonths": 0,
                                                "onpMonthsNumber": 3,
                                                "onpNumber": 0
                                            }
                                        },
                                        "sbif": {
                                            "sbifdetail": {
                                                "commercialSBIFDetail": [
                                                    {
                                                        "availableCreditLine": 0,
                                                        "activePeriodDate": 0
                                                    }
                                                ]
                                            },
                                            "sbifsummary": {
                                                "detailsCount": "0",
                                                "latestFinancialDebt": "0",
                                                "presenceOfDetails": "",
                                                "totalDebts": "0"
                                            }
                                        }
                                    },
                                    "guarantees": {
                                        "accreditations": {
                                            "accreditationsFlag": "SI",
                                            "commercialPartnerPartnership": {
                                                "activities": {
                                                    "activityData": []
                                                },
                                                "commercialCompanyData": {
                                                    "commercialCompanyEmpresarial": []
                                                },
                                                "commercialPartners": {
                                                    "commercialPartnerEmpresarial": []
                                                },
                                                "executives": {
                                                    "executiveData": []
                                                },
                                                "mallaCommercialCompanyData": {
                                                    "mallaCompanyEmpresarial": []
                                                },
                                                "mallaCommercialPartners": {
                                                    "mallaPartnerEmpresarial": []
                                                },
                                                "sizeSection": {
                                                    "approximateVehiclesValue": "",
                                                    "dimensionDate": "",
                                                    "dimensionIndicatorCode": "",
                                                    "dimensionIndicatorDesc": "",
                                                    "lastPeriodTurnover": "",
                                                    "numberOfEmployees": "",
                                                    "numberOfProperties": 2,
                                                    "numberOfVehicles": "",
                                                    "totalPropertiesValue": 107609409
                                                },
                                                "taxDeclaration": {
                                                    "dateTaxDeclaration": 0,
                                                    "pageTaxDeclaration": 0,
                                                    "pageOldTaxDeclaration": "",
                                                    "typeOldTaxDeclaration": "",
                                                    "typeTaxDeclaration": ""
                                                }
                                            },
                                            "externalTrade": {
                                                "financialIndicators": {
                                                    "fechaDolar": "",
                                                    "fechaUF": "",
                                                    "fechaUTM": "",
                                                    "valorDolar": "",
                                                    "valorUF": "",
                                                    "valorUTM": ""
                                                },
                                                "lastAmountExport": 0,
                                                "lastAmountImport": 0,
                                                "lastYearExport": 0,
                                                "lastyearImport": 0
                                            },
                                            "gse": {
                                                "gseCode": "",
                                                "gseDate": "",
                                                "gseSource": ""
                                            },
                                            "obbligations": {
                                                "obbligation": []
                                            },
                                            "personPartnerPartnership": {
                                                "countRelationshipsPartner": 0,
                                                "countRelationshipsSociety": 0,
                                                "personPartnership": {
                                                    "mallaCompanyEmpresarial": []
                                                },
                                                "societies": {
                                                    "societies": [
                                                        {
                                                            "descSociety": "",
                                                            "societyRut": ""
                                                        }
                                                    ]
                                                }
                                            },
                                            "proprieties": {
                                                "proprietiesData": []
                                            },
                                            "realEstate": {
                                                "propertiesCount": "",
                                                "totalAssesmentAmountPesos": ""
                                            },
                                            "sii": {
                                                "categorySII": "",
                                                "dateUpdateInfoInicioAct": "",
                                                "dateUpdateInfoUltimoTimbraje": "",
                                                "detailEconomicActivity": {
                                                    "economicActivityTemp": []
                                                },
                                                "economicActivityDescription": "",
                                                "inicioActividades": "",
                                                "lastTaxPeriod": "",
                                                "lastTaxPeriodNumber": "",
                                                "observacionesTributarias": {
                                                    "commercialTaxViolationComments": []
                                                },
                                                "observacionesTributariasNumber": 0,
                                                "rubro": "",
                                                "startSIIDate": "",
                                                "taxInfraction": {
                                                    "taxViolationData": []
                                                },
                                                "ultimoTimbraje": ""
                                            },
                                            "vehicles": {
                                                "carActualizationDate": "",
                                                "carTaxValuation": "",
                                                "comercialValuationCar": "",
                                                "detailCars": {
                                                    "detailCar": []
                                                },
                                                "detailOwners": {
                                                    "detailOwner": []
                                                },
                                                "resumeCar": {
                                                    "dateLastCRAcquisition": "",
                                                    "flagActualOwner": "",
                                                    "presenceOfDetails": "",
                                                    "totalNumberOwners": "",
                                                    "vehicleStructure": {
                                                        "carSerial": "",
                                                        "carValue": "",
                                                        "chasisSerial": "",
                                                        "classificationType": {
                                                            "code": "",
                                                            "description": ""
                                                        },
                                                        "color": {
                                                            "code": "",
                                                            "description": ""
                                                        },
                                                        "colorOther": "",
                                                        "fuelDescription": "",
                                                        "mark": {
                                                            "code": "",
                                                            "description": ""
                                                        },
                                                        "model": {
                                                            "code": "",
                                                            "description": ""
                                                        },
                                                        "motorSerial": "",
                                                        "plate": "",
                                                        "plateCheck": "",
                                                        "type": {
                                                            "code": "",
                                                            "description": ""
                                                        },
                                                        "yearManufacture": ""
                                                    }
                                                },
                                                "resumeOwner": {
                                                    "dateLastCRAcquisition": "",
                                                    "flagHistorical": "",
                                                    "owner": {
                                                        "fatherSurname": "",
                                                        "motherSurname": "",
                                                        "name": "",
                                                        "rut": "",
                                                        "tradeName": "",
                                                        "typeId": ""
                                                    },
                                                    "presenceOfDetails": "",
                                                    "totalAmountHeavyCars": "",
                                                    "totalAmountLightCars": "",
                                                    "totalAmountOtherCars": "",
                                                    "totalNumberCars": "",
                                                    "totalNumberHeavyCars": 0,
                                                    "totalNumberLightCars": 6,
                                                    "totalNumberOtherCars": 0
                                                },
                                                "totalNumberCars": "",
                                                "totalNumberHeavyCars": "0",
                                                "totalNumberLightCars": "0",
                                                "totalNumberOtherCars": "0"
                                            }
                                        }
                                    },
                                    "lanzamientosData": {
                                        "detailLanzamiento": {
                                            "lanzamientosTemp": []
                                        },
                                        "summaryLanzamiento": {
                                            "courtLastLanzamiento": "",
                                            "dateLastLanzamiento": "",
                                            "lastJudgmentCase": "",
                                            "lastLanzamiento": "",
                                            "roleLastLanzamient": "",
                                            "totalLanzamientos": ""
                                        }
                                    },
                                    "transactionInfo": {
                                        "transactionID": "",
                                        "transactionTime": ""
                                    }
                                },
                                "businessResult": true,
                                "errorCode": "",
                                "errorMessage": "",
                                "errorData": ""
                            }
                        }
                    }
                }
            },
            "equifax-cl-household": {
                "household": {
                    "GetHouseHoldReportByRutResponse": {
                        "Errors": "",
                        "BusinessResult": true,
                        "HouseHold": {
                            "rut": "0070093456",
                            "members": {
                                "member": [
                                    {
                                        "rut": "0070093413",
                                        "name": "VERGARA ORTIZ MARTA GERTRUDIZ"
                                    },
                                    {
                                        "rut": "0051506014",
                                        "name": "ORTIZ VALENZUELA GERTRUDIS"
                                    },
                                    {
                                        "rut": "0070093456",
                                        "name": "VERGARA ORTIZ JOSE IGNACIO"
                                    },
                                    {
                                        "rut": "0034822778",
                                        "name": "VERGARA DIAZ JOSE IGNACIO"
                                    },
                                    {
                                        "rut": "006831657K",
                                        "name": "VERGARA ORTIZ MONICA DEL CARMEN"
                                    },
                                    {
                                        "rut": "0070093405",
                                        "name": "VERGARA ORTIZ MARIA SOLEDAD"
                                    },
                                    {
                                        "rut": "0198745111",
                                        "name": "VERGARA VALLEJOS JAVIERA JOSE"
                                    },
                                    {
                                        "rut": "0091366169",
                                        "name": "VALLEJOS ZAMORANO MIRIAM DE LAS MERCEDES"
                                    },
                                    {
                                        "rut": "0171278910",
                                        "name": "ALARCON ALARCON ANDREA DEL CARMEN"
                                    },
                                    {
                                        "rut": "0115553259",
                                        "name": "ALARCON MORALES INELIA HORTENSIA"
                                    },
                                    {
                                        "rut": "0160214902",
                                        "name": "VERGARA DIAZ PAULINA SOLEDAD"
                                    },
                                    {
                                        "rut": "0173352646",
                                        "name": "VERGARA DIAZ JOSE IGNACIO"
                                    }
                                ]
                            },
                            "selectionFunction": "RSK",
                            "attributes": {
                                "attribute": [
                                    {
                                        "name": "PREDICTOR1_MIN_HH",
                                        "value": 111
                                    },
                                    {
                                        "name": "PREDICTOR1_PROM_HH",
                                        "value": 487
                                    },
                                    {
                                        "name": "PREDICTOR1_MAX_HH",
                                        "value": 966
                                    },
                                    {
                                        "name": "RENTA_TOTAL_HH",
                                        "value": 4984789
                                    },
                                    {
                                        "name": "RENTA_TOTAL_LIDER_HH",
                                        "value": 4496201
                                    },
                                    {
                                        "name": "CLEAN2_HH",
                                        "value": 0.571
                                    }
                                ]
                            }
                        },
                        "ErrorCode": "",
                        "ErrorMessage": "",
                        "ErrorData": ""
                    }
                }
            },
            "mapCityVars": {
                "rut": 7009345,
                "rutVerification": "6",
                "direLongitud": "-34,639301",
                "direLatitud": "-71,370522",
                "redCode": "06310011001031",
                "gse": "C2  ",
                "gastoMovilHogar": 2.93,
                "gastoTelefFijoHogar": 0.2106,
                "gastoInternet": 0.0716,
                "gastoPackTelco": 2.7403,
                "gastoBam": 0.0617
            },
            "Conexion a la camara": "Sin conexion a la camara de comercio"
        }
    },
    "clientOrchestrationUUID": "22433f9f-d9b0-4f04-a3b0-c637c86a36de",
    "clientOrchestrationDateCreated": "Wed Mar 27 08:45:26 EDT 2019",
    "clientOrchestrationDateModified": null
};



const schema = toJsonSchema(o,options);
console.log(JSON.stringify(schema));
