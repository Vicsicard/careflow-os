'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle } from 'lucide-react';
import { useDemoModal } from '@/contexts/DemoModalContext';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  caregiverCount: string;
  staffingChallenges: string[];
}

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

  const challenges = [
    { id: 'open-shifts', label: 'Open shifts' },
    { id: 'callouts', label: 'Last-minute callouts' },
    { id: 'no-shows', label: 'No-shows' },
    { id: 'texting', label: 'Endless texting' },
    { id: 'scheduling', label: 'Scheduling organization' },
    { id: 'coverage', label: 'Coverage gaps' }
  ];

  const caregiverCounts = [
    { value: '1-5', label: '1–5' },
    { value: '6-15', label: '6–15' },
    { value: '16-30', label: '16–30' },
    { value: '31-50', label: '31–50' },
    { value: '50+', label: '50+' }
  ];

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
          <DialogContent className="max-w-[580px] max-h-[90vh] overflow-y-auto p-0 border-0 shadow-2xl backdrop-blur-xl bg-white/95">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="p-8 sm:p-10"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Book a Demo
                </h2>
                <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
                  Tell us a little about your staffing operation and we&apos;ll reach out shortly.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Thanks — we&apos;ll reach out shortly.
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">
                    We received your demo request and will contact you soon.
                  </p>
                  <Button
                    onClick={handleClose}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl h-12 text-base font-medium transition-all duration-200"
                  >
                    Close
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Full Name */}
                  <div className="space-y-3">
                    <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                      className="h-12 px-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-base placeholder:text-gray-400"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Work Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter your work email"
                      disabled={isSubmitting}
                      className="h-12 px-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-base placeholder:text-gray-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter your phone number"
                      disabled={isSubmitting}
                      className="h-12 px-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-base placeholder:text-gray-400"
                    />
                  </div>

                  {/* Caregiver Count */}
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-700">
                      How many caregivers do you currently coordinate? *
                    </Label>
                    <Select
                      value={formData.caregiverCount}
                      onValueChange={(value: string) => setFormData(prev => ({ ...prev, caregiverCount: value }))}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="h-12 px-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-base">
                        <SelectValue placeholder="Select caregiver count" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border border-gray-200 bg-white/95 backdrop-blur-sm">
                        {caregiverCounts.map(count => (
                          <SelectItem key={count.value} value={count.value} className="rounded-lg">
                            {count.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Staffing Challenges */}
                  <div className="space-y-4">
                    <Label className="text-sm font-semibold text-gray-700">
                      Biggest staffing challenge?
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {challenges.map(challenge => (
                        <motion.button
                          key={challenge.id}
                          type="button"
                          onClick={() => handleChallengeToggle(challenge.id)}
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                            formData.staffingChallenges.includes(challenge.id)
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 bg-white/60 hover:border-gray-300 hover:bg-white/80 text-gray-700'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                              formData.staffingChallenges.includes(challenge.id)
                                ? 'border-blue-500 bg-blue-500'
                                : 'border-gray-400'
                            }`}>
                              {formData.staffingChallenges.includes(challenge.id) && (
                                <div className="w-2 h-2 bg-white rounded-full" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{challenge.label}</span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-center"
                    >
                      {error}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-8 py-4 rounded-xl h-14 text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Schedule My Demo'
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
