// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";
// import { useRef } from "react";
// import { Button, Input, Label, Table } from "reactstrap";
// import { url } from "./Config";

// const BoardWrite = () => {
//   // 일반 변수는 set으로 값을 바꿔주지만,
//   // 데이터가 객체이거나 배열인 경우에 전개 연산자 ->
//   const [fileList, setFileList] = useState([]);
//   const [board, setBoard] = useState({ subject: "", content: "", writer: "" });
//   const fileRef = useRef();

//   //useNavigate 사용할 때, 해당 부분 생성해서 사용
//   const navigate = useNavigate();

//   const divStyle = {
//     margin: "0 auto",
//     width: "600px",
//     border: "1px solid lightgray",
//     borderRadius: "7px",
//     padding: "10px",
//   };

//   const fileChange = (e) => {
//     if (e.target.files.length > 0) {
//       setFileList([...fileList, e.target.files[0]]);
//     }
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("subject", board.subject);
//     formData.append("content", board.content);
//     formData.append("writer", board.writer);
//     for (let file of fileList) {
//       formData.append("file", file);
//     }

//     console.log([...formData]); // FormData의 모든 항목을 확인
//     axios
//       .post(`${url}/boardWrite`, formData)
//       .then((res) => {
//         console.log(res.data);

//         //window...대신에 해당 부분으로 사용 (숫자도 넘길 수 있음)
//         navigate(`/boardDetail/${res.data}`);

//         // window.location.href = "/boardDetail";
//       })
//       .catch((err) => {
//         console.log(err);
//         alert(err.response.data);
//       });
//   };

//   const delFile = (file) => {
//     setFileList(...fileList.filter((f) => f !== file));
//   };

//   const fileClick = (e) => {};
//   fRef.current.click();
//   return (
//     <div>
//       <div className="header-text">게시판 등록</div>
//       <br />

//       <div style={divStyle}>
//         <Table borderless>
//           <tbody>
//             <tr>
//               <td>
//                 <Label for="writer">글쓴이</Label>
//               </td>
//               <td>
//                 <Input type="text" name="writer" id="writer" />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <Label for="subject">제목</Label>
//               </td>
//               <td>
//                 <Input type="text" name="subject" id="subject" />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <Label for="content">내용</Label>
//               </td>
//               <td>
//                 <Input
//                   type="textarea"
//                   name="content"
//                   id="content"
//                   cols="40"
//                   rows="15"
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <Label for="image">이미지</Label>
//               </td>
//               <td>
//                 <img
//                   src="/plus.png"
//                   width="100px"
//                   alt=""
//                   // onClick={() => document.getElementById("file").click()
//                   // onClick={() => {fileClick()}

//                   // }
//                 />
//                 <br />
//                 <br />
//                 <Input
//                   type="file"
//                   id="file"
//                   accept="image/*"
//                   hidden
//                   onChange={fileChange}
//                   // ref= {fRef}
//                 />
//                 {fileList.map((file, index) => (
//                   <span key={index}>
//                     <div style={{ display: "inline-block" }}></div>
//                     <img
//                       style={{
//                         display: "inline-block",
//                         width: "20px",
//                         height: "20px",
//                       }}
//                       src="/minus.png"
//                       alt="/"
//                     />
//                     <br />

//                     <img
//                       src={URL.createObjectURL(file)}
//                       width="100px"
//                       alt=""
//                       style={{ marginRight: "10px" }}
//                     />

//                     {(index + 1) % 3 === 0 && (
//                       <>
//                         <br />
//                         <br />
//                       </>
//                     )}
//                   </span>
//                 ))}
//               </td>
//             </tr>
//             <tr>
//               <td></td>
//               <td>
//                 <img
//                   src="/plus.png"
//                   width="100px"
//                   alt=""
//                   onClick={() => document.getElementById("file").click()}
//                 />
//                 <br />
//                 <br />
//                 <Input type="file" id="file" accept="image/*" hidden />

//                 <Button color="primary" onClick={submit}>
//                   등록
//                 </Button>
//                 <Button type="reset" color="secondary">
//                   다시쓰기
//                 </Button>
//               </td>
//             </tr>
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default BoardWrite;
