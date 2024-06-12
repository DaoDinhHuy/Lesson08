import React, { useEffect, useState } from 'react'

export default function DDHAddEditAndDelete({renderddhTask, renderddhIsAddOrEdit,ddhOnSubmit}) {

    const [ddhTask, setddhTask] = useState(renderddhTask);
    useEffect(()=>{
        setddhTask(renderddhTask)
    },[renderddhTask])

    // tạo tiêu đề form
    const ddhTieuDe = renderddhIsAddOrEdit = true?"Thêm mới task":"Sửa thông tin task";
    // Hàm xử lý sự kiện thay đổi trên điều khiển
    const ddhHandleChange = (ddhEvent)=>{
        let name = ddhEvent.target.name;
        let value = ddhEvent.target.value;

        setddhTask(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const ddhHandleSubmit = (ddhEvent)=>{
        ddhEvent.preventDefault();
        ddhOnSubmit(ddhTask);
    }
  return (
    <div>
        <h2>{ddhTieuDe}</h2>
        <form >
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task ID</span>
                <input type="text" 
                    name='ddh_taskId' value={ddhTask.ddh_taskId} onChange={ddhHandleChange} 
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Task ID</span>
                <input type="text" 
                    name='ddh_taskName' value={ddhTask.ddh_taskName} onChange={ddhHandleChange} 
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Level</span>

                <select name='ddh_level' value={ddhTask.ddh_level} onChange={ddhHandleChange}  className="form-control" 
                    aria-describedby="basic-addon"> 
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={ddhHandleSubmit} className='btn btn-primary'>Ghi lại</button>
        </form>
    </div>
  )
}