// src/indexdb/index.js

/**
 * This file acts as the public API for the entire database module.
 * It imports functions from other files in this folder and re-exports them
 * from a single, clean entry point.
 */

// We keep the export for our item-related functions.
export * from './store-item.js';

// We add a new line to also export our asset-related functions.
export * from './store-asset.js'; // <-- ADD THIS LINE