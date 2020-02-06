(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{1005:function(n,e){},2203:function(n,e,d){"use strict";d.r(e),e.default="Changelog\n=========\n\nUnreleased\n----------\n4.21.0 - (February 4, 2020)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.20.0 - (January 28, 2020)\n------------------\n### Changed\n* Update copyright to include 2020\n\n4.19.0 - (January 7, 2020)\n------------------\n### Added\n* Added new WDIO screenshots\n* Fixed background color issue of time components in incomplete `time-input` in Fusion theme.\n\n### Removed\n* Removed yarn reference in docs\n\n4.18.0 - (December 10, 2019)\n------------------\n### Added\n* Added orion-fusion-theme and generated the respective reference wdio screenshots.\n\n### Fixed\n* Fixed background color issue of time components in incomplete `time-input`.\n\n4.17.0 - (November 26, 2019)\n------------------\n### Fixed\n* Fixed eslint error regarding operator-assignment.\n\n4.16.0 - (November 7, 2019)\n------------------\n### Changed\n* Resolved lint warnings for multiple empty lines\n\n4.15.0 - (October 30, 2019)\n------------------\n### Changed\n* Changed 12-hour format appearance for mobile and desktop.\n* Meridiem select on Desktop has been changed to buttons which means that the WebdriverIO reference screenshots (if any) and/or any code in the consumer application that accesses the old meridiem select functionality on the Desktop view need to be updated.\n\n4.14.0 - (October 21, 2019)\n------------------\n### Changed\n* Update Jest snapshots\n\n4.13.0 - (October 16, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n### Added\n* Added `isIncomplete` prop and stylings\n* Added `isInvalid` prop and stylings\n* Added `isInvalidMeridiem` prop\n* Added `required` prop\n\n4.12.0 - (October 3, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n4.11.0 - (September 26, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n4.10.0 - (September 19, 2019)\n------------------\n### Changed\n* Removed `details` tag from doc-site.\n* Doc site example module import syntax modified to use package.json name resolution\n* Fallback the time notation variant to `24-hour` for locales that do not use the `12-hour` notation.\n\n### Added\n* Added en-CA translations.\n\n4.9.0 - (September 6, 2019)\n------------------\n### Changed\n* Cleaned up imports in examples and test files\n* Updated `keycode-js` from `v1.0.4` to `v2.0.1`\n\n4.8.0 - (August 21, 2019)\n------------------\n### Changed\n* Replaced Object.assign syntax with Object spread syntax\n\n### Removed\n* Removed extra calls to hide the caret in inputs (some are still needed because `time-input` explicitly sets a `caret-color`).\n* Removed styles hiding carets on test pages when not running within WDIO\n\n4.7.0 - (August 14, 2019)\n------------------\n### Changed\n* Updated to interface with react-intl's context rather than old React Context API.\n* Removed inline styles from dev site components.\n* Removed Ignore Accessibility condition from wdio tests.\n* Changed help text color to match required contrast ratio.\n* Added documentation on required peerDependencies\n* Updated package.json test scripts\n\n### Fixed\n* Fixed onChange callback triggering twice for values prepended with zero.\n\n4.6.0 - (July 30, 2019)\n------------------\n### Removed\n* Removed DEPENDENCIES.md file\n\n4.5.0 - (July 16, 2019)\n------------------\n### Added\n* Added documentation on required peerDependencies\n* Added the ability to have an input field for seconds.\n\n4.4.0 - (July 10, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.3.0 - (July 2, 2019)\n------------------\n### Changed\n* Changed help text color to match required contrast ratio.\n* Renamed test and example SCSS files to end with `.module.scss` extension\n\n4.2.0 - (June 19, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.1.0 - (June 12, 2019)\n------------------\n### Changed\n* Removed all inline styles and implemented the same styles using external css.\n* Update tests for terra-toolkit v5 and terra-dev-site v5 changes\n* Update wdio specs to use Terra.describeViewports\n\n### Removed\n* Removed node_modules from .npmignore\n\n4.0.0 - (May 13, 2019)\n------------------\n### Breaking Changes\n* Changed the onBlur event to get triggered only when the entire time input component loses focus.\n* Removed the 'onInputFocus' custom prop in favor of the first-class 'onFocus' prop.\n\n### Changed\n* Updated upgrade guide.\n\n### Added\n* Added 'onFocus' prop.\n\n3.7.0 - (April 24, 2019)\n------------------\n### Changed\n* Replaced string \"12-hour\" with TimeUtil.FORMAT_12_HOUR in terra dev-site examples\n* Moved packages we use solely in doc examples and tests to devDependencies\n\n3.6.0 - (March 26, 2019)\n------------------\n### Changed\n* Update react/react-dom peer-dependency to latest stable minor release\n\n### Removed\n* Removed peer dependency on terra-base\n* Removed baseStyles import from terra-base\n\n3.5.0 - (March 20, 2019)\n------------------\n### Changed\n* Update Jest tests to use terra-enzyme-intl\n\n3.4.0 - (March 12, 2019)\n------------------\n### Changed\n* Replaced local keyCode values with keycode-js npm package\n\n3.3.0 - (March 5, 2019)\n------------------\n### Fixed\n* Updated failing wdio test selector due to aria-pressed prop changes\n\n3.2.0 - (February 26, 2019)\n------------------\n### Added\n* Added en-AU translations\n\n### Fixed\n* Changed browser.execute function in wdio spec to be a string for IE and FF driver compatibility\n\n3.1.0 - (February 5, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n3.0.0 - (January 25, 2019)\n------------------\n### Breaking Change\n* Updated variable names to match new naming standard\n* Added new variables for css theming\n* Removed variables for css theming\n* Updated terra-core dependencies\n\n2.36.0 - (January 5, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n2.35.0 - (January 2, 2019)\n------------------\n### Changed\n* Removed use of componentWillMount from examples\n* Removed use of componentWillReceiveProps\n* Migrate package to the terra-framework repository\n\n### Added\n* Aria labels for meridiem display and select\n\n2.34.1 - (November 20, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n2.34.0 - (November 19, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.33.0 - (November 13, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.32.0 - (November 9, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.31.0 - (October 24, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.30.0 - (October 16, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.29.0 - (October 8, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.28.0 - (October 2, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.27.0 - (September 25, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.26.1 - (September 6, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n2.26.0 - (September 5, 2018)\n------------------\n### Changed\n* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2\n* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2\n\n2.25.0 - (September 4, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n* Border radius to use px\n\n2.24.0 - (August 29, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.23.0 - (August 21, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.22.0 - (August 8, 2018)\n------------------\n### Changed\n* Updated component internationalization error message\n\n2.21.0 - (August 1, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.20.0 - (July 25, 2018)\n------------------\n### Added\n* Add sv and sv-SE translations\n\n2.19.0 - (July 19, 2018)\n------------------\n### Changed\n* Add .module extension to SCSS file(s)\n* Replace legacy Input with the new terra-form-input package\n* Give desktop time input the same styles as terra-form-input.\n\n2.18.0 - (July 17, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n* Formatting changes per eslint v4 update\n\n2.17.0 - (July 10, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Fixed\n* Prevent modification of passed in attribute props.\n\n2.16.0 - (June 28, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* Added change log to the documentation on terra-dev-site\n\n2.15.0 - (June 22, 2018)\n------------------\n### Changed\n* Moved terra-base from dependency to peerDependency\n\n2.14.0 - (June 12, 2018)\n------------------\n### Fixed\n* Prevent focus events from causing runtime errors\n\n### Changed\n* Updated \"test:jest\" script to work on windows.\n* Remove Base wrapper from test examples. Terra-dev-site wraps all test examples in Base.\n\n2.13.0 - (May 30, 2018)\n------------------\n### Changed\n* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.\n\n2.12.0 - (May 25, 2018)\n------------------\n### Changed\n* Replaced nightwatch tests with wdio\n\n2.11.0 - (May 23, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.10.0 - (May 16, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.9.0 - (May 9, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.8.0 - (May 2, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.7.0 - (April 20, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.6.0 - (April 15, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.5.0 - (April 5, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.4.0 - (March 30, 2018)\n------------------\n### Fixed\n* Add missing eslint-disable-next-line no-console\n\n2.3.0 - (March 14, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.2.0 - (March 6, 2018)\n------------------\n### Removed\n* Removed props-table script from package.json\n\n2.1.0 - (February 26, 2018)\n------------------\n### Added\n* Translations for other locales\n\n2.0.1 - (February 13, 2018)\n------------------\n### Changed\n* Updated peerDependencies\n\n2.0.0 - (February 12, 2018)\n------------------\n### Changed\n* Updated to use React 16\n* Uplifted component to use terra-button v2\n\n### Added\n* Added disabled prop\n\n1.18.0 - (February 1, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.17.0 - (January 18, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.16.0 - (January 5, 2018)\n------------------\n### Added\n* Added variant prop to all for setting of 12 hour time input.\n* Added support for theming.\n* Added mobile only time input.\n\n### Changed\n* Turned placeholders into i18n Translations\n* Updated tests to use aria-pressed instead of aria-selected for button group\n\n1.15.0 - (November 28, 2017)\n------------------\n### Changed\n* Removed onInputFocus prop and pass it down as a custom prop.\n\n1.14.0 - (November 16, 2017)\n------------------\n### Added\n* Added onInputFocus prop.\n\n1.13.0 - (October 24, 2017)\n------------------\n### Added\n* Added onBlur prop.\n\n1.12.0 - (October 6, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.11.0 - (September 26, 2017)\n------------------\n### Removed\n* Remove stylelint-disable selector-class-pattern\n\n1.10.0 - (September 19, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.9.0 - (September 12, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.8.0 - (September 7, 2017)\n------------------\n### Fixed\n* Focus management issue between hour and time input in Firefox.\n* Border styling\n* Input bidirectionality\n\n1.7.0 - (September 5, 2017)\n------------------\n### Changed\n* Update nightwatch tests and test scripts.\n\n1.6.0 - (August 31, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n\n1.5.0 - (August 15, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.4.0 - (August 8, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.3.0 - (August 1, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.2.0 - (July 26, 2017)\n------------------\n### Fixed\n* Fixed onChange callback to occur for onBlur or onKeyDown\n\n1.1.0 - (July 18, 2017)\n------------------\n### Changed\n* Converted component to use CSS modules\n* Updated nightwatch test scripts\n\n### Removed\n* Removed nightwatch.config file\n\n### Fixed\n* Updated package.json to use rimraf\n\n1.0.0 - (June 28, 2017)\n------------------\nInitial stable release\n"},2337:function(n,e,d){"use strict";var t=d(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(d(0)),r=t(d(1004)),a=t(d(2203)),i=function(){return o.default.createElement(r.default,{packageName:"terra-time-input",srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/terra-time-input",readme:a.default})};e.default=i}}]);
//# sourceMappingURL=449-4f8ba20606ba9592975a.js.map