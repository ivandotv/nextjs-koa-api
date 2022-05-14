[nextjs-koa-api](../README.md) / [Koa](../modules/Koa.md) / Request

# Interface: Request

[Koa](../modules/Koa.md).Request

## Hierarchy

- [`BaseRequest`](Koa.BaseRequest.md)

- [`BaseRequest`](Koa.BaseRequest.md)

  ↳ **`Request`**

## Table of contents

### Properties

- [URL](Koa.Request.md#url)
- [accept](Koa.Request.md#accept)
- [app](Koa.Request.md#app)
- [body](Koa.Request.md#body)
- [charset](Koa.Request.md#charset)
- [ctx](Koa.Request.md#ctx)
- [fresh](Koa.Request.md#fresh)
- [header](Koa.Request.md#header)
- [headers](Koa.Request.md#headers)
- [host](Koa.Request.md#host)
- [hostname](Koa.Request.md#hostname)
- [href](Koa.Request.md#href)
- [idempotent](Koa.Request.md#idempotent)
- [ip](Koa.Request.md#ip)
- [ips](Koa.Request.md#ips)
- [length](Koa.Request.md#length)
- [method](Koa.Request.md#method)
- [origin](Koa.Request.md#origin)
- [originalUrl](Koa.Request.md#originalurl)
- [path](Koa.Request.md#path)
- [protocol](Koa.Request.md#protocol)
- [query](Koa.Request.md#query)
- [querystring](Koa.Request.md#querystring)
- [req](Koa.Request.md#req)
- [res](Koa.Request.md#res)
- [response](Koa.Request.md#response)
- [search](Koa.Request.md#search)
- [secure](Koa.Request.md#secure)
- [socket](Koa.Request.md#socket)
- [stale](Koa.Request.md#stale)
- [subdomains](Koa.Request.md#subdomains)
- [type](Koa.Request.md#type)
- [url](Koa.Request.md#url-1)

### Methods

- [accepts](Koa.Request.md#accepts)
- [acceptsCharsets](Koa.Request.md#acceptscharsets)
- [acceptsEncodings](Koa.Request.md#acceptsencodings)
- [acceptsLanguages](Koa.Request.md#acceptslanguages)
- [get](Koa.Request.md#get)
- [inspect](Koa.Request.md#inspect)
- [is](Koa.Request.md#is)
- [toJSON](Koa.Request.md#tojson)

## Properties

### URL

• **URL**: `URL`

Get WHATWG parsed URL object.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[URL](Koa.BaseRequest.md#url)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:113

---

### accept

• **accept**: `Accepts`

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:710

---

### app

• **app**: [`Koa`](../classes/Koa.md)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:703

---

### body

• `Optional` **body**: `any`

#### Defined in

[lib/koa-api/src/koa-api.ts:10](https://github.com/ivandotv/nextjs-koa-api/blob/9deb975/lib/koa-api/src/koa-api.ts#L10)

---

### charset

• **charset**: `string`

Get the charset when present or undefined.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[charset](Koa.BaseRequest.md#charset)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:566

---

### ctx

• **ctx**: [`Context`](Koa.Context.md)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:706

---

### fresh

• **fresh**: `boolean`

Check if the request is fresh, aka
Last-Modified and/or the ETag
still match.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[fresh](Koa.BaseRequest.md#fresh)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:120

---

### header

• **header**: `IncomingHttpHeaders`

Return request header.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[header](Koa.BaseRequest.md#header)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:43

---

### headers

• **headers**: `IncomingHttpHeaders`

Return request header, alias as request.header

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[headers](Koa.BaseRequest.md#headers)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:48

---

### host

• **host**: `string`

Parse the "Host" header field host
and support X-Forwarded-Host when a
proxy is enabled.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[host](Koa.BaseRequest.md#host)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:101

---

### hostname

• **hostname**: `string`

Parse the "Host" header field hostname
and support X-Forwarded-Host when a
proxy is enabled.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[hostname](Koa.BaseRequest.md#hostname)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:108

---

### href

• **href**: `string`

Get full request URL.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[href](Koa.BaseRequest.md#href)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:63

---

### idempotent

• **idempotent**: `boolean`

Check if the request is idempotent.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[idempotent](Koa.BaseRequest.md#idempotent)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:132

---

### ip

• **ip**: `string`

Request remote address. Supports X-Forwarded-For when app.proxy is true.

#### Overrides

[BaseRequest](Koa.BaseRequest.md).[ip](Koa.BaseRequest.md#ip)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:709

---

### ips

• **ips**: `string`[]

When `app.proxy` is `true`, parse
the "X-Forwarded-For" ip address list.

For example if the value were "client, proxy1, proxy2"
you would receive the array `["client", "proxy1", "proxy2"]`
where "proxy2" is the furthest down-stream.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[ips](Koa.BaseRequest.md#ips)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:169

---

### length

• **length**: `number`

Return parsed Content-Length when present.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[length](Koa.BaseRequest.md#length)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:571

---

### method

• **method**: `string`

Get/Set request method.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[method](Koa.BaseRequest.md#method)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:68

---

### origin

• **origin**: `string`

Get origin of URL.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[origin](Koa.BaseRequest.md#origin)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:58

---

### originalUrl

• **originalUrl**: `string`

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:708

---

### path

• **path**: `string`

Get request pathname.
Set pathname, retaining the query-string when present.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[path](Koa.BaseRequest.md#path)

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

[BaseRequest](Koa.BaseRequest.md).[protocol](Koa.BaseRequest.md#protocol)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:147

---

### query

• **query**: `ParsedUrlQuery`

Get parsed query-string.
Set query-string as an object.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[query](Koa.BaseRequest.md#query)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:80

---

### querystring

• **querystring**: `string`

Get/Set query string.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[querystring](Koa.BaseRequest.md#querystring)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:85

---

### req

• **req**: `NextApiRequest`

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:704

---

### res

• **res**: [`ServerResponse`](../modules/Koa.md#serverresponse)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:705

---

### response

• **response**: [`Response`](Koa.Response.md)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:707

---

### search

• **search**: `string`

Get the search string. Same as the querystring
except it includes the leading ?.

Set the search string. Same as
response.querystring= but included for ubiquity.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[search](Koa.BaseRequest.md#search)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:94

---

### secure

• **secure**: `boolean`

Short-hand for:

this.protocol == 'https'

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[secure](Koa.BaseRequest.md#secure)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:154

---

### socket

• **socket**: `Socket`

Return the request socket.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[socket](Koa.BaseRequest.md#socket)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:137

---

### stale

• **stale**: `boolean`

Check if the request is stale, aka
"Last-Modified" and / or the "ETag" for the
resource has changed.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[stale](Koa.BaseRequest.md#stale)

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

[BaseRequest](Koa.BaseRequest.md).[subdomains](Koa.BaseRequest.md#subdomains)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:183

---

### type

• **type**: `string`

Return the request mime type void of
parameters such as "charset".

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[type](Koa.BaseRequest.md#type)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:577

---

### url

• **url**: `string`

Get/Set request URL.

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[url](Koa.BaseRequest.md#url-1)

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

[BaseRequest](Koa.BaseRequest.md).[accepts](Koa.BaseRequest.md#accepts)

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

[BaseRequest](Koa.BaseRequest.md).[accepts](Koa.BaseRequest.md#accepts)

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

[BaseRequest](Koa.BaseRequest.md).[accepts](Koa.BaseRequest.md#accepts)

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

[BaseRequest](Koa.BaseRequest.md).[acceptsCharsets](Koa.BaseRequest.md#acceptscharsets)

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

[BaseRequest](Koa.BaseRequest.md).[acceptsCharsets](Koa.BaseRequest.md#acceptscharsets)

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

[BaseRequest](Koa.BaseRequest.md).[acceptsCharsets](Koa.BaseRequest.md#acceptscharsets)

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

[BaseRequest](Koa.BaseRequest.md).[acceptsEncodings](Koa.BaseRequest.md#acceptsencodings)

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

[BaseRequest](Koa.BaseRequest.md).[acceptsEncodings](Koa.BaseRequest.md#acceptsencodings)

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

[BaseRequest](Koa.BaseRequest.md).[acceptsEncodings](Koa.BaseRequest.md#acceptsencodings)

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

[BaseRequest](Koa.BaseRequest.md).[acceptsLanguages](Koa.BaseRequest.md#acceptslanguages)

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

[BaseRequest](Koa.BaseRequest.md).[acceptsLanguages](Koa.BaseRequest.md#acceptslanguages)

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

[BaseRequest](Koa.BaseRequest.md).[acceptsLanguages](Koa.BaseRequest.md#acceptslanguages)

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

[BaseRequest](Koa.BaseRequest.md).[get](Koa.BaseRequest.md#get)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:304

---

### inspect

▸ **inspect**(): `any`

Inspect implementation.

#### Returns

`any`

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[inspect](Koa.BaseRequest.md#inspect)

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

[BaseRequest](Koa.BaseRequest.md).[is](Koa.BaseRequest.md#is)

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

[BaseRequest](Koa.BaseRequest.md).[is](Koa.BaseRequest.md#is)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:284

---

### toJSON

▸ **toJSON**(): `any`

Return JSON representation.

#### Returns

`any`

#### Inherited from

[BaseRequest](Koa.BaseRequest.md).[toJSON](Koa.BaseRequest.md#tojson)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:587
