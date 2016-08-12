#!/usr/bin/env node
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var myArgs = process.argv.slice(2);

if (myArgs.length < 3) {
  console.log("\nRequires: Host Token Timeout\n");
  process.exit(1);
};

var http = require("https");

var options = {
  "method": "PATCH",
  "hostname": myArgs[0],
  "port": null,
  "path": "/mgmt/shared/authz/tokens/" +myArgs[1],
  "headers": {
    "x-f5-auth-token": myArgs[1],
    "content-type": "application/json",
    "cache-control": "no-cache"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ timeout: myArgs[2] }));
req.end();
