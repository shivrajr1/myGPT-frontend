export const getThread = async ({ id, setThread, setTotalThread }) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_backend}/ai/thread/${id}`)
    const data = await res.json()
    setThread(data)
    func({ setTotalThread })
  } catch (error) {
    console.log(error)
  }
}
export async function func({ setTotalThread }) {
  try {
    const res = await fetch(`${import.meta.env.VITE_backend}/ai/history`)
    const data = await res.json()
    setTotalThread(data.reverse())
  } catch (error) {
    console.log(error)
  }
}

export const dlt = async ({ id, setTotalThread, setThread }) => {
  try {
    await fetch(`${import.meta.env.VITE_backend}/ai/thread/${id}`, {
      method: 'DELETE'
    })
    setTotalThread(pre => pre.filter(obj => obj._id != id))
    setThread({})
  } catch (error) {
    console.log(error)
  }
}