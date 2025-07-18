import {initDB} from './database.js';


export default async function (store = 'item') {

    const db = await initDB();

    return {


        /**
         *
         * @param parse
         * @returns {Promise<unknown>}
         */
        async query(parse = null) {

            return new Promise((resolve, reject) => {
                const ts = db.transaction(store, 'readonly');
                const resource = ts.objectStore(store);

                let proc;

                if (['string', 'number'].includes(typeof parse)) proc = resource.get(parse)
                proc = resource.getAll();

                proc.onsuccess = () => {
                    if (typeof parse === 'function') return resolve(parse(proc.result))
                    return resolve(proc.result)
                }

                proc.onerror = (event) => reject(event.target.error);

            });
        },


        /**
         *
         * @param list
         * @returns {Promise<unknown>}
         */
        async queryList(list) {

            return new Promise((resolve, reject) => {

                if (list.length === 0) return resolve([]);

                const ts = db.transaction(store, 'readonly'),
                    resource = ts.objectStore(store),
                    pack = [];

                let count = 0;

                list.forEach(id => {
                    const proc = resource.get(id);

                    proc.onsuccess = () => {
                        if (proc.result) pack.push(proc.result);
                        count++;
                        if (count === list.length) resolve(pack);
                    };

                    proc.onerror = (event) => reject(event.target.error);
                });
            })
        },


        /**
         *
         * @param key
         * @param val
         * @param fn
         * @returns {Promise<unknown>}
         */
        async queryIndex(key = 'section', val = 'communication', fn = x => x) {

            return new Promise((resolve, reject) => {
                const ts = db.transaction(store, 'readonly');
                const resource = ts.objectStore(store);
                const cache = resource.index(key); // Use the index
                const proc = cache.getAll(val); // Query the index

                proc.onsuccess = () => resolve(fn(proc.result));

                proc.onerror = (evt) => reject(evt.target.error);
            });
        },


        /**
         *
         * @param position
         * @returns {Promise<unknown>}
         */
        async queryAdvance(position = 0) {

            return new Promise((resolve, reject) => {
                    const ts = db.transaction(store, 'readonly');
                    const resource = ts.objectStore(store);

                    let cursorAdvanced = false;

                    const proc = resource.openCursor();

                    proc.onsuccess = (event) => {
                        const cursor = event.target.result;

                        if (!position || cursorAdvanced) return resolve(cursor?.value);

                        cursor.advance(position);
                        cursorAdvanced = true;
                    }

                    proc.onerror = (event) => reject(event.target.error);
                }
            );
        },


        /**
         *
         * @param item
         * @returns {Promise<unknown>}
         */
        async cmd(item) {

            return new Promise((resolve, reject) => {

                const ts = db.transaction(store, 'readwrite');
                const resource = ts.objectStore(store);
                resource.put(item);

                ts.oncomplete = () => resolve();

                ts.onerror = (evt) => reject(evt.target.error);
            });
        }

    }

}
