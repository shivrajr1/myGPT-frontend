
export const submit=async({
    input, setInput, 
    setReply, 
    thread, setThread,  
    loading, setLoading
    })=>{

        if(loading)return
        if(!input.trim())return
        setInput('')
        setLoading(true)
        try {
        const res=await fetch(`${import.meta.env.VITE_backend}/ai/thread`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({message:input, id:thread?._id || ""})
        })
        let data=await res.json()
        setThread((prev) => {
            return {
                ...prev,
                _id: prev._id || data.id,
                message: [
                ...(prev?.message || []),
                { role: "user", content: input },
                { role: data.role, content: data.content }
                ]
            };
        });
        setReply(data)

        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }