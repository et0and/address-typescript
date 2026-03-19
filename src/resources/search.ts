// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Full-text address search and reverse geocoding powered by FTS5 with abbreviation expansion.
 */
export class Search extends APIResource {
  /**
   * Search addresses using full-text search with intelligent query processing.
   *
   * **Search features:**
   *
   * - FTS5 full-text search with ranking by relevance
   * - Automatic abbreviation expansion (e.g., "st" → "street", "rd" → "road")
   * - Fuzzy matching fallback for typos and variations
   * - Address component matching (street, suburb, city, postcode)
   *
   * **Query parameters:**
   *
   * - `q`: Search query string (required)
   * - `limit`: Maximum results (default: 100, max: 1000)
   * - `format`: Response format - "full" or "simple"
   *
   * **Examples:**
   *
   * - `/v1/search?q=lambton+quay` - Search for addresses on Lambton Quay
   * - `/v1/search?q=123+quay+st+auckland` - Search for specific address
   * - `/v1/search?q=wlg&limit=20` - Abbreviation expansion
   */
  query(query: SearchQueryParams, options?: RequestOptions): APIPromise<SearchQueryResponse> {
    return this._client.get('/v1/search', { query, ...options });
  }
}

export type SearchQueryResponse = Array<SearchQueryResponse.SearchQueryResponseItem>;

export namespace SearchQueryResponse {
  export interface SearchQueryResponseItem {
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

export interface SearchQueryParams {
  q: string;

  bbox?: string;

  format?: string;

  limit?: string;

  polygon?: string;
}

export declare namespace Search {
  export { type SearchQueryResponse as SearchQueryResponse, type SearchQueryParams as SearchQueryParams };
}
