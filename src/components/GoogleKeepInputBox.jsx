import React, { useState } from 'react';

function GoogleKeepInputBox() {
  const [value, setValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Take a note..."
        style={{
          flex: 1,
          padding: '0.5em',
          border: 'none',
          borderRadius: '5px 0 0 5px',
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: '#4285f4',
          color: 'white',
          border: 'none',
          borderRadius: '0 5px 5px 0',
          padding: '0.5em',
        }}
      >
        Save
      </button>
    </div>
  );
}

export default GoogleKeepInputBox;
