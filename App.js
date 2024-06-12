import "./App.css";
import { React, useState } from "react";
import DDHListTask from "./component/DDHListTask";
import DDHAddEditAndDelete from "./component/DDHAddEditAndDelete";
function App() {
  // Mock data
  const DDH_listTasks = [
    {
      ddh_taskId: 2210900108,
      ddh_taskName: "Đào Đình Huy",
      ddh_level: "Small",
    },
    {
      ddh_taskId: 1,
      ddh_taskName: "Học lập trình frontend",
      ddh_level: "Small",
    },
    {
      ddh_taskId: 2,
      ddh_taskName: "Học lập trình reactjs",
      ddh_level: "Medium",
    },
    {
      ddh_taskId: 3,
      ddh_taskName: "Lập trình với Frontend - Reactjs",
      ddh_level: "High",
    },
    {
      ddh_taskId: 4,
      ddh_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
      ddh_level: "Small",
    },
  ];
  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const [ddhListTasks, setddhListTasks] = useState(DDH_listTasks);

  // tạo state dữ liệu cho form (add, edit)
  // Đối tượng task
  const ddhTaksObj = {
    ddh_taskId: 0,
    ddh_taskName: "NTU",
    ddh_level: "Medium",
  };
  // Tạo state
  const [ddhTask, setddhTask] = useState(ddhTaksObj); // dữ liệu trên form
  // state đê phân biệt trạng thái là thêm mới hay sửa
  const [ddhIsAddOrEdit, setddhIsAddOrEdit ] = useState(true); // mặc định ban đầu là form thêm mới

  // Nhận dữ liệu khi sửa
  const ddhHandleEdit = (param) => {
    console.log("App - Edit:", param);

    setddhTask(param);
    // Cập nhật trạng thái form là sửa
    setddhIsAddOrEdit(false);
  };

  const ddhHandleSubmit = (ddhParam) => {
    console.log("App:", ddhParam);
    if(ddhIsAddOrEdit===true){ // trường hợp thêm mới dữ liệu
      setddhListTasks((prev) => {
        return [...prev, ddhParam];
      });
    }else{ 
      for (let i = 0; i < ddhListTasks.length; i++) {
          if(ddhListTasks[i].ddh_taskId == ddhParam.ddh_taskId){
            ddhListTasks[i] = ddhParam;
            break;
          }
      }

      setddhListTasks((prev) => {
        return [...prev];
      });
    }
  };


  const ddhHandleDelete = (param)=>{
    let ddhResult = ddhListTasks.filter(x=>x.ddh_taskId != param.ddh_taskId);
    setddhListTasks(ddhResult);
  }
  return (
    <div className="container border">
      <h1>Đào Đình Huy - K22CNT2</h1>
      <hr />
      <div>
        {/* Danh sách list task  */}
        <DDHListTask
          renderddhListTasks={ddhListTasks}
          onddhTaskEdit={ddhHandleEdit}
          onddhTaskDelete = {ddhHandleDelete}
        />
      </div>
      <div>
        <DDHAddEditAndDelete 
            renderddhTask = {ddhTask}
            renderddhIsAddOrEdit = {ddhIsAddOrEdit}
            ddhOnSubmit={ddhHandleSubmit} />
      </div>
    </div>
  );



}

export default App;