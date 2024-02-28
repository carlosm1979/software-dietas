import { buildStore } from ".";
import { makeSearch } from "../../modules/searcher/store/reducer";
import EdamanController from "../controllers/edaman/edamanController";
jest.mock('../controllers/edaman/edamanController');
const MockedEdamanController = EdamanController as jest.Mock<EdamanController>;


describe ('search store', () => {
    it('search store initial state', () => {
        const store = buildStore();

        expect(store.getState().search.loading).toBe(false);
        expect(store.getState().search.error).toBe(null);
        expect(store.getState().search.items).toEqual([]);
    })


    it('Given app loadeed When search Then call conroller', () => {       
        const mockSearch = jest.fn(() => Promise.resolve({items: []}))
        MockedEdamanController.mockImplementation(() => {
            return {
              search: mockSearch,
            };
          });
        const store = buildStore();

        store.dispatch(makeSearch('anySearchValues'));

        expect(store.getState().search.loading).toBe(true);
        expect(store.getState().search.error).toBe(null);
        expect(mockSearch).toHaveBeenCalledWith('anySearchValues')
    })

    it('Given app loadeed When search/makeSearch/fulfilled Then update items', () => {       
        const store = buildStore();

        store.dispatch({type: 'search/makeSearch/fulfilled', payload: {items: [{id: '1', description: 'anyDescription'}]}});

        expect(store.getState().search.loading).toBe(false);
        expect(store.getState().search.items).toEqual([{id: '1', description: 'anyDescription'}]);
    })

    it('Given app loadeed When search/makeSearch/rejected Then update items', () => {       
        const store = buildStore();

        store.dispatch({type: 'search/makeSearch/rejected', payload: {message: 'errorMessage'}});

        expect(store.getState().search.loading).toBe(false);
        expect(store.getState().search.items).toEqual([]);
        expect(store.getState().search.error).toBe('errorMessage');
    })

})