// pages/success.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Success = () => {
  const router = useRouter();
  const { session_id } = router.query;
  const [licenseKey, setLicenseKey] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session_id) {
      fetch(`/api/retrieve-checkout-session?session_id=${session_id}`)
        .then((res) => res.json())
        .then((data) => {
          setLicenseKey(data.license_key);
          setLoading(false);
        });
    }
  }, [session_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <p>Your license key is:</p>
      <code>{licenseKey}</code>
      <p>Please keep it safe.</p>
      <a href="/downloads/yourapp.dmg">Download the App</a>
    </div>
  );
};

export default Success;
