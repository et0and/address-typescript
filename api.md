# Address

Types:

- <code><a href="./src/resources/top-level.ts">GetAPIInfoResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">getAPIInfo</a>() -> GetAPIInfoResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Challenge

Types:

- <code><a href="./src/resources/challenge.ts">ChallengeRetrieveResponse</a></code>

Methods:

- <code title="get /challenge">client.challenge.<a href="./src/resources/challenge.ts">retrieve</a>() -> ChallengeRetrieveResponse</code>

# RequestKey

Types:

- <code><a href="./src/resources/request-key.ts">RequestKeyCreateResponse</a></code>

Methods:

- <code title="post /request-key">client.requestKey.<a href="./src/resources/request-key.ts">create</a>({ ...params }) -> RequestKeyCreateResponse</code>

# Addresses

Types:

- <code><a href="./src/resources/addresses.ts">AddressRetrieveResponse</a></code>
- <code><a href="./src/resources/addresses.ts">AddressListResponse</a></code>

Methods:

- <code title="get /v1/addresses/{id}">client.addresses.<a href="./src/resources/addresses.ts">retrieve</a>(id) -> AddressRetrieveResponse</code>
- <code title="get /v1/addresses">client.addresses.<a href="./src/resources/addresses.ts">list</a>({ ...params }) -> AddressListResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchQueryResponse</a></code>

Methods:

- <code title="get /v1/search">client.search.<a href="./src/resources/search.ts">query</a>({ ...params }) -> SearchQueryResponse</code>

# Reverse

Types:

- <code><a href="./src/resources/reverse.ts">ReverseGeocodeResponse</a></code>

Methods:

- <code title="get /v1/reverse">client.reverse.<a href="./src/resources/reverse.ts">geocode</a>({ ...params }) -> ReverseGeocodeResponse</code>

# Meta

Types:

- <code><a href="./src/resources/meta.ts">MetaRetrieveResponse</a></code>

Methods:

- <code title="get /v1/meta">client.meta.<a href="./src/resources/meta.ts">retrieve</a>() -> MetaRetrieveResponse</code>
