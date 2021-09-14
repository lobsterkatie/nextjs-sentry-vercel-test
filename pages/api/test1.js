import { withSentry } from "@sentry/nextjs";

const doAsyncWork = () => Promise.reject(new Error("API Test 1"));
doAsyncWork();

async function handler(req, res) {
  console.log("I'm in test1!");
  res.status(200).json({ name: "John Doe" });
}

export default withSentry(handler);
