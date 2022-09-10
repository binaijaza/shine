import React from "react";

export default function UserImage({ picture }) {
  return (
    <div>
      <img
        src={picture.large}
        alt="test"
        className="rounded-full h-20 w-20 md:h-32 md:w-auto"
      />
    </div>
  );
}
