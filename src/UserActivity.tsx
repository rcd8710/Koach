import React from 'react'
import { useUserContext } from './UserContext';
import { gapSize } from 'three/webgpu';

export default function UserActivity() {
    const { currentUser, getUserActivities, users, setCurrentUser } = useUserContext();
    const thisUserActivities = currentUser ? getUserActivities(currentUser.id) : [];

    const getNextUser = () => {
        if (users && users.length > 0) {
            const currentIndex = users.findIndex(user => user === currentUser);
            const nextIndex = (currentIndex + 1) % users.length;
            setCurrentUser(users[nextIndex]);
        }
    };
    const getPrevUser = () => {
        if (users && users.length > 0) {
            const currentIndex = users.findIndex(user => user === currentUser);
            const nextIndex = (currentIndex - 1) % users.length;
            setCurrentUser(users[nextIndex]);
        }
    };

    if (thisUserActivities.length === 0) {
        return <div className="user-activity error">No activities found for this user.</div>;
    }

    return (
        <div className="user-activity">
            <div className="activity-header">
                <h1>User Activities</h1>
                <div> 
                <button onClick={getPrevUser} className="nav-button" style={{ margin: '20px' }}>Prev User</button>

                <button onClick={getNextUser} className="nav-button">Next User</button>
                </div>
            </div>
            <div className="activity-list">
                {thisUserActivities.map((activity) => (
                    <div key={activity.id} className="activity-item">
                        <div className="activity-title">{activity.title}</div>
                        <div className="activity-body">{activity.body}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
