import React from 'react';
import { IconProps, useIcon } from '@equinor/fusion-components';

const AffiliateIcon = (props: IconProps) => {
    const iconFactory = useIcon(
        <React.Fragment>
            <path
                d="M15.5192 9.79166H18.7771L17.3537 11.215C17.24 11.3287 17.24 11.5154 17.3537 11.6292C17.4675 11.7429 17.6512 11.7429 17.765 11.6292L19.6871 9.70708C19.8008 9.59333 19.8008 9.40958 19.6871 9.29583L17.7679 7.37083C17.7134 7.31622 17.6394 7.28552 17.5623 7.28552C17.4851 7.28552 17.4112 7.31622 17.3567 7.37083C17.2429 7.48458 17.2429 7.66833 17.3567 7.78208L18.7771 9.20833H15.5192C15.3587 9.20833 15.2275 9.33958 15.2275 9.5C15.2275 9.66041 15.3587 9.79166 15.5192 9.79166Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 13.6928C7 12.4246 8.02809 11.3965 9.2963 11.3965H15.037C16.3052 11.3965 17.3333 12.4246 17.3333 13.6928V18.2854H7V13.6928ZM9.2963 12.1619C8.45082 12.1619 7.76543 12.8473 7.76543 13.6928V17.5199H16.5679V13.6928C16.5679 12.8473 15.8825 12.1619 15.037 12.1619H9.2963Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.1405 11.6396C12.1424 11.6375 12.1444 11.6353 12.1465 11.6332C12.2876 11.4862 12.5212 11.4814 12.6683 11.6226L13.6524 12.5673C13.7249 12.6369 13.7659 12.733 13.7659 12.8335C13.7659 12.934 13.7249 13.0302 13.6524 13.0998L12.8677 13.853L14.2162 16.4421C14.2977 16.5985 14.2571 16.7906 14.1194 16.9008L12.6626 18.0662C12.5308 18.1877 12.3265 18.1981 12.1823 18.0827L10.7061 16.9017C10.5684 16.7916 10.5278 16.5995 10.6093 16.4431L11.9578 13.854L11.1731 13.1007C11.1006 13.0311 11.0596 12.935 11.0596 12.8345C11.0596 12.734 11.1006 12.6379 11.1731 12.5683L12.1405 11.6396ZM12.4133 12.4009L11.9616 12.8345L12.4122 13.2672L12.8639 12.8335L12.4133 12.4009ZM12.413 14.5778L11.4041 16.5149L12.4121 17.3214L13.4214 16.514L12.413 14.5778Z"
                fill="white"
            />
            <path
                d="M12.1465 11.6332L12.0743 11.5639L12.0743 11.5639L12.1465 11.6332ZM12.1405 11.6396L12.2098 11.7119L12.2142 11.7072L12.1405 11.6396ZM12.6683 11.6226L12.599 11.6947L12.6683 11.6226ZM13.6524 12.5673L13.7217 12.4952V12.4952L13.6524 12.5673ZM13.6524 13.0998L13.7217 13.1719V13.1719L13.6524 13.0998ZM12.8677 13.853L12.7985 13.7809C12.7664 13.8117 12.7585 13.8599 12.779 13.8992L12.8677 13.853ZM14.2162 16.4421L14.1275 16.4883H14.1275L14.2162 16.4421ZM14.1194 16.9008L14.1819 16.9789H14.1819L14.1194 16.9008ZM12.6626 18.0662L12.6 17.9879L12.5949 17.9927L12.6626 18.0662ZM12.1823 18.0827L12.1198 18.1608H12.1198L12.1823 18.0827ZM10.7061 16.9017L10.6436 16.9798H10.6436L10.7061 16.9017ZM10.6093 16.4431L10.698 16.4893H10.698L10.6093 16.4431ZM11.9578 13.854L12.0465 13.9002C12.067 13.8608 12.0591 13.8126 12.027 13.7819L11.9578 13.854ZM11.1731 13.1007L11.1038 13.1729V13.1729L11.1731 13.1007ZM11.1731 12.5683L11.1038 12.4962L11.1731 12.5683ZM12.4133 12.4009L12.4825 12.3288C12.4438 12.2916 12.3827 12.2916 12.344 12.3288L12.4133 12.4009ZM11.9616 12.8345L11.8923 12.7624C11.8727 12.7812 11.8616 12.8073 11.8616 12.8345C11.8616 12.8617 11.8727 12.8878 11.8923 12.9067L11.9616 12.8345ZM12.4122 13.2672L12.343 13.3393C12.3817 13.3765 12.4428 13.3765 12.4815 13.3393L12.4122 13.2672ZM12.8639 12.8335L12.9332 12.9057C12.9528 12.8868 12.9639 12.8608 12.9639 12.8335C12.9639 12.8063 12.9528 12.7803 12.9332 12.7614L12.8639 12.8335ZM12.413 14.5778L12.5017 14.5316C12.4845 14.4985 12.4503 14.4778 12.413 14.4778C12.3757 14.4778 12.3415 14.4985 12.3243 14.5316L12.413 14.5778ZM11.4041 16.5149L11.3154 16.4687C11.2933 16.5111 11.3043 16.5632 11.3416 16.593L11.4041 16.5149ZM12.4121 17.3214L12.3497 17.3995C12.3862 17.4287 12.4381 17.4287 12.4746 17.3995L12.4121 17.3214ZM13.4214 16.514L13.4839 16.592C13.5212 16.5622 13.5322 16.5101 13.5101 16.4678L13.4214 16.514ZM12.0743 11.5639C12.0718 11.5666 12.0692 11.5693 12.0667 11.5721L12.2142 11.7072C12.2156 11.7056 12.2171 11.704 12.2186 11.7025L12.0743 11.5639ZM12.7375 11.5504C12.5507 11.371 12.2537 11.3771 12.0743 11.5639L12.2186 11.7025C12.3215 11.5953 12.4918 11.5918 12.599 11.6947L12.7375 11.5504ZM13.7217 12.4952L12.7375 11.5504L12.599 11.6947L13.5832 12.6395L13.7217 12.4952ZM13.8659 12.8335C13.8659 12.7058 13.8138 12.5836 13.7217 12.4952L13.5832 12.6395C13.636 12.6902 13.6659 12.7603 13.6659 12.8335H13.8659ZM13.7217 13.1719C13.8138 13.0835 13.8659 12.9613 13.8659 12.8335H13.6659C13.6659 12.9068 13.636 12.9769 13.5832 13.0276L13.7217 13.1719ZM12.937 13.9252L13.7217 13.1719L13.5832 13.0276L12.7985 13.7809L12.937 13.9252ZM14.3049 16.3959L12.9564 13.8069L12.779 13.8992L14.1275 16.4883L14.3049 16.3959ZM14.1819 16.9789C14.3569 16.8389 14.4084 16.5947 14.3049 16.3959L14.1275 16.4883C14.1869 16.6023 14.1573 16.7424 14.057 16.8227L14.1819 16.9789ZM12.7251 18.1443L14.1819 16.9789L14.057 16.8227L12.6002 17.9881L12.7251 18.1443ZM12.5949 17.9927C12.4988 18.0812 12.3498 18.0887 12.2447 18.0046L12.1198 18.1608C12.3032 18.3075 12.5628 18.2942 12.7304 18.1397L12.5949 17.9927ZM12.2447 18.0046L10.7685 16.8237L10.6436 16.9798L12.1198 18.1608L12.2447 18.0046ZM10.7685 16.8237C10.6682 16.7434 10.6386 16.6033 10.698 16.4893L10.5206 16.3969C10.4171 16.5956 10.4686 16.8398 10.6436 16.9798L10.7685 16.8237ZM10.698 16.4893L12.0465 13.9002L11.8691 13.8078L10.5206 16.3969L10.698 16.4893ZM12.027 13.7819L11.2423 13.0286L11.1038 13.1729L11.8885 13.9262L12.027 13.7819ZM11.2423 13.0286C11.1895 12.9779 11.1596 12.9078 11.1596 12.8345H10.9596C10.9596 12.9622 11.0117 13.0844 11.1038 13.1729L11.2423 13.0286ZM11.1596 12.8345C11.1596 12.7613 11.1895 12.6912 11.2423 12.6404L11.1038 12.4962C11.0117 12.5846 10.9596 12.7068 10.9596 12.8345H11.1596ZM11.2423 12.6404L12.2097 11.7118L12.0712 11.5675L11.1038 12.4962L11.2423 12.6404ZM12.344 12.3288L11.8923 12.7624L12.0308 12.9067L12.4825 12.473L12.344 12.3288ZM11.8923 12.9067L12.343 13.3393L12.4815 13.195L12.0308 12.7624L11.8923 12.9067ZM12.7947 12.7614L12.343 13.195L12.4815 13.3393L12.9332 12.9057L12.7947 12.7614ZM12.344 12.473L12.7947 12.9057L12.9332 12.7614L12.4825 12.3288L12.344 12.473ZM12.3243 14.5316L11.3154 16.4687L11.4928 16.5611L12.5017 14.624L12.3243 14.5316ZM11.3416 16.593L12.3497 17.3995L12.4746 17.2433L11.4666 16.4368L11.3416 16.593ZM13.359 16.4359L12.3497 17.2433L12.4746 17.3995L13.4839 16.592L13.359 16.4359ZM12.3243 14.624L13.3327 16.5601L13.5101 16.4678L12.5017 14.5316L12.3243 14.624Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.1668 9.63946C13.2344 9.63946 14.0999 8.77397 14.0999 7.70635C14.0999 6.63872 13.2344 5.77324 12.1668 5.77324C11.0992 5.77324 10.2337 6.63872 10.2337 7.70635C10.2337 8.77397 11.0992 9.63946 12.1668 9.63946ZM12.1668 10.4127C13.6615 10.4127 14.8731 9.20103 14.8731 7.70635C14.8731 6.21167 13.6615 5 12.1668 5C10.6721 5 9.46045 6.21167 9.46045 7.70635C9.46045 9.20103 10.6721 10.4127 12.1668 10.4127Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0999 7.70635C14.0999 8.77397 13.2344 9.63946 12.1668 9.63946C11.0992 9.63946 10.2337 8.77397 10.2337 7.70635C10.2337 6.63872 11.0992 5.77324 12.1668 5.77324C13.2344 5.77324 14.0999 6.63872 14.0999 7.70635ZM14.8731 7.70635C14.8731 9.20103 13.6615 10.4127 12.1668 10.4127C10.6721 10.4127 9.46045 9.20103 9.46045 7.70635C9.46045 6.21167 10.6721 5 12.1668 5C13.6615 5 14.8731 6.21167 14.8731 7.70635Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="white"
                d="M12.1668 9.63946C13.2344 9.63946 14.0999 8.77397 14.0999 7.70635C14.0999 6.63872 13.2344 5.77324 12.1668 5.77324C11.0992 5.77324 10.2337 6.63872 10.2337 7.70635C10.2337 8.77397 11.0992 9.63946 12.1668 9.63946ZM12.1668 10.4127C13.6615 10.4127 14.8731 9.20103 14.8731 7.70635C14.8731 6.21167 13.6615 5 12.1668 5C10.6721 5 9.46045 6.21167 9.46045 7.70635C9.46045 9.20103 10.6721 10.4127 12.1668 10.4127Z"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="white"
                d="M14.0999 7.70635C14.0999 8.77397 13.2344 9.63946 12.1668 9.63946C11.0992 9.63946 10.2337 8.77397 10.2337 7.70635C10.2337 6.63872 11.0992 5.77324 12.1668 5.77324C13.2344 5.77324 14.0999 6.63872 14.0999 7.70635ZM14.8731 7.70635C14.8731 9.20103 13.6615 10.4127 12.1668 10.4127C10.6721 10.4127 9.46045 9.20103 9.46045 7.70635C9.46045 6.21167 10.6721 5 12.1668 5C13.6615 5 14.8731 6.21167 14.8731 7.70635Z"
            />
        </React.Fragment>
    );

    return iconFactory(props);
};

export default AffiliateIcon;
