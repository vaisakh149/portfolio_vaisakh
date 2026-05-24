# TypeScript Module Resolution

## What is moduleResolution?

moduleResolution controls how TypeScript resolves imports.

Example:

```ts
import Button from "./Button";
```

---

## Why We Use "bundler"

In React + Vite projects,
"bundler" works best because Vite handles module resolution.

It avoids needing:

```ts
import Button from "./Button.js";
```

---

## Recommended Setting

```json
"moduleResolution": "bundler"
```

---

## Benefits

- cleaner imports
- better Vite compatibility
- modern frontend standard
- easier TypeScript setup