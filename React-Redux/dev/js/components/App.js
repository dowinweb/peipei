/**
 * Created by dongwei on 2017/3/12.
 */
import React from 'react';
import UserList from '../containers/user-list';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Username List:</h2>
        <UserList />
        <hr/>
        <h2>User Details</h2>
        <h3>ddd</h3>
    </div>
);


export default App;
