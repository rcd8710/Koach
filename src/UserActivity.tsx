import { useUserContext } from './UserContext';

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
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={getPrevUser} className="nav-button" style={{ marginRight: '10px' }}>Prev User</button>

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
