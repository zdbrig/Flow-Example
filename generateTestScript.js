const Queue = require('bee-queue');


const generateTestScriptQueue = new Queue('generateTestScript');
const runTestScriptQueue = new Queue('runTestScript');


generateTestScriptQueue.process((job, done) => {
    console.log(`Generating test script for Docker: ${job.data}`);
    const testScript = `Test script generated for Docker: ${job.data}`;
    runTestScriptQueue.createJob(testScript).save().then(() => {
      done(null, testScript);
    });
  });