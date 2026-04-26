// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Dataset version, ingestion status, and service metadata.
 */
export class Meta extends APIResource {
  /**
   * Returns metadata about the LINZ NZ Addresses dataset including:
   *
   * - Dataset version identifier
   * - Last ingestion timestamp
   * - Total record count
   * - Data source information
   *
   * This endpoint is useful for client applications that need to verify data
   * currency or display dataset attribution.
   */
  retrieve(options?: RequestOptions): APIPromise<MetaRetrieveResponse> {
    return this._client.get('/v1/meta', options);
  }
}

export interface MetaRetrieveResponse {
  lastUpdated: string;

  totalAddresses: number;

  version: string;
}

export declare namespace Meta {
  export {
    type MetaRetrieveResponse as MetaRetrieveResponse
  };
}
