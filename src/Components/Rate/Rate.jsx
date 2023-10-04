import React from "react";

function Rate() {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div>
        {stars.map((item) => {
          return <button>{item}</button>;
        })}
      </div>

      <button>submit</button>
    </div>
  );
}

export default Rate;
