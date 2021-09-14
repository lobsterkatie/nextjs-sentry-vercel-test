console.log("top of handler module");

import { withSentry } from "@sentry/nextjs";

const doAsyncWork = () => {
  console.log("I'm in the rejection function");
  return Promise.reject(
    console.log("rejecting as we speak") && new Error("API Test 1")
  );
};
console.log("about to call rejection function");
doAsyncWork();
console.log("just called rejection function");

async function handler(req, res) {
  console.log("I'm in the test1 handler");
  res.status(200).json({ name: "John Doe" });
}

console.log("about to export the handler");
export default withSentry(handler);
console.log("just exported the handler");
