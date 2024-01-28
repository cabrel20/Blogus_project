import React from "react";

const image =
  "https://images.unsplash.com/photo-1580982327559-c1202864eb05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaWVuY2VzfGVufDB8fDB8fHww";

const Avatar = () => {
  return (
    <div className=" w-9 h-9 rounded-full border border-gray-300">
      <img
        src={image}
        alt="avatar"
        className="w-full h-full bg-gray-300 object-cover rounded-full"
      />
    </div>
  );
};

export default Avatar;
