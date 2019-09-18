import axios from 'axios';

import { config } from '../config';

export const sendEmail = async (email, firstName) => {
    const response = await axios({
        method: 'post',
        url: 'https://api.sendinblue.com/v3/smtp/email',
        data: {
            to: [{ email }],
            templateId: 5,
            params: {
                email,
                firstName,
            }
        },
        headers: {
            'api-key': config.SIB_API_KEY,
        }
    });
    return response.data;
}