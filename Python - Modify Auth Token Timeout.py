#!/usr/bin/env python

import sys
import requests

if len(sys.argv) < 4:
    print "\nRequires: Host Token Timeout\n"
    sys.exit()


url = "https://" + sys.argv[1] + "/mgmt/shared/authz/tokens/" + sys.argv[2]

payload = "{\n    \"timeout\":\"" + sys.argv[3] + "\"\n}"
headers = {
    'x-f5-auth-token': sys.argv[2],
    'content-type': "application/json",
    'cache-control': "no-cache"
    }

response = requests.request("PATCH", url, data=payload, headers=headers, verify=False)

print(response.text)
