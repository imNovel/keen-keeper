import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Banner = () => {
    return (
        <div>
      <div>
        <div className="text-center">
          <h1 className="text-5xl font-bold mt-20">
            Friends to keep close in your life
          </h1>
          <p className="text-lg text-gray-500 my-5">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br /> relationships that matter most.
          </p>
          <button className="btn bg-green-900 text-white text-center">
            <AiOutlinePlus /> Add a Friend
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          <div className="card card-border bg-base-100 shadow-sm">
            <div className="card-body items-center p-8">
              <h2 className="card-title text-3xl text-green-900">10</h2>
              <p className="text-xl text-gray-600">Total Friends</p>
            </div>
          </div>
          <div className="card card-border bg-base-100  shadow-sm">
            <div className="card-body items-center p-8">
              <h2 className="card-title text-3xl text-green-900">3</h2>
              <p className="text-xl text-gray-600">On Track</p>
            </div>
          </div>
          <div className="card card-border bg-base-100  shadow-sm">
            <div className="card-body items-center p-8">
              <h2 className="card-title text-3xl text-green-900">6</h2>
              <p className="text-xl text-gray-600">Needs Attention</p>
            </div>
          </div>
          <div className="card card-border bg-base-100  shadow-sm">
            <div className="card-body items-center p-8">
              <h2 className="card-title text-3xl text-green-900">12</h2>
              <p className="text-xl text-gray-600">Interactions This Month</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="opacity-10 my-10" />
    </div>
    );
};

export default Banner;