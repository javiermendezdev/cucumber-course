const { __esModule } = require("cucumber/lib/formatter/helpers");

class Person{

    messagesHeard = []
    messagesSouted = []

    moveTo(distance){

    }

    shout(message){
        this.messagesSouted.push(message)
    }

    tryHear(message){
        this.messagesHeard.push(message)
    }

    getMessageHeard(){
        return this.messagesHeard
    }

    getMessageShouted(){
        return this.messagesSouted
    }
}

module.exports = Person