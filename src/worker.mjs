import { Worker } from "@temporalio/worker";
import * as dotenv from "dotenv";

import * as activities from "./activities.mjs";

dotenv.config();

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve("./workflows"),
    activities,
    taskQueue: "default",
  });
  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
