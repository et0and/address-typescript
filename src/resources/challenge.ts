// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Health, API information, and API key onboarding endpoints that do not require authentication.
 */
export class Challenge extends APIResource {
  /**
   * Returns a cryptographic challenge for proof-of-work based API key registration.
   * The challenge must be solved by finding a nonce that, when combined with the
   * challenge data, produces a hash below the difficulty threshold. Use this
   * challenge with the POST /request-key endpoint to obtain an API key.
   */
  retrieve(options?: RequestOptions): APIPromise<ChallengeRetrieveResponse> {
    return this._client.get('/challenge', { ...options, __security: {} });
  }
}

export interface ChallengeRetrieveResponse {
  token: string;

  challenge: string;

  difficulty: number;

  expiresAt: number;
}

export declare namespace Challenge {
  export { type ChallengeRetrieveResponse as ChallengeRetrieveResponse };
}
