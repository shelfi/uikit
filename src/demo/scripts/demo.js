'use strict';

/**
 * Global `demo` object
 * @namespace
 */
var demo = window.demo = {};


/**
 * Default options
 * @type {Object}
 */
demo.options = {
	toggles: {
		details: true,
		notes: true,
		code: false
	}
};

/**
 * Feature detection
 * @type {Object}
 */
demo.test = {};

// test for localstorage
demo.test.localStorage = (function () {
	var test = '_f';
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch(e) {
		return false;
	}
}());

// create storage object if it doesn't exist; store options
if (demo.test.localStorage) {
	localStorage.demo = localStorage.demo || JSON.stringify(demo.options);
}


/**
 * Cache DOM
 * @type {Object}
 */
demo.dom = {
	primaryMenu: document.querySelector('.f-menu'),
	menuItems: document.querySelectorAll('.f-menu li a'),
	menuToggle: document.querySelector('.f-menu-toggle')
};


/**
 * Build color chips
 */
demo.buildColorChips = function () {

	var chips = document.querySelectorAll('.f-color-chip'),
		color;

	for (var i = chips.length - 1; i >= 0; i--) {
		color = chips[i].querySelector('.f-color-chip__color').innerHTML;
		chips[i].style.borderTopColor = color;
		chips[i].style.borderBottomColor = color;
	}

	return this;

};


/**
 * Add `f-active` class to active menu item
 */
demo.setActiveItem = function () {

	/**
	 * @return {Array} Sorted array of menu item 'ids'
	 */
	var parsedItems = function () {

		var items = [],
			id, href;

		for (var i = demo.dom.menuItems.length - 1; i >= 0; i--) {

			// remove active class from items
			demo.dom.menuItems[i].classList.remove('f-active');

			// get item href
			href = demo.dom.menuItems[i].getAttribute('href');

			// get id
			if (href.indexOf('#') > -1) {
				id = href.split('#').pop();
			} else {
				id = href.split('/').pop().replace(/\.[^/.]+$/, '');
			}

			items.push(id);

		}

		return items.reverse();

	};


	/**
	 * Match the 'id' in the window location with the menu item, set menu item as active
	 */
	var setActive = function () {

		var href = window.location.href,
			items = parsedItems(),
			id, index;

		// get window 'id'
		if (href.indexOf('#') > -1) {
			id = window.location.hash.replace('#', '');
		} else {
			id = window.location.pathname.split('/').pop().replace(/\.[^/.]+$/, '');
		}

		// find the window id in the items array
		index = (items.indexOf(id) > -1) ? items.indexOf(id) : 0;

		// set the matched item as active
		demo.dom.menuItems[index].classList.add('f-active');

	};

	window.addEventListener('hashchange', setActive);

	setActive();

	return this;

};


/**
 * Click handler to primary menu toggle
 * @return {Object} demo
 */
demo.primaryMenuControls = function () {

	// shortcut menu DOM
	var toggle = demo.dom.menuToggle;

	// toggle classes on certain elements
	var toggleClasses = function () {
		document.querySelector('html').classList.toggle('state--menu-active');
	};

	// toggle classes on click
	toggle.addEventListener('click', function () {
		toggleClasses();
	});

	// close menu when clicking on item (for collapsed menu view)
	var closeMenu = function () {
		toggleClasses();
	};

	for (var i = 0; i < demo.dom.menuItems.length; i++) {
		demo.dom.menuItems[i].addEventListener('click', closeMenu);
	}

	return this;

};


/**
 * Handler for preview and code toggles
 * @return {Object} demo
 */
demo.allItemsToggles = function () {

	var items = {
		details: document.querySelectorAll('[data-f-toggle="details"]'),
		notes: document.querySelectorAll('[data-f-toggle="notes"]'),
		code: document.querySelectorAll('[data-f-toggle="code"]')
	};

	var toggleAllControls = document.querySelectorAll('.f-controls [data-f-toggle-control]');

	var options = (demo.test.localStorage) ? JSON.parse(localStorage.demo) : demo.options;

	// toggle all
	var toggleAllItems = function (type, value) {

		var button = document.querySelector('.f-controls [data-f-toggle-control=' + type + ']'),
			_items = items[type];

		for (var i = 0; i < _items.length; i++) {
			if (value) {
				_items[i].classList.remove('f-item-hidden');
			} else {
				_items[i].classList.add('f-item-hidden');
			}
		}

		// toggle styles
		if (value) {
			button.classList.add('f-active');
		} else {
			button.classList.remove('f-active');
		}

		// update options
		options.toggles[type] = value;

		if (demo.test.localStorage) {
			localStorage.setItem('demo', JSON.stringify(options));
		}

	};

	for (var i = 0; i < toggleAllControls.length; i++) {

		toggleAllControls[i].addEventListener('click', function (e) {

			// extract info from target node
			var type = e.currentTarget.getAttribute('data-f-toggle-control'),
				value = e.currentTarget.className.indexOf('f-active') < 0;

			// toggle the items
			toggleAllItems(type, value);

		});

	}

	// persist toggle options from page to page
	for (var toggle in options.toggles) {
		if (options.toggles.hasOwnProperty(toggle)) {
			toggleAllItems(toggle, options.toggles[toggle]);
		}
	}

	return this;

};


/**
 * Handler for single item code toggling
 */
demo.singleItemToggle = function () {

	var itemToggleSingle = document.querySelectorAll('.f-toggle');

	// toggle single
	var toggleSingleItemCode = function (e) {
		var group = this.parentNode.parentNode.parentNode,
			type = e.currentTarget.getAttribute('data-f-toggle-control');

		group.querySelector('[data-f-toggle=' + type + ']').classList.toggle('f-item-hidden');
	};

	for (var i = 0; i < itemToggleSingle.length; i++) {
		itemToggleSingle[i].addEventListener('click', toggleSingleItemCode);
	}

	return this;

};


/**
 * Automatically select code when code block is clicked
 */
demo.bindCodeAutoSelect = function () {

	var codeBlocks = document.querySelectorAll('.f-item-code');

	var select = function (block) {
		var selection = window.getSelection();
		var range = document.createRange();
		range.selectNodeContents(block.querySelector('code'));
		selection.removeAllRanges();
		selection.addRange(range);
	};

	for (var i = codeBlocks.length - 1; i >= 0; i--) {
		codeBlocks[i].addEventListener('click', select.bind(this, codeBlocks[i]));
	}

};


/**
 * Initialization
 */
(function () {

	// invoke
	demo
		.primaryMenuControls()
		.allItemsToggles()
		.singleItemToggle()
		.buildColorChips()
		.setActiveItem()
		.bindCodeAutoSelect();

	// syntax highlighting
	Prism.highlightAll();

}());
