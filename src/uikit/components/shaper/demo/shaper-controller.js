(function(){

	'use strict';

	angular.module('uikit.components.shaper')

		.controller('shaperCtrl', function () {

			this.changeStructure = function () {
				this.structure.row[this.structure.row.length - 1].paragraph.content = 'paragraph content goes here';
				this.structure.row.push({
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
						{ title: 'akdeniz', desc: 'Worked with Dr44' },
						{ title: 'trg44', desc: 'Worked with Ersen44' },
						{ title: 'gurus44', desc: 'Worked with Mali44' }
					]
				};
			};
			this.structure = {
				row: [
					{
						inputContainer: {
							label: 'Name',
							input: {
								type: 'text',
								name: 'name',
								ngModel: 'data.name',
								ngDisabled: 'data.died === true',
								required: 'required',
								validationTexts: {
									required : 'Name is required. Please fill the input.'
								}
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
					},
					{
						lines: {
							title: 'Jobs',
							items: 'jobs',
							repeat: {
								column: [
									{
										//flex: 35,
										inputContainer: {
											label: 'Title',
											input: {
												type: 'text',
												//ngModel: 'data.jobs[$index].title',
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
												//ngModel: 'data.jobs[$index].desc',
												ngModel: 'data.desc',
												ngDisabled: 'data.died === true'
											}
										}
									},
									{
										'<md-button aria-label="Remove" ng-click="ngClick($parent)"><md-icon md-svg-icon="navigation:ic_close_24px"></md-icon></md-button>': {
											ngClick: function (parentScope) {
												//console.log('Remove button clicked!');
												//console.log(parentScope);
												//console.log(parentScope.$parent);
												//console.log(parentScope.$parent.$parent);
												//console.log(parentScope.$parent.$parent.$parent);
												//console.log(parentScope.$parent.$parent.$parent.$parent);
												//console.log(parentScope.$parent.$parent.$parent.$parent.$parent);
												var list = parentScope.$parent.$parent.$parent.$parent;
												list.$parent.remove(list.$index);
											}
										}
									}
								]
							}
						}
					},
					{
						paragraph: {
							content: 'paragraph content goes here 111'
						}
					}
				]
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
		});

})();