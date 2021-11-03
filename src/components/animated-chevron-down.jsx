import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from './link';

const MotionDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

export function AnimatedChevronDown({ pt }) {
  return <MotionDiv
    key="chevron-down"
    style={{ display: 'flex' }}
    pt={pt}
    justifyContent="center"
    alignItems="end"
    initial={{ y: 0 }}
    animate={{ y: 10, opacity: [0, 1, 0] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: 2,
    }}
  >
    <Link
      to="/#nos-soins"
    >
      <ChevronDownIcon cursor="pointer"/>
    </Link>
  </MotionDiv>;
}
