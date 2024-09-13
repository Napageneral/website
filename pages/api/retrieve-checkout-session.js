// pages/api/retrieve-checkout-session.js
export default async (req, res) => {
    const { session_id } = req.query;
  
    try {
      const response = await fetch(`https://yourbackend.com/checkout-session?session_id=${session_id}`);
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  