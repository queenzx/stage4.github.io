import { get } from 'axios';

function getData(){
    return get('/getdata').then(data=>{
        console.log(data.data.getNewsList);
        let list = data.data.getNewsList;
        return Promise.resolve(list);
    })
}

export default{
    getData
}