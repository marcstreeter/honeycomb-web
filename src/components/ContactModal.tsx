import Button from '@components/Button';
import { Alert, Box, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type React from 'react';
import { useId, useState } from 'react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  preferredDate: Date | null;
  message: string;
}

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const titleId = useId();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    preferredDate: null,
    message: '',
  });

  const [submissionState, setSubmissionState] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'error';
    message?: string;
  }>({ status: 'idle' });

  const handleInputChange =
    (field: keyof Omit<ContactFormData, 'preferredDate'>) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({
      ...prev,
      preferredDate: date,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmissionState({ status: 'submitting' });

    try {
      // Simulate API call - replace with actual submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, randomly succeed or fail
      const success = Math.random() > 0.3;

      if (success) {
        setSubmissionState({
          status: 'success',
          message: "Thank you! We'll contact you soon to schedule your appointment.",
        });
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          preferredDate: null,
          message: '',
        });
      } else {
        setSubmissionState({
          status: 'error',
          message: 'Sorry, there was an error submitting your request. Please try again.',
        });
      }
    } catch (_error) {
      setSubmissionState({
        status: 'error',
        message: 'Sorry, there was an error submitting your request. Please try again.',
      });
    }
  };

  const handleClose = () => {
    setSubmissionState({ status: 'idle' });
    onClose();
  };

  const isSubmitting = submissionState.status === 'submitting';
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1); // Tomorrow

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        aria-labelledby={titleId}
        disableScrollLock
      >
        <DialogTitle id={titleId} sx={{ fontWeight: 'bold' }}>
          Get Your Free Consultation
        </DialogTitle>
        <DialogContent>
          {submissionState.status === 'success' || submissionState.status === 'error' ? (
            <Box sx={{ py: 2 }}>
              <Alert
                severity={submissionState.status === 'success' ? 'success' : 'error'}
                sx={{ mb: 2 }}
              >
                {submissionState.message}
              </Alert>
              {submissionState.status === 'success' && (
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    onClick={handleClose}
                    sx={{
                      backgroundColor: 'var(--color-blue)',
                      color: 'var(--color-white)',
                      '&:hover': { backgroundColor: 'var(--color-dark-blue)' },
                    }}
                  >
                    Close
                  </Button>
                </Box>
              )}
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit} sx={{ py: 1 }}>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange('firstName')}
                  required
                  disabled={isSubmitting}
                  slotProps={{
                    htmlInput: {
                      autoComplete: 'given-name',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange('lastName')}
                  required
                  disabled={isSubmitting}
                  slotProps={{
                    htmlInput: {
                      autoComplete: 'family-name',
                    },
                  }}
                />
              </Box>

              <TextField
                fullWidth
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                required
                disabled={isSubmitting}
                sx={{ mb: 2 }}
                slotProps={{
                  htmlInput: {
                    autoComplete: 'tel',
                  },
                }}
              />

              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                required
                disabled={isSubmitting}
                sx={{ mb: 2 }}
                slotProps={{
                  htmlInput: {
                    autoComplete: 'email',
                  },
                }}
              />

              <TextField
                fullWidth
                label="Address"
                value={formData.address}
                onChange={handleInputChange('address')}
                required
                disabled={isSubmitting}
                sx={{ mb: 2 }}
                slotProps={{
                  htmlInput: {
                    autoComplete: 'street-address',
                  },
                }}
              />

              <DatePicker
                label="Preferred Appointment Date"
                value={formData.preferredDate}
                onChange={handleDateChange}
                minDate={minDate}
                disabled={isSubmitting}
                sx={{ mb: 2, width: '100%' }}
                slotProps={{
                  textField: {
                    required: true,
                    fullWidth: true,
                  },
                }}
              />

              <TextField
                fullWidth
                label="Message (Optional)"
                multiline
                rows={3}
                value={formData.message}
                onChange={handleInputChange('message')}
                disabled={isSubmitting}
                sx={{ mb: 3 }}
                placeholder="Tell us about your project or any specific requirements..."
              />

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    backgroundColor: 'var(--color-blue)',
                    color: 'var(--color-white)',
                    '&:hover': { backgroundColor: 'var(--color-dark-blue)' },
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </LocalizationProvider>
  );
};

export default ContactModal;
