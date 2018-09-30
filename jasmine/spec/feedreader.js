/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

    // This suite is all about the RSS feeds definitions, the allFeeds variable in our application.
	describe('RSS Feeds', function () {

        // test to make sure that the allFeeds variable has been defined and that it is not empty.

		it('are defined', function () {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


        // Loops through each feed and determines if the URL is defined and not empty.


		it('each feed url is defined and not empty', function () {
			allFeeds.forEach(Feed => {
				expect(Feed.url).toBeDefined();
				expect(Feed.url.length).not.toBe(0);
			});
		});

        // test that loops through each feed in the allFeeds object and ensures it has a name defined
        // and that the name is not empty.

		it('each feed name is defined and not empty', function () {
			allFeeds.forEach(Feed => {
				expect(Feed.name).toBeDefined();
				expect(Feed.name.length).not.toBe(0);
			});
		});
	});


    /* new test suite named "The menu" */
	describe('The menu', function () {

        // test that ensures the menu element is hidden by default.

		it('is hidden by default', function () {
			var checkForClass = $('body').hasClass('menu-hidden');
			expect(checkForClass).toBe(true);
		});

        // test that ensures the menu changes visibility when the menu icon is clicked. This test
        //  has two expectations: does the menu display when clicked and does it hide when clicked again.

		it('changes visibility on click', function () {
            // first click
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(false);

            // second click
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(true);

		});

	});


    // new test suite named "Initial Entries"
	describe('Initial Entries', function () {

        //Tests that there is at least one entry in feed.

		beforeEach(function (done) {
			loadFeed(0, done);
		});

		it('are present when LoadFeed is called', function () {
			var checkForEntry = $('.feed .entry').length;
			expect(checkForEntry).toBeGreaterThan(0);
		});

	});


    /* new test suite named "New Feed Selection" */
	describe('New Feed Selection', function () {

        // Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

		let initialFeed;
		let newFeed;

		beforeEach(function (done) {
			loadFeed(0, function () {
				initialFeed = $('.feed').html();
				done();
			});
		});

		it('loads new feed', function (done) {

			loadFeed(2, function () {
				newFeed = $('.feed').html();
				expect(newFeed).not.toBe(initialFeed);
				done();
			});

		});
	});

}());
