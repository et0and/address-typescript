// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Address } from '../client';

export abstract class APIResource {
  protected _client: Address;

  constructor(client: Address) {
    this._client = client;
  }
}
