import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Supercharge Your AI Workflow?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied users and experience the power of AIPajti today.</p>
        <a href="#" className="btn bg-white text-gray-800 hover:bg-gray-100 text-lg">
          Get Started for Free
        </a>
      </div>
    </section>
  );
};

export default CTA;