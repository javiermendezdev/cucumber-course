Feature: Hear shout
    Scenario: Listener is within range
        Given Lucy is standing 1 metre from Sean
        When Sean shouts "free bagels at Sean's"
        Then Lucy hears Sean’s message

    Scenario: Listener hears a different message
        Given Lucy is located 15 metres from Sean
        When Sean shouts "Free coffee!"
        Then Lucy hears Sean's message

    Scenario: Listener is out of range
        Given Lucy is located 50 metres from Sean
        When Sean shouts "Eih!!!!"
        Then Lucy doesn`t hear Sean`s message