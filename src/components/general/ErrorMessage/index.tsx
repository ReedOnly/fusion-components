import * as React from "react";
import Button from "../Button";
import styles from "./styles.less";
import * as Icons from "./errorIcons";
import classNames from "classnames";

export enum ErrorTypes {
    error= "error",
    accessDenied= "accessDenied",
    notFound= "notFound",
    noData= "noData",
}

export type ErrorMessageProps = {
    hasError?: boolean,
    errorType?:ErrorTypes,
    message?: any,
    resourceName?: string,
    title?: string,
    children?: any,
    icon?: any,
    action?: string,
    onTakeAction?: (event?: React.SyntheticEvent<Element, Event>) => void,
    small?:boolean
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({
    hasError,
    errorType = ErrorTypes.error,
    message,
    resourceName,
    title,
    children,
    icon,
    action,
    onTakeAction,
    small,
}) => {

    const getErrorMessageForType = errorType => {
        switch (errorType) {
            case ErrorTypes.accessDenied:
                return {
                    title: "It seems like you don´t have access to this content",
                    icon: Icons.AccessDenied,
                };
            case ErrorTypes.notFound:
                return {
                    title: `The ${resourceName} could not be found`,
                    icon: Icons.ErrorOrNotFound,
                };
            case ErrorTypes.noData:
                return {
                    title: `Unfortunately, we could not find any data for this component`,
                    icon: Icons.noData,
                };
            default:
                return {
                    title: "Oops! Something went wrong!",
                    icon: Icons.ErrorOrNotFound,
                };
        }
    };

    if (!hasError) {
        return children;
    }
    const error = React.useMemo(() => getErrorMessageForType(errorType), [errorType]);

    const messageContainerClasses = classNames(styles.messageContainer, {
        [styles.small]: small,
    });

    return (
        <div className={styles.container}>
            <div className={messageContainerClasses}>
                {icon || error.icon}
                <div className={styles.title}>{title || error.title}</div>
                <div className={styles.message}>{message}</div>
                {action ? (
                    <Button outlined contained onClick={onTakeAction}>
                        {action}
                    </Button>
                ) : null}
            </div>
        </div>
    );
};

export default ErrorMessage;
