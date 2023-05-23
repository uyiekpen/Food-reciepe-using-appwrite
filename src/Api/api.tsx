import { Client as Appwrite, Databases, Account } from "appwrite";

type ApiProps = {
  sdk: null | any;
  provider: () => any;
  createAccount: any;
};

let api: ApiProps = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let appwrite = new Appwrite();
    appwrite
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("646badc9f3da5e35cac5");
    const account = new Account(appwrite);
    const database = new Databases(appwrite);

    api.sdk = { database, account };
    return api.sdk;
  },

  createAccount: (email: "string", password: number, name: string) => {
    return api.provider().account.create("unique()", email, password, name);
  },
};

export default api;

// .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("646badc9f3da5e35cac5");
