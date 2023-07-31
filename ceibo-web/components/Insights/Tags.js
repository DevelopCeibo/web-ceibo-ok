import React from "react";
import Link from "next/link";

function Tags({ tags }) {
  return (
    <ul className="category">
      <li>
        <span>Tags:</span>
      </li>
      {tags?.map((tag, i) => (
        <li key={i}>
          <Link href="#">
            <a>{tag}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Tags;
