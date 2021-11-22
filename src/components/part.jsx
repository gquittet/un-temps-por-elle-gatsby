import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export function Part({ children, color, id }) {
  const animationControl = useAnimation();

  const { ref, inView } = useInView();

  if (inView) {
    animationControl.start({
      y: 0,
      opacity: 1,
    });
  }

  return <Box
    id={id}
    as="article"
    h="100vh"
    minH="35rem"
    bg={color}
    style={{ scrollSnapAlign: 'center' }}
    ref={ref}
  >
    {React.Children.map(children, (child, index) => (
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={animationControl}
        transition={{ duration: 1, delay: index * 0.5 }}
      >
        {child}
      </motion.div>
    ))}
  </Box>;
}
