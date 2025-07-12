// src/indexdb/config-cache.js

import { getAllAssets } from './store-asset.js';

/**
 * This module manages an in-memory cache of the application's configuration assets.
 * It follows the Singleton pattern, ensuring there's only one cache object.
 */

// 1. The cache object itself. It starts empty.
// We export it so other components can access it directly.
export const ConfigCache = {};

// 2. A flag to ensure we only initialize the cache once.
let isInitialized = false;

/**
 * Fetches assets from the database and populates the cache.
 * This function should be called once when the application starts.
 * It's safe to call multiple times; it will only run its logic once.
 * @returns {Promise<void>}
 */
export async function initializeCache() {
    if (isInitialized) {
        return; // Do nothing if already initialized.
    }

    try {
        console.log('PHASE 3: Initializing configuration cache...');
        const assetMap = await getAllAssets(); // Fetches { T: {...}, C: {...}, ... }

        // 3. Populate the cache object with the fetched assets.
        Object.assign(ConfigCache, assetMap);

        isInitialized = true;
        console.log('PHASE 3: Configuration cache is ready.', ConfigCache);

    } catch (error) {
        console.error('PHASE 3: Failed to initialize configuration cache:', error);
    }
}