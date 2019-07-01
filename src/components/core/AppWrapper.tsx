import React, { useState, useEffect, useMemo } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useFusionContext, combineUrls } from '@equinor/fusion';

type AppWrapperProps = {
    appKey?: string;
};

const AppWrapper: React.FC<AppWrapperProps> = ({ appKey }: AppWrapperProps) => {
    const {
        app: { container: appContainer },
    } = useFusionContext();
    const [isFetching, setIsFetching] = useState(false);

    const currentApp = appContainer.get(appKey || null);

    const setCurrentApp = async () => {
        setIsFetching(true);
        await appContainer.setCurrentAppAsync(appKey || null);
        setIsFetching(false);
    };

    useEffect(() => {
        setCurrentApp();
    }, [appKey]);

    const [, forceUpdate] = useState();
    useEffect(() => {
        // If the app has been registered between rendering the app and useEffect
        if (appKey && !currentApp && appContainer.get(appKey)) {
            forceUpdate(null);
        }

        return appContainer.on('update', app => {
            if (app.key === appKey) {
                forceUpdate(null);
            }
        });
    }, [appKey]);

    const appHistory = useMemo(
        () => createBrowserHistory({ basename: combineUrls('apps', appKey || '') }),
        [appKey]
    );

    if (currentApp === null && isFetching) {
        return <div>Is fetching</div>;
    }

    if (!currentApp) {
        return <div>Unable to find app</div>;
    }

    const AppComponent = currentApp.AppComponent;
    if (!AppComponent) {
        return null;
    }

    return (
        <Router history={appHistory}>
            <AppComponent />
        </Router>
    );
};

export default AppWrapper;
