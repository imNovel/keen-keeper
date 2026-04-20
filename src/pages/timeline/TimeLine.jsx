import React, { useContext } from "react";
import { FriendsContext } from "../../context/FriendProvider";
import useFriends from "../../hooks/useFriends";
import { PropagateLoader } from "react-spinners";
import { IoIosArrowDown } from "react-icons/io";

const TimeLine = () => {
  const { timeline } = useContext(FriendsContext);
  const { loading } = useFriends();
  console.log(timeline, "context data in timeline");

  const handleFilter = (type) => {
    if (type === 'All') {
      return;
    } else if (type === 'Call') {
      const filteredCall = timeline.filter(tl => tl.type === 'Call');
      console.log(filteredCall, 'filtered call');
      return filteredCall;
    } else if (type === 'Text') {
      const filteredText = timeline.filter(tl => tl.type === 'Text');
      console.log(filteredText, 'filtered text');
      return filteredText;
    } else if (type === 'Video') {
      const filteredVideo = timeline.filter(tl => tl.type === 'Video');
      console.log(filteredVideo, 'filtered video');
      return filteredVideo;
    };
  };
  return (
    <div className="container mx-auto">
      <div className="mx-40 my-20">
        <h1 className="font-bold text-5xl">Timeline</h1>
        {timeline.length === 0 ? (
        <div className="flex justify-center my-12">
          <p className="text-gray-500">Timeline Data Not Found</p>
        </div>
      ) : <div>
        <div className="dropdown dropdown-bottom mt-6">
          <div tabIndex={0} role="button" className="btn m-1 flex justify-between items-center w-50 text-gray-600">
            <p>Filter timeline</p><IoIosArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleFilter('All')}>All</a>
            </li>
            <li>
              <a onClick={() => handleFilter('Call')}>Call</a>
            </li>
            <li>
              <a onClick={() => handleFilter('Text')}>Text</a>
            </li>
            <li>
              <a onClick={() => handleFilter('Video')}>Video</a>
            </li>
          </ul>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <PropagateLoader color="#244d3f" />
          </div>
        ) : (
          <div>
            {timeline.map((tl) => (
              <div
                key={tl.id}
                className="border border-gray-300 rounded-2xl shadow-sm mt-5"
              >
                <div className="flex items-center gap-5 p-5">
                  <img src={tl.icon} alt={tl.type} className="w-8 h-8" />

                  <div>
                    <h1 className="text-2xl font-semibold">
                      {tl.type}{" "}
                      <span className="text-gray-600 font-normal">
                        with {tl.name}
                      </span>
                    </h1>
                    <p className="text-gray-600">{tl.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>}
      </div>
    </div>
  );
};

export default TimeLine;
