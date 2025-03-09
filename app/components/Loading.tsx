import {motion} from "framer-motion";

export default function Loading(){
    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="flex items-center justify-center min-h-screen bg-black text-white"
        >
            <h1 className="text-3x1 animate-pulse">Loading...</h1>
        </motion.div>
    );
}