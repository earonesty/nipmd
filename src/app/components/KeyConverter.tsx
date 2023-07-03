import { nip19 } from 'nostr-tools';
import React, { useState, useEffect } from 'react';

const KeyConverter = () => {
  const [keyValue, setKeyValue] = useState('');
  const [convertedKey, setConvertedKey] = useState('');

  useEffect(() => {
    setConvertedKey('');
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let conv = ""
    if (keyValue.startsWith("npub")) {
        conv = nip19.decode(keyValue).data as string
    }
    else if (keyValue.startsWith("nsec")) {
        conv = nip19.decode(keyValue).data as string
    } else {
        conv = nip19.npubEncode(keyValue)
    }
    setConvertedKey(`Converted Key: ${conv}`);
  };

  return (
    <div>
      <h2>Key Converter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter key"
          value={keyValue}
          onChange={(e) => setKeyValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {convertedKey && <p>{convertedKey}</p>}
    </div>
  );
};

export default KeyConverter;