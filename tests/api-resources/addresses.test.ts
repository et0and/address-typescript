// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Address from 'address';

const client = new Address({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addresses', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.addresses.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.addresses.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.addresses.list(
        {
          bbox: 'bbox',
          format: 'format',
          limit: 'limit',
          offset: 'offset',
          road_name: 'road_name',
          suburb_locality: 'suburb_locality',
          town_city: 'town_city',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Address.NotFoundError);
  });
});
