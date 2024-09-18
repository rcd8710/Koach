import { useUserContext } from './UserContext';
import './index.css';

export default function UserProfile() {
    const { currentUser, isLoading } = useUserContext();

    if (isLoading) {
        return (
            <div className="user-profile loading">
                <div className="loading-spinner"></div>
                <p>Loading user data...</p>
            </div>
        );
    }

    if (!currentUser) {
        return <div className="error">No user data available</div>;
    }

    
    return (
        <div className="user-profile">
            <div className="user-info">
                <div style={{
                    position: 'relative',
                    width: '200px',
                    height: '200px',
                    margin: '0 auto 40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6c6db8, #ff7eb3)',
                    padding: '8px',
                    boxShadow: '0 15px 30px rgba(108, 109, 184, 0.4), 0 0 0 8px rgba(255, 255, 255, 0.2)',
                    animation: 'pulse 2s infinite'
                }}>
                    <img
                        src="happyguy.jpg"
                        alt="User profile"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        background: '#ff7eb3',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease-in-out, background 0.2s ease-in-out'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.background = '#ff5c9e';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.background = '#ff7eb3';
                    }}
                    >
                        <span style={{ fontSize: '28px' }}>✏️</span>
                    </div>
                </div>
                <style>
                    {`
                    @keyframes pulse {
                        0% {
                            box-shadow: 0 15px 30px rgba(108, 109, 184, 0.4), 0 0 0 8px rgba(255, 255, 255, 0.2);
                        }
                        50% {
                            box-shadow: 0 15px 30px rgba(108, 109, 184, 0.6), 0 0 0 12px rgba(255, 255, 255, 0.4);
                        }
                        100% {
                            box-shadow: 0 15px 30px rgba(108, 109, 184, 0.4), 0 0 0 8px rgba(255, 255, 255, 0.2);
                        }
                    }
                    `}
                </style>
                <div className="info-item">
                    <span className="info-icon">👤</span>
                    <div className="info-content">
                        <div className="info-label">Name:</div>
                        <div className="info-value">{currentUser.name}</div>
                    </div>
                </div>
                <div className="info-item">
                    <span className="info-icon">🆔</span>
                    <div className="info-content">
                        <div className="info-label">Username:</div>
                        <div className="info-value">{currentUser.username}</div>
                    </div>
                </div>
                <div className="info-item">
                    <span className="info-icon">📧</span>
                    <div className="info-content">
                        <div className="info-label">Email:</div>
                        <div className="info-value">{currentUser.email}</div>
                    </div>
                </div>
                <div className="info-item">
                    <span className="info-icon">🏠</span>
                    <div className="info-content">
                        <div className="info-label">Address:</div>
                        <div className="info-value">{currentUser.address.street}, {currentUser.address.suite}, {currentUser.address.city}, {currentUser.address.zipcode}</div>
                    </div>
                </div>
                <div className="info-item">
                    <span className="info-icon">📞</span>
                    <div className="info-content">
                        <div className="info-label">Phone:</div>
                        <div className="info-value">{currentUser.phone}</div>
                    </div>
                </div>
                <div className="info-item">
                    <span className="info-icon">🌐</span>
                    <div className="info-content">
                        <div className="info-label">Website:</div>
                        <div className="info-value">{currentUser.website}</div>
                    </div>
                </div>
                <div className="info-item">
                    <span className="info-icon">🏢</span>
                    <div className="info-content">
                        <div className="info-label">Company:</div>
                        <div className="info-value">{currentUser.company.name}, {currentUser.company.catchPhrase}, {currentUser.company.bs}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
