# Build Circle Superheroes tech test

Superheroes and Supervillains are always battling it out, but how do we know who wins? This repo contains a function that gives us that answer. 

The `battle` function in `src/main.ts` takes a hero name, and a villain name, and returns us the hero or villain that would win in a battle.

The characters and their stats are stored in a json file stored in AWS S3 - https://s3.eu-west-2.amazonaws.com/build-circle/characters.json

## Task

Note: This tech test is deliberately loose. We're looking for your opinions and ability to be productive without everything being immediately obvious. Googling stuff you don't know is encouraged!

Above all, Build Circle value simplicity.

1. Pull the repository and familiarise yourself with it.

2. We want to build and deploy a docker container that hosts the application. Write a script so that we can do this with a single command.

3. Test that the server is running with `curl` command