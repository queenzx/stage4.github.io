import {ajax} from 'jquery';

function getAllEmps(){
    return new Promise((resolve,reject)=>{
		ajax({
			url: 'http://localhost:4000/getAll',
			success(result){
				// console.log(result);
				if(result.status=="SUCCESS"){
					resolve(result.data);
				}else{
					reject('error');
				}
			},
			error(){
				reject('error');
			}
		})
    })
}

function addEmp(emp){
	return new Promise((resolve,reject)=>{
		ajax({
			url:'http://localhost:4000/add',
			data:{emp:emp},
			success(result){
				console.log(result);
				resolve(result);
			},
			error(){
				reject('error');
			}
		})
	})
}

function getEmpInfo(empId,empName){
	return new Promise((resolve,reject)=>{
		ajax({
			url:'http://localhost:4000/getEmpInfo',
			data:{empId,empName},
			success(result){
				console.log(result);
				if(result.status == 'SUCCESS'){
					resolve(result.data);
				}else{
					reject('error');
				}
			},
			error(err){
				console.log(err);
				reject('error');
			}
		})
	})
}
  
  
export default {
	getAllEmps,
	addEmp,
	getEmpInfo
}