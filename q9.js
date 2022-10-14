//Q9. What is the best way to avoid deadlocks when using async/await?
/* Ans :  

Before the call, clear the SynchronizationContext
Do the call, there will be no more deadlock here, wait for it to finish
Restore the SynchronizationContext

*/