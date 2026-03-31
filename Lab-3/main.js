import { DynamoDBClient, CreateTableCommand, DeleteTableCommand, waitUntilTableExists } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "us-east-1" });
const docClient = DynamoDBDocumentClient.from(client);
const tableName = "TaskTable";

async function createTable() {
  console.log("Creating table...");
  try {
    await client.send(new CreateTableCommand({
      TableName: tableName,
      KeySchema: [{ AttributeName: "TaskId", KeyType: "HASH" }], // Partition Key
      AttributeDefinitions: [{ AttributeName: "TaskId", AttributeType: "S" }], // S = String
      BillingMode: "PAY_PER_REQUEST" // On-demand pricing
    }));
    
    // Wait until table is actually ready to use
    console.log("Waiting for table to become active...");
    await waitUntilTableExists({ client, maxWaitTime: 60 }, { TableName: tableName });
    console.log("Table created!");
  } catch (err) {
    if (err.name === "ResourceInUseException") console.log("Table already exists.");
    else console.error(err);
  }
}

async function modifyField() {
  // First, let's insert a dummy item to modify
  await docClient.send(new PutCommand({
    TableName: tableName,
    Item: { TaskId: "task_01", Status: "Pending" }
  }));

  console.log("Modifying field...");
  try {
    const response = await docClient.send(new UpdateCommand({
      TableName: tableName,
      Key: { TaskId: "task_01" },
      // UpdateExpression: defines what to modify
      UpdateExpression: "set #s = :newStatus", 
      // ExpressionAttributeNames: handles reserved words (optional but good practice)
      ExpressionAttributeNames: { "#s": "Status" }, 
      // ExpressionAttributeValues: injects the actual value
      ExpressionAttributeValues: { ":newStatus": "Completed" }, 
      ReturnValues: "ALL_NEW"
    }));
    console.log("Updated Item:", response.Attributes);
  } catch (err) {
    console.error("Error updating item:", err);
  }
}

async function deleteTable() {
  console.log("Deleting table...");
  try {
    await client.send(new DeleteTableCommand({ TableName: tableName }));
    console.log("Table deleted!");
  } catch (err) {
    console.error("Error deleting table:", err);
  }
}

// Run the sequence
async function run() {
  await createTable();
  await modifyField();
  // Uncomment below to clean up
  // await deleteTable(); 
}

run();
