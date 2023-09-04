import { Context } from "telegraf";

export async function startController(ctx: Context): Promise<void> {
  try {
    await ctx.reply("Welcome to the bot! This is the start command.");
  } catch (error) {
    console.error("Error in startController:", error);
  }
}
