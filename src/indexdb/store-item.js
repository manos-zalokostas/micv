// src/indexdb/store-item.js

import { initDB } from './db.js';

// The name of our object store, to avoid typos.
const STORE_NAME = 'item';

/**
 * Saves (adds or updates) an item in the database.
 * Uses .put() which is an "upsert" - it will create a new item or
 * overwrite an existing one with the same primary key. Perfect for seeding.
 * @param {object} item The item object to save.
 */
export async function saveItem(item) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        // A 'readwrite' transaction is required for any data modification.
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        transaction.onerror = (event) => reject(event.target.error);
        transaction.oncomplete = () => resolve();

        const store = transaction.objectStore(STORE_NAME);
        store.put(item);
    });
}

/**
 * Retrieves a single item by its primary key (the 'id' property).
 * @param {string} id The ID of the item to retrieve.
 */
export async function getItemById(id) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(id);

        request.onsuccess = () => resolve(request.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

/**
 * Retrieves all items from the store.
 */
export async function getAllItems() {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();

        request.onsuccess = () => resolve(request.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

/**
 * Retrieves items that have a specific tool in their 'tools' array.
 * Uses the 'tools' multiEntry index for high performance.
 * @param {string} tool The tool to search for.
 */
export async function getItemsByTool(tool) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const index = store.index('tools'); // Use the index
        const request = index.getAll(tool); // Query the index

        request.onsuccess = () => {
            // Transform data to match the old function's output
            const pack = request.result.map(item => [item.id, item.title]);
            resolve(pack);
        };
        request.onerror = (event) => reject(event.target.error);
    });
}

/**
 * Retrieves items belonging to a specific section.
 * Uses the 'section' index for high performance.
 * @param {string} section The section to search for.
 */
export async function getItemsBySection(section) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const index = store.index('section'); // Use the index
        const request = index.getAll(section); // Query the index

        request.onsuccess = () => {
            // Transform data to match the old function's output
            const pack = request.result.map(item => [item.id, item.title]);
            resolve(pack);
        };
        request.onerror = (event) => reject(event.target.error);
    });
}

// NOTE: We will add more functions here later as we need them,
// like `getItemsByDomain`, etc. This is a great starting set.