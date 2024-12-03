"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[9634],{"./packages/components/build-module/h-stack/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/context/context-connect.js"),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/view/component.js"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/h-stack/hook.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_context__WEBPACK_IMPORTED_MODULE_3__.KZ)((function UnconnectedHStack(props,forwardedRef){const hStackProps=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.A)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__.A,{...hStackProps,ref:forwardedRef})}),"HStack")},"./packages/components/build-module/h-stack/hook.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useHStack});var use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),component=__webpack_require__("./packages/components/build-module/flex/flex-item/component.js"),hook=__webpack_require__("./packages/components/build-module/flex/flex/hook.js"),values=__webpack_require__("./packages/components/build-module/utils/values.js");const H_ALIGNMENTS={bottom:{align:"flex-end",justify:"center"},bottomLeft:{align:"flex-end",justify:"flex-start"},bottomRight:{align:"flex-end",justify:"flex-end"},center:{align:"center",justify:"center"},edge:{align:"center",justify:"space-between"},left:{align:"center",justify:"flex-start"},right:{align:"center",justify:"flex-end"},stretch:{align:"stretch"},top:{align:"flex-start",justify:"center"},topLeft:{align:"flex-start",justify:"flex-start"},topRight:{align:"flex-start",justify:"flex-end"}},V_ALIGNMENTS={bottom:{justify:"flex-end",align:"center"},bottomLeft:{justify:"flex-end",align:"flex-start"},bottomRight:{justify:"flex-end",align:"flex-end"},center:{justify:"center",align:"center"},edge:{justify:"space-between",align:"center"},left:{justify:"center",align:"flex-start"},right:{justify:"center",align:"flex-end"},stretch:{align:"stretch"},top:{justify:"flex-start",align:"center"},topLeft:{justify:"flex-start",align:"flex-start"},topRight:{justify:"flex-start",align:"flex-end"}};var get_valid_children=__webpack_require__("./packages/components/build-module/utils/get-valid-children.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function useHStack(props){const{alignment="edge",children,direction,spacing=2,...otherProps}=(0,use_context_system.A)(props,"HStack"),align=function getAlignmentProps(alignment,direction="row"){if(!(0,values.J5)(alignment))return{};const props="column"===direction?V_ALIGNMENTS:H_ALIGNMENTS;return alignment in props?props[alignment]:{align:alignment}}(alignment,direction),propsForFlex={children:(0,get_valid_children.a)(children).map(((child,index)=>{if((0,context_connect.SZ)(child,["Spacer"])){const childElement=child,_key=childElement.key||`hstack-${index}`;return(0,jsx_runtime.jsx)(component.A,{isBlock:!0,...childElement.props},_key)}return child})),direction,justify:"center",...align,...otherProps,gap:spacing},{isColumn,...flexProps}=(0,hook.v)(propsForFlex);return flexProps}},"./packages/components/build-module/input-control/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ey:()=>InputControl,Ay:()=>input_control});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),react=__webpack_require__("./node_modules/react/index.js"),input_base=__webpack_require__("./packages/components/build-module/input-control/input-base.js"),use_gesture_react_esm=__webpack_require__("./node_modules/@use-gesture/react/dist/use-gesture-react.esm.js");var input_control_styles=__webpack_require__("./packages/components/build-module/input-control/styles/input-control-styles.js");const initialStateReducer=state=>state,initialInputControlState={error:null,initialValue:"",isDirty:!1,isDragEnabled:!1,isDragging:!1,isPressEnterToChange:!1,value:""};var actions=__webpack_require__("./packages/components/build-module/input-control/reducer/actions.js");function useInputControlStateReducer(stateReducer=initialStateReducer,initialState=initialInputControlState,onChangeHandler){const[state,dispatch]=(0,react.useReducer)(function inputControlStateReducer(composedStateReducers){return(state,action)=>{const nextState={...state};switch(action.type){case actions.W3:return nextState.value=action.payload.value,nextState.isDirty=!1,nextState._event=void 0,nextState;case actions.wX:case actions.r7:nextState.isDirty=!1;break;case actions.Qf:nextState.isDragging=!0;break;case actions.Ry:nextState.isDragging=!1;break;case actions.PL:nextState.error=null,nextState.value=action.payload.value,state.isPressEnterToChange&&(nextState.isDirty=!0);break;case actions.cJ:nextState.value=action.payload.value,nextState.isDirty=!1;break;case actions.Ut:nextState.error=null,nextState.isDirty=!1,nextState.value=action.payload.value||state.initialValue;break;case actions.uY:nextState.error=action.payload.error}return nextState._event=action.payload.event,composedStateReducers(nextState,action)}}(stateReducer),function mergeInitialState(initialState=initialInputControlState){const{value}=initialState;return{...initialInputControlState,...initialState,initialValue:value}}(initialState)),createChangeEvent=type=>(nextValue,event)=>{dispatch({type,payload:{value:nextValue,event}})},createKeyEvent=type=>event=>{dispatch({type,payload:{event}})},createDragEvent=type=>payload=>{dispatch({type,payload})},change=createChangeEvent(actions.PL),reset=createChangeEvent(actions.Ut),commit=createChangeEvent(actions.cJ),dragStart=createDragEvent(actions.Qf),drag=createDragEvent(actions.j),dragEnd=createDragEvent(actions.Ry),pressUp=createKeyEvent(actions.wX),pressDown=createKeyEvent(actions.r7),pressEnter=createKeyEvent(actions.bR),currentStateRef=(0,react.useRef)(state),refPropsRef=(0,react.useRef)({value:initialState.value,onChangeHandler});return(0,react.useLayoutEffect)((()=>{currentStateRef.current=state,refPropsRef.current={value:initialState.value,onChangeHandler}})),(0,react.useLayoutEffect)((()=>{var _state$value;void 0===currentStateRef.current._event||state.value===refPropsRef.current.value||state.isDirty||refPropsRef.current.onChangeHandler(null!==(_state$value=state.value)&&void 0!==_state$value?_state$value:"",{event:currentStateRef.current._event})}),[state.value,state.isDirty]),(0,react.useLayoutEffect)((()=>{var _initialState$value;initialState.value===currentStateRef.current.value||currentStateRef.current.isDirty||dispatch({type:actions.W3,payload:{value:null!==(_initialState$value=initialState.value)&&void 0!==_initialState$value?_initialState$value:""}})}),[initialState.value]),{change,commit,dispatch,drag,dragEnd,dragStart,invalidate:(error,event)=>dispatch({type:actions.uY,payload:{error,event}}),pressDown,pressEnter,pressUp,reset,state}}var with_ignore_ime_events=__webpack_require__("./packages/components/build-module/utils/with-ignore-ime-events.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};const input_field=(0,react.forwardRef)((function InputField({disabled=!1,dragDirection="n",dragThreshold=10,id,isDragEnabled=!1,isPressEnterToChange=!1,onBlur=noop,onChange=noop,onDrag=noop,onDragEnd=noop,onDragStart=noop,onKeyDown=noop,onValidate=noop,size="default",stateReducer=state=>state,value:valueProp,type,...props},ref){const{state,change,commit,drag,dragEnd,dragStart,invalidate,pressDown,pressEnter,pressUp,reset}=useInputControlStateReducer(stateReducer,{isDragEnabled,value:valueProp,isPressEnterToChange},onChange),{value,isDragging,isDirty}=state,wasDirtyOnBlur=(0,react.useRef)(!1),dragCursor=function useDragCursor(isDragging,dragDirection){const dragCursor=function getDragCursor(dragDirection){let dragCursor="ns-resize";switch(dragDirection){case"n":case"s":dragCursor="ns-resize";break;case"e":case"w":dragCursor="ew-resize"}return dragCursor}(dragDirection);return(0,react.useEffect)((()=>{document.documentElement.style.cursor=isDragging?dragCursor:null}),[isDragging,dragCursor]),dragCursor}(isDragging,dragDirection),handleOnCommit=event=>{const nextValue=event.currentTarget.value;try{onValidate(nextValue),commit(nextValue,event)}catch(err){invalidate(err,event)}},dragGestureProps=(0,use_gesture_react_esm.useDrag)((dragProps=>{const{distance,dragging,event,target}=dragProps;if(dragProps.event={...dragProps.event,target},distance){if(event.stopPropagation(),!dragging)return onDragEnd(dragProps),void dragEnd(dragProps);onDrag(dragProps),drag(dragProps),isDragging||(onDragStart(dragProps),dragStart(dragProps))}}),{axis:"e"===dragDirection||"w"===dragDirection?"x":"y",threshold:dragThreshold,enabled:isDragEnabled,pointer:{capture:!1}}),dragProps=isDragEnabled?dragGestureProps():{};let handleOnMouseDown;return"number"===type&&(handleOnMouseDown=event=>{props.onMouseDown?.(event),event.currentTarget!==event.currentTarget.ownerDocument.activeElement&&event.currentTarget.focus()}),(0,jsx_runtime.jsx)(input_control_styles.pd,{...props,...dragProps,className:"components-input-control__input",disabled,dragCursor,isDragging,id,onBlur:event=>{onBlur(event),!isDirty&&event.target.validity.valid||(wasDirtyOnBlur.current=!0,handleOnCommit(event))},onChange:event=>{const nextValue=event.target.value;change(nextValue,event)},onKeyDown:(0,with_ignore_ime_events.n)((event=>{const{key}=event;switch(onKeyDown(event),key){case"ArrowUp":pressUp(event);break;case"ArrowDown":pressDown(event);break;case"Enter":pressEnter(event),isPressEnterToChange&&(event.preventDefault(),handleOnCommit(event));break;case"Escape":isPressEnterToChange&&isDirty&&(event.preventDefault(),reset(valueProp,event))}})),onMouseDown:handleOnMouseDown,ref,inputSize:size,value:null!=value?value:"",type})}));var space=__webpack_require__("./packages/components/build-module/utils/space.js"),base_control=__webpack_require__("./packages/components/build-module/base-control/index.js"),use_deprecated_props=__webpack_require__("./packages/components/build-module/utils/use-deprecated-props.js");const input_control_noop=()=>{};const InputControl=(0,react.forwardRef)((function UnforwardedInputControl(props,ref){const{__next40pxDefaultSize,__unstableStateReducer:stateReducer=state=>state,__unstableInputWidth,className,disabled=!1,help,hideLabelFromVision=!1,id:idProp,isPressEnterToChange=!1,label,labelPosition="top",onChange=input_control_noop,onValidate=input_control_noop,onKeyDown=input_control_noop,prefix,size="default",style,suffix,value,...restProps}=(0,use_deprecated_props.R)(props),id=function useUniqueId(idProp){const instanceId=(0,use_instance_id.A)(InputControl);return idProp||`inspector-input-control-${instanceId}`}(idProp),classes=(0,clsx.A)("components-input-control",className),draftHookProps=function useDraft(props){const previousValueRef=(0,react.useRef)(props.value),[draft,setDraft]=(0,react.useState)({}),value=void 0!==draft.value?draft.value:props.value;return(0,react.useLayoutEffect)((()=>{const{current:previousValue}=previousValueRef;previousValueRef.current=props.value,void 0===draft.value||draft.isStale?draft.isStale&&props.value!==previousValue&&setDraft({}):setDraft({...draft,isStale:!0})}),[props.value,draft]),{value,onBlur:event=>{setDraft({}),props.onBlur?.(event)},onChange:(nextValue,extra)=>{setDraft((current=>Object.assign(current,{value:nextValue,isStale:!1}))),props.onChange(nextValue,extra)}}}({value,onBlur:restProps.onBlur,onChange}),helpProp=help?{"aria-describedby":`${id}__help`}:{};return(0,jsx_runtime.jsx)(base_control.Ay,{className:classes,help,id,__nextHasNoMarginBottom:!0,children:(0,jsx_runtime.jsx)(input_base.A,{__next40pxDefaultSize,__unstableInputWidth,disabled,gap:3,hideLabelFromVision,id,justify:"left",label,labelPosition,prefix,size,style,suffix,children:(0,jsx_runtime.jsx)(input_field,{...restProps,...helpProp,__next40pxDefaultSize,className:"components-input-control__input",disabled,id,isPressEnterToChange,onKeyDown,onValidate,paddingInlineStart:prefix?(0,space.x)(1):void 0,paddingInlineEnd:suffix?(0,space.x)(1):void 0,ref,size,stateReducer,...draftHookProps})})})})),input_control=InputControl},"./packages/components/build-module/input-control/input-base.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>input_base});var use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),react=__webpack_require__("./node_modules/react/index.js"),input_control_styles=__webpack_require__("./packages/components/build-module/input-control/styles/input-control-styles.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const backdrop=(0,react.memo)((function Backdrop({disabled=!1,isBorderless=!1}){return(0,jsx_runtime.jsx)(input_control_styles.Hr,{"aria-hidden":"true",className:"components-input-control__backdrop",disabled,isBorderless})}));var component=__webpack_require__("./packages/components/build-module/visually-hidden/component.js");function Label({children,hideLabelFromVision,htmlFor,...props}){return children?hideLabelFromVision?(0,jsx_runtime.jsx)(component.A,{as:"label",htmlFor,children}):(0,jsx_runtime.jsx)(input_control_styles.cR,{children:(0,jsx_runtime.jsx)(input_control_styles.JU,{htmlFor,...props,children})}):null}var use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),context_system_provider=__webpack_require__("./packages/components/build-module/context/context-system-provider.js"),context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),use_deprecated_props=__webpack_require__("./packages/components/build-module/utils/use-deprecated-props.js");function getUIFlexProps(labelPosition){const props={};switch(labelPosition){case"top":props.direction="column",props.expanded=!1,props.gap=0;break;case"bottom":props.direction="column-reverse",props.expanded=!1,props.gap=0;break;case"edge":props.justify="space-between"}return props}function InputBase(props,ref){const{__next40pxDefaultSize,__unstableInputWidth,children,className,disabled=!1,hideLabelFromVision=!1,labelPosition,id:idProp,isBorderless=!1,label,prefix,size="default",suffix,...restProps}=(0,use_deprecated_props.R)((0,use_context_system.A)(props,"InputBase")),id=function useUniqueId(idProp){const instanceId=(0,use_instance_id.A)(InputBase);return idProp||`input-base-control-${instanceId}`}(idProp),hideLabel=hideLabelFromVision||!label,prefixSuffixContextValue=(0,react.useMemo)((()=>({InputControlPrefixWrapper:{__next40pxDefaultSize,size},InputControlSuffixWrapper:{__next40pxDefaultSize,size}})),[__next40pxDefaultSize,size]);return(0,jsx_runtime.jsxs)(input_control_styles.bL,{...restProps,...getUIFlexProps(labelPosition),className,gap:2,ref,children:[(0,jsx_runtime.jsx)(Label,{className:"components-input-control__label",hideLabelFromVision,labelPosition,htmlFor:id,children:label}),(0,jsx_runtime.jsxs)(input_control_styles.mc,{__unstableInputWidth,className:"components-input-control__container",disabled,hideLabel,labelPosition,children:[(0,jsx_runtime.jsxs)(context_system_provider.c7,{value:prefixSuffixContextValue,children:[prefix&&(0,jsx_runtime.jsx)(input_control_styles.b3,{className:"components-input-control__prefix",children:prefix}),children,suffix&&(0,jsx_runtime.jsx)(input_control_styles.sZ,{className:"components-input-control__suffix",children:suffix})]}),(0,jsx_runtime.jsx)(backdrop,{disabled,isBorderless})]})]})}const input_base=(0,context_connect.KZ)(InputBase,"InputBase")},"./packages/components/build-module/input-control/reducer/actions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PL:()=>CHANGE,Qf:()=>DRAG_START,Ry:()=>DRAG_END,Ut:()=>RESET,W3:()=>CONTROL,bR:()=>PRESS_ENTER,cJ:()=>COMMIT,j:()=>DRAG,r7:()=>PRESS_DOWN,uY:()=>INVALIDATE,wX:()=>PRESS_UP});const CHANGE="CHANGE",COMMIT="COMMIT",CONTROL="CONTROL",DRAG_END="DRAG_END",DRAG_START="DRAG_START",DRAG="DRAG",INVALIDATE="INVALIDATE",PRESS_DOWN="PRESS_DOWN",PRESS_ENTER="PRESS_ENTER",PRESS_UP="PRESS_UP",RESET="RESET"},"./packages/components/build-module/number-control/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>number_control});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),plus=__webpack_require__("./packages/icons/build-module/library/plus.js"),library_reset=__webpack_require__("./packages/icons/build-module/library/reset.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),deprecated_build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),input_control=__webpack_require__("./packages/components/build-module/input-control/index.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),build_module_button=__webpack_require__("./packages/components/build-module/button/index.js"),space=__webpack_require__("./packages/components/build-module/utils/space.js");var _ref={name:"euqsgg",styles:"input[type='number']::-webkit-outer-spin-button,input[type='number']::-webkit-inner-spin-button{-webkit-appearance:none!important;margin:0!important;}input[type='number']{-moz-appearance:textfield;}"};const htmlArrowStyles=({hideHTMLArrows})=>hideHTMLArrows?_ref:"",Input=(0,emotion_styled_base_browser_esm.A)(input_control.Ay,{target:"ep09it41"})(htmlArrowStyles,";"),SpinButton=(0,emotion_styled_base_browser_esm.A)(build_module_button.Ay,{target:"ep09it40"})("&&&&&{color:",colors_values.l.theme.accent,";}"),styles={smallSpinButtons:(0,emotion_react_browser_esm.AH)("width:",(0,space.x)(5),";min-width:",(0,space.x)(5),";height:",(0,space.x)(5),";","","","")};var actions=__webpack_require__("./packages/components/build-module/input-control/reducer/actions.js"),math=__webpack_require__("./packages/components/build-module/utils/math.js"),values=__webpack_require__("./packages/components/build-module/utils/values.js"),component=__webpack_require__("./packages/components/build-module/h-stack/component.js"),spacer_component=__webpack_require__("./packages/components/build-module/spacer/component.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js"),use_deprecated_props=__webpack_require__("./packages/components/build-module/utils/use-deprecated-props.js"),deprecated_36px_size=__webpack_require__("./packages/components/build-module/utils/deprecated-36px-size.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};const number_control=(0,react.forwardRef)((function UnforwardedNumberControl(props,forwardedRef){const{__unstableStateReducer:stateReducerProp,className,dragDirection="n",hideHTMLArrows=!1,spinControls=hideHTMLArrows?"none":"native",isDragEnabled=!0,isShiftStepEnabled=!0,label,max=1/0,min=-1/0,required=!1,shiftStep=10,step=1,spinFactor=1,type:typeProp="number",value:valueProp,size="default",suffix,onChange=noop,__shouldNotWarnDeprecated36pxSize,...restProps}=(0,use_deprecated_props.R)(props);(0,deprecated_36px_size.M)({componentName:"NumberControl",size,__next40pxDefaultSize:restProps.__next40pxDefaultSize,__shouldNotWarnDeprecated36pxSize}),hideHTMLArrows&&(0,deprecated_build_module.A)("wp.components.NumberControl hideHTMLArrows prop ",{alternative:'spinControls="none"',since:"6.2",version:"6.3"});const inputRef=(0,react.useRef)(),mergedRef=(0,use_merge_refs.A)([inputRef,forwardedRef]),isStepAny="any"===step,baseStep=isStepAny?1:(0,values.GB)(step),baseSpin=(0,values.GB)(spinFactor)*baseStep,baseValue=(0,math.ir)(0,min,max,baseStep),constrainValue=(value,stepOverride)=>isStepAny?""+Math.min(max,Math.max(min,(0,values.GB)(value))):""+(0,math.ir)(value,min,max,null!=stepOverride?stepOverride:baseStep),autoComplete="number"===typeProp?"off":void 0,classes=(0,clsx.A)("components-number-control",className),spinButtonClasses=(0,use_cx.l)()("small"===size&&styles.smallSpinButtons),spinValue=(value,direction,event)=>{event?.preventDefault();const shift=event?.shiftKey&&isShiftStepEnabled,delta=shift?(0,values.GB)(shiftStep)*baseSpin:baseSpin;let nextValue=(0,values.r6)(value)?baseValue:value;return"up"===direction?nextValue=(0,math.WQ)(nextValue,delta):"down"===direction&&(nextValue=(0,math.Re)(nextValue,delta)),constrainValue(nextValue,shift?delta:void 0)},buildSpinButtonClickHandler=direction=>event=>onChange(String(spinValue(valueProp,direction,event)),{event:{...event,target:inputRef.current}});return(0,jsx_runtime.jsx)(Input,{autoComplete,inputMode:"numeric",...restProps,className:classes,dragDirection,hideHTMLArrows:"native"!==spinControls,isDragEnabled,label,max,min,ref:mergedRef,required,step,type:typeProp,value:valueProp,__unstableStateReducer:(state,action)=>{var _stateReducerProp;const baseState=((state,action)=>{const nextState={...state},{type,payload}=action,event=payload.event,currentValue=nextState.value;if(type!==actions.wX&&type!==actions.r7||(nextState.value=spinValue(currentValue,type===actions.wX?"up":"down",event)),type===actions.j&&isDragEnabled){const[x,y]=payload.delta,enableShift=payload.shiftKey&&isShiftStepEnabled,modifier=enableShift?(0,values.GB)(shiftStep)*baseSpin:baseSpin;let directionModifier,delta;switch(dragDirection){case"n":delta=y,directionModifier=-1;break;case"e":delta=x,directionModifier=(0,build_module.V8)()?-1:1;break;case"s":delta=y,directionModifier=1;break;case"w":delta=x,directionModifier=(0,build_module.V8)()?1:-1}if(0!==delta){delta=Math.ceil(Math.abs(delta))*Math.sign(delta);const distance=delta*modifier*directionModifier;nextState.value=constrainValue((0,math.WQ)(currentValue,distance),enableShift?modifier:void 0)}}if(type===actions.bR||type===actions.cJ){const applyEmptyValue=!1===required&&""===currentValue;nextState.value=applyEmptyValue?currentValue:constrainValue(currentValue)}return nextState})(state,action);return null!==(_stateReducerProp=stateReducerProp?.(baseState,action))&&void 0!==_stateReducerProp?_stateReducerProp:baseState},size,suffix:"custom"===spinControls?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[suffix,(0,jsx_runtime.jsx)(spacer_component.A,{marginBottom:0,marginRight:2,children:(0,jsx_runtime.jsxs)(component.A,{spacing:1,children:[(0,jsx_runtime.jsx)(SpinButton,{className:spinButtonClasses,icon:plus.A,size:"small",label:(0,build_module.__)("Increment"),onClick:buildSpinButtonClickHandler("up")}),(0,jsx_runtime.jsx)(SpinButton,{className:spinButtonClasses,icon:library_reset.A,size:"small",label:(0,build_module.__)("Decrement"),onClick:buildSpinButtonClickHandler("down")})]})})]}):suffix,onChange})}))},"./packages/components/build-module/spacer/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>spacer_component});var context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),space=__webpack_require__("./packages/components/build-module/utils/space.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js"),rtl=__webpack_require__("./packages/components/build-module/utils/rtl.js");function isDefined(o){return null!=o}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const spacer_component=(0,context_connect.KZ)((function UnconnectedSpacer(props,forwardedRef){const spacerProps=function useSpacer(props){const{className,margin,marginBottom=2,marginLeft,marginRight,marginTop,marginX,marginY,padding,paddingBottom,paddingLeft,paddingRight,paddingTop,paddingX,paddingY,...otherProps}=(0,use_context_system.A)(props,"Spacer");return{...otherProps,className:(0,use_cx.l)()(isDefined(margin)&&(0,emotion_react_browser_esm.AH)("margin:",(0,space.x)(margin),";","","",""),isDefined(marginY)&&(0,emotion_react_browser_esm.AH)("margin-bottom:",(0,space.x)(marginY),";margin-top:",(0,space.x)(marginY),";","","",""),isDefined(marginX)&&(0,emotion_react_browser_esm.AH)("margin-left:",(0,space.x)(marginX),";margin-right:",(0,space.x)(marginX),";","","",""),isDefined(marginTop)&&(0,emotion_react_browser_esm.AH)("margin-top:",(0,space.x)(marginTop),";","","",""),isDefined(marginBottom)&&(0,emotion_react_browser_esm.AH)("margin-bottom:",(0,space.x)(marginBottom),";","","",""),isDefined(marginLeft)&&(0,rtl.h)({marginLeft:(0,space.x)(marginLeft)})(),isDefined(marginRight)&&(0,rtl.h)({marginRight:(0,space.x)(marginRight)})(),isDefined(padding)&&(0,emotion_react_browser_esm.AH)("padding:",(0,space.x)(padding),";","","",""),isDefined(paddingY)&&(0,emotion_react_browser_esm.AH)("padding-bottom:",(0,space.x)(paddingY),";padding-top:",(0,space.x)(paddingY),";","","",""),isDefined(paddingX)&&(0,emotion_react_browser_esm.AH)("padding-left:",(0,space.x)(paddingX),";padding-right:",(0,space.x)(paddingX),";","","",""),isDefined(paddingTop)&&(0,emotion_react_browser_esm.AH)("padding-top:",(0,space.x)(paddingTop),";","","",""),isDefined(paddingBottom)&&(0,emotion_react_browser_esm.AH)("padding-bottom:",(0,space.x)(paddingBottom),";","","",""),isDefined(paddingLeft)&&(0,rtl.h)({paddingLeft:(0,space.x)(paddingLeft)})(),isDefined(paddingRight)&&(0,rtl.h)({paddingRight:(0,space.x)(paddingRight)})(),className)}}(props);return(0,jsx_runtime.jsx)(component.A,{...spacerProps,ref:forwardedRef})}),"Spacer")},"./packages/components/build-module/utils/get-valid-children.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>getValidChildren});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function getValidChildren(children){return"string"==typeof children?[children]:_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./packages/components/build-module/utils/math.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getNumber(value){const number=Number(value);return isNaN(number)?0:number}function add(...args){return args.reduce(((sum,arg)=>sum+getNumber(arg)),0)}function subtract(...args){return args.reduce(((diff,arg,index)=>{const value=getNumber(arg);return 0===index?value:diff-value}),0)}function clamp(value,min,max){const baseValue=getNumber(value);return Math.max(min,Math.min(baseValue,max))}function roundClamp(value=0,min=1/0,max=1/0,step=1){const baseValue=getNumber(value),stepValue=getNumber(step),precision=function getPrecision(value){const split=(value+"").split(".");return void 0!==split[1]?split[1].length:0}(step),clampedValue=clamp(Math.round(baseValue/stepValue)*stepValue,min,max);return precision?getNumber(clampedValue.toFixed(precision)):clampedValue}__webpack_require__.d(__webpack_exports__,{Re:()=>subtract,WQ:()=>add,ir:()=>roundClamp,qE:()=>clamp})},"./packages/components/build-module/utils/use-deprecated-props.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function useDeprecated36pxDefaultSizeProp(props){const{__next36pxDefaultSize,__next40pxDefaultSize,...otherProps}=props;return{...otherProps,__next40pxDefaultSize:null!=__next40pxDefaultSize?__next40pxDefaultSize:__next36pxDefaultSize}}__webpack_require__.d(__webpack_exports__,{R:()=>useDeprecated36pxDefaultSizeProp})},"./packages/components/build-module/utils/with-ignore-ime-events.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function withIgnoreIMEEvents(keydownHandler){return event=>{const{isComposing}="nativeEvent"in event?event.nativeEvent:event;isComposing||229===event.keyCode||keydownHandler(event)}}__webpack_require__.d(__webpack_exports__,{n:()=>withIgnoreIMEEvents})},"./packages/icons/build-module/library/plus.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"})})},"./packages/icons/build-module/library/reset.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"M7 11.5h10V13H7z"})})}}]);