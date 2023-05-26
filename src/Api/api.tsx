import { Client, Databases, Account, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("646badc9f3da5e35cac5");

export const account = new Account(client);

//Database

export const databases = new Databases(client);

//storage

export const storage = new Storage(client);
