import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
import { startController } from "./controllers/start";
import { summarizeController } from "./controllers/summarize";

dotenv.config();

const TOKEN = process.env.BOT_TOKEN;
const WEB_HOOK_DOMAIN = process.env.WEB_HOOK_DOMAIN!;
const bot = new Telegraf(TOKEN!);

bot.command("start", async (ctx) => {
  startController(ctx);
});

bot.on("message", async (ctx) => {
  summarizeController(ctx);
});

bot
  .launch({
    webhook: {
      domain: WEB_HOOK_DOMAIN,
    },
  })
  .then(() => {
    console.log("Bot up and running");
  })
  .catch((err) => {
    console.error("Error while running bot");
    console.log(err);
  });
