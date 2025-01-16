import { Flame } from "lucide-react";

const Button = ({ text }) => {
    return (
        <>
            <button className="main-gradient flex items-center gap-2 rounded-xl px-8 py-3 transition-all ease-in-out hover:brightness-125">
                <Flame size={20} />
                {text}
            </button>
        </>
    );
};

export default Button;
