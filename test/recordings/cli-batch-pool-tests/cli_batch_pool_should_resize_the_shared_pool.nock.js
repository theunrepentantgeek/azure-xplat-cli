// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2915bbd6-1252-405f-8173-6c00428146d9',
    name: 'Batch-MatthChr',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatTestPool/resize?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 04 Aug 2016 00:01:29 GMT',
  etag: '0x8D3BBFA7C6C1CAE',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '96471fb4-47f5-4bfa-a304-d90cccdd5560',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '3f482b52-d272-4f4a-a360-8d9ee0ad07c3',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/resize',
  date: 'Thu, 04 Aug 2016 00:01:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatTestPool/resize?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 04 Aug 2016 00:01:29 GMT',
  etag: '0x8D3BBFA7C6C1CAE',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '96471fb4-47f5-4bfa-a304-d90cccdd5560',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '3f482b52-d272-4f4a-a360-8d9ee0ad07c3',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/resize',
  date: 'Thu, 04 Aug 2016 00:01:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplattestpool\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool\",\"eTag\":\"0x8D3BBFA7C6C1CAE\",\"lastModified\":\"2016-08-04T00:01:29.305003Z\",\"creationTime\":\"2016-08-02T22:17:51.8979308Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-02T22:17:51.8979308Z\",\"allocationState\":\"resizing\",\"allocationStateTransitionTime\":\"2016-08-04T00:01:29.305003Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":5,\"enableAutoScale\":false,\"enableInterNodeCommunication\":true,\"startTask\":{\r\n    \"commandLine\":\"cmd /c dir\",\"resourceFiles\":[\r\n      \r\n    ],\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"2\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:01:29 GMT',
  etag: '0x8D3BBFA7C6C1CAE',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5e1e86c0-ce32-4f1d-aa1a-d447b713a538',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '74e86756-07e4-4b88-bff9-5f2c387a6730',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplattestpool\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool\",\"eTag\":\"0x8D3BBFA7C6C1CAE\",\"lastModified\":\"2016-08-04T00:01:29.305003Z\",\"creationTime\":\"2016-08-02T22:17:51.8979308Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-02T22:17:51.8979308Z\",\"allocationState\":\"resizing\",\"allocationStateTransitionTime\":\"2016-08-04T00:01:29.305003Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":5,\"enableAutoScale\":false,\"enableInterNodeCommunication\":true,\"startTask\":{\r\n    \"commandLine\":\"cmd /c dir\",\"resourceFiles\":[\r\n      \r\n    ],\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"2\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:01:29 GMT',
  etag: '0x8D3BBFA7C6C1CAE',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5e1e86c0-ce32-4f1d-aa1a-d447b713a538',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '74e86756-07e4-4b88-bff9-5f2c387a6730',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:33 GMT',
  connection: 'close' });
 return result; }]];