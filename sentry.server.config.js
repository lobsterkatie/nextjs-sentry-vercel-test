// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  debug: true,
  dsn:
    SENTRY_DSN ||
    "https://95dba3055c2c4041be47633be7d139c9@o973824.ingest.sentry.io/5925157",
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  beforeSend: (event, hint) => {
    console.log("Sending event:");
    console.log(event.exception.values[0].value);
    return null;
  },
});
