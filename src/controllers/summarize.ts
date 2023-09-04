import { Context } from "telegraf";
import { summarizeText } from "../utils/summarizeText";

export async function summarizeController(ctx: Context): Promise<void> {
  try {
    if (!ctx.message) {
      await ctx.reply("I don't know magic to summarize empty texts brother");
      return;
    }
    const message = (ctx.message as { text: string }).text;
    if (message.length <= 100) {
      await ctx.reply(
        "The text is too short just like my iq.. Please send something large..",
      );
      return;
    }
    await ctx.reply("I'm summarizing that for you.. Give me a min..");

    const summary = await new Promise<string>((resolve) => {
      summarizeText(message, (result) => {
        resolve(result);
      });
    });

    await ctx.reply(summary);
  } catch (error) {
    console.log(error);
    await ctx.reply("Oops.. An error occured..");
  }
}
