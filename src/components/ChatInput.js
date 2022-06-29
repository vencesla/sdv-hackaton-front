import { useState } from "react";

const ChatInput = () => {
    const [textArea, setTextArea] = useState(null)
    return(
        <div className="chat-input">
            <textarea className="form-control" value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
            <button className="btn btn-sm btn-info mt-3" >Envoyer</button>
        </div>
    )
}

export default ChatInput