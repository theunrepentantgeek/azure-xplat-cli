// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e0b81f36-36ba-44f7-b550-7c9344a35893',
    name: 'IOTHUB_PERF_1',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291?api-version=2016-02-03')
  .reply(202, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/operationResults/ODY0NzY2NTktNmIyNy00ZDZmLTlhZGYtN2UyYzQ5Yjk4MDk3?api-version=2016-02-03',
  'retry-after': '15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/operationResults/ODY0NzY2NTktNmIyNy00ZDZmLTlhZGYtN2UyYzQ5Yjk4MDk3?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'abf8fc3c-6b50-4e45-a483-61b3387293f4',
  'x-ms-correlation-request-id': 'abf8fc3c-6b50-4e45-a483-61b3387293f4',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011739Z:abf8fc3c-6b50-4e45-a483-61b3387293f4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:17:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291?api-version=2016-02-03')
  .reply(202, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/operationResults/ODY0NzY2NTktNmIyNy00ZDZmLTlhZGYtN2UyYzQ5Yjk4MDk3?api-version=2016-02-03',
  'retry-after': '15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/operationResults/ODY0NzY2NTktNmIyNy00ZDZmLTlhZGYtN2UyYzQ5Yjk4MDk3?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'abf8fc3c-6b50-4e45-a483-61b3387293f4',
  'x-ms-correlation-request-id': 'abf8fc3c-6b50-4e45-a483-61b3387293f4',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011739Z:abf8fc3c-6b50-4e45-a483-61b3387293f4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:17:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/operationResults/ODY0NzY2NTktNmIyNy00ZDZmLTlhZGYtN2UyYzQ5Yjk4MDk3?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': '79f69fed-c296-4603-8fa7-42cdfc43e708',
  'x-ms-correlation-request-id': '79f69fed-c296-4603-8fa7-42cdfc43e708',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011809Z:79f69fed-c296-4603-8fa7-42cdfc43e708',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:18:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/operationResults/ODY0NzY2NTktNmIyNy00ZDZmLTlhZGYtN2UyYzQ5Yjk4MDk3?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': '79f69fed-c296-4603-8fa7-42cdfc43e708',
  'x-ms-correlation-request-id': '79f69fed-c296-4603-8fa7-42cdfc43e708',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011809Z:79f69fed-c296-4603-8fa7-42cdfc43e708',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:18:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291?api-version=2016-02-03')
  .reply(404, "{\"Code\":\"IotHubNotFound\",\"HttpStatusCode\":\"NotFound\",\"Message\":\"IotHub 'xplattestiothub7291' not found under ResourceGroup 'xplattestiothubrg' and Subscription 'e0b81f36-36ba-44f7-b550-7c9344a35893'. If you contact a support representative please include this correlation identifier: 8ae442c0-ac72-418b-9b3d-82b2397c213c, timestamp: 2016-08-09 01:18:08Z, errorcode: IH404002.\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '377',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '3d561ee0-40c1-4cf3-a890-a7b80c168f14',
  'x-ms-correlation-request-id': '3d561ee0-40c1-4cf3-a890-a7b80c168f14',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011810Z:3d561ee0-40c1-4cf3-a890-a7b80c168f14',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:18:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291?api-version=2016-02-03')
  .reply(404, "{\"Code\":\"IotHubNotFound\",\"HttpStatusCode\":\"NotFound\",\"Message\":\"IotHub 'xplattestiothub7291' not found under ResourceGroup 'xplattestiothubrg' and Subscription 'e0b81f36-36ba-44f7-b550-7c9344a35893'. If you contact a support representative please include this correlation identifier: 8ae442c0-ac72-418b-9b3d-82b2397c213c, timestamp: 2016-08-09 01:18:08Z, errorcode: IH404002.\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '377',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '3d561ee0-40c1-4cf3-a890-a7b80c168f14',
  'x-ms-correlation-request-id': '3d561ee0-40c1-4cf3-a890-a7b80c168f14',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011810Z:3d561ee0-40c1-4cf3-a890-a7b80c168f14',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:18:10 GMT',
  connection: 'close' });
 return result; }]];