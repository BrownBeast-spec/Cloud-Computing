import { createInterface } from "readline";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

// 1. Setup AWS Connection
const client = new DynamoDBClient({ region: "ap-southeast-2" });
const docClient = DynamoDBDocumentClient.from(client);
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});
const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));
async function main() {
  console.log(":Insert Data into DynamoDB");
  try {
    // 3. Ask user for inputs
    const idInput = await askQuestion("Enter Customer ID (Number): ");
    const name = await askQuestion("Enter Name: ");
    const course = await askQuestion("Enter Course: ");
    const scoreInput = await askQuestion("Enter Score: ");
    const customerId = parseInt(idInput);
    const score = parseInt(scoreInput);

    if (isNaN(customerId)) {
      console.error("Error: Customer ID must be a valid number!");
      rl.close();
      return;
    }

    // 5. Send to AWS
    console.log("Uploading to DynamoDB...");
    
    await docClient.send(new PutCommand({
      TableName: "2023BCD0038",
      Item: {
        customerid: customerId,
        Name: name,
        Course: course,
        Score: score
      }
    }));

    console.log(`Success! Added User ${name} (ID: ${customerId})`);

  } catch (err) {
    console.error("Error uploading data:", err.message);
  } finally {
    rl.close();
  }
}

main();
