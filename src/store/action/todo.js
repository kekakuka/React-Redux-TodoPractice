import * as TYPES from '../action-type';

let todo={
    add(newItem){
        return{
            type:TYPES.ADD_TODO,
            newItem
        };
    },
    selectCategory(category){
        return {
            type: TYPES.SELECT_CATEGORY,
            category
        };
    },
    finishItem(finishId){
        return {
            type: TYPES.Finish,
            finishId
        };
    },
    deleteItem(deleteId){
        return{
            type:TYPES.Delete,
            deleteId
        }
    }
};

export default todo;