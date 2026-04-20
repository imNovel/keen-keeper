import React, { createContext, useState } from 'react';


const FriendsContext = createContext();

const FriendProvider = ({children}) => {
    const [timeline,setTimeline] = useState([]);
    const data = {
        timeline, setTimeline
     }

    return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>;
};

export { FriendsContext };
export default FriendProvider;