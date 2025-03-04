import { withSentry } from "@sentry/nextjs";

function work() {
  throw new Error("API Test 2");
}

work();

async function handler(req, res) {
  console.log("I'm in test2!");
  res.status(200).json({ name: "John Doe" });
}

export default withSentry(handler);
