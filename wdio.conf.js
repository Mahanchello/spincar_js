var baseUrl = 'https://test-selenium-manager.spincar.com/'
exports.config = {
    framework: 'mocha',
    mochaOpts: {
        timeout: 40000
    },
    specs: [
        './tests/*.js'
    ],

    // exclude: [
    //     './pageObjects/*.js'
    // ],

    capabilities: [{
        browserName: 'chrome',
       
    }],

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,

    baseUrl: baseUrl,

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 40000
    },

    seleniumLogs: './',
    seleniumArgs: {
        version: '2.45.0'
    },
    seleniumInstallArgs: {
        version: '2.45.0'
    }
}
