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

    const appBasename = useMemo(() => combineUrls('apps', appKey || ''), [appKey]);
    const appHistory = useMemo(
        () => createBrowserHistory({ basename: appBasename }),
        [appBasename]
    );

    // Keep global and app history objects in sync
    useEffect(() => {
        const unlistenFromGlobalHistory = history.listen(x => {
            // Ignore paths that's not within the current app
            if(x.pathname.indexOf(appBasename) === -1) {
                return;
            }

            const pathname = x.pathname.replace(appBasename, "")
                .replace(/\/\//gm, "/") // Replace double slashes (//) with single slash
                .replace(/^\/*/, "/"); // Ensure single slash in the beginning
            if (pathname !== appHistory.location.pathname) {
                appHistory.push(pathname, x.state);
            }
        });

        return () => {
            unlistenFromGlobalHistory();
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
