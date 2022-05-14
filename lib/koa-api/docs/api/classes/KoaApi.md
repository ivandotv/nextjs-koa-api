[nextjs-koa-api](../README.md) / KoaApi

# Class: KoaApi<TState, TContext\>

## Type parameters

| Name       | Type                                                                                                                      |
| :--------- | :------------------------------------------------------------------------------------------------------------------------ |
| `TState`   | extends [`DefaultState`](../interfaces/Koa.DefaultState.md) = [`DefaultState`](../interfaces/Koa.DefaultState.md)         |
| `TContext` | extends [`DefaultContext`](../interfaces/Koa.DefaultContext.md) = [`DefaultContext`](../interfaces/Koa.DefaultContext.md) |

## Hierarchy

- [`Koa`](Koa.md)<`TState`, `TContext`\>

  ↳ **`KoaApi`**

## Table of contents

### Constructors

- [constructor](KoaApi.md#constructor)

### Properties

- [context](KoaApi.md#context)
- [env](KoaApi.md#env)
- [keys](KoaApi.md#keys)
- [maxIpsCount](KoaApi.md#maxipscount)
- [middleware](KoaApi.md#middleware)
- [proxy](KoaApi.md#proxy)
- [proxyIpHeader](KoaApi.md#proxyipheader)
- [request](KoaApi.md#request)
- [response](KoaApi.md#response)
- [router](KoaApi.md#router)
- [silent](KoaApi.md#silent)
- [subdomainOffset](KoaApi.md#subdomainoffset)
- [captureRejectionSymbol](KoaApi.md#capturerejectionsymbol)
- [captureRejections](KoaApi.md#capturerejections)
- [defaultMaxListeners](KoaApi.md#defaultmaxlisteners)
- [errorMonitor](KoaApi.md#errormonitor)

### Methods

- [addListener](KoaApi.md#addlistener)
- [callback](KoaApi.md#callback)
- [createContext](KoaApi.md#createcontext)
- [emit](KoaApi.md#emit)
- [eventNames](KoaApi.md#eventnames)
- [getMaxListeners](KoaApi.md#getmaxlisteners)
- [inspect](KoaApi.md#inspect)
- [listen](KoaApi.md#listen)
- [listenerCount](KoaApi.md#listenercount)
- [listeners](KoaApi.md#listeners)
- [off](KoaApi.md#off)
- [on](KoaApi.md#on)
- [once](KoaApi.md#once)
- [onerror](KoaApi.md#onerror)
- [prependListener](KoaApi.md#prependlistener)
- [prependOnceListener](KoaApi.md#prependoncelistener)
- [rawListeners](KoaApi.md#rawlisteners)
- [removeAllListeners](KoaApi.md#removealllisteners)
- [removeListener](KoaApi.md#removelistener)
- [run](KoaApi.md#run)
- [setMaxListeners](KoaApi.md#setmaxlisteners)
- [toJSON](KoaApi.md#tojson)
- [use](KoaApi.md#use)
- [getEventListeners](KoaApi.md#geteventlisteners)
- [listenerCount](KoaApi.md#listenercount-1)
- [on](KoaApi.md#on-1)
- [once](KoaApi.md#once-1)
- [setMaxListeners](KoaApi.md#setmaxlisteners-1)

## Constructors

### constructor

• **new KoaApi**<`TState`, `TContext`\>(`options?`)

#### Type parameters

| Name       | Type                                                                                                                                   |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `TState`   | extends [`DefaultState`](../interfaces/Koa.DefaultState.md)<`TState`\> = [`DefaultState`](../interfaces/Koa.DefaultState.md)           |
| `TContext` | extends [`DefaultContext`](../interfaces/Koa.DefaultContext.md)<`TContext`\> = [`DefaultContext`](../interfaces/Koa.DefaultContext.md) |

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `options` | [`KoaApiOptions`](../README.md#koaapioptions) |

#### Overrides

[Koa](Koa.md).[constructor](Koa.md#constructor)

#### Defined in

[lib/koa-api/src/koa-api.ts:54](https://github.com/ivandotv/nextjs-koa-api/blob/9deb975/lib/koa-api/src/koa-api.ts#L54)

## Properties

### context

• **context**: [`BaseContext`](../interfaces/Koa.BaseContext.md) & `TContext`

#### Inherited from

[Koa](Koa.md).[context](Koa.md#context)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:454

---

### env

• **env**: `string`

#### Inherited from

[Koa](Koa.md).[env](Koa.md#env)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:453

---

### keys

• **keys**: `string`[] \| `Keygrip`

#### Inherited from

[Koa](Koa.md).[keys](Koa.md#keys)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:458

---

### maxIpsCount

• **maxIpsCount**: `number`

#### Inherited from

[Koa](Koa.md).[maxIpsCount](Koa.md#maxipscount)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:450

---

### middleware

• **middleware**: [`Middleware`](../modules/Koa.md#middleware)<`TState`, `TContext`, `any`\>[]

#### Inherited from

[Koa](Koa.md).[middleware](Koa.md#middleware)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:451

---

### proxy

• **proxy**: `boolean`

#### Inherited from

[Koa](Koa.md).[proxy](Koa.md#proxy)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:448

---

### proxyIpHeader

• **proxyIpHeader**: `string`

#### Inherited from

[Koa](Koa.md).[proxyIpHeader](Koa.md#proxyipheader)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:449

---

### request

• **request**: [`BaseRequest`](../interfaces/Koa.BaseRequest.md)

#### Inherited from

[Koa](Koa.md).[request](Koa.md#request)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:455

---

### response

• **response**: [`BaseResponse`](../interfaces/Koa.BaseResponse.md)

#### Inherited from

[Koa](Koa.md).[response](Koa.md#response)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:456

---

### router

• **router**: [`Router`](Router.md)<`TState`, `TContext`\>

#### Defined in

[lib/koa-api/src/koa-api.ts:48](https://github.com/ivandotv/nextjs-koa-api/blob/9deb975/lib/koa-api/src/koa-api.ts#L48)

---

### silent

• **silent**: `boolean`

#### Inherited from

[Koa](Koa.md).[silent](Koa.md#silent)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:457

---

### subdomainOffset

• **subdomainOffset**: `number`

#### Inherited from

[Koa](Koa.md).[subdomainOffset](Koa.md#subdomainoffset)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:452

---

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](Koa.md#capturerejectionsymbol)

#### Inherited from

[Koa](Koa.md).[captureRejectionSymbol](Koa.md#capturerejectionsymbol)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:301

---

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[Koa](Koa.md).[captureRejections](Koa.md#capturerejections)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:306

---

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[Koa](Koa.md).[defaultMaxListeners](Koa.md#defaultmaxlisteners)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:307

---

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](Koa.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[Koa](Koa.md).[errorMonitor](Koa.md#errormonitor)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:300

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name        | Type                           |
| :---------- | :----------------------------- |
| `eventName` | `string` \| `symbol`           |
| `listener`  | (...`args`: `any`[]) => `void` |

#### Returns

[`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

#### Inherited from

[Koa](Koa.md).[addListener](Koa.md#addlistener)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:327

---

### callback

▸ **callback**(): (`req`: `IncomingMessage` \| `Http2ServerRequest`, `res`: `ServerResponse` \| `Http2ServerResponse`) => `void`

Return a request handler callback
for node's native http/http2 server.

#### Returns

`fn`

▸ (`req`, `res`): `void`

Return a request handler callback
for node's native http/http2 server.

##### Parameters

| Name  | Type                                      |
| :---- | :---------------------------------------- |
| `req` | `IncomingMessage` \| `Http2ServerRequest` |
| `res` | `ServerResponse` \| `Http2ServerResponse` |

##### Returns

`void`

#### Inherited from

[Koa](Koa.md).[callback](Koa.md#callback)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:520

---

### createContext

▸ **createContext**<`StateT`\>(`req`, `res`): [`ParameterizedContext`](../modules/Koa.md#parameterizedcontext)<`StateT`, [`DefaultContext`](../interfaces/Koa.DefaultContext.md), `unknown`\>

Initialize a new context.

**`api`** private

#### Type parameters

| Name     | Type                                                |
| :------- | :-------------------------------------------------- |
| `StateT` | [`DefaultState`](../interfaces/Koa.DefaultState.md) |

#### Parameters

| Name  | Type              |
| :---- | :---------------- |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse`  |

#### Returns

[`ParameterizedContext`](../modules/Koa.md#parameterizedcontext)<`StateT`, [`DefaultContext`](../interfaces/Koa.DefaultContext.md), `unknown`\>

#### Inherited from

[Koa](Koa.md).[createContext](Koa.md#createcontext)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:527

---

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events')
const myEmitter = new EventEmitter()

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener')
})
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`)
})
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ')
  console.log(`event with parameters ${parameters} in third listener`)
})

console.log(myEmitter.listeners('event'))

myEmitter.emit('event', 1, 2, 3, 4, 5)

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`since`** v0.1.26

#### Parameters

| Name        | Type                 |
| :---------- | :------------------- |
| `eventName` | `string` \| `symbol` |
| `...args`   | `any`[]              |

#### Returns

`boolean`

#### Inherited from

[Koa](Koa.md).[emit](Koa.md#emit)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:583

---

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events')
const myEE = new EventEmitter()
myEE.on('foo', () => {})
myEE.on('bar', () => {})

const sym = Symbol('symbol')
myEE.on(sym, () => {})

console.log(myEE.eventNames())
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[Koa](Koa.md).[eventNames](Koa.md#eventnames)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:642

---

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](KoaApi.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

[Koa](Koa.md).[getMaxListeners](Koa.md#getmaxlisteners)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:499

---

### inspect

▸ **inspect**(): `any`

Return JSON representation.
We only bother showing settings.

#### Returns

`any`

#### Inherited from

[Koa](Koa.md).[inspect](Koa.md#inspect)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:499

---

### listen

▸ **listen**(`port?`, `hostname?`, `backlog?`, `listeningListener?`): `Server`

Shorthand for:

http.createServer(app.callback()).listen(...)

#### Parameters

| Name                 | Type         |
| :------------------- | :----------- |
| `port?`              | `number`     |
| `hostname?`          | `string`     |
| `backlog?`           | `number`     |
| `listeningListener?` | () => `void` |

#### Returns

`Server`

#### Inherited from

[Koa](Koa.md).[listen](Koa.md#listen)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:485

▸ **listen**(`port`, `hostname?`, `listeningListener?`): `Server`

#### Parameters

| Name                 | Type         |
| :------------------- | :----------- |
| `port`               | `number`     |
| `hostname?`          | `string`     |
| `listeningListener?` | () => `void` |

#### Returns

`Server`

#### Inherited from

[Koa](Koa.md).[listen](Koa.md#listen)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:486

▸ **listen**(`port`, `backlog?`, `listeningListener?`): `Server`

#### Parameters

| Name                 | Type         |
| :------------------- | :----------- |
| `port`               | `number`     |
| `backlog?`           | `number`     |
| `listeningListener?` | () => `void` |

#### Returns

`Server`

#### Inherited from

[Koa](Koa.md).[listen](Koa.md#listen)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:487

▸ **listen**(`port`, `listeningListener?`): `Server`

#### Parameters

| Name                 | Type         |
| :------------------- | :----------- |
| `port`               | `number`     |
| `listeningListener?` | () => `void` |

#### Returns

`Server`

#### Inherited from

[Koa](Koa.md).[listen](Koa.md#listen)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:488

▸ **listen**(`path`, `backlog?`, `listeningListener?`): `Server`

#### Parameters

| Name                 | Type         |
| :------------------- | :----------- |
| `path`               | `string`     |
| `backlog?`           | `number`     |
| `listeningListener?` | () => `void` |

#### Returns

`Server`

#### Inherited from

[Koa](Koa.md).[listen](Koa.md#listen)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:489

▸ **listen**(`path`, `listeningListener?`): `Server`

#### Parameters

| Name                 | Type         |
| :------------------- | :----------- |
| `path`               | `string`     |
| `listeningListener?` | () => `void` |

#### Returns

`Server`

#### Inherited from

[Koa](Koa.md).[listen](Koa.md#listen)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:490

▸ **listen**(`options`, `listeningListener?`): `Server`

#### Parameters

| Name                 | Type            |
| :------------------- | :-------------- |
| `options`            | `ListenOptions` |
| `listeningListener?` | () => `void`    |

#### Returns

`Server`

#### Inherited from

[Koa](Koa.md).[listen](Koa.md#listen)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:491

▸ **listen**(`handle`, `backlog?`, `listeningListener?`): `Server`

#### Parameters

| Name                 | Type         |
| :------------------- | :----------- |
| `handle`             | `any`        |
| `backlog?`           | `number`     |
| `listeningListener?` | () => `void` |

#### Returns

`Server`

#### Inherited from

[Koa](Koa.md).[listen](Koa.md#listen)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:492

▸ **listen**(`handle`, `listeningListener?`): `Server`

#### Parameters

| Name                 | Type         |
| :------------------- | :----------- |
| `handle`             | `any`        |
| `listeningListener?` | () => `void` |

#### Returns

`Server`

#### Inherited from

[Koa](Koa.md).[listen](Koa.md#listen)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:493

---

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name        | Type                 | Description                              |
| :---------- | :------------------- | :--------------------------------------- |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

[Koa](Koa.md).[listenerCount](Koa.md#listenercount)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:589

---

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!')
})
console.log(util.inspect(server.listeners('connection')))
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name        | Type                 |
| :---------- | :------------------- |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Koa](Koa.md).[listeners](Koa.md#listeners)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:512

---

### off

▸ **off**(`eventName`, `listener`): [`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name        | Type                           |
| :---------- | :----------------------------- |
| `eventName` | `string` \| `symbol`           |
| `listener`  | (...`args`: `any`[]) => `void` |

#### Returns

[`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

#### Inherited from

[Koa](Koa.md).[off](Koa.md#off)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:472

---

### on

▸ **on**(`eventName`, `listener`): [`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter()
myEE.on('foo', () => console.log('a'))
myEE.prependListener('foo', () => console.log('b'))
myEE.emit('foo')
// Prints:
//   b
//   a
```

**`since`** v0.1.101

#### Parameters

| Name        | Type                           | Description            |
| :---------- | :----------------------------- | :--------------------- |
| `eventName` | `string` \| `symbol`           | The name of the event. |
| `listener`  | (...`args`: `any`[]) => `void` | The callback function  |

#### Returns

[`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

#### Inherited from

[Koa](Koa.md).[on](Koa.md#on)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:358

---

### once

▸ **once**(`eventName`, `listener`): [`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter()
myEE.once('foo', () => console.log('a'))
myEE.prependOnceListener('foo', () => console.log('b'))
myEE.emit('foo')
// Prints:
//   b
//   a
```

**`since`** v0.3.0

#### Parameters

| Name        | Type                           | Description            |
| :---------- | :----------------------------- | :--------------------- |
| `eventName` | `string` \| `symbol`           | The name of the event. |
| `listener`  | (...`args`: `any`[]) => `void` | The callback function  |

#### Returns

[`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

#### Inherited from

[Koa](Koa.md).[once](Koa.md#once)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:387

---

### onerror

▸ **onerror**(`err`): `void`

Default error handler.

**`api`** private

#### Parameters

| Name  | Type    |
| :---- | :------ |
| `err` | `Error` |

#### Returns

`void`

#### Inherited from

[Koa](Koa.md).[onerror](Koa.md#onerror)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:537

---

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name        | Type                           | Description            |
| :---------- | :----------------------------- | :--------------------- |
| `eventName` | `string` \| `symbol`           | The name of the event. |
| `listener`  | (...`args`: `any`[]) => `void` | The callback function  |

#### Returns

[`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

#### Inherited from

[Koa](Koa.md).[prependListener](Koa.md#prependlistener)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:607

---

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

Adds a **one-time**`listener` function for the event named `eventName` to the*beginning* of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name        | Type                           | Description            |
| :---------- | :----------------------------- | :--------------------- |
| `eventName` | `string` \| `symbol`           | The name of the event. |
| `listener`  | (...`args`: `any`[]) => `void` | The callback function  |

#### Returns

[`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

#### Inherited from

[Koa](Koa.md).[prependOnceListener](Koa.md#prependoncelistener)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:623

---

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter()
emitter.once('log', () => console.log('log once'))

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log')
const logFnWrapper = listeners[0]

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener()

// Logs "log once" to the console and removes the listener
logFnWrapper()

emitter.on('log', () => console.log('log persistently'))
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log')

// Logs "log persistently" twice
newListeners[0]()
emitter.emit('log')
```

**`since`** v9.4.0

#### Parameters

| Name        | Type                 |
| :---------- | :------------------- |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Koa](Koa.md).[rawListeners](Koa.md#rawlisteners)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:542

---

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `event?` | `string` \| `symbol` |

#### Returns

[`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

#### Inherited from

[Koa](Koa.md).[removeAllListeners](Koa.md#removealllisteners)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:483

---

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!')
}
server.on('connection', callback)
// ...
server.removeListener('connection', callback)
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and*before* the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter()

const callbackA = () => {
  console.log('A')
  myEmitter.removeListener('event', callbackB)
}

const callbackB = () => {
  console.log('B')
}

myEmitter.on('event', callbackA)

myEmitter.on('event', callbackB)

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event')
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event')
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter()

function pong() {
  console.log('pong')
}

ee.on('ping', pong)
ee.once('ping', pong)
ee.removeListener('ping', pong)

ee.emit('ping')
ee.emit('ping')
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name        | Type                           |
| :---------- | :----------------------------- |
| `eventName` | `string` \| `symbol`           |
| `listener`  | (...`args`: `any`[]) => `void` |

#### Returns

[`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

#### Inherited from

[Koa](Koa.md).[removeListener](Koa.md#removelistener)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:467

---

### run

▸ **run**(`req`, `res`): `Promise`<`unknown`\>

Run koa api with request and response objects

#### Parameters

| Name  | Type                      | Description     |
| :---- | :------------------------ | :-------------- |
| `req` | `NextApiRequest`          | nextjs request  |
| `res` | `NextApiResponse`<`any`\> | nextjs response |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[lib/koa-api/src/koa-api.ts:77](https://github.com/ivandotv/nextjs-koa-api/blob/9deb975/lib/koa-api/src/koa-api.ts#L77)

---

### setMaxListeners

▸ **setMaxListeners**(`n`): [`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n`  | `number` |

#### Returns

[`KoaApi`](KoaApi.md)<`TState`, `TContext`\>

#### Inherited from

[Koa](Koa.md).[setMaxListeners](Koa.md#setmaxlisteners)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:493

---

### toJSON

▸ **toJSON**(): `any`

Return JSON representation.
We only bother showing settings.

#### Returns

`any`

#### Inherited from

[Koa](Koa.md).[toJSON](Koa.md#tojson)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:505

---

### use

▸ **use**<`NewStateT`, `NewContextT`\>(`middleware`): [`Koa`](Koa.md)

Use the given middleware `fn`.

Old-style middleware will be converted.

#### Type parameters

| Name          | Type |
| :------------ | :--- |
| `NewStateT`   | {}   |
| `NewContextT` | {}   |

#### Parameters

| Name         | Type                                                                                                     |
| :----------- | :------------------------------------------------------------------------------------------------------- |
| `middleware` | [`Middleware`](../modules/Koa.md#middleware)<`TState` & `NewStateT`, `TContext` & `NewContextT`, `any`\> |

#### Returns

[`Koa`](Koa.md)

#### Inherited from

[Koa](Koa.md).[use](Koa.md#use)

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:512

---

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events')

{
  const ee = new EventEmitter()
  const listener = () => console.log('Events are fun')
  ee.on('foo', listener)
  getEventListeners(ee, 'foo') // [listener]
}
{
  const et = new EventTarget()
  const listener = () => console.log('Events are fun')
  et.addEventListener('foo', listener)
  getEventListeners(et, 'foo') // [listener]
}
```

**`since`** v15.2.0, v14.17.0

#### Parameters

| Name      | Type                               |
| :-------- | :--------------------------------- |
| `emitter` | `EventEmitter` \| `DOMEventTarget` |
| `name`    | `string` \| `symbol`               |

#### Returns

`Function`[]

#### Inherited from

[Koa](Koa.md).[getEventListeners](Koa.md#geteventlisteners)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:270

---

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events')
const myEmitter = new EventEmitter()
myEmitter.on('event', () => {})
myEmitter.on('event', () => {})
console.log(listenerCount(myEmitter, 'event'))
// Prints: 2
```

**`since`** v0.9.12

**`deprecated`** Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name        | Type                 | Description          |
| :---------- | :------------------- | :------------------- |
| `emitter`   | `EventEmitter`       | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name       |

#### Returns

`number`

#### Inherited from

[Koa](Koa.md).[listenerCount](Koa.md#listenercount-1)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:242

---

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events')

;(async () => {
  const ee = new EventEmitter()

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar')
    ee.emit('foo', 42)
  })

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event) // prints ['bar'] [42]
  }
  // Unreachable here
})()
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events')
const ac = new AbortController()

;(async () => {
  const ee = new EventEmitter()

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar')
    ee.emit('foo', 42)
  })

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event) // prints ['bar'] [42]
  }
  // Unreachable here
})()

process.nextTick(() => ac.abort())
```

**`since`** v13.6.0, v12.16.0

#### Parameters

| Name        | Type                        | Description                              |
| :---------- | :-------------------------- | :--------------------------------------- |
| `emitter`   | `EventEmitter`              | -                                        |
| `eventName` | `string`                    | The name of the event being listened for |
| `options?`  | `StaticEventEmitterOptions` | -                                        |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[Koa](Koa.md).[on](Koa.md#on-1)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:221

---

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events')

async function run() {
  const ee = new EventEmitter()

  process.nextTick(() => {
    ee.emit('myevent', 42)
  })

  const [value] = await once(ee, 'myevent')
  console.log(value)

  const err = new Error('kaboom')
  process.nextTick(() => {
    ee.emit('error', err)
  })

  try {
    await once(ee, 'myevent')
  } catch (err) {
    console.log('error happened', err)
  }
}

run()
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events')

const ee = new EventEmitter()

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message))

ee.emit('error', new Error('boom'))

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events')

const ee = new EventEmitter()
const ac = new AbortController()

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal })
    console.log('event emitted!')
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!')
    } else {
      console.error('There was an error', error.message)
    }
  }
}

foo(ee, 'foo', ac.signal)
ac.abort() // Abort waiting for the event
ee.emit('foo') // Prints: Waiting for the event was canceled!
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name        | Type                        |
| :---------- | :-------------------------- |
| `emitter`   | `NodeEventTarget`           |
| `eventName` | `string` \| `symbol`        |
| `options?`  | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Koa](Koa.md).[once](Koa.md#once-1)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name        | Type                        |
| :---------- | :-------------------------- |
| `emitter`   | `DOMEventTarget`            |
| `eventName` | `string`                    |
| `options?`  | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Koa](Koa.md).[once](Koa.md#once-1)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:162

---

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `EventEmitter.setMaxListeners()` method allows the default limit to be
modified (if eventTargets is empty) or modify the limit specified in every `EventTarget` | `EventEmitter` passed as arguments.
The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

```js
EventEmitter.setMaxListeners(20)
// Equivalent to
EventEmitter.defaultMaxListeners = 20

const eventTarget = new EventTarget()
// Only way to increase limit for `EventTarget` instances
// as these doesn't expose its own `setMaxListeners` method
EventEmitter.setMaxListeners(20, eventTarget)
```

**`since`** v15.3.0, v14.17.0

#### Parameters

| Name              | Type                                   |
| :---------------- | :------------------------------------- |
| `n?`              | `number`                               |
| `...eventTargets` | (`EventEmitter` \| `DOMEventTarget`)[] |

#### Returns

`void`

#### Inherited from

[Koa](Koa.md).[setMaxListeners](Koa.md#setmaxlisteners-1)

#### Defined in

node_modules/.pnpm/@types+node@17.0.31/node_modules/@types/node/events.d.ts:290
