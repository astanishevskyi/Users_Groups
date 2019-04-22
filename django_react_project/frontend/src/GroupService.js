import axios from 'axios'

const API_URL = 'http://localhost:8000';

export default class GroupService{

    constructor(){}

    getGroups() {
        const url = `${API_URL}/api/groups`;
        return axios.get(url).then(response => response.data);
    }

    getGroupByURL() {
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }

    getGroup(pk) {
        const url = `${API_URL}/api/groups/${pk}`;
        return axios.get(url).then(response => responce.data);
    }

    createGroup(group) {
        const url = `${API_URL}/api/groups`;
        return axios.post(url, group)
    }

    updateGroup(group) {
        const url = `${API_URL}/api/groups/${group.pk}`;
        return axios.put(url, group)
    }

    deleteGroup(group) {
        const url = `${API_URL}/api/groups/${group.pk}`;
        return axios.delete(url);
    }

}
