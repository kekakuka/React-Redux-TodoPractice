import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action/index'

 class Footer extends React.Component{

    render(){
        return <div className=' card-footer'>
            <nav className='nav nav-pills'>
                <ul className='nav nav-pills'>
                <li style={{marginLeft:'10px'}}><a href='#' className='btn btn-primary' onClick={this.selectFlag} >All</a></li>
                <li style={{marginLeft:'10px'}}><a href='#' className='btn btn-primary' onClick={this.selectFlag}>Unfinished</a></li>
                <li style={{marginLeft:'10px'}}><a href='#' className='btn btn-primary' onClick={this.selectFlag}>Finished</a></li>
                </ul>
            </nav>
       </div>
    }

    selectFlag=(event)=>{
        for(let i=0;i<event.target.parentNode.parentNode.childNodes.length;i++){
            event.target.parentNode.parentNode.childNodes[i].childNodes[0].className='btn btn-primary'
        }
        let {selectCategory}=this.props;
       switch (event.target.innerHTML) {
           case 'All':selectCategory('all');  break;
           case 'Unfinished':selectCategory('unfinished');break;
           case 'Finished':selectCategory('finished');break;
           default: break;
       }
        event.target.className='btn btn-danger';
    }
}

export default connect(state=>({...state.todo}),action.todo)(Footer)