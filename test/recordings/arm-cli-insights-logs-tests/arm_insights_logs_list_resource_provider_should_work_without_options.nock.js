// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'b67f7fec-69fc-4974-9099-a26bd6ffeda3',
    name: 'Monitoring vNext Test Environment Services 02',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringPath(function (path) { return path.slice(0, path.indexOf('&')); })
.get('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/providers/microsoft.insights/eventtypes/management/values?api-version=2015-04-01')
  .reply(200, "{\"value\":[{\"caller\":\"Microsoft.Insights/autoscaleSettings2\",\"correlationId\":\"a8690cfc-2b1d-40eb-8464-a9567609ca0b\",\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.web/serverFarms/Default1/events/0c7f7ded-d0d8-49a2-bfd8-2a29c2745fef/ticks/635651607986589004\",\"resourceGroupName\":\"Default-Web-BrazilSouth3\",\"resourceId\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.web/serverFarms/Default1\",\"operationName\":{\"value\":\"ScaleDown\",\"localizedValue\":\"Scale down\"},\"status\":{\"value\":\"Succeeded\",\"localizedValue\":\"Succeeded\"},\"subStatus\":{\"value\":null},\"eventTimestamp\":\"2015-04-20T21:06:38.6589004Z\",\"subscriptionId\":\"b67f7fec-69fc-4974-9099-a26bd6ffeda3\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '907',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'WestUS_592ed6cdad9a497f93acf6ebdc8267cf_635651645340377732',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '31836',
  'x-ms-correlation-request-id': '5b91985d-008a-4ec7-8c93-e2af8495f33e',
  'x-ms-routing-request-id': 'WESTUS:20150420T220853Z:5b91985d-008a-4ec7-8c93-e2af8495f33e',
  date: 'Mon, 20 Apr 2015 22:08:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringPath(function (path) { return path.slice(0, path.indexOf('&')); })
.get('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/providers/microsoft.insights/eventtypes/management/values?api-version=2015-04-01')
  .reply(200, "{\"value\":[{\"caller\":\"Microsoft.Insights/autoscaleSettings2\",\"correlationId\":\"a8690cfc-2b1d-40eb-8464-a9567609ca0b\",\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.web/serverFarms/Default1/events/0c7f7ded-d0d8-49a2-bfd8-2a29c2745fef/ticks/635651607986589004\",\"resourceGroupName\":\"Default-Web-BrazilSouth3\",\"resourceId\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.web/serverFarms/Default1\",\"operationName\":{\"value\":\"ScaleDown\",\"localizedValue\":\"Scale down\"},\"status\":{\"value\":\"Succeeded\",\"localizedValue\":\"Succeeded\"},\"subStatus\":{\"value\":null},\"eventTimestamp\":\"2015-04-20T21:06:38.6589004Z\",\"subscriptionId\":\"b67f7fec-69fc-4974-9099-a26bd6ffeda3\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '907',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'WestUS_592ed6cdad9a497f93acf6ebdc8267cf_635651645340377732',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '31836',
  'x-ms-correlation-request-id': '5b91985d-008a-4ec7-8c93-e2af8495f33e',
  'x-ms-routing-request-id': 'WESTUS:20150420T220853Z:5b91985d-008a-4ec7-8c93-e2af8495f33e',
  date: 'Mon, 20 Apr 2015 22:08:53 GMT',
  connection: 'close' });
 return result; }]];