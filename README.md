# Bitburner TypeScript template

This repo is meant to be used with https://github.com/bitburner-official/bitburner-vscode

## Setup

Once you have the extension up and running you need to configure it:

- Set scriptRoot to `./build/` in your workspace settings
- (Optional) Enable file watcher

## Usage

Run `yarn start`, this will run tsc in watch mode and watches for all file changes in `src`.

Create you typescript files in the `src` folder. A `NetscriptDefinitions.d.ts` file is included to import the types from the game.

Whenever you save your files, they will be transpiled into the `build` folder, and if you enables the file watcher in the bitburner extension the files will sync to your game.
