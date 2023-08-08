# Single-Spa Playground

## Status

-

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
