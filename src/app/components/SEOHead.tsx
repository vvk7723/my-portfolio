import React, { useEffect } from 'react';
import personalInfo from '@/data/personalInfo.json';

const SEOHead: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = `${personalInfo.name} - ${personalInfo.role} | Portfolio`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', personalInfo.summary);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'Full-Stack Developer, React, Node.js, ERP Systems, Web Development, Portfolio, Vivek Patel'
    );

    // Update meta author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', personalInfo.name);
  }, []);

  return null;
};

export default SEOHead;
