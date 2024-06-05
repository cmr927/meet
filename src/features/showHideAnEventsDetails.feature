Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default
        Given user opened the app
        When an event loads
        Then an event element should be collapsed by default

    Scenario: User can expand an event to see details
        Given an event is displayed
        When user clicks on “show details”
        Then the event details should expand

    Scenario: User can collapse an event to hide details
        Given user clicked on “show details” of an event
        When details are displayed and user clicks on “hide details”
        Then the event details should collapse