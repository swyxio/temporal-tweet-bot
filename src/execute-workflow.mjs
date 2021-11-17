import { Connection, WorkflowClient } from "@temporalio/client";

import { dailyTweet } from "./workflows.mjs";

async function run() {
  const connection = new Connection();
  const client = new WorkflowClient(connection.service, {
    workflowDefaults: { taskQueue: "default" },
  });

  const result = await client.execute(dailyTweet);
  console.log(result);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
