import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';
import { TranslationStrings } from '../i18n/types';

interface CookiePolicyProps {
  open: boolean;
  onClose: () => void;
  translations: TranslationStrings;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ open, onClose, translations }) => {
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
      <DialogTitle>{translations.cookiePolicyTitle}</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body2" paragraph>
          Last Updated: January 16, 2024
        </Typography>

        <Typography variant="body2" paragraph>
          This Cookie Policy explains how AIPajti ("we", "us", or "our") uses cookies and similar tracking technologies when you visit our website (the "Service"). By using our Service, you consent to the use of cookies as described in this policy.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. What Are Cookies?
        </Typography>
        <Typography variant="body2" paragraph>
          Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit websites. They allow websites to recognize your device and remember your actions and preferences (such as login, language, font size, and other display preferences) over time.
        </Typography>
        <Typography variant="body2" paragraph>
          Cookies are classified into two categories:
        </Typography>
        <ul>
          <li><strong>First-Party Cookies</strong>: These are set directly by the website you are visiting.</li>
          <li><strong>Third-Party Cookies</strong>: These are set by other parties, like analytics services or advertisers, through the website.</li>
        </ul>
        <Typography variant="body2" paragraph>
          Additionally, cookies can be either <strong>session cookies</strong> (which are deleted when you close your browser) or <strong>persistent cookies</strong> (which remain on your device until they expire or are deleted).
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Types of Cookies We Use
        </Typography>

        <Typography variant="body2" paragraph>
          <strong>a. Necessary Cookies</strong>
        </Typography>
        <Typography variant="body2" paragraph>
          These cookies are essential for the functioning of our website and cannot be disabled. They are used for tasks such as maintaining your session and enabling secure login.
        </Typography>
        <Box component="ul" sx={{ paddingLeft: 2 }}>
          <li><strong>Session Management Cookies</strong>: Allow you to remain logged in and access secure areas of the website.</li>
          <li><strong>Authentication Cookies</strong>: Used to verify your identity after login.</li>
        </Box>
        <Typography variant="body2" paragraph>
          <strong>Cookies Used:</strong>
        </Typography>
        <Box sx={{ paddingLeft: 2, paddingBottom: 2 }}>
          <Typography variant="body2">- <strong>session-id:</strong> Keeps track of user sessions (First-party session cookie, expires after session)</Typography>
          <Typography variant="body2">- <strong>auth-token:</strong> Stores authentication details (First-party persistent cookie, expires after 30 days)</Typography>
        </Box>

        <Typography variant="body2" paragraph>
          <strong>b. Functional Cookies</strong>
        </Typography>
        <Typography variant="body2" paragraph>
          These cookies allow the website to remember choices you make, such as your language preferences or customizations, to improve your experience.
        </Typography>
        <Box component="ul" sx={{ paddingLeft: 2 }}>
          <li><strong>Preference Cookies</strong>: Store your settings, such as language and display preferences.</li>
          <li><strong>Survey Cookies</strong>: Track whether you've already responded to a survey pop-up so you're not asked again.</li>
        </Box>
        <Typography variant="body2" paragraph>
          <strong>Cookies Used:</strong>
        </Typography>
        <Box sx={{ paddingLeft: 2, paddingBottom: 2 }}>
          <Typography variant="body2">- <strong>language-preference:</strong> Stores your language preferences (First-party persistent cookie, expires after 7 days)</Typography>
          <Typography variant="body2">- <strong>survey-response:</strong> Tracks whether you've responded to a site survey (First-party persistent cookie, expires after 1 month)</Typography>
        </Box>

        <Typography variant="body2" paragraph>
          <strong>c. Performance and Analytics Cookies</strong>
        </Typography>
        <Typography variant="body2" paragraph>
          We use these cookies to collect information about how visitors use our website, such as which pages are most frequently visited and if visitors are encountering errors. This data helps us improve the website's functionality.
        </Typography>
        <Box component="ul" sx={{ paddingLeft: 2 }}>
          <li><strong>Google Analytics</strong>: Helps us understand user behavior and website performance.</li>
        </Box>
        <Typography variant="body2" paragraph>
          <strong>Cookies Used:</strong>
        </Typography>
        <Box sx={{ paddingLeft: 2, paddingBottom: 2 }}>
          <Typography variant="body2">- <strong>_ga, _gid:</strong> Tracks website usage and generates reports for us (Third-party persistent cookie, expires after 2 years)</Typography>
          <Typography variant="body2">- <strong>_gat:</strong> Limits the amount of data collected by Google Analytics (Third-party session cookie, expires after session)</Typography>
        </Box>

        <Typography variant="body2" paragraph>
          <strong>d. Advertising Cookies</strong>
        </Typography>
        <Typography variant="body2" paragraph>
          Advertising cookies may be used to build a profile of your interests and show you relevant advertisements on other websites. These cookies are set by third-party advertising platforms and networks.
        </Typography>
        <Box component="ul" sx={{ paddingLeft: 2 }}>
          <li><strong>Google Ads Remarketing</strong>: Allows us to show targeted ads to users based on their past interactions with our website.</li>
        </Box>
        <Typography variant="body2" paragraph>
          <strong>Cookies Used:</strong>
        </Typography>
        <Box sx={{ paddingLeft: 2, paddingBottom: 2 }}>
          <Typography variant="body2">- <strong>NID, SID:</strong> Used for Google Ads retargeting and personalization (Third-party persistent cookie, expires after 6 months)</Typography>
        </Box>

        <Typography variant="h6" gutterBottom>
          3. Third-Party Cookies
        </Typography>
        <Typography variant="body2" paragraph>
          Some third-party services on our website may set their own cookies to collect information about your interaction with their content. These third parties have their own cookie and privacy policies, which we recommend you review.
        </Typography>
        <Typography variant="body2" paragraph>
          Examples include:
        </Typography>
        <ul>
          <li><strong>YouTube</strong>: For embedded video content (<a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">YouTube Cookie Policy</a>)</li>
          <li><strong>Google Maps</strong>: For displaying maps and location information (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Maps Privacy Policy</a>)</li>
          <li><strong>Facebook</strong>: For sharing content or logging in through Facebook (<a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer">Facebook Cookie Policy</a>)</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          4. How We Use Cookies
        </Typography>
        <Typography variant="body2" paragraph>
          We use cookies for various purposes, including:
        </Typography>
        <Box component="ul" sx={{ paddingLeft: 2 }}>
          <li><strong>To ensure website functionality</strong>: Without cookies, certain website features would not work properly (e.g., staying logged in).</li>
          <li><strong>To improve user experience</strong>: By storing preferences and previous actions, cookies allow us to tailor the website to your needs.</li>
          <li><strong>For analytics</strong>: To analyze how visitors use our website and improve its performance.</li>
          <li><strong>For advertising</strong>: To display relevant ads based on your interests and past activity.</li>
        </Box>

        <Typography variant="h6" gutterBottom>
          5. Managing Cookies
        </Typography>
        <Typography variant="body2" paragraph>
          You have the right to manage and control cookies. You can do this by:
        </Typography>
        <Box component="ul" sx={{ paddingLeft: 2 }}>
          <li><strong>Blocking Cookies</strong>: You can configure most web browsers to block cookies entirely. However, this may prevent certain parts of our website from working properly.</li>
          <li><strong>Removing Cookies</strong>: You can clear cookies already stored on your device by adjusting your browser settings.</li>
          <li><strong>Controlling Third-Party Cookies</strong>: Many third-party services provide their own tools for managing cookie preferences.</li>
        </Box>
        <Typography variant="body2" paragraph>
          To manage cookies in your browser, follow the instructions provided by the browser manufacturer:
        </Typography>
        <Box component="ul" sx={{ paddingLeft: 2 }}>
          <li><strong>Chrome</strong>: <a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer">Manage Cookies</a></li>
          <li><strong>Firefox</strong>: <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Manage Cookies</a></li>
          <li><strong>Safari</strong>: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Manage Cookies</a></li>
        </Box>

        <Typography variant="h6" gutterBottom>
          6. Changes to This Cookie Policy
        </Typography>
        <Typography variant="body2" paragraph>
          We may update this Cookie Policy from time to time to reflect changes in our use of cookies. Any changes will be posted on this page with the updated "Last Updated" date.
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. Contact Us
        </Typography>
        <Typography variant="body2" paragraph>
          If you have any questions or concerns about our use of cookies, please contact us at:  
          <strong>Email</strong>: <a href="mailto:support@aipajti.com">support@aipajti.com</a><br />
          <strong>Address</strong>: 2364 Ócsa, Üllői utca 48, Pest Megye, Hungary
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

export default CookiePolicy;
