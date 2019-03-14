var expect = require('chai').expect;

beforeEach(function() {
    browser.url('/');
})

describe('Creation of new customer', function() {
	it.only('Should create new customer', function(done) {

		browser.setValue('#email', 'tester3@spincar.com');
		browser.setValue('#password', 'password');

		browser.click('#submit');
		browser.pause(1000);

		browser.click('span[class="glyphicon glyphicon-cog"]');
		browser.click('li.dropdown.open > ul > li:nth-child(2) > a');
		browser.pause(1000);

		var name = 'Audi_AaaaaA8';
		var s3folder = 'highhhhh_qulity';

		browser.setValue('#lastpass-disable-search-u', name);
		browser.setValue('#lastpass-disable-search-s', s3folder);
		browser.click('#form-create > input.form-control.btn.btn-primary.rbutton25');
		browser.pause(1000);

		browser.click('ul:nth-child(1) > li:nth-child(2) > a');
		browser.click('li.dropdown.open > ul > li:nth-child(1) > a');
		browser.click('th.table-right')
		browser.click('th.table-right > span');
		var initialId = browser.getValue('tr:nth-child(1) > td.table-right > a');
		browser.click('tr:nth-child(1) > td.table-right > a');
		browser.pause(1000);

		var checkId = browser.getValue('tr:nth-child(2) > td:nth-child(2)');
		var checkName = browser.getValue('#name');
		var checkS3folder = browser.getValue('[name="s3_folder"]');
		var maxSize = browser.getValue('[name="max_size"]');
		var panoMaxSize = browser.getValue('[name="pano_max_size"]');
		var checkbox = $('input[type="checkbox"][name="is_spin_customer"]');
		browser.pause(1000);

		expect(initialId).to.equal(checkId);
		expect(checkName).to.equal(name);
		expect(checkS3folder).to.equal(s3folder);
		expect(maxSize).to.equal('640');
		expect(panoMaxSize).to.equal('1712');
		expect(checkbox.isSelected()).to.be.true;
	})
})

describe('Invalid name input', function() {
	it('Should send error message', function(done) {
		browser.setValue('#email', 'tester3@spincar.com');
		browser.setValue('#password', 'password');

		browser.click('#submit');
		browser.pause(1000);

		browser.click('span[class="glyphicon glyphicon-cog"]');
		browser.click('li.dropdown.open > ul > li:nth-child(2) > a');
		browser.pause(1000);

		var s3folder = 'highhhh_qulityy';

		browser.setValue('#lastpass-disable-search-s', s3folder);
		browser.click('#form-create > input.form-control.btn.btn-primary.rbutton25');
		browser.pause(1000);

		var err1 = browser.getText('#errors > li:nth-child(1)');
		var err2 = browser.getText('#errors > li:nth-child(2)');

		// var err1 = 'Customer name required';
		// var err2 = 'Invalid email address';

		expect(err1).to.equal('Customer name required');
		expect(err2).to.equal('Invalid email address');

	})
})

describe('Missed s3folder input', function() {
	it('Should send error message', function(done) {
		browser.setValue('#email', 'tester3@spincar.com');
		browser.setValue('#password', 'password');

		browser.click('#submit');
		browser.pause(1000);

		browser.click('span[class="glyphicon glyphicon-cog"]');
		browser.click('li.dropdown.open > ul > li:nth-child(2) > a');
		browser.pause(1000);

		var name = 'Audi_A6';
		browser.setValue('#lastpass-disable-search-u', name);
		browser.click('#form-create > input.form-control.btn.btn-primary.rbutton25');
		browser.pause(1000);

		var errMes = browser.getText('#errors > li');
		expect(errMes).to.equal('S3 folder required');
	})
})



		
	