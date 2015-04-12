(function () {

	'use strict';

	angular.module('shop')
		.controller('shaperController', function ($scope) {
			//controller
			this.change = function () {
				this.structure.inputContainer = {
					label: 'NNName',
					input: {
						type: 'text',
						ngModel: 'data.nnname'
					}
				};
				this.structure.paragraph = {
					content: 'paragraph content goes here'
				};
				this.structure.column.push({
					inputContainer: {
						label: 'AAAA',
						input: {
							type: 'text',
							ngModel: 'data.aaaa'
						}
					}
				});
			};
			this.structure = {
				column: [
					{
						inputContainer: {
							label: 'Name',
							input: {
								type: 'text',
								ngModel: 'data.name',
								ngDisabled: 'data.died === true'
							}
						}
					},
					{
						inputContainer: {
							label: 'Surname',
							input: {
								type: 'text',
								ngModel: 'data.surname',
								ngDisabled: 'data.died === true'
							}
						}
					},
					{
						inputContainer: {
							label: 'Died',
							input: {
								type: 'checkbox',
								ngModel: 'data.died'
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
				},
				paragraph: {
					content: 'paragraph content goes here 111'
				}
			};
			this.data = {
				name: 'Emre4',
				surname: 'Terzi',
				died: false,
				jobs: [
					{ title: 'trg', desc: 'Worked with Ersen' },
					{ title: 'gurus', desc: 'Worked with Mali' }
				]
			};
			this.form = {};
		});
})();