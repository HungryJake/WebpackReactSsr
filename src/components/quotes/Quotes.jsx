import React from 'react';
import ContentStyle from '../styles/content';
import MarkdownQuotes from '../../data/quotes/quotes.md';

export default function QuotesComponent(props) {
  return (
    <div
      className={ContentStyle.Content}
      dangerouslySetInnerHTML={{ __html: MarkdownQuotes.__content }}
    ></div>
  );
}
