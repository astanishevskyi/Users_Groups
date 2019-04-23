import React, { Component } from 'react';
import UsersData from './UsersData'
import GroupsData from './GroupsData'

class DataList extends Component {
  render() {
    return (
      <div className="container">
          <div className="pc-tab">
              <input checked="checked" id="tab1" type="radio" name="pct"/>
              <input id="tab2" type="radio" name="pct"/>

              <nav>
                  <ul>
                      <li className="tab1">
                          <label htmlFor="tab1">Users</label>
                      </li>
                      <li className="tab2">
                          <label htmlFor="tab2">Groups</label>
                      </li>
                  </ul>
              </nav>
              <section>
                  <div className="tab1">
                    <UsersData />
                  </div>
                  <div className="tab2">
                    <GroupsData />
                  </div>

              </section>
          </div>

      </div>
    );
  }
}

export default DataList;
