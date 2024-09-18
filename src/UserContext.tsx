import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

interface UserActivity {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface UserContextType {
    users: User[] | null;
    currentUser: User | null;
    setCurrentUser: (user: User) => void;
    isLoading: boolean;
    userActivities: UserActivity[] | null;
    getUserActivities: (userId: number) => UserActivity[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<User[] | null>(null);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [userActivities, setUserActivities] = useState<UserActivity[] | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            
            try {
                const response = await fetch('http://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const userData = await response.json();
                setUsers(userData);
                if (userData.length > 0) {
                    setCurrentUser(userData[0]);
                }
            } catch (err) {
                console.error('Error fetching user data:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchUserActivities = async () => {
            try {
                const response = await fetch('http://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const userActivitiesData = await response.json();
                setUserActivities(userActivitiesData);
            } catch (err) {
                console.error('Error fetching user activities:', err);
            }
        };
        fetchUserActivities();
    }, []);

    const getUserActivities = (userId: number) => {
        return userActivities ? userActivities.filter(activity => activity.userId === userId) : [];
    };

    return (
        <UserContext.Provider value={{ 
            users, 
            currentUser, 
            setCurrentUser, 
            isLoading, 
            userActivities, 
            getUserActivities 
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};