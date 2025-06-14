// WhatsAppIcon.js
import React from 'react';

const WhatsAppIcon = () => {
  const phoneNumber = "+972527899570"; // Replace with your number
  const message = " :היי אני מעוניין במוצר" //Custom message
  const appLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  const webLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={appLink}  // Tries to open in the WhatsApp app first
      onClick={(e) => {
        if (!window.navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
          // Use the web link if not on a mobile device
          e.preventDefault();
          window.open(webLink, "_blank", "noopener,noreferrer");
        }
      }}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp Logo" 
        style={{ width: '40px', height: '40px' }}
      />
    </a>
  );
};

export default WhatsAppIcon;
