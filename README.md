# UI-Kit

> Also called style guide

First UI-Kit is forked from Luke Askew's [fabricator](https://github.com/resource/fabricator).

##So how this one different from fabricator?
UI-Kit started as a fork from fabricator and had lots of changes on the way:

1. First of all UIkit is not using handlebars, instead is using great templating tool [nunjucks](http://mozilla.github.io/nunjucks/). Nunjucks is more flexible and unlike handlebars you can change delimiter syntax so you can easily avoid conflicts with other frameworks variable tags (ex. angular: {{variable}})
2. Active UI-Kit and other settings are configurable so you can use multiple UI-Kits for different frameworks (bootstrap, material, zurb foundation, semantic UI etc...)
3. UIKit recursively parses all submodule content and renders them(html, styles, scripts, md), so this way all submodule data is nicely isolated and packed for webpack bundling.
4. UI-Kit is using awesome [webpack](http://webpack.github.io/) as module bundler, so all scripts and assets can be imported at module level.. no injections, no hassle.

##How it works?
1. `npm install && bower install`
2. `gulp`
3. `gulp watch`


## Documentation
No documentation yet.

## Credits

UI-Kit is developed by [Gurus](https://github.com/gurus)

Icons borrowed from [SteadySets](http://dribbble.com/shots/929153-Steady-set-of-icons?list=show) and [Font Awesome](http://fortawesome.github.io/Font-Awesome/).

Code syntax highlighting by [Prism](http://prismjs.com/).

## License

[Copyright (c) 2015 Gurus Tech](https://github.com/gurus)
