[nextjs-koa-api](../README.md) / [Koa](../modules/Koa.md) / Context

# Interface: Context

[Koa](../modules/Koa.md).Context

## Hierarchy

- [`ParameterizedContext`](../modules/Koa.md#parameterizedcontext)

  ↳ **`Context`**

## Table of contents

### Properties

- [URL](Koa.Context.md#url)
- [accept](Koa.Context.md#accept)
- [app](Koa.Context.md#app)
- [assert](Koa.Context.md#assert)
- [body](Koa.Context.md#body)
- [cookies](Koa.Context.md#cookies)
- [etag](Koa.Context.md#etag)
- [fresh](Koa.Context.md#fresh)
- [header](Koa.Context.md#header)
- [headerSent](Koa.Context.md#headersent)
- [headers](Koa.Context.md#headers)
- [host](Koa.Context.md#host)
- [hostname](Koa.Context.md#hostname)
- [href](Koa.Context.md#href)
- [idempotent](Koa.Context.md#idempotent)
- [ip](Koa.Context.md#ip)
- [ips](Koa.Context.md#ips)
- [lastModified](Koa.Context.md#lastmodified)
- [length](Koa.Context.md#length)
- [message](Koa.Context.md#message)
- [method](Koa.Context.md#method)
- [origin](Koa.Context.md#origin)
- [originalUrl](Koa.Context.md#originalurl)
- [path](Koa.Context.md#path)
- [protocol](Koa.Context.md#protocol)
- [query](Koa.Context.md#query)
- [querystring](Koa.Context.md#querystring)
- [req](Koa.Context.md#req)
- [request](Koa.Context.md#request)
- [res](Koa.Context.md#res)
- [respond](Koa.Context.md#respond)
- [response](Koa.Context.md#response)
- [search](Koa.Context.md#search)
- [secure](Koa.Context.md#secure)
- [socket](Koa.Context.md#socket)
- [stale](Koa.Context.md#stale)
- [state](Koa.Context.md#state)
- [status](Koa.Context.md#status)
- [subdomains](Koa.Context.md#subdomains)
- [type](Koa.Context.md#type)
- [url](Koa.Context.md#url-1)
- [writable](Koa.Context.md#writable)

### Methods

- [accepts](Koa.Context.md#accepts)
- [acceptsCharsets](Koa.Context.md#acceptscharsets)
- [acceptsEncodings](Koa.Context.md#acceptsencodings)
- [acceptsLanguages](Koa.Context.md#acceptslanguages)
- [append](Koa.Context.md#append)
- [attachment](Koa.Context.md#attachment)
- [flushHeaders](Koa.Context.md#flushheaders)
- [get](Koa.Context.md#get)
- [inspect](Koa.Context.md#inspect)
- [is](Koa.Context.md#is)
- [onerror](Koa.Context.md#onerror)
- [redirect](Koa.Context.md#redirect)
- [remove](Koa.Context.md#remove)
- [set](Koa.Context.md#set)
- [throw](Koa.Context.md#throw)
- [toJSON](Koa.Context.md#tojson)
- [vary](Koa.Context.md#vary)

## Properties

### URL

• **URL**: `URL`

Get WHATWG parsed URL object.

#### Inherited from

ParameterizedContext.URL

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:113

---

### accept

• **accept**: `Accepts`

#### Inherited from

ParameterizedContext.accept

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:729

---

### app

• **app**: [`Koa`](../classes/Koa.md)

#### Inherited from

ParameterizedContext.app

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:722

---

### assert

• **assert**: typeof `assert`

Similar to .throw(), adds assertion.

this.assert(this.user, 401, 'Please login!');

See: https://github.com/jshttp/http-assert

#### Inherited from

ParameterizedContext.assert

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:676

---

### body

• **body**: `unknown`

Get/Set response body.

#### Inherited from

ParameterizedContext.body

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:321

---

### cookies

• **cookies**: `Cookies`

#### Inherited from

ParameterizedContext.cookies

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:728

---

### etag

• **etag**: `string`

Get/Set the ETag of a response.
This will normalize the quotes if necessary.

    this.response.etag = 'md5hashsum';
    this.response.etag = '"md5hashsum"';
    this.response.etag = 'W/"123456789"';

**`param`**

**`api`** public

#### Inherited from

ParameterizedContext.etag

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:398

---

### fresh

• **fresh**: `boolean`

Check if the request is fresh, aka
Last-Modified and/or the ETag
still match.

#### Inherited from

ParameterizedContext.fresh

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:120

---

### header

• **header**: `IncomingHttpHeaders`

Return request header.

#### Inherited from

ParameterizedContext.header

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:43

---

### headerSent

• **headerSent**: `boolean`

Check if a header has been written to the socket.

#### Inherited from

ParameterizedContext.headerSent

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:332

---

### headers

• **headers**: `IncomingHttpHeaders`

Return request header, alias as request.header

#### Inherited from

ParameterizedContext.headers

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:48

---

### host

• **host**: `string`

Parse the "Host" header field host
and support X-Forwarded-Host when a
proxy is enabled.

#### Inherited from

ParameterizedContext.host

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:101

---

### hostname

• **hostname**: `string`

Parse the "Host" header field hostname
and support X-Forwarded-Host when a
proxy is enabled.

#### Inherited from

ParameterizedContext.hostname

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:108

---

### href

• **href**: `string`

Get full request URL.

#### Inherited from

ParameterizedContext.href

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:63

---

### idempotent

• **idempotent**: `boolean`

Check if the request is idempotent.

#### Inherited from

ParameterizedContext.idempotent

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:132

---

### ip

• **ip**: `string`

Request remote address. Supports X-Forwarded-For when app.proxy is true.

#### Inherited from

ParameterizedContext.ip

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

ParameterizedContext.ips

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:169

---

### lastModified

• **lastModified**: `Date`

Get the Last-Modified date in Date form, if it exists.
Set the Last-Modified date using a string or a Date.

    this.response.lastModified = new Date();
    this.response.lastModified = '2013-09-13';

#### Inherited from

ParameterizedContext.lastModified

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:385

---

### length

• **length**: `number`

Return parsed response Content-Length when present.
Set Content-Length field to `n`.

#### Inherited from

ParameterizedContext.length

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:327

---

### message

• **message**: `string`

Get response status message

#### Inherited from

ParameterizedContext.message

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:316

---

### method

• **method**: `string`

Get/Set request method.

#### Inherited from

ParameterizedContext.method

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:68

---

### origin

• **origin**: `string`

Get origin of URL.

#### Inherited from

ParameterizedContext.origin

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:58

---

### originalUrl

• **originalUrl**: `string`

#### Inherited from

ParameterizedContext.originalUrl

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:727

---

### path

• **path**: `string`

Get request pathname.
Set pathname, retaining the query-string when present.

#### Inherited from

ParameterizedContext.path

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

ParameterizedContext.protocol

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:147

---

### query

• **query**: `ParsedUrlQuery`

Get parsed query-string.
Set query-string as an object.

#### Inherited from

ParameterizedContext.query

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:80

---

### querystring

• **querystring**: `string`

Get/Set query string.

#### Inherited from

ParameterizedContext.querystring

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:85

---

### req

• **req**: `NextApiRequest`

#### Inherited from

ParameterizedContext.req

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:725

---

### request

• **request**: [`Request`](Koa.Request.md)

#### Inherited from

ParameterizedContext.request

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:723

---

### res

• **res**: [`ServerResponse`](../modules/Koa.md#serverresponse)

#### Inherited from

ParameterizedContext.res

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:726

---

### respond

• `Optional` **respond**: `boolean`

To bypass Koa's built-in response handling, you may explicitly set `ctx.respond = false;`

#### Inherited from

ParameterizedContext.respond

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:733

---

### response

• **response**: [`Response`](Koa.Response.md) & { `body`: `unknown` }

#### Inherited from

ParameterizedContext.response

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:724

---

### search

• **search**: `string`

Get the search string. Same as the querystring
except it includes the leading ?.

Set the search string. Same as
response.querystring= but included for ubiquity.

#### Inherited from

ParameterizedContext.search

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:94

---

### secure

• **secure**: `boolean`

Short-hand for:

this.protocol == 'https'

#### Inherited from

ParameterizedContext.secure

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:154

---

### socket

• **socket**: `Socket`

Return the request socket.

#### Inherited from

ParameterizedContext.socket

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:137

---

### stale

• **stale**: `boolean`

Check if the request is stale, aka
"Last-Modified" and / or the "ETag" for the
resource has changed.

#### Inherited from

ParameterizedContext.stale

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:127

---

### state

• **state**: [`DefaultState`](Koa.DefaultState.md)

#### Inherited from

ParameterizedContext.state

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:737

---

### status

• **status**: `number`

Get/Set response status code.

#### Inherited from

ParameterizedContext.status

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:311

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

ParameterizedContext.subdomains

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:183

---

### type

• **type**: `string`

Return the response mime type void of
parameters such as "charset".

Set Content-Type response header with `type` through `mime.lookup()`
when it does not contain a charset.

Examples:

    this.type = '.html';
    this.type = 'html';
    this.type = 'json';
    this.type = 'application/json';
    this.type = 'png';

#### Inherited from

ParameterizedContext.type

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:376

---

### url

• **url**: `string`

Get/Set request URL.

#### Inherited from

ParameterizedContext.url

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:53

---

### writable

• **writable**: `boolean`

Checks if the request is writable.
Tests for the existence of the socket
as node sometimes does not set it.

#### Inherited from

ParameterizedContext.writable

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:436

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

ParameterizedContext.accepts

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

ParameterizedContext.accepts

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

ParameterizedContext.accepts

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

ParameterizedContext.acceptsCharsets

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

ParameterizedContext.acceptsCharsets

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

ParameterizedContext.acceptsCharsets

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

ParameterizedContext.acceptsEncodings

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

ParameterizedContext.acceptsEncodings

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

ParameterizedContext.acceptsEncodings

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

ParameterizedContext.acceptsLanguages

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

ParameterizedContext.acceptsLanguages

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

ParameterizedContext.acceptsLanguages

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:259

---

### append

▸ **append**(`field`, `val`): `void`

Append additional header `field` with value `val`.

Examples:

```
this.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
this.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
this.append('Warning', '199 Miscellaneous warning');
```

#### Parameters

| Name    | Type                   |
| :------ | :--------------------- |
| `field` | `string`               |
| `val`   | `string` \| `string`[] |

#### Returns

`void`

#### Inherited from

ParameterizedContext.append

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:424

---

### attachment

▸ **attachment**(`filename?`, `options?`): `void`

Set Content-Disposition to "attachment" to signal the client to prompt for download.
Optionally specify the filename of the download and some options.

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `filename?` | `string`  |
| `options?`  | `Options` |

#### Returns

`void`

#### Inherited from

ParameterizedContext.attachment

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:359

---

### flushHeaders

▸ **flushHeaders**(): `void`

Flush any set headers, and begin the body

#### Returns

`void`

#### Inherited from

ParameterizedContext.flushHeaders

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:441

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

ParameterizedContext.get

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:304

---

### inspect

▸ **inspect**(): `any`

util.inspect() implementation, which
just returns the JSON output.

#### Returns

`any`

#### Inherited from

ParameterizedContext.inspect

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:657

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

ParameterizedContext.is

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

ParameterizedContext.is

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:284

---

### onerror

▸ **onerror**(`err`): `void`

Default error handling.

#### Parameters

| Name  | Type    |
| :---- | :------ |
| `err` | `Error` |

#### Returns

`void`

#### Inherited from

ParameterizedContext.onerror

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:699

---

### redirect

▸ **redirect**(`url`, `alt?`): `void`

Perform a 302 redirect to `url`.

The string "back" is special-cased
to provide Referrer support, when Referrer
is not present `alt` or "/" is used.

Examples:

this.redirect('back');
this.redirect('back', '/index.html');
this.redirect('/login');
this.redirect('http://google.com');

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `url`  | `string` |
| `alt?` | `string` |

#### Returns

`void`

#### Inherited from

ParameterizedContext.redirect

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:353

---

### remove

▸ **remove**(`field`): `void`

Remove header `field`.

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `field` | `string` |

#### Returns

`void`

#### Inherited from

ParameterizedContext.remove

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:429

---

### set

▸ **set**(`field`): `void`

Set header `field` to `val`, or pass
an object of header fields.

Examples:

this.set('Foo', ['bar', 'baz']);
this.set('Accept', 'application/json');
this.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `field` | `Object` |

#### Returns

`void`

#### Inherited from

ParameterizedContext.set

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:410

▸ **set**(`field`, `val`): `void`

#### Parameters

| Name    | Type                   |
| :------ | :--------------------- |
| `field` | `string`               |
| `val`   | `string` \| `string`[] |

#### Returns

`void`

#### Inherited from

ParameterizedContext.set

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:411

---

### throw

▸ **throw**(`message`, `code?`, `properties?`): `never`

Throw an error with `msg` and optional `status`
defaulting to 500. Note that these are user-level
errors, and the message may be exposed to the client.

this.throw(403)
this.throw('name required', 400)
this.throw(400, 'name required')
this.throw('something exploded')
this.throw(new Error('invalid'), 400);
this.throw(400, new Error('invalid'));

See: https://github.com/jshttp/http-errors

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `message`     | `string` |
| `code?`       | `number` |
| `properties?` | `Object` |

#### Returns

`never`

#### Inherited from

ParameterizedContext.throw

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:692

▸ **throw**(`status`): `never`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `status` | `number` |

#### Returns

`never`

#### Inherited from

ParameterizedContext.throw

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:693

▸ **throw**(...`properties`): `never`

#### Parameters

| Name            | Type                           |
| :-------------- | :----------------------------- |
| `...properties` | (`string` \| `number` \| {})[] |

#### Returns

`never`

#### Inherited from

ParameterizedContext.throw

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:694

---

### toJSON

▸ **toJSON**(): `any`

Return JSON representation.

Here we explicitly invoke .toJSON() on each
object, as iteration will otherwise fail due
to the getters and cause utilities such as
clone() to fail.

#### Returns

`any`

#### Inherited from

ParameterizedContext.toJSON

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:667

---

### vary

▸ **vary**(`field`): `void`

Vary on `field`.

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `field` | `string` |

#### Returns

`void`

#### Inherited from

ParameterizedContext.vary

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:337
