import FriendsCard from '../ui/FriendsCard';
import { PropagateLoader } from 'react-spinners';
import useFriends from '../../hooks/useFriends';


const FriendsSection = () => {

  const {friends,loading} = useFriends();

    console.log(friends);
    return (
        <div>
        <h2 className="text-2xl font-semibold mb-4">Your Friends</h2>
        {loading ? (<div className='flex justify-center items-center'><PropagateLoader color="#244d3f" /></div>) : (<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            friends.map(friend => <FriendsCard key={friend.id} friend={friend} />)
          }
        </div>)}
      </div>
    );
};

export default FriendsSection;