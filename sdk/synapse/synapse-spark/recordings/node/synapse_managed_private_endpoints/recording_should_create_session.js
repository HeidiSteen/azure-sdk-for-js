let nock = require('nock');

module.exports.hash = "aec64ee63ff1999a26f64d3e21aff0ba";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '87c3dec5-837d-4565-b072-eb1b5e3be500',
  'x-ms-ests-server',
  '2.1.11935.12 - NCUS ProdSlices',
  'Set-Cookie',
  'fpc=AgRoTrDZjTpElY2pAMJYCRQ; expires=Thu, 09-Sep-2021 20:26:20 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr0zOAy4Pxt53QX2imoWg2RJ7mpYUpjD7h5EMSZQ8oQ1y2q9a5ADhnJOCvrUqNdpGMNlUfIKcy3lQ1eYGcYbBSF-txxlE5V-FoMG_H7LdIrtqIp8jlLNIqWrjGe_PXSrM8UDgPTBb2Y6Vzyn0h80cqtrdZ2xgvR_avC5z_VoIyEuIgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 10 Aug 2021 20:26:19 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'a143c5cd-3fff-42f9-97e2-b95f4bc50000',
  'x-ms-ests-server',
  '2.1.11935.14 - SCUS ProdSlices',
  'Set-Cookie',
  'fpc=AkPxHzA2z6RKmZPP5xuEaFU; expires=Thu, 09-Sep-2021 20:26:20 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrT1yY_6zd4Vg9hqaNx1TTLWwlv95BAeiTpXj9Dr6UiHH-4SxfkaC0oC7FcjR-L_hCJfxPfnw0EfksKMhaKa9ULRXEMJA10G9UVYaHwbz0NP6ta0-cdFactZHftBsICCTdh3iYICo6EL-Lly8AwKQnc_IWCJlpVHo2Dzc6QJK_dYogAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 10 Aug 2021 20:26:19 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.2.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=2|771,0|,&x-client-last-telemetry=2|0|||0,0&client-request-id=cf950f16-4a7c-4ffc-bb19-d9d862d23b28&client_secret=azure_client_secret")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'b7e82f41-829d-4f2f-bbdd-876676e0c900',
  'x-ms-ests-server',
  '2.1.11935.12 - EUS ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=Aii8BLqLLDRGjqlP01W5dF7KOuyWAQAAAOzXpNgOAAAA; expires=Thu, 09-Sep-2021 20:26:20 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 10 Aug 2021 20:26:19 GMT',
  'Content-Length',
  '1322'
]);

nock('https://testaccount.dev.azuresynapse.net', {"encodedQueryParams":true})
  .post('/livyApi/versions/2019-11-01-preview/sparkPools/testsparkpool/sessions', {"name":"demo_session","driverMemory":"28g","driverCores":4,"executorMemory":"28g","executorCores":4,"numExecutors":2})
  .reply(200, {"id":33,"appId":null,"appInfo":null,"state":"not_started","log":null}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Kestrel Microsoft-HTTPAPI/2.0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-job-submitted-by-name',
  '30511c9d-ba1a-4c7b-b422-5b543da11b3f',
  'x-ms-job-submitted-on',
  '8/10/2021 8:26:20 PM +00:00',
  'x-ms-job-scheduled-on',
  '1/1/0001 12:00:00 AM +00:00',
  'x-ms-job-ended-on',
  '',
  'x-ms-job-scheduler-state',
  'Queued',
  'x-ms-job-internal-id',
  '33',
  'x-ms-job-result',
  'Uncertain',
  'x-ms-job-type',
  'SparkServiceSession',
  'x-ms-job-queued-on',
  '1/1/0001 12:00:00 AM +00:00',
  'x-ms-job-clusterrequested-on',
  '1/1/0001 12:00:00 AM +00:00',
  'x-ms-job-livysubmission-on',
  '1/1/0001 12:00:00 AM +00:00',
  'x-ms-response-time-ms',
  '4650',
  'x-ms-activity-id',
  '4fa4a3f1-bea7-4db4-91d1-eb39da74b2fe',
  'x-ms-client-request-id',
  'fbd1fb00-20db-4fc9-be56-0f2884931003',
  'x-ms-request-id',
  '88535ef7-c447-480a-b000-8cceb16c3c5d',
  'Date',
  'Tue, 10 Aug 2021 20:26:24 GMT'
]);
