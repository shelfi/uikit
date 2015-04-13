(function () {

	'use strict';

	angular.module('shop')
		.provider('sfShaper', [function () {
			this.$get = ['$templateCache', function ($templateCache) {
				return {
					getTemplate: function (key) {
						var tmpl = $templateCache.get(key);
						if(!tmpl) {
							//http://stackoverflow.com/questions/15458876/check-if-a-string-is-html-or-not
							//if (key.indexOf('<') !== -1) {
							if (/<[a-z][\s\S]*>/i.test(key)) {
								return key;
							}
							throw 'Error: Template not found! Template name: ' + key;
						}
						return tmpl;
					},
					get11: function (stKey, stVal) {
						//console.log('***********************************');
						//console.log(stKey, stVal);
						if(!angular.isObject(stVal) || stKey === 'input') {
							return '';
						}
						
						var template = this.getTemplate(stKey);

						Object.keys(stVal).forEach(function (k) {
							var v = stVal[k];
							if(v && angular.isObject(v)) {
								
								//console.log(k);

								//http://www.javascriptkit.com/javatutors/redev2.shtml
								//http://www.javascriptkit.com/javatutors/redev3.shtml
								var re = new RegExp('\\{\\{\\s?structure\\.' + k + '\\s?\\}\\}', 'gi');
								//var re = new RegExp('\\{\\{\\s?' + k + '\\s?\\}\\}', 'gi');
								//var re = /\{\{\s?structure\.(.*)\s?\}\}/gi;
								
								//console.log(k, v, re);

								if(k === 'input') {
									//console.log('v', v);
									//TODO:item attach etmeden yapamaz miyiz?
									//template = template.replace(re, '<div sf-input attrs="structure.input" ng-model="data" item="item" form="form"></div>');

									if(angular.isArray(v)) {
										var t = '';
										angular.forEach(v, function (arrVal, index) {
											t += '<sf-input attrs="structure.input[' + index + ']" ng-model="data" item="item" form="form"></sf-input>';
										});
										template = template.replace(re, t);
									}
									else {
										template = template.replace(re, '<sf-input attrs="structure.input" ng-model="data" item="item" form="form"></sf-input>');
									}
								}
								else {
									//console.log('re', template);
									template = template.replace(re, '<sf-shaper structure="structure" ng-model="data" form="form"></sf-shaper>');
									//template = template.replace(re, 'emre-' + k);
								}
							}
						});
						//console.log(template);
						return template;
					}
				};
			}];
		}])
		.directive('sfShaper', function ($compile, sfShaper) {
			return {
				restrict: 'E',
				scope: {
					structure: '=',
					data: '=ngModel',
					form: '=',
					live: '@'
				},
				link: function (scope, element, attrs) {
					var compileTemplate = function (key, val) {
						if (!angular.isObject(val)) {
							//console.log('returned', key, val);
							return;
						}
						//console.log('------------------');
						//console.log(key, val, scope);
						var template = sfShaper.getTemplate(key);
						var childScope = scope.$new(true);
						angular.forEach(val, function (scopeVal, scopeKey) {
							childScope[scopeKey] = scopeVal;
						});
						childScope.structure = val;
						childScope.data = scope.data;
						scope.$watch('data', function (v) {
							childScope.data = v;
						}, true);
						childScope.form = scope.form;
						if (key === 'lines') {
							childScope.add = function () {
								childScope.data[val.items].push({});
							};
							childScope.removeAll = function () {
								childScope.data[val.items] = [];
							};
							childScope.remove = function (index) {
								childScope.data[val.items].splice(index, 1);
							};
						}
						var el = angular.element(template);
						element.append(el);
						$compile(el)(childScope);
						//console.log('------------------');
						//console.log('renderrr');
						//console.log(template);
						//console.log(childScope);
					};
					var render = function () {
						element.html('');
						//console.log('====================');
						//console.log(scope.structure);
						angular.forEach(scope.structure, function (structureVal, structureKey) {
							//console.log('------------------------');
							//console.log(structureKey, structureVal);
							if (angular.isArray(structureVal) && structureKey !== 'row' && structureKey !== 'column') {
								angular.forEach(structureVal, function (arrayVal) {
									compileTemplate(structureKey, arrayVal);
								});
							}
							else {
								compileTemplate(structureKey, structureVal);
							}
						});
					};
					/*
					if (!scope.data) {
						scope.data = scope.$parent.data;
					}
					if (!scope.form) {
						scope.form = scope.$parent.form;
					}
					*/
					if (!scope.live) {
						scope.live = 'false';
					}
					if (scope.live === 'true') {
						scope.$watch('structure', function (val) {
							render();
						}, true);
					}
					else {
						render();
					}
				}
			};
		})



		.provider('sfInput', function () {
			var input = {
				text: '<input type="text">',
				hidden: '<input type="hidden">',
				password: '<input type="password">',
				checkbox: '<input type="checkbox">',
				file: '<input type="file">',
				email: '<input type="email">',
				date: '<input type="date">',
				datetime: '<input type="datetime">',
				datetimeLocal: '<input type="datetime-local">',
				month: '<input type="month">',
				number: '<input type="number">',
				range: '<input type="range">',
				search: '<input type="search">',
				tel: '<input type="tel">',
				time: '<input type="time">',
				url: '<input type="url">',
				week: '<input type="week">',
				color: '<input type="color">',

				textarea: '<textarea></textarea>',
				radio: '<input type="radio">',
				select: '<select></select>',

				hidden1: '<input type="hidden">',
				hidden2: '<input type="hidden">',
				hidden3: '<input type="hidden">',
				hidden4: '<input type="hidden">'
			};

			this.add = function (name, template) {
				input[name] = template;
			};

			this.$get = function () {
				return {
					getTemplate: function (name) {
						if (!input[name]) {
							throw 'Error: Input not found! Input name: ' + name;
						}
						return input[name];
					},
					getElement: function (attrs) {
						var t = this.getTemplate(attrs.type);
						var c = angular.element('<div />');
						var e = angular.element(t);
						angular.forEach(attrs, function (val, key) {
							if (['type', 'multi'].indexOf(key) === -1) {
								//camelCase to hyphen-case
								//http://stackoverflow.com/questions/8955533/javascript-jquery-split-camelcase-string-and-add-hyphen-rather-than-space
								//http://stackoverflow.com/questions/3673138/javascript-regex-camel-to-file-case
								//str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase()
								e.attr(key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), val);
							}
						});
						c.append(e);
						if (attrs.validationTexts) {
							angular.forEach(attrs.validationTexts, function (val, key) {
								//console.log(key, val);
								var code = angular.element('<code />');
								code.attr('ng-show', 'form.' + attrs.name + '.$error.' + key);
								code.html('{{ "' + val + '" }}');
								//code.html('{{ "' + val + '" | translate }}');
								c.append(code);
							});
						}
						return {
							multi: false,
							element: c.children()
						};
					}
				};
			};
		})
		.directive('sfInput', function ($compile, sfInput) {
			return {
				restrict: 'E',
				scope: {
					attrs: '=',
					data: '=ngModel',
					form: '='
				},
				link: function (scope, element) {
					/*
					if (!scope.data) {
						scope.data = scope.$parent.data;
					}
					if (!scope.form) {
						scope.form = scope.$parent.form;
					}
					*/
					var input = sfInput.getElement(scope.attrs);
					element.replaceWith(input.element);
					$compile(input.element)(scope);
				}
			};
		});
})();