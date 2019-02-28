import * as TYPES from '../action-type';

export default function todo(
    state={
        list:[],flag:'all'
    },
    action){
    state=JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.ADD_TODO :
            let {newItem}=action;
           newItem.id= state.list.length===0?1:state.list[state.list.length-1]['id']+1;
            state.list.push(newItem); break;
        case TYPES.SELECT_CATEGORY :
            let {category}=action;
            state.flag=category;
             break;
        case TYPES.Finish :let{finishId}=action ;
       let item=state.list.find(item=>item.id===finishId);
        if(item)
        {item.category=1}
      //  state.list=state.list.map(item=>item.id===finishId?item={...item,'category':1}:item);
        break;
        case TYPES.Delete :let {deleteId}=action;
            state.list=state.list.filter(item=>item.id!==deleteId);
        break;
        default:break;
    }
    return state;

}