import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

// Ensure this matches your region (Sydney)
const client = new DynamoDBClient({ region: "ap-southeast-2" });
const docClient = DynamoDBDocumentClient.from(client);

async function insertValue() {
  try {
    const command = new PutCommand({
      TableName: "2023BCD0038",
      Item: {
        customerid: 103, 
        Name: "Harsh Chauhan",
        Course: "Cloud Computing",
        Score: 97
      },
    });

    await docClient.send(command);
    console.log("Success: Value inserted to 2023BCD0038!");
    
  } catch (err) {
    console.error("Error:", err);
  }
}

insertValue();
