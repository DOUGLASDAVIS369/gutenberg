"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[5217],{"./packages/keycodes/build-module/platform.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isAppleOS(_window=null){if(!_window){if("undefined"==typeof window)return!1;_window=window}const{platform}=_window.navigator;return-1!==platform.indexOf("Mac")||["iPad","iPhone"].includes(platform)}__webpack_require__.d(__webpack_exports__,{H:()=>isAppleOS})},"./packages/components/src/keyboard-shortcuts/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),mousetrap_mousetrap=__webpack_require__("./node_modules/mousetrap/mousetrap.js"),mousetrap_default=__webpack_require__.n(mousetrap_mousetrap),platform=(__webpack_require__("./node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js"),__webpack_require__("./packages/keycodes/build-module/platform.js"));const use_keyboard_shortcut=function useKeyboardShortcut(shortcuts,callback,{bindGlobal=!1,eventName="keydown",isDisabled=!1,target}={}){const currentCallbackRef=(0,react.useRef)(callback);(0,react.useEffect)((()=>{currentCallbackRef.current=callback}),[callback]),(0,react.useEffect)((()=>{if(isDisabled)return;const mousetrap=new(mousetrap_default())(target&&target.current?target.current:document);return(Array.isArray(shortcuts)?shortcuts:[shortcuts]).forEach((shortcut=>{const keys=shortcut.split("+"),modifiers=new Set(keys.filter((value=>value.length>1))),hasAlt=modifiers.has("alt"),hasShift=modifiers.has("shift");if((0,platform.H)()&&(1===modifiers.size&&hasAlt||2===modifiers.size&&hasAlt&&hasShift))throw new Error(`Cannot bind ${shortcut}. Alt and Shift+Alt modifiers are reserved for character input.`);mousetrap[bindGlobal?"bindGlobal":"bind"](shortcut,((...args)=>currentCallbackRef.current(...args)),eventName)})),()=>{mousetrap.reset()}}),[shortcuts,bindGlobal,eventName,target,isDisabled])};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function KeyboardShortcut({target,callback,shortcut,bindGlobal,eventName}){return use_keyboard_shortcut(shortcut,callback,{bindGlobal,target,eventName}),null}function KeyboardShortcuts({children,shortcuts,bindGlobal,eventName}){const target=(0,react.useRef)(null),element=Object.entries(null!=shortcuts?shortcuts:{}).map((([shortcut,callback])=>(0,jsx_runtime.jsx)(KeyboardShortcut,{shortcut,callback,bindGlobal,eventName,target},shortcut)));return react.Children.count(children)?(0,jsx_runtime.jsxs)("div",{ref:target,children:[element,children]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:element})}KeyboardShortcuts.displayName="KeyboardShortcuts";const keyboard_shortcuts=KeyboardShortcuts;try{KeyboardShortcuts.displayName="KeyboardShortcuts",KeyboardShortcuts.__docgenInfo={description:"`KeyboardShortcuts` is a component which handles keyboard sequences during the lifetime of the rendering element.\n\nWhen passed children, it will capture key events which occur on or within the children. If no children are passed, events are captured on the document.\n\nIt uses the [Mousetrap](https://craig.is/killing/mice) library to implement keyboard sequence bindings.\n\n```jsx\nimport { KeyboardShortcuts } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyKeyboardShortcuts = () => {\n\tconst [ isAllSelected, setIsAllSelected ] = useState( false );\n\tconst selectAll = () => {\n\t\tsetIsAllSelected( true );\n\t};\n\n\treturn (\n\t\t<div>\n\t\t\t<KeyboardShortcuts\n\t\t\t\tshortcuts={ {\n\t\t\t\t\t'mod+a': selectAll,\n\t\t\t\t} }\n\t\t\t/>\n\t\t\t[cmd/ctrl + A] Combination pressed? { isAllSelected ? 'Yes' : 'No' }\n\t\t</div>\n\t);\n};\n```",displayName:"KeyboardShortcuts",props:{children:{defaultValue:null,description:"Elements to render, upon whom key events are to be monitored.",name:"children",required:!1,type:{name:"ReactNode"}},shortcuts:{defaultValue:null,description:"An object of shortcut bindings, where each key is a keyboard combination,\nthe value of which is the callback to be invoked when the key combination is pressed.\n\nThe value of each shortcut should be a consistent function reference, not an anonymous function.\nOtherwise, the callback will not be correctly unbound when the component unmounts.\n\nThe `KeyboardShortcuts` component will not update to reflect a changed `shortcuts` prop.\nIf you need to change shortcuts, mount a separate `KeyboardShortcuts` element,\nwhich can be achieved by assigning a unique `key` prop.\n@see {@link https://craig.is/killing/mice Mousetrap documentation}",name:"shortcuts",required:!0,type:{name:"Record<string, (event: ExtendedKeyboardEvent, combo: string) => void>"}},bindGlobal:{defaultValue:null,description:"By default, a callback will not be invoked if the key combination occurs in an editable field.\nPass `bindGlobal` as `true` if the key events should be observed globally, including within editable fields.\n\nTip: If you need some but not all keyboard events to be observed globally,\nsimply render two distinct `KeyboardShortcuts` elements, one with and one without the `bindGlobal` prop.",name:"bindGlobal",required:!1,type:{name:"boolean"}},eventName:{defaultValue:null,description:"By default, a callback is invoked in response to the `keydown` event.\nTo override this, pass `eventName` with the name of a specific keyboard event.",name:"eventName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/keyboard-shortcuts/index.tsx#KeyboardShortcuts"]={docgenInfo:KeyboardShortcuts.__docgenInfo,name:"KeyboardShortcuts",path:"packages/components/src/keyboard-shortcuts/index.tsx#KeyboardShortcuts"})}catch(__react_docgen_typescript_loader_error){}const index_story={component:keyboard_shortcuts,title:"Components/KeyboardShortcuts",parameters:{sourceLink:"packages/components/src/keyboard-shortcuts",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=props=>(0,jsx_runtime.jsx)(keyboard_shortcuts,{...props});Template.displayName="Template";const Default=Template.bind({});Default.args={shortcuts:{a:()=>window.alert('You hit "a"!'),b:()=>window.alert('You hit "b"!')},children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{children:'Hit the "a" or "b" key in this textarea:'}),(0,jsx_runtime.jsx)("textarea",{})]})},Default.parameters={docs:{source:{code:'\n<KeyboardShortcuts\n  shortcuts={{\n    a: () => window.alert(\'You hit "a"!\'),\n    b: () => window.alert(\'You hit "b"!\'),\n  }}\n>\n  <div>\n    <p>\n      Hit the "a" or "b" key in this textarea:\n    </p>\n    <textarea />\n  </div>\n</KeyboardShortcuts>\n            '}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => <KeyboardShortcuts {...props} />",...Default.parameters?.docs?.source}}}}}]);