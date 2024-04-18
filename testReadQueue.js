const Queue = require('bee-queue');


const bacem = new Queue('bacem');
bacem.process((job, done) => {
  console.log(job.data);
  
    done(null, job.data);
}
);