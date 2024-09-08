export const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda u fuck!'),
  };
};


/*

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from 'uuid';

const s3Client = new S3Client();
const ddbClient = DynamoDBDocumentClient.from(new DynamoDB());

const S3_BUCKET_NAME = process.env.abhavnag3-media-bucket;
const DYNAMO_TABLE_NAME = process.env.MediaMetadata;

export const handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  try {
    const body = JSON.parse(event.body);
    console.log("Parsed body:", JSON.stringify(body, null, 2));

    const { filename, contentType, base64Data } = body;

    if (!filename || !contentType || !base64Data) {
      console.log("Missing required fields");
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }

    // Decode base64 data
    const buffer = Buffer.from(base64Data, 'base64');

    // Generate a unique ID for the media
    const mediaId = uuidv4();

    // Store media in S3
    const s3Key = `uploads/${mediaId}-${filename}`;
    await s3Client.send(new PutObjectCommand({
      Bucket: S3_BUCKET_NAME,
      Key: s3Key,
      Body: buffer,
      ContentType: contentType,
    }));

    console.log("Media uploaded to S3");

    // Store metadata in DynamoDB
    const metadata = {
      mediaId,
      filename,
      contentType,
      s3Key,
      uploadDate: new Date().toISOString(),
    };

    await ddbClient.send(new PutCommand({
      TableName: DYNAMO_TABLE_NAME,
      Item: metadata,
    }));

    console.log("Metadata stored in DynamoDB");

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Media uploaded successfully",
        mediaId: mediaId,
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error uploading media", error: error.message }),
    };
  }
};

*/