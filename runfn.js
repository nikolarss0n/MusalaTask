const createTestCafe = require('testcafe');
let testcafe = null;

(async () => {
    const testCafe = await createTestCafe();
    let reportData = '';
    await testCafe
        .createRunner('localhost', 1337, 1338)
        .src(
            "fixtures/*.ts"
        )
        .browsers(
            ["chrome:headless:emulation:width=1920;height=1080",
                "firefox:headless:emulation:width=1920;height=1080"])
        .concurrency(3)
        .reporter([{
            name: 'html',
            output: 'reports/musala.html'
        }, {
            name: 'spec'
        }])
        .run();

    await testCafe.close();
})();
