import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function TokenTwo({ address = "EBscD...Sra1" }) {
    const token = address;
    const [copied, setCopied] = useState(false);
    const copyHandle = () => {
        navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }
    return (
        <div className="token d-flex align-items-center gap-2 position-relative z-1">
            <button onClick={() => copyHandle()} className="bg-transparent p-0 border-0">
                {copied ? <LuCopyCheck /> : <LuCopy />}
            </button>
            <p>{token}</p>
        </div>
    )
}
