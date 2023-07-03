import { nip05 } from 'nostr-tools'
import React, { useState } from 'react';

const ResolveNip05Name = () => {
  const [name, setName] = useState('');
  const [resolvedName, setResolvedName] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const profile = await nip05.queryProfile(name);
    const fin = profile?.pubkey
    setResolvedName(`Resolved Nip05 Name: ${fin}`);
  };

  return (
    <div>
      <h2>Resolve Nip05 Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {resolvedName && <p>{resolvedName}</p>}
    </div>
  );
};

export default ResolveNip05Name;