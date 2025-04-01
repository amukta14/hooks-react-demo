import React, { useState } from 'react';

function VoteCounter() {
  const [votes, setVotes] = useState(0);

  const handleVote = () => {
    setVotes(votes + 1);
  };

  return (
    <div>
      <p>Current Votes: {votes}</p>
      <button onClick={handleVote}>Vote</button>
    </div>
  );
}

export default VoteCounter;