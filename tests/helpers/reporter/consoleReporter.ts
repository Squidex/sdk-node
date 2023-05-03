const JasmineConsoleReporter = require('jasmine-console-reporter');

let consoleReporter = new JasmineConsoleReporter({
    colors: true,
    verbosity: 4
});

jasmine.getEnv().addReporter(consoleReporter);