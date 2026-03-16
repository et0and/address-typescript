// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Look up and list NZ addresses with filtering, pagination, and address ID lookup.
 */
export class Addresses extends APIResource {
  /**
   * Retrieve a single address record by its LINZ address_id.
   *
   * The address_id is a unique identifier assigned by Land Information New Zealand
   * (LINZ). This is the canonical way to retrieve a specific address when you know
   * its ID.
   *
   * **Response formats:**
   *
   * - Default: Full address object with all LINZ attributes
   * - Simple (format=simple): Compact representation with essential fields only
   *
   * **Example:** `/v1/addresses/123456?format=simple`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AddressRetrieveResponse> {
    return this._client.get(path`/v1/addresses/${id}`, options);
  }

  /**
   * Retrieve a paginated list of addresses with optional filtering by location.
   *
   * **Filtering:**
   *
   * - `town_city`: Filter by town/city name (e.g., "Wellington")
   * - `suburb_locality`: Filter by suburb/locality (e.g., "Te Aro")
   * - `road_name`: Filter by road/street name (e.g., "Lambton Quay")
   * - `bbox`: Bounding box filter as comma-separated coordinates
   *   (min_lon,min_lat,max_lon,max_lat)
   *
   * **Pagination:**
   *
   * - `limit`: Maximum number of results (default: 100, max: 1000)
   * - `offset`: Number of results to skip
   *
   * **Example:** `/v1/addresses?town_city=Wellington&limit=50`
   */
  list(
    query: AddressListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AddressListResponse> {
    return this._client.get('/v1/addresses', { query, ...options });
  }
}

export interface AddressRetrieveResponse {
  addressId: number;

  fullAddress: string;

  fullAddressNumber: string;

  fullAddressRoad: string;

  latitude: number;

  longitude: number;

  postcode: string;

  region: string;

  suburb: string;

  territorialAuthority: string;

  townCity: string;
}

export type AddressListResponse = Array<AddressListResponse.AddressListResponseItem>;

export namespace AddressListResponse {
  export interface AddressListResponseItem {
    addressId: number;

    fullAddress: string;

    fullAddressNumber: string;

    fullAddressRoad: string;

    latitude: number;

    longitude: number;

    postcode: string;

    region: string;

    suburb: string;

    territorialAuthority: string;

    townCity: string;
  }
}

export interface AddressListParams {
  bbox?: string;

  format?: string;

  limit?: string;

  offset?: string;

  road_name?: string;

  suburb_locality?: string;

  town_city?: string;
}

export declare namespace Addresses {
  export {
    type AddressRetrieveResponse as AddressRetrieveResponse,
    type AddressListResponse as AddressListResponse,
    type AddressListParams as AddressListParams,
  };
}
