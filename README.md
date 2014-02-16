mimosa-groundskeeper
===========
## Overview

This module uses [groundskeeper](https://github.com/Couto/groundskeeper) during builds to sanitize your JavaScript code, removing things like console logs or more specific blocks of code.

For more information regarding Mimosa, see http://mimosa.io

## Usage

Add `"groundskeeper"` to your list of modules.  That's all!  Mimosa will install the module for you when you start up.

## Functionality

During `mimosa build`, when mimosa-groundskeeper encounters a JavaScript file, it cleans it! By default groundskeeper removes all console, debugger, and pragmas that it finds.  The options specific what you may want to keep.

## Default Config

```javascript
groundskeeper:{
  log: true,
  options:{}
}
```

* `log`: Whether or not to log if any files get cleansed. If a file does not having anything to be cleaned, nothing is logged, but if a file has something removed, a notification is logged to the console.
* `options`: All options are pass through to [groundskeeper](https://github.com/Couto/groundskeeper).  Check out its [usage](https://github.com/Couto/groundskeeper#usage) for details.