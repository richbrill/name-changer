import { API } from '../constants'

export const getName = async () => {
  try {
    const res = await fetch(`${API}/get`)
    if (res.status === 200) {
      const json = await res.json()
      return json.name
    }
  } catch (err) {
    console.warn(err)
  }
}

export const postName = async name => {
  try {
    const res = await fetch(`${API}/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })

    if (res.status === 200) {
      const json = await res.json()
      return json.name
    }
  } catch (err) {
    console.warn(err)
  }
}

export const deleteName = async name => {
  try {
    const res = await fetch(`${API}/clear`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (res.status === 200) {
      return ''
    }
  } catch (err) {
    console.warn(err)
  }
}
