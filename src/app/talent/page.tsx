'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface TalentProfile {
  id: string;
  name: string;
  type: string;
  location: string;
  skills: string[];
  imageUrl: string;
  bio: string;
}

const sampleProfiles: TalentProfile[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    type: 'Actor',
    location: 'Los Angeles, CA',
    skills: ['Drama', 'Comedy', 'Voice Acting'],
    imageUrl: '/placeholder.jpg',
    bio: 'Experienced actor with a strong background in theater and film.',
  },
  {
    id: '2',
    name: 'Sarah Williams',
    type: 'Model',
    location: 'New York, NY',
    skills: ['Runway', 'Commercial', 'Print'],
    imageUrl: '/placeholder.jpg',
    bio: 'Professional model with extensive experience in fashion and commercial work.',
  },
  {
    id: '3',
    name: 'Michael Chen',
    type: 'Dancer',
    location: 'Miami, FL',
    skills: ['Contemporary', 'Ballet', 'Hip Hop'],
    imageUrl: '/placeholder.jpg',
    bio: 'Versatile dancer with training in multiple styles and performance experience.',
  },
];

export default function TalentPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const filteredProfiles = sampleProfiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || profile.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Talent Directory</h1>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search talent..."
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
              <option value="Actor">Actors</option>
              <option value="Model">Models</option>
              <option value="Dancer">Dancers</option>
              <option value="Musician">Musicians</option>
            </select>
          </div>

          {/* Talent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map((profile) => (
              <div
                key={profile.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={profile.imageUrl}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {profile.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{profile.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      {profile.type}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {profile.location}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/talent/${profile.id}`}
                    className="block w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProfiles.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No talent found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 