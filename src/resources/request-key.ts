// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Health and API key onboarding endpoints that do not require authentication.
 */
export class RequestKey extends APIResource {
  /**
   * Submit a proof-of-work solution to obtain an API key. The request must include a
   * valid nonce that solves the challenge previously obtained from GET /challenge.
   * This prevents automated abuse while allowing legitimate users to access the API.
   */
  create(body: RequestKeyCreateParams, options?: RequestOptions): APIPromise<RequestKeyCreateResponse> {
    return this._client.post('/request-key', { body, ...options, __security: {  } });
  }
}

export interface RequestKeyCreateResponse {
  apiKey: string;

  rateLimit: number;
}

export interface RequestKeyCreateParams {
  token: string;

  challenge: string;

  nonce: number;
}

export declare namespace RequestKey {
  export {
    type RequestKeyCreateResponse as RequestKeyCreateResponse,
    type RequestKeyCreateParams as RequestKeyCreateParams
  };
}
