import React from 'react';
import { ServerIcon, ShieldIcon, CodeIcon, BrainIcon, FileIcon } from 'lucide-react';
interface Challenge {
  id: number;
  title: string;
  difficulty: string;
  category: string;
  points: number;
  solves: number;
}
interface ChallengeCardProps {
  challenge: Challenge;
}
export function ChallengeCard({
  challenge
}: ChallengeCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web':
        return <ServerIcon className="h-5 w-5" />;
      case 'Pwn':
        return <ShieldIcon className="h-5 w-5" />;
      case 'Crypto':
        return <CodeIcon className="h-5 w-5" />;
      case 'Reversing':
        return <BrainIcon className="h-5 w-5" />;
      default:
        return <FileIcon className="h-5 w-5" />;
    }
  };
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400';
      case 'Medium':
        return 'text-yellow-400';
      case 'Hard':
        return 'text-red-400';
      case 'Insane':
        return 'text-purple-400';
      default:
        return 'text-gray-400';
    }
  };
  return <div className="bg-gray-900 border border-[#9FEF00]/20 rounded-lg overflow-hidden hover:border-[#9FEF00]/50 transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className="bg-[#9FEF00]/10 p-2 rounded mr-3">
            {getCategoryIcon(challenge.category)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{challenge.title}</h3>
            <span className={`text-sm ${getDifficultyColor(challenge.difficulty)}`}>
              {challenge.difficulty}
            </span>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-4">
          <div className="flex items-center">
            <span className="mr-1">{challenge.category}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-1">{challenge.points} pts</span>
          </div>
          <div className="flex items-center">
            <span>{challenge.solves} solves</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#9FEF00]/10 p-3 bg-black/30">
        <button className="w-full bg-[#9FEF00]/10 hover:bg-[#9FEF00]/20 text-[#9FEF00] py-2 rounded text-sm font-medium transition-colors">
          View Challenge
        </button>
      </div>
    </div>;
}