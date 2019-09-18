import axios from 'axios';

import { config } from '../config';

export const recordInfo = async (info) => {
    const response = await axios({
        method: 'post',
        url: `https://api.airtable.com/v0/${config.AIRTABLE_BASE_ID}/Customer`,
        data: {
            fields: info,
        },
        headers: {
            Authorization: `Bearer ${config.AIRTABLE_API_KEY}`
        }
    });
    return response.data;
}