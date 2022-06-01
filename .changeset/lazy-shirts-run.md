---
'nextjs-koa-api': major
---

Move `attachRouter` from `KoaApi` class to a special function.

I couldn not make the types work when trying to add the `attachRouter` to augmented `koa` typescript module.
