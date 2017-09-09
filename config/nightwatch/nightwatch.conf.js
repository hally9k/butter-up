module.exports = {
    src_folders: ['./e2e/tests'],
    output_folder: './e2e/reports',
    custom_commands_path: '',
    custom_assertions_path: '',
    page_objects_path: './e2e/page-objects',
    test_workers: false, // true will to run tests in parallel (http://nightwatchjs.org/guide#parallel-running)
    globals_path: '',

    test_settings: {
        default: {
            launch_url: 'http://localhost:3000',
            desiredCapabilities: {
                browserName: 'chrome',
                // chromeOptions: {
                //     // "args" : ["headless", "no-sandbox", "disable-gpu"] //Enabling  this will start chrome in headless mode
                // },
            },
        },
    },
}
