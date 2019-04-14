import * as actionType from '../actions/actionType';

const initState = {
    bookId: 0
}

const bookReducer = (state = initState, action) => {
    if (action.type === actionType.ITEM_BOOK_ID) {
        return {
            ...state,
            bookId: action.bookId
        }
    } else {
        return state;
    }
}

export default bookReducer;