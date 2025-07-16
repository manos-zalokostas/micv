import {StoreAsset} from "/src/indexdb"

export const Cache = {
    asset: null
};


export default {

    async init() {

        if (!Cache.asset) Cache.asset = await StoreAsset.all();

    }

}

