// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Full-text address search and reverse geocoding powered by FTS5 with abbreviation expansion.
 */
export class Reverse extends APIResource {
  /**
   * Find the nearest addresses to given geographic coordinates (reverse geocoding).
   *
   * **Query parameters:**
   *
   * - `lat`: Latitude in decimal degrees (required)
   * - `lng`: Longitude in decimal degrees (required)
   * - `limit`: Maximum number of results (default: 10, max: 100)
   * - `format`: Response format - "full" or "simple"
   *
   * **Distance calculation:** Results are sorted by distance from the provided
   * coordinates, calculated using the Haversine formula for spherical distance on
   * Earth.
   *
   * **Example:** `/v1/reverse?lat=-41.2865&lng=174.7762&limit=5`
   */
  geocode(query: ReverseGeocodeParams, options?: RequestOptions): APIPromise<ReverseGeocodeResponse> {
    return this._client.get('/v1/reverse', { query, ...options });
  }
}

export type ReverseGeocodeResponse = Array<ReverseGeocodeResponse.ReverseGeocodeResponseItem>

export namespace ReverseGeocodeResponse {
  export interface ReverseGeocodeResponseItem {
    addressId: number;

    fullAddress: string;

    fullAddressNumber: string;

    latitude: number;

    longitude: number;

    suburb: string;

    territorialAuthority: string;

    townCity: string;

    fullAddressRoad?: string | null;

    postcode?: string | null;

    region?: string | null;
  }
}

export interface ReverseGeocodeParams {
  point: string;

  format?: string;

  limit?: string;
}

export declare namespace Reverse {
  export {
    type ReverseGeocodeResponse as ReverseGeocodeResponse,
    type ReverseGeocodeParams as ReverseGeocodeParams
  };
}
