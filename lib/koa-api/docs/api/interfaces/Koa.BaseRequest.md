[nextjs-koa-api](../README.md) / [Koa](../modules/Koa.md) / BaseRequest

# Interface: BaseRequest

[Koa](../modules/Koa.md).BaseRequest

## Hierarchy

- `ContextDelegatedRequest`

  ↳ **`BaseRequest`**

  ↳↳ [`Request`](Koa.Request.md)

  ↳↳ [`Request`](Koa.Request.md)

## Table of contents

### Properties

- [URL](Koa.BaseRequest.md#url)
- [charset](Koa.BaseRequest.md#charset)
- [fresh](Koa.BaseRequest.md#fresh)
- [header](Koa.BaseRequest.md#header)
- [headers](Koa.BaseRequest.md#headers)
- [host](Koa.BaseRequest.md#host)
- [hostname](Koa.BaseRequest.md#hostname)
- [href](Koa.BaseRequest.md#href)
- [idempotent](Koa.BaseRequest.md#idempotent)
- [ip](Koa.BaseRequest.md#ip)
- [ips](Koa.BaseRequest.md#ips)
- [length](Koa.BaseRequest.md#length)
- [method](Koa.BaseRequest.md#method)
- [origin](Koa.BaseRequest.md#origin)
- [path](Koa.BaseRequest.md#path)
- [protocol](Koa.BaseRequest.md#protocol)
- [query](Koa.BaseRequest.md#query)
- [querystring](Koa.BaseRequest.md#querystring)
- [search](Koa.BaseRequest.md#search)
- [secure](Koa.BaseRequest.md#secure)
- [socket](Koa.BaseRequest.md#socket)
- [stale](Koa.BaseRequest.md#stale)
- [subdomains](Koa.BaseRequest.md#subdomains)
- [type](Koa.BaseRequest.md#type)
- [url](Koa.BaseRequest.md#url-1)

### Methods

- [accepts](Koa.BaseRequest.md#accepts)
- [acceptsCharsets](Koa.BaseRequest.md#acceptscharsets)
- [acceptsEncodings](Koa.BaseRequest.md#acceptsencodings)
- [acceptsLanguages](Koa.BaseRequest.md#acceptslanguages)
- [get](Koa.BaseRequest.md#get)
- [inspect](Koa.BaseRequest.md#inspect)
- [is](Koa.BaseRequest.md#is)
- [toJSON](Koa.BaseRequest.md#tojson)

## Properties

### URL

• **URL**: `URL`

Get WHATWG parsed URL object.

#### Inherited from

ContextDelegatedRequest.URL

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:113

---

### charset

• **charset**: `string`

Get the charset when present or undefined.

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:566

---

### fresh

• **fresh**: `boolean`

Check if the request is fresh, aka
Last-Modified and/or the ETag
still match.

#### Inherited from

ContextDelegatedRequest.fresh

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:120

---

### header

• **header**: `IncomingHttpHeaders`

Return request header.

#### Inherited from

ContextDelegatedRequest.header

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:43

---

### headers

• **headers**: `IncomingHttpHeaders`

Return request header, alias as request.header

#### Inherited from

ContextDelegatedRequest.headers

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:48

---

### host

• **host**: `string`

Parse the "Host" header field host
and support X-Forwarded-Host when a
proxy is enabled.

#### Inherited from

ContextDelegatedRequest.host

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:101

---

### hostname

• **hostname**: `string`

Parse the "Host" header field hostname
and support X-Forwarded-Host when a
proxy is enabled.

#### Inherited from

ContextDelegatedRequest.hostname

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:108

---

### href

• **href**: `string`

Get full request URL.

#### Inherited from

ContextDelegatedRequest.href

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:63

---

### idempotent

• **idempotent**: `boolean`

Check if the request is idempotent.

#### Inherited from

ContextDelegatedRequest.idempotent

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:132

---

### ip

• **ip**: `string`

Request remote address. Supports X-Forwarded-For when app.proxy is true.

#### Inherited from

ContextDelegatedRequest.ip

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:159

---

### ips

• **ips**: `string`[]

When `app.proxy` is `true`, parse
the "X-Forwarded-For" ip address list.

For example if the value were "client, proxy1, proxy2"
you would receive the array `["client", "proxy1", "proxy2"]`
where "proxy2" is the furthest down-stream.

#### Inherited from

ContextDelegatedRequest.ips

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:169

---

### length

• **length**: `number`

Return parsed Content-Length when present.

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:571

---

### method

• **method**: `string`

Get/Set request method.

#### Inherited from

ContextDelegatedRequest.method

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:68

---

### origin

• **origin**: `string`

Get origin of URL.

#### Inherited from

ContextDelegatedRequest.origin

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:58

---

### path

• **path**: `string`

Get request pathname.
Set pathname, retaining the query-string when present.

#### Inherited from

ContextDelegatedRequest.path

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:74

---

### protocol

• **protocol**: `string`

Return the protocol string "http" or "https"
when requested with TLS. When the proxy setting
is enabled the "X-Forwarded-Proto" header
field will be trusted. If you're running behind
a reverse proxy that supplies https for you this
may be enabled.

#### Inherited from

ContextDelegatedRequest.protocol

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:147

---

### query

• **query**: `ParsedUrlQuery`

Get parsed query-string.
Set query-string as an object.

#### Inherited from

ContextDelegatedRequest.query

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:80

---

### querystring

• **querystring**: `string`

Get/Set query string.

#### Inherited from

ContextDelegatedRequest.querystring

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:85

---

### search

• **search**: `string`

Get the search string. Same as the querystring
except it includes the leading ?.

Set the search string. Same as
response.querystring= but included for ubiquity.

#### Inherited from

ContextDelegatedRequest.search

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:94

---

### secure

• **secure**: `boolean`

Short-hand for:

this.protocol == 'https'

#### Inherited from

ContextDelegatedRequest.secure

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:154

---

### socket

• **socket**: `Socket`

Return the request socket.

#### Inherited from

ContextDelegatedRequest.socket

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:137

---

### stale

• **stale**: `boolean`

Check if the request is stale, aka
"Last-Modified" and / or the "ETag" for the
resource has changed.

#### Inherited from

ContextDelegatedRequest.stale

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:127

---

### subdomains

• **subdomains**: `string`[]

Return subdomains as an array.

Subdomains are the dot-separated parts of the host before the main domain
of the app. By default, the domain of the app is assumed to be the last two
parts of the host. This can be changed by setting `app.subdomainOffset`.

For example, if the domain is "tobi.ferrets.example.com":
If `app.subdomainOffset` is not set, this.subdomains is
`["ferrets", "tobi"]`.
If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.

#### Inherited from

ContextDelegatedRequest.subdomains

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:183

---

### type

• **type**: `string`

Return the request mime type void of
parameters such as "charset".

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:577

---

### url

• **url**: `string`

Get/Set request URL.

#### Inherited from

ContextDelegatedRequest.url

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:53

## Methods

### accepts

▸ **accepts**(): `string`[]

Check if the given `type(s)` is acceptable, returning
the best match when true, otherwise `false`, in which
case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string
such as "application/json", the extension name
such as "json" or an array `["json", "html", "text/plain"]`. When a list
or array is given the _best_ match, if any is returned.

Examples:

    // Accept: text/html
    this.accepts('html');
    // => "html"

    // Accept: text/*, application/json
    this.accepts('html');
    // => "html"
    this.accepts('text/html');
    // => "text/html"
    this.accepts('json', 'text');
    // => "json"
    this.accepts('application/json');
    // => "application/json"

    // Accept: text/*, application/json
    this.accepts('image/png');
    this.accepts('png');
    // => undefined

    // Accept: text/*;q=.5, application/json
    this.accepts(['html', 'json']);
    this.accepts('html', 'json');
    // => "json"

#### Returns

`string`[]

#### Inherited from

ContextDelegatedRequest.accepts

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:221

▸ **accepts**(...`types`): `string` \| `false`

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `...types` | `string`[] |

#### Returns

`string` \| `false`

#### Inherited from

ContextDelegatedRequest.accepts

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:222

▸ **accepts**(`types`): `string` \| `false`

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `types` | `string`[] |

#### Returns

`string` \| `false`

#### Inherited from

ContextDelegatedRequest.accepts

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:223

---

### acceptsCharsets

▸ **acceptsCharsets**(): `string`[]

Return accepted charsets or best fit based on `charsets`.

Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
an array sorted by quality is returned:

    ['utf-8', 'utf-7', 'iso-8859-1']

#### Returns

`string`[]

#### Inherited from

ContextDelegatedRequest.acceptsCharsets

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:245

▸ **acceptsCharsets**(...`charsets`): `string` \| `false`

#### Parameters

| Name          | Type       |
| :------------ | :--------- |
| `...charsets` | `string`[] |

#### Returns

`string` \| `false`

#### Inherited from

ContextDelegatedRequest.acceptsCharsets

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:246

▸ **acceptsCharsets**(`charsets`): `string` \| `false`

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `charsets` | `string`[] |

#### Returns

`string` \| `false`

#### Inherited from

ContextDelegatedRequest.acceptsCharsets

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:247

---

### acceptsEncodings

▸ **acceptsEncodings**(): `string`[]

Return accepted encodings or best fit based on `encodings`.

Given `Accept-Encoding: gzip, deflate`
an array sorted by quality is returned:

    ['gzip', 'deflate']

#### Returns

`string`[]

#### Inherited from

ContextDelegatedRequest.acceptsEncodings

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:233

▸ **acceptsEncodings**(...`encodings`): `string` \| `false`

#### Parameters

| Name           | Type       |
| :------------- | :--------- |
| `...encodings` | `string`[] |

#### Returns

`string` \| `false`

#### Inherited from

ContextDelegatedRequest.acceptsEncodings

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:234

▸ **acceptsEncodings**(`encodings`): `string` \| `false`

#### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `encodings` | `string`[] |

#### Returns

`string` \| `false`

#### Inherited from

ContextDelegatedRequest.acceptsEncodings

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:235

---

### acceptsLanguages

▸ **acceptsLanguages**(): `string`[]

Return accepted languages or best fit based on `langs`.

Given `Accept-Language: en;q=0.8, es, pt`
an array sorted by quality is returned:

    ['es', 'pt', 'en']

#### Returns

`string`[]

#### Inherited from

ContextDelegatedRequest.acceptsLanguages

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:257

▸ **acceptsLanguages**(...`langs`): `string` \| `false`

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `...langs` | `string`[] |

#### Returns

`string` \| `false`

#### Inherited from

ContextDelegatedRequest.acceptsLanguages

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:258

▸ **acceptsLanguages**(`langs`): `string` \| `false`

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `langs` | `string`[] |

#### Returns

`string` \| `false`

#### Inherited from

ContextDelegatedRequest.acceptsLanguages

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:259

---

### get

▸ **get**(`field`): `string`

Return request header. If the header is not set, will return an empty
string.

The `Referrer` header field is special-cased, both `Referrer` and
`Referer` are interchangeable.

Examples:

    this.get('Content-Type');
    // => "text/plain"

    this.get('content-type');
    // => "text/plain"

    this.get('Something');
    // => ''

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `field` | `string` |

#### Returns

`string`

#### Inherited from

ContextDelegatedRequest.get

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:304

---

### inspect

▸ **inspect**(): `any`

Inspect implementation.

#### Returns

`any`

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:582

---

### is

▸ **is**(...`types`): `null` \| `string` \| `false`

Check if the incoming request contains the "Content-Type"
header field, and it contains any of the give mime `type`s.
If there is no request body, `null` is returned.
If there is no content type, `false` is returned.
Otherwise, it returns the first `type` that matches.

Examples:

    // With Content-Type: text/html; charset=utf-8
    this.is('html'); // => 'html'
    this.is('text/html'); // => 'text/html'
    this.is('text/*', 'application/json'); // => 'text/html'

    // When Content-Type is application/json
    this.is('json', 'urlencoded'); // => 'json'
    this.is('application/json'); // => 'application/json'
    this.is('html', 'application/*'); // => 'application/json'

    this.is('html'); // => false

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `...types` | `string`[] |

#### Returns

`null` \| `string` \| `false`

#### Inherited from

ContextDelegatedRequest.is

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:283

▸ **is**(`types`): `null` \| `string` \| `false`

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `types` | `string`[] |

#### Returns

`null` \| `string` \| `false`

#### Inherited from

ContextDelegatedRequest.is

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:284

---

### toJSON

▸ **toJSON**(): `any`

Return JSON representation.

#### Returns

`any`

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:587
