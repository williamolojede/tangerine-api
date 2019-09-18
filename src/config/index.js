import dotenv from 'dotenv';

dotenv.config();

const {
    PORT = 4200,
    AIRTABLE_API_KEY, 
    AIRTABLE_BASE_ID,
    SIB_API_KEY,
} = process.env;

export const config = {
    AIRTABLE_API_KEY, 
    AIRTABLE_BASE_ID,
    SIB_API_KEY,
    PORT,
}