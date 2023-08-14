import React from "react";

function AuthorHeader({ author, date }) {
  const authorStyles = {
    color: "grey",
    paddingBottom: "1%",
    fontSize: "20px",
  };
  return (
    <div className="insight-data">
      {author?.length === 1 ? (
        <h2 className="insight-author">{`Por ${author}`}</h2>
      ) : (
        <div className="insight-data-authors">
          {author?.map((author, i) => {
            return i === 0 ? (
              <h2
                className="insight-author"
                style={authorStyles}
                key={i}
              >{`Por ${author}`}</h2>
            ) : (
              <h2
                className="insight-author"
                key={i}
                style={authorStyles}
              >{`y ${author}`}</h2>
            );
          })}
        </div>
      )}
      {date && (
        <h2 className="insight-date" style={authorStyles}>
          {date}
        </h2>
      )}
    </div>
  );
}

export default AuthorHeader;
