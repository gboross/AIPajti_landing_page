import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { TranslationStrings } from '../i18n/types';

interface TermsOfServiceProps {
  open: boolean;
  onClose: () => void;
  translations: TranslationStrings;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ open, onClose, translations }) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

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
      <DialogTitle>{translations.termsOfServiceTitle}</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body2" paragraph>
          {translations.lastUpdated} Last update: {currentDate}
        </Typography>
        <Typography variant="body2" paragraph>
          {translations.termsIntro}
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to AIPajti, a comprehensive platform offering AI-based services that integrate and consolidate various APIs across text, video, audio, and database functionalities, delivering advanced language model services (LLMs) and enabling users to generate complex tasks through a customized Manager Model. AIPajti operates under the principles of a Software-as-a-Service (SaaS) model. By accessing or using the AIPajti application ("App" or "Services") provided by SoundCam Productions Kft ("We," "Our," or "Us"), you ("User" or "You") agree to comply with these Terms and Conditions ("Agreement"). This Agreement outlines the rights and responsibilities related to your use of AIPajti.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Operator Information
        </Typography>
        <Typography variant="body2" paragraph>
          The AIPajti app is operated by: SoundCam Productions Kft,
          Registered Company Name: SoundCam Productions Korlátolt Felelősségű Társaság,
          Company Registration Number: 13-09-211186,
          VAT Number: 13580100-2-13,
          EU VAT Number: HU13580100,
          Registered Address: 2364 Ócsa, Üllői utca 48, Hungary,
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Eligibility and Acceptance of Terms
        </Typography>
        <Typography variant="body2" paragraph>
          2.1 Eligibility: To use AIPajti, you must be at least 18 years old or have legal parental or guardian consent. By using our Services, you confirm that you meet these criteria.
        </Typography>
        <Typography variant="body2" paragraph>
          2.2 Acceptance: By accessing or using AIPajti, you accept these Terms and Conditions and agree to abide by all applicable laws and regulations. If you do not agree with any part of this Agreement, you must stop using the Services immediately.
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Description of Services
        </Typography>
        <Typography variant="body2" paragraph>
          AIPajti is a comprehensive platform designed to unify and provide AI-driven services. The Services integrate various APIs to facilitate the generation of text, video, audio, and database functionalities through large language models (LLMs). AIPajti acts as an intermediary between users and third-party service providers, managing complex tasks through our proprietary Manager Model.
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Service Availability
        </Typography>
        <Typography variant="body2" paragraph>
          4.1 Access to Services: We will endeavor to ensure that the Services are available 24/7, but we do not guarantee uninterrupted access to AIPajti. Downtime may occur due to maintenance, updates, or other technical issues. We reserve the right to modify or discontinue any aspect of the Services at any time.
        </Typography>
        <Typography variant="body2" paragraph>
          4.2 Changes and Updates: We reserve the right to update, modify, or remove features of the Services at our discretion. Such updates may occur without prior notice. Any changes to these Terms and Conditions will be communicated to users either by email or through in-app notifications.
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. License to Use
        </Typography>
        <Typography variant="body2" paragraph>
          5.1 Grant of License: Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use the Services for your personal or business purposes.
        </Typography>
        <Typography variant="body2" paragraph>
          5.2 Restrictions: You agree not to:
        </Typography>
        <ul>
          <li>Reverse engineer, decompile, disassemble, or attempt to discover the source code of AIPajti.</li>
          <li>Use the Services for illegal activities, including but not limited to the generation of harmful, defamatory, or fraudulent content.</li>
          <li>Use the Services in any way that violates the privacy or intellectual property rights of others.</li>
          <li>Share, sublicense, or resell access to the Services without our written consent.</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          6. Data Collection and Privacy
        </Typography>
        <Typography variant="body2" paragraph>
          AIPajti collects personal and usage data to enhance the quality of services provided. The use of your data is governed by our Privacy Policy, in accordance with the General Data Protection Regulation (GDPR). For details on how we collect, use, and protect your data, please review our [Privacy Policy](insert link).
        </Typography>
        <Typography variant="body2" paragraph>
          6.2 EU GDPR Compliance: As per GDPR, you have rights regarding your personal data, including the right to access, correct, or delete your data. By using AIPajti, you consent to the collection and processing of your data for the purposes outlined in our Privacy Policy. You can withdraw your consent at any time by contacting our support team.
        </Typography>
        <Typography variant="body2" paragraph>
          6.3 Third-Party Services: AIPajti integrates with third-party APIs and services. When using third-party services, their respective privacy policies and terms of service apply. We are not responsible for the data practices of third-party services.
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. Intellectual Property Rights
        </Typography>
        <Typography variant="body2" paragraph>
          7.1 Ownership: All content, trademarks, and materials available on AIPajti, including but not limited to text, software, graphics, images, and video, are the property of SoundCam Productions Kft or its licensors. You agree not to copy, modify, reproduce, or distribute any content without explicit permission.
        </Typography>
        <Typography variant="body2" paragraph>
          7.2 User-Generated Content: You retain ownership of the content you create or input into AIPajti. However, by using our Services, you grant us a non-exclusive, worldwide, royalty-free, transferable license to use, store, and process your content for the purpose of providing the Services. We may retain anonymized versions of your data to improve our Services.
        </Typography>

        <Typography variant="h6" gutterBottom>
          8. Fees and Payment Terms
        </Typography>
        <Typography variant="body2" paragraph>
          8.1 Service Fees: Certain features of AIPajti require a subscription fee or pay-per-use charge. The applicable fees are detailed on our pricing page. All payments are processed securely through third-party payment processors, and you are responsible for any applicable taxes.
        </Typography>
        <Typography variant="body2" paragraph>
          8.2 Payment Terms: Payments for Services are due at the beginning of each billing cycle. Failure to pay may result in suspension or termination of your account. Subscription fees are non-refundable unless explicitly stated otherwise. We reserve the right to adjust pricing at any time, with reasonable notice provided to users.
        </Typography>
        <Typography variant="body2" paragraph>
          8.3 Refunds: Refunds are not generally offered, except in the event of service errors or malfunction as determined solely by SoundCam Productions Kft. If you believe you are eligible for a refund, please contact our support team.
        </Typography>

        <Typography variant="h6" gutterBottom>
          9. Liability and Disclaimer
        </Typography>
        <Typography variant="body2" paragraph>
          9.1 No Warranty: AIPajti is provided "as is" and "as available," without any warranties, either express or implied. We do not guarantee that the Services will be error-free or that the output generated through AIPajti will be accurate or fit for any particular purpose. Users are responsible for verifying the accuracy of the content generated through our Services.
        </Typography>
        <Typography variant="body2" paragraph>
          9.2 Limitation of Liability: To the fullest extent permitted by law, SoundCam Productions Kft shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, even if advised of the possibility of such damages. Our total liability to any user shall not exceed the total amount paid by the user in the preceding 12 months.
        </Typography>

        <Typography variant="h6" gutterBottom>
          10. Termination and Suspension
        </Typography>
        <Typography variant="body2" paragraph>
          10.1 Termination by User: You may terminate your account at any time by contacting our support team. Upon termination, all rights granted under these Terms will immediately cease.
        </Typography>
        <Typography variant="body2" paragraph>
          10.2 Termination by Us: We reserve the right to suspend or terminate your access to AIPajti if you breach these Terms, engage in fraudulent or illegal activities, or fail to comply with applicable laws. We may also terminate the Services at our discretion, providing reasonable notice to users.
        </Typography>
        <Typography variant="body2" paragraph>
          10.3 Effect of Termination: Upon termination, your access to the Services will be revoked, and any data associated with your account may be deleted, unless retention is required by law.
        </Typography>

        <Typography variant="h6" gutterBottom>
          11. Indemnification
        </Typography>
        <Typography variant="body2" paragraph>
          You agree to indemnify and hold harmless SoundCam Productions Kft, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, damages, liabilities, costs, or expenses (including legal fees) arising out of your use of the Services, your violation of these Terms, or your violation of any rights of a third party.
        </Typography>

        <Typography variant="h6" gutterBottom>
          12. Governing Law and Dispute Resolution
        </Typography>
        <Typography variant="body2" paragraph>
          12.1 Governing Law: This Agreement shall be governed by and construed in accordance with Hungarian law, and any disputes arising from this Agreement shall be subject to the jurisdiction of Hungarian courts.
        </Typography>
        <Typography variant="body2" paragraph>
          12.2 EU Regulations: AIPajti complies with applicable EU regulations, including the General Data Protection Regulation (GDPR), e-Commerce Directive, and other relevant laws. In case of conflicts between these Terms and EU laws, EU laws will prevail.
        </Typography>
        <Typography variant="body2" paragraph>
          12.3 Dispute Resolution: In the event of any dispute arising out of or relating to these Terms, the parties shall first attempt to resolve the matter amicably through good faith negotiations. If a resolution is not reached, the dispute may be referred to arbitration in Hungary, in accordance with Hungarian arbitration rules.
        </Typography>

        <Typography variant="h6" gutterBottom>
          13. Amendments and Modifications
        </Typography>
        <Typography variant="body2" paragraph>
          We may modify these Terms from time to time by posting the updated version on our website. Your continued use of AIPajti after the effective date of the revised Terms constitutes your acceptance of the changes. If you do not agree with the revised Terms, you must discontinue your use of the Services.
        </Typography>

        <Typography variant="h6" gutterBottom>
          14. Severability
        </Typography>
        <Typography variant="body2" paragraph>
          If any provision of these Terms is found to be unenforceable or invalid under applicable law, the remaining provisions shall remain in full force and effect.
        </Typography>

        <Typography variant="h6" gutterBottom>
          15. Contact Information
        </Typography>
        <Typography variant="body2" paragraph>
          For questions regarding these Terms, please contact us at:
          Email: support@aipajti.com
          Mailing Address: SoundCam Productions Kft, 2364 Ócsa, Üllői utca 48, Hungary
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

export default TermsOfService;
