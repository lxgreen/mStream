#!/usr/bin/env node
"use strict";

if(process.versions['electron']){
  require('./mstream-electron.js');
}else{
  // Get the server config
  const program = require('./modules/configure-json-file.js').setup(process.argv, __dirname);
  if(program.error){
    console.log(program.error);
    process.exit();
  }

  const serve = require('./mstream.js');
  serve.serveit(program);
}
