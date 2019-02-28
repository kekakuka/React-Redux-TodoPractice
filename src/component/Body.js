import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action/index'

class Body extends React.Component{
    render(){
        let{list,flag}=this.props;

        return <div className='card-body'>
            <ul className='list-group'>
                {list.filter((item)=>{
                   if(flag==='finished')
                        return item.category===1;
                    else if(flag==='unfinished')
                        return item.category===0;
                    else
                        return true;
                }).map(item=><li className='list-group-item' key={item.id}>
                        <span style={item.category===1?{textDecoration: 'line-through',color:'red'}:{color:'green'}}>{item.text}</span>
                    <a    onClick={()=>{
                        let {finishItem}=this.props;
                        finishItem(item.id);
                    }} href="javascript:;" className='btn btn-success classB'>√</a>
                        <a  onClick={()=>{
                            let {deleteItem}=this.props;
                            let isOk=window.confirm('Delete the item?');
                            if(isOk)
                            deleteItem(item.id);
                        }} href="javascript:;" className='btn btn-danger classA'>X</a>

                        </li>)}

            </ul>
        </div>
    }



}
export   default connect(state=>({...state.todo}),action.todo)(Body)