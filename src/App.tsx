import React from 'react';
import { UserProvider, useUserContext } from './UserContext';
import UserProfile from './UserProfile';
import UserActivity from './UserActivity';
import './index.css';

function AppContent() {
    const { isLoading } = useUserContext();

    if (isLoading) {
        return (
            <div className="loading-spinner-container">
                <div className="loading-spinner"></div>
                <p>Loading user data...</p>
            </div>
        );
    }

    return (
        <div className="App">
            <div className="content-wrapper">
                <UserProfile />
                <UserActivity />
            </div>
        </div>
    );
}

function App() {
    return (
        <UserProvider>
            <AppContent />
        </UserProvider>
    );
}

export default App;
