import React from 'react';
import { ChallengeCard } from './ChallengeCard';
export function ChallengeGrid() {
  const challenges = [{
    id: 1,
    title: 'Injection Point',
    difficulty: 'Easy',
    category: 'Web',
    points: 20,
    solves: 1243
  }, {
    id: 2,
    title: 'Memory Corruption',
    difficulty: 'Medium',
    category: 'Pwn',
    points: 30,
    solves: 856
  }, {
    id: 3,
    title: 'Crypto Maze',
    difficulty: 'Hard',
    category: 'Crypto',
    points: 40,
    solves: 421
  }, {
    id: 4,
    title: 'Reverse Engineering 101',
    difficulty: 'Medium',
    category: 'Reversing',
    points: 35,
    solves: 678
  }, {
    id: 5,
    title: 'Packet Tracer',
    difficulty: 'Easy',
    category: 'Forensics',
    points: 25,
    solves: 1089
  }, {
    id: 6,
    title: 'Kernel Exploit',
    difficulty: 'Insane',
    category: 'Pwn',
    points: 50,
    solves: 124
  }];
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {challenges.map(challenge => <ChallengeCard key={challenge.id} challenge={challenge} />)}
    </div>;
}