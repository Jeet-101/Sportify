import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Medal, Eye } from 'lucide-react';

export default function Athletes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedSport, setSelectedSport] = useState('all');

  const athletes = [
    {
      id: 1,
      name: 'Rahul Sharma',
      age: 19,
      state: 'Maharashtra',
      sport: 'Athletics',
      events: ['100m Sprint', '200m Sprint'],
      overallScore: 87,
      lastAssessment: '2024-01-15',
      status: 'Active',
      profileImage: null,
      achievements: ['State Champion 2023', 'National Qualifier']
    },
    {
      id: 2,
      name: 'Priya Patel',
      age: 17,
      state: 'Gujarat',
      sport: 'Swimming',
      events: ['100m Freestyle', '200m Butterfly'],
      overallScore: 92,
      lastAssessment: '2024-01-16',
      status: 'Active',
      profileImage: null,
      achievements: ['Regional Record Holder', 'Youth Olympics 2023']
    },
    {
      id: 3,
      name: 'Amit Kumar',
      age: 21,
      state: 'Punjab',
      sport: 'Wrestling',
      events: ['65kg Category'],
      overallScore: 78,
      lastAssessment: '2024-01-14',
      status: 'Under Review',
      profileImage: null,
      achievements: ['State Bronze Medal']
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      age: 18,
      state: 'Telangana',
      sport: 'Badminton',
      events: ['Singles', 'Doubles'],
      overallScore: 85,
      lastAssessment: '2024-01-16',
      status: 'Active',
      profileImage: null,
      achievements: ['Junior National Semi-finalist']
    },
    {
      id: 5,
      name: 'Vikram Singh',
      age: 20,
      state: 'Rajasthan',
      sport: 'Athletics',
      events: ['Long Jump', 'Triple Jump'],
      overallScore: 90,
      lastAssessment: '2024-01-15',
      status: 'Active',
      profileImage: null,
      achievements: ['National Record Holder U20', 'Asian Junior Games']
    },
    {
      id: 6,
      name: 'Deepika Yadav',
      age: 16,
      state: 'Haryana',
      sport: 'Boxing',
      events: ['54kg Category'],
      overallScore: 83,
      lastAssessment: '2024-01-13',
      status: 'Active',
      profileImage: null,
      achievements: ['Youth World Championships Qualifier']
    }
  ];

  const states = ['All', 'Maharashtra', 'Gujarat', 'Punjab', 'Telangana', 'Rajasthan', 'Haryana'];
  const sports = ['All', 'Athletics', 'Swimming', 'Wrestling', 'Badminton', 'Boxing'];

  const filteredAthletes = athletes.filter(athlete => {
    return (
      athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedState === 'all' || athlete.state === selectedState) &&
      (selectedSport === 'all' || athlete.sport === selectedSport)
    );
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Athletes</h1>
        <div className="text-sm text-gray-500">
          Total: {filteredAthletes.length} athletes
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search athletes by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {states.map(state => (
                <option key={state} value={state.toLowerCase()}>{state}</option>
              ))}
            </select>
            
            <select
              value={selectedSport}
              onChange={(e) => setSelectedSport(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sports.map(sport => (
                <option key={sport} value={sport.toLowerCase()}>{sport}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Athletes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAthletes.map(athlete => (
          <div key={athlete.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {athlete.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{athlete.name}</h3>
                    <p className="text-sm text-gray-500">Age {athlete.age} • {athlete.sport}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  athlete.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {athlete.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {athlete.state}
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Last assessment: {new Date(athlete.lastAssessment).toLocaleDateString()}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Overall Score</span>
                    <span className="text-lg font-bold text-blue-600">{athlete.overallScore}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${athlete.overallScore}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Events:</p>
                  <div className="flex flex-wrap gap-1">
                    {athlete.events.map((event, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                        {event}
                      </span>
                    ))}
                  </div>
                </div>

                {athlete.achievements.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 flex items-center">
                      <Medal className="w-4 h-4 mr-1 text-yellow-500" />
                      Achievements:
                    </p>
                    <div className="space-y-1">
                      {athlete.achievements.slice(0, 2).map((achievement, index) => (
                        <p key={index} className="text-xs text-gray-600">• {achievement}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>View Profile</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAthletes.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <div className="text-gray-400 mb-4">
            <Users className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No athletes found</h3>
          <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
        </div>
      )}
    </div>
  );
}