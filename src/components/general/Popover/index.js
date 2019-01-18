import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import RelativePortal from "components/utils/RelativePortal";
import Arrow from "./Arrow";
import styles from "./styles.less";

export const popoverHorizontalPositions = {
    left: "left",
    right: "right",
};

export const popoverVerticalPositions = {
    top: "top",
    bottom: "bottom",
};

export default class Popover extends Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        relativeTo: PropTypes.any,
        horizontalPosition: PropTypes.oneOf(Object.values(popoverHorizontalPositions)),
        verticalPosition: PropTypes.oneOf(Object.values(popoverVerticalPositions)),
        inset: PropTypes.bool,
    };

    static defaultProps = {
        horizontalPosition: popoverHorizontalPositions.left,
        verticalPosition: popoverVerticalPositions.bottom,
    };

    handleClickOutside() {
        if(this.props.isOpen) {
            setTimeout(() => this.close());
        }
    }

    close() {
        this.props.onClose();
    }

    renderPopover() {
        const { relativeTo, children, horizontalPosition, verticalPosition, inset } = this.props;

        const containerClassNames = classNames(
            styles.container,
            styles[horizontalPosition],
            styles[verticalPosition],
            {
                [styles.isInset]: inset,
                [styles.isRelative]: relativeTo,
            });

        return (
            <div className={containerClassNames}>
                <Arrow />
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        );
    }

    render() {
        const { isOpen, relativeTo } = this.props;

        if(!isOpen) {
            return null;
        }

        if(!relativeTo) {
            return this.renderPopover();
        }

        return (
            <RelativePortal relativeTo={relativeTo} onClickOutside={e => this.handleClickOutside(e)}>
                {this.renderPopover()}
            </RelativePortal>
        );
    }
};