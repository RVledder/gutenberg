"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[7584],{"./packages/block-editor/src/components/alignment-control/stories/index.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block-editor/src/components/alignment-control/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"BlockEditor/AlignmentControl",component:___WEBPACK_IMPORTED_MODULE_1__.L,argTypes:{value:{control:{type:null},defaultValue:"undefined",description:"The current value of the alignment setting."},onChange:{action:"onChange",control:{type:null},description:"A callback function invoked when the toolbar's alignment value is changed via an interaction with any of the toolbar's buttons. Called with the new alignment value (ie: `left`, `center`, `right`, `undefined`) as the only argument."}},parameters:{sourceLink:"packages/block-editor/src/components/alignment-control",badges:[],docs:{description:{component:"The `AlignmentControl` component renders a dropdown menu that displays alignment options for the selected block.\n\nThis component is mostly used for blocks that display text, such as Heading, Paragraph, Post Author, Post Comments, Verse, Quote, Post Title, etc... And the available alignment options are `left`, `center` or `right` alignment.\n\nIf you want to use the alignment control in a toolbar, you should use the `AlignmentToolbar` component instead."}}}},Default={render:function Template({onChange,...args}){const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.L,{...args,onChange:(...changeArgs)=>{onChange(...changeArgs),setValue(...changeArgs)},value})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [value, setValue] = useState();\n    return <AlignmentControl {...args} onChange={(...changeArgs) => {\n      onChange(...changeArgs);\n      setValue(...changeArgs);\n    }} value={value} />;\n  }\n}",...Default.parameters?.docs?.source}}}}}]);