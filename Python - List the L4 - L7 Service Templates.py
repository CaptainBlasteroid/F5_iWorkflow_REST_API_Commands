#!/usr/bin/env python

import sys
import requests

if len(sys.argv) < 3:
    print "\nRequires: Host Token\n"
    sys.exit()


url = "https://" + sys.argv[1] + "/mgmt/cm/cloud/tenant/templates/iapp/"

headers = {
    'x-f5-auth-token': sys.argv[2],
    'cache-control': "no-cache"
    }

response = requests.request("GET", url, headers=headers, verify=False)

print(response.text)
