(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        13: function(module, exports, __webpack_require__) {
            var content = __webpack_require__(614);
            'string' == typeof content && (content = [[module.i, content, '']]);
            var options = { hmr: !0, transform: void 0, insertInto: void 0 };
            __webpack_require__(34)(content, options);
            content.locals && (module.exports = content.locals);
        },
        137: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.d(__webpack_exports__, 'a', function() {
                return FirstChapter;
            }),
                __webpack_require__.d(__webpack_exports__, 'b', function() {
                    return SecondChapter;
                }),
                __webpack_require__.d(__webpack_exports__, 'c', function() {
                    return ThirdChapter;
                });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22),
                _styles_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67),
                _styles_less__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
                    _styles_less__WEBPACK_IMPORTED_MODULE_2__
                );
            const FirstChapter = props =>
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        'div',
                        { className: _styles_less__WEBPACK_IMPORTED_MODULE_2___default.a.content },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                            {
                                primary: !0,
                                comfortable: !0,
                                onClick: () => props.changeChapter('chapter2'),
                            },
                            'Next Chapter'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            'div',
                            {
                                className:
                                    _styles_less__WEBPACK_IMPORTED_MODULE_2___default.a.chapter,
                            },
                            'Super mario landed gentry \n    erudite headmaster circus strongman, circus strongma\n    n elit super mario got milk magnum pi dolor ipsum casual style\n    landed gentry erudite headmaster barber shop quartet barber shop quartet, super mario groucho marx what a bounder magnum pi\n    lemmy elit landed gentry lando calrissian got milk barber shop quartet circus strongman barber shop quartet mexican’t dolor ipsum casual \n    style erudite headmaster? Great dictator Daniel plainview theodore roosevelt ian botham clone zone shopper theodore roosevelt, pit fighter barber \n    shop quartet hello, we’re cockneys ian botham Daniel plainview che gu\n    evara gent theodore roosevelt erudite headmaster great dictator clone zone shopper theodore roosevelt?'
                        )
                    ),
                SecondChapter = props =>
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        'div',
                        { className: _styles_less__WEBPACK_IMPORTED_MODULE_2___default.a.content },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                            {
                                primary: !0,
                                comfortable: !0,
                                onClick: () => props.changeChapter('chapter1'),
                            },
                            'Previous Chapter'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                            {
                                primary: !0,
                                comfortable: !0,
                                onClick: () => props.changeChapter('chapter3'),
                            },
                            'Next Chapter'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            'div',
                            {
                                className:
                                    _styles_less__WEBPACK_IMPORTED_MODULE_2___default.a.chapter,
                            },
                            'Mouth coiffure brigadier great dictator. Sweat irrigator, dolor sit amet groucho-a-like grooming, sweat irrigator, \n    el snort basil fawlty Refined gentlemen rugged dolor sit amet groucho-a-like grooming frontiersman charlie chaplin graeme souness waiter?\n    Consectetur erudite headmaster wario lando calrissian groucho marx. Will you do the fandango crumb catcher middle eastern despot louis xiii what a bounder?'
                        )
                    ),
                ThirdChapter = props =>
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        'div',
                        { className: _styles_less__WEBPACK_IMPORTED_MODULE_2___default.a.content },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                            {
                                primary: !0,
                                comfortable: !0,
                                onClick: () => props.changeChapter('chapter2'),
                            },
                            'Previous Chapter'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            'div',
                            {
                                className:
                                    _styles_less__WEBPACK_IMPORTED_MODULE_2___default.a.chapter,
                            },
                            'Consectetur erudite headmaster wario lando calrissian groucho marx. Will you do the fandango \n    crumb catcher middle eastern despot louis xiii what a bounder?'
                        )
                    );
        },
        16: function(module, exports, __webpack_require__) {
            var content = __webpack_require__(546);
            'string' == typeof content && (content = [[module.i, content, '']]);
            var options = { hmr: !0, transform: void 0, insertInto: void 0 };
            __webpack_require__(34)(content, options);
            content.locals && (module.exports = content.locals);
        },
        22: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            var react = __webpack_require__(0),
                react_default = __webpack_require__.n(react),
                ensureContext = (__webpack_require__(3),
                __webpack_require__(56),
                __webpack_require__(44),
                function(name, defaultValue) {
                    var contextName = (function(name) {
                        return '__fusion_named_context:' + name;
                    })(name);
                    return (
                        window[contextName] ||
                            (window[contextName] = {
                                listners: [],
                                value: defaultValue,
                                providers: 0,
                                defaultValue: defaultValue,
                            }),
                        window[contextName]
                    );
                }),
                notifyConsumers = function(name) {
                    var context = ensureContext(name);
                    context.listners.forEach(function(listner) {
                        return listner(context.value);
                    });
                },
                handleMessage = function(message) {
                    var mountedContext = ensureContext(message.context.name);
                    switch (message.type) {
                        case 'FUSION_NAMED_CONTEXT_UPDATED':
                            notifyConsumers(message.context.name);
                            break;
                        case 'FUSION_NAMED_CONTEXT_MOUNTED':
                            mountedContext.providers += 1;
                            break;
                        case 'FUSION_NAMED_CONTEXT_UNMOUNTED':
                            setTimeout(function() {
                                var unmountedContext = ensureContext(message.context.name);
                                (unmountedContext.providers -= 1),
                                    unmountedContext.providers ||
                                        ((unmountedContext.value = unmountedContext.defaultValue),
                                        notifyConsumers(message.context.name));
                            });
                    }
                };
            __webpack_require__(30),
                __webpack_require__(29),
                __webpack_require__(15),
                __webpack_require__(45),
                __webpack_require__(2);
            __webpack_require__(158);
            window.addEventListener('message', function(e) {
                e.data && e.origin === window.location.origin && handleMessage(e.data);
            });
            var componentDisplayTypes_compact = 'COMPONENT_DISPLAY_TYPE_COMPACT',
                componentDisplayTypes_comfortable = 'COMPONENT_DISPLAY_TYPE_COMFORTABLE',
                ComponentDisplayContext = (function(name) {
                    var defaultValue =
                        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                    return (
                        window['__fusion_named_context:' + name] ||
                            (window['__fusion_named_context:' + name] = Object(react.createContext)(
                                defaultValue
                            )),
                        window['__fusion_named_context:' + name]
                    );
                })('fusion-display-type-context', componentDisplayTypes_comfortable),
                tslib_es6 = __webpack_require__(82),
                styles = __webpack_require__(13),
                styles_default = __webpack_require__.n(styles);
            const Content = ({ children: children }) =>
                react_default.a.createElement(
                    'span',
                    { className: styles_default.a.button },
                    children
                );
            Content.displayName = 'ButtonContent';
            var components_Content = Content,
                classnames = __webpack_require__(28),
                classnames_default = __webpack_require__.n(classnames);
            var buttonClasses = props =>
                classnames_default()(
                    props.className,
                    styles_default.a.container,
                    (({ block: block, flex: flex }) => ({
                        [styles_default.a.block]: block,
                        [styles_default.a.flex]: flex,
                    }))(props),
                    (({ mouseHasBeenDown: mouseHasBeenDown }) => ({
                        [styles_default.a.mouseHasBeenDown]: mouseHasBeenDown,
                    }))(props),
                    (({ contained: contained, outlined: outlined, frameless: frameless }) => ({
                        [styles_default.a.contained]: contained || (!outlined && !frameless),
                        [styles_default.a.outlined]: outlined,
                        [styles_default.a.frameless]: frameless,
                    }))(props),
                    (({ primary: primary, signal: signal }) => ({
                        [styles_default.a.primary]: primary,
                        [styles_default.a.signal]: signal,
                    }))(props),
                    (({
                        compact: compact,
                        comfortable: comfortable,
                        displayType: displayType,
                    }) => ({
                        [styles_default.a.compact]:
                            displayType === componentDisplayTypes_compact || compact,
                        [styles_default.a.comfortable]:
                            (displayType === componentDisplayTypes_comfortable &&
                                displayType !== componentDisplayTypes_comfortable) ||
                            (comfortable && !compact),
                    }))(props)
                );
            const ButtonComponent = react.forwardRef((_a, ref) => {
                var {
                        children: children,
                        disabled: disabled,
                        onMouseDown: onMouseDown,
                        onMouseUp: onMouseUp,
                        onClick: onClick,
                        onClickCapture: onClickCapture,
                    } = _a,
                    props = tslib_es6.a(_a, [
                        'children',
                        'disabled',
                        'onMouseDown',
                        'onMouseUp',
                        'onClick',
                        'onClickCapture',
                    ]);
                return react.createElement(
                    'button',
                    {
                        type: 'button',
                        className: buttonClasses(props),
                        disabled: disabled,
                        onMouseDown: onMouseDown,
                        onMouseUp: onMouseUp,
                        onClick: onClick,
                        onClickCapture: onClickCapture,
                        ref: ref,
                    },
                    react.createElement(components_Content, null, children)
                );
            });
            (ButtonComponent.defaultProps = {
                disabled: !0,
                onClick: () => {},
                onClickCapture: () => {},
                onMouseDown: () => {},
                onMouseUp: () => {},
            }),
                (ButtonComponent.displayName = '@fusion/components/general/Button/ButtonComponent');
            var Button = ButtonComponent;
            const AnchorComponent = Object(react.forwardRef)((_a, ref) => {
                var {
                        children: children,
                        url: url,
                        targetBlank: targetBlank,
                        onMouseDown: onMouseDown,
                        onMouseUp: onMouseUp,
                        onClick: onClick,
                        onClickCapture: onClickCapture,
                    } = _a,
                    props = tslib_es6.a(_a, [
                        'children',
                        'url',
                        'targetBlank',
                        'onMouseDown',
                        'onMouseUp',
                        'onClick',
                        'onClickCapture',
                    ]);
                return react_default.a.createElement(
                    'a',
                    {
                        className: buttonClasses(props),
                        href: url,
                        target: targetBlank ? '_blank' : '_self',
                        onMouseDown: onMouseDown,
                        onMouseUp: onMouseUp,
                        onClick: onClick,
                        onClickCapture: onClickCapture,
                        ref: ref,
                    },
                    react_default.a.createElement(components_Content, null, children)
                );
            });
            (AnchorComponent.defaultProps = {
                targetBlank: !1,
                onClick: () => {},
                onClickCapture: () => {},
                onMouseDown: () => {},
                onMouseUp: () => {},
            }),
                (AnchorComponent.displayName = '@fusion/components/general/Button/AnchorComponent');
            var Anchor = AnchorComponent;
            const Button_Button = react.forwardRef((props, ref) => {
                const [mouseHasBeenDown, setMouseHasBeenDown] = react.useState(!1),
                    displayType = react.useContext(ComponentDisplayContext),
                    buttonRef = ref || react.createRef(),
                    handleOnMouseDown = e => {
                        const { onMouseDown: onMouseDown } = props;
                        setMouseHasBeenDown(!1), onMouseDown && onMouseDown(e);
                    },
                    handleOnMouseUp = () => {
                        setMouseHasBeenDown(!0),
                            null !== buttonRef.current && buttonRef.current.blur();
                    };
                return props.url
                    ? react.createElement(
                          Anchor,
                          Object.assign({}, props, {
                              displayType: displayType,
                              ref: buttonRef,
                              mouseHasBeenDown: mouseHasBeenDown,
                              onMouseDown: handleOnMouseDown,
                              onMouseUp: handleOnMouseUp,
                              onClick: props.onClick,
                              onClickCapture: props.onClickCapture,
                              url: props.url,
                          })
                      )
                    : react.createElement(
                          Button,
                          Object.assign({}, props, {
                              displayType: displayType,
                              ref: buttonRef,
                              mouseHasBeenDown: mouseHasBeenDown,
                              onMouseDown: handleOnMouseDown,
                              onMouseUp: handleOnMouseUp,
                              onClick: props.onClick,
                              onClickCapture: props.onClickCapture,
                          })
                      );
            });
            (Button_Button.displayName = 'Button'),
                (Button_Button.defaultProps = {
                    disabled: !1,
                    contained: !1,
                    outlined: !1,
                    frameless: !1,
                    primary: !0,
                    signal: !1,
                    compact: !1,
                    comfortable: !0,
                    url: null,
                    targetBlank: !1,
                    onMouseDown: () => {},
                    onClickCapture: () => {},
                    onClick: () => {},
                });
            __webpack_exports__.a = Button_Button;
        },
        23: function(module, exports, __webpack_require__) {
            var content = __webpack_require__(616);
            'string' == typeof content && (content = [[module.i, content, '']]);
            var options = { hmr: !0, transform: void 0, insertInto: void 0 };
            __webpack_require__(34)(content, options);
            content.locals && (module.exports = content.locals);
        },
        281: function(module) {
            module.exports = {
                numFailedTestSuites: 3,
                numFailedTests: 1,
                numPassedTestSuites: 3,
                numPassedTests: 11,
                numPendingTestSuites: 0,
                numPendingTests: 0,
                numRuntimeErrorTestSuites: 2,
                numTodoTests: 0,
                numTotalTestSuites: 6,
                numTotalTests: 12,
                openHandles: [],
                snapshot: {
                    added: 0,
                    didUpdate: !1,
                    failure: !0,
                    filesAdded: 0,
                    filesRemoved: 2,
                    filesUnmatched: 0,
                    filesUpdated: 0,
                    matched: 1,
                    total: 1,
                    unchecked: 0,
                    uncheckedKeysByFile: [],
                    unmatched: 0,
                    updated: 0,
                },
                startTime: 1559139026018,
                success: !1,
                testResults: [
                    {
                        assertionResults: [],
                        coverage: {},
                        endTime: 1559139037034,
                        message:
                            "  [1m● [22mTest suite failed to run\n\n    Cannot find module '../nodes/HTMLDialogElement-impl.js'\n\n      [2mat Object.<anonymous> ([22mnode_modules/jest-environment-jsdom/node_modules/jsdom/lib/jsdom/living/generated/HTMLDialogElement.js[2m:138:14)[22m\n",
                        name:
                            '/c/Users/martin.forre/Projects/Equinor/Fusion/fusion-components/src/hooks/__tests__/useOverlayPortal.test.js',
                        startTime: 1559139037034,
                        status: 'failed',
                        summary: '',
                    },
                    {
                        assertionResults: [
                            {
                                ancestorTitles: ['useOverlayContainer'],
                                failureMessages: [],
                                fullName:
                                    'useOverlayContainer Should return the same instance every time',
                                location: null,
                                status: 'passed',
                                title: 'Should return the same instance every time',
                            },
                        ],
                        endTime: 1559139035789,
                        message: '',
                        name:
                            '/c/Users/martin.forre/Projects/Equinor/Fusion/fusion-components/src/hooks/__tests__/useOverlayContainer.test.js',
                        startTime: 1559139033466,
                        status: 'passed',
                        summary: '',
                    },
                    {
                        assertionResults: [],
                        coverage: {},
                        endTime: 1559139037034,
                        message:
                            '  [1m● [22mTest suite failed to run\n\n    Cannot find module \'immutable\' from \'useRelativePositioning.test.js\'\n\n    [0m [90m 3 | [39m[36mimport[39m { hookTestScope } from [32m"./hookTestScope"[39m[33m;[39m[0m\n    [0m [90m 4 | [39m[36mimport[39m useRelativePositioning from [32m"../useRelativePositioning"[39m[33m;[39m[0m\n    [0m[31m[1m>[22m[39m[90m 5 | [39m[36mimport[39m { is } from [32m"immutable"[39m[33m;[39m[0m\n    [0m [90m   | [39m[31m[1m^[22m[39m[0m\n    [0m [90m 6 | [39m[0m\n    [0m [90m 7 | [39m[36mconst[39m mockedRef [33m=[39m {[0m\n    [0m [90m 8 | [39m    current[33m:[39m {[0m\n\n      [2mat Resolver.resolveModule ([22mnode_modules/jest-resolve/build/index.js[2m:230:17)[22m\n      [2mat Object.<anonymous> ([22m[0m[36msrc/hooks/__tests__/useRelativePositioning.test.js[39m[0m[2m:5:1)[22m\n',
                        name:
                            '/c/Users/martin.forre/Projects/Equinor/Fusion/fusion-components/src/hooks/__tests__/useRelativePositioning.test.js',
                        startTime: 1559139037034,
                        status: 'failed',
                        summary: '',
                    },
                    {
                        assertionResults: [
                            {
                                ancestorTitles: ['Hooks'],
                                failureMessages: [],
                                fullName: 'Hooks KeyboardNavigation',
                                location: null,
                                status: 'passed',
                                title: 'KeyboardNavigation',
                            },
                        ],
                        endTime: 1559139035898,
                        message: '',
                        name:
                            '/c/Users/martin.forre/Projects/Equinor/Fusion/fusion-components/src/hooks/__stories__/KeyboardNavigation.stories.jsx',
                        startTime: 1559139033421,
                        status: 'passed',
                        summary: '',
                    },
                    {
                        assertionResults: [
                            {
                                ancestorTitles: ['useClickOutsideOverlayPortal'],
                                failureMessages: [],
                                fullName:
                                    'useClickOutsideOverlayPortal Should trigger on click outside overlay portal',
                                location: null,
                                status: 'passed',
                                title: 'Should trigger on click outside overlay portal',
                            },
                            {
                                ancestorTitles: ['useClickOutsideOverlayPortal'],
                                failureMessages: [],
                                fullName:
                                    'useClickOutsideOverlayPortal Should not trigger on click inside overlay portal',
                                location: null,
                                status: 'passed',
                                title: 'Should not trigger on click inside overlay portal',
                            },
                            {
                                ancestorTitles: ['useClickOutsideOverlayPortal'],
                                failureMessages: [
                                    'Error: [2mexpect([22m[31mjest.fn()[39m[2m).toHaveBeenCalled()[22m\n\nExpected mock function to have been called, but it was not called.\n    at Object.toHaveBeenCalled (/c/Users/martin.forre/Projects/Equinor/Fusion/fusion-components/src/hooks/__tests__/useClickOutsideOverlayPortal.test.js:53:32)\n    at Object.asyncJestTest (/c/Users/martin.forre/Projects/Equinor/Fusion/fusion-components/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)\n    at resolve (/c/Users/martin.forre/Projects/Equinor/Fusion/fusion-components/node_modules/jest-jasmine2/build/queueRunner.js:43:12)\n    at new Promise (<anonymous>)\n    at mapper (/c/Users/martin.forre/Projects/Equinor/Fusion/fusion-components/node_modules/jest-jasmine2/build/queueRunner.js:26:19)\n    at promise.then (/c/Users/martin.forre/Projects/Equinor/Fusion/fusion-components/node_modules/jest-jasmine2/build/queueRunner.js:73:41)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)',
                                ],
                                fullName:
                                    'useClickOutsideOverlayPortal Should trigger on click on other children within the overlay portal',
                                location: null,
                                status: 'failed',
                                title:
                                    'Should trigger on click on other children within the overlay portal',
                            },
                        ],
                        endTime: 1559139035940,
                        message:
                            '[1m[31m  [1m● [1museClickOutsideOverlayPortal › Should trigger on click on other children within the overlay portal[39m[22m\n\n    [2mexpect([22m[31mjest.fn()[39m[2m).toHaveBeenCalled()[22m\n\n    Expected mock function to have been called, but it was not called.\n[2m[22m\n[2m    [0m [90m 51 | [39m        clickMeTarget[33m.[39mdispatchEvent([36mnew[39m [33mEvent[39m([32m"click"[39m[33m,[39m { bubbles[33m:[39m [36mtrue[39m }))[33m;[39m[0m[22m\n[2m    [0m [90m 52 | [39m[0m[22m\n[2m    [0m[31m[1m>[2m[39m[90m 53 | [39m        expect(closeMeHandler)[33m.[39mtoHaveBeenCalled()[33m;[39m[0m[22m\n[2m    [0m [90m    | [39m                               [31m[1m^[2m[39m[0m[22m\n[2m    [0m [90m 54 | [39m        expect(clickMeHandler)[33m.[39mnot[33m.[39mtoHaveBeenCalled()[33m;[39m[0m[22m\n[2m    [0m [90m 55 | [39m    })[33m;[39m[0m[22m\n[2m    [0m [90m 56 | [39m})[33m;[39m[0m[22m\n[2m[22m\n[2m      [2mat Object.toHaveBeenCalled ([2m[0m[36msrc/hooks/__tests__/useClickOutsideOverlayPortal.test.js[39m[0m[2m:53:32)[2m[22m\n',
                        name:
                            '/c/Users/martin.forre/Projects/Equinor/Fusion/fusion-components/src/hooks/__tests__/useClickOutsideOverlayPortal.test.js',
                        startTime: 1559139033368,
                        status: 'failed',
                        summary: '',
                    },
                    {
                        assertionResults: [
                            {
                                ancestorTitles: ['useEventListener'],
                                failureMessages: [],
                                fullName:
                                    'useEventListener Should call addEventListener on the node',
                                location: null,
                                status: 'passed',
                                title: 'Should call addEventListener on the node',
                            },
                            {
                                ancestorTitles: ['useEventListener'],
                                failureMessages: [],
                                fullName:
                                    'useEventListener Should call removeEventListener on unmount',
                                location: null,
                                status: 'passed',
                                title: 'Should call removeEventListener on unmount',
                            },
                            {
                                ancestorTitles: ['useEventListener'],
                                failureMessages: [],
                                fullName:
                                    'useEventListener Should not call removeEventListener before unmount',
                                location: null,
                                status: 'passed',
                                title: 'Should not call removeEventListener before unmount',
                            },
                            {
                                ancestorTitles: ['useEventListener'],
                                failureMessages: [],
                                fullName:
                                    'useEventListener Should re-attach event listener when a dependency changes',
                                location: null,
                                status: 'passed',
                                title: 'Should re-attach event listener when a dependency changes',
                            },
                            {
                                ancestorTitles: ['useEventListener'],
                                failureMessages: [],
                                fullName: 'useEventListener Should default to useCapture = false',
                                location: null,
                                status: 'passed',
                                title: 'Should default to useCapture = false',
                            },
                            {
                                ancestorTitles: ['useEventListener'],
                                failureMessages: [],
                                fullName: 'useEventListener Should respect useCapture when passed',
                                location: null,
                                status: 'passed',
                                title: 'Should respect useCapture when passed',
                            },
                            {
                                ancestorTitles: ['useEventListener'],
                                failureMessages: [],
                                fullName: 'useEventListener Should handle undefined node',
                                location: null,
                                status: 'passed',
                                title: 'Should handle undefined node',
                            },
                        ],
                        endTime: 1559139037009,
                        message: '',
                        name:
                            '/c/Users/martin.forre/Projects/Equinor/Fusion/fusion-components/src/hooks/__tests__/useEventListener.test.js',
                        startTime: 1559139033431,
                        status: 'passed',
                        summary: '',
                    },
                ],
                wasInterrupted: !1,
            };
        },
        283: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);
            __webpack_exports__.a = Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.create)({
                base: 'light',
                brandTitle: 'Fusion Components',
                brandUrl: 'https://github.com/equinor/fusion-components',
                colorPrimary: '#FF1243',
                colorSecondary: '#007079',
            });
        },
        286: function(module, exports, __webpack_require__) {
            var content = __webpack_require__(539);
            'string' == typeof content && (content = [[module.i, content, '']]);
            var options = { hmr: !0, transform: void 0, insertInto: void 0 };
            __webpack_require__(34)(content, options);
            content.locals && (module.exports = content.locals);
        },
        287: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                _styles_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(288),
                _styles_less__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
                    _styles_less__WEBPACK_IMPORTED_MODULE_1__
                );
            __webpack_exports__.a = ({ children: children }) =>
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    'div',
                    { className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.container },
                    children
                );
        },
        288: function(module, exports, __webpack_require__) {
            var content = __webpack_require__(544);
            'string' == typeof content && (content = [[module.i, content, '']]);
            var options = { hmr: !0, transform: void 0, insertInto: void 0 };
            __webpack_require__(34)(content, options);
            content.locals && (module.exports = content.locals);
        },
        290: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                _useEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
            const KEY_HANDLERS = {
                38: 'onUp',
                40: 'onDown',
                37: 'onLeft',
                39: 'onRight',
                13: 'onEnter',
                27: 'onEscape',
            };
            __webpack_exports__.a = keyBoardEvents => {
                const [ref, setRef] = Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
                return (
                    Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__.a)(
                        ref,
                        'keydown',
                        e => {
                            const keyCode = e.keyCode,
                                handler = keyBoardEvents[KEY_HANDLERS[keyCode]];
                            handler && (e.preventDefault(), handler(e));
                        },
                        [keyBoardEvents, ref]
                    ),
                    setRef
                );
            };
        },
        291: function(module, exports, __webpack_require__) {
            var content = __webpack_require__(621);
            'string' == typeof content && (content = [[module.i, content, '']]);
            var options = { hmr: !0, transform: void 0, insertInto: void 0 };
            __webpack_require__(34)(content, options);
            content.locals && (module.exports = content.locals);
        },
        292: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            var react = __webpack_require__(0),
                react_default = __webpack_require__.n(react);
            const overlayId = 'fusion-overlay-container',
                overlayChildStyling = `\n    #${overlayId} {\n        position: fixed;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        pointer-events: none;\n        z-index: ${
                    Number.MAX_SAFE_INTEGER
                };\n    }\n\n    #${overlayId} > * {\n        pointer-events: "all";\n    }\n`;
            let useOverlayContainer_overlayContainer = document.getElementById(`#${overlayId}`);
            var useOverlayContainer = () => {
                    if (!useOverlayContainer_overlayContainer) {
                        const overlayStyle = document.createElement('style');
                        (overlayStyle.type = 'text/css'),
                            overlayStyle.appendChild(document.createTextNode(overlayChildStyling)),
                            document.head.appendChild(overlayStyle),
                            ((useOverlayContainer_overlayContainer = document.createElement(
                                'div'
                            )).id = overlayId),
                            document.body.appendChild(useOverlayContainer_overlayContainer);
                    }
                    return useOverlayContainer_overlayContainer;
                },
                useEventListener = __webpack_require__(35),
                useClickOutsideOverlayPortal = (callback, target) => {
                    const overlayContainer = useOverlayContainer();
                    Object(useEventListener.a)(
                        document.body,
                        'click',
                        e => {
                            const clickedOutsideTarget =
                                    target && target !== e.target && !target.contains(e.target),
                                clickedOnOrOutsideOverlay =
                                    overlayContainer === e.target ||
                                    !overlayContainer.contains(e.target);
                            (clickedOutsideTarget || clickedOnOrOutsideOverlay) && callback(e);
                        },
                        [callback, target]
                    );
                },
                react_dom = __webpack_require__(184);
            const defaultRect = { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 };
            __webpack_require__(3),
                __webpack_require__(15),
                __webpack_require__(26),
                __webpack_require__(24),
                __webpack_require__(159);
            var prop_types = __webpack_require__(2),
                prop_types_default = __webpack_require__.n(prop_types),
                classnames = __webpack_require__(28),
                classnames_default = __webpack_require__.n(classnames),
                styles = __webpack_require__(39),
                styles_default = __webpack_require__.n(styles),
                Arrow_ref = react_default.a.createElement(
                    'svg',
                    {
                        width: '18',
                        height: '16',
                        viewBox: '0 0 18 16',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                    },
                    react_default.a.createElement(
                        'g',
                        { filter: 'url(#filter0_dd)' },
                        react_default.a.createElement('path', {
                            d: 'M9 4L4 8L14 8L9 4Z',
                            fill: 'white',
                        })
                    ),
                    react_default.a.createElement(
                        'defs',
                        null,
                        react_default.a.createElement(
                            'filter',
                            {
                                id: 'filter0_dd',
                                x: '0',
                                y: '0',
                                width: '18',
                                height: '16',
                                filterUnits: 'userSpaceOnUse',
                                colorInterpolationFilters: 'sRGB',
                            },
                            react_default.a.createElement('feFlood', {
                                floodOpacity: '0',
                                result: 'BackgroundImageFix',
                            }),
                            react_default.a.createElement('feColorMatrix', {
                                in: 'SourceAlpha',
                                type: 'matrix',
                                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            }),
                            react_default.a.createElement('feOffset', { dy: '-1.7' }),
                            react_default.a.createElement('feGaussianBlur', {
                                stdDeviation: '1.7',
                            }),
                            react_default.a.createElement('feColorMatrix', {
                                type: 'matrix',
                                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0',
                            }),
                            react_default.a.createElement('feBlend', {
                                mode: 'normal',
                                in2: 'effect1_dropShadow',
                                result: 'effect2_dropShadow',
                            }),
                            react_default.a.createElement('feBlend', {
                                mode: 'normal',
                                in: 'SourceGraphic',
                                in2: 'effect2_dropShadow',
                                result: 'shape',
                            })
                        )
                    )
                ),
                PopoverArrow = function() {
                    return react_default.a.createElement(
                        'div',
                        { className: styles_default.a.arrow },
                        Arrow_ref
                    );
                };
            (PopoverArrow.displayName = 'PopoverArrow'),
                (PopoverArrow.displayName = 'PopoverArrow');
            var Arrow = PopoverArrow;
            (PopoverArrow.__docgenInfo = {
                description: '',
                methods: [],
                displayName: 'PopoverArrow',
            }),
                'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                    (STORYBOOK_REACT_CLASSES[
                        'src/components/general/Popover/components/Arrow.jsx'
                    ] = {
                        name: 'PopoverArrow',
                        docgenInfo: PopoverArrow.__docgenInfo,
                        path: 'src/components/general/Popover/components/Arrow.jsx',
                    });
            var popoverHorizontalPositions = { left: 'left', right: 'right' },
                popoverVerticalPositions = { top: 'top', bottom: 'bottom' };
            function _defineProperty(obj, key, value) {
                return (
                    key in obj
                        ? Object.defineProperty(obj, key, {
                              value: value,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (obj[key] = value),
                    obj
                );
            }
            var _ref2 = react_default.a.createElement(Arrow, null),
                PopoverContent = function(_ref) {
                    var _classNames,
                        horizontalPosition = _ref.horizontalPosition,
                        verticalPosition = _ref.verticalPosition,
                        inset = _ref.inset,
                        isRelative = _ref.isRelative,
                        children = _ref.children,
                        containerClassNames = classnames_default()(
                            styles_default.a.container,
                            styles_default.a[horizontalPosition],
                            styles_default.a[verticalPosition],
                            (_defineProperty((_classNames = {}), styles_default.a.isInset, inset),
                            _defineProperty(_classNames, styles_default.a.isRelative, isRelative),
                            _classNames)
                        );
                    return react_default.a.createElement(
                        'div',
                        { className: containerClassNames },
                        _ref2,
                        react_default.a.createElement(
                            'div',
                            { className: styles_default.a.content },
                            children
                        )
                    );
                };
            (PopoverContent.displayName = 'PopoverContent'),
                (PopoverContent.propTypes = {
                    isRelative: prop_types_default.a.bool,
                    horizontalPosition: prop_types_default.a.oneOf(
                        Object.values(popoverHorizontalPositions)
                    ),
                    verticalPosition: prop_types_default.a.oneOf(
                        Object.values(popoverVerticalPositions)
                    ),
                    inset: prop_types_default.a.bool,
                    children: prop_types_default.a.node.isRequired,
                }),
                (PopoverContent.defaultProps = {
                    isRelative: !0,
                    inset: !1,
                    horizontalPosition: popoverHorizontalPositions.left,
                    verticalPosition: popoverVerticalPositions.bottom,
                }),
                (PopoverContent.displayName = 'PopoverContent');
            var Content = PopoverContent;
            (PopoverContent.__docgenInfo = {
                description: '',
                methods: [],
                displayName: 'PopoverContent',
                props: {
                    isRelative: {
                        defaultValue: { value: 'true', computed: !1 },
                        type: { name: 'bool' },
                        required: !1,
                        description: '',
                    },
                    inset: {
                        defaultValue: { value: 'false', computed: !1 },
                        type: { name: 'bool' },
                        required: !1,
                        description: '',
                    },
                    horizontalPosition: {
                        defaultValue: { value: 'popoverHorizontalPositions.left', computed: !0 },
                        type: {
                            name: 'enum',
                            computed: !0,
                            value: 'Object.values(popoverHorizontalPositions)',
                        },
                        required: !1,
                        description: '',
                    },
                    verticalPosition: {
                        defaultValue: { value: 'popoverVerticalPositions.bottom', computed: !0 },
                        type: {
                            name: 'enum',
                            computed: !0,
                            value: 'Object.values(popoverVerticalPositions)',
                        },
                        required: !1,
                        description: '',
                    },
                    children: { type: { name: 'node' }, required: !0, description: '' },
                },
            }),
                'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                    (STORYBOOK_REACT_CLASSES[
                        'src/components/general/Popover/components/Content.jsx'
                    ] = {
                        name: 'PopoverContent',
                        docgenInfo: PopoverContent.__docgenInfo,
                        path: 'src/components/general/Popover/components/Content.jsx',
                    });
            var usePopoverRef_styles = __webpack_require__(291);
            __webpack_exports__.a = (content, props) => {
                const popoverContentRef = react.useRef(null),
                    [isOpen, ref, setIsOpen] = (() => {
                        const [isToggled, setIsToggled] = Object(react.useState)(!1),
                            [internalRef, setInternalRef] = Object(react.useState)(null),
                            close = Object(react.useCallback)(() => isToggled && setIsToggled(!1), [
                                isToggled,
                            ]);
                        useClickOutsideOverlayPortal(close),
                            Object(useEventListener.a)(
                                internalRef,
                                'click',
                                () => setIsToggled(prevIsToggled => !prevIsToggled),
                                [isToggled, internalRef]
                            );
                        const ref = Object(react.useRef)(null);
                        return (
                            Object(react.useEffect)(() => {
                                ref.current !== internalRef && setInternalRef(ref.current);
                            }),
                            [isToggled, ref, setIsToggled]
                        );
                    })(),
                    rect = (ref => {
                        const [rect, setRect] = Object(react.useState)(defaultRect),
                            setRectFromRef = () => {
                                if (null === ref.current) return;
                                const newRect = ref.current.getBoundingClientRect();
                                setRect(newRect);
                            };
                        return (
                            Object(react.useEffect)(setRectFromRef, [ref.current]),
                            Object(useEventListener.a)(window, 'resize', setRectFromRef, [
                                ref.current,
                            ]),
                            Object(useEventListener.a)(document.body, 'scroll', setRectFromRef, [
                                ref.current,
                            ]),
                            rect
                        );
                    })(ref),
                    close = react.useCallback(() => isOpen && setIsOpen(!1), [isOpen]);
                return (
                    useClickOutsideOverlayPortal(close, popoverContentRef.current),
                    ((isVisible, content) => {
                        const ref = Object(react.useRef)(document.createElement('div')),
                            overlayContainer = useOverlayContainer();
                        Object(react.useEffect)(() => {
                            if (isVisible)
                                return (
                                    react_dom.render(
                                        react.createElement(react.Fragment, null, content),
                                        ref.current
                                    ),
                                    overlayContainer.prepend(ref.current),
                                    () => {
                                        overlayContainer.removeChild(ref.current);
                                    }
                                );
                        }, [isVisible, content]);
                    })(
                        isOpen,
                        react.createElement(
                            'div',
                            {
                                ref: popoverContentRef,
                                className: usePopoverRef_styles.container,
                                style: {
                                    width: rect.width,
                                    height: rect.height,
                                    top: rect.top,
                                    left: rect.left,
                                },
                            },
                            react.createElement(Content, Object.assign({}, props), content)
                        )
                    ),
                    ref
                );
            };
        },
        293: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            var react = __webpack_require__(0),
                lib = __webpack_require__(98);
            var core_FusionLogo = ({ scale: scale = 1 }) =>
                    react.createElement(
                        'svg',
                        {
                            width: '50',
                            height: '35',
                            viewBox: '0 0 50 35',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            style: { transform: `scale(${scale})` },
                        },
                        react.createElement('path', {
                            d:
                                'M0 2V23.1776L7.05405 16.1235V7.05405H16.1235L23.1776 0H2C0.895431 0 0 0.89543 0 2Z',
                            transform: 'translate(50 17.5) scale(0.92727 1.06779) rotate(135)',
                            fill: 'url(#paint0_linear)',
                        }),
                        react.createElement('path', {
                            d:
                                'M0 2V23.1776L7.05405 16.1235V7.05405H16.1235L23.1776 0H2C0.895431 0 0 0.89543 0 2Z',
                            transform: 'translate(0 17.5) scale(0.92727 1.06779) rotate(-45)',
                            fill: 'url(#paint1_linear)',
                        }),
                        react.createElement('path', {
                            d:
                                'M9.61965 36.6972L2.60087 29.6784L1.96135 22.3809L8.42623 22.9069L9.61965 36.6972Z',
                            transform:
                                'translate(33.8887 34.9863) scale(0.92727 -1.06779) rotate(45)',
                            fill: '#990025',
                        }),
                        react.createElement('path', {
                            d:
                                'M7.05434 7.05434L0 0L1.21096 13.8183L7.68846 14.3818L7.05434 7.05434Z',
                            transform:
                                'translate(33.8887 34.9863) scale(0.92727 -1.06779) rotate(45)',
                            fill: '#990025',
                        }),
                        react.createElement('path', {
                            d: 'M0 0L2.49398 29.5715L9.61965 36.6972L7.01878 7.01878L0 0Z',
                            transform:
                                'translate(33.8887 0.015625) scale(0.92727 1.06779) rotate(45)',
                            fill: '#FF1243',
                        }),
                        react.createElement(
                            'defs',
                            null,
                            react.createElement(
                                'linearGradient',
                                {
                                    id: 'paint0_linear',
                                    x2: '1',
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform:
                                        'matrix(-13.5478 9.01983 -12.9578 -13.5478 18.0677 6.77391)',
                                },
                                react.createElement('stop', {
                                    offset: '0.508287',
                                    stopColor: '#DC002E',
                                }),
                                react.createElement('stop', {
                                    offset: '0.508387',
                                    stopColor: '#FF1243',
                                })
                            ),
                            react.createElement(
                                'linearGradient',
                                {
                                    id: 'paint1_linear',
                                    x2: '1',
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform:
                                        'matrix(-13.5478 9.01983 -12.9578 -13.5478 18.0677 6.77391)',
                                },
                                react.createElement('stop', {
                                    offset: '0.508287',
                                    stopColor: '#DC002E',
                                }),
                                react.createElement('stop', {
                                    offset: '0.508387',
                                    stopColor: '#FF1243',
                                })
                            )
                        )
                    ),
                styles = __webpack_require__(66);
            __webpack_exports__.a = () => {
                const currentUser = Object(lib.c)();
                return react.createElement(
                    'header',
                    { className: styles.container },
                    react.createElement(
                        'a',
                        { href: '/', className: styles.fusionTitleContainer },
                        react.createElement(
                            'span',
                            { className: styles.fusionLogo },
                            react.createElement(core_FusionLogo, { scale: 0.8 })
                        ),
                        react.createElement('span', { className: styles.fusionTitle }, 'fusion')
                    ),
                    react.createElement('div', { className: styles.contextContainer }),
                    react.createElement(
                        'div',
                        { className: styles.tempCurrentUser },
                        currentUser ? currentUser.givenName : null
                    )
                );
            };
        },
        294: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            var react = __webpack_require__(0),
                lib = __webpack_require__(98),
                AuthUser = __webpack_require__(81),
                styles = __webpack_require__(286),
                styles_default = __webpack_require__.n(styles);
            var Root = react.forwardRef(({ children: children }, ref) =>
                react.createElement(
                    'div',
                    { className: styles_default.a.container, ref: ref },
                    children
                )
            );
            __webpack_require__.d(__webpack_exports__, 'a', function() {
                return withFusionContext;
            });
            const mockUser = {
                id: '1337',
                fullName: 'Charles Carmichael',
                givenName: 'Charles',
                familyName: 'Carmichael',
                upn: 'chca@equinot.com',
                roles: [],
            };
            const authContainer = new (class withFusionContext_StorybookAuthContainer {
                    handleWindowCallbackAsync() {
                        throw new Error('Method not implemented.');
                    }
                    acquireTokenAsync(resource) {
                        throw new Error('Method not implemented.');
                    }
                    registerAppAsync(clientId, resources) {
                        throw new Error('Method not implemented.');
                    }
                    login(clientId) {
                        throw new Error('Method not implemented.');
                    }
                    async getCachedUserAsync() {
                        return AuthUser.a.fromJSON(mockUser);
                    }
                })(),
                serviceResolver = { getDataProxyBaseUrl: () => '' },
                FusionWrapper = ({ children: children }) => {
                    const overlay = react.useRef(null),
                        root = react.useRef(null),
                        fusionContext = Object(lib.b)(authContainer, serviceResolver, {
                            overlay: overlay,
                            root: root,
                        });
                    return react.createElement(
                        lib.a.Provider,
                        { value: fusionContext },
                        react.createElement(Root, { ref: root }, children),
                        react.createElement('div', { ref: overlay })
                    );
                },
                withFusionContext = () => stories =>
                    react.createElement(FusionWrapper, null, stories());
        },
        295: function(module, exports, __webpack_require__) {
            __webpack_require__(296),
                __webpack_require__(382),
                (module.exports = __webpack_require__(383));
        },
        35: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
            __webpack_exports__.a = (node, eventType, handler, dependencies, useCapture = !1) => {
                Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                    if (null != node)
                        return (
                            node.addEventListener(eventType, handler, useCapture),
                            () => {
                                node.removeEventListener(eventType, handler, useCapture);
                            }
                        );
                }, dependencies);
            };
        },
        383: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    __webpack_require__(15),
                        __webpack_require__(26),
                        __webpack_require__(24),
                        __webpack_require__(44),
                        __webpack_require__(0);
                    var _storybook_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8),
                        _jest_test_results_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                            281
                        ),
                        _storybook_addon_jest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                            282
                        ),
                        _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(283),
                        _withFusionContext_tsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                            294
                        );
                    Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(
                        Object(_withFusionContext_tsx__WEBPACK_IMPORTED_MODULE_9__.a)()
                    ),
                        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(
                            Object(_storybook_addon_jest__WEBPACK_IMPORTED_MODULE_7__.withTests)({
                                results: _jest_test_results_json__WEBPACK_IMPORTED_MODULE_6__,
                            })
                        ),
                        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({
                            options: { theme: _theme__WEBPACK_IMPORTED_MODULE_8__.a },
                        });
                    var req = __webpack_require__(541);
                    Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function() {
                        req.keys().forEach(function(filename) {
                            return req(filename);
                        });
                    }, module);
                }.call(this, __webpack_require__(54)(module));
        },
        39: function(module, exports, __webpack_require__) {
            var content = __webpack_require__(620);
            'string' == typeof content && (content = [[module.i, content, '']]);
            var options = { hmr: !0, transform: void 0, insertInto: void 0 };
            __webpack_require__(34)(content, options);
            content.locals && (module.exports = content.locals);
        },
        539: function(module, exports, __webpack_require__) {
            (exports = module.exports = __webpack_require__(33)(!1)).push([
                module.i,
                ':root {\n  --grid-unit: 8;\n  --screen-medium: 1600px;\n  --tablet-max-width: 1224px;\n  --mobile-max-width: 767px;\n}\n:root {\n  --color-primary: #007079;\n  --color-primary-alt1: #73B1B5;\n  --color-primary-alt2: #A8CED1;\n  --color-primary-alt3: #C9E0E2;\n  --color-primary-alt4: #DEEDEE;\n  --color-primary-accent: #243746;\n  --color-primary-hover: #004E55;\n  --color-primary-hover-alt1: #F2F8F8;\n  --color-secondary: #FF1243;\n  --color-secondary-alt1: #FF7D98;\n  --color-secondary-alt2: #FFAEBF;\n  --color-secondary-alt3: #FFCDD7;\n  --color-secondary-alt4: #FFE0E7;\n  --color-secondary-accent: #990025;\n  --color-black: #000000;\n  --color-black-alt1: #333333;\n  --color-black-alt2: #666666;\n  --color-black-alt3: #BFBFBF;\n  --color-black-alt4: #E6E6E6;\n  --color-black-alt5: #F7F7F7;\n  --color-white: #FFFFFF;\n  --color-supplementary: #D5EAF4;\n  --color-supplementary-alt1: #DEFAEB;\n  --color-supplementary-alt2: #FBE5D5;\n  --color-yellow: #FBCA36;\n  --color-orange: #FF9200;\n  --color-red: #FF3B3B;\n  --color-green: #4BB748;\n  --color-purple: #771FDD;\n  --color-blue: #1273DD;\n  --color-turquoise: #1DB7A6;\n}\n.fc--container--15xQ0 {\n  font-family: Equinor, sans-serif;\n  width: 100%;\n  height: 100%;\n  color: var(--color-primary-accent);\n  position: relative;\n  display: grid;\n  grid-template-rows: max-content auto;\n  grid-template-areas: "header" "content";\n}\na {\n  color: var(--color-primary);\n}\n',
                '',
            ]),
                (exports.locals = { container: 'fc--container--15xQ0' });
        },
        541: function(module, exports, __webpack_require__) {
            var map = {
                './components/core/__stories__/Fusion.stories.tsx': 542,
                './components/feedback/Spinner/__stories__/Spinner.stories.tsx': 545,
                './components/general/Button/__stories__/Button.stories.tsx': 547,
                './components/general/Tabs/__stories__/Tabs.stories.tsx': 615,
                './hooks/__stories__/KeyboardNavigation.stories.jsx': 618,
                './hooks/usePopoverRef/__stories__/PopoverRef.stories.tsx': 619,
            };
            function webpackContext(req) {
                var id = webpackContextResolve(req);
                return __webpack_require__(id);
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                }
                return map[req];
            }
            (webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            }),
                (webpackContext.resolve = webpackContextResolve),
                (module.exports = webpackContext),
                (webpackContext.id = 541);
        },
        542: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                        _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8),
                        _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(293),
                        _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(287);
                    Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
                        'Core components/Fusion',
                        module
                    ).add('Default', () =>
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                _Header__WEBPACK_IMPORTED_MODULE_2__.a,
                                null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                _Content__WEBPACK_IMPORTED_MODULE_3__.a,
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                    'div',
                                    { style: { maxWidth: 800, margin: '20px auto' } },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'h2',
                                        null,
                                        'Scrolling appears a bit weird in Storybook'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'h3',
                                        null,
                                        'The header disappears when scrolling past ~50%'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'h4',
                                        null,
                                        'But works like a charm when placed directly within body with margin: 0;'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in fringilla magna, nec posuere justo. Nullam tempus lectus lorem, at venenatis magna rhoncus ut. Nullam finibus aliquet ultricies. Suspendisse dictum tellus at augue posuere, at consequat arcu varius. Aliquam finibus, odio non molestie finibus, nibh sapien accumsan erat, vitae congue nulla nisi nec diam. Nulla viverra libero vitae dui cursus, vitae cursus risus commodo. Donec pharetra mollis ipsum, non placerat massa ultrices at. Mauris sit amet elit eu sem vulputate egestas ac et quam.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Nulla ac lorem nulla. Mauris iaculis dui est, id pretium diam elementum vitae. Aenean consequat, ligula ac interdum mollis, justo erat rhoncus turpis, a ullamcorper orci ex ut libero. Phasellus porta interdum condimentum. Maecenas justo quam, euismod non fermentum id, rutrum ut diam. Sed dui est, porta quis consequat ac, rutrum non nibh. Nullam non est a nisi iaculis varius. Vivamus eleifend, velit eget malesuada eleifend, velit eros dictum est, et hendrerit orci lectus sit amet eros.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Etiam congue nibh non lacus rhoncus, vitae feugiat mi egestas. Quisque fringilla ultrices tortor, sed interdum tellus porta vel. Morbi posuere metus non lacus tempus porttitor. Donec ac luctus elit. Mauris scelerisque fringilla tincidunt. Nulla fringilla porta suscipit. Praesent pulvinar nulla eget arcu aliquam, id dictum nunc tempor. Vivamus accumsan ante at convallis mollis. Suspendisse facilisis ligula finibus, lobortis dolor scelerisque, convallis nibh. Donec tempor augue sit amet imperdiet varius. Pellentesque nec sodales purus. Nulla placerat elementum arcu, quis iaculis orci molestie nec.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Nulla scelerisque egestas massa eget posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris nisl velit, lobortis non purus in, maximus sagittis nibh. Cras magna nisi, porta at urna quis, condimentum euismod justo. Phasellus interdum libero sed ligula malesuada, nec mattis lacus molestie. Aenean consequat sagittis lectus, non ultricies lacus aliquet et. Fusce consequat orci vitae purus malesuada, vitae euismod leo sodales. Curabitur et viverra sem.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Donec faucibus lacinia dui et lobortis. Nam ut gravida lorem, sed sollicitudin nisl. In gravida massa eu placerat dignissim. Vivamus fringilla eu quam quis dignissim. Nullam dapibus lobortis massa nec tristique. Pellentesque non ullamcorper tellus. Duis congue dignissim cursus. Cras a eros vel est facilisis vulputate non ut odio.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Quisque tincidunt ligula vitae urna porttitor, eget dignissim enim cursus. Mauris fermentum ligula non felis tempus ultricies. Integer purus augue, pellentesque ut lacus sed, sollicitudin pharetra diam. Mauris consectetur dui eu convallis mollis. Ut nec dictum dui. Quisque interdum mollis volutpat. Aenean vehicula, mi vitae tincidunt lobortis, dolor mi condimentum metus, eu efficitur arcu mauris ut tortor. Nullam sapien sem, aliquet eget rhoncus sit amet, hendrerit ut felis. In hac habitasse platea dictumst.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Maecenas hendrerit fermentum nisl sed feugiat. Donec ipsum urna, facilisis vel egestas et, finibus nec massa. Duis posuere est ac ex luctus, a sagittis sapien aliquet. Suspendisse nec mauris at nibh convallis ullamcorper. Etiam cursus imperdiet porttitor. Donec odio ante, tempus at tempus ut, imperdiet vitae turpis. Sed consequat, augue non ornare maximus, justo ante tempus leo, vitae suscipit dolor purus ac odio. Nunc vitae augue ac lectus pretium dapibus. Nulla a mi porta tortor tempus mattis. Phasellus luctus turpis eu ante vestibulum, at pellentesque nisl dictum. Sed et velit eros. Cras et lacus ut ex semper convallis. Nullam eleifend dolor eu leo vestibulum, in vulputate nibh finibus. Phasellus sagittis elementum dignissim. Duis a maximus mi. Nunc vel consectetur neque, nec tempus justo.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Donec sit amet mattis neque. Etiam quis sodales ex. Nullam molestie volutpat tortor, vel hendrerit purus condimentum nec. Sed pellentesque pellentesque quam. Donec vitae enim in ante facilisis vestibulum. Fusce congue ligula nisl, et rhoncus ligula dignissim eu. Mauris feugiat laoreet lorem nec blandit. Vivamus commodo tincidunt condimentum. Aliquam at enim in neque sollicitudin tristique. Vestibulum vel lobortis sem. Nulla sagittis pellentesque tincidunt.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Proin eu lectus eget est fermentum dignissim. Vestibulum at arcu sed nisl porta rhoncus. Aliquam erat volutpat. Quisque tristique eros volutpat enim pellentesque ultricies. Aenean congue est vel placerat suscipit. Vestibulum non nisi id lectus mollis ullamcorper eu at nunc. Praesent nec tristique diam, nec convallis enim. Ut sit amet auctor tortor. In vitae sem ac justo euismod pretium semper sit amet lectus. Morbi ultricies porttitor dolor. Aenean non aliquet leo, vitae tempor lectus.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor vel augue placerat, sit amet hendrerit ante pretium. Mauris quis ullamcorper sem. Nam mattis auctor risus, quis pellentesque arcu ultricies vel. Mauris id tincidunt libero, nec blandit augue. In quis tristique elit, ut convallis libero. Mauris sed condimentum neque. In hac habitasse platea dictumst. Donec eget augue in urna suscipit elementum. Donec pulvinar ullamcorper ullamcorper. Proin eu nisi at dolor vehicula luctus vitae ut urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Integer sit amet nisi id tellus vehicula tristique ac vitae magna. In luctus volutpat est, quis aliquet ligula interdum ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sagittis nisl, sit amet rutrum elit. Pellentesque ac volutpat dolor. Nulla facilisi. Nulla pretium viverra lorem non lacinia. Integer ultricies scelerisque lectus, commodo aliquam mi egestas vitae. Aenean eu felis condimentum, condimentum ligula in, venenatis ante. Vivamus ultricies efficitur ligula, sed blandit dui. Nam quam ligula, feugiat id fringilla eget, lobortis sed ex.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Aenean finibus tellus nec hendrerit tincidunt. Duis fringilla magna in efficitur imperdiet. Sed malesuada et tortor in pulvinar. Vivamus turpis mauris, faucibus id urna eu, dapibus sollicitudin velit. Phasellus vehicula enim non nibh mollis viverra. Nullam euismod rutrum vehicula. Fusce id nisi nisi. Duis posuere nibh non neque dignissim luctus. Proin laoreet lacinia metus in feugiat. Vivamus mollis metus a felis euismod vulputate.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Aliquam consectetur congue metus et pretium. Cras turpis libero, pellentesque eget viverra vitae, sollicitudin vitae elit. Integer ac diam et ligula luctus volutpat eget id dui. Donec tincidunt ipsum id dolor porttitor consectetur. Proin ligula libero, porta eget mauris malesuada, dapibus venenatis orci. Nullam sit amet tincidunt velit, eu aliquet turpis. Curabitur vestibulum pretium nisi, vitae tristique nisi. Donec luctus est lorem, vitae mattis massa sollicitudin a. Praesent ut nisl nec sapien laoreet interdum et sit amet ipsum.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Integer condimentum tortor vel lorem faucibus gravida. Praesent metus ante, volutpat vitae metus ac, viverra cursus justo. Nam quis lectus ligula. Aenean ac nisi ac eros elementum fringilla. Nulla ultricies tincidunt libero a maximus. Phasellus a semper massa, dapibus sollicitudin sem. Nam leo lacus, suscipit ut dui ut, malesuada iaculis nulla. Sed venenatis felis non condimentum gravida. Praesent eleifend mi in viverra accumsan. Aenean sodales neque libero, in placerat nulla rhoncus vitae. Maecenas faucibus dictum elit sed fringilla. Morbi eget fringilla nibh.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Mauris molestie nunc ante, ut imperdiet odio interdum id. In vitae velit at mi finibus interdum. Suspendisse feugiat urna vel massa dignissim, ut eleifend lorem facilisis. Sed suscipit pulvinar condimentum. Suspendisse urna nisl, bibendum eget pretium a, vulputate quis mauris. In ut arcu arcu. Sed imperdiet turpis non felis molestie porta.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Sed vehicula mauris eu massa maximus, sit amet ornare orci vulputate. Suspendisse eu laoreet nulla. Phasellus odio ante, commodo sed sapien eget, rhoncus consequat libero. Etiam dignissim aliquet dui at dapibus. Aenean a imperdiet enim. Integer in dapibus lectus. Integer et tellus sit amet quam elementum euismod et nec lectus. Aliquam varius lorem ex, et rhoncus sem sollicitudin eu.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Mauris sed libero sit amet lorem tincidunt semper nec cursus velit. Curabitur ut velit porta, posuere est et, semper diam. Ut varius consectetur orci. Sed suscipit ex ipsum, id aliquet turpis consectetur vel. Sed laoreet egestas libero vel posuere. Suspendisse hendrerit laoreet bibendum. Cras ultricies erat velit, vitae accumsan ante consectetur vel. Aliquam cursus odio eget varius accumsan. Quisque turpis massa, rutrum et maximus in, pharetra at ex. Aenean lobortis leo ut cursus maximus.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Suspendisse sed orci eget dolor pretium posuere. Nulla rutrum molestie dignissim. Suspendisse egestas quis velit in consequat. Nunc blandit, sapien sed sagittis pulvinar, eros leo volutpat nibh, quis luctus purus ante feugiat nisi. Cras non vulputate mi, scelerisque accumsan sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras egestas tempor velit. Nunc ut nisl id leo pretium efficitur sed sed libero. Maecenas et orci quam. Fusce tellus libero, eleifend vitae odio eu, pellentesque sagittis leo. Ut in neque enim.'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Integer in lorem vitae quam eleifend tempus ac eu enim. Morbi condimentum lectus nisl, et imperdiet justo finibus lacinia. Praesent interdum lacus neque, nec consequat nulla congue sit amet. Sed tincidunt fermentum ante at maximus. Cras a faucibus sem, pharetra laoreet nunc. Proin ornare libero a massa tempor molestie. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'p',
                                        null,
                                        'Sed quis diam justo. Mauris condimentum, elit tempus porta euismod, leo est consequat nunc, a mollis nunc arcu non purus. In eros est, convallis non lacus eu, dictum faucibus diam. Suspendisse porttitor quis turpis sed pretium. Suspendisse nec dolor a ante aliquet posuere. Maecenas placerat magna diam, a gravida elit dictum a. Vestibulum vehicula ex ut felis luctus tristique.'
                                    )
                                )
                            )
                        )
                    );
                }.call(this, __webpack_require__(54)(module));
        },
        543: function(module, exports, __webpack_require__) {
            (exports = module.exports = __webpack_require__(33)(!1)).push([
                module.i,
                '.fc--container--1Uw6t {\n  grid-area: header;\n  display: grid;\n  grid-template-columns: calc(var(--grid-unit) * 15px) auto max-content;\n  grid-template-rows: 100%;\n  grid-template-areas: "logo context user";\n  padding: 0 calc(var(--grid-unit) * 2px);\n  height: calc(var(--grid-unit) * 10px);\n  align-items: center;\n  background: white;\n  border-bottom: 2px solid var(--color-black-alt4);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.fc--fusionTitleContainer--1LCP7 {\n  grid-area: logo;\n}\n.fc--fusionTitleContainer--1LCP7,\n.fc--fusionTitleContainer--1LCP7:visited,\n.fc--fusionTitleContainer--1LCP7:hover,\n.fc--fusionTitleContainer--1LCP7:active,\n.fc--fusionLogo--3DJPi,\n.fc--fusionTitle--3SEw7 {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-primary-accent);\n}\n.fc--fusionLogo--3DJPi {\n  margin-right: calc(var(--grid-unit) * 2px);\n}\n.fc--contextContainer--32sfF {\n  grid-area: context;\n}\n.fc--tempCurrentUser--1ncJN {\n  grid-area: user;\n}\n',
                '',
            ]),
                (exports.locals = {
                    container: 'fc--container--1Uw6t',
                    fusionTitleContainer: 'fc--fusionTitleContainer--1LCP7',
                    fusionLogo: 'fc--fusionLogo--3DJPi',
                    fusionTitle: 'fc--fusionTitle--3SEw7',
                    contextContainer: 'fc--contextContainer--32sfF',
                    tempCurrentUser: 'fc--tempCurrentUser--1ncJN',
                });
        },
        544: function(module, exports, __webpack_require__) {
            (exports = module.exports = __webpack_require__(33)(!1)).push([
                module.i,
                '.fc--container--LQolm {\n  grid-area: content;\n}\n',
                '',
            ]),
                (exports.locals = { container: 'fc--container--LQolm' });
        },
        545: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                            react__WEBPACK_IMPORTED_MODULE_0__
                        ),
                        _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8),
                        _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99);
                    Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
                        'Feedback components/Spinner',
                        module
                    )
                        .addParameters({ jest: ['Spinner.stories.jsx'] })
                        .add('Default', () =>
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    _index__WEBPACK_IMPORTED_MODULE_2__.a,
                                    null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    _index__WEBPACK_IMPORTED_MODULE_2__.a,
                                    { primary: !0 }
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    _index__WEBPACK_IMPORTED_MODULE_2__.a,
                                    { small: !0 }
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'p',
                                    null,
                                    'Inline spinner ',
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        _index__WEBPACK_IMPORTED_MODULE_2__.a,
                                        { inline: !0 }
                                    )
                                )
                            )
                        );
                }.call(this, __webpack_require__(54)(module));
        },
        546: function(module, exports, __webpack_require__) {
            (exports = module.exports = __webpack_require__(33)(!1)).push([
                module.i,
                '.fc--spinnerContainer--1AziK {\n  --small-spinner: calc(var(--grid-unit) * 3px);\n  --medium-spinner: calc(var(--grid-unit) * 6px);\n  --large-spinner: calc(var(--grid-unit) * 10px);\n  display: flex;\n  flex-direction: column;\n}\n.fc--spinnerContainer--1AziK .fc--spinnerTitle--ccb9o {\n  font-size: 14px;\n  color: var(--color-secondary-accent);\n  text-align: left;\n  flex-shrink: 0;\n}\n.fc--spinnerContainer--1AziK .fc--spinner--3NjJE {\n  flex-shrink: 0;\n  margin-bottom: calc(var(--grid-unit) * 3px);\n}\n.fc--spinnerContainer--1AziK .fc--spinner--3NjJE.fc--small--3l7b0 {\n  margin-bottom: calc(var(--grid-unit) * 2px);\n}\n.fc--spinnerContainer--1AziK.fc--floatingContainer--MGc0H {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.fc--spinnerContainer--1AziK.fc--floatingContainer--MGc0H .fc--spinnerTitle--ccb9o {\n  text-align: center;\n}\n.fc--spinnerContainer--1AziK.fc--floatingContainer--MGc0H .fc--spinner--3NjJE {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.fc--spinnerContainer--1AziK.fc--floatingContainer--MGc0H .fc--spinner--3NjJE.fc--small--3l7b0 + .fc--spinnerTitle--ccb9o {\n  top: calc(50% + (var(--small-spinner) / 2) + (var(--grid-unit) * 2px));\n}\n.fc--spinnerContainer--1AziK.fc--floatingContainer--MGc0H .fc--spinner--3NjJE + .fc--spinnerTitle--ccb9o {\n  top: calc(50% + (var(--medium-spinner) / 2) + (var(--grid-unit) * 3px));\n}\n.fc--spinnerContainer--1AziK.fc--floatingContainer--MGc0H .fc--spinnerTitle--ccb9o {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.fc--spinnerContainer--1AziK.fc--floatingContainer--MGc0H p {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.fc--spinnerContainer--1AziK.fc--centeredContainer--3aLri {\n  width: 100%;\n  align-items: center;\n  padding: calc(var(--grid-unit) * 2px) 0;\n}\n.fc--spinnerContainer--1AziK.fc--centeredContainer--3aLri .fc--spinnerTitle--ccb9o {\n  text-align: center;\n}\n.fc--spinnerContainer--1AziK.fc--inline--3q9wT {\n  display: inline-block;\n}\n.fc--spinnerContainer--1AziK.fc--inline--3q9wT .fc--spinner--3NjJE {\n  display: inline-flex;\n  height: 100%;\n  align-items: center;\n  margin: 0;\n}\n.fc--spinnerContainer--1AziK.fc--inline--3q9wT .fc--spinnerBox--36HO9 {\n  width: 16px;\n  height: 16px;\n}\n.fc--spinner--3NjJE.fc--small--3l7b0 .fc--spinnerBox--36HO9 {\n  width: var(--small-spinner);\n  height: var(--small-spinner);\n}\n.fc--spinner--3NjJE .fc--spinnerBox--36HO9 {\n  width: var(--medium-spinner);\n  height: var(--medium-spinner);\n}\n.fc--spinnerBox--36HO9 {\n  animation: fc--spin--2bXcw 2s linear infinite;\n  transform-origin: center center;\n}\n.fc--spinner--3NjJE .fc--spinnerBorder--3HejH {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  animation: fc--dash--14Bpy 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke: var(--color-secondary);\n}\n.fc--spinner--3NjJE.fc--primary--M2fXG .fc--spinnerBorder--3HejH {\n  stroke: var(--color-primary);\n}\n.fc--spinner--3NjJE.fc--primary--M2fXG + .fc--spinnerTitle--ccb9o {\n  color: var(--color-primary);\n}\n@keyframes fc--spin--2bXcw {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes fc--dash--14Bpy {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n',
                '',
            ]),
                (exports.locals = {
                    spinnerContainer: 'fc--spinnerContainer--1AziK',
                    spinnerTitle: 'fc--spinnerTitle--ccb9o',
                    spinner: 'fc--spinner--3NjJE',
                    small: 'fc--small--3l7b0',
                    floatingContainer: 'fc--floatingContainer--MGc0H',
                    centeredContainer: 'fc--centeredContainer--3aLri',
                    inline: 'fc--inline--3q9wT',
                    spinnerBox: 'fc--spinnerBox--36HO9',
                    spin: 'fc--spin--2bXcw',
                    spinnerBorder: 'fc--spinnerBorder--3HejH',
                    dash: 'fc--dash--14Bpy',
                    primary: 'fc--primary--M2fXG',
                });
        },
        547: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                        _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8),
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                            289
                        ),
                        _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
                    const eventsFromNames = Object(
                            _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.actions
                        )('onClick'),
                        createButtonStory = props => () =>
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                    'div',
                                    { style: { padding: 8 } },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        _index__WEBPACK_IMPORTED_MODULE_3__.a,
                                        Object.assign(
                                            { primary: !0, compact: !0 },
                                            props,
                                            eventsFromNames
                                        ),
                                        'Compact button'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        _index__WEBPACK_IMPORTED_MODULE_3__.a,
                                        Object.assign(
                                            { primary: !0, comfortable: !0 },
                                            props,
                                            eventsFromNames
                                        ),
                                        'Comfortable button'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        _index__WEBPACK_IMPORTED_MODULE_3__.a,
                                        Object.assign(
                                            { primary: !0, disabled: !0 },
                                            props,
                                            eventsFromNames
                                        ),
                                        'Disabled button'
                                    )
                                )
                            );
                    Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
                        'General components/Button',
                        module
                    )
                        .addParameters({ jest: ['Button.stories.jsx'] })
                        .add('Contained', createButtonStory({ contained: !0 }))
                        .add('Outlined', createButtonStory({ outlined: !0 }))
                        .add('Frameless', createButtonStory({ frameless: !0 }));
                }.call(this, __webpack_require__(54)(module));
        },
        614: function(module, exports, __webpack_require__) {
            (exports = module.exports = __webpack_require__(33)(!1)).push([
                module.i,
                '.fc--container--Dhgvy {\n  --click-area: calc(var(--grid-unit) * 0.75);\n  --corner-radius: 4px;\n}\n.fc--container--Dhgvy {\n  display: inline-block;\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  border-radius: var(--corner-radius);\n  box-sizing: border-box;\n  /* Variants */\n  /* Sizes */\n}\n.fc--container--Dhgvy + .fc--container--Dhgvy {\n  margin-left: calc(var(--grid-unit) * 1px) !important;\n}\n.fc--container--Dhgvy .fc--button--1jadC {\n  display: inline-block;\n  box-sizing: border-box;\n  border: 1px solid;\n  border-radius: var(--corner-radius);\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n  vertical-align: middle;\n  overflow: hidden;\n}\n.fc--container--Dhgvy .fc--button--1jadC label {\n  cursor: pointer;\n}\n.fc--container--Dhgvy:focus .fc--button--1jadC {\n  outline: 1px dashed var(--color-black-alt3);\n}\n.fc--container--Dhgvy:active .fc--button--1jadC {\n  outline: none;\n}\n.fc--container--Dhgvy.fc--block--Qvvza {\n  display: block;\n  width: calc(100% + (var(--grid-unit) * 1px));\n}\n.fc--container--Dhgvy.fc--block--Qvvza .fc--button--1jadC {\n  display: block;\n}\n.fc--container--Dhgvy.fc--flex--3ik3D {\n  display: flex;\n  width: calc(100% + (var(--grid-unit) * 1px));\n}\n.fc--container--Dhgvy.fc--flex--3ik3D .fc--button--1jadC {\n  display: flex;\n}\n.fc--container--Dhgvy.fc--contained--RMmrX.fc--primary--3UQJY {\n  transition: background-color 0.2s;\n}\n.fc--container--Dhgvy.fc--contained--RMmrX.fc--primary--3UQJY .fc--button--1jadC {\n  background-color: var(--color-primary);\n  border-color: var(--color-primary);\n  color: var(--color-white);\n}\n.fc--container--Dhgvy.fc--contained--RMmrX.fc--primary--3UQJY:hover .fc--button--1jadC {\n  background-color: var(--color-primary-hover);\n  border-color: var(--color-primary-hover);\n}\n.fc--container--Dhgvy.fc--contained--RMmrX.fc--primary--3UQJY:active .fc--button--1jadC {\n  box-shadow: 0 0 0 2px var(--color-primary-alt4);\n  background-color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n.fc--container--Dhgvy.fc--contained--RMmrX[disabled] {\n  cursor: not-allowed;\n}\n.fc--container--Dhgvy.fc--contained--RMmrX[disabled] .fc--button--1jadC {\n  background-color: var(--color-black-alt4) !important;\n  border-color: var(--color-black-alt4) !important;\n  color: var(--color-black-alt2) !important;\n}\n.fc--container--Dhgvy.fc--contained--RMmrX[disabled]:hover .fc--button--1jadC {\n  background-color: var(--color-black-alt4) !important;\n  border-color: var(--color-black-alt4) !important;\n  color: var(--color-black-alt2) !important;\n}\n.fc--container--Dhgvy.fc--contained--RMmrX[disabled]:active {\n  background: none !important;\n}\n.fc--container--Dhgvy.fc--contained--RMmrX[disabled]:active .fc--button--1jadC {\n  background-color: var(--color-black-alt4) !important;\n  border-color: var(--color-black-alt4) !important;\n  color: var(--color-black-alt2) !important;\n  box-shadow: none;\n}\n.fc--container--Dhgvy.fc--outlined--3wYC-.fc--primary--3UQJY {\n  transition: background-color 0.2s;\n}\n.fc--container--Dhgvy.fc--outlined--3wYC-.fc--primary--3UQJY .fc--button--1jadC {\n  background-color: var(--color-primary-alt4);\n  color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n.fc--container--Dhgvy.fc--outlined--3wYC-.fc--primary--3UQJY:hover .fc--button--1jadC {\n  background-color: var(--color-primary-alt3);\n}\n.fc--container--Dhgvy.fc--outlined--3wYC-.fc--primary--3UQJY:active .fc--button--1jadC {\n  box-shadow: 0 0 0 2px var(--color-primary-alt4);\n  background-color: var(--color-primary-alt4);\n}\n.fc--container--Dhgvy.fc--outlined--3wYC-[disabled] {\n  cursor: not-allowed;\n}\n.fc--container--Dhgvy.fc--outlined--3wYC-[disabled] .fc--button--1jadC {\n  background-color: var(--color-black-alt4) !important;\n  border-color: var(--color-black-alt3) !important;\n  color: var(--color-black-alt2) !important;\n}\n.fc--container--Dhgvy.fc--outlined--3wYC-[disabled]:hover .fc--button--1jadC {\n  background-color: var(--color-black-alt4) !important;\n  border-color: var(--color-black-alt3) !important;\n  color: var(--color-black-alt2) !important;\n}\n.fc--container--Dhgvy.fc--outlined--3wYC-[disabled]:active {\n  background: none !important;\n}\n.fc--container--Dhgvy.fc--outlined--3wYC-[disabled]:active .fc--button--1jadC {\n  background-color: var(--color-black-alt4) !important;\n  border-color: var(--color-black-alt3) !important;\n  color: var(--color-black-alt2) !important;\n  box-shadow: none;\n}\n.fc--container--Dhgvy.fc--frameless--VKSQ0.fc--primary--3UQJY {\n  transition: background-color 0.2s;\n}\n.fc--container--Dhgvy.fc--frameless--VKSQ0.fc--primary--3UQJY .fc--button--1jadC {\n  background: none;\n  border-color: transparent;\n  color: var(--color-primary);\n}\n.fc--container--Dhgvy.fc--frameless--VKSQ0.fc--primary--3UQJY:hover .fc--button--1jadC {\n  color: var(--color-primary-hover);\n  background-color: var(--color-primary-alt4);\n}\n.fc--container--Dhgvy.fc--frameless--VKSQ0.fc--primary--3UQJY:active .fc--button--1jadC {\n  background-color: var(--color-primary-alt4);\n  border-color: transparent !important;\n}\n.fc--container--Dhgvy.fc--frameless--VKSQ0.fc--primary--3UQJY:focus .fc--button--1jadC {\n  box-shadow: 0 0 0 2px var(--color-primary-alt4);\n  color: var(--color-primary);\n}\n.fc--container--Dhgvy.fc--frameless--VKSQ0[disabled] {\n  cursor: not-allowed;\n}\n.fc--container--Dhgvy.fc--frameless--VKSQ0[disabled] .fc--button--1jadC {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  color: var(--color-black-alt2) !important;\n}\n.fc--container--Dhgvy.fc--frameless--VKSQ0[disabled]:hover .fc--button--1jadC {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  color: var(--color-black-alt2) !important;\n}\n.fc--container--Dhgvy.fc--frameless--VKSQ0[disabled]:active {\n  background: none !important;\n}\n.fc--container--Dhgvy.fc--frameless--VKSQ0[disabled]:active .fc--button--1jadC {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  color: var(--color-black-alt2) !important;\n  box-shadow: none;\n}\n.fc--container--Dhgvy.fc--compact--2GO2Z {\n  padding: calc(var(--click-area) * 1px) 0 calc(var(--click-area) * 1px) 0;\n  margin: calc(var(--click-area) * -1px);\n  height: calc((var(--grid-unit) * 3px) + (var(--click-area) * 2px));\n}\n.fc--container--Dhgvy.fc--compact--2GO2Z .fc--button--1jadC {\n  font-size: 12px;\n  padding: 0 calc(var(--grid-unit) * 2px);\n  height: calc(var(--grid-unit) * 3px);\n  line-height: calc(var(--grid-unit) * 3px);\n}\n.fc--container--Dhgvy.fc--comfortable--1EoWd {\n  padding: calc(var(--click-area) * 1px) 0 calc(var(--click-area) * 1px) 0;\n  margin: calc(var(--click-area) * -1px);\n  height: calc((var(--grid-unit) * 4.5px) + (var(--click-area) * 2px));\n}\n.fc--container--Dhgvy.fc--comfortable--1EoWd .fc--button--1jadC {\n  font-size: 14px;\n  padding: 0 calc(var(--grid-unit) * 2px);\n  height: calc(var(--grid-unit) * 4.5px);\n  line-height: calc(var(--grid-unit) * 4.5px);\n}\n',
                '',
            ]),
                (exports.locals = {
                    container: 'fc--container--Dhgvy',
                    button: 'fc--button--1jadC',
                    block: 'fc--block--Qvvza',
                    flex: 'fc--flex--3ik3D',
                    contained: 'fc--contained--RMmrX',
                    primary: 'fc--primary--3UQJY',
                    outlined: 'fc--outlined--3wYC-',
                    frameless: 'fc--frameless--VKSQ0',
                    compact: 'fc--compact--2GO2Z',
                    comfortable: 'fc--comfortable--1EoWd',
                });
        },
        615: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                        _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8),
                        _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83),
                        _TabContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(137);
                    const TabsStory = () => {
                        const [
                            activeTabKey,
                            setActiveTabKey,
                        ] = react__WEBPACK_IMPORTED_MODULE_0__.useState('chapter1');
                        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                            _index__WEBPACK_IMPORTED_MODULE_2__.b,
                            {
                                activeTabKey: activeTabKey,
                                onChange: tabKey => setActiveTabKey(tabKey),
                            },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                _index__WEBPACK_IMPORTED_MODULE_2__.a,
                                { tabKey: 'chapter1', title: 'Chapter 1' },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                    _TabContent__WEBPACK_IMPORTED_MODULE_3__.a,
                                    { changeChapter: tabKey => setActiveTabKey(tabKey) }
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                _index__WEBPACK_IMPORTED_MODULE_2__.a,
                                { tabKey: 'chapter2', title: 'Chapter 2' },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                    _TabContent__WEBPACK_IMPORTED_MODULE_3__.b,
                                    { changeChapter: tabKey => setActiveTabKey(tabKey) }
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                _index__WEBPACK_IMPORTED_MODULE_2__.a,
                                { tabKey: 'chapter3', title: 'Chapter 3' },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                    _TabContent__WEBPACK_IMPORTED_MODULE_3__.c,
                                    { changeChapter: tabKey => setActiveTabKey(tabKey) }
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                _index__WEBPACK_IMPORTED_MODULE_2__.a,
                                { tabKey: 'chapter4', title: 'Chapter 4', disabled: !0 }
                            )
                        );
                    };
                    Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
                        'General components/Tabs',
                        module
                    )
                        .addParameters({ jest: ['Tabs.stories.jsx'] })
                        .add('Tabs', () =>
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabsStory, null)
                        );
                }.call(this, __webpack_require__(54)(module));
        },
        616: function(module, exports, __webpack_require__) {
            (exports = module.exports = __webpack_require__(33)(!1)).push([
                module.i,
                '.fc--tabs--vUAcN {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.fc--tabs--vUAcN .fc--tabsPane--210XK {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid var(--color-black-alt4);\n}\n.fc--tabs--vUAcN .fc--tabsPane--210XK .fc--tab--2M_vZ {\n  cursor: pointer;\n  height: calc(var(--grid-unit)*5px);\n  text-decoration: none;\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  min-width: 0;\n  overflow: hidden;\n  padding-top: calc(var(--grid-unit)*0.5px);\n  padding-bottom: calc(var(--grid-unit)*0.5px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fc--tabs--vUAcN .fc--tabsPane--210XK .fc--tab--2M_vZ .fc--title--1ldod {\n  font-size: 16px;\n  padding: calc(var(--grid-unit)*1px) calc(var(--grid-unit)*2px) calc(var(--grid-unit)*1px) calc(var(--grid-unit)*2px);\n  user-select: none;\n  overflow: hidden;\n  height: calc(var(--grid-unit)*3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fc--tabs--vUAcN .fc--tabsPane--210XK .fc--tab--2M_vZ .fc--title--1ldod.fc--pressed---vLeA {\n  background-color: var(--color-primary-alt4);\n  border-radius: calc(var(--grid-unit)*0.5px);\n}\n.fc--tabs--vUAcN .fc--tabsPane--210XK .fc--tab--2M_vZ:focus {\n  outline: 1px dashed var(--color-black-alt3);\n}\n.fc--tabs--vUAcN .fc--tabsPane--210XK .fc--tab--2M_vZ:hover {\n  background-color: var(--color-primary-hover-alt1);\n}\n.fc--tabs--vUAcN .fc--tabsPane--210XK .fc--tab--2M_vZ.fc--pressed---vLeA {\n  outline: none;\n  background-color: initial;\n}\n.fc--tabs--vUAcN .fc--tabsPane--210XK .fc--tab--2M_vZ.fc--disabled--tehE1 {\n  cursor: not-allowed;\n  color: var(--color-black-alt4) !important;\n  outline: none;\n}\n.fc--tabs--vUAcN .fc--tabsPane--210XK .fc--tab--2M_vZ.fc--disabled--tehE1:hover {\n  background-color: initial;\n}\n.fc--tabs--vUAcN .fc--tabsPane--210XK .fc--tab--2M_vZ.fc--current--f05y3 {\n  color: var(--color-primary);\n  border-bottom: 2px solid var(--color-primary);\n  padding-bottom: calc(var(--grid-unit)*0.5px - 2px);\n  outline: none;\n}\n.fc--tabs--vUAcN .fc--tabsPane--210XK .fc--tab--2M_vZ.fc--current--f05y3:hover {\n  background-color: initial;\n  color: var(--color-primary-hover);\n}\n.fc--tabs--vUAcN .fc--tabsPane--210XK .fc--tab--2M_vZ.fc--current--f05y3.fc--pressed---vLeA {\n  border-radius: calc(var(--grid-unit)*1px) calc(var(--grid-unit)*1px) 0px 0px;\n}\n.fc--tabs--vUAcN .fc--tabContent--1F3ec {\n  width: 100%;\n  height: 100%;\n}\n',
                '',
            ]),
                (exports.locals = {
                    tabs: 'fc--tabs--vUAcN',
                    tabsPane: 'fc--tabsPane--210XK',
                    tab: 'fc--tab--2M_vZ',
                    title: 'fc--title--1ldod',
                    pressed: 'fc--pressed---vLeA',
                    disabled: 'fc--disabled--tehE1',
                    current: 'fc--current--f05y3',
                    tabContent: 'fc--tabContent--1F3ec',
                });
        },
        617: function(module, exports, __webpack_require__) {
            (exports = module.exports = __webpack_require__(33)(!1)).push([
                module.i,
                ':root {\n  --grid-unit: 8;\n  --screen-medium: 1600px;\n  --tablet-max-width: 1224px;\n  --mobile-max-width: 767px;\n}\n.fc--content--2fyPs {\n  padding: calc(var(--grid-unit)*3px) calc(var(--grid-unit)*20px) 0 calc(var(--grid-unit)*20px);\n}\n.fc--content--2fyPs .fc--chapter--3wDkc {\n  padding-top: calc(var(--grid-unit)*2px);\n}\n',
                '',
            ]),
                (exports.locals = { content: 'fc--content--2fyPs', chapter: 'fc--chapter--3wDkc' });
        },
        618: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    __webpack_require__(30),
                        __webpack_require__(29),
                        __webpack_require__(15),
                        __webpack_require__(45),
                        __webpack_require__(72);
                    var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
                        _storybook_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8),
                        _useKeyboardNavigation_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                            290
                        );
                    function _slicedToArray(arr, i) {
                        return (
                            (function _arrayWithHoles(arr) {
                                if (Array.isArray(arr)) return arr;
                            })(arr) ||
                            (function _iterableToArrayLimit(arr, i) {
                                var _arr = [],
                                    _n = !0,
                                    _d = !1,
                                    _e = void 0;
                                try {
                                    for (
                                        var _s, _i = arr[Symbol.iterator]();
                                        !(_n = (_s = _i.next()).done) &&
                                        (_arr.push(_s.value), !i || _arr.length !== i);
                                        _n = !0
                                    );
                                } catch (err) {
                                    (_d = !0), (_e = err);
                                } finally {
                                    try {
                                        _n || null == _i.return || _i.return();
                                    } finally {
                                        if (_d) throw _e;
                                    }
                                }
                                return _arr;
                            })(arr, i) ||
                            (function _nonIterableRest() {
                                throw new TypeError(
                                    'Invalid attempt to destructure non-iterable instance'
                                );
                            })()
                        );
                    }
                    var KeyboardNavigationStory = function() {
                        var listItems = ['Item 1', 'Item 2', 'Item 3'],
                            _React$useState2 = _slicedToArray(
                                react__WEBPACK_IMPORTED_MODULE_5__.useState(null),
                                2
                            ),
                            currentItem = _React$useState2[0],
                            setCurrentItem = _React$useState2[1],
                            ref = Object(_useKeyboardNavigation_ts__WEBPACK_IMPORTED_MODULE_7__.a)({
                                onDown: function onDown() {
                                    return setCurrentItem(
                                        currentItem < listItems.length - 1
                                            ? currentItem + 1
                                            : currentItem
                                    );
                                },
                                onUp: function onUp() {
                                    return setCurrentItem(
                                        0 < currentItem ? currentItem - 1 : currentItem
                                    );
                                },
                            });
                        return react__WEBPACK_IMPORTED_MODULE_5__.createElement(
                            react__WEBPACK_IMPORTED_MODULE_5__.Fragment,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_5__.createElement('input', {
                                ref: ref,
                                placeholder:
                                    null === currentItem
                                        ? 'Click me to use navigation'
                                        : listItems[currentItem],
                                readOnly: !0,
                            }),
                            react__WEBPACK_IMPORTED_MODULE_5__.createElement(
                                'ul',
                                null,
                                listItems.map(function(item, index) {
                                    return react__WEBPACK_IMPORTED_MODULE_5__.createElement(
                                        'li',
                                        {
                                            style: ((listId = index),
                                            {
                                                fontWeight: listId === currentItem ? '600' : '200',
                                                listStyleType: 'none',
                                            }),
                                        },
                                        ' ',
                                        item
                                    );
                                    var listId;
                                })
                            )
                        );
                    };
                    KeyboardNavigationStory.displayName = 'KeyboardNavigationStory';
                    var _ref = react__WEBPACK_IMPORTED_MODULE_5__.createElement(
                        KeyboardNavigationStory,
                        null
                    );
                    Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.storiesOf)(
                        'Hooks',
                        module
                    ).add('KeyboardNavigation', function() {
                        return _ref;
                    });
                }.call(this, __webpack_require__(54)(module));
        },
        619: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                        _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8),
                        _components_general_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                            22
                        ),
                        _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(292);
                    const PopoverContent = () =>
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                'div',
                                null,
                                'This is a popover!'
                            ),
                        PopoverStory = () => {
                            const popoverRef = Object(_index__WEBPACK_IMPORTED_MODULE_3__.a)(
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                    PopoverContent,
                                    null
                                ),
                                { justify: 'middle', align: 'end', alignArrow: 'start' }
                            );
                            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                _components_general_Button__WEBPACK_IMPORTED_MODULE_2__.a,
                                { ref: popoverRef, primary: !0, contained: !0 },
                                'Click for popover'
                            );
                        };
                    Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
                        'Hooks',
                        module
                    ).add('Popover', () =>
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopoverStory, null)
                    );
                }.call(this, __webpack_require__(54)(module));
        },
        620: function(module, exports, __webpack_require__) {
            (exports = module.exports = __webpack_require__(33)(!1)).push([
                module.i,
                ':root {\n  --grid-unit: 8;\n  --screen-medium: 1600px;\n  --tablet-max-width: 1224px;\n  --mobile-max-width: 767px;\n}\n.fc--container--35hWC {\n  position: relative;\n  pointer-events: all;\n  max-height: 75vh;\n  display: flex;\n}\n.fc--container--35hWC.fc--isRelative--89zfn {\n  position: absolute;\n  top: 100%;\n}\n.fc--container--35hWC.fc--left--2hC-w {\n  left: 0;\n}\n.fc--container--35hWC.fc--left--2hC-w .fc--arrow--1SJkb {\n  left: 11px;\n}\n.fc--container--35hWC.fc--right--3dBGO {\n  right: 0;\n}\n.fc--container--35hWC.fc--right--3dBGO .fc--arrow--1SJkb {\n  right: 11px;\n}\n.fc--container--35hWC.fc--isInset--x45Tn {\n  top: calc(100% - calc(var(--grid-unit) * 2px));\n}\n@media (max-width: var(--mobile-max-width)) {\n  .fc--container--35hWC.fc--isInset--x45Tn {\n    top: 100%;\n  }\n}\n.fc--container--35hWC.fc--isInset--x45Tn.fc--left--2hC-w {\n  left: calc(var(--grid-unit) * 3px);\n}\n.fc--container--35hWC.fc--isInset--x45Tn.fc--right--3dBGO {\n  right: calc(var(--grid-unit) * 1px);\n}\n.fc--container--35hWC .fc--content--2RVEo {\n  background: white;\n  overflow: hidden;\n  border-radius: 4px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.05);\n  display: flex;\n  max-height: 100%;\n  box-sizing: border-box;\n  padding: calc(var(--grid-unit) * 1px);\n}\n.fc--container--35hWC .fc--arrow--1SJkb {\n  position: absolute;\n  bottom: 100%;\n  width: 10px;\n  height: 4px;\n}\n.fc--container--35hWC .fc--arrow--1SJkb > svg {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n}\n.fc--container--35hWC .fc--arrow--1SJkb > svg path {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.05);\n}\n',
                '',
            ]),
                (exports.locals = {
                    container: 'fc--container--35hWC',
                    isRelative: 'fc--isRelative--89zfn',
                    left: 'fc--left--2hC-w',
                    arrow: 'fc--arrow--1SJkb',
                    right: 'fc--right--3dBGO',
                    isInset: 'fc--isInset--x45Tn',
                    content: 'fc--content--2RVEo',
                });
        },
        621: function(module, exports, __webpack_require__) {
            (exports = module.exports = __webpack_require__(33)(!1)).push([
                module.i,
                '.fc--container--1H0Pk {\n  position: absolute;\n  pointer-events: none !important;\n}\n',
                '',
            ]),
                (exports.locals = { container: 'fc--container--1H0Pk' });
        },
        66: function(module, exports, __webpack_require__) {
            var content = __webpack_require__(543);
            'string' == typeof content && (content = [[module.i, content, '']]);
            var options = { hmr: !0, transform: void 0, insertInto: void 0 };
            __webpack_require__(34)(content, options);
            content.locals && (module.exports = content.locals);
        },
        67: function(module, exports, __webpack_require__) {
            var content = __webpack_require__(617);
            'string' == typeof content && (content = [[module.i, content, '']]);
            var options = { hmr: !0, transform: void 0, insertInto: void 0 };
            __webpack_require__(34)(content, options);
            content.locals && (module.exports = content.locals);
        },
        83: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            var react = __webpack_require__(0),
                styles = __webpack_require__(23);
            const TabContent = ({ children: children, activeTabKey: activeTabKey }) => {
                    const active = react.Children.toArray(children).find(
                        child => child.props.tabKey === activeTabKey
                    );
                    if (!active) return null;
                    const clonedChildren = react.Children.map(active.props.children, child =>
                        react.cloneElement(child)
                    );
                    return react.createElement(react.Fragment, null, clonedChildren);
                },
                TabPane = ({
                    children: children,
                    onChange: onChange,
                    activeTabKey: activeTabKey,
                }) => {
                    const clonedChildren = react.Children.map(children, child => {
                        const { title: title, tabKey: tabKey } = child.props;
                        return title && tabKey
                            ? react.cloneElement(child, {
                                  onChange: () => onChange(tabKey),
                                  isCurrent: tabKey === activeTabKey,
                              })
                            : null;
                    });
                    return react.createElement(react.Fragment, null, clonedChildren);
                },
                Tabs = ({ onChange: onChange, activeTabKey: activeTabKey, children: children }) =>
                    react.createElement(
                        'div',
                        { className: styles.tabs },
                        react.createElement(
                            'div',
                            { className: styles.tabsPane },
                            react.createElement(TabPane, {
                                children: children,
                                activeTabKey: activeTabKey,
                                onChange: tabKey => onChange(tabKey),
                            })
                        ),
                        react.createElement(
                            'div',
                            { className: styles.tabContent },
                            react.createElement(TabContent, {
                                children: children,
                                activeTabKey: activeTabKey,
                            })
                        )
                    );
            Tabs.displayName = 'Tabs';
            var Tabs_Tabs = Tabs,
                classnames = __webpack_require__(28);
            const Tab = ({
                isCurrent: isCurrent,
                title: title,
                disabled: disabled,
                onChange: onChange,
                url: url,
            }) => {
                const [isPressed, setIsPressed] = react.useState(!1),
                    tabClasses = classnames(styles.tab, {
                        [styles.current]: isCurrent,
                        [styles.disabled]: disabled,
                        [styles.pressed]: isPressed && !disabled,
                    }),
                    titleClasses = classnames(styles.title, {
                        [styles.pressed]: isPressed && !disabled,
                    });
                return disabled
                    ? react.createElement(
                          'span',
                          { className: tabClasses },
                          react.createElement('div', { className: titleClasses }, title)
                      )
                    : react.createElement(
                          'a',
                          {
                              className: tabClasses,
                              onClick: () => !disabled && onChange && onChange(),
                              onMouseDown: () => setIsPressed(!0),
                              onMouseUp: () => setIsPressed(!1),
                              onMouseLeave: () => isPressed && setIsPressed(!1),
                              href: url,
                          },
                          react.createElement('div', { className: titleClasses }, title)
                      );
            };
            (Tab.displayName = 'Tab'),
                (Tab.defaultProps = { isCurrent: !1, disabled: !1, onChange: () => {} });
            var Tabs_Tab = Tab;
            __webpack_require__.d(__webpack_exports__, 'b', function() {
                return Tabs_Tabs;
            }),
                __webpack_require__.d(__webpack_exports__, 'a', function() {
                    return Tabs_Tab;
                });
        },
        99: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82),
                react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
                classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28),
                classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
                    classnames__WEBPACK_IMPORTED_MODULE_2__
                ),
                _styles_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16),
                _styles_less__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
                    _styles_less__WEBPACK_IMPORTED_MODULE_3__
                );
            const Spinner = _a => {
                var {
                        floating: floating,
                        centered: centered,
                        primary: primary,
                        children: children,
                        title: title,
                        small: small,
                        size: size,
                        inline: inline,
                    } = _a,
                    props = tslib__WEBPACK_IMPORTED_MODULE_0__.a(_a, [
                        'floating',
                        'centered',
                        'primary',
                        'children',
                        'title',
                        'small',
                        'size',
                        'inline',
                    ]);
                const containerClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                        _styles_less__WEBPACK_IMPORTED_MODULE_3___default.a.spinnerContainer,
                        {
                            [_styles_less__WEBPACK_IMPORTED_MODULE_3___default.a
                                .floatingContainer]: floating,
                            [_styles_less__WEBPACK_IMPORTED_MODULE_3___default.a
                                .centeredContainer]: centered,
                            [_styles_less__WEBPACK_IMPORTED_MODULE_3___default.a.inline]: inline,
                        }
                    ),
                    spinnerClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                        _styles_less__WEBPACK_IMPORTED_MODULE_3___default.a.spinner,
                        {
                            [_styles_less__WEBPACK_IMPORTED_MODULE_3___default.a.primary]: primary,
                            [_styles_less__WEBPACK_IMPORTED_MODULE_3___default.a.small]: small,
                        }
                    );
                return inline
                    ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          Object.assign({ className: containerClassNames }, props),
                          react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              'div',
                              { className: spinnerClassNames },
                              react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                  'svg',
                                  {
                                      className:
                                          _styles_less__WEBPACK_IMPORTED_MODULE_3___default.a
                                              .spinnerBox,
                                      viewBox: '24 24 48 48',
                                      style: { width: size, height: size },
                                  },
                                  react__WEBPACK_IMPORTED_MODULE_1__.createElement('circle', {
                                      className:
                                          _styles_less__WEBPACK_IMPORTED_MODULE_3___default.a
                                              .spinnerBorder,
                                      cx: '48',
                                      cy: '48',
                                      r: '20',
                                      fill: 'none',
                                      strokeWidth: 3,
                                      strokeMiterlimit: '10',
                                  })
                              )
                          )
                      )
                    : react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          Object.assign({ className: containerClassNames }, props),
                          react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              'div',
                              { className: spinnerClassNames },
                              react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                  'svg',
                                  {
                                      className:
                                          _styles_less__WEBPACK_IMPORTED_MODULE_3___default.a
                                              .spinnerBox,
                                      viewBox: '24 24 48 48',
                                  },
                                  react__WEBPACK_IMPORTED_MODULE_1__.createElement('circle', {
                                      className:
                                          _styles_less__WEBPACK_IMPORTED_MODULE_3___default.a
                                              .spinnerBorder,
                                      cx: '48',
                                      cy: '48',
                                      r: '20',
                                      fill: 'none',
                                      strokeWidth: '3',
                                      strokeMiterlimit: '10',
                                  })
                              )
                          ),
                          title
                              ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                    'h2',
                                    {
                                        className:
                                            _styles_less__WEBPACK_IMPORTED_MODULE_3___default.a
                                                .spinnerTitle,
                                    },
                                    title
                                )
                              : null,
                          react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 0
                              ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                    'p',
                                    null,
                                    children
                                )
                              : null
                      );
            };
            (Spinner.defaultProps = {
                floating: !1,
                centered: !1,
                primary: !1,
                title: '',
                small: !1,
                inline: !1,
                size: 24,
            }),
                (__webpack_exports__.a = Spinner);
        },
    },
    [[295, 1, 2]],
]);
//# sourceMappingURL=main.02231d8f24dfc3620eab.bundle.js.map