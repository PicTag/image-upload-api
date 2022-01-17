import dotenv from 'dotenv';
dotenv.config();

import { S3 } from "@aws-sdk/client-s3";

const s3Client = new S3({
    endpoint: "https://sfo3.digitaloceanspaces.com",
    region: "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export { s3Client };