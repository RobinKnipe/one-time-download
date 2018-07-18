'use strict';

const expect = require('chai').expect;

module.exports = function downloadTest() {
  const url = 'http://localhost:3000/test';

  this.Given(/^I have a media link$/, () => expect(url).to.be.a('string'));

  this.When(/^I open the link$/, () => {
    browser.url(url);
  });

  this.Then(/^a download link appears/, () => expect(browser.getText('html')).to.equal('link: https://we.tl/VRhnd2dJkN'));
};
