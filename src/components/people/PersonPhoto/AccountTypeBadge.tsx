import React from 'react';
import { PhotoSize, useTooltipRef } from '@equinor/fusion-components';
import {
    PersonDetails,
    useComponentDisplayType,
    useComponentDisplayClassNames,
    ComponentDisplayType,
} from '@equinor/fusion';
import styles from './styles.less';
import classNames from 'classnames';
import ConsultantIcon from './icons/ConsultantIcon';
import ExternalHireIcon from './icons/ExternalHireIcon';
import AffiliateIcon from './icons/AffiliateIcon';
import LockedIcon from './icons/LockedIcon';
import EmployeeIcon from './icons/EmployeeIcon';

type AccountTypeBageProps = {
    size: PhotoSize;
    currentPerson: PersonDetails;
    hideTooltip?: boolean;
};

const getIconSizes = (isCompact: boolean) => ({
    xlarge: isCompact ? 16 : 24,
    large: isCompact ? 8 : 16,
    medium: isCompact ? 8 : 16,
    small: isCompact ? 8 : 12,
});

const resolveTooltip = (accountType: string) => {
    switch (accountType) {
        case 'Local':
            return 'No affiliate access account. User cannot log in to Fusion';
        default:
            return accountType;
    }
};

const AccountTypeBadge = ({ size, currentPerson, hideTooltip }: AccountTypeBageProps) => {
    const isExternalHire =
        currentPerson.jobTitle && currentPerson.jobTitle.toLowerCase().startsWith('ext');
    const isExternal = currentPerson.accountType === 'External';
    const isConsultant = currentPerson.accountType === 'Consultant';
    const isEmployee = currentPerson.accountType === 'Employee';
    const isLocal = currentPerson.accountType === 'Local';

    const iconClassNames = classNames(styles.iconContainer, useComponentDisplayClassNames(styles), {
        [styles.xlarge]: size === 'xlarge',
        [styles.large]: size === 'large',
        [styles.medium]: size === 'medium',
        [styles.small]: size === 'small',
        [styles.externalHire]: isExternalHire,
        [styles.consultant]: isConsultant,
        [styles.affiliate]: isExternal,
        [styles.local]: isLocal,
        [styles.employee]: isEmployee,
    });

    const displayType = useComponentDisplayType();
    const iconSize = getIconSizes(displayType === ComponentDisplayType.Compact)[size];
    const accountTypeTooltipRef = useTooltipRef(
        hideTooltip ? '' : resolveTooltip(currentPerson.accountType)
    );

    return (
        <div className={iconClassNames} ref={accountTypeTooltipRef}>
            {isConsultant && <ConsultantIcon width={iconSize} height={iconSize} />}
            {isExternalHire && <ExternalHireIcon width={iconSize} height={iconSize} />}
            {isExternal && <AffiliateIcon width={iconSize} height={iconSize} />}
            {isLocal && <LockedIcon width={iconSize} height={iconSize} />}
            {isEmployee && <EmployeeIcon width={iconSize} height={iconSize} />}
        </div>
    );
};

export default AccountTypeBadge;
