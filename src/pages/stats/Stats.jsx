import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendsContext } from "../../context/FriendProvider";

const Stats = () => {
  const { timeline } = useContext(FriendsContext);
  const callCount = timeline.filter((call) => call.type === "Call");
  const textCount = timeline.filter((text) => text.type === "Text");
  const videoCount = timeline.filter((video) => video.type === "Video");
  const call = callCount.length;
  const text = textCount.length;
  const video = videoCount.length;
  const total = call + text + video;

  const data = [
    { name: "Call", value: call, fill: "#244d3f" },
    { name: "Text", value: text, fill: "#7f36f5" },
    { name: "Video", value: video, fill: "#37a163" },
  ];
  return (
    <div className="container mx-auto">
      <div className="mx-40 my-20">
        <h1 className="font-bold text-5xl">Friendship Analytics</h1>

        {total === 0 ? (<div className="flex justify-center my-12">
          <p className="text-gray-500">No Interactions.</p>
        </div>) : (<div className="flex justify-center items-center my-12 shadow-sm p-10 rounded-2xl">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend />
            <Tooltip />
          </PieChart>
        </div>)}
      </div>
    </div>
  );
};

export default Stats;
