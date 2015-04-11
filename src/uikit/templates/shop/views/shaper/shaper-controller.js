(function () {

	'use strict';

	angular.module('shop')
		.controller('shaperController', function () {
			//controller
			this.structure = {
				inputContainer: {
					label: 'NNName',
					input: {
						type: 'text',
						ngModel: 'data.nnname'
					}
				},
				column: [
					{
						inputContainer: {
							label: 'Name',
							input: {
								type: 'text',
								ngModel: 'data.name'
							}
						}
					},
					{
						inputContainer: {
							label: 'Surname',
							input: {
								type: 'text',
								ngModel: 'data.surname'
							}
						}
					}
				],
				lines: {
					title: 'Jobs',
					items: 'jobs',
					repeat: {
						row: [
							{
								inputContainer: {
									label: 'Title',
									input: {
										type: 'text',
										ngModel: 'data.title'
									}
								}
							},
							{
								inputContainer: {
									label: 'Desc',
									input: {
										type: 'text',
										ngModel: 'data.desc'
									}
								}
							}
						],
					}
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