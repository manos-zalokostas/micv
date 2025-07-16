// src/indexdb/db.js

/**
 * This file handles the core database connection and schema definition.
 * It ensures we only have one connection open at a time.
 */

// Define constants for our database with your naming conventions.
const DB_VERSION = 2; // <-- UPDATED: Incremented to trigger the upgrade.
const DB_NAME = 'micvdb';
const STORE_ITEM = 'item'; // Renamed for clarity
const STORE_ASSET = 'asset'; // The name for our new store

// A module-level variable to hold the database connection instance.
let database;

/**
 * Initializes and opens the database connection.
 * Returns a Promise that resolves with the database instance.
 */
export function initDB() {
    return new Promise((resolve, reject) => {
        // If the connection is already open, resolve the promise with it immediately.
        if (database) return resolve(database);

        console.log('Opening database connection...');
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        // This event handles errors during the connection process.
        request.onerror = (event) => {
            console.error(`Database error: ${event.target.error}`);
            reject(`Database error: ${event.target.error}`);
        };

        // This event fires when the connection is successful.
        request.onsuccess = (event) => {
            database = event.target.result; // Store the connection instance.
            console.log(`Database "${DB_NAME}" opened successfully to version ${DB_VERSION}.`);
            resolve(database);
        };

        /**
         * This event is critical. It only runs when the database is first created
         * OR when the DB_VERSION number above is increased.
         */
        request.onupgradeneeded = (event) => {
            const dbInstance = event.target.result;
            console.log(`Upgrading database to version ${DB_VERSION}...`);

            // Check if the 'item' store already exists from version 1.
            if (!dbInstance.objectStoreNames.contains(STORE_ITEM)) {
                console.log('Creating "item" object store...');
                const itemStore = dbInstance.createObjectStore(STORE_ITEM, {keyPath: 'id'});
                itemStore.createIndex('domain', 'domain', {unique: false});
                itemStore.createIndex('section', 'section', {unique: false});
                itemStore.createIndex('category', 'category', {unique: false});
                itemStore.createIndex('title', 'title', {unique: false});
                itemStore.createIndex('tools', 'tools', {unique: false, multiEntry: true});
            }

            // <-- NEW: Add the new 'asset' store.
            // We will add a check to make sure we don't try to create it if it already exists.
            if (!dbInstance.objectStoreNames.contains(STORE_ASSET)) {
                console.log('Creating "asset" object store...');
                // We'll use 'key' as the primary key for this simple key-value store.
                dbInstance.createObjectStore(STORE_ASSET, {keyPath: 'key'});
            }

            console.log('Database upgrade complete.');
        };
    });
}