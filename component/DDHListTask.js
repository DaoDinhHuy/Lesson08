import React from 'react'

export default function DDHListTask({renderddhListTasks, onddhTaskEdit, onddhTaskDelete}) {
    console.log(renderddhListTasks);
    // Hàm xử lý khi sửa
    const ddhHandleEdit = (param)=>{
        console.log("Click edit:", param);
        onddhTaskEdit(param) //Đẩy lên App thông qua props (ontdtdTaskEdit)
    }
    // Hàm xử lý khi xóa
    const ddhHandleDelete = (param)=>{
        if(window.confirm('Bạn có chắc chắn xóa không')){
            onddhTaskDelete(param) // Đẩy dữ liệu xóa lên trên App.js
        }
    }
    // render data
    let ddhElementTask = renderddhListTasks.map((task, index)=>{
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{task.ddh_taskId}</td>
                <td>{task.ddh_taskName}</td>
                <td>{task.ddh_level}</td>
                <td>
                    <button className='btn btn-success'
                        onClick={()=>ddhHandleEdit(task)}
                        >sửa</button>    
                    <button className='btn btn-danger'
                    onClick={()=>ddhHandleDelete(task)} >
                        xóa</button>    
                </td>
            </tr>
        )
    })
  return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Task Id</th>
                    <th>Task Name</th>
                    <th>Task Level</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {ddhElementTask}
            </tbody>
        </table>
    </div>
  )
}