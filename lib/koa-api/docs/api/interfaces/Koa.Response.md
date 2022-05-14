[nextjs-koa-api](../README.md) / [Koa](../modules/Koa.md) / Response

# Interface: Response

[Koa](../modules/Koa.md).Response

## Hierarchy

- [`BaseResponse`](Koa.BaseResponse.md)

  ↳ **`Response`**

## Table of contents

### Properties

- [app](Koa.Response.md#app)
- [body](Koa.Response.md#body)
- [ctx](Koa.Response.md#ctx)
- [etag](Koa.Response.md#etag)
- [header](Koa.Response.md#header)
- [headerSent](Koa.Response.md#headersent)
- [headers](Koa.Response.md#headers)
- [lastModified](Koa.Response.md#lastmodified)
- [length](Koa.Response.md#length)
- [message](Koa.Response.md#message)
- [req](Koa.Response.md#req)
- [request](Koa.Response.md#request)
- [res](Koa.Response.md#res)
- [socket](Koa.Response.md#socket)
- [status](Koa.Response.md#status)
- [type](Koa.Response.md#type)
- [writable](Koa.Response.md#writable)

### Methods

- [append](Koa.Response.md#append)
- [attachment](Koa.Response.md#attachment)
- [flushHeaders](Koa.Response.md#flushheaders)
- [get](Koa.Response.md#get)
- [inspect](Koa.Response.md#inspect)
- [is](Koa.Response.md#is)
- [redirect](Koa.Response.md#redirect)
- [remove](Koa.Response.md#remove)
- [set](Koa.Response.md#set)
- [toJSON](Koa.Response.md#tojson)
- [vary](Koa.Response.md#vary)

## Properties

### app

• **app**: [`Koa`](../classes/Koa.md)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:714

---

### body

• **body**: `unknown`

Get/Set response body.

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[body](Koa.BaseResponse.md#body)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:321

---

### ctx

• **ctx**: [`Context`](Koa.Context.md)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:717

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

[BaseResponse](Koa.BaseResponse.md).[etag](Koa.BaseResponse.md#etag)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:398

---

### header

• **header**: `OutgoingHttpHeaders`

Return response header.

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[header](Koa.BaseResponse.md#header)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:602

---

### headerSent

• **headerSent**: `boolean`

Check if a header has been written to the socket.

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[headerSent](Koa.BaseResponse.md#headersent)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:332

---

### headers

• **headers**: `OutgoingHttpHeaders`

Return response header, alias as response.header

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[headers](Koa.BaseResponse.md#headers)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:607

---

### lastModified

• **lastModified**: `Date`

Get the Last-Modified date in Date form, if it exists.
Set the Last-Modified date using a string or a Date.

    this.response.lastModified = new Date();
    this.response.lastModified = '2013-09-13';

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[lastModified](Koa.BaseResponse.md#lastmodified)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:385

---

### length

• **length**: `number`

Return parsed response Content-Length when present.
Set Content-Length field to `n`.

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[length](Koa.BaseResponse.md#length)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:327

---

### message

• **message**: `string`

Get response status message

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[message](Koa.BaseResponse.md#message)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:316

---

### req

• **req**: `NextApiRequest`

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:715

---

### request

• **request**: [`Request`](Koa.Request.md)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:718

---

### res

• **res**: [`ServerResponse`](../modules/Koa.md#serverresponse)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:716

---

### socket

• **socket**: `Socket`

Return the request socket.

**`returns`**

**`api`** public

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[socket](Koa.BaseResponse.md#socket)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:597

---

### status

• **status**: `number`

Get/Set response status code.

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[status](Koa.BaseResponse.md#status)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:311

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

[BaseResponse](Koa.BaseResponse.md).[type](Koa.BaseResponse.md#type)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:376

---

### writable

• **writable**: `boolean`

Checks if the request is writable.
Tests for the existence of the socket
as node sometimes does not set it.

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[writable](Koa.BaseResponse.md#writable)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:436

## Methods

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

[BaseResponse](Koa.BaseResponse.md).[append](Koa.BaseResponse.md#append)

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

[BaseResponse](Koa.BaseResponse.md).[attachment](Koa.BaseResponse.md#attachment)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:359

---

### flushHeaders

▸ **flushHeaders**(): `void`

Flush any set headers, and begin the body

#### Returns

`void`

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[flushHeaders](Koa.BaseResponse.md#flushheaders)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:441

---

### get

▸ **get**(`field`): `string`

Return response header. If the header is not set, will return an empty
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

[BaseResponse](Koa.BaseResponse.md).[get](Koa.BaseResponse.md#get)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:639

---

### inspect

▸ **inspect**(): `any`

Inspect implementation.

#### Returns

`any`

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[inspect](Koa.BaseResponse.md#inspect)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:644

---

### is

▸ **is**(...`types`): `null` \| `string` \| `false`

Check whether the response is one of the listed types.
Pretty much the same as `this.request.is()`.

**`api`** public

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `...types` | `string`[] |

#### Returns

`null` \| `string` \| `false`

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[is](Koa.BaseResponse.md#is)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:618

▸ **is**(`types`): `null` \| `string` \| `false`

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `types` | `string`[] |

#### Returns

`null` \| `string` \| `false`

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[is](Koa.BaseResponse.md#is)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:619

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

[BaseResponse](Koa.BaseResponse.md).[redirect](Koa.BaseResponse.md#redirect)

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

[BaseResponse](Koa.BaseResponse.md).[remove](Koa.BaseResponse.md#remove)

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

[BaseResponse](Koa.BaseResponse.md).[set](Koa.BaseResponse.md#set)

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

[BaseResponse](Koa.BaseResponse.md).[set](Koa.BaseResponse.md#set)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:411

---

### toJSON

▸ **toJSON**(): `any`

Return JSON representation.

#### Returns

`any`

#### Inherited from

[BaseResponse](Koa.BaseResponse.md).[toJSON](Koa.BaseResponse.md#tojson)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:649

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

[BaseResponse](Koa.BaseResponse.md).[vary](Koa.BaseResponse.md#vary)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:337
