import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { Flame, ArrowRight, X, Clock, User } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Flame className="w-3.5 h-3.5" /> FunnelOX Growth Library
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Conversion Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">7-Figure Playbooks</span>
        </h1>
        <p className="text-sm text-gray-300">
          Real CRO split tests, AI prompts, VSL frameworks, and SEO teardowns published by our growth team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/15 bg-[#090b14] cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-cyan-400 font-semibold">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition line-clamp-2">{post.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">{post.excerpt}</p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between text-xs text-gray-500 border-t border-white/5 mt-4">
              <span>{post.author}</span>
              <span className="text-cyan-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">Read Article →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in overflow-y-auto">
          <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-white/20 p-6 sm:p-10 bg-[#08090f] text-white my-8 space-y-6">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-full glass-panel text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase">{selectedPost.category} • {selectedPost.readTime}</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{selectedPost.title}</h2>
              <div className="text-xs text-gray-400">By {selectedPost.authorRole} on {selectedPost.date}</div>
            </div>

            <div className="prose prose-invert max-w-none text-xs text-gray-300 leading-relaxed space-y-4 border-t border-white/10 pt-4">
              {selectedPost.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
