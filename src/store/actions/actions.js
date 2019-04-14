import * as actionType from './actionType';

export const setBookId = (bookId) => {
    return {
        type: actionType.ITEM_BOOK_ID,
        bookId: bookId
    }
}