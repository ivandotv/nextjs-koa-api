# nextjs-koa-api

## 2.0.1

### Patch Changes

- 87585cd: update function `attachRouter` to accept `KoaApi` with any context
- 9ef9ccc: update docs: explain `attachRouter` function usage

## 2.0.0

### Major Changes

- daa0024: Move `attachRouter` from `KoaApi` class to a special function.

  I couldn not make the types work when trying to add the `attachRouter` to augmented `koa` typescript module.

## 1.1.0

### Minor Changes

- dd0c276: TypeScript: Change request `body` type from `any` to `unknown`.
- 18c8a87: Implement `attachRouter` method

## 1.0.2

### Patch Changes

- 45c6d4c: Add API docs

## 1.0.1

### Patch Changes

- 5d9095b: add code comments

## 1.0.0

### Major Changes

- eb550ad: Initial release
