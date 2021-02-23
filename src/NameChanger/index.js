import React, { useState, useEffect } from 'react'
import { TextInput } from '@instructure/ui-text-input'
import { Button } from '@instructure/ui-buttons'
import { View } from '@instructure/ui-view'
import { getName, postName, deleteName } from './api'

const NameChanger = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchName = async () => {
      setLoading(true)
      const name = await getName()
      setName(name)
      setLoading(false)
    }

    fetchName()
  }, [])
  
  const save = async () => {
    setLoading(true)
    let newName = ''
    if (name === '') {
      newName = await deleteName(name)
    } else {
      newName = await postName(name)
    }
    setName(newName)
    setLoading(false)
  }

  return (
    <View margin="small" display="inline-block">
      <TextInput
        renderLabel="Name"
        id="name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button disabled={loading} color="primary" margin="small" onClick={save}>Save</Button>
    </View>
  )
}

export default NameChanger
