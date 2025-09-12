import { motion } from "motion/react"


const AnimatedButton = ({ text, onClick }) => {

    return <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={onClick} >{text}</motion.button>
}

export default AnimatedButton