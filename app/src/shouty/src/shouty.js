const { __esModule } = require("cucumber/lib/formatter/helpers");

class Person{

    maxMetersForHear = 25
    messagesHeard = []
    messagesSouted = []

    moveTo(distance){
        this.distance = distance
    }

    shout(message){
        this.messagesSouted.push(message)
    }

    tryHear(message){
        if(this.distance <= this.maxMetersForHear)
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