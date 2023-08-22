import React from "react";

function AuthorHeader({ author, date }) {
  const authorStyles = {
    color: "grey",
    paddingBottom: "1%",
    fontSize: "20px",
  };
  
  return (
    <div className="insight-data">
        <div className="insight-data-authors"> 
          <h2
            className="insight-author"
            style={authorStyles}
          >
            {author?.map((anAuthor, i) => {
              return i === 0 ? (
                `Por ${anAuthor}`
              ) : (
                i=== author.length-1 ? 
                ` y ${anAuthor}` :
                `, ${anAuthor}`
              );
            })}       
          </h2>            
        </div>
      {date && (
        <h2 className="insight-date" style={authorStyles}>
          {date}
        </h2>
      )}
    </div>
  );
}

export default AuthorHeader;
