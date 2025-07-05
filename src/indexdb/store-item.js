// database/itemStore.js

import { initDB } from './db.js';

const STORE_NAME = 'items';

/**
 * Adds or updates an item in the store.
 * IndexedDB's `put` method conveniently handles both creating and updating.
 * @param {object} item The item to add/update. Must have an 'id' property.
 */
export async function saveItem(item) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const objectStore = transaction.objectStore(STORE_NAME);
        const request = objectStore.put(item); // .put() is great for create/update

        transaction.oncomplete = () => resolve(item);
        transaction.onerror = (event) => reject(`Error saving item: ${event.target.error}`);
    });
}

/**
 * Retrieves an item by its ID.
 * @param {string} id The ID of the item to retrieve.
 */
export async function getItemById(id) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const objectStore = transaction.objectStore(STORE_NAME);
        const request = objectStore.get(id);

        request.onsuccess = () => resolve(request.result); // Returns the item or undefined
        request.onerror = (event) => reject(`Error getting item: ${event.target.error}`);
    });
}

/**
 * Retrieves all items from the store.
 */
export async function getAllItems() {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const objectStore = transaction.objectStore(STORE_NAME);
        const request = objectStore.getAll(); // Simple and effective!

        request.onsuccess = () => resolve(request.result); // Returns an array of all items
        request.onerror = (event) => reject(`Error getting all items: ${event.target.error}`);
    });
}