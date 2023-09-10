# TL;DR Bot

## Description

A Telegram bot designed to condense lengthy chat messages because life's too short for verbosity.

## Preview

<div align="left">
    <img width=300px; src="https://i.imgur.com/QY94CL7.jpg" />
</div>

## Where?

Please host the thing yourself. Because running this on my free tier VPS will put it on fire :)

## How to run this?

1. Make sure [Docker](https://www.docker.com/) and [Docker compose](https://docs.docker.com/compose/) is installed on your machine.
2. Clone the repository

```bash
git clone https://github.com/devadathanmb/tldr-bot.git
```

3. Create a `.env` file in the cloned directory and setup the environment variables (see [env.example](./env.example) for more info.) See [this](https://core.telegram.org/bots/tutorial) on how to setup a bot using [BotFather](https://telegram.me/BotFather).
4. Build and run the image using

```bash
cd tldr-bot/
docker compose up
```

That's it your bot should be live now!
