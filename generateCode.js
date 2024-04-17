const Queue = require('bee-queue');

const generateCodeQueue = new Queue('generateCode');
const buildDeployQueue = new Queue('buildDeploy');

generateCodeQueue.process((job, done) => {
    console.log(`Generating code based on ${job.data} items`);
    
    //CAll AI

    // PRECESS ANSWER
    const generatedCode = /* processed answer */ `Generated code based on ${job.data} items`;


    buildDeployQueue.createJob(generatedCode).save().then(() => {
      done(null, generatedCode);
    });
  });
  
