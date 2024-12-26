export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'Dati ricevuti', data: req.body });
  } else {
    res.status(405).json({ message: 'Metodo non consentito' });
  }
}