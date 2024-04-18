const Queue = require('bee-queue');



const bacem = new Queue('bacem');

bacem.createJob(

    {
        id: 204,
        name: 'bacem  2 Job'
    }
).save().then(() => {
    console.log('bacem job created');
    process.exit(1);
}  );
