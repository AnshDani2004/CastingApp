'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Notice {
  id: string;
  title: string;
  category: string;
  date: string;
  content: string;
  author: string;
}

const sampleNotices: Notice[] = [
  {
    id: '1',
    title: 'Open Casting Call - Feature Film',
    category: 'Casting Call',
    date: '2024-04-15',
    content: 'Major studio seeking diverse talent for upcoming feature film. All experience levels welcome.',
    author: 'Central Casting',
  },
  {
    id: '2',
    title: 'Industry Workshop - Acting for Camera',
    category: 'Workshop',
    date: '2024-04-20',
    content: 'Professional workshop focusing on camera techniques and screen presence. Limited spots available.',
    author: 'Screen Actors Studio',
  },
  {
    id: '3',
    title: 'Talent Agency Seeking New Clients',
    category: 'Opportunity',
    date: '2024-04-18',
    content: 'Leading talent agency expanding roster. Looking for fresh faces in all categories.',
    author: 'Premier Talent Management',
  },
];

export default function NoticeboardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredNotices = sampleNotices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Industry Noticeboard</h1>
            <Link
              href="/noticeboard/post"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Post Notice
            </Link>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search notices..."
              className="flex-1 p-2 border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="p-2 border border-gray-300 rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Casting Call">Casting Calls</option>
              <option value="Workshop">Workshops</option>
              <option value="Opportunity">Opportunities</option>
              <option value="News">Industry News</option>
            </select>
          </div>

          {/* Notices */}
          <div className="space-y-6">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {notice.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Posted by {notice.author} on {new Date(notice.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    {notice.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{notice.content}</p>
                <Link
                  href={`/noticeboard/${notice.id}`}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>

          {filteredNotices.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No notices found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 