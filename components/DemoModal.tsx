'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader2, Calendar, AlertCircle, Clock, MessageSquare, ClipboardList, Shield } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { useDemoModal } from '@/contexts/DemoModalContext';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  caregiverCount: string;
  staffingChallenges: string[];
}

const challenges = [
  { 
    id: 'open-shifts', 
    label: 'Open shifts',
    description: 'Coverage still needs to be filled.',
    icon: Calendar
  },
  { 
    id: 'callouts', 
    label: 'Last-minute callouts',
    description: 'Caregivers cancel close to shift time.',
    icon: AlertCircle
  },
  { 
    id: 'no-shows', 
    label: 'No-shows',
    description: 'Confirmed shifts still get missed.',
    icon: Clock
  },
  { 
    id: 'texting', 
    label: 'Endless texting',
    description: 'Too much manual follow-up.',
    icon: MessageSquare
  },
  { 
    id: 'scheduling', 
    label: 'Scheduling organization',
    description: 'Schedules are hard to keep clean.',
    icon: ClipboardList
  },
  { 
    id: 'coverage', 
    label: 'Coverage gaps',
    description: 'Open hours are difficult to recover.',
    icon: Shield
  }
];

const caregiverCounts = [
  { value: '1-5', label: '1–5' },
  { value: '6-15', label: '6–15' },
  { value: '16-30', label: '16–30' },
  { value: '31-50', label: '31–50' },
  { value: '50+', label: '50+' }
];

export default function DemoModal() {
  const { isOpen, closeModal } = useDemoModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    caregiverCount: '',
    staffingChallenges: []
  });

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setError('Full name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return false;
    }
    if (!formData.caregiverCount) {
      setError('Please select caregiver count');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://careflow-os-demo-api.vic-76c.workers.dev'}/demo-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          caregiver_count: formData.caregiverCount,
          staffing_challenges: formData.staffingChallenges.join(', ')
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit demo request');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Demo request error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChallengeToggle = (challengeId: string) => {
    setFormData(prev => ({
      ...prev,
      staffingChallenges: prev.staffingChallenges.includes(challengeId)
        ? prev.staffingChallenges.filter(id => id !== challengeId)
        : [...prev.staffingChallenges, challengeId]
    }));
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSubmitted(false);
      setError('');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        caregiverCount: '',
        staffingChallenges: []
      });
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={handleClose}>
          <DialogOverlay className="bg-slate-950/40 backdrop-blur-md" />
          <DialogContent className="max-w-[640px] w-[calc(100vw-32px)] max-h-[calc(100vh-32px)] overflow-y-auto p-0 border border-slate-200/70 shadow-2xl bg-white rounded-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="p-6 sm:p-10"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>

              {isSubmitted ? (
                /* SUCCESS STATE */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-18 h-18 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-2">
                    Thanks — we&apos;ll reach out shortly.
                  </h3>
                  <p className="text-slate-500 text-base max-w-[420px] mx-auto mb-8">
                    We received your demo request and will contact you soon.
                  </p>
                  <button
                    onClick={handleClose}
                    className="h-12 px-8 bg-slate-950 hover:bg-slate-800 text-white font-semibold rounded-2xl transition-all duration-200"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* HEADER SECTION */}
                  <div className="text-center mb-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-3 py-1 text-xs font-semibold mb-4">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      CAREFLOW OS
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 mb-2.5">
                      Book a Demo
                    </h2>
                    
                    {/* Subtitle */}
                    <p className="text-base text-slate-500 leading-relaxed max-w-[460px] mx-auto">
                      Tell us what you&apos;re coordinating today. We&apos;ll reach out with a simple walkthrough.
                    </p>
                  </div>

                  {/* FORM */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        placeholder="John Smith"
                        disabled={isSubmitting}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Work Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="john@company.com"
                        disabled={isSubmitting}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="(555) 123-4567"
                        disabled={isSubmitting}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>

                    {/* Caregiver Count */}
                    <div>
                      <label htmlFor="caregiverCount" className="block text-sm font-medium text-slate-700 mb-2">
                        Caregiver Count
                      </label>
                      <select
                        id="caregiverCount"
                        value={formData.caregiverCount}
                        onChange={(e) => setFormData(prev => ({ ...prev, caregiverCount: e.target.value }))}
                        disabled={isSubmitting}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      >
                        <option value="">Select caregiver count</option>
                        {caregiverCounts.map(count => (
                          <option key={count.value} value={count.value}>
                            {count.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Staffing Challenges */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Biggest staffing challenge
                      </label>
                      <p className="text-xs text-slate-500 mb-3">
                        Choose all that apply.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {challenges.map(challenge => {
                          const Icon = challenge.icon;
                          const isSelected = formData.staffingChallenges.includes(challenge.id);
                          
                          return (
                            <button
                              key={challenge.id}
                              type="button"
                              onClick={() => handleChallengeToggle(challenge.id)}
                              disabled={isSubmitting}
                              className={`
                                rounded-2xl border p-4 text-left flex items-start gap-3 transition-all
                                ${isSelected 
                                  ? 'border-blue-500 bg-blue-50 shadow-sm ring-2 ring-blue-100' 
                                  : 'border-slate-200 bg-white hover:bg-blue-50/50 hover:border-blue-200 hover:shadow-sm'
                                }
                              `}
                            >
                              <div className={`flex-shrink-0 w-5 h-5 mt-0.5 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className={`text-sm font-medium ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                                  {challenge.label}
                                </div>
                                <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                                  {challenge.description}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm text-center"
                      >
                        {error}
                      </motion.div>
                    )}

                    {/* CTA Area */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 rounded-2xl bg-slate-950 text-white font-semibold shadow-lg shadow-slate-950/10 hover:bg-slate-800 transition-all disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          'Schedule My Demo'
                        )}
                      </button>
                      <p className="text-center text-xs text-slate-400 mt-3">
                        No spam. Just a quick follow-up about your staffing needs.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
