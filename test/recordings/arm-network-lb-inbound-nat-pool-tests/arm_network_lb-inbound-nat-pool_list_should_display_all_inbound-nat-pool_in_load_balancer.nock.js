// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"656447e4-2432-4e4a-9bfb-626210813f84\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6f3e0f96-40a9-43f4-a36f-9efa9d16fb63\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"656447e4-2432-4e4a-9bfb-626210813f84\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatPools/test-inbound-pool\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"test-inbound-pool\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatPools/test-inbound-pool\",\r\n        \"etag\": \"W/\\\"656447e4-2432-4e4a-9bfb-626210813f84\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 50001,\r\n          \"frontendPortRangeEnd\": 55001,\r\n          \"backendPort\": 81,\r\n          \"protocol\": \"Udp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2402',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"656447e4-2432-4e4a-9bfb-626210813f84"',
  'x-ms-request-id': 'd3adc386-7a35-4b53-bc7a-84b601baa9f6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-correlation-request-id': '6c1680bd-21eb-4066-93a9-e6d17e49bbf2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T162817Z:6c1680bd-21eb-4066-93a9-e6d17e49bbf2',
  date: 'Mon, 15 Aug 2016 16:28:16 GMT' });
 return result; }]];
