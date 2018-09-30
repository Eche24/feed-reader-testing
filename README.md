# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## How to run this project
1. Clone the repository using git clone https://github.com/Eche24/feed-reader-testing.git .
2. Open index.html in your browser.

## The tests :

1. tests to make sure that the allFeeds variable has been defined and that it is not empty.
2. loops through each feed and determines if the URL is defined and not empty.
3. loops through each feed and determines that each feed has a name and not empty.
4. ensures the menu element is hidden by default.
5. Test that ensures the menu changes visibility when the menu icon is clicked.
6. tests that there is at least one entry in feed.
7. tests that new content is loaded by loadFeed().
