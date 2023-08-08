# Single-Spa Playground

## Status

The goal is to have [single-spa.js](https://single-spa.js.org/) with [Layout Engine](https://single-spa.js.org/docs/layout-overview) + [Vue.js v3](https://vuejs.org/) with [Vite](https://vitejs.dev/) running.

Error in browser console:

```
Uncaught SyntaxError: application '@playground/app1-vue' died in status LOADING_SOURCE_CODE: import declarations may only appear at top level of a module
```

## Features

- [single-spa.js](https://single-spa.js.org/) as Micro Frontend Framework
- [pnpm workspaces](https://pnpm.io/workspaces) to manage the apps
- [Turborepo](https://turbo.build/) as monorepo build system

## Setup

```bash
pnpm install
```

Install dependencies for all apps.

## Development

```bash
pnpm run dev
```

Is using a turborepo pipeline to trigger "dev" in all workspaces.
Open it in your browser by going to [localhost:9000](http://localhost:9000).
