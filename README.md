# TMS Service

The TMS service is a NodeJs REST-API service that ingests a FRM transaction and validates if it has the correct format.

## Available Calls

This service consist on a simple post request to validate a transaction.

### GET - Online

The online get request will respond with a message stating that the service is running and online.
As a note, any get requests will return the online message since this service only uses POST for execution.

**Example:**  
Request:

``` http
http://{{host}}:{{port}}/
```

Response:  

``` json
{"status":"UP"}
```

### POST - Transaction

Validates that the Transaction body conforms to the Swagger validation.

**Example:**  

Request:

``` http
http://{{host}}:{{port}}/monitor/transaction
```

Request Body:

``` json
{
  "TransactionID": "123e4567-e89b-12d3-a456-426614174000",
  "ILPSourceAccountAddress": "Bank1.MSISDN.2507122015",
  "ILPDestinationAccountAddress": "Bank2.MSISDN.25094672092",
  "PayerContactNo": "2507122015",
  "PayeeContactNo": "25094672092",
  "Amount": "250.40",
  "Fee": "250.40",
  "Payer": {
    "PartyIDType": "string", 
    "PersonalIdentifierType": "string",
    "PartyID": "string",
    "PartyName": "string"
  },
  "Payee": {
    "PartyName": "string"
  },
  "SourceAccountBalance": "5000.30",
  "SourceAccountTransactionLimit": "500",
  "SourceAccountDailyLimit": "1500",
  "SourceAccountPINDate": "10/10/2010",
  "PayerDeviceIMEI": "19283747590379",
  "PayerICCID": "39iejdi3948",
  "Location": "Ghana",
  "Transaction": {
    "AuthenticationType": "string"
  },
  "TransactionType": {
    "TransactionScenario": "string",
    "TransactionInitiator": "string",
    "TransactionInitiatorType": "string"
  }
}
```

Response:

``` text
{
  "result": "Transaction is valid"
}
```
