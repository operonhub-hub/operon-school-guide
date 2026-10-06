import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight, BookOpen, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { documentationNavigationConfig } from '../../../config/documentation/navigation.config';

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COMMON_TEACHER_QUESTIONS = [
  { question: 'How do I register my school?', path: '/docs/registration/register-your-school', category: 'Start Here' },
  { question: 'How do I add students or import via spreadsheet?', path: '/docs/academic-management/adding-students', category: 'Teaching & Academics' },
  { question: 'How do I add teachers and deploy credentials?', path: '/docs/academic-management/adding-teachers', category: 'Teaching & Academics' },
  { question: 'How do I create classes, arms, and subjects?', path: '/docs/academic-management/classes-and-subjects', category: 'Teaching & Academics' },
  { question: 'How do I set up academic sessions and terms?', path: '/docs/school-setup/academic-session', category: 'School Setup' },
  { question: 'How do I update school logo and profile?', path: '/docs/school-setup/profile-settings', category: 'School Setup' },
  { question: 'How do I take student attendance?', path: '/docs/academic-management/attendance', category: 'Teaching & Academics' },
  { question: 'How do I record test scores & assessments?', path: '/docs/academic-management/assessment', category: 'Teaching & Academics' },
  { question: 'How do I evaluate early years or pre-nursery skills?', path: '/docs/academic-management/early-years-skills', category: 'Teaching & Academics' },
  { question: 'How do I prepare and print report cards?', path: '/docs/academic-management/report-cards', category: 'Teaching & Academics' },
];

const GUIDE_KEYWORDS: Record<string, string[]> = {
  'adding-students': [
    'students',
    'student',
    'add student',
    'adding students',
    'register student',
    'student registration',
    'student profile',
    'student documents',
    'student roster',
    'bulk upload',
    'bulk import',
    'student import',
    'import students',
    'student spreadsheet',
    'student list',
  ],
  'adding-teachers': [
    'teacher',
    'teachers',
    'add teacher',
    'adding teachers',
    'teacher account',
    'teacher registration',
    'teacher login',
    'teacher password',
    'class teacher',
    'subject teacher',
    'teacher assignments',
    'teacher credentials',
    'welcome email',
    'temporary password',
  ],
  'classes-and-subjects': [
    'class',
    'classes',
    'arm',
    'class arm',
    'arms',
    'subject',
    'subjects',
    'create class',
    'create subject',
    'compulsory',
    'compulsory subject',
    'elective',
    'elective subject',
    'academic section',
    'class structure',
    'subdivision',
  ],
  'register-your-school': ['register', 'signup', 'create account', 'school setup', 'onboarding'],
  'academic-session': ['session', 'calendar', 'term', 'academic year', 'dates'],
  'profile-settings': ['profile', 'logo', 'signature', 'branding', 'settings'],
  'attendance': [
    'attendance',
    'taking attendance',
    'record attendance',
    'daily attendance',
    'mark attendance',
    'mark absent',
    'mark present',
    'submit attendance',
    'attendance record',
    'attendance analytics',
    'attendance report',
    'student attendance',
    'attendance health',
    'student attendance health ledger',
  ],
  'taking-attendance': [
    'attendance',
    'taking attendance',
    'record attendance',
    'daily attendance',
    'mark attendance',
    'mark absent',
    'mark present',
    'submit attendance',
    'attendance record',
    'attendance analytics',
    'attendance report',
    'student attendance',
    'attendance health',
    'student attendance health ledger',
  ],
  'assessment': [
    'assessment',
    'assessments',
    'assessment scheme',
    'assessment schemes',
    'assessment preset',
    'assessment configuration',
    'assessment structure',
    'assessment components',
    'assessment marks',
    'score entry',
    'enter scores',
    'student scores',
    'grading',
    'score matrix',
    'marks',
    'upload scores',
    'assessment scores',
    'teacher score entry',
    'submit scores',
  ],
  'assessments-score-entry': [
    'assessment',
    'assessments',
    'assessment scheme',
    'assessment schemes',
    'assessment preset',
    'assessment configuration',
    'assessment structure',
    'assessment components',
    'assessment marks',
    'score entry',
    'enter scores',
    'student scores',
    'grading',
    'score matrix',
    'marks',
    'upload scores',
    'assessment scores',
    'teacher score entry',
    'submit scores',
  ],
  'early-years-skills': [
    'early years',
    'early years assessment',
    'pre-nursery',
    'prenursery',
    'nursery',
    'kindergarten',
    'creche',
    'skills evaluation',
    'skills evaluation studio',
    'skills entry',
    'developmental skills',
    'developmental milestones',
    'observational skills',
    'gross motor skills',
    'fine motor skills',
    'pre-academic skills',
    'understanding language',
    'self-help skills',
    'rating code',
    'assessment setup',
    'learner profile',
    'save progress',
    'checklist system',
  ],
  'prenursery-assessment': [
    'early years',
    'early years assessment',
    'pre-nursery',
    'prenursery',
    'nursery',
    'kindergarten',
    'creche',
    'skills evaluation',
    'skills evaluation studio',
    'skills entry',
    'developmental skills',
    'developmental milestones',
    'observational skills',
    'gross motor skills',
    'fine motor skills',
    'pre-academic skills',
    'understanding language',
    'self-help skills',
    'rating code',
    'assessment setup',
    'learner profile',
    'save progress',
    'checklist system',
  ],
  'report-cards': [
    'report cards',
    'report card',
    'report cards and grading',
    'report cards & grading',
    'reporting',
    'compile class roster',
    'edit report remarks',
    'teacher remarks',
    'principal remarks',
    'printable report card',
    'print preview',
    'generate comments',
    'batch comments',
    'school approval',
    'awaiting school approval',
    'approve & release',
    'broadsheet',
    'export broadsheet',
  ],
  'report-cards-grading': [
    'report cards',
    'report card',
    'report cards and grading',
    'report cards & grading',
    'reporting',
    'compile class roster',
    'edit report remarks',
    'teacher remarks',
    'principal remarks',
    'printable report card',
    'print preview',
    'generate comments',
    'batch comments',
    'school approval',
    'awaiting school approval',
    'approve & release',
    'broadsheet',
    'export broadsheet',
  ],
};

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Flatten all searchable items
  const allItems = React.useMemo(() => {
    return documentationNavigationConfig.sections.flatMap((sec) =>
      sec.items.map((item) => ({
        ...item,
        sectionTitle: sec.title,
        sectionId: sec.id,
        keywords: GUIDE_KEYWORDS[item.id] || GUIDE_KEYWORDS[item.slug] || [],
      }))
    );
  }, []);

  // Filter based on query
  const filteredItems = React.useMemo(() => {
    if (!query.trim()) {
      return allItems.slice(0, 8); // show popular/first 8
    }
    const q = query.toLowerCase().trim();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.sectionTitle.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.toLowerCase().includes(q) || q.includes(k.toLowerCase()))
    );
  }, [query, allItems]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter' && filteredItems.length > 0) {
        e.preventDefault();
        const selected = filteredItems[selectedIndex];
        if (selected) {
          navigate(selected.path);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, navigate, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-slate-200/80 px-4 py-3.5 bg-white">
          <Search className="h-5 w-5 text-operon-600 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What would you like help with?"
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none text-base sm:text-sm font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 ml-2">
            ESC
          </kbd>
        </div>

        {/* Suggested Quick Questions when empty query */}
        {!query.trim() && (
          <div className="p-3 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-1.5 px-2 mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <HelpCircle className="h-3.5 w-3.5 text-operon-500" />
              <span>Common Questions for School Staff</span>
            </div>
            <div className="space-y-1">
              {COMMON_TEACHER_QUESTIONS.slice(0, 3).map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    navigate(item.path);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between rounded-xl px-2.5 py-1.5 text-left text-xs text-slate-700 hover:bg-white hover:text-operon-700 hover:shadow-2xs transition"
                >
                  <span className="font-medium">{item.question}</span>
                  <span className="text-[10px] font-semibold text-operon-600 bg-operon-50 rounded px-1.5 py-0.5">
                    {item.category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No guides found for <span className="font-semibold text-slate-800">"{query}"</span>.
              <p className="text-xs text-slate-400 mt-1">Try searching by topic like "attendance", "session", or "students".</p>
            </div>
          ) : (
            <ul className="space-y-1">
              {filteredItems.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        navigate(item.path);
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors ${
                        isSelected
                          ? 'bg-operon-50 text-operon-900 shadow-2xs ring-1 ring-operon-600/10'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <BookOpen
                          className={`h-4 w-4 shrink-0 ${
                            isSelected ? 'text-operon-600' : 'text-slate-400'
                          }`}
                        />
                        <div className="truncate">
                          <span className="font-semibold text-slate-900 block truncate">
                            {item.title}
                          </span>
                          <span className="text-xs text-slate-500 block truncate">
                            {item.sectionTitle}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 ${
                          isSelected ? 'text-operon-600' : 'text-slate-300'
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-4 py-2.5 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span><kbd className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">↑</kbd> <kbd className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">↓</kbd> to navigate</span>
            <span><kbd className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">↵</kbd> to select</span>
          </div>
          <span>Operon School Guide</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
