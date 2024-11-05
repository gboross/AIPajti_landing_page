import React from 'react';
import { Helmet } from 'react-helmet-async';
import WorkModes from '../../components/WorkModes';

const WorkModesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Work Modes - AIPajti AI Platform</title>
        <meta name="description" content="Explore AIPajti's flexible work modes: Manager Mode for automated workflows and Advanced Mode for complete control over AI processes." />
        <meta name="keywords" content="AI workflow, automation, manager mode, advanced mode, AI control, workflow automation" />
        <link rel="canonical" href="https://aipajti.com/work-modes" />
      </Helmet>
      <WorkModes />
    </>
  );
};

export default WorkModesPage;