
import React, { useState } from 'react';
import axios from 'axios';
import './NewsletterSubscription.css';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [typeOfSubscriber, setTypeOfSubscriber] = useState('Public');
  const [apiKey, setApiKey] = useState('');

  const subscribe = async () => {
    try {
      await axios.post(`https://100085.pythonanywhere.com/uxlivinglab/newsletter/v1/${apiKey}/?type=subscribe`, {
        topic,
        subscriberEmail: email,
        typeOfSubscriber
      });
      alert('Subscription successful!');
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  const unsubscribe = async () => {
    try {
      await axios.post(`https://100085.pythonanywhere.com/uxlivinglab/newsletter/v1/${apiKey}/?type=unsubscribe`, {
        topic,
        subscriberEmail: email,
        typeOfSubscriber,
        reasonToUnsubscribe: 'No longer interested'
      });
      alert('Unsubscription successful!');
    } catch (error) {
      console.error('Error unsubscribing:', error);
    }
  };

  return (
    <div className="newsletter-subscription">
      <h1>Newsletter Subscription</h1>
      <input
        type="text"
        placeholder="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        value={typeOfSubscriber}
        onChange={(e) => setTypeOfSubscriber(e.target.value)}
      >
        <option value="Public">Public</option>
        <option value="Existing Client">Existing Client</option>
        <option value="Internal team">Internal team</option>
        <option value="Prospective Client">Prospective Client</option>
        <option value="Sales agent">Sales agent</option>
        <option value="Prospective Sales agent">Prospective Sales agent</option>
      </select>
      <button onClick={subscribe}>Subscribe</button>
      <button onClick={unsubscribe}>Unsubscribe</button>
    </div>
  );
};

export default NewsletterSubscription;
