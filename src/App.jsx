import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from './components/Form'

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const messageHandler = (event) => {
      if (event.origin !== 'http://localhost:59006/Dashboard/Summary') return; // Ensure this matches the parent origin

      if (event.data === 'logout') {
        console.log('Logout message received');
        // Remove cookies by setting them to expire
        document.cookie.split(";").forEach((c) => {
          document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        console.log('Cookies removed');
      } else {
        const cookies = event.data;
        console.log('Cookies from parent:', cookies);
      }

      // Send a message back to the parent
      window.opener.postMessage('Cookies processed', 'http://localhost:59006/Dashboard/Summary'); // Ensure this matches the parent origin
    };

    window.addEventListener('message', messageHandler);

    return () => {
      window.removeEventListener('message', messageHandler);
    };
  }, []);

  console.log(document.cookie);
  console.log("helo")
  return (
    <Form />
  )
}

export default App
