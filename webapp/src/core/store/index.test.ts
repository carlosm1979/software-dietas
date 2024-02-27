import { buildStore } from ".";
import { search } from "../../modules/searcher/store/reducer";

describe ('search store', () => {
    it('Given app loadeed When search Then call conroller', () => {

        const store = buildStore();
        store.dispatch(search(''));
    
        expect(store.getState().search.loading).toBe(true);
    })
})