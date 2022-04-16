const nc = require('next-connect');
const { db } = require('../../utils/db');

const handler = nc();

handler.get(async (req, res) => {
    try {
        const contactRef = await db.collection('subscribes').get();
        res.send(contactRef.docs.map(doc => doc.data()));

    } catch (error) {
        return res.status(500).send(error);
    }
});

export default handler;