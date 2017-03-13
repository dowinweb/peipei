/**
 * Created by dongwei on 2017/3/12.
 */
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {
    render(){
        return (
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
                
            </ul>
        )
    }
}

function mapStateToProps(){

}

export default connect(mapStateToProps)(UserList);