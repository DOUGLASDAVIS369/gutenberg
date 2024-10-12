/*! For license information please see 7695.6b7a1a98.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[7695],{"./node_modules/deepmerge/dist/cjs.js":module=>{"use strict";var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{"use strict";module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/highlight-words-core/dist/index.js":module=>{module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape,caseSensitive,sanitize,searchWords,textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start,end,highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])},"./node_modules/is-plain-object/dist/is-plain-object.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isObject(o){return"[object Object]"===Object.prototype.toString.call(o)}function isPlainObject(o){var ctor,prot;return!1!==isObject(o)&&(void 0===(ctor=o.constructor)||!1!==isObject(prot=ctor.prototype)&&!1!==prot.hasOwnProperty("isPrototypeOf"))}__webpack_require__.d(__webpack_exports__,{Q:()=>isPlainObject})},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/DS36B3MQ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>useCompositeTypeahead});var _5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/5VQZOHHZ.js"),_WENSINUV_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/WENSINUV.js"),_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js"),_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js"),_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js"),_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/core/esm/utils/events.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),chars="";function clearChars(){chars=""}function itemTextStartsWith(item,text){var _a;const itemText=(null==(_a=item.element)?void 0:_a.textContent)||item.children||"value"in item&&item.value;return!!itemText&&(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__.J2)(itemText).trim().toLowerCase().startsWith(text.toLowerCase())}var useCompositeTypeahead=(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_5__.ab)((function useCompositeTypeahead2(_a){var _b=_a,{store,typeahead=!0}=_b,props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__.YG)(_b,["store","typeahead"]);const context=(0,_WENSINUV_js__WEBPACK_IMPORTED_MODULE_7__.k)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__.V1)(store,!1);const onKeyDownCaptureProp=props.onKeyDownCapture,cleanupTimeoutRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),onKeyDownCapture=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_8__._q)((event=>{if(null==onKeyDownCaptureProp||onKeyDownCaptureProp(event),event.defaultPrevented)return;if(!typeahead)return;if(!store)return;const{renderedItems,items,activeId}=store.getState();if(!function isValidTypeaheadEvent(event){const target=event.target;return(!target||!(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__.mB)(target))&&(!(" "!==event.key||!chars.length)||1===event.key.length&&!event.ctrlKey&&!event.altKey&&!event.metaKey&&/^[\p{Letter}\p{Number}]$/u.test(event.key))}(event))return clearChars();let enabledItems=function getEnabledItems(items){return items.filter((item=>!item.disabled))}(renderedItems.length?renderedItems:items);if(!function isSelfTargetOrItem(event,items){if((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_2__.uh)(event))return!0;const target=event.target;return!!target&&items.some((item=>item.element===target))}(event,enabledItems))return clearChars();event.preventDefault(),window.clearTimeout(cleanupTimeoutRef.current),cleanupTimeoutRef.current=window.setTimeout((()=>{chars=""}),500);const char=event.key.toLowerCase();chars+=char,enabledItems=function getSameInitialItems(items,char,activeId){if(!activeId)return items;const activeItem=items.find((item=>item.id===activeId));return activeItem&&itemTextStartsWith(activeItem,char)?chars!==char&&itemTextStartsWith(activeItem,chars)?items:(chars=char,(0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_4__._d)(items.filter((item=>itemTextStartsWith(item,chars))),activeId).filter((item=>item.id!==activeId))):items}(enabledItems,char,activeId);const item=enabledItems.find((item2=>itemTextStartsWith(item2,chars)));item?store.move(item.id):clearChars()}));return props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__.ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__.IA)({},props),{onKeyDownCapture}),(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__.HR)(props)}));(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_5__.Rf)((function CompositeTypeahead2(props){const htmlProps=useCompositeTypeahead(props);return(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_5__.n)("div",htmlProps)}))},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/DWZ7E5TJ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>useComboboxContext,PV:()=>useComboboxProviderContext});var _WENSINUV_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/WENSINUV.js"),_54MGSIOI_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/54MGSIOI.js"),_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ctx=((0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.B0)([_54MGSIOI_js__WEBPACK_IMPORTED_MODULE_2__.wf,_WENSINUV_js__WEBPACK_IMPORTED_MODULE_3__.ws],[_54MGSIOI_js__WEBPACK_IMPORTED_MODULE_2__.s1,_WENSINUV_js__WEBPACK_IMPORTED_MODULE_3__.aN])),useComboboxContext=ctx.useContext,useComboboxProviderContext=(ctx.useScopedContext,ctx.useProviderContext);ctx.ContextProvider,ctx.ScopedContextProvider,(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1)},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/EYKMH5G5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>CheckboxCheckedContext});var CheckboxCheckedContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)(!1)},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/IZAFJHVY.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>usePopoverDisclosure});var NAXN2XAB=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/NAXN2XAB.js"),HKOOKEDE=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js"),Z32BISHQ=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js"),_3YLGPPWQ=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),HWOIWM4O=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js"),react=__webpack_require__("./node_modules/react/index.js"),useButton=(0,HKOOKEDE.ab)((function useButton2(props){const ref=(0,react.useRef)(null),tagName=(0,Z32BISHQ.vO)(ref,"button"),[isNativeButton,setIsNativeButton]=(0,react.useState)((()=>!!tagName&&(0,HWOIWM4O.Bm)({tagName,type:props.type})));return(0,react.useEffect)((()=>{ref.current&&setIsNativeButton((0,HWOIWM4O.Bm)(ref.current))}),[]),props=(0,_3YLGPPWQ.ko)((0,_3YLGPPWQ.IA)({role:isNativeButton||"a"===tagName?void 0:"button"},props),{ref:(0,Z32BISHQ.SV)(ref,props.ref)}),props=(0,NAXN2XAB.D)(props)})),RGUP62TM=((0,HKOOKEDE.Rf)((function Button2(props){const htmlProps=useButton(props);return(0,HKOOKEDE.n)("button",htmlProps)})),__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/RGUP62TM.js")),PBFD2E7P=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),symbol=Symbol("disclosure"),useDisclosure=(0,HKOOKEDE.ab)((function useDisclosure2(_a){var _b=_a,{store,toggleOnClick=!0}=_b,props=(0,_3YLGPPWQ.YG)(_b,["store","toggleOnClick"]);const context=(0,RGUP62TM.vO)();store=store||context,(0,PBFD2E7P.V1)(store,!1);const ref=(0,react.useRef)(null),[expanded,setExpanded]=(0,react.useState)(!1),disclosureElement=store.useState("disclosureElement"),open=store.useState("open");(0,react.useEffect)((()=>{let isCurrentDisclosure=disclosureElement===ref.current;(null==disclosureElement?void 0:disclosureElement.isConnected)||(null==store||store.setDisclosureElement(ref.current),isCurrentDisclosure=!0),setExpanded(open&&isCurrentDisclosure)}),[disclosureElement,store,open]);const onClickProp=props.onClick,toggleOnClickProp=(0,Z32BISHQ.O4)(toggleOnClick),[isDuplicate,metadataProps]=(0,Z32BISHQ.P1)(props,symbol,!0),onClick=(0,Z32BISHQ._q)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||isDuplicate||toggleOnClickProp(event)&&(null==store||store.setDisclosureElement(event.currentTarget),null==store||store.toggle())})),contentElement=store.useState("contentElement");return props=(0,_3YLGPPWQ.ko)((0,_3YLGPPWQ.IA)((0,_3YLGPPWQ.IA)({"aria-expanded":expanded,"aria-controls":null==contentElement?void 0:contentElement.id},metadataProps),props),{ref:(0,Z32BISHQ.SV)(ref,props.ref),onClick}),props=useButton(props)})),DU4D3UCJ=((0,HKOOKEDE.Rf)((function Disclosure2(props){const htmlProps=useDisclosure(props);return(0,HKOOKEDE.n)("button",htmlProps)})),__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/DU4D3UCJ.js")),useDialogDisclosure=(0,HKOOKEDE.ab)((function useDialogDisclosure2(_a){var _b=_a,{store}=_b,props=(0,_3YLGPPWQ.YG)(_b,["store"]);const context=(0,DU4D3UCJ.cH)();store=store||context,(0,PBFD2E7P.V1)(store,!1);const contentElement=store.useState("contentElement");return props=(0,_3YLGPPWQ.IA)({"aria-haspopup":(0,HWOIWM4O.Tc)(contentElement,"dialog")},props),props=useDisclosure((0,_3YLGPPWQ.IA)({store},props))})),_54MGSIOI=((0,HKOOKEDE.Rf)((function DialogDisclosure2(props){const htmlProps=useDialogDisclosure(props);return(0,HKOOKEDE.n)("button",htmlProps)})),__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/54MGSIOI.js")),usePopoverAnchor=(0,HKOOKEDE.ab)((function usePopoverAnchor2(_a){var _b=_a,{store}=_b,props=(0,_3YLGPPWQ.YG)(_b,["store"]);const context=(0,_54MGSIOI.zG)();return store=store||context,props=(0,_3YLGPPWQ.ko)((0,_3YLGPPWQ.IA)({},props),{ref:(0,Z32BISHQ.SV)(null==store?void 0:store.setAnchorElement,props.ref)})})),jsx_runtime=((0,HKOOKEDE.Rf)((function PopoverAnchor2(props){const htmlProps=usePopoverAnchor(props);return(0,HKOOKEDE.n)("div",htmlProps)})),__webpack_require__("./node_modules/react/jsx-runtime.js")),usePopoverDisclosure=(0,HKOOKEDE.ab)((function usePopoverDisclosure2(_a){var _b=_a,{store}=_b,props=(0,_3YLGPPWQ.YG)(_b,["store"]);const context=(0,_54MGSIOI.zG)();store=store||context,(0,PBFD2E7P.V1)(store,!1);const onClickProp=props.onClick,onClick=(0,Z32BISHQ._q)((event=>{null==store||store.setAnchorElement(event.currentTarget),null==onClickProp||onClickProp(event)}));return props=(0,Z32BISHQ.w7)(props,(element=>(0,jsx_runtime.jsx)(_54MGSIOI.s1,{value:store,children:element})),[store]),props=(0,_3YLGPPWQ.ko)((0,_3YLGPPWQ.IA)({},props),{onClick}),props=usePopoverAnchor((0,_3YLGPPWQ.IA)({store},props)),props=useDialogDisclosure((0,_3YLGPPWQ.IA)({store},props))}));(0,HKOOKEDE.Rf)((function PopoverDisclosure2(props){const htmlProps=usePopoverDisclosure(props);return(0,HKOOKEDE.n)("button",htmlProps)}))},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/OBZMLI6J.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>useCompositeHover});var _WENSINUV_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/WENSINUV.js"),_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js"),_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js"),_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js"),_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ariakit/core/esm/utils/focus.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function getMouseDestination(event){const relatedTarget=event.relatedTarget;return(null==relatedTarget?void 0:relatedTarget.nodeType)===Node.ELEMENT_NODE?relatedTarget:null}var symbol=Symbol("composite-hover");var useCompositeHover=(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__.ab)((function useCompositeHover2(_a){var _b=_a,{store,focusOnHover=!0,blurOnHoverEnd=!!focusOnHover}=_b,props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.YG)(_b,["store","focusOnHover","blurOnHoverEnd"]);const context=(0,_WENSINUV_js__WEBPACK_IMPORTED_MODULE_5__.k)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.V1)(store,!1);const isMouseMoving=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__.P$)(),onMouseMoveProp=props.onMouseMove,focusOnHoverProp=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__.O4)(focusOnHover),onMouseMove=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__._q)((event=>{if(null==onMouseMoveProp||onMouseMoveProp(event),!event.defaultPrevented&&isMouseMoving()&&focusOnHoverProp(event)){if(!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.oW)(event.currentTarget)){const baseElement=null==store?void 0:store.getState().baseElement;baseElement&&!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.AJ)(baseElement)&&baseElement.focus()}null==store||store.setActiveId(event.currentTarget.id)}})),onMouseLeaveProp=props.onMouseLeave,blurOnHoverEndProp=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__.O4)(blurOnHoverEnd),onMouseLeave=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__._q)((event=>{var _a2;null==onMouseLeaveProp||onMouseLeaveProp(event),event.defaultPrevented||isMouseMoving()&&(function hoveringInside(event){const nextElement=getMouseDestination(event);return!!nextElement&&(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__.gR)(event.currentTarget,nextElement)}(event)||function movingToAnotherItem(event){let dest=getMouseDestination(event);if(!dest)return!1;do{if((0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.mQ)(dest,symbol)&&dest[symbol])return!0;dest=dest.parentElement}while(dest);return!1}(event)||focusOnHoverProp(event)&&blurOnHoverEndProp(event)&&(null==store||store.setActiveId(null),null==(_a2=null==store?void 0:store.getState().baseElement)||_a2.focus()))})),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((element=>{element&&(element[symbol]=!0)}),[]);return props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.IA)({},props),{ref:(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__.SV)(ref,props.ref),onMouseMove,onMouseLeave}),(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.HR)(props)}));(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__.ph)((0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__.Rf)((function CompositeHover2(props){const htmlProps=useCompositeHover(props);return(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__.n)("div",htmlProps)})))},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/RPLYUYNN.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>useCheckboxCheck});var _EYKMH5G5_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/EYKMH5G5.js"),_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js"),_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),checkmark=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{display:"block",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,viewBox:"0 0 16 16",height:"1em",width:"1em",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline",{points:"4,8 7,12 12,4"})});var useCheckboxCheck=(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_2__.ab)((function useCheckboxCheck2(_a){var _b=_a,{store,checked}=_b,props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.YG)(_b,["store","checked"]);const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_EYKMH5G5_js__WEBPACK_IMPORTED_MODULE_4__.G),children=function getChildren(props){return props.checked?props.children||checkmark:"function"==typeof props.children?props.children:null}({checked:checked=null!=checked?checked:context,children:props.children});return props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.IA)({"aria-hidden":!0},props),{children,style:(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.IA)({width:"1em",height:"1em",pointerEvents:"none"},props.style)}),(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.HR)(props)}));(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_2__.Rf)((function CheckboxCheck2(props){const htmlProps=useCheckboxCheck(props);return(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_2__.n)("span",htmlProps)}))}}]);