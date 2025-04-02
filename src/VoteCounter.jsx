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
      <button onClick={() => setVotes(votes - 1)}>Downvote</button>
    </div>
  );
}

export default VoteCounter;
