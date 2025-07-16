
import { initDB } from './database.js';

// The name of our new object store.
const STORE_NAME_ASSET = 'asset';


/**
 *
 * @param key
 * @param value
 * @returns {Promise<unknown>}
 */
export async function save(key, value) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME_ASSET, 'readwrite');
        transaction.onerror = (event) => reject(event.target.error);
        transaction.oncomplete = () => resolve();

        const store = transaction.objectStore(STORE_NAME_ASSET);
        store.put({ key: key, value: value });
    });
}


/**
 *
 * @returns {Promise<unknown>}
 */
export async function all() {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME_ASSET, 'readonly');
        const store = transaction.objectStore(STORE_NAME_ASSET);
        const request = store.getAll();

        request.onsuccess = () => {
            const assetMap = request.result.reduce((map, asset) => {
                map[asset.key] = asset.value;
                return map;
            }, {});
            resolve(assetMap);
        };
        request.onerror = (event) => reject(event.target.error);
    });
}