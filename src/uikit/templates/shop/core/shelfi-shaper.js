(function () {

	'use strict';

	angular.module('shop')
		.provider('sfShaper', [function () {
			//shaper
			/*
			var options = {
				templateRoot: '/bower_components/sf-core/templates'
			};

			var templates = {};

			var convertToElement = function (html) {
				return angular.element(html);
			};

			var convertToHtml = function (e) {
				return angular.element('<div />').append(e).html();
			};

			this.addTemplate = function (key, template) {
				templates[key] = template;
				//$templateCache.put('sfShaper_' + key, template);
			};
			*/

			/*
			this.addTemplateFromURL = function (key, url) {
				$http({method: 'GET', url: url}).then(function(result) {
					templates[key] = result.data;
				});
			};
			*/
			this.$get = ['$templateCache', function ($templateCache) {
				return {
					getTemplate: function (key) {
						//console.log('getTemplate', key);
						//var tmpl = $templateCache.get('sfShaper_' + key);
						var tmpl = $templateCache.get(key);
						if(!tmpl) {
							throw 'Error: Template not found! Template name: ' + key;
						}
						return tmpl;
						/*
						if(!templates[key]) {
							throw 'Error: Template not found! Template name: ' + key;
							//return '';
						}
						return templates[key];
						*/
						/*
						var deferred = $.defer();
						var tmpl = $templateCache.get('sfShaper_' + key);
						if(!tmpl) {
							//camelCase to hyphen-case
							//http://stackoverflow.com/questions/8955533/javascript-jquery-split-camelcase-string-and-add-hyphen-rather-than-space
							//http://stackoverflow.com/questions/3673138/javascript-regex-camel-to-file-case
							//str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase()
							var fileName = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
							var url = options.templateRoot + '/' + fileName + '.html';
							$http({method: 'GET', url: url}).success(function(result) {
								$templateCache.put('sfShaper_' + key, result.data);
								deferred.resolve(result.data);
							}).error(function() {
								//throw 'Error: Template not found! Template name: ' + key;
								deferred.reject('Error: Template not found! Template name: ' + key);
							});
						}
						else {
							//return templates[key];
							$timeout(function() {
								deferred.resolve(tmpl);
							}, 10);
						}
						return deferred.promise;
						*/
					},
					get: function (stKey, stVal) {
						
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
		.directive('sfShaper', function ($compile, $http, sfShaper) {
			return {
				restrict: 'E',
				require: 'ngModel',
				scope: {
					structure: '=',
					data: '=ngModel',
					form: '='
				},
				link: function (scope, element, attrs) {

					var render = function () {
						
						element.html('');

						//console.log('-------------------');
						//console.log(scope.structure);

						angular.forEach(scope.structure, function (val, key) {

							//console.log(key, val);
							if (key === '$$hashKey') return;

							if(angular.isArray(val) && key !== 'row' && key !== 'column') {

								angular.forEach(val, function (arrVal, index) {

									//console.log(key, arrVal, index);

									var html = sfShaper.get(key, arrVal);
									var childScope = scope.$new(true);
									//childScope.global = {};
									//childScope.global.service = globalService;
									childScope.structure = scope.structure[key][index];
									childScope.data = scope.data;
									childScope.form = scope.form;
									//console.log('------------------');
									//console.log('renderrr');
									//console.log(html);
									//console.log(childScope);
									element.append(html);
									$compile(element.contents(':last'))(childScope);
								});
							}
							else {
								//console.log('asd', key, scope.structure);
								var html = sfShaper.get(key, val);
								var childScope = scope.$new(true);
								//childScope.global = {};
								//childScope.global.service = globalService;
								childScope.structure = scope.structure[key];
								childScope.data = scope.data;
								childScope.form = scope.form;
								//console.log('------------------');
								//console.log('renderrr');
								//console.log(html);
								//console.log(childScope);
								element.append(html);
								$compile(element.contents(':last'))(childScope);
							}
						});

						/*
						var html = '';
						angular.forEach(scope.structure, function (val, key) {
							console.log(key);
							html += sfShaper.get(key, val);
						});
						element.html(html);
						$compile(element.contents())(scope);
						*/
					};
					/*
					if(angular.isString(scope.structure)) {
						var url = scope.structure;
						$http({method: 'GET', url: url}).then(function (result) {
							scope.structure = result.data;
							render();
						});
						return;
					}
					*/
					render();
				}
			};
		})
		.directive('sfInput', function ($compile, $parse, languageService, currencyService) {

			var getTemplate = function (a) {

				var attrs = angular.copy(a);

				if(attrs.multi) {

					/*
					if (typeof attrs.id === 'undefined') {
						throw new Error('Error: id attribute not defined!');
						//throw new Error($translate.instant('multi.error', { attribute: 'id'}));
					}
					*/

					if (typeof attrs.name === 'undefined') {
						throw new Error('Error: name attribute not defined!');
						//throw new Error($translate.instant('multi.error', { attribute: 'name'}));
					}

					if (typeof attrs.ngModel === 'undefined') {
						throw new Error('Error: ngModel attribute not defined!');
						//throw new Error($translate.instant('multi.error', { attribute: 'ngModel'}));
					}

					var multiKey = attrs.multi;
					
					//remove init & multi attributes
					delete attrs.init;
					delete attrs.multi;

					var input = angular.extend({}, attrs, {
						//id: attrs.id + '-{{item._id}}',
						name: attrs.name + '-{{item._id}}',
						//ngModel: attrs.ngModel + '[multi.getIndex(' + attrs.ngModel + ', \'' + multiKey + '\', item._id)].value',
						ngModel: attrs.ngModel + '[item._id]',
						ngRepeat: 'item in $root.global.' + multiKey + '.items',
						ngShow: '$root.global.' + multiKey + '.items[0] == item'
					});

					var inputModal = angular.extend({}, attrs, {
						//id: attrs.id + '-{{item._id}}-modal',
						name: attrs.name + '-{{item._id}}-modal',
						ngModel: attrs.ngModel + '[item._id]'
						//ngModel: attrs.ngModel + '[multi.getIndex(' + attrs.ngModel + ', \'' + multiKey + '\', item._id)].value'
					});

					var structure = {
						sfAdminMulti: {
							//id: attrs.id,
							key: multiKey,
							title: 'title',
							input: input,
							sfAdminMultiContent: {
								key: multiKey,
								input: inputModal
							}
						}
					};
					return {
						multi: true,
						template: '<div sf-shaper structure="structure" ng-model="data" form="form"></div>',
						structure: structure
					};
				}
				/*
				<input type="hidden" class="form-control" id="{{element.name}}" name="{{element.name}}" ng-model="data[element.value]">
				<input type="text" class="form-control" id="{{element.name}}" name="{{element.name}}" ng-model="data[element.value]">
				<input type="email" class="form-control" id="{{element.name}}" name="{{element.name}}" ng-model="element.value">
				<input type="password" class="form-control" id="{{element.name}}" name="{{element.name}}" ng-model="element.value">
				<input type="file" class="form-control" id="{{element.name}}" name="{{element.name}}" ng-model="element.value">
				<input type="date" class="form-control" id="{{element.name}}" name="{{element.name}}" ng-model="element.value">
				<input type="checkbox" class="form-control" id="{{element.name}}" name="{{element.name}}" ng-model="element.value">
				<textarea class="form-control" id="{{element.name}}" name="{{element.name}}" ng-model="element.value"></textarea>
				<input type="radio" name="{{element.name}}" ng-repeat="o in element.options" value="{{o.value}}" ng-selected="element.value == o.value"><span>{{o.text}}</span>
				<select class="form-control input-sm" id="{{element.name}}" name="{{element.name}}" ng-model="element.value">
					<option ng-repeat="o in ' + (scope.element.variable ? scope.element.variable.options : 'element.options') + '" value="{{o.' + (scope.element.variable ? scope.element.variable.value : 'value') + '}}" ng-selected="element.value == o.' + (scope.element.variable ? scope.element.variable.value : 'value') + '">{{o.' + (scope.element.variable ? scope.element.variable.text : 'text') + '}}</option>
				</select>
				<text-angular ta-toolbar-button-class="btn btn-sm btn-default" id="{{element.name}}" name="{{element.name}}" ng-model="data[element.value]"></text-angular>
				*/
				var standardElement = ['hidden', 'text', 'password', 'checkbox', 'file', 'radio', 'email', 'date', 'datetime', 'datetime-local', 'month', 'number', 'range', 'search', 'tel', 'time', 'url', 'week', 'color'];
				var prohibitedAttr = ['type', 'variable', 'multi'];
				var template = '';

				if(attrs.type === 'textarea') {
					template = '<textarea></textarea>';
				}
				else if(attrs.type === 'select') {
					template = '' + 
						'<select>' + 
							'<option ng-repeat="o in ' + (attrs.variable ? attrs.variable.options : 'attrs.options') + '" value="{{o.' + (attrs.variable ? attrs.variable.value : 'value') + '}}" ng-selected="attrs.value == o.' + (attrs.variable ? attrs.variable.value : 'value') + '">{{o.' + (attrs.variable ? attrs.variable.text : 'text') + '}}</option>' + 
						'</select>';
				}
				else if(attrs.type === 'radio') {
					template = '<input type="radio" ng-repeat="o in element.options" value="{{o.value}}" ng-selected="element.value == o.value"><span>{{o.text}}</span>';
				}
				else if(attrs.type === 'text-angular') {
					template = '<text-angular></text-angular>';
				}
				else if(attrs.type === 'toggle-switch') {
					template = '<toggle-switch></toggle-switch>';
				}
				else if(standardElement.indexOf(attrs.type) > -1) {
					template = '<input type="' + attrs.type + '">';
				}
				else {
					throw 'Error: Invalid element type!';
				}

				var e = angular.element(template);
				var c = angular.element('<div />');

				angular.forEach(attrs, function (val, key) {

					if (prohibitedAttr.indexOf(key) === -1) {
						//camelCase to hyphen-case
						//http://stackoverflow.com/questions/8955533/javascript-jquery-split-camelcase-string-and-add-hyphen-rather-than-space
						//http://stackoverflow.com/questions/3673138/javascript-regex-camel-to-file-case
						//str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase()

						//use angular translate in sf-shaper structure
						//console.log(val);
						//console.log(val.indexOf('!!') === 0 ? '{{ \'' + val + '\' | translate }}' : val);

						//e.attr(key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), val.indexOf('!!') === 0 ? '{{ \'' + val.replace('!!', '') + '\' | translate }}' : val);
						e.attr(key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), val);
					
						// Validation
						// http://www.yearofmoo.com/2014/09/taming-forms-in-angularjs-1-3.html
						// <p class="text-warning" ng-if="structure.input.required && form[structure.input.name].$invalid && form[structure.input.name].$dirty">Lutfen asagidaki onergelere gore girdiginiz veriyi kontrol edin!</p>
						// <div ng-messages="form[structure.input.name].$error">
						// 	   <div ng-message="required">...</div>
						// 	   <div ng-message="minlength">...</div>
						// 	   <div ng-message="pattern">...</div>
						// </div>


						//<code ng-if="structure.input.required && form[structure.input.name].$error.required && form[structure.input.name].$dirty">Veri girilmeli!</code>
						//<code ng-if="structure.input.minlength && form[structure.input.name].$error.minlength">Uzunluk asgari {{ structure.input.minlength }} karakter olmali!</code>
						//<code ng-if="structure.input.maxlength && form[structure.input.name].$error.maxlength">Uzunluk azami {{ structure.input.maxlength }} karakter olmali!</code>
						//<code ng-if="structure.input.min && form[structure.input.name].$error.min">Girilen sayi en az {{ structure.input.min }} olmali!</code>
						//<code ng-if="structure.input.max && form[structure.input.name].$error.max">Girilen sayi en fazla {{ structure.input.max }} olmali!</code>
						//<code ng-if="structure.input.pattern && form[structure.input.name].$error.pattern">Desen {{ structure.input.pattern }} seklinde olmali!</code>	
						var validationAttributes = ['required', 'minlength', 'maxlength', 'min', 'max', 'pattern'];
						if (validationAttributes.indexOf(key) > -1) {
							c.append('<code ng-show="form.' + attrs.name + '.$error.' + key + '">{{ "validations.' + key + '" | translate:"{ ' + key + ': \'' + val + '\'}" }}</code>');
						}
					}
				});

				if(attrs.type === 'file') {
					e.attr('sf-file-uploader-dummy', '');
				}

				var standardValidationElements = ['email', 'url', 'number', 'date', 'time', 'datetime-local', 'week', 'month'];
				if (standardValidationElements.indexOf(attrs.type) > -1) {
					c.append('<code ng-show="form.' + attrs.name + '.$error.' + attrs.type.replace('-', '') + '">{{ "validations.' + attrs.type.replace('-', '') + '" | translate }}</code>');
				}

				c.prepend(e);

				return {
					multi: false,
					template: c.html()
					//template: angular.element('<div />').append(c).html()
					//template: angular.element('<div />').append(e).html()
				};
			};
			
			return {
				restrict: 'E',
				require: 'ngModel',
				scope: {
					attrs: '=',
					data: '=ngModel',
					item: '='//,
					//sfForm: '='
				},
				link: function(scope, element) {

					//scope.global = {};
					//scope.global = globalService;
					
					var t = getTemplate(scope.attrs);

					//console.log('-------------------------------');
					//console.log(t);

					if(t.multi) {
						scope.structure = t.structure;
						/*
						if(typeof scope.$eval(scope.attrs.ngModel) === 'undefined') {
							
							//console.log(scope.attrs.ngModel, '-', scope.$eval(scope.attrs.ngModel));

							var model = $parse(scope.attrs.ngModel);
							//model.assign(scope, []);

							//console.log('bos');
							//scope.$apply();
						}
						*/
					}

					
					var el = angular.element(t.template);
					element.replaceWith(el);
					$compile(el)(scope);
					//element.html(t.template);
					//$compile(element.contents())(scope);




					var debug = false;
					if(debug) {
						scope.$watch('attrs', function () {




							var t = getTemplate(scope.attrs);
							if(t.structure) {
								scope.structure = t.structure;

								if(typeof scope.$eval(scope.attrs.ngModel) === 'undefined') {
									var model = $parse(scope.attrs.ngModel);
									model.assign(scope, []);
									//scope.$apply();
								}
							}

							/*
							if(scope.attrs.type === 'text' && scope.attrs.name === 'name') {

								console.log(t.template);
								console.log(scope);
							}
							*/

							element.html(t.template);
							$compile(element.contents())(scope);

							/*
							var t = getTemplate(scope.attrs);

							console.log(t);

							if(t.structure) {
								scope.structure = structure;
								console.log('structure', structure);
							}

							if(scope.attrs.multi) {

								//scope.global = {};
								//scope.global.service = globalService;
							}

							element.html(t.template);
							$compile(element.contents())(scope);
							*/
						});
					}




				}
			};
		});
})();