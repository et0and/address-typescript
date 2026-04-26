// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Health and API key onboarding endpoints that do not require authentication.
 */
export class Health extends APIResource {
  /**
   * Returns a simple OK response to verify the API is operational. This endpoint
   * does not require authentication and is useful for monitoring and load balancer
   * health checks.
   */
  check(options?: RequestOptions): APIPromise<HealthCheckResponse> {
    return this._client.get('/health', { ...options, __security: {  } });
  }
}

export interface HealthCheckResponse {
  status: string;

  timestamp: string;
}

export declare namespace Health {
  export {
    type HealthCheckResponse as HealthCheckResponse
  };
}
