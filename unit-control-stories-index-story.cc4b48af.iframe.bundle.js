(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[7262],{"./packages/components/src/utils/hooks/use-controlled-state.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_values__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/utils/values.js");const defaultOptions={initial:void 0,fallback:""};const __WEBPACK_DEFAULT_EXPORT__=function useControlledState(currentState,options=defaultOptions){const{initial,fallback}={...defaultOptions,...options},[internalState,setInternalState]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(currentState),hasCurrentState=(0,_values__WEBPACK_IMPORTED_MODULE_1__.J5)(currentState);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{hasCurrentState&&internalState&&setInternalState(void 0)}),[hasCurrentState,internalState]),[(0,_values__WEBPACK_IMPORTED_MODULE_1__.vD)([currentState,internalState,initial],fallback),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextState=>{hasCurrentState||setInternalState(nextState)}),[hasCurrentState])]}},"./packages/compose/build-module/hooks/use-merge-refs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>useMergeRefs});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function assignRef(ref,value){"function"==typeof ref?ref(value):ref&&ref.hasOwnProperty("current")&&(ref.current=value)}function useMergeRefs(refs){const element=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),isAttachedRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),didElementChangeRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),previousRefsRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),currentRefsRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);return currentRefsRef.current=refs,(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{!1===didElementChangeRef.current&&!0===isAttachedRef.current&&refs.forEach(((ref,index)=>{const previousRef=previousRefsRef.current[index];ref!==previousRef&&(assignRef(previousRef,null),assignRef(ref,element.current))})),previousRefsRef.current=refs}),refs),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{didElementChangeRef.current=!1})),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{assignRef(element,value),didElementChangeRef.current=!0,isAttachedRef.current=null!==value;const refsToAssign=value?currentRefsRef.current:previousRefsRef.current;for(const ref of refsToAssign)assignRef(ref,value)}),[])}},"./node_modules/remove-accents/index.js":module=>{var characterMap={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ả:"A",Ạ:"A",Ẩ:"A",Ẫ:"A",Ậ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ẻ:"E",Ẽ:"E",Ẹ:"E",Ể:"E",Ễ:"E",Ệ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ỉ:"I",Ị:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ỏ:"O",Ọ:"O",Ổ:"O",Ỗ:"O",Ộ:"O",Ờ:"O",Ở:"O",Ỡ:"O",Ớ:"O",Ợ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ủ:"U",Ụ:"U",Ử:"U",Ữ:"U",Ự:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ả:"a",ạ:"a",ẩ:"a",ẫ:"a",ậ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ẻ:"e",ẽ:"e",ẹ:"e",ể:"e",ễ:"e",ệ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ỉ:"i",ị:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ỏ:"o",ọ:"o",ổ:"o",ỗ:"o",ộ:"o",ờ:"o",ở:"o",ỡ:"o",ớ:"o",ợ:"o",ù:"u",ú:"u",û:"u",ü:"u",ủ:"u",ụ:"u",ử:"u",ữ:"u",ự:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z",й:"и",Й:"И",ё:"е",Ё:"Е"},chars=Object.keys(characterMap).join("|"),allAccents=new RegExp(chars,"g"),firstAccent=new RegExp(chars,"");function matcher(match){return characterMap[match]}var removeAccents=function(string){return string.replace(allAccents,matcher)};module.exports=removeAccents,module.exports.has=function(string){return!!string.match(firstAccent)},module.exports.remove=removeAccents},"./packages/components/src/unit-control/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,PressEnterToChange:()=>PressEnterToChange,TweakingTheNumberInput:()=>TweakingTheNumberInput,WithCustomUnits:()=>WithCustomUnits,WithSingleUnit:()=>WithSingleUnit,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/unit-control/index.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/unit-control/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.gZ,title:"Components (Experimental)/Selection & Input/UnitControl",id:"components-experimental-unitcontrol",argTypes:{__unstableInputWidth:{control:{type:"text"}},__unstableStateReducer:{control:{type:null}},onChange:{control:{type:null}},onUnitChange:{control:{type:null}},prefix:{control:{type:"text"}},value:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/unit-control",badges:[],actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},DefaultTemplate=({onChange,...args})=>{const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("10px");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.gZ,{...args,value,onChange:(v,extra)=>{setValue(v),onChange?.(v,extra)}})};DefaultTemplate.displayName="DefaultTemplate";const Default=DefaultTemplate.bind({});Default.args={label:"Label",__next40pxDefaultSize:!0};const PressEnterToChange=DefaultTemplate.bind({});PressEnterToChange.args={...Default.args,isPressEnterToChange:!0};const TweakingTheNumberInput=DefaultTemplate.bind({});TweakingTheNumberInput.args={...Default.args,min:0,max:100,step:"any",label:"Custom label"};const WithSingleUnit=DefaultTemplate.bind({});WithSingleUnit.args={...Default.args,units:_utils__WEBPACK_IMPORTED_MODULE_3__.Cy.slice(0,1)};const WithCustomUnits=({onChange,...args})=>{const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("80km");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.gZ,{...args,value,onChange:(v,extra)=>{setValue(v),onChange?.(v,extra)}})};WithCustomUnits.displayName="WithCustomUnits",WithCustomUnits.args={...Default.args,isResetValueOnUnitChange:!0,min:0,units:[{value:"km",label:"km",default:1},{value:"mi",label:"mi",default:1},{value:"m",label:"m",default:1e3},{value:"yd",label:"yd",default:1760}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('10px');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",...Default.parameters?.docs?.source}}},PressEnterToChange.parameters={...PressEnterToChange.parameters,docs:{...PressEnterToChange.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('10px');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",...PressEnterToChange.parameters?.docs?.source},description:{story:"If the `isPressEnterToChange` prop is set to `true`, the `onChange` callback\nwill not fire while a new value is typed in the input field (you can verify this\nbehavior by inspecting the console's output).",...PressEnterToChange.parameters?.docs?.description}}},TweakingTheNumberInput.parameters={...TweakingTheNumberInput.parameters,docs:{...TweakingTheNumberInput.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('10px');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",...TweakingTheNumberInput.parameters?.docs?.source},description:{story:"Most of `NumberControl`'s props can be passed to `UnitControl`, and they will\naffect its numeric input field.",...TweakingTheNumberInput.parameters?.docs?.description}}},WithSingleUnit.parameters={...WithSingleUnit.parameters,docs:{...WithSingleUnit.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('10px');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",...WithSingleUnit.parameters?.docs?.source},description:{story:"When only one unit is available, the unit selection dropdown becomes static text.",...WithSingleUnit.parameters?.docs?.description}}},WithCustomUnits.parameters={...WithCustomUnits.parameters,docs:{...WithCustomUnits.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('80km');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",...WithCustomUnits.parameters?.docs?.source},description:{story:"It is possible to pass a custom list of units. Every time the unit changes,\nif the `isResetValueOnUnitChange` is set to `true`, the input's quantity is\nreset to the new unit's default value.",...WithCustomUnits.parameters?.docs?.description}}};try{PressEnterToChange.displayName="PressEnterToChange",PressEnterToChange.__docgenInfo={description:"If the `isPressEnterToChange` prop is set to `true`, the `onChange` callback\nwill not fire while a new value is typed in the input field (you can verify this\nbehavior by inspecting the console's output).",displayName:"PressEnterToChange",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/stories/index.story.tsx#PressEnterToChange"]={docgenInfo:PressEnterToChange.__docgenInfo,name:"PressEnterToChange",path:"packages/components/src/unit-control/stories/index.story.tsx#PressEnterToChange"})}catch(__react_docgen_typescript_loader_error){}try{TweakingTheNumberInput.displayName="TweakingTheNumberInput",TweakingTheNumberInput.__docgenInfo={description:"Most of `NumberControl`'s props can be passed to `UnitControl`, and they will\naffect its numeric input field.",displayName:"TweakingTheNumberInput",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/stories/index.story.tsx#TweakingTheNumberInput"]={docgenInfo:TweakingTheNumberInput.__docgenInfo,name:"TweakingTheNumberInput",path:"packages/components/src/unit-control/stories/index.story.tsx#TweakingTheNumberInput"})}catch(__react_docgen_typescript_loader_error){}try{WithSingleUnit.displayName="WithSingleUnit",WithSingleUnit.__docgenInfo={description:"When only one unit is available, the unit selection dropdown becomes static text.",displayName:"WithSingleUnit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/stories/index.story.tsx#WithSingleUnit"]={docgenInfo:WithSingleUnit.__docgenInfo,name:"WithSingleUnit",path:"packages/components/src/unit-control/stories/index.story.tsx#WithSingleUnit"})}catch(__react_docgen_typescript_loader_error){}try{WithCustomUnits.displayName="WithCustomUnits",WithCustomUnits.__docgenInfo={description:"It is possible to pass a custom list of units. Every time the unit changes,\nif the `isResetValueOnUnitChange` is set to `true`, the input's quantity is\nreset to the new unit's default value.",displayName:"WithCustomUnits",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/stories/index.story.tsx#WithCustomUnits"]={docgenInfo:WithCustomUnits.__docgenInfo,name:"WithCustomUnits",path:"packages/components/src/unit-control/stories/index.story.tsx#WithCustomUnits"})}catch(__react_docgen_typescript_loader_error){}}}]);