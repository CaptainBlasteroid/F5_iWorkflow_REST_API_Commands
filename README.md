# F5_iWorkflow_iControl.REST_API-Introduction
POSTMAN Collections to provide an Introduction to the F5 iWorkflow iControl.REST API

For more details on F5 iWorkflow, visit F5's DevCentral iWorkflow Wiki and read the iWorkflow 101 and 201 series here: https://devcentral.f5.com/wiki/iWorkflow.HomePage.ashx

Requires POSTMAN. Get that here: https://www.getpostman.com


Environment:
To use these collections you will need to import the POSTMAN environment file:
https://github.com/npearce/F5_iWorkflow_iControl.REST_API_Commands/blob/master/iWorkflow%2520Lab.postman_environment.json


Collections:
Name: F5 iWorkflow iControl.REST API - Auth Tokens.postman_collection
Description: Using BASIC auth, retrieves an "Auth Token" from iWorkflow and sets Token as a POSTMAN variable. Changes the Auth Token timeout from 3600 seconds to 36000, then uses the Token to retrieve a list of iWorkflow Tenants (to test it worked).
