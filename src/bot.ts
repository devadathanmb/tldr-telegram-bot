import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
import { startController } from "./controllers/start";
import { summarizeController } from "./controllers/summarize";

dotenv.config();

const TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(TOKEN!);

bot.command("start", async (ctx) => {
  startController(ctx);
});

bot.on("message", async (ctx) => {
  summarizeController(ctx);
});

bot.launch();
