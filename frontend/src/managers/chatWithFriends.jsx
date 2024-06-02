import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "flowbite"
import bulb from "../assets/bulb2.png"


const ChatWithFriends = () => {
  const [createdRoomID, setCreatedRoomID] = useState("");
  const [joinRoomID, setJoinRoomID] = useState("");

  const handleJoinRoomID = (e) => {
    setJoinRoomID(e.target.value);
  };

  const handleCreateRoomID = (e) => {
    setCreatedRoomID(e.target.value);
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center">
        <nav className="bg-slate-900 ">
          <ul className="flex justify-around">
            <div className="w-full text-center py-4 text-white">
              <a href="/homepage">
                <li>Home</li>
              </a>
            </div>
            <div className="w-full text-center py-4 text-white">
              <NavLink to="/post">
                <li>Post</li>
              </NavLink>
            </div>
            <div className="w-full text-center py-4 text-white">
              <NavLink to="/chat">
                <li>Chat</li>
              </NavLink>
            </div>
            <div className="w-full text-center py-4 text-white">
              <NavLink to="/me">
                <li>Me</li>
              </NavLink>
            </div>
          </ul>
        </nav>

        <div>
          <div className="flex items-center justify-center mt-3 flex-wrap">
            <lord-icon
              src="https://cdn.lordicon.com/ayhtotha.json"
              trigger="hover"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <h1 className="text-5xl p-5 font-bold text-center">
              Chat with your friends !
            </h1>
          </div>

          <div className="border-slate-900 rounded-full md:w-1/3 w-48 text-center h-36 hover:bg-slate-900 hover:text-white cursor-pointer text-2xl m-16 flex items-center justify-center border-4 flex-col">
            <NavLink to={`/ChatRoom/${createdRoomID}`}>
              <p>Create a Room</p>
            </NavLink>
            <p className="text-lg">Enter a room ID:</p>
            <input
              value={createdRoomID}
              onChange={handleCreateRoomID}
              className="border text-lg border-slate-900 text-slate-900 w-1/3"
              type="text"
            />
          </div>

          <div className="border-slate-900 flex-col rounded-full md:w-1/3 w-48 text-center h-36 hover:bg-slate-900 hover:text-white cursor-pointer text-2xl m-16 flex items-center justify-center border-4">
            <NavLink to={`/ChatRoom/${joinRoomID}`}>
              <p>Join a Room</p>
            </NavLink>
            <p className="text-lg">Enter the room ID:</p>
            <input
              value={joinRoomID}
              onChange={handleJoinRoomID}
              className="text-slate-900 text-lg border border-slate-900 w-1/3"
              type="text"
            />
          </div>
          <button
            data-tooltip-target="tooltip-dark"
            data-tooltip-style="dark"
            type="button"
            class={`${joinRoomID.length === 0 ? 'opacity-0' : 'opacity-1'} ml-20 text-white bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center `}
          >
            <img src={bulb} height={"50px"} width={"50px"} alt="" />
          </button>

          <div
            id="tooltip-dark"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
          >
            If a room with that room ID does not exists, a room will be created.
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWithFriends;
