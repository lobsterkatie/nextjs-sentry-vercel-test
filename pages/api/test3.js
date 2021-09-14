import { withSentry } from "@sentry/nextjs";

function work() {
  throw new Error("API Test 3");
}

async function handler(req, res) {
  console.log("I'm in test3!");

  work();

  res.status(200).json({ name: "John Doe" });
}

export default withSentry(handler);
