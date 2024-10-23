'use client';
import React from 'react';
import LetterPullup from '../ui/letter-pullup';
import SparklesText from '../ui/sparkles-text';
import { NeonGradientCard } from '../ui/neon-gradient-card';

const HomeScreen = () => {
  return (
    <div className="flex items-center me-10 h-screen">
      <NeonGradientCard className=' text-center w-full mx-auto'>
        <LetterPullup
          className="text-transparent ms-0 mb-4 bg-gradient-to-b from-secondary to-teritiary bg-clip-text font-extrabold text-7xl"
          words={' Welcome to Travel'}
          delay={0.05}
        />
        
        <SparklesText sparklesCount={15} className='text-xl font-light text-slate-400' text="Plan your trips and share the itenaries with your friends" />;
      </NeonGradientCard>
    </div>
  );
};

export default HomeScreen;
