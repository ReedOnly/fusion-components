import React, {
    useState,
    useRef,
    useCallback,
    useEffect,
    forwardRef,
    MutableRefObject,
} from 'react';
import {
    TextInput,
    DropdownArrow,
    Menu,
    useClickOutsideOverlayPortal,
    useRelativePortal,
    useOverlayContainer,
    useRelativePositioning,
} from '@equinor/fusion-components';
import styles from './styles.less';
import { useFusionContext, FusionContext } from '@equinor/fusion';
import { createPortal } from 'react-dom';
import { Router } from 'react-router';

type DropdownSelections = {
    title: string;
    key: string;
};

type DropdownProps = {
    label?: string;
    selections: DropdownSelections[];
    onSelect?: (item: DropdownSelections) => void;
    selected?: string;
};

const Dropdown: React.FC<DropdownProps> = ({ selections, label, onSelect, selected }) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [dropdownSelections, setDropdownSelections] = useState(selections);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputContainerRef = useRef<HTMLDivElement | null>(null);

    const close = useCallback(() => open && setOpen(false), [open]);

    const filterSearch = useCallback(inputValue => {
        setDropdownSelections(
            selections.filter(selection =>
                selection.title.toLowerCase().includes(inputValue.toLowerCase())
            )
        );
    }, []);

    useClickOutsideOverlayPortal(close, inputContainerRef.current);
    // console.log("IS OPEN", open);
    // useRelativePortal(
    //     <div className={styles.menuContainer}>
    //         <Menu
    //             onClick={item => {
    //                 console.log(open);
    //                 if (open) {
    //                     onSelect && onSelect(item);
    //                     setOpen(false);
    //                 }
    //             }}
    //             keyboardNavigationRef={inputRef.current}
    //             sections={[
    //                 {
    //                     key: 'DropdownSelection',
    //                     items: dropdownSelections,
    //                 },
    //             ]}
    //         />
    //     </div>,
    //     inputContainerRef,
    //     open
    // );
    return (
        <div className={styles.inputContainer} ref={inputContainerRef}>
            <TextInput
                onChange={value => {
                    if (!open) {
                        setOpen(true);
                        return;
                    }
                    setInputValue(value);
                    filterSearch(value);
                }}
                label={label}
                icon={<DropdownArrow cursor="pointer" isOpen={open} />}
                onIconAction={() => open && setOpen(false)}
                onClick={() => !open && setOpen(true)}
                value={open ? inputValue : selected}
                ref={inputRef}
            />
            <Overlay relativeRef={inputContainerRef} >
                <div className={styles.menuContainer}>
                    <Menu
                        onClick={item => {
                            console.log(open);
                            if (open) {
                                onSelect && onSelect(item);
                                setOpen(false);
                            }
                        }}
                        keyboardNavigationRef={inputRef.current}
                        sections={[
                            {
                                key: 'DropdownSelection',
                                items: dropdownSelections,
                            },
                        ]}
                    />
                </div>
            </Overlay>
        </div>
    );
};

const Overlay = ({ children, relativeRef }) => {
    const fusionContext = useFusionContext();
    const ref = document.createElement('div');
    const overlayContainer = useOverlayContainer();
    const rect = useRelativePositioning(relativeRef as MutableRefObject<HTMLDivElement | null>);

    useEffect(() => {
        overlayContainer && overlayContainer.appendChild(ref);

        return () => {
            overlayContainer && overlayContainer.removeChild(ref);
        };
    }, []);
    return createPortal(
        <div
            style={{
                position: 'absolute',
                width: rect.width,
                height: rect.height,
                top: rect.top,
                left: rect.left,
            }}
        >
            <Router history={fusionContext.history}>
                <FusionContext.Provider value={fusionContext}>{children}</FusionContext.Provider>
            </Router>
        </div>,
        ref
    );
};

export default Dropdown;
