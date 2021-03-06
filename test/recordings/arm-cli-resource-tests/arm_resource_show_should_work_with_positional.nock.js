// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'd05f4e58-b80d-4ebd-a6d7-c9cac216cd39',
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource9696' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-request-id': 'd23aeb7a-ca8b-42dc-af48-e2f185a8de57',
  'x-ms-correlation-request-id': 'd23aeb7a-ca8b-42dc-af48-e2f185a8de57',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233420Z:d23aeb7a-ca8b-42dc-af48-e2f185a8de57',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:34:20 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource9696' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-request-id': 'd23aeb7a-ca8b-42dc-af48-e2f185a8de57',
  'x-ms-correlation-request-id': 'd23aeb7a-ca8b-42dc-af48-e2f185a8de57',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233420Z:d23aeb7a-ca8b-42dc-af48-e2f185a8de57',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:34:20 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource9696\",\"name\":\"xTestResource9696\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': '430eb5fa-8b98-49c3-99bd-75c5d35f6162',
  'x-ms-correlation-request-id': '430eb5fa-8b98-49c3-99bd-75c5d35f6162',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233421Z:430eb5fa-8b98-49c3-99bd-75c5d35f6162',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:34:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource9696\",\"name\":\"xTestResource9696\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': '430eb5fa-8b98-49c3-99bd-75c5d35f6162',
  'x-ms-correlation-request-id': '430eb5fa-8b98-49c3-99bd-75c5d35f6162',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233421Z:430eb5fa-8b98-49c3-99bd-75c5d35f6162',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:34:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource9696\",\"name\":\"xTestResource9696\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-request-id': '3b97729c-7d2e-426e-a35e-ee5373d6039c',
  'x-ms-correlation-request-id': '3b97729c-7d2e-426e-a35e-ee5373d6039c',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233421Z:3b97729c-7d2e-426e-a35e-ee5373d6039c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:34:21 GMT',
  connection: 'close',
  'content-length': '205' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource9696\",\"name\":\"xTestResource9696\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-request-id': '3b97729c-7d2e-426e-a35e-ee5373d6039c',
  'x-ms-correlation-request-id': '3b97729c-7d2e-426e-a35e-ee5373d6039c',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233421Z:3b97729c-7d2e-426e-a35e-ee5373d6039c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:34:21 GMT',
  connection: 'close',
  'content-length': '205' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696/providers/Microsoft.Web/sites/xTestGrpRes1865?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource9696/providers/Microsoft.Web/sites/xTestGrpRes1865\",\"name\":\"xTestGrpRes1865\",\"type\":\"Microsoft.Web/sites\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes1865\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres1865.azurewebsites.net\"],\"webSpace\":\"xTestResource9696-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-049.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource9696-SouthCentralUSwebspace/sites/xTestGrpRes1865\",\"repositorySiteName\":\"xTestGrpRes1865\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres1865.azurewebsites.net\",\"xtestgrpres1865.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres1865.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres1865.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-30T23:34:24.3866667\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes1865\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.84.227.199,40.84.230.165,40.84.224.230,40.84.228.178\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-049\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource9696\",\"defaultHostName\":\"xtestgrpres1865.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2339',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c4b8dcf5-98c9-431e-bb04-f90ae4af2176',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'c4aa2ee6-5413-491e-ae37-4b79b4076ecb',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233427Z:c4aa2ee6-5413-491e-ae37-4b79b4076ecb',
  date: 'Tue, 30 Aug 2016 23:34:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696/providers/Microsoft.Web/sites/xTestGrpRes1865?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource9696/providers/Microsoft.Web/sites/xTestGrpRes1865\",\"name\":\"xTestGrpRes1865\",\"type\":\"Microsoft.Web/sites\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes1865\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres1865.azurewebsites.net\"],\"webSpace\":\"xTestResource9696-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-049.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource9696-SouthCentralUSwebspace/sites/xTestGrpRes1865\",\"repositorySiteName\":\"xTestGrpRes1865\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres1865.azurewebsites.net\",\"xtestgrpres1865.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres1865.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres1865.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-30T23:34:24.3866667\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes1865\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.84.227.199,40.84.230.165,40.84.224.230,40.84.228.178\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-049\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource9696\",\"defaultHostName\":\"xtestgrpres1865.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2339',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c4b8dcf5-98c9-431e-bb04-f90ae4af2176',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'c4aa2ee6-5413-491e-ae37-4b79b4076ecb',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233427Z:c4aa2ee6-5413-491e-ae37-4b79b4076ecb',
  date: 'Tue, 30 Aug 2016 23:34:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696/providers/Microsoft.Web/sites/xTestGrpRes1865?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource9696/providers/Microsoft.Web/sites/xTestGrpRes1865\",\"name\":\"xTestGrpRes1865\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes1865\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres1865.azurewebsites.net\"],\"webSpace\":\"xTestResource9696-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-049.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource9696-SouthCentralUSwebspace/sites/xTestGrpRes1865\",\"repositorySiteName\":\"xTestGrpRes1865\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres1865.azurewebsites.net\",\"xtestgrpres1865.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres1865.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres1865.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-30T23:34:24.47\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes1865\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.84.227.199,40.84.230.165,40.84.224.230,40.84.228.178\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-049\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource9696\",\"defaultHostName\":\"xtestgrpres1865.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2336',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D203170AA23760"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'aaad62df-67b5-4517-af34-db2f5cef5978',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': '252f775c-d483-4649-9e74-8516682bef52',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233428Z:252f775c-d483-4649-9e74-8516682bef52',
  date: 'Tue, 30 Aug 2016 23:34:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696/providers/Microsoft.Web/sites/xTestGrpRes1865?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource9696/providers/Microsoft.Web/sites/xTestGrpRes1865\",\"name\":\"xTestGrpRes1865\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes1865\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres1865.azurewebsites.net\"],\"webSpace\":\"xTestResource9696-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-049.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource9696-SouthCentralUSwebspace/sites/xTestGrpRes1865\",\"repositorySiteName\":\"xTestGrpRes1865\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres1865.azurewebsites.net\",\"xtestgrpres1865.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres1865.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres1865.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-30T23:34:24.47\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes1865\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.84.227.199,40.84.230.165,40.84.224.230,40.84.228.178\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-049\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource9696\",\"defaultHostName\":\"xtestgrpres1865.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2336',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D203170AA23760"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'aaad62df-67b5-4517-af34-db2f5cef5978',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': '252f775c-d483-4649-9e74-8516682bef52',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233428Z:252f775c-d483-4649-9e74-8516682bef52',
  date: 'Tue, 30 Aug 2016 23:34:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696/providers/Microsoft.Web//sites/xTestGrpRes1865/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '85e50133-25e8-4be2-a21f-3779d600ce9a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'a1b747b7-f146-4f52-8ab7-5fec8e3a1964',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233428Z:a1b747b7-f146-4f52-8ab7-5fec8e3a1964',
  date: 'Tue, 30 Aug 2016 23:34:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696/providers/Microsoft.Web//sites/xTestGrpRes1865/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '85e50133-25e8-4be2-a21f-3779d600ce9a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'a1b747b7-f146-4f52-8ab7-5fec8e3a1964',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233428Z:a1b747b7-f146-4f52-8ab7-5fec8e3a1964',
  date: 'Tue, 30 Aug 2016 23:34:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '9c95ebbf-684a-4b98-9fb1-aa51b8bc896b',
  'x-ms-correlation-request-id': '9c95ebbf-684a-4b98-9fb1-aa51b8bc896b',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233429Z:9c95ebbf-684a-4b98-9fb1-aa51b8bc896b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:34:29 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource9696?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '9c95ebbf-684a-4b98-9fb1-aa51b8bc896b',
  'x-ms-correlation-request-id': '9c95ebbf-684a-4b98-9fb1-aa51b8bc896b',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233429Z:9c95ebbf-684a-4b98-9fb1-aa51b8bc896b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:34:29 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': 'fc6551c2-08ef-43d0-b530-ddf1535cb495',
  'x-ms-correlation-request-id': 'fc6551c2-08ef-43d0-b530-ddf1535cb495',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233500Z:fc6551c2-08ef-43d0-b530-ddf1535cb495',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:35:00 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': 'fc6551c2-08ef-43d0-b530-ddf1535cb495',
  'x-ms-correlation-request-id': 'fc6551c2-08ef-43d0-b530-ddf1535cb495',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233500Z:fc6551c2-08ef-43d0-b530-ddf1535cb495',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:35:00 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-request-id': '1973e509-d7a4-4265-98ac-48eba2949f68',
  'x-ms-correlation-request-id': '1973e509-d7a4-4265-98ac-48eba2949f68',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233531Z:1973e509-d7a4-4265-98ac-48eba2949f68',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:35:30 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-request-id': '1973e509-d7a4-4265-98ac-48eba2949f68',
  'x-ms-correlation-request-id': '1973e509-d7a4-4265-98ac-48eba2949f68',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233531Z:1973e509-d7a4-4265-98ac-48eba2949f68',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:35:30 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': 'e02d42f5-07ad-48ea-a796-c0dec415d4a8',
  'x-ms-correlation-request-id': 'e02d42f5-07ad-48ea-a796-c0dec415d4a8',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233601Z:e02d42f5-07ad-48ea-a796-c0dec415d4a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:36:00 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': 'e02d42f5-07ad-48ea-a796-c0dec415d4a8',
  'x-ms-correlation-request-id': 'e02d42f5-07ad-48ea-a796-c0dec415d4a8',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233601Z:e02d42f5-07ad-48ea-a796-c0dec415d4a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:36:00 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': '2d6d326e-6f42-4dc4-bd55-edbfda90b241',
  'x-ms-correlation-request-id': '2d6d326e-6f42-4dc4-bd55-edbfda90b241',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233631Z:2d6d326e-6f42-4dc4-bd55-edbfda90b241',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:36:30 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTY5Ni1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': '2d6d326e-6f42-4dc4-bd55-edbfda90b241',
  'x-ms-correlation-request-id': '2d6d326e-6f42-4dc4-bd55-edbfda90b241',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233631Z:2d6d326e-6f42-4dc4-bd55-edbfda90b241',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:36:30 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource9696','xTestGrpRes1865'];};