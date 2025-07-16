import {StoreItem, StoreAsset} from "./"
import DATA, {C, D, S, T} from "/src/indexdb/_data";

export default {

    async init() {

        try {

            console.log('PHASE 2: Checking database status...');
            const items = await StoreItem.all();

            if (items.length > 0) return;

            console.log('PHASE 2: Database is empty. Seeding "item" and "asset" stores...');

            await Promise.all(DATA.map(item => StoreItem.save(item)));
            console.log(` > ${DATA.length} items saved.`);

            await Promise.all([
                StoreAsset.save('T', T),
                StoreAsset.save('C', C),
                StoreAsset.save('D', D),
                StoreAsset.save('S', S)
            ]);

        } catch (error) {
            console.error('PHASE 2: An error occurred during database seeding:', error);
        }
    }
}
