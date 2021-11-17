import fetch from "cross-fetch";
import emoji from "node-emoji";
import { TwitterApi } from "twitter-api-v2";

export async function tweet() {
  const { readWrite: twitterClient } = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      accept: "application/json",
    },
  });
  const { joke } = await response.json();
  const text = `${joke} ${emoji.random().emoji}`;

  console.log(`Going to tweet '${text}'.`);

  await twitterClient.post("https://api.twitter.com/2/tweets", { text });
}

tweet().catch((err) => console.error({ err }));
