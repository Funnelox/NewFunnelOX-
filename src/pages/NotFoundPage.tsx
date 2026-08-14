import React from 'react';
import { PageView } from '../types';
import { Flame, ArrowRight, Home } from 'lucide-react';

interface NotFoundPageProps {
  setCurrentView: (view: PageView) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ setCurrentView }) => {
  return (
    <div className="pt-40 pb-20 max-w-xl mx-auto px-4 text-center space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto text-3xl font-black shadow-2xl">
        404
      </div>

      <h1 className="text-3xl sm:text-5xl font-black text-white">
        Lost In The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Funnel Matrix?</span>
      </h1>

      <p className="text-xs sm:text-sm text-gray-400">
        The page you are searching for has been relocated or optimized into a new conversion path.
      </p>

      <div className="pt-2 flex items-center justify-center gap-3">
        <button
          onClick={() => { setCurrentView('home'); window.scrollTo({ top: 0 }); }}
          className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center gap-2 shadow-lg"
        >
          <Home className="w-4 h-4" /> Return To Home Page
        </button>
      </div>
    </div>
  );
};
