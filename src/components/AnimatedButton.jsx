import { motion } from "motion/react"


const AnimatedButton = ({ text, onClick, disabled }) => {

    return (
    <motion.button whileHover={{ scale: 1.2 }} 
    whileTap={{ scale: 0.8 }} 
    style={{ cursor: 'pointer'}}
    onClick={onClick} 
    className='button'
    disabled={disabled}>{text}</motion.button>
    )
}

export default AnimatedButton