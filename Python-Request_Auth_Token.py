#!/usr/bin/env python

import sys
import requests

if len(sys.argv) < 4:
    print "\nRequires: Host Username Password\n"
    sys.exit()

url = "https://" + sys.argv[1] + "/mgmt/shared/authn/login"

payload = "{\n  \"username\": \"" + sys.argv[2] + "\",\n  \"password\": \"" + sys.argv[3] + "\",\n  \"loginProvidername\": \"tmos\"\n}"
headers = {
    'content-type': "application/json",
    'cache-control': "no-cache"
    }

response = requests.request("POST", url, data=payload, headers=headers, verify=False)

print(response.text)
