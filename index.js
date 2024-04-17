const Queue = require('bee-queue');
const { from, of } = require('rxjs');
const { switchMap, tap , map } = require('rxjs/operators');

// Dummy function to simulate filtering knowledge base
// Dummy function to simulate filtering knowledge base
const filterKnowledgeBase = (knowledgeBase) => {
    
    return knowledgeBase.filter((item) => item.isRelevant);
  };
  
  // Simulated initial knowledge base
  const knowledgeBase = [
    [{ id: 1, isRelevant: true , userId: 123 }],
    [{ id: 2, isRelevant: false , userId: 432 }],
    [{ id: 3, isRelevant: true  , userId: 1234 }],
  ];

// Create Bee-queue instances for each task
const generateCodeQueue = new Queue('generateCode');


  
  // Function to start the process
  const startProcess = () => {
    const queryService$ = of('Dummy query service type');
  
    queryService$.pipe(
      tap((serviceType) => console.log(`Query service type: ${serviceType}`)),
      switchMap(() => from(knowledgeBase)),
      switchMap((knowledgeBase) => of(filterKnowledgeBase(knowledgeBase))),
      switchMap((filteredKnowledgeBase) =>
        generateCodeQueue.createJob(filteredKnowledgeBase).save()
      )
    ).subscribe(
      () => {
        console.log('Process started successfully');
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  };
  
  // Start the process
  startProcess();