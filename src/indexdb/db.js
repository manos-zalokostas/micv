// database/db.js

let db; // This will hold our single database connection instance.

const DB_NAME = 'myAppContentDB';
const DB_VERSION = 1; // Change this to upgrade the schema

/**
 * Initializes the database connection. Returns a Promise that resolves
 * with the database instance. This is the single source of truth for the DB connection.
 */
export function initDB() {
    return new Promise((resolve, reject) => {
        // If the connection is already open, resolve immediately.
        if (db) {
            return resolve(db);
        }

        console.log('Initializing database...');
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
            console.error(`Database error: ${event.target.errorCode}`);
            reject(event.target.errorCode);
        };

        request.onsuccess = (event) => {
            db = event.target.result;
            console.log(`Database opened successfully.`);
            resolve(db);
        };

        /**
         * This is the master blueprint for your database.
         * It only runs on first creation or when DB_VERSION is incremented.
         */
        request.onupgradeneeded = (event) => {
            const dbInstance = event.target.result;

            // Create the 'items' object store.
            // We'll use a string 'id' as our unique key.
            const itemStore = dbInstance.createObjectStore('items', { keyPath: 'id' });

            // Create an index on the 'name' property to allow for fast searching by name.
            itemStore.createIndex('name', 'name', { unique: false });

            // If you needed another store, you'd create it here.
            // e.g., dbInstance.createObjectStore('categories', { keyPath: 'id' });

            console.log('Database schema created/updated!');
        };
    });
}