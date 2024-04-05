import { buildStore } from ".";
import { makeSearch } from "../../modules/searcher/store/reducer";
import { mockRest } from "../../test-utils/mockRest";
import EdamanController from "../controllers/edaman/edamanController";
jest.mock('../controllers/edaman/edamanController');


describe ('search store', () => {
    it('search store initial state', () => {
        const store = buildStore();

        expect(store.getState().search.loading).toBe(false);
        expect(store.getState().search.error).toBe(null);
        expect(store.getState().search.items).toEqual([]);
    })


    it('Given app loaded When search Then call controller', () => {       
        const mockSearch = jest.fn(() => Promise.resolve({items: []}))

        jest.mock('../controllers/edaman/edamanController', () => {
            return {
                __esModule: true,
                default: jest.fn().mockImplementation(() => ({
                    search: mockSearch,
                })),
            };
        });
        const store = buildStore();

        store.dispatch(makeSearch('anySearchValues'));

        expect(store.getState().search.loading).toBe(true);
        expect(store.getState().search.error).toBe(null);
        expect(mockSearch).toHaveBeenCalledWith('anySearchValues')
    })

    it('Given app loaded When search/makeSearch/fulfilled Then update items', () => {       
        const store = buildStore();

        store.dispatch({type: 'search/makeSearch/fulfilled', payload: {items: [{id: '1', description: 'anyDescription'}]}});

        expect(store.getState().search.loading).toBe(false);
        expect(store.getState().search.items).toEqual([{id: '1', description: 'anyDescription'}]);
    })

    it('Given app loaded When search/makeSearch/rejected Then update items', () => {       
        const store = buildStore();

        store.dispatch({type: 'search/makeSearch/rejected', payload: {message: 'errorMessage'}});

        expect(store.getState().search.loading).toBe(false);
        expect(store.getState().search.items).toEqual([]);
        expect(store.getState().search.error).toBe('errorMessage');
    })

})