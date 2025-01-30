// Import Appwrite SDK modules
import { Client, Account, Databases, Storage } from "appwrite";

// Initialize Appwrite Client
const client = new Client();

// Set up the Appwrite Client with your credentials
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("6797a5df003dcf6644ac"); // Replace with your Project ID

// Export services for reuse across your app
const account = new Account(client); // For authentication
const databases = new Databases(client); // For database interactions
const storage = new Storage(client); // For file uploads

export { client, account, databases, storage };
