Dabble Lab Content CLI
===========

Command line tool for generating Dabble Lab content and assets.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/content-cli.svg)](https://npmjs.org/package/content-cli)
[![Downloads/week](https://img.shields.io/npm/dw/content-cli.svg)](https://npmjs.org/package/content-cli)
[![License](https://img.shields.io/npm/l/content-cli.svg)](https://github.com/dabblelab/content-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
The Dabble Lab Content CLI is a command line tool for generating Dabble Lab content and assets. To use it, install it globally with `npm install -g content-cli` and then run it with `content-cli`.

1. Installing the CLI
  ```sh-session
  $ npm install -g @dabblelab/content-cli
  ```
2. After installing the CLI, you can run it with `content-cli` like show below:
  ```
  $ content-cli image -h "How to use the Dabble Lab Content CLI" -s orange-purple
  ```
The resulting file will be saved in the current working directory and named `image_{timestamp}.png`.
<!-- usagestop -->
# Commands
<!-- commands -->
* [`content-cli help [COMMAND]`](#content-cli-help-command)
* [`content-cli image`](#content-cli-image)

## `content-cli help [COMMAND]`

display help for content-cli

```
USAGE
  $ content-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `content-cli image`

Create a new YouTube or GitHub image asset.

```
USAGE
  $ content-cli image

OPTIONS
  -h, --headline=headline                                                                headline for poster images
  -s, --style=purple-orange|orange-purple|blue-green|green-blue|purple-blue|blue-purple  image style

DESCRIPTION
  ...
  Resulting image will be created in the current working directory.
```

_See code: [src/commands/image.js](https://github.com/dabblelab/content-cli/blob/v1.0.1-alpha.1/src/commands/image.js)_
<!-- commandsstop -->
