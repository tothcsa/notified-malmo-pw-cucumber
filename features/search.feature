Feature: Google Searching

Scenario: Search for Notified Malmö

Given User opens http://www.google.com

When User enters 'Notified Malmö' into the search bar
And user clicks the search button

Then User can see 'https://www.notified.com' on the first page of the search results