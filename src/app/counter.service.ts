export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActivetoInactive(){
        this.activeToInactiveCounter++;
        console.log( 'Active to Inactive' + ' ' + this.activeToInactiveCounter); 
    }

    incrementInactivetoActive(){
        this.inactiveToActiveCounter++;
        console.log('Inactive to Active' + ' ' + this.inactiveToActiveCounter); 
    }
}