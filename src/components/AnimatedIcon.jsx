import { motion } from 'motion/react'

const AnimatedIcon = ({ src, alt, onClick, id }) => {

    return(
        <motion.img src={src} 
        alt={alt} 
        onClick={onClick} 
        whileHover={{ scale: 1.2 }} 
        whileTap={{ scale: 0.8 }} 
        style={{ cursor: 'pointer' }}
        transition={{ type: "spring", stiffness: 200 }}
        className='icon'
        id={id}/>
    )
}

export default AnimatedIcon