import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb"; 
const client = new DynamoDBClient({}); 

async function checkTables() {
  try {
    const data = await client.send(new ListTablesCommand({}));
    console.log("Current Region:", await client.config.region());
    console.log("Tables found:", data.TableNames);
  } catch (err) {
    console.error("Error:", err);
  }
}

checkTables();
