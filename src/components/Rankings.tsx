import React, { useState } from 'react';
import { Trophy, Medal, Award, TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function Rankings() {
  const [selectedCategory, setSelectedCategory] = useState('overall');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');

  const categories = [
    { id: 'overall', label: 'Overall Performance' },
    { id: 'athletics', label: 'Athletics' },
    { id: 'swimming', label: 'Swimming' },
    { id: 'wrestling', label: 'Wrestling' },
    { id: 'badminton', label: 'Badminton' },
    { id: 'boxing', label: 'Boxing' },
  ];

  const ageGroups = [
    { id: 'all', label: 'All Ages' },
    { id: 'u16', label: 'Under 16' },
    { id: 'u18', label: 'Under 18' },
    { id: 'u20', label: 'Under 20' },
    { id: 'senior', label: 'Senior (20+)' },
  ];

  const rankings = [
    {
      rank: 1,
      prevRank: 1,
      name: 'Priya Patel',
      age: 17,
      state: 'Gujarat',
      sport: 'Swimming',
      score: 92,
      trend: 'stable',
      assessments: 15,
      lastUpdate: '2024-01-16'
    },
    {
      rank: 2,
      prevRank: 3,
      name: 'Vikram Singh',
      age: 20,
      state: 'Rajasthan',
      sport: 'Athletics',
      score: 90,
      trend: 'up',
      assessments: 12,
      lastUpdate: '2024-01-15'
    },
    {
      rank: 3,
      prevRank: 2,
      name: 'Rahul Sharma',
      age: 19,
      state: 'Maharashtra',
      sport: 'Athletics',
      score: 87,
      trend: 'down',
      assessments: 18,
      lastUpdate: '2024-01-15'
    },
    {
      rank: 4,
      prevRank: 4,
      name: 'Sneha Reddy',
      age: 18,
      state: 'Telangana',
      sport: 'Badminton',
      score: 85,
      trend: 'stable',
      assessments: 14,
      lastUpdate: '2024-01-16'
    },
    {
      rank: 5,
      prevRank: 6,
      name: 'Deepika Yadav',
      age: 16,
      state: 'Haryana',
      sport: 'Boxing',
      score: 83,
      trend: 'up',
      assessments: 10,
      lastUpdate: '2024-01-13'
    },
    {
      rank: 6,
      prevRank: 5,
      name: 'Amit Kumar',
      age: 21,
      state: 'Punjab',
      sport: 'Wrestling',
      score: 78,
      trend: 'down',
      assessments: 16,
      lastUpdate: '2024-01-14'
    },
    {
      rank: 7,
      prevRank: 7,
      name: 'Arjun Nair',
      age: 19,
      state: 'Kerala',
      sport: 'Swimming',
      score: 76,
      trend: 'stable',
      assessments: 11,
      lastUpdate: '2024-01-14'
    },
    {
      rank: 8,
      prevRank: 9,
      name: 'Kavya Menon',
      age: 17,
      state: 'Karnataka',
      sport: 'Athletics',
      score: 74,
      trend: 'up',
      assessments: 13,
      lastUpdate: '2024-01-16'
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-gray-500 font-bold">{rank}</span>;
    }
  };

  const getTrendIcon = (trend: string, rank: number, prevRank: number) => {
    if (trend === 'up' && rank < prevRank) {
      return <TrendingUp className="w-4 h-4 text-green-500" />;
    } else if (trend === 'down' && rank > prevRank) {
      return <TrendingDown className="w-4 h-4 text-red-500" />;
    } else {
      return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Rankings</h1>
        <div className="text-sm text-gray-500">
          Updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.label}</option>
              ))}
            </select>
          </div>
          
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Age Group</label>
            <select
              value={selectedAgeGroup}
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {ageGroups.map(group => (
                <option key={group.id} value={group.id}>{group.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-xl font-bold text-center mb-8 text-gray-900">Top Performers</h2>
        <div className="flex justify-center items-end space-x-8">
          {rankings.slice(0, 3).map((athlete, index) => (
            <div key={athlete.rank} className={`text-center ${index === 0 ? 'order-2' : index === 1 ? 'order-1' : 'order-3'}`}>
              <div className={`
                w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4
                ${index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 
                  index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' : 
                  'bg-gradient-to-r from-amber-600 to-amber-800'}
              `}>
                {athlete.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className={`
                bg-white rounded-lg p-4 shadow-lg border-t-4
                ${index === 0 ? 'border-yellow-500' : 
                  index === 1 ? 'border-gray-400' : 
                  'border-amber-600'}
              `}>
                <h3 className="font-bold text-gray-900">{athlete.name}</h3>
                <p className="text-sm text-gray-600">{athlete.sport}</p>
                <p className="text-lg font-bold text-blue-600 mt-2">{athlete.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rankings Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Complete Rankings</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Athlete</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sport</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assessments</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rankings.map((athlete) => (
                <tr key={athlete.rank} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getRankIcon(athlete.rank)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {athlete.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{athlete.name}</div>
                        <div className="text-sm text-gray-500">Age {athlete.age}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{athlete.sport}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{athlete.state}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-blue-600">{athlete.score}</span>
                      <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                          style={{ width: `${athlete.score}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(athlete.trend, athlete.rank, athlete.prevRank)}
                      <span className="text-xs text-gray-500">
                        {athlete.rank !== athlete.prevRank ? `${athlete.prevRank} → ${athlete.rank}` : 'No change'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{athlete.assessments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}