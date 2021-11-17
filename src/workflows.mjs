import { continueAsNew, proxyActivities, sleep } from "@temporalio/workflow";

const { tweet } = proxyActivities({
  startToCloseTimeout: "1 minute",
});

export async function dailyTweet() {
  await tweet();
  await sleep("1 day");
  await continueAsNew();
}
