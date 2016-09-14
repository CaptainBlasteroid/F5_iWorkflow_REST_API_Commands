# F5 iWorkflow REST API - Introduction
This repository includes both a) POSTMAN Collections to provide an Introduction to the F5 iWorkflow REST API, and b) Javascript and Python scripts to show how to communicate with the iWorkflow REST API programmatically.

For more details on F5 iWorkflow, visit F5's DevCentral iWorkflow Wiki and read the iWorkflow 101 and 201 series here: https://devcentral.f5.com/wiki/iWorkflow.HomePage.ashx



#POSTMAN Collections:
POSTMAN collections require the POSTMAN REST client. You can get that here: https://www.getpostman.com

**Environment:**
To use these collections you will need to import the POSTMAN environment file:
https://github.com/npearce/F5_iWorkflow_REST_API_Commands/blob/master/iWorkflow%20Lab.postman_environment.json

To use these collections you will need to import the POSTMAN environment file. From within POSTMAN, select **Import** from the File Menu and select "Import From Link":
https://github.com/npearce/F5_iWorkflow_iControl.REST_API_Commands/blob/master/iWorkflow%20Lab.postman_environment.json
Once imported, you will need to edit the environment and change the value of **iWorkflow_Mgmt_IP** to the management address of your iWorkflow platform.

##F5 iWorkflow REST API - Auth Tokens
**URL:** https://github.com/npearce/F5_iWorkflow_REST_API_Commands/blob/master/F5%20iWorkflow%20REST%20API%20-%20Auth%20Tokens.postman_collection.json

**Description:** Retrieves an "Auth Token" from iWorkflow and sets Token as a POSTMAN variable. Changes the Auth Token timeout from 1200 seconds to 36000, then uses the Token to retrieve a list of iWorkflow Tenants (to verify it worked).

##F5 iWorkflow REST API - Add a BIG-IP device to iWorkflow
**URL:** https://github.com/npearce/F5_iWorkflow_REST_API_Commands/blob/master/F5%20iWorkflow%20REST%20API%20-%20Add%20a%20BIG-IP%20device%20to%20iWorkflow.json

**Description:** Add a BIG-IP device to the iWorkflow device list. This allows an iWorkflow Administrator to add the BIG-IP to a Tenant Connector (under Clouds). The Auth Token transactions are included. Skip these if you already have a valid Auth Token.

##F5 iWorkflow REST API - Tenant L4 - L7 Service Deployment
**URL:** https://raw.githubusercontent.com/npearce/F5_iWorkflow_REST_API_Commands/master/F5%20iWorkflow%20REST%20API%20-%20Tenant%20L4%20-%20L7%20Service%20Deployment.postman_collection.json

**Description** Deploy L4 - L7 Services onto a BIG-IP device via the iWorkflow REST API. In this collection, users will push an L4 - L7 service onto a BIG-IP device, using an L4 - L7 Service Template via the iWorkflow Tenant REST interface.


#Javascript for iWorkflow
##Request an Auth Token using Javascript
**URL** https://github.com/npearce/F5_iWorkflow_REST_API_Commands/blob/master/Javascript-Request_Auth_Token.js

**Description**
POST transaction to request an Auth Token from iWorkflow. Requires the command-line arguments: Host Username Password

Example: $ node Javascript-Request_Auth_Token.js 10.128.1.130 User admin

##Modify the Auth Token Timeout using Javascript
**URL**
https://github.com/npearce/F5_iWorkflow_REST_API_Commands/blob/master/Javascript-Modify_Auth_Token_Timeout.js

**Description**
PATCH transaction to modify the timeout property of the Auth Token resource. Requires the command-line arguments: Host Token Timeout

Example: $ node Javascript-Modify_Auth_Token_Timeout.js 10.128.1.130 WAOAD4RV4GSGF6JTQ4L4D4M7X7 36000

##List the L4 - L7 Service Templates using Javascript
**URL**
https://github.com/npearce/F5_iWorkflow_REST_API_Commands/blob/master/Javascript-List_L4-L7_Service_Templates.js

**Description**
GET transaction to list the L4-L7 Service Templates to verify Auth Token success. Requires the command-line arguments: Host Token

Example: $  node Javascript-List_L4-L7_Service_Templates.js 10.128.1.130 WAOAD4RV4GSGF6JTQ4L4D4M7X7


#Python for iWorkflow
##Request an Auth Token using Python
**URL**
https://github.com/npearce/F5_iWorkflow_REST_API_Commands/blob/master/Python-Request_Auth_Token.py

**Description**
POST transaction to request an Auth Token from iWorkflow. Requires the command-line arguments: Host Username Password

Example: $ python Python-Request_Auth_Token.py 10.128.1.130 User1 admin

##Modify the Auth Token Timeout using Python
**URL**
https://github.com/npearce/F5_iWorkflow_REST_API_Commands/blob/master/Python-Modify_Auth_Token_Timeout.py

**Description**
PATCH transaction to modify the timeout property of the Auth Token resource. Requires the command-line arguments: Host Token Timeout

Example: $ python Python-Modify_Auth_Token_Timeout.py 10.128.1.130 CSJ4NH6UA22Z2B5EKMK77YRPLX 36000

##List the L4 - L7 Service Templates using Python
**URL**
https://github.com/npearce/F5_iWorkflow_REST_API_Commands/blob/master/Python-List_L4-L7_Service_Templates.py

**Description**
GET transaction to list the L4-L7 Service Templates to verify Auth Token success. Requires the command-line arguments: Host Token

Example: $ python Python-List_the_L4-L7_Service_Templates.py 10.128.1.130 CSJ4NH6UA22Z2B5EKMK77YRPLX
