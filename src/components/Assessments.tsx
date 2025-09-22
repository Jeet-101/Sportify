import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Clock, Filter, Download, Eye } from 'lucide-react';

export default function Assessments() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  const assessments = [
    {
      id: 'A001',
      athleteName: 'Rahul Sharma',
      sport: 'Athletics',
      testType: 'Complete Battery',
      date: '2024-01-16',
      status: 'Completed',
      aiVerification: 'Verified',
      score: 87,
      tests: ['100m Sprint: 11.2s', 'Vertical Jump: 65cm', 'Sit-ups: 45 reps'],
      officer: 'Dr. Rajesh Kumar'
    },
    {
      id: 'A002',
      athleteName: 'Priya Patel',
      sport: 'Swimming',
      testType: 'Endurance Test',
      date: '2024-01-16',
      status: 'Completed',
      aiVerification: 'Verified',
      score: 92,
      tests: ['400m Freestyle: 4:32', 'Treading Water: 15min', 'Flexibility: 85/100'],
      officer: 'Coach Anita Sharma'
    },
    {
      id: 'A003',
      athleteName: 'Amit Kumar',
      sport: 'Wrestling',
      testType: 'Strength Assessment',
      date: '2024-01-15',
      status: 'Under Review',
      aiVerification: 'Flagged',
      score: 78,
      tests: ['Push-ups: 42 reps', 'Plank: 3:45', 'Grip Strength: 45kg'],
      officer: 'Coach Suresh Yadav'
    },
    {
      id: 'A004',
      athleteName: 'Sneha Reddy',
      sport: 'Badminton',
      testType: 'Agility Test',
      date: '2024-01-15',
      status: 'Completed',
      aiVerification: 'Verified',
      score: 85,
      tests: ['Shuttle Run: 9.8s', 'Reaction Time: 0.18s', 'Coordination: 90/100'],
      officer: 'Coach Pradeep Singh'
    },
    {
      id: 'A005',
      athleteName: 'Vikram Singh',
      sport: 'Athletics',
      testType: 'Speed Test',
      date: '2024-01-14',
      status: 'Pending Review',
      aiVerification: 'Pending',
      score: 90,
      tests: ['60m Sprint: 7.1s', 'Flying 30m: 3.2s', 'Acceleration: 95/100'],
      officer: 'Dr. Meera Joshi'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending Review':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getVerificationColor = (verification: string) => {
    switch (verification) {
      case 'Verified':
        return 'text-green-600';
      case 'Flagged':
        return 'text-red-600';
      case 'Pending':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  const getVerificationIcon = (verification: string) => {
    switch (verification) {
      case 'Verified':
        return <CheckCircle className="w-4 h-4" />;
      case 'Flagged':
        return <AlertCircle className="w-4 h-4" />;
      case 'Pending':
        return <Clock className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const filteredAssessments = assessments.filter(assessment => {
    const statusMatch = statusFilter === 'all' || assessment.status.toLowerCase().includes(statusFilter);
    const dateMatch = dateFilter === 'all' || 
      (dateFilter === 'today' && assessment.date === '2024-01-16') ||
      (dateFilter === 'week' && new Date(assessment.date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
    return statusMatch && dateMatch;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Assessments</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Assessments</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">AI Verified</p>
              <p className="text-2xl font-bold text-green-600">142</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Under Review</p>
              <p className="text-2xl font-bold text-yellow-600">8</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Flagged</p>
              <p className="text-2xl font-bold text-red-600">6</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="completed">Completed</option>
              <option value="review">Under Review</option>
              <option value="pending">Pending Review</option>
            </select>
          </div>
          
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>
      </div>

      {/* Assessments List */}
      <div className="space-y-4">
        {filteredAssessments.map(assessment => (
          <div key={assessment.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {assessment.athleteName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{assessment.athleteName}</h3>
                    <p className="text-sm text-gray-600">{assessment.sport} • {assessment.testType}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(assessment.status)}`}>
                    {assessment.status}
                  </span>
                  <div className={`flex items-center space-x-1 ${getVerificationColor(assessment.aiVerification)}`}>
                    {getVerificationIcon(assessment.aiVerification)}
                    <span className="text-sm font-medium">AI {assessment.aiVerification}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Assessment ID</p>
                  <p className="text-sm text-gray-600">{assessment.id}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Date</p>
                  <p className="text-sm text-gray-600">{new Date(assessment.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Overall Score</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">{assessment.score}</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${assessment.score}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Test Results</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {assessment.tests.map((test, index) => (
                    <div key={index} className="bg-gray-50 px-3 py-2 rounded-lg">
                      <span className="text-sm text-gray-700">{test}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Reviewing Officer: {assessment.officer}</p>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download Report</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}