import React from "react";

function AuthorHeader({ author, date }) {
  return (
    <div className="insight-data">
      {author?.length === 1 ? (
        <h2 className="insight-author">{`Por ${author}`}</h2>
      ) : (
        <div className='insight-data-authors'>
        {author?.map((author, i) => {
            return i === 0
            ? (<h2 className="insight-author" key={i}>{`Por ${author}`}</h2>)
            : (<h2 className="insight-author" key={i}>{`y ${author}`}</h2>)
        })}
        </div>
      )}
      {date && <h2 className="insight-date">{date}</h2>}
    </div>
  );
}

export default AuthorHeader;
