import React, { useState, useEffect } from 'react';
import { TextInput } from '@instructure/ui-text-input';
import { Button } from '@instructure/ui-buttons';
import { View } from '@instructure/ui-view';
import styles from './styles.css';
import { API } from '../constants';

const NameChanger = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API}/get`);
        if (res.status === 200) {
          const json = await res.json();
          setName(json.name);
        }
      } catch (err) {
        console.warn('err', err);
      }
    })();
  }, []);
  
  return (
    <View margin="small" display="inline-block">
      <TextInput
        renderLabel="Name"
        id="name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button color="primary" margin="small">Save</Button>
    </View>
  );
}

export default NameChanger;