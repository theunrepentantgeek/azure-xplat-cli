// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '314',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3b3d8eb7-624c-42eb-a8b6-b92282d358cc',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11995',
  'x-ms-correlation-request-id': '920d03df-9017-4f3b-acf3-fa401b7ea2c8',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185541Z:920d03df-9017-4f3b-acf3-fa401b7ea2c8',
  date: 'Tue, 25 Oct 2016 18:55:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '314',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3b3d8eb7-624c-42eb-a8b6-b92282d358cc',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11995',
  'x-ms-correlation-request-id': '920d03df-9017-4f3b-acf3-fa401b7ea2c8',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185541Z:920d03df-9017-4f3b-acf3-fa401b7ea2c8',
  date: 'Tue, 25 Oct 2016 18:55:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\",\"testkey14440\":\"testval19135\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '344',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '03af1ca8-57cb-4938-8381-935ff01b8c80',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-correlation-request-id': 'b4b282f4-40b6-4e0e-89f6-e9a85a983705',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185542Z:b4b282f4-40b6-4e0e-89f6-e9a85a983705',
  date: 'Tue, 25 Oct 2016 18:55:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\",\"testkey14440\":\"testval19135\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '344',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '03af1ca8-57cb-4938-8381-935ff01b8c80',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-correlation-request-id': 'b4b282f4-40b6-4e0e-89f6-e9a85a983705',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185542Z:b4b282f4-40b6-4e0e-89f6-e9a85a983705',
  date: 'Tue, 25 Oct 2016 18:55:41 GMT',
  connection: 'close' });
 return result; }]];