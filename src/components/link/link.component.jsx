import React from "react";

export const Link = ({ link }) => {
  const { description, url } = link;
  return (
    <div>
      <div>
        {description} ({url})
      </div>
    </div>
  );
};
