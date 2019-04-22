import React, {Component} from 'react';
import GroupService from "./GroupService";

const groupService = new GroupService();

class GroupList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            nextPageURL: ''
        };
        this.nextPage = this.nextPage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
}

export default GroupList;

componentDidMount(){
    var self = this;
    groupService.getGroups().then(function (result) {
        self.setState({groups: result.data, nextPageURL: result.nextlink})
    });
}

handleDelete(e, pk){
    var self = this;
    groupService.deleteGroup({pk : pk}).then(() => {
        var newArr = self.state.groups.filter(function (obj) {
            return obj.pk !== pk;
        });
        self.setState({groups: newArr});
    });
}

nextPage(){
    var self = this;
    groupService.getGroupByURL(this.state.nextPage).then((result) => {
       self.setState({groups: result.data, nextPageURL: result.nextlink})
    });
}

render(){
    return (
        <div className='group--list'>
            <table className='table'>
                <thead key='thead'>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}