import React, { useState, useEffect } from 'react';
import { TextInput } from '@instructure/ui-text-input';
import { Button } from '@instructure/ui-buttons';

const NameChanger = () => {
  const [name, setName] = useState('');
  
  return (
    <>
      <TextInput renderLabel="Name" id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
      <Button color="primary" margin="small">Save</Button>
    </>
  );
}

export default NameChanger;