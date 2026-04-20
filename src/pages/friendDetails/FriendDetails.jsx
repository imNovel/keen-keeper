import React, { useContext } from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { LuPhoneCall } from "react-icons/lu";
import { MdDeleteOutline, MdOutlineTextsms } from "react-icons/md";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { PropagateLoader } from "react-spinners";
import { FriendsContext } from "../../context/FriendProvider";
import { GoDeviceCameraVideo } from "react-icons/go";
import callicon from '../../assets/call.png';
import videoicon from '../../assets/video.png';
import texticon from '../../assets/text.png';



const FriendDetails = () => {
  const { id } = useParams();
  console.log(id, "param");

  const { friends, loading } = useFriends();

  
  const friend = friends.find((friend) => friend.id === parseInt(id));
  console.log(friends, loading, friend, "fnd and load..");
  const {timeline,setTimeline} = useContext(FriendsContext);
  const handleTimeline = (type, icon) => {
  const newData = {
    type,
    icon,
    name:friend.name ,
    date: new Date().toLocaleString(),
  };

  setTimeline([...timeline, newData]);
};
    console.log(timeline, "timeline");
  return (
    <div>
        {loading ? (<div className='flex justify-center items-center'><PropagateLoader color="#244d3f" /></div>) : (<div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20">
        {/* Left side */}
        <div>
          <div className="space-y-4">
            <div className="bg-base-100 shadow-sm flex flex-col items-center text-center rounded-2xl p-4 space-y-2">
              <img
                src={friend.picture}
                alt={friend.name}
                className="rounded-full my-4 h-20 w-20"
              />
              <h1 className="font-semibold text-2xl">{friend.name}</h1>
              <div
                className={`badge rounded-2xl p-2 
                        ${friend.status === "overdue" && "bg-red-500 text-white"}
                        ${friend.status === "almost due" && "bg-yellow-500 text-white"}
                        ${friend.status === "on-track" && "bg-green-900 text-white"}
                    `}
              >
                {friend.status}
              </div>
              <div className="flex flex-wrap gap-2">
                {friend.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="badge badge-soft badge-success text-green-900"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p className="text-gray-600">{friend.bio}</p>
              <p className="text-gray-600">{friend.email}</p>
            </div>
            <div className="bg-base-100 shadow-sm rounded-sm p-4 text-center flex justify-center">
              <h2 className="flex items-center gap-2 font-bold">
                <HiOutlineBellSnooze /> Snooze 2 Weeks
              </h2>
            </div>
            <div className="bg-base-100 shadow-sm rounded-sm p-4 text-center flex justify-center">
              <h2 className="flex items-center gap-2 font-bold">
                <FiArchive /> Archive
              </h2>
            </div>
            <div className="bg-base-100 shadow-sm rounded-sm p-4 flex justify-center">
              <h2 className="flex items-center gap-2 font-bold text-red-500">
                <MdDeleteOutline /> Delete
              </h2>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card card-border bg-base-100 shadow-sm">
              <div className="card-body items-center p-8">
                <h2 className="card-title text-3xl text-green-900">
                  {friend.days_since_contact}
                </h2>
                <p className="text-xl text-gray-600">Days Since Contact</p>
              </div>
            </div>
            <div className="card card-border bg-base-100  shadow-sm">
              <div className="card-body items-center p-8">
                <h2 className="card-title text-3xl text-green-900">
                  {friend.goal}
                </h2>
                <p className="text-xl text-gray-600">Goal (Days)</p>
              </div>
            </div>
            <div className="card card-border bg-base-100  shadow-sm">
              <div className="card-body items-center p-8">
                <h2 className="card-title text-3xl text-green-900">
                  {friend.next_due_date}
                </h2>
                <p className="text-xl text-gray-600">Next Due Date</p>
              </div>
            </div>
          </div>

          <div className="bg-base-100 shadow-sm rounded-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-green-900 font-semibold">
                Relationship Goal
              </h2>
              <button className="btn">Edit</button>
            </div>
            <p className="text-gray-500 mb-6">
              Connect every{" "}
              <span className="font-bold text-black">30 days</span>
            </p>
          </div>

          <div className="bg-base-100 shadow-sm rounded-sm p-4">
            <h2 className="text-green-900 font-semibold text-xl">
              Quick Check-In
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card card-border bg-base-200 shadow-sm my-4 items-center p-8 cursor-pointer" onClick={() =>handleTimeline("Call",callicon)}>
                <h1>
                  <LuPhoneCall />
                  Call
                </h1>
              </div>
              <div className="card card-border bg-base-200 shadow-sm my-4 items-center p-8 cursor-pointer" onClick={() =>handleTimeline("Text",texticon)}>
                <h1>
                  <MdOutlineTextsms /> Text
                </h1>
              </div>
              <div className="card card-border bg-base-200 shadow-sm my-4 items-center p-8 cursor-pointer" onClick={() =>handleTimeline("Video",videoicon)}>
                <h1>
                  <GoDeviceCameraVideo />
                  Video
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)}
    </div>
  );
};

export default FriendDetails;
