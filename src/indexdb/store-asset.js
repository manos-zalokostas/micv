// src/indexdb/store-asset.js

import { initDB } from './db.js';

// The name of our new object store.
const STORE_NAME_ASSET = 'asset';

/**
 * Saves a key-value pair into the asset store.
 * @param {string} key The key for the asset (e.g., 'T', 'C').
 * @param {object} value The asset object itself.
 */
export async function saveAsset(key, value) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME_ASSET, 'readwrite');
        transaction.onerror = (event) => reject(event.target.error);
        transaction.oncomplete = () => resolve();

        const store = transaction.objectStore(STORE_NAME_ASSET);
        // The object we save must have a 'key' property to match our keyPath.
        store.put({ key: key, value: value });
    });
}

/**
 * Retrieves all assets from the store and transforms them into a
 * convenient key-value map for our cache.
 * @returns {Promise<object>} A promise that resolves to an object like { T: {...}, C: {...} }.
 */
export async function getAllAssets() {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME_ASSET, 'readonly');
        const store = transaction.objectStore(STORE_NAME_ASSET);
        const request = store.getAll();

        request.onsuccess = () => {
            // The DB returns an array of objects: [{key: 'T', value: ...}, {key: 'C', ...}]
            // We transform this into a more useful map: { T: {...}, C: {...} }
            const assetMap = request.result.reduce((map, asset) => {
                map[asset.key] = asset.value;
                return map;
            }, {});
            resolve(assetMap);
        };
        request.onerror = (event) => reject(event.target.error);
    });
}