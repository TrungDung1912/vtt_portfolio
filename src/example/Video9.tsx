import { useState } from "react"

const Video9 = () => {
    const [name, setName] = useState<string | number>("Dung Bum");
    setName("DungBumBeo")
    return (
        <div>
            Video 9 + {name}
        </div>
    )
}

export default Video9