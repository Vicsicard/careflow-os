'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://api.careflowos.com'}/demo-request`, {
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
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Book a Demo
          </DialogTitle>
          <p className="text-gray-600 mt-2">
            Tell us a little about your staffing operation and we&apos;ll reach out shortly.
          </p>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Thanks — we&apos;ll reach out shortly.
            </h3>
            <p className="text-gray-600">
              We received your demo request and will contact you soon.
            </p>
            <Button onClick={handleClose} className="mt-6">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Work Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your work email"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="Enter your phone number"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label>How many caregivers do you currently coordinate? *</Label>
              <Select
                value={formData.caregiverCount}
                onValueChange={(value: string) => setFormData(prev => ({ ...prev, caregiverCount: value }))}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select caregiver count" />
                </SelectTrigger>
                <SelectContent>
                  {caregiverCounts.map(count => (
                    <SelectItem key={count.value} value={count.value}>
                      {count.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Biggest staffing challenge?</Label>
              <div className="space-y-3">
                {challenges.map(challenge => (
                  <div key={challenge.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={challenge.id}
                      checked={formData.staffingChallenges.includes(challenge.id)}
                      onCheckedChange={() => handleChallengeToggle(challenge.id)}
                      disabled={isSubmitting}
                    />
                    <Label htmlFor={challenge.id} className="text-sm font-normal">
                      {challenge.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Schedule My Demo'
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
