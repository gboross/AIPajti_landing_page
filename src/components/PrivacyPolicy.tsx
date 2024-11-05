import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { TranslationStrings } from '../i18n/types';

interface PrivacyPolicyProps {
  open: boolean;
  onClose: () => void;
  translations: TranslationStrings;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ open, onClose, translations }) => {
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
      <DialogTitle>{translations.privacyPolicyTitle}</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body2" paragraph>
          Last Updated: January 16, 2024
        </Typography>
        <Typography variant="body2" paragraph>
          AIPajti ("we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal data in compliance with the General Data Protection Regulation (GDPR), as well as other applicable privacy laws and regulations. It applies to all personal data that you provide to us, or that we collect when you use our platform or services.
          By accessing or using our services, you agree to the terms of this Privacy Policy.
        </Typography>
        <Typography variant="body2" paragraph>
          For any questions, please contact us at:
          Email: support@aipajti.com
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Data Controller Information
        </Typography>
        <Typography variant="body2" paragraph>
          AIPajti, operated by SoundCam Productions Kft, is the data controller for the purposes of the GDPR and other applicable data protection laws. Our contact information is:
        </Typography>
        <Typography variant="body2" paragraph>
          Company: SoundCam Productions Kft
        </Typography>
        <Typography variant="body2" paragraph>
          EU VAT Number: HU13580100
        </Typography>
        <Typography variant="body2" paragraph>
          Address: 2364 Ócsa, Üllői utca 48, Pest Megye, Hungary
        </Typography>
        <Typography variant="body2" paragraph>
          Email: support@aipajti.com
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Personal Data We Collect
        </Typography>
        <Typography variant="body2" paragraph>
          We collect and process various types of personal data based on your interaction with AIPajti:
        </Typography>
        <Typography variant="body2" paragraph>
          a. Data you provide directly:
        </Typography>
        <ul>
          <li>Account Information: When you register, we collect your name, email address, username, password, and any other details you provide.</li>
          <li>Contact Details: Email addresses, phone numbers, or other contact information.</li>
          <li>Payment Information: If you make a payment, we may collect your payment details (via Stripe or other processors), billing address, and transaction data.</li>
        </ul>
        <Typography variant="body2" paragraph>
          b. Data we collect automatically:
        </Typography>
        <ul>
          <li>Device and Browser Data: Information such as your IP address, browser type, operating system, and device identifiers.</li>
          <li>Usage Data: Interaction with our platform, including pages visited, time spent on the site, and links clicked.</li>
          <li>Cookies: Data collected through cookies or similar technologies to enhance user experience and analyze site usage. See our [Cookie Policy] for more details.</li>
        </ul>
        <Typography variant="body2" paragraph>
          c. Special Categories of Data: In certain cases, we may process sensitive data such as voice recordings if you use our speech-to-text features. We will always seek explicit consent where applicable.
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Purposes of Processing
        </Typography>
        <Typography variant="body2" paragraph>
          We process personal data for the following purposes:
        </Typography>
        <ul>
          <li>Providing Services: To manage your account, facilitate communication with AIPajti models, and process transactions.</li>
          <li>Payment Processing: We process payments through Stripe. Your payment information is securely handled, and we do not store full credit card details.</li>
          <li>Customer Support: To assist you with issues, inquiries, or complaints.</li>
          <li>Marketing and Communications: With your consent, we may send you promotional offers and service updates.</li>
          <li>Fraud Detection and Security: To ensure platform integrity and protect against unauthorized access.</li>
          <li>Compliance with Legal Obligations: We process data to comply with tax, legal, and regulatory requirements (e.g., anti-money laundering laws).</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          4. Legal Bases for Processing
        </Typography>
        <Typography variant="body2" paragraph>
          We process your personal data based on the following legal grounds under GDPR:
        </Typography>
        <ul>
          <li>Contractual Necessity: To provide services as per our contract with you (e.g., managing your account, facilitating transactions).</li>
          <li>Legal Obligations: To comply with legal requirements, including tax, fraud prevention, and anti-money laundering laws.</li>
          <li>Legitimate Interests: For business purposes such as improving our services, fraud prevention, and marketing (where such interests are not overridden by your rights).</li>
          <li>Consent: Where we rely on consent (e.g., for sending marketing communications), you have the right to withdraw this consent at any time.</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          5. Sharing Your Personal Data
        </Typography>
        <Typography variant="body2" paragraph>
          We share your personal data with third parties under specific circumstances, including:
        </Typography>
        <ul>
          <li>Service Providers: We share data with third-party providers (such as Stripe for payment processing) to facilitate our services.</li>
          <li>Business Transfers: In case of a merger or sale of assets, your data may be transferred to third parties involved in the transaction.</li>
          <li>Legal Compliance: We may share data with law enforcement agencies or regulatory authorities if required by law.</li>
          <li>Third-Party Marketing: We will never sell or share your data with third parties for marketing purposes without your consent.</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          6. International Data Transfers
        </Typography>
        <Typography variant="body2" paragraph>
          We operate globally and may transfer your personal data to countries outside the European Economic Area (EEA), including the United States, where our service providers are located. When such transfers occur, we ensure that appropriate safeguards are in place, such as the use of Standard Contractual Clauses (SCCs) or other mechanisms compliant with the GDPR.
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. Data Retention
        </Typography>
        <Typography variant="body2" paragraph>
          We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including:
        </Typography>
        <ul>
          <li>Account Information: As long as your account is active, or as needed for legitimate business or legal purposes.</li>
          <li>Transaction Data: Retained as required by tax laws, anti-money laundering regulations, and contractual obligations with our payment processors.</li>
          <li>Marketing Data: Retained until you opt-out of receiving communications or withdraw your consent.</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          8. Your Rights Under GDPR
        </Typography>
        <Typography variant="body2" paragraph>
          As a data subject under the GDPR, you have the following rights:
        </Typography>
        <ul>
          <li>Right to Access: Request a copy of your personal data and information about how we process it.</li>
          <li>Right to Rectification: Request corrections to any inaccuracies in your data.</li>
          <li>Right to Erasure (Right to be Forgotten): Request deletion of your data under certain conditions.</li>
          <li>Right to Restriction: Request a limitation on how we process your data in specific circumstances.</li>
          <li>Right to Data Portability: Request a copy of your data in a structured, machine-readable format.</li>
          <li>Right to Object: Object to certain types of data processing, including processing for direct marketing.</li>
          <li>Right to Withdraw Consent: If you provided consent for specific data processing, you may withdraw it at any time.</li>
          <li>Right to Lodge a Complaint: You have the right to lodge a complaint with your local data protection authority, such as the National Authority for Data Protection and Freedom of Information (NAIH) in Hungary, or any relevant authority in your jurisdiction.</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          9. Security Measures
        </Typography>
        <Typography variant="body2" paragraph>
          We take appropriate technical and organizational measures to safeguard your data against unauthorized access, loss, or misuse. These include:
        </Typography>
        <ul>
          <li>Encryption: We encrypt your personal data during transmission using SSL technology.</li>
          <li>Access Control: We restrict access to your data to authorized personnel only.</li>
          <li>Data Anonymization: Where possible, we anonymize data to further protect your privacy.</li>
        </ul>
        <Typography variant="body2" paragraph>
          However, no method of transmission or electronic storage is 100% secure. We encourage you to use strong passwords and avoid sharing your account credentials.
        </Typography>

        <Typography variant="h6" gutterBottom>
          10. Cookies and Tracking Technologies
        </Typography>
        <Typography variant="body2" paragraph>
          We use cookies and similar tracking technologies to enhance your user experience and gather analytics on site usage. For detailed information on how we use cookies and how to manage your preferences, please refer to our [Cookie Policy].
        </Typography>

        <Typography variant="h6" gutterBottom>
          11. Updates to This Privacy Policy
        </Typography>
        <Typography variant="body2" paragraph>
          We may update this Privacy Policy from time to time to reflect changes in our services or legal obligations. The "Last Updated" date at the top of this page indicates when the latest version was published. We will notify you of any significant changes through email or a prominent notice on our platform.
        </Typography>

        <Typography variant="h6" gutterBottom>
          12. Contact Information
        </Typography>
        <Typography variant="body2" paragraph>
          If you have any questions or concerns about this Privacy Policy or your personal data, please contact us at:
        </Typography>
        <Typography variant="body2" paragraph>
          Email: support@aipajti.com
        </Typography>
        <Typography variant="body2" paragraph>
          Address: 2364 Ócsa, Üllői utca 48, Pest Megye, Hungary
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

export default PrivacyPolicy;
