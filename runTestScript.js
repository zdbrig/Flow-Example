const Queue = require('bee-queue');

const runTestScriptQueue = new Queue('runTestScript');
const updateKnowledgeBaseQueue = new Queue('updateKnowledgeBase');

runTestScriptQueue.process((job, done) => {
    console.log(`Executing test script: ${job.data}`);
    const testResult = `Test script executed: ${job.data}`;
    updateKnowledgeBaseQueue.createJob(testResult).save().then(() => {
      done(null, testResult);
    });
  });

  
