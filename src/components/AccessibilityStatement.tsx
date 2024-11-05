import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { TranslationStrings } from '../i18n/types';

interface AccessibilityStatementProps {
  open: boolean;
  onClose: () => void;
  translations: TranslationStrings;
}

const AccessibilityStatement: React.FC<AccessibilityStatementProps> = ({ open, onClose, translations }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="paper"
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: { maxHeight: '80vh' },
      }}
    >
      <DialogTitle>{translations.accessibilityStatementTitle}</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body2" paragraph>
          <strong>Last Updated: October 22, 2024</strong>
        </Typography>

        <Typography variant="body2" paragraph>
          AIPajti is committed to ensuring digital accessibility for all users, regardless of ability. We are dedicated to continually improving the user experience for everyone by applying relevant accessibility standards.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Conformance Status
        </Typography>
        <Typography variant="body2" paragraph>
          Our goal is to adhere as closely as possible to the Web Content Accessibility Guidelines (WCAG 2.2, Level AA), published by the World Wide Web Consortium (W3C). These guidelines help make web content more accessible for people with disabilities.
        </Typography>
        <Typography variant="body2" paragraph>
          Currently, we are in the process of conducting accessibility assessments on our website and developing an improvement plan. This includes evaluating aspects such as correct heading structure, keyboard operability, color contrast, and screen reader support.
        </Typography>
        <Typography variant="body2" paragraph>
          While we are aware that there are areas on our website where we can enhance accessibility, we are committed to finding solutions that will bring all areas of our website to an appropriate level of web accessibility. We plan to conduct comprehensive testing and implement these enhancements as part of our ongoing commitment.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Feedback
        </Typography>
        <Typography variant="body2" paragraph>
          We welcome your feedback on the accessibility of AIPajti. If you encounter any accessibility barriers or have suggestions for improvements, please feel free to contact us via email at: <a href="mailto:support@aipajti.com">support@aipajti.com</a>.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {translations.close}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AccessibilityStatement;