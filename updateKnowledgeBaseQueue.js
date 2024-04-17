const Queue = require('bee-queue');

const updateKnowledgeBaseQueue = new Queue('updateKnowledgeBase');


updateKnowledgeBaseQueue.process((job, done) => {
    console.log(`Updating knowledge base based on test result: ${job.data}`);
    const updatedKnowledgeBase = `Knowledge base updated based on test result: ${job.data}`;
  /*  generateCodeQueue.createJob(updatedKnowledgeBase).save().then(() => {
      done(null, updatedKnowledgeBase);
    }); */
  });