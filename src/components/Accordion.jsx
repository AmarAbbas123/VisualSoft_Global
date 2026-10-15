import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="accordion-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="faq-accordion-item">
            <button
              onClick={() => toggle(idx)}
              className="faq-accordion-header"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              {isOpen ? (
                <ChevronUp size={20} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
              ) : (
                <ChevronDown size={20} style={{ color: 'var(--text-dim)', flexShrink: 0 }} />
              )}
            </button>
            {isOpen && (
              <div className="faq-accordion-body">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
