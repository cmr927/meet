Feature: Specify Number of Events
    Scenario: When user hasn't specified a number, 32 events are shown by default
        Given user is on the events app
        When user doesn't specify a number of events
        Then 32 events should be displayed by default

    Scenario: User can change the number of events displayed
        Given the default 32 events were displayed
        When user changes the default number of events displayed
        Then the number of events displayed will change.
