'use client';

import { motion } from 'framer-motion';
import {
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import { cn } from '@/lib/utils';

interface NeonColorsProps {
  firstColor: string;
  secondColor: string;
}

interface NeonGradientCardProps {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The component to be rendered as the card
   * */
  as?: ReactElement;
  /**
   * @default ""
   * @type string
   * @description
   * The className of the card
   */
  className?: string;

  /**
   * @default ""
   * @type ReactNode
   * @description
   * The children of the card
   * */
  children?: ReactNode;

  /**
   * @default 5
   * @type number
   * @description
   * The size of the border in pixels
   * */
  borderSize?: number;

  /**
   * @default 20
   * @type number
   * @description
   * The size of the radius in pixels
   * */
  borderRadius?: number;

  /**
   * @default "{ firstColor: '#ff00aa', secondColor: '#00FFF1' }"
   * @type string
   * @description
   * The colors of the neon gradient
   * */
  neonColors?: NeonColorsProps;

  // [key: string]: any;
}

const NeonGradientCard: React.FC<NeonGradientCardProps> = ({
  className,
  children,
  borderSize = 1,
  borderRadius = 10,
  neonColors = {
    firstColor: '#eee',
    secondColor: '#201E43',
  },
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setDimensions] = useState({ width: 0, height: 0 });


  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [children]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={containerRef}
      style={
        {
          '--border-size': `${borderSize}px`,
          '--border-radius': `${borderRadius}px`,
          '--neon-first-color': neonColors.firstColor,
          '--neon-second-color': neonColors.secondColor,
          '--card-width': `100%`,
          '--card-height': `100%`,
          '--card-content-radius': `${borderRadius - borderSize}px`,
          '--pseudo-element-background-image': `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor})`,
          '--pseudo-element-width': `100.45%`,
          '--pseudo-element-height': `101.3%`,
          '--after-blur': `100px`,
        } as CSSProperties
      }
      className={cn(
        ' bg-transparent w-fit rounded-[var(--card-content-radius)]',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'relative min-h-[inherit] w-fit mx-auto rounded-[var(--card-content-radius)] bg-supreme px-6 py-8',
          'before:absolute w-fit before:-right-[var(--border-size)] before:-bottom-[var(--border-size)] before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block',
          "before:h-[var(--pseudo-element-height)] w-fit before:w-[var(--pseudo-element-width)] before:rounded-[var(--border-radius)] before:content-['']",
          'before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:20%_200%]',
          'before:animate-background-position-spin',
          'after:absolute before:-right-[var(--border-size)] before:-bottom-[var(--border-size)] after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block',
          "after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] w-fit after:blur-[var(--after-blur)] after:content-['']",
          'after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_80%] after:opacity-80',
          'after:animate-background-position-spin',
          'dark:bg-neutral-900'
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};

export { NeonGradientCard };
