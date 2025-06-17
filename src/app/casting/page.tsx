'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  type: string;
  location: string;
  deadline: string;
  description: string;
}

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Feature Film Lead Role',
    type: 'Film',
    location: 'Los Angeles, CA',
    deadline: '2024-05-15',
    description: 'Seeking lead actor for an upcoming independent feature film. Drama genre.',
  },
  {
    id: '2',
    title: 'TV Series Regular',
    type: 'Television',
    location: 'New York, NY',
    deadline: '2024-05-20',
    description: 'Casting for a series regular role in new streaming series. Comedy genre.',
  },
  {
    id: '3',
    title: 'Commercial Spokesperson',
    type: 'Commercial',
    location: 'Miami, FL',
    deadline: '2024-05-10',
    description: 'Looking for a charismatic spokesperson for national TV commercial campaign.',
  },
];

export default function CastingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const filteredProjects = sampleProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || project.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Casting Projects</h1>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search projects..."
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
              <option value="Film">Film</option>
              <option value="Television">Television</option>
              <option value="Commercial">Commercial</option>
              <option value="Theater">Theater</option>
            </select>
          </div>

          {/* Project Listings */}
          <div className="grid gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        {project.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {project.location}
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                        Deadline: {project.deadline}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/casting/projects/${project.id}`}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 