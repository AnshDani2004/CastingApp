'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Agency {
  id: string;
  name: string;
  type: string;
  location: string;
  specialties: string[];
  description: string;
  website: string;
}

const sampleAgencies: Agency[] = [
  {
    id: '1',
    name: 'Elite Talent Management',
    type: 'Talent Agency',
    location: 'Los Angeles, CA',
    specialties: ['Film', 'Television', 'Theater'],
    description: 'Premier talent agency representing actors across all entertainment mediums.',
    website: 'https://example.com',
  },
  {
    id: '2',
    name: 'Model Management International',
    type: 'Modeling Agency',
    location: 'New York, NY',
    specialties: ['Fashion', 'Commercial', 'Print'],
    description: 'Leading modeling agency with global connections in the fashion industry.',
    website: 'https://example.com',
  },
  {
    id: '3',
    name: 'Creative Artists Group',
    type: 'Talent Agency',
    location: 'Miami, FL',
    specialties: ['Music', 'Dance', 'Performance'],
    description: 'Full-service agency specializing in performing artists and entertainers.',
    website: 'https://example.com',
  },
];

export default function RepresentativesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const filteredAgencies = sampleAgencies.filter(agency => {
    const matchesSearch = agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agency.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || agency.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Representatives & Agencies</h1>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search agencies..."
              className="flex-1 p-2 border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="p-2 border border-gray-300 rounded-md"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Talent Agency">Talent Agencies</option>
              <option value="Modeling Agency">Modeling Agencies</option>
              <option value="Management Company">Management Companies</option>
            </select>
          </div>

          {/* Agency Listings */}
          <div className="grid gap-6">
            {filteredAgencies.map((agency) => (
              <div
                key={agency.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {agency.name}
                    </h2>
                    <p className="text-gray-600 mb-4">{agency.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        {agency.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {agency.location}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {agency.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 flex flex-col gap-2">
                    <a
                      href={agency.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors text-center"
                    >
                      Visit Website
                    </a>
                    <Link
                      href={`/representatives/${agency.id}`}
                      className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50 transition-colors text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAgencies.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No agencies found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 