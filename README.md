# Squidex Node Library

The Squidex Node.js library provides access to the Squidex API from JavaScript and TypeScript. Can be used in node and in the browser.

Requires **TypeScript 4.5** or higher.

## Status

[![npm shield](https://img.shields.io/npm/v/@squidex/squidex)](https://www.npmjs.com/package/@squidex/squidex)

## Documentation

API reference documentation is available [here](https://cloud.squidex.io/api/docs).

## Installation

```bash
npm install @squidex/squidex
# or
yarn add @squidex/squidex
```

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/squidex-typescript-sdk-hg1o4f?file=app.ts&view=editor)

```typescript
import { SquidexClient, SquidexInMemoryTokenStore, SquidexStorageTokenStore } from "@squidex/squidex";

const client = new SquidexClient({
    clientId: "client-id",
    clientSecret: "client-secret",
    appName: "my-app",
    // url: "https://your.squidex-deployment",
    // tokenStore: new SquidexInMemoryTokenStore(),
    // tokenStore: new SquidexStorageTokenStore() // Keep the tokens in the local store.
    // tokenStore: new SquidexStorageTokenStore(sessionStorage, "CustomKey")
});

const response = await client.rules.runRule("rule-id", {
    fromSnapshots: true,
});

console.log("Received response from Squidex!", response);
```

## Handling errors

When the API returns a non-success status code (4xx or 5xx response), a subclass of [SquidexError](https://github.com/Squidex/sdk-node/blob/main/src/errors/SquidexError.ts) will be thrown:

```ts
import { Squidex } from "@squidex/squidex";

try {
    const response = await client.rules.runRule("rule-id", {
        fromSnapshots: true,
    });
} catch (err) {
    if (err instanceof Squidex.BadRequestError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
    }
}
```

Error codes are as followed:

| Status Code | Error Type             |
| ----------- | ---------------------- |
| 400         | `BadRequestError`      |
| 403         | `ForbiddenError`       |
| 404         | `NotFoundError`        |
| 409         | `ConflictError`        |
| 413         | `ContentTooLargeError` |
| 500         | `InternalServerError`  |
| 501         | `NotImplementedError`  |

## Release Candidate status

This SDK is a release candidate, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Usage in TypeScript ESM Projects

Learn more about ESM [here](https://www.typescriptlang.org/docs/handbook/esm-node.html).

To ensure maximum compatability, the Squidex Node SDK is transpiled to CJS JavaScript. If your project is TypeScript ESM, make sure to enable [`esModuleInterop`](https://www.typescriptlang.org/tsconfig#esModuleInterop) in your tsconfig.json so that the imports in this package work correctly.

```jsonc
{
  "compilerOptions": {
    "esModuleInterop": true,
    ...
  }
}
```

## Custom Templates

### `api.mustache`

* Use `vendorExtensions.x-method-name` for the actual method name.
* Use `vendorExtensions.f-field-name` for the actual header name.

### `models.mustache`

* Remove tslint rule.
* Remove eslint rule.

### `modelGeneric.mustache`

* Add methods to test for inherited type using discriminators.

### `modelEnum.mustache`

* Add underscore to unused variable `ignoreDiscriminator` to make compiler happy.

### `runtime.mustache`

* Remove exception handling and just forward exception.

## Major changes in 2.0

This SDK is mainly based on code generation, based on the OpenAPI specification from the Squidex API.

The initial version was built with fern: https://www.buildwithfern.com/. The main reason was the overall code quality and the support for discriminators. When the 1.0 version was released fern has not defined the pricing yet and unfortunately the current pricing is too expensive.

Therefore the SDK code generation was moved to OpenAPI Generator: (https://openapi-generator.tech/). The goal was to be as close to the previous version as possible without doing too much changes to the code generation templates. It was not possible to provide the same method signatures.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
