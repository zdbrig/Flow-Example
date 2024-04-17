const Queue = require('bee-queue');

const buildDeployQueue = new Queue('buildDeploy');
const generateTestScriptQueue = new Queue('generateTestScript');



buildDeployQueue.process((job, done) => {
    console.log(`Building and deploying Docker for code: ${job.data}`);
    const dockerInfo = `Docker built and deployed for code: ${job.data}`;
    generateTestScriptQueue.createJob(dockerInfo).save().then(() => {
      done(null, dockerInfo);
    });
  });