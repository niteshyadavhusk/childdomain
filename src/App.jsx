import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from './components/Form'
import Cookies from 'js-cookie';
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const messageHandler = (event) => {
      console.log('Message received:', event);
      
      if (event.origin !== 'https://parentdomain.onrender.com') return; // Ensure this matches the parent origin

      if (event.data === 'logout') {
        console.log('Logout message received');
        // Remove cookies by setting them to expire
        document.cookie.split(";").forEach((c) => {
          document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        Cookies.set("")
        console.log('Cookies removed');
      } else {
        const cookies = event.data;
        console.log('Cookies from parent:', cookies);
        Cookies.set("data" ,cookies)
      }

      // Send a message back to the parent
      window.opener.postMessage('Cookies processed', 'https://parentdomain.onrender.com'); // Ensure this matches the parent origin
    };

    window.addEventListener('message', messageHandler);

    return () => {
      window.removeEventListener('message', messageHandler);
    };
  }, []);

  useEffect(() => {
    console.log(document.cookie);
  }, []);

  console.log('Component rendered');
  return (
    <Form />
  )
}

export default App
