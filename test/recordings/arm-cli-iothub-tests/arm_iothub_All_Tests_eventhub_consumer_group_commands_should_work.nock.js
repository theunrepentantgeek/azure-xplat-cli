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
  .put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/eventHubEndpoints/events/ConsumerGroups/cg1?api-version=2016-02-03')
  .reply(200, "{\"tags\":null,\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291\",\"name\":\"cg1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '174',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '957e935a-721c-485c-9b43-5a7d7f1af054',
  'x-ms-correlation-request-id': '957e935a-721c-485c-9b43-5a7d7f1af054',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011542Z:957e935a-721c-485c-9b43-5a7d7f1af054',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:15:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/eventHubEndpoints/events/ConsumerGroups/cg1?api-version=2016-02-03')
  .reply(200, "{\"tags\":null,\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291\",\"name\":\"cg1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '174',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '957e935a-721c-485c-9b43-5a7d7f1af054',
  'x-ms-correlation-request-id': '957e935a-721c-485c-9b43-5a7d7f1af054',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011542Z:957e935a-721c-485c-9b43-5a7d7f1af054',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:15:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/eventHubEndpoints/events/ConsumerGroups?api-version=2016-02-03')
  .reply(200, "{\"value\":[\"$Default\",\"cg1\"]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '74a8ed5d-e48f-4b22-9508-7e49be4e8654',
  'x-ms-correlation-request-id': '74a8ed5d-e48f-4b22-9508-7e49be4e8654',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011543Z:74a8ed5d-e48f-4b22-9508-7e49be4e8654',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:15:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/eventHubEndpoints/events/ConsumerGroups?api-version=2016-02-03')
  .reply(200, "{\"value\":[\"$Default\",\"cg1\"]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '74a8ed5d-e48f-4b22-9508-7e49be4e8654',
  'x-ms-correlation-request-id': '74a8ed5d-e48f-4b22-9508-7e49be4e8654',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011543Z:74a8ed5d-e48f-4b22-9508-7e49be4e8654',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:15:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/eventHubEndpoints/events/ConsumerGroups/cg1?api-version=2016-02-03')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '8d36a83b-8959-4fdc-ae98-a219b84e1018',
  'x-ms-correlation-request-id': '8d36a83b-8959-4fdc-ae98-a219b84e1018',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011547Z:8d36a83b-8959-4fdc-ae98-a219b84e1018',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:15:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/eventHubEndpoints/events/ConsumerGroups/cg1?api-version=2016-02-03')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '8d36a83b-8959-4fdc-ae98-a219b84e1018',
  'x-ms-correlation-request-id': '8d36a83b-8959-4fdc-ae98-a219b84e1018',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011547Z:8d36a83b-8959-4fdc-ae98-a219b84e1018',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:15:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/eventHubEndpoints/events/ConsumerGroups?api-version=2016-02-03')
  .reply(200, "{\"value\":[\"$Default\"]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '069c8188-9f1d-4f6c-896d-97706519b018',
  'x-ms-correlation-request-id': '069c8188-9f1d-4f6c-896d-97706519b018',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011548Z:069c8188-9f1d-4f6c-896d-97706519b018',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:15:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub7291/eventHubEndpoints/events/ConsumerGroups?api-version=2016-02-03')
  .reply(200, "{\"value\":[\"$Default\"]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '069c8188-9f1d-4f6c-896d-97706519b018',
  'x-ms-correlation-request-id': '069c8188-9f1d-4f6c-896d-97706519b018',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T011548Z:069c8188-9f1d-4f6c-896d-97706519b018',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 01:15:47 GMT',
  connection: 'close' });
 return result; }]];