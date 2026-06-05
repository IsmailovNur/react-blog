import { type FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Loader.css';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = ({isLoading}) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <div
          className="loader-overlay"
        >
          <motion.div
            className="spinner"
            animate={{rotate: 360}}
            transition={{repeat: Infinity, duration: 1, ease: "linear"}}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default Loader;