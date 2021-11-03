import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';


export function Part({ children, color, id }) {
  return <Box
    id={id}
    as="article"
    h="100vh"
    bg={color}
    style={{ scrollSnapAlign: 'center' }}
  >
    {React.Children.map(children, (child, index) => (
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: index * 0.5 }}
      >
        {child}
      </motion.div>
    ))}
  </Box>;
}
