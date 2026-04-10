class Myqueue {
    constructor(){
        this.inbox = [];// inside of the queue  
        this.outbox = [];// outside of the queue


    }

    push(value){
        this.inbox.push(value);
    }

    _transfert(){
if(!this.outbox.length){
    while(this.inbox.length){
        this.outbox.push(this.inbox.pop());//reverse the inbox to outbox
    }
}
}


pop(){
    this._transfert();
    return this.outbox.pop();
}

}