import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { s3Client } from '../../getClient.js';

export const putObject = async (name, body) => {
  try {
    var bucketParams = {
      Bucket: 'pictag',
      Key: `messagePics/${name}`,
      Body: body,
      ACL:'public-read'
    };

    const data = await s3Client.send(new PutObjectCommand(bucketParams));
    console.log(
      'Successfully uploaded object: ' +
        bucketParams.Bucket +
        '/' +
        bucketParams.Key
    );
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};

import { writeFileSync } from 'fs';

export const getImage = async (name) => {
  try {
    var bucketParams = {
      Bucket: 'pictag',
      Key: `messagePics/${name}`,
    };
    const response = await s3Client.send(new GetObjectCommand(bucketParams));
    const data = await streamToString(response.Body);
    console.log(response.Body);
    writeFileSync("./tmp/local-file.jpg", data);
    return data;
  } catch (err) {
    throw err;
  }
};

const streamToString = (stream) => {
    const chunks = [];
    return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        stream.on('error', (err) => reject(err));
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
};