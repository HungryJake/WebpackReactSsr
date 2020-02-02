import React from 'react';
import ContentStyle from '../styles/content';
import ResumeMarkdownData from '../../data/resume/resume.md';

export default function ResumeComponent() {
  return (
    <div
      className={ContentStyle.Content}
      dangerouslySetInnerHTML={{ __html: ResumeMarkdownData.__content }}
    ></div>
  );
}
