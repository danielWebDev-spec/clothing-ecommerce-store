import shopData from '../../components/Data/shopData';

const INITIAL_STATE = {
    collections: shopData
}

const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default shopReducer;