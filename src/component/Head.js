import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action/index'

class Head extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        let {list}=this.props;
        let len=list.filter(item=>item.category===0).length;

        return <div className=' card-header'><h4 className='card-title'>
            To Do List(Unfinished: {len})
        </h4>
        <input type='text' className='form-control' placeholder='Please enter a task to the To Do List'  onKeyUp={this.keyUp} /></div>
    }
    keyUp=event=>{
        let {add}=this.props;
       if(event.keyCode===13){
           let value=event.target.value.trim();
           if(value==='') return;
           add({
               text:value,
               category:0
           });
           event.target.value='';
       }
    }
}
export default connect(state=>({...state.todo}),action.todo)(Head)