// src/components/sections/CurrentCohort.jsx
import React, { useState } from 'react';
import { Calendar, Users, ChevronDown, ChevronUp, User, Clock, ExternalLink, Github, MessageCircle, Play } from 'lucide-react';
import { sessions } from '../../data/sessions';
import { mentors } from '../../data/mentors';

const CurrentCohort = () => {
  const [expandedSession, setExpandedSession] = useState(null);
  const [activeTab, setActiveTab] = useState('schedule');

  const currentSessions = sessions.cohort4;
  const currentMentors = mentors.cohort4;

  const SessionCard = ({ session, index, isExpanded, onToggle }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs font-medium">
              Week {session.week}
            </span>
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              session.type === 'Guest Lecture' 
                ? 'bg-blue-100 text-blue-600' 
                : session.type === 'Stand-up'
                ? 'bg-green-100 text-green-600'
                : 'bg-orange-100 text-orange-600'
            }`}>
              {session.type}
            </span>
            {session.recording && session.recording !== 'TBD' && session.recording !== '-' && (
              <Play size={14} className="text-gray-500" />
            )}
          </div>
          <div className="font-semibold text-gray-800">{session.topic}</div>
          <div className="text-sm text-gray-600 mt-1">{session.date}</div>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-200 bg-gray-50">
          <div className="pt-3 space-y-3">
            {session.speaker !== '-' && (
              <div className="flex items-center gap-2 text-sm">
                <User size={16} className="text-gray-500" />
                <span><strong>Speaker:</strong> {session.speaker}</span>
              </div>
            )}
            
            {session.assignment && (
              <div className="flex items-start gap-2 text-sm">
                <ExternalLink size={16} className="text-gray-500 mt-0.5" />
                <div>
                  <strong>Assignment:</strong>{' '}
                  {session.assignmentUrl ? (
                    <a 
                      href={session.assignmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 underline"
                    >
                      {session.assignment}
                    </a>
                  ) : (
                    <span className="text-gray-600">{session.assignment}</span>
                  )}
                </div>
              </div>
            )}

            {session.recording && session.recording !== 'TBD' && session.recording !== '-' && (
              <div className="flex items-center gap-2 text-sm">
                <Play size={16} className="text-gray-500" />
                <a 
                  href={session.recording}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  Watch Recording
                </a>
              </div>
            )}

            {session.resources && session.resources.length > 0 && (
              <div className="text-sm">
                <strong className="block mb-2">Resources:</strong>
                <div className="space-y-1">
                  {session.resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-purple-600 hover:text-purple-700 underline"
                    >
                      • {resource.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  const MentorCard = ({ mentor }) => (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="font-semibold text-gray-800">{mentor.name}</div>
          <div className="text-sm text-purple-600">{mentor.role}</div>
          <div className="text-sm text-gray-600 mt-1">{mentor.repository}</div>
        </div>
        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
          {mentor.language}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2 text-xs mb-3">
        {mentor.expertise && mentor.expertise.map((skill, idx) => (
          <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <a
          href={mentor.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-700 transition-colors flex items-center gap-1"
        >
          <Github size={10} /> Repo
        </a>
        <a
          href={mentor.issuesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 transition-colors"
        >
          Issues
        </a>
        {mentor.discordUrl && (
          <a
            href={mentor.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-indigo-600 text-white px-2 py-1 rounded hover:bg-indigo-700 transition-colors flex items-center gap-1"
          >
            <MessageCircle size={10} /> Discord
          </a>
        )}
      </div>

      <div className="text-xs text-gray-500 mt-2">
        Discord: @{mentor.discord}
      </div>
    </div>
  );

  return (
    <section id="cohorts" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Cohort</h2>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full inline-block font-semibold shadow-lg">
              Cohort 4 - Active (Sept 11 - Nov 14, 2025)
            </div>
          </div>

          {/* Program Overview */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">10</div>
                <div className="text-gray-600">Weeks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">2</div>
                <div className="text-gray-600">Sessions/Week</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">1-2</div>
                <div className="text-gray-600">PRs Expected</div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-1 mb-8 bg-gray-100 p-1 rounded-lg">
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'schedule' 
                  ? 'bg-white text-purple-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('schedule')}
            >
              Session Schedule
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'mentors' 
                  ? 'bg-white text-purple-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('mentors')}
            >
              Mentors & Repos
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'progress' 
                  ? 'bg-white text-purple-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('progress')}
            >
              Progress & Goals
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'schedule' && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="text-purple-600" />
                Session Schedule
              </h3>
              
              <div className="space-y-3">
                {currentSessions.slice(0, 12).map((session, index) => (
                  <SessionCard
                    key={index}
                    session={session}
                    index={index}
                    isExpanded={expandedSession === index}
                    onToggle={() => setExpandedSession(expandedSession === index ? null : index)}
                  />
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="https://classroom.google.com/c/ODEzNjcwMDE2MjAz?cjc=wtzvgkzb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  <ExternalLink size={16} />
                  Join Google Classroom for Assignments
                </a>
              </div>
            </div>
          )}

          {activeTab === 'mentors' && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Users className="text-purple-600" />
                Mentors & Repositories
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {currentMentors.map((mentor, index) => (
                  <MentorCard key={index} mentor={mentor} />
                ))}
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Getting Started with Issues</h4>
                <ul className="text-sm space-y-2 text-blue-700">
                  <li>• Choose a repository that matches your preferred programming language</li>
                  <li>• Start with issues labeled "good first issue" or "beginner-friendly"</li>
                  <li>• Join the relevant Discord channels to connect with mentors</li>
                  <li>• Read the repository's contributor documentation before starting</li>
                  <li>• Don't hesitate to ask questions in the WiEP Discord #studygroup channel</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="text-purple-600" />
                Progress & Goals
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-4">Expected Outcomes</h4>
                  <ul className="text-sm space-y-2 text-green-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>At least 1-2 merged PRs per participant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Deep understanding of Ethereum protocol architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Hands-on experience with multiple Ethereum clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Strong foundation in open-source contribution workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Network of connections within Ethereum developer community</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-4">Exclusive Benefits</h4>
                  <ul className="text-sm space-y-2 text-purple-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">🎯</span>
                      <span>Discounted DevConnect tickets for top contributors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">🎫</span>
                      <span>Free WiEP DevConnect tickets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">✈️</span>
                      <span>Travel & stay support in Argentina (limited)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">🏠</span>
                      <span>Developer Residency opportunities with Invisible Garden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">🤝</span>
                      <span>Direct connections with client development teams</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-3">Current Progress Tracking</h4>
                <p className="text-sm text-orange-700 mb-4">
                  Participants track their progress in the GitHub repository's progress tracker. 
                  Updates include issue assignments, progress updates, and outcomes.
                </p>
                <a
                  href="https://github.com/wiepteam/studygroup/blob/main/Cohort%204/2-progress-tracker.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm"
                >
                  <Github size={14} />
                  View Progress Tracker
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CurrentCohort;