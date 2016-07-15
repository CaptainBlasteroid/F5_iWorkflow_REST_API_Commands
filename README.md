# F5_iWorkflow_iControl.REST_API-Introduction
POSTMAN Collections to provide an Introduction to the F5 iWorkflow iControl.REST API

For more details on F5 iWorkflow, visit F5's DevCentral iWorkflow Wiki and read the iWorkflow 101 and 201 series here: https://devcentral.f5.com/wiki/iWorkflow.HomePage.ashx

Requires POSTMAN. Get that here: https://www.getpostman.com

Environment:
To use these collections you will need to import the POSTMAN environment file:
https://github.com/npearce/F5_iWorkflow_iControl.REST_API_Commands/blob/master/iWorkflow%20Lab.postman_environment.json

#Collections:
##F5 iWorkflow iControl.REST API - Auth Tokens
URL: https://github.com/npearce/F5_iWorkflow_iControl.REST_API_Commands/blob/master/F5%20iWorkflow%20iControl.REST%20API%20-%20Auth%20Tokens.postman_collection.json

Description: Using BASIC auth, retrieves an "Auth Token" from iWorkflow and sets Token as a POSTMAN variable. Changes the Auth Token timeout from 3600 seconds to 36000, then uses the Token to retrieve a list of iWorkflow Tenants (to test it worked).

##F5 iWorkflow iControl.REST API - Add a BIG-IP device to iWorkflow
URL: https://github.com/npearce/F5_iWorkflow_iControl.REST_API_Commands/blob/master/F5%20iWorkflow%20iControl.REST%20API%20-%20Add%20a%20BIG-IP%20device%20to%20iWorkflow.json

Description: Add a BIG-IP device to the iWorkflow device list. This allows an iWorkflow Administrator to add the BIG-IP to a  Tenant Connector (under Clouds). The Auth Token transactions are included. Skip these if you already have a valid Auth Token.
