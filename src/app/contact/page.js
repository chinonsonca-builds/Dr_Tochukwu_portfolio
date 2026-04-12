"use client";
import { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    titleGender: '',
    email: '',
    position: '',
    reason: '',
    message: ''
  });
  
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // IMPORTANT: When you have the Formspree ID or Web3Forms key, replace this URL!
    const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID_HERE";
    
    try {
      // In development/test mode without an ID, just fake success so it doesn't crash
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
        setFormData({
          name: '', titleGender: '', email: '', position: '', reason: '', message: ''
        });
      } else {
        alert("There was an error sending your request. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please make sure you are connected to the internet.");
    }
  };

  return (
    <main className={styles.contactContainer}>
      <h1 className={styles.title}>Request a Consultation</h1>
      <p className={styles.subtitle}>
        Please fill out the form below detailing your request. Dr. Tochukwu's team will review your submission and get back to you promptly.
      </p>

      {status === 'success' ? (
        <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', margin: '40px auto 0', maxWidth: '600px' }}>
          <div style={{ fontSize: '5rem', color: '#28a745', marginBottom: '20px', lineHeight: '1' }}>✓</div>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '15px', fontFamily: 'var(--font-heading)' }}>Success!</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Your consultation request has been securely sent. <br/>Dr. Tochukwu's team will review your details and get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className={styles.inputField} 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="titleGender">Title / Gender *</label>
            <select 
              id="titleGender" 
              name="titleGender" 
              className={styles.selectField} 
              required
              value={formData.titleGender}
              onChange={handleChange}
            >
              <option value="" disabled>Select how you wish to be addressed...</option>
              <option value="Mr">Mr. (Male)</option>
              <option value="Ms">Ms. / Mrs. (Female)</option>
              <option value="Dr">Dr.</option>
              <option value="Prof">Prof.</option>
              <option value="Chief">Chief</option>
              <option value="Other">Other / Prefer not to say</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className={styles.inputField} 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="position">Position / Place of Work *</label>
            <input 
              type="text" 
              id="position" 
              name="position"
              placeholder="e.g. Director at World Bank"
              className={styles.inputField} 
              required 
              value={formData.position}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="reason">Reason for Consultation *</label>
            <select 
              id="reason" 
              name="reason" 
              className={styles.selectField} 
              required
              value={formData.reason}
              onChange={handleChange}
            >
              <option value="" disabled>Select a reason...</option>
              <option value="Policy Advisory">Policy Advisory</option>
              <option value="Speaking Engagement">Speaking Engagement</option>
              <option value="Economic Research">Economic Research / Analysis</option>
              <option value="Media Interview">Media Interview</option>
              <option value="General Consultation">General Consultation</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Additional Details (Optional)</label>
            <textarea 
              id="message" 
              name="message" 
              className={styles.textareaField} 
              placeholder="Please provide any additional context..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit Request
          </button>
        </form>
      )}
    </main>
  );
}
