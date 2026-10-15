import React from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';

export default function ConsultModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          aria-label="Close Modal"
        >
          <X size={22} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className="icon-box-blur" style={{ margin: '0 auto 16px auto' }}>
            <div className="icon-blur-halo halo-brand-blue" />
            <Sparkles size={24} style={{ color: 'var(--brand-blue)' }} />
          </div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>
            Scope Your Architecture
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
            Schedule a technical session directly with a VisualSoft Solution Architect.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
            alert('Thank you! A VisualSoft Solution Architect has reserved your slot and will reach out shortly.');
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Full Name</label>
            <input required type="text" placeholder="Sarah Jenkins" className="glass-input" />
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Work Email</label>
            <input required type="email" placeholder="sarah@company.com" className="glass-input" />
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Domain of Interest</label>
            <select className="glass-input" style={{ background: '#0a122e' }}>
              <option>AI-Enabled Custom Software Development</option>
              <option>AI-Enabled Embedded System Design</option>
              <option>Enterprise AI Agents & LLMs</option>
              <option>24/7 Managed IT & Cloud Operations</option>
            </select>
          </div>
          <button type="submit" className="glass-button-primary" style={{ width: '100%', marginTop: '8px' }}>
            <span>Confirm & Reserve Call</span>
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
