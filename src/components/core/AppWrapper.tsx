import React, { useState, useEffect, useMemo } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useFusionContext, combineUrls, HistoryContext } from '@equinor/fusion';

type AppWrapperProps = {
    appKey?: string;
};

const AppWrapper: React.FC<AppWrapperProps> = ({ appKey }) => {
    const {
        app: { container: appContainer },
        history,
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
        return () => {
            appContainer.setCurrentAppAsync(null);
        };
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

    // Keep global and app history objects in sync
    useEffect(() => {
        const unlistenFromGlobalHistory = history.listen(x => {
            if (x.pathname !== appHistory.location.pathname) {
                appHistory.push(x.pathname, x.state);
            }
        });

        const unlistenFromAppHistory = appHistory.listen(x => {
            if (x.pathname !== history.location.pathname) {
                history.push(x.pathname, x.state);
            }
        });

        return () => {
            unlistenFromGlobalHistory();
            unlistenFromAppHistory();
        };
    }, [appHistory]);

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
        <HistoryContext.Provider value={{ history: appHistory }}>
            <Router history={appHistory}>
                <AppComponent />
            </Router>
        </HistoryContext.Provider>
    );
};

export default AppWrapper;
