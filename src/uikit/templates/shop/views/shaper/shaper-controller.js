(function () {

	'use strict';

	angular.module('shop')
		.controller('shaperController', function ($scope) {
			//controller
			this.changeStructure = function () {
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
			this.changeData = function () {
				this.data = {
					name: 'Emre44',
					surname: 'Terzi44',
					died: true,
					jobs: [
						{ title: 'trg44', desc: 'Worked with Ersen44' },
						{ title: 'gurus44', desc: 'Worked with Mali44' }
					]
				};
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
										ngModel: 'data.title',
										ngDisabled: 'data.died === true'
									}
								}
							},
							{
								inputContainer: {
									label: 'Desc',
									input: {
										type: 'text',
										ngModel: 'data.desc',
										ngDisabled: 'data.died === true'
									}
								}
							}
						]
					}
				},
				paragraph: {
					content: 'paragraph content goes here 111'
				}
			};
			this.data = {
				name: 'Emre',
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