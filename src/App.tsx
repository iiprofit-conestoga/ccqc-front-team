import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to My App!</h1>
      <p style={styles.paragraph}>
        This is a simple welcome page created with React and Vite. 
        You can navigate through the application using the menu.
      </p>
      <p style={styles.paragraph}>
        Enjoy exploring the features!
      </p>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
  },
};

export default Welcome;
