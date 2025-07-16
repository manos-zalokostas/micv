import {initDB} from './database.js';

const STORE_ITEM = 'item';


/**
 *
 * @param item
 * @returns {Promise<unknown>}
 */
export async function save(item) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        // A 'readwrite' transaction is required for any data modification.
        const transaction = db.transaction(STORE_ITEM, 'readwrite');
        transaction.onerror = (event) => reject(event.target.error);
        transaction.oncomplete = () => resolve();

        const store = transaction.objectStore(STORE_ITEM);
        store.put(item);
    });
}


/**
 *
 * @param id
 * @returns {Promise<unknown>}
 */
export async function id(id) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_ITEM, 'readonly');
        const store = transaction.objectStore(STORE_ITEM);
        const request = store.get(id);

        request.onsuccess = () => resolve(request.result);
        request.onerror = (event) => reject(event.target.error);
    });
}


/**
 *
 * @returns {Promise<unknown>}
 */
export async function all() {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_ITEM, 'readonly');
        const store = transaction.objectStore(STORE_ITEM);
        const request = store.getAll();

        request.onsuccess = () => resolve(request.result);
        request.onerror = (event) => reject(event.target.error);
    });
}


/**
 *
 * @param tool
 * @returns {Promise<unknown>}
 */
export async function tool(tool) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_ITEM, 'readonly');
        const store = transaction.objectStore(STORE_ITEM);
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
 *
 * @param section
 * @returns {Promise<unknown>}
 */
export async function section(section) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_ITEM, 'readonly');
        const store = transaction.objectStore(STORE_ITEM);
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
