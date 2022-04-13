const nc = require('next-connect');
const cors = require('cors');
const { db } = require('../../utils/db');


const handler = nc();
handler.use(cors());

handler.post(async (req, res) => {
  try {
      await db.collection('contact').doc('/'+ Math.floor(Math.random()*1000000000) +'/')
      .create({
          ...req.body
      }); 
  } catch (error) {
      return res.status(500).send(error);
  }
});

export default handler;