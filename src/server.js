import express from 'express';
import bodyPaser from 'body-parser';
import cors from 'cors';

import { config } from './config';
import { sendEmail, recordInfo } from './utils';

const app = express();

app.use(cors());
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));

app.post('/early-access', async (req, res) => {
    try {
        await recordInfo(req.body);
        await sendEmail(req.body.email, req.body.firstName);

        res.status(201).send({
            status: 'success',
            message: 'Thank you, you have been added to our early acccess list.'
        })
    } catch(err) {
        res.status(500).send({
            status: 'fail',
            message: 'Internal server error, we\'ll fix this shortly.'
        })
    }
});

app.listen(config.PORT, () => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
});