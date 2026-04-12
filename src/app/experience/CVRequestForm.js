"use client";
import { useState } from 'react';
import styles from './experience.module.css';

export default function CVRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // IMPORTANT: When you have the Formspree ID or Web3Forms key, replace this URL!
    const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID_HERE";
    
    try {
      if (FORM_ENDPOINT.includes("YOUR_FORM_ID_HERE")) {
        setStatus('success');
        return;
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', reason: '' });
      } else {
        alert("Error sending request. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className={styles.cvSection}>
      <h2 className={styles.cvTitle}>Request Full Curriculum Vitae</h2>
      <p className={styles.cvSubtitle}>
        The timeline above highlights key career milestones. For an exhaustive history, including all consultancy roles 
        and technical advisories, request secure access to the full CV below.
      </p>

      {status === 'success' && (
        <div style={{ padding: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px', marginBottom: '20px', borderLeft: '4px solid #28a745' }}>
          <strong>Success!</strong> Your request has been securely routed to Dr. Tochukwu. If approved, you will receive the CV via email shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.cvForm}>
        <div className={styles.formGroup}>
          <input 
            type="text" 
            placeholder="Full Name *" 
            required 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={styles.inputField} 
          />
        </div>
        <div className={styles.formGroup}>
          <input 
            type="email" 
            placeholder="Email Address *" 
            required 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={styles.inputField} 
          />
        </div>
        <div className={styles.formGroup}>
          <textarea 
            placeholder="Reason for requesting CV *" 
            required 
            value={formData.reason}
            onChange={(e) => setFormData({...formData, reason: e.target.value})}
            className={styles.textareaField} 
          />
        </div>
        <button type="submit" className={styles.submitBtn}>
          Request Secure Access
        </button>
      </form>
    </div>
  );
}
