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
```sh-session
$ npm install -g @dabblelab/content-cli
$ content-cli COMMAND
running command...
$ content-cli (-v|--version|version)
@dabblelab/content-cli/1.0.1-alpha.1 darwin-x64 node-v14.15.0
$ content-cli --help [COMMAND]
USAGE
  $ content-cli COMMAND
...
```
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
