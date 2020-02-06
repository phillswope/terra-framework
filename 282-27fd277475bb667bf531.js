(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{1005:function(t,e){},2069:function(t,e,n){"use strict";n.r(e),e.default="# Terra Navigation Prompt - Implementation Guide\n\n## Part 3 - Implementing a Custom Prompt Solution\n\nAt this point, we realize that we do not want to **ever** allow users to navigate away from a Form with unsaved state. We can do that by using the NavigationPromptCheckpoint's `onPromptChange` prop.\n\n```diff\n- import React, { useState, useRef } from 'react';\n+ import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n+ const [activePrompts, setActivePrompts] = useState([]);\n\n  function onSwitchForm(formKey) {\n-   formCheckpointRef.current.resolvePrompts({\n-     title: 'Descriptive Notification Prompt Title',\n-     startMessage: 'Descriptive Notification Prompt Message',\n-     rejectButtonText: `Descriptive Reject Button Action`,\n-     acceptButtonText: 'Descriptive Accept Button Action',\n-     buttonOrder: 'acceptFirst',\n-   }).then(() => {\n      setActiveForm(formKey);\n-   });\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n-     <p>The user will be prompted with the provided messaging when Forms are switched with unsaved changes present.</p>\n+     <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>\n      <button\n        type=\"button\"\n-       disabled={activeForm === 'Form 1'}\n+       disabled={activeForm === 'Form 1' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n-       disabled={activeForm === 'Form 2'}\n+       disabled={activeForm === 'Form 2' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <NavigationPromptCheckpoint\n-       ref={formCheckpointRef}\n+       onPromptChange={(prompts) => {\n+         setActivePrompts(prompts);\n+       }}\n      >\n        <Form title={activeForm} key={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n```\n\nWe remove the `ref` from the NavigationPromptCheckpoint and instead implement `onPromptChange` to store the currently rendered NavigationPrompt's in the FormSwitcher's state. We disable the 'Switch to' buttons altogether if a NavigationPrompt is detected. We could also use this state to control other navigation-capable components, like client-side routers.\n"},2070:function(t,e,n){"use strict";var o=n(16),r=n(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(94)),i=o(n(0)),p=r(n(2)),m=o(n(375)),l=function(t){var e=t.title,n=t.ariaLabel,o=(0,i.useState)(""),r=(0,a.default)(o,2),p=r[0],l=r[1];return i.default.createElement("div",null,i.default.createElement("p",null,e),p.length?i.default.createElement(m.default,{description:e}):void 0,i.default.createElement("input",{type:"text","aria-label":n,onChange:function(t){l(t.target.value)},value:p}),i.default.createElement("button",{type:"button",onClick:function(){l("")}},"Submit"))};l.propTypes={title:p.default.string,ariaLabel:p.default.string};var u=function(){var t=(0,i.useState)("Form 1"),e=(0,a.default)(t,2),n=e[0],o=e[1],r=(0,i.useState)([]),p=(0,a.default)(r,2),u=p[0],c=p[1];function s(t){o(t)}return i.default.createElement("div",null,i.default.createElement("h2",null,"Form Switcher"),i.default.createElement("p",null,"Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present."),i.default.createElement("button",{type:"button",disabled:"Form 1"===n||u.length,onClick:s.bind(null,"Form 1")},"Switch to Form 1"),i.default.createElement("button",{type:"button",disabled:"Form 2"===n||u.length,onClick:s.bind(null,"Form 2")},"Switch to Form 2"),i.default.createElement(m.NavigationPromptCheckpoint,{onPromptChange:function(t){c(t)}},i.default.createElement(l,{title:n,key:n,ariaLabel:n})))};e.default=u},2071:function(t,e,n){"use strict";n.r(e),e.default="import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title, ariaLabel }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        aria-label={ariaLabel}\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nForm.propTypes = {\n  title: PropTypes.string,\n  ariaLabel: PropTypes.string,\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n  const [activePrompts, setActivePrompts] = useState([]);\n\n  function onSwitchForm(formKey) {\n    setActiveForm(formKey);\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n      <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <NavigationPromptCheckpoint\n        onPromptChange={(prompts) => {\n          setActivePrompts(prompts);\n        }}\n      >\n        <Form title={activeForm} key={activeForm} ariaLabel={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n\nexport default FormSwitcher;\n"},2310:function(t,e,n){"use strict";var o=n(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(0)),a=o(n(1004)),i=o(n(2069)),p=o(n(2070)),m=o(n(2071)),l=function(){return r.default.createElement(a.default,{packageName:"terra-navigation-prompt",srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-prompt",readme:i.default,examples:[{title:"Part 2 - Implementing a Custom Prompt Handler",example:r.default.createElement(p.default,null),source:m.default}]})};e.default=l}}]);
//# sourceMappingURL=282-27fd277475bb667bf531.js.map