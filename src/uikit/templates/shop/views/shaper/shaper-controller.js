(function () {

	'use strict';

	angular.module('shop')
		.controller('shaperController', function () {
			//controller
			this.structure = {
				row: [
					{
						label: 'Name',
						input: {
							type: 'text',
							ngModel: 'data.name'
						} 
					},
					{
						label: 'Surname',
						input: {
							type: 'text',
							ngModel: 'data.surname'
						}
					}
				],
				lines: {
					items: 'jobs',
					input: [
						{
							type: 'text',
							ngModel: 'item.title'
						},
						{
							type: 'text',
							ngModel: 'item.desc'
						}
					]
				}
			};
			this.data = {
				name: 'Emre4',
				surname: 'Terzi',
				jobs: [
					{ title: 'trg', desc: 'Worked with Ersen' },
					{ title: 'gurus', desc: 'Worked with Mali' }
				]
			};
			this.form = {};
		});
})();