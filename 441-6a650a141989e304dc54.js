(window.webpackJsonp=window.webpackJsonp||[]).push([[441],{1005:function(n,e){},2172:function(n,e,d){"use strict";d.r(e),e.default="ChangeLog\n=========\n\nUnreleased\n----------\n6.26.0 - (February 4, 2020)\n------------------\n### Changed\n* Minor dependency version bump\n\n6.25.0 - (January 28, 2020)\n------------------\n### Changed\n* Update copyright to include 2020\n\n6.24.0 - (January 17, 2020)\n------------------\n### Fixed\n* Overflow issue with icon-only tabs.\n* Reset cache and handle visibility of tabs added/removed post initial mount.\n\n### Changed\n* Replaced uncontrolled `<ResponsiveElement>` with controlled `<ResponsiveElement>`.\n\n6.23.0 - (January 7, 2020)\n------------------\n### Changed\n* Minor dependency version bump\n\n6.22.0 - (December 16, 2019)\n------------------\n### Changed\n* Fixed axe violation for missing roles.\n\n6.21.0 - (December 10, 2019)\n------------------\n### Added\n* Added `responsiveTo` prop to provide ability to consumers to decide whether or not tabs need to completely\ncollapse into a menu on smaller viewports.\n* Added orion-fusion-theme and generated the respective reference wdio screenshots.\n\n### Changed\n* Center-align text label in the single dropdown tab when all tabs completely collapse into a menu.\n\n6.19.0 - (November 20, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n6.18.0 - (November 7, 2019)\n------------------\n### Changed\n* Resolved lint warnings for multiple empty lines\n\n6.17.0 - (October 30, 2019)\n------------------\n### Fixed\n* Fixed accessibility issue in the tabs component.\n\n6.16.0 - (October 21, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n6.15.0 - (October 16, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n6.14.0 - (October 3, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n6.13.0 - (September 26, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n### Fixed\n* Fixed the inconsistent failures of responsive tabs on Travis CI.\n\n6.12.0 - (September 19, 2019)\n------------------\n### Changed\n* Removed `details` tag from doc-site.\n* Doc site example module import syntax modified to use package.json name resolution\n\n### Added\n* Added en-CA translations.\n\n6.11.0 - (September 6, 2019)\n------------------\n### Changed\n* Cleaned up imports in examples and test files\n* Updated `keycode-js` from `v1.0.4` to `v2.0.1`\n\n6.10.0 - (August 21, 2019)\n------------------\n### Changed\n* Replaced Object.assign syntax with Object spread syntax\n\n6.9.0 - (August 14, 2019)\n------------------\n### Fixed\n* Fixed tabs overflowing issue.\n\n### Changed\n* Updated to interface with react-intl's `FormattedMessage` rather than old React Context API.\n* updated package.json test scripts\n\n6.8.0 - (July 30, 2019)\n------------------\n### Removed\n* Removed DEPENDENCIES.md file\n\n3.7.1 - (July 23, 2019)\n------------------\n### Changed\n* Updated DEPENDENCIES.md doc\n\n6.7.0 - (July 23, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n6.6.0 - (July 16, 2019)\n------------------\n### Added\n* Added documentation on required peerDependencies\n\n### Changed\n* Updated wdio screenshots\n\n6.5.0 - (July 10, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n6.4.0 - (July 2, 2019)\n------------------\n### Added\n* Added themeable variable --terra-tabs-font-weight\n* Added themeable variable --terra-tabs-structural-active-font-weight\n\n### Changed\n* Renamed test and example SCSS files to end with `.module.scss` extension\n\n6.3.0 - (June 19, 2019)\n------------------\n### Changed\n* Updated to use terra-responsive-element v5\n\n### Changed\n* Removed all inline styles and implemented the same styles using external css.\n* Update tests for terra-toolkit v5 and terra-dev-site v5 changes\n\n6.2.0 - (June 12, 2019)\n------------------\n### Added\n* box-shadow theme variable for in-active tab: --terra-tabs-structural-box-shadow\n* z-index theme variable for active tab: --terra-tabs-structural-active-z-index\n\n### Removed\n* Removed node_modules from .npmignore\n\n6.1.0 - (May 21, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n6.0.0 - (May 13, 2019)\n------------------\n### Breaking Changes\n* Consume latest major version bump of terra-menu\n\n5.10.0 - (May 7, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n5.9.0 - (April 24, 2019)\n------------------\n### Changed\n* Moved packages we use solely in doc examples and tests to devDependencies\n\n5.8.0 - (April 16, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n5.7.0 - (April 9, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n5.6.0 - (April 2, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n5.5.0 - (March 26, 2019)\n------------------\n### Changed\n* Update react/react-dom peer-dependency to latest stable minor release\n\n### Removed\n* Removed peer dependency on terra-base\n* Removed baseStyles import from terra-base\n\n5.4.0 - (March 20, 2019)\n------------------\n### Changed\n* Update Jest tests to use terra-enzyme-intl\n\n5.3.0 - (March 12, 2019)\n------------------\n### Changed\n* Replaced local keyCode values with keycode-js npm package\n\n5.2.0 - (March 5, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n5.1.0 - (February 26, 2019)\n------------------\n### Added\n* Added en-AU translations\n\n5.0.0 - (February 13, 2019)\n------------------\n### Breaking Change\n* Major dependency version bump of terra-menu\n\n4.5.0 - (February 5, 2019)\n------------------\n### Changed\n* Migrate package to terra-framework repository\n\n4.4.0 - (January 27, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.3.0 - (January 26, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.2.0 - (January 22, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.1.0 - (January 22, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.0.0 - (January 8, 2019)\n------------------\n### Changed\n* Updated theme variables\n\n### Added\n* Bottom border styles collapsed tab edge case\n\n3.31.0 - (January 2, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Fixed\n* Lint Errors\n\n3.30.1 - (November 20, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n3.30.0 - (November 19, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.29.0 - (November 13, 2018)\n------------------\n### Changed\n* Prevent left and right arrow key events from shifting tab focus indication while inside of tab popup menu\n* Minor dependency version bump\n\n3.28.0 - (November 13, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.27.0 - (November 9, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.26.0 - (October 24, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.25.0 - (October 16, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.24.0 - (October 8, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.23.0 - (October 2, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.22.0 - (September 25, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.21.1 - (September 6, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n3.21.0 - (September 5, 2018)\n------------------\n### Changed\n* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2\n* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2\n\n3.20.0 - (September 4, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.19.0 - (August 30, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.18.0 - (August 29, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.17.0 - (August 21, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.16.0 - (August 8, 2018)\n------------------\n### Changed\n* Updated component internationalization error message\n\n3.15.0 - (August 1, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.14.0 - (July 25, 2018)\n------------------\n### Added\n* Add sv and sv-SE translations\n\n3.13.0 - (July 19, 2018)\n------------------\n### Changed\n* Add .module extension to SCSS file(s)\n\n3.12.0 - (July 17, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n* Formatting changes per eslint v4 update\n\n### Fixed\n* Removed usage of CSS `initial` value because Internet Explorer does not support it\n\n3.11.0 - (July 10, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.10.0 - (July 3, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.9.0 - (June 28, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* Added change log to the documentation on terra-dev-site\n\n### Fixed\n* Corrected the 'resize observer loop limit reached' error with animation frames.\n\n3.8.0 - (June 22, 2018)\n------------------\n### Changed\n* Moved terra-base from dependency to peerDependency\n\n3.7.0 - (June 19, 2018)\n------------------\n### Fixed\n* Fixed classNames on Tab Panes not displaying when rendering Tab Panes in Tabs component\n\n3.6.0 - (June 13, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.5.0 - (June 12, 2018)\n------------------\n### Changed\n* Updated \"test:jest\" script to work on windows.\n* Remove Base wrapper from test examples. Terra-dev-site wraps all test examples in Base.\n\n3.4.0 - (May 30, 2018)\n------------------\n### Changed\n* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.\n\n3.3.0 - (May 25, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.2.0 - (May 23, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* New variables for theming\n\n3.1.0 - (May 16, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.0.0 - (May 9, 2018)\n------------------\n### Major Change\n* Updated to use terra-menu v3.0.0\n\n2.8.0 - (May 2, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.7.0 - (April 20, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.6.0 - (April 15, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.5.0 - (April 5, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.4.0 - (March 30, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.3.0 - (March 14, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.2.0 - (March 6, 2018)\n------------------\n### Removed\n* Removed props-table script from package.json\n\n2.1.0 - (February 26, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.0.1 - (February 13, 2018)\n------------------\n### Changed\n* Updated peerDependencies\n\n2.0.0 - (February 12, 2018)\n------------------\n### Changed\n* Updated to use React 16\n\n1.2.0 - (February 1, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.1.0 - (January 18, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.0.0 - (January 5, 2018)\n------------------\n* Initial stable release\n"},2331:function(n,e,d){"use strict";var a=d(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(d(0)),o=a(d(1004)),t=a(d(2172)),i=function(){return r.default.createElement(o.default,{packageName:"terra-tabs",srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/terra-tabs",readme:t.default})};e.default=i}}]);
//# sourceMappingURL=441-6a650a141989e304dc54.js.map