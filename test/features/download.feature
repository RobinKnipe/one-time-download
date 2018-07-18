@watch
Feature: Basic download test

  A simple test to check media can be downloaded.

  As a customer
  I want to be able to download media
  So that I have a copy

  Scenario: Download media using a link
    Given I have a media link
    When I open the link
    Then a download link appears
