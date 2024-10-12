"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[1554],{"./packages/components/build-module/composite/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Composite});var UVQLZ7T5=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/UVQLZ7T5.js"),TW35PKTK=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/TW35PKTK.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),react=__webpack_require__("./node_modules/react/index.js");const CompositeContext=(0,react.createContext)({}),useCompositeContext=()=>(0,react.useContext)(CompositeContext);var IEKMDIUY=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/IEKMDIUY.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CompositeGroup=(0,react.forwardRef)((function CompositeGroup(props,ref){var _props$store;const context=useCompositeContext(),store=null!==(_props$store=props.store)&&void 0!==_props$store?_props$store:context.store;return(0,jsx_runtime.jsx)(IEKMDIUY.t,{store,...props,ref})}));var Y2MAXF6C=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/Y2MAXF6C.js");const CompositeGroupLabel=(0,react.forwardRef)((function CompositeGroupLabel(props,ref){var _props$store;const context=useCompositeContext(),store=null!==(_props$store=props.store)&&void 0!==_props$store?_props$store:context.store;return(0,jsx_runtime.jsx)(Y2MAXF6C.$,{store,...props,ref})})),CompositeHover=(0,react.forwardRef)((function CompositeHover(props,ref){var _props$store;const context=useCompositeContext(),store=null!==(_props$store=props.store)&&void 0!==_props$store?_props$store:context.store;return(0,jsx_runtime.jsx)(IEKMDIUY.t,{store,...props,ref})}));var _2GXGCHW6=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),_3CCTMYB6=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3CCTMYB6.js");const CompositeItem=(0,react.forwardRef)((function CompositeItem(props,ref){var _props$store;const context=useCompositeContext(),store=null!==(_props$store=props.store)&&void 0!==_props$store?_props$store:context.store,tabbable=_2GXGCHW6.O$(store,(state=>null!==state?.activeId&&!store?.item(state?.activeId)?.element?.isConnected));return(0,jsx_runtime.jsx)(_3CCTMYB6.l,{store,tabbable,...props,ref})}));var _6BE7QOX5=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/6BE7QOX5.js");const CompositeRow=(0,react.forwardRef)((function CompositeRow(props,ref){var _props$store;const context=useCompositeContext(),store=null!==(_props$store=props.store)&&void 0!==_props$store?_props$store:context.store;return(0,jsx_runtime.jsx)(_6BE7QOX5.s,{store,...props,ref})})),CompositeTypeahead=(0,react.forwardRef)((function CompositeTypeahead(props,ref){var _props$store;const context=useCompositeContext(),store=null!==(_props$store=props.store)&&void 0!==_props$store?_props$store:context.store;return(0,jsx_runtime.jsx)(_6BE7QOX5.s,{store,...props,ref})})),Composite=Object.assign((0,react.forwardRef)((function Composite({activeId,defaultActiveId,setActiveId,focusLoop=!1,focusWrap=!1,focusShift=!1,virtualFocus=!1,orientation="both",rtl=(0,build_module.V8)(),children,disabled=!1,...props},ref){const storeProp=props.store,internalStore=UVQLZ7T5.q({activeId,defaultActiveId,setActiveId,focusLoop,focusWrap,focusShift,virtualFocus,orientation,rtl}),store=null!=storeProp?storeProp:internalStore,contextValue=(0,react.useMemo)((()=>({store})),[store]);return(0,jsx_runtime.jsx)(TW35PKTK.e,{disabled,store,...props,ref,children:(0,jsx_runtime.jsx)(CompositeContext.Provider,{value:contextValue,children})})})),{Group:Object.assign(CompositeGroup,{displayName:"Composite.Group"}),GroupLabel:Object.assign(CompositeGroupLabel,{displayName:"Composite.GroupLabel"}),Item:Object.assign(CompositeItem,{displayName:"Composite.Item"}),Row:Object.assign(CompositeRow,{displayName:"Composite.Row"}),Hover:Object.assign(CompositeHover,{displayName:"Composite.Hover"}),Typeahead:Object.assign(CompositeTypeahead,{displayName:"Composite.Typeahead"}),Context:Object.assign(CompositeContext,{displayName:"Composite.Context"})})},"./packages/components/build-module/item-group/context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>ItemGroupContext,j:()=>useItemGroupContext});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ItemGroupContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({size:"medium"}),useItemGroupContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ItemGroupContext)},"./packages/components/build-module/item-group/item-group/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>item_group_component});var context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),styles=__webpack_require__("./packages/components/build-module/item-group/styles.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js");var context=__webpack_require__("./packages/components/build-module/item-group/context.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const item_group_component=(0,context_connect.KZ)((function UnconnectedItemGroup(props,forwardedRef){const{isBordered,isSeparated,size:sizeProp,...otherProps}=function useItemGroup(props){const{className,isBordered=!1,isRounded=!0,isSeparated=!1,role="list",...otherProps}=(0,use_context_system.A)(props,"ItemGroup");return{isBordered,className:(0,use_cx.l)()(isBordered&&styles.sW,isSeparated&&styles.Ci,isRounded&&styles.Wf,className),role,isSeparated,...otherProps}}(props),{size:contextSize}=(0,context.j)(),contextValue={spacedAround:!isBordered&&!isSeparated,size:sizeProp||contextSize};return(0,jsx_runtime.jsx)(context.C.Provider,{value:contextValue,children:(0,jsx_runtime.jsx)(component.A,{...otherProps,ref:forwardedRef})})}),"ItemGroup")},"./packages/components/build-module/item-group/item/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>item_component});var react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),styles=__webpack_require__("./packages/components/build-module/item-group/styles.js"),context=__webpack_require__("./packages/components/build-module/item-group/context.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js");var context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const item_component=(0,context_connect.KZ)((function UnconnectedItem(props,forwardedRef){const{role,wrapperClassName,...otherProps}=function useItem(props){const{as:asProp,className,onClick,role="listitem",size:sizeProp,...otherProps}=(0,use_context_system.A)(props,"Item"),{spacedAround,size:contextSize}=(0,context.j)(),size=sizeProp||contextSize,as=asProp||(void 0!==onClick?"button":"div"),cx=(0,use_cx.l)(),classes=(0,react.useMemo)((()=>cx(("button"===as||"a"===as)&&styles.DB(as),styles.AV[size]||styles.AV.medium,styles.AS,spacedAround&&styles.GN,className)),[as,className,cx,size,spacedAround]),wrapperClassName=cx(styles.D5);return{as,className:classes,onClick,wrapperClassName,role,...otherProps}}(props);return(0,jsx_runtime.jsx)("div",{role,className:wrapperClassName,children:(0,jsx_runtime.jsx)(component.A,{...otherProps,ref:forwardedRef})})}),"Item")},"./packages/components/build-module/item-group/styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AS:()=>item,AV:()=>itemSizes,Ci:()=>separated,D5:()=>itemWrapper,DB:()=>unstyledButton,GN:()=>spacedAround,Wf:()=>rounded,sW:()=>bordered});var _emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/utils/font.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/utils/config-values.js");const unstyledButton=as=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)("font-size:",(0,_utils__WEBPACK_IMPORTED_MODULE_1__.g)("default.fontSize"),";font-family:inherit;appearance:none;border:1px solid transparent;cursor:pointer;background:none;text-align:start;text-decoration:","a"===as?"none":void 0,";svg,path{fill:currentColor;}&:hover{color:",_utils__WEBPACK_IMPORTED_MODULE_2__.l.theme.accent,";}&:focus{box-shadow:none;outline:none;}&:focus-visible{box-shadow:0 0 0 var( --wp-admin-border-width-focus ) ",_utils__WEBPACK_IMPORTED_MODULE_2__.l.theme.accent,";outline:2px solid transparent;outline-offset:0;}","","",""),itemWrapper={name:"1bcj5ek",styles:"width:100%;display:block"},item={name:"150ruhm",styles:"box-sizing:border-box;width:100%;display:block;margin:0;color:inherit"},bordered=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)("border:1px solid ",_utils__WEBPACK_IMPORTED_MODULE_3__.A.surfaceBorderColor,";","","",""),separated=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)(">*:not( marquee )>*{border-bottom:1px solid ",_utils__WEBPACK_IMPORTED_MODULE_3__.A.surfaceBorderColor,";}>*:last-of-type>*:not( :focus ){border-bottom-color:transparent;}","","",""),borderRadius=_utils__WEBPACK_IMPORTED_MODULE_3__.A.radiusSmall,spacedAround=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)("border-radius:",borderRadius,";","","",""),rounded=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)("border-radius:",borderRadius,";>*:first-of-type>*{border-top-left-radius:",borderRadius,";border-top-right-radius:",borderRadius,";}>*:last-of-type>*{border-bottom-left-radius:",borderRadius,";border-bottom-right-radius:",borderRadius,";}","","",""),baseFontHeight=`calc(${_utils__WEBPACK_IMPORTED_MODULE_3__.A.fontSize} * ${_utils__WEBPACK_IMPORTED_MODULE_3__.A.fontLineHeightBase})`,paddingY=`calc((${_utils__WEBPACK_IMPORTED_MODULE_3__.A.controlHeight} - ${baseFontHeight} - 2px) / 2)`,paddingYSmall=`calc((${_utils__WEBPACK_IMPORTED_MODULE_3__.A.controlHeightSmall} - ${baseFontHeight} - 2px) / 2)`,paddingYLarge=`calc((${_utils__WEBPACK_IMPORTED_MODULE_3__.A.controlHeightLarge} - ${baseFontHeight} - 2px) / 2)`,itemSizes={small:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)("padding:",paddingYSmall," ",_utils__WEBPACK_IMPORTED_MODULE_3__.A.controlPaddingXSmall,"px;","","",""),medium:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)("padding:",paddingY," ",_utils__WEBPACK_IMPORTED_MODULE_3__.A.controlPaddingX,"px;","","",""),large:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)("padding:",paddingYLarge," ",_utils__WEBPACK_IMPORTED_MODULE_3__.A.controlPaddingXLarge,"px;","","","")}},"./packages/components/build-module/modal/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>modal});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_focus_on_mount=__webpack_require__("./packages/compose/build-module/hooks/use-focus-on-mount/index.js"),use_constrained_tabbing=__webpack_require__("./packages/compose/build-module/hooks/use-constrained-tabbing/index.js"),use_focus_return=__webpack_require__("./packages/compose/build-module/hooks/use-focus-return/index.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),library_close=__webpack_require__("./packages/icons/build-module/library/close.js"),get_scroll_container=__webpack_require__("./packages/dom/build-module/dom/get-scroll-container.js");const LIVE_REGION_ARIA_ROLES=new Set(["alert","status","log","marquee","timer"]),hiddenElementsByDepth=[];function elementShouldBeHidden(element){const role=element.getAttribute("role");return!("SCRIPT"===element.tagName||element.hasAttribute("aria-hidden")||element.hasAttribute("aria-live")||role&&LIVE_REGION_ARIA_ROLES.has(role))}var build_module_button=__webpack_require__("./packages/components/build-module/button/index.js"),style_provider=__webpack_require__("./packages/components/build-module/style-provider/index.js"),with_ignore_ime_events=__webpack_require__("./packages/components/build-module/utils/with-ignore-ime-events.js"),component=__webpack_require__("./packages/components/build-module/spacer/component.js"),use_reduced_motion=__webpack_require__("./packages/compose/build-module/hooks/use-reduced-motion/index.js"),config_values=__webpack_require__("./packages/components/build-module/utils/config-values.js"),warning_build_module=__webpack_require__("./packages/warning/build-module/index.js");const FRAME_ANIMATION_DURATION=config_values.A.transitionDuration,FRAME_ANIMATION_DURATION_NUMBER=Number.parseInt(config_values.A.transitionDuration),EXIT_ANIMATION_NAME="components-modal__disappear-animation";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalContext=(0,react.createContext)(new Set),bodyOpenClasses=new Map;const Modal=(0,react.forwardRef)((function UnforwardedModal(props,forwardedRef){const{bodyOpenClassName="modal-open",role="dialog",title=null,focusOnMount=!0,shouldCloseOnEsc=!0,shouldCloseOnClickOutside=!0,isDismissible=!0,aria={labelledby:void 0,describedby:void 0},onRequestClose,icon,closeButtonLabel,children,style,overlayClassName:overlayClassnameProp,className,contentLabel,onKeyDown,isFullScreen=!1,size,headerActions=null,__experimentalHideHeader=!1}=props,ref=(0,react.useRef)(),instanceId=(0,use_instance_id.A)(Modal),headingId=title?`components-modal-header-${instanceId}`:aria.labelledby,focusOnMountRef=(0,use_focus_on_mount.A)("firstContentElement"===focusOnMount?"firstElement":focusOnMount),constrainedTabbingRef=(0,use_constrained_tabbing.A)(),focusReturnRef=(0,use_focus_return.A)(),contentRef=(0,react.useRef)(null),childrenContainerRef=(0,react.useRef)(null),[hasScrolledContent,setHasScrolledContent]=(0,react.useState)(!1),[hasScrollableContent,setHasScrollableContent]=(0,react.useState)(!1);let sizeClass;isFullScreen||"fill"===size?sizeClass="is-full-screen":size&&(sizeClass=`has-size-${size}`);const isContentScrollable=(0,react.useCallback)((()=>{if(!contentRef.current)return;const closestScrollContainer=(0,get_scroll_container.A)(contentRef.current);contentRef.current===closestScrollContainer?setHasScrollableContent(!0):setHasScrollableContent(!1)}),[contentRef]);(0,react.useEffect)((()=>(function modalize(modalElement){const elements=Array.from(document.body.children),hiddenElements=[];hiddenElementsByDepth.push(hiddenElements);for(const element of elements)element!==modalElement&&elementShouldBeHidden(element)&&(element.setAttribute("aria-hidden","true"),hiddenElements.push(element))}(ref.current),()=>function unmodalize(){const hiddenElements=hiddenElementsByDepth.pop();if(hiddenElements)for(const element of hiddenElements)element.removeAttribute("aria-hidden")}())),[]);const onRequestCloseRef=(0,react.useRef)();(0,react.useEffect)((()=>{onRequestCloseRef.current=onRequestClose}),[onRequestClose]);const dismissers=(0,react.useContext)(ModalContext),[nestedDismissers]=(0,react.useState)((()=>new Set));(0,react.useEffect)((()=>{dismissers.add(onRequestCloseRef);for(const dismisser of dismissers)dismisser!==onRequestCloseRef&&dismisser.current?.();return()=>{for(const dismisser of nestedDismissers)dismisser.current?.();dismissers.delete(onRequestCloseRef)}}),[dismissers,nestedDismissers]),(0,react.useEffect)((()=>{var _bodyOpenClasses$get;const theClass=bodyOpenClassName,oneMore=1+(null!==(_bodyOpenClasses$get=bodyOpenClasses.get(theClass))&&void 0!==_bodyOpenClasses$get?_bodyOpenClasses$get:0);return bodyOpenClasses.set(theClass,oneMore),document.body.classList.add(bodyOpenClassName),()=>{const oneLess=bodyOpenClasses.get(theClass)-1;0===oneLess?(document.body.classList.remove(theClass),bodyOpenClasses.delete(theClass)):bodyOpenClasses.set(theClass,oneLess)}}),[bodyOpenClassName]);const{closeModal,frameRef,frameStyle,overlayClassname}=function useModalExitAnimation(){const frameRef=(0,react.useRef)(),[isAnimatingOut,setIsAnimatingOut]=(0,react.useState)(!1),isReducedMotion=(0,use_reduced_motion.A)(),closeModal=(0,react.useCallback)((()=>new Promise((closeModalResolve=>{const frameEl=frameRef.current;if(isReducedMotion)return void closeModalResolve();if(!frameEl)return!0===globalThis.SCRIPT_DEBUG&&!0===globalThis.SCRIPT_DEBUG&&(0,warning_build_module.A)("wp.components.Modal: the Modal component can't be closed with an exit animation because of a missing reference to the modal frame element."),void closeModalResolve();let handleAnimationEnd;Promise.race([new Promise((animationResolve=>{handleAnimationEnd=e=>{e.animationName===EXIT_ANIMATION_NAME&&animationResolve()},frameEl.addEventListener("animationend",handleAnimationEnd),setIsAnimatingOut(!0)})),new Promise((timeoutResolve=>{setTimeout((()=>timeoutResolve()),1.2*FRAME_ANIMATION_DURATION_NUMBER)}))]).then((()=>{handleAnimationEnd&&frameEl.removeEventListener("animationend",handleAnimationEnd),setIsAnimatingOut(!1),closeModalResolve()}))}))),[isReducedMotion]);return{overlayClassname:isAnimatingOut?"is-animating-out":void 0,frameRef,frameStyle:{"--modal-frame-animation-duration":`${FRAME_ANIMATION_DURATION}`},closeModal}}();(0,react.useLayoutEffect)((()=>{if(!window.ResizeObserver||!childrenContainerRef.current)return;const resizeObserver=new ResizeObserver(isContentScrollable);return resizeObserver.observe(childrenContainerRef.current),isContentScrollable(),()=>{resizeObserver.disconnect()}}),[isContentScrollable,childrenContainerRef]);const onContentContainerScroll=(0,react.useCallback)((e=>{var _e$currentTarget$scro;const scrollY=null!==(_e$currentTarget$scro=e?.currentTarget?.scrollTop)&&void 0!==_e$currentTarget$scro?_e$currentTarget$scro:-1;!hasScrolledContent&&scrollY>0?setHasScrolledContent(!0):hasScrolledContent&&scrollY<=0&&setHasScrolledContent(!1)}),[hasScrolledContent]);let pressTarget=null;const overlayPressHandlers={onPointerDown:event=>{event.target===event.currentTarget&&(pressTarget=event.target,event.preventDefault())},onPointerUp:({target,button})=>{const isSameTarget=target===pressTarget;pressTarget=null,0===button&&isSameTarget&&closeModal().then((()=>onRequestClose()))}},modal=(0,jsx_runtime.jsx)("div",{ref:(0,use_merge_refs.A)([ref,forwardedRef]),className:(0,clsx.A)("components-modal__screen-overlay",overlayClassname,overlayClassnameProp),onKeyDown:(0,with_ignore_ime_events.n)((function handleEscapeKeyDown(event){!shouldCloseOnEsc||"Escape"!==event.code&&"Escape"!==event.key||event.defaultPrevented||(event.preventDefault(),closeModal().then((()=>onRequestClose(event))))})),...shouldCloseOnClickOutside?overlayPressHandlers:{},children:(0,jsx_runtime.jsx)(style_provider.A,{document,children:(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)("components-modal__frame",sizeClass,className),style:{...frameStyle,...style},ref:(0,use_merge_refs.A)([frameRef,constrainedTabbingRef,focusReturnRef,"firstContentElement"!==focusOnMount?focusOnMountRef:null]),role,"aria-label":contentLabel,"aria-labelledby":contentLabel?void 0:headingId,"aria-describedby":aria.describedby,tabIndex:-1,onKeyDown,children:(0,jsx_runtime.jsxs)("div",{className:(0,clsx.A)("components-modal__content",{"hide-header":__experimentalHideHeader,"is-scrollable":hasScrollableContent,"has-scrolled-content":hasScrolledContent}),role:"document",onScroll:onContentContainerScroll,ref:contentRef,"aria-label":hasScrollableContent?(0,build_module.__)("Scrollable section"):void 0,tabIndex:hasScrollableContent?0:void 0,children:[!__experimentalHideHeader&&(0,jsx_runtime.jsxs)("div",{className:"components-modal__header",children:[(0,jsx_runtime.jsxs)("div",{className:"components-modal__header-heading-container",children:[icon&&(0,jsx_runtime.jsx)("span",{className:"components-modal__icon-container","aria-hidden":!0,children:icon}),title&&(0,jsx_runtime.jsx)("h1",{id:headingId,className:"components-modal__header-heading",children:title})]}),headerActions,isDismissible&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(component.A,{marginBottom:0,marginLeft:3}),(0,jsx_runtime.jsx)(build_module_button.Ay,{size:"small",onClick:event=>closeModal().then((()=>onRequestClose(event))),icon:library_close.A,label:closeButtonLabel||(0,build_module.__)("Close")})]})]}),(0,jsx_runtime.jsx)("div",{ref:(0,use_merge_refs.A)([childrenContainerRef,"firstContentElement"===focusOnMount?focusOnMountRef:null]),children})]})})})});return(0,react_dom.createPortal)((0,jsx_runtime.jsx)(ModalContext.Provider,{value:nestedDismissers,children:modal}),document.body)})),modal=Modal},"./packages/components/build-module/search-control/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>search_control});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),icon=__webpack_require__("./packages/icons/build-module/icon/index.js"),search=__webpack_require__("./packages/icons/build-module/library/search.js"),close_small=__webpack_require__("./packages/icons/build-module/library/close-small.js"),react=__webpack_require__("./node_modules/react/index.js"),deprecated_build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),build_module_button=__webpack_require__("./packages/components/build-module/button/index.js"),context_system_provider=__webpack_require__("./packages/components/build-module/context/context-system-provider.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),space=__webpack_require__("./packages/components/build-module/utils/space.js"),input_control=__webpack_require__("./packages/components/build-module/input-control/index.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js");const inlinePadding=({size})=>(0,space.x)("compact"===size?1:2),SuffixItemWrapper=(0,emotion_styled_base_browser_esm.A)("div",{target:"effl84m1"})("display:flex;padding-inline-end:",inlinePadding,";svg{fill:currentColor;}"),StyledInputControl=(0,emotion_styled_base_browser_esm.A)(input_control.Ay,{target:"effl84m0"})("input[type='search']{&::-webkit-search-decoration,&::-webkit-search-cancel-button,&::-webkit-search-results-button,&::-webkit-search-results-decoration{-webkit-appearance:none;}}&:not( :focus-within ){--wp-components-color-background:",colors_values.l.theme.gray[100],";}");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function SuffixItem({searchRef,value,onChange,onClose}){if(!onClose&&!value)return(0,jsx_runtime.jsx)(icon.A,{icon:search.A});onClose&&(0,deprecated_build_module.A)("`onClose` prop in wp.components.SearchControl",{since:"6.8"});return(0,jsx_runtime.jsx)(build_module_button.Ay,{size:"small",icon:close_small.A,label:onClose?(0,build_module.__)("Close search"):(0,build_module.__)("Reset search"),onClick:null!=onClose?onClose:()=>{onChange(""),searchRef.current?.focus()}})}const SearchControl=(0,react.forwardRef)((function UnforwardedSearchControl({__nextHasNoMarginBottom=!1,className,onChange,value,label=(0,build_module.__)("Search"),placeholder=(0,build_module.__)("Search"),hideLabelFromVision=!0,onClose,size="default",...restProps},forwardedRef){const{disabled,...filteredRestProps}=restProps,searchRef=(0,react.useRef)(null),instanceId=(0,use_instance_id.A)(SearchControl,"components-search-control"),contextValue=(0,react.useMemo)((()=>({BaseControl:{_overrides:{__nextHasNoMarginBottom},__associatedWPComponentName:"SearchControl"},InputBase:{isBorderless:!0}})),[__nextHasNoMarginBottom]);return(0,jsx_runtime.jsx)(context_system_provider.c7,{value:contextValue,children:(0,jsx_runtime.jsx)(StyledInputControl,{__next40pxDefaultSize:!0,id:instanceId,hideLabelFromVision,label,ref:(0,use_merge_refs.A)([searchRef,forwardedRef]),type:"search",size,className:(0,clsx.A)("components-search-control",className),onChange:nextValue=>onChange(null!=nextValue?nextValue:""),autoComplete:"off",placeholder,value:null!=value?value:"",suffix:(0,jsx_runtime.jsx)(SuffixItemWrapper,{size,children:(0,jsx_runtime.jsx)(SuffixItem,{searchRef,value,onChange,onClose})}),...filteredRestProps})})})),search_control=SearchControl},"./packages/components/build-module/toggle-group-control/toggle-group-control-option-icon/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/icon/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((function UnforwardedToggleGroupControlOptionIcon(props,ref){const{icon,label,...restProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__.A,{...restProps,isIcon:!0,"aria-label":label,showTooltip:!0,ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_2__.A,{icon})})}))},"./packages/components/build-module/toggle-group-control/toggle-group-control-option/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function UnforwardedToggleGroupControlOption(props,ref){const{label,...restProps}=props,optionLabel=restProps["aria-label"]||label;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__.A,{...restProps,"aria-label":optionLabel,ref,children:label})}))},"./packages/components/build-module/v-stack/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>v_stack_component});var context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),hook=__webpack_require__("./packages/components/build-module/h-stack/hook.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const v_stack_component=(0,context_connect.KZ)((function UnconnectedVStack(props,forwardedRef){const vStackProps=function useVStack(props){const{expanded=!1,alignment="stretch",...otherProps}=(0,use_context_system.A)(props,"VStack");return(0,hook.A)({direction:"column",expanded,alignment,...otherProps})}(props);return(0,jsx_runtime.jsx)(component.A,{...vStackProps,ref:forwardedRef})}),"VStack")},"./packages/compose/build-module/hooks/use-debounced-input/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useDebouncedInput});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_debounce__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-debounce/index.js");function useDebouncedInput(defaultValue=""){const[input,setInput]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),[debouncedInput,setDebouncedState]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),setDebouncedInput=(0,_use_debounce__WEBPACK_IMPORTED_MODULE_1__.A)(setDebouncedState,250);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setDebouncedInput(input)}),[input,setDebouncedInput]),[input,setInput,debouncedInput]}},"./packages/dom/build-module/dom/get-computed-style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>getComputedStyle});var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/dom/build-module/utils/assert-is-defined.js");function getComputedStyle(element){return(0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.e)(element.ownerDocument.defaultView,"element.ownerDocument.defaultView"),element.ownerDocument.defaultView.getComputedStyle(element)}},"./packages/dom/build-module/dom/get-scroll-container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>getScrollContainer});var _get_computed_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/dom/build-module/dom/get-computed-style.js");function getScrollContainer(node,direction="vertical"){if(node){if(("vertical"===direction||"all"===direction)&&node.scrollHeight>node.clientHeight){const{overflowY}=(0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__.A)(node);if(/(auto|scroll)/.test(overflowY))return node}if(("horizontal"===direction||"all"===direction)&&node.scrollWidth>node.clientWidth){const{overflowX}=(0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__.A)(node);if(/(auto|scroll)/.test(overflowX))return node}return node.ownerDocument===node.parentNode?node:getScrollContainer(node.parentNode,direction)}}},"./packages/element/build-module/create-interpolate-element.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let indoc,offset,output,stack;const tokenizer=/<(\/)?(\w+)\s*(\/)?>/g;function createFrame(element,tokenStart,tokenLength,prevOffset,leadingTextStart){return{element,tokenStart,tokenLength,prevOffset,leadingTextStart,children:[]}}const isValidConversionMap=conversionMap=>{const isObject="object"==typeof conversionMap,values=isObject&&Object.values(conversionMap);return isObject&&values.length&&values.every((element=>(0,_react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element)))};function proceed(conversionMap){const next=function nextToken(){const matches=tokenizer.exec(indoc);if(null===matches)return["no-more-tokens"];const startedAt=matches.index,[match,isClosing,name,isSelfClosed]=matches,length=match.length;if(isSelfClosed)return["self-closed",name,startedAt,length];if(isClosing)return["closer",name,startedAt,length];return["opener",name,startedAt,length]}(),[tokenType,name,startOffset,tokenLength]=next,stackDepth=stack.length,leadingTextStart=startOffset>offset?offset:null;if(!conversionMap[name])return addText(),!1;switch(tokenType){case"no-more-tokens":if(0!==stackDepth){const{leadingTextStart:stackLeadingText,tokenStart}=stack.pop();output.push(indoc.substr(stackLeadingText,tokenStart))}return addText(),!1;case"self-closed":return 0===stackDepth?(null!==leadingTextStart&&output.push(indoc.substr(leadingTextStart,startOffset-leadingTextStart)),output.push(conversionMap[name]),offset=startOffset+tokenLength,!0):(addChild(createFrame(conversionMap[name],startOffset,tokenLength)),offset=startOffset+tokenLength,!0);case"opener":return stack.push(createFrame(conversionMap[name],startOffset,tokenLength,startOffset+tokenLength,leadingTextStart)),offset=startOffset+tokenLength,!0;case"closer":if(1===stackDepth)return function closeOuterElement(endOffset){const{element,leadingTextStart,prevOffset,tokenStart,children}=stack.pop(),text=endOffset?indoc.substr(prevOffset,endOffset-prevOffset):indoc.substr(prevOffset);text&&children.push(text);null!==leadingTextStart&&output.push(indoc.substr(leadingTextStart,tokenStart-leadingTextStart));output.push((0,_react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,null,...children))}(startOffset),offset=startOffset+tokenLength,!0;const stackTop=stack.pop(),text=indoc.substr(stackTop.prevOffset,startOffset-stackTop.prevOffset);stackTop.children.push(text),stackTop.prevOffset=startOffset+tokenLength;const frame=createFrame(stackTop.element,stackTop.tokenStart,stackTop.tokenLength,startOffset+tokenLength);return frame.children=stackTop.children,addChild(frame),offset=startOffset+tokenLength,!0;default:return addText(),!1}}function addText(){const length=indoc.length-offset;0!==length&&output.push(indoc.substr(offset,length))}function addChild(frame){const{element,tokenStart,tokenLength,prevOffset,children}=frame,parent=stack[stack.length-1],text=indoc.substr(parent.prevOffset,tokenStart-parent.prevOffset);text&&parent.children.push(text),parent.children.push((0,_react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,null,...children)),parent.prevOffset=prevOffset||tokenStart+tokenLength}const __WEBPACK_DEFAULT_EXPORT__=(interpolatedString,conversionMap)=>{if(indoc=interpolatedString,offset=0,output=[],stack=[],tokenizer.lastIndex=0,!isValidConversionMap(conversionMap))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do{}while(proceed(conversionMap));return(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,...output)}},"./packages/icons/build-module/library/arrow-down.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"})})},"./packages/icons/build-module/library/arrow-right.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"})})},"./packages/icons/build-module/library/close-small.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})})},"./packages/icons/build-module/library/search.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"})})}}]);