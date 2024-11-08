// import axios from 'axios';
// import { useState } from "react";
// import DaumPostcode from "react-daum-postcode";
// import {
//     Button,
//     Col,
//     Form,
//     FormGroup,
//     Input,
//     Label,
//     Modal,
//     ModalBody,
//     ModalFooter,
//     ModalHeader,
// } from "reactstrap";
// import url from '../';

// const Join = () => {

//     const [member, setMember] = useState("");
//     const [profileImg, setProfileImg] = useState(null);

//     const fileChange = (e) => {
// if(e.target.files.length>0){
//     setProfileImg(e.target.files[0]);
// }

//     }

//     const submit = (e) => {
//         let formData = new FormData();
//         formData.append("id", member.id);
//         formData.append("name", member.name);
//         formData.append("password", member.password);
//         formData.append("email", member.email);
//         formData.append("address", member.address);
//         formData.append("nickname", member.nickname);
//         if(profileImg !=null){
//             formData("profile", profileImg);
//         }

//         axios.post(`${url}/join`, formData)
//         .then(res => {

//         })

//     }

//     export default function join() {

//       const [member, setMember] = useState({
//         id: "",
//         name: "",
//         password: "",
//         email: "",
//         postCode: "",
//         address1: "",
//         nickname: "",
//         profileImage: "",
//       });

//       const [isModal, setIsModal] = useState(false);
//       const [isOpen, setIsOpen] = useState(false);
//       const [message, setMessage] = useState("");
//       const [isCheckId, setIsCheckId] = useState(false);

//       const daumAddress = (e) => {};

//       const edit = (e) => {
//         setMember({ ...member, [e.target.name]: e.target.value });
//       };

//       const submit = (e) => {
//         if(!isCheckId){
//             alert("아이디 중복을 체크하세요");
//             return;

//         }

//         const smember = {
//           id: member.id,
//           name: member.name,
//           password: member.password,
//           nickname: member.nickname,
//           email: member.email,
//           address:
//             member.address + " " + member.extraAddress + " " + member.detailAddress,
//         };
//       };

//     //   axios
//     //     .post("http://localhost:8080/join, smember")
//     //     .then((res) => {
//     //       console.log(res);
//     //       window.location.href = "/login";
//     //     })
//     //     .catch((err) => {
//     //       console.log(err.response.data);
//     //     });

//       const onCompletePost = (data) => {
//         console.log(data);
//         const { address, zonecode, bname, buildingName } = data;
//         setMember({
//           ...member,
//           postCode: zonecode,
//           address: address,
//           extraAddress: bname + buildingName !== "" && buildingName,
//         });
//       };

//       const checkId = (e) => {
//         e.preventDefault();
//         axios
//           .get(`http://localhost:8080/checkMemId/${member.id}`)
//           .then((res) => {
//             if(res.data===true){
//     alert("사용중인 계좌번호 입니다.")
//             }
//             setIsCheckId(true);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       };

//       const editId = (e) => {
//         setIsCheckId(false);
//         edit(e);
//       }

//       return (
//         <div className="route">
//           <h5 className="accTitle">회원 가입</h5>
//           <br />
//           <Form>
//             <FormGroup row>
//               <Label for="id" sm={3}>
//                 아이디
//               </Label>
//               <Col sm={9}>
//                 <Input type="text" name="id" onChange={edit} value={member.id} />
//               </Col>
//               <Col></Col>
//             </FormGroup>

//             <FormGroup row>
//               <Label for="id" sm={3}>
//                 이름
//               </Label>
//               <Col sm={9}>
//                 <Input
//                   type="text"
//                   name="name"
//                   onChange={edit}
//                   value={member.name}
//                 />
//               </Col>
//             </FormGroup>

//             <FormGroup row>
//               <Label for="id" sm={3}>
//                 비밀번호
//               </Label>
//               <Col sm={9}>
//                 <Input
//                   type="text"
//                   name="password"
//                   onChange={edit}
//                   value={member.password}
//                 />
//               </Col>
//             </FormGroup>

//             <FormGroup row>
//               <Label for="id" sm={3}>
//                 이메일
//               </Label>
//               <Col sm={9}>
//                 <Input
//                   type="text"
//                   name="email"
//                   onChange={edit}
//                   value={member.email}
//                 />
//               </Col>
//             </FormGroup>

//             {/* <FormGroup row>
//                     <Label for="id" sm={3}></Label>
//                     <Col sm={9}>
//                         <Input type="text" name="email"  value={member.email}/>
//                     </Col>
//                     </FormGroup>

//                     <FormGroup row>
//                     <Label for="id" sm={3}></Label>
//                     <Col sm={9}>
//                         <Input type="text" name="email" value={member.email}/>
//                     </Col>
//                     </FormGroup> */}

//             <FormGroup row>
//               <Label for="address" sm={3}>
//                 주소
//               </Label>
//               <Col sm={9}>
//                 {/* <Input type="text" name="address" onChange={edit} value={member.address}/> */}
//                 <Input type="text" value={member.postCode} readOnly />

//                 <Button onClick={() => setIsOpen(!isOpen)}>주소찾기</Button>
//                 <Input type="text" value={member.address} />
//                 <Input type="text" value={member.detailAddress} onChange={edit} />
//                 <Input
//                   type="text"
//                   value={member.extraAddress}
//                   placeholder="상세 주소"
//                 />
//               </Col>
//             </FormGroup>

//             <FormGroup row>
//               <Label for="id" sm={3}>
//                 닉네임
//               </Label>
//               <Col sm={9}>
//                 <Input
//                   type="text"
//                   name="nichname"
//                   onChange={edit}
//                   value={member.nichname}
//                 />
//               </Col>
//             </FormGroup>

//             <FormGroup row>
//               <Label for="email" sm={3}>
//                 이메일
//               </Label>
//               <Col sm={9}>
//                 <Input
//                   type="text"
//                   name="email"
//                   onChange={edit}
//                   value={member.nichname}
//                 />
//               </Col>
//             </FormGroup>

//             <FormGroup row>
//               <Col sm={3} />
//               <Col sm={9}>
//                 <Input
//                   type="text"
//                   name="profileImage"
//                   onChange={edit}
//                   value={member.address}
//                 />
//               </Col>
//             </FormGroup>

//             <FormGroup row>
//               <Col sm={3} />
//               <Col sm={9}>
//                 <Input
//                   type="text"
//                   name="profileImage"
//                   onChange={edit}
//                   value={member.extraAddress}
//                 />
//               </Col>
//             </FormGroup>

//             <FormGroup row>
//               <Col sm={3} />
//               <Col sm={9}>
//                 <Input
//                   type="text"
//                   name="profileImage"
//                   onChange={edit}
//                   value={member.detailAddress}
//                 />
//               </Col>
//             </FormGroup>

//             <Button color="primary" onClick={submit}>
//               회원가입
//             </Button>
//           </Form>

//           <Modal isOpen={isOpen} toggle={() => setIsModal(!isModal)}>
//             <ModalHeader toggle={() => setIsOpen(!isOpen)}>주소찾기</ModalHeader>
//             <ModalBody>
//               {isOpen && (
//                 <div>
//                   <DaumPostcode
//                     onComplete={onCompletePost}
//                     onClose={() => setIsOpen(false)}
//                   />
//                 </div>
//               )}
//             </ModalBody>

//             <ModalFooter>
//               <Button color="primary" onClick={() => setIsModal(!Modal)}>
//                 확인
//               </Button>

//               {/* <Button color="secondary">취소</Button> */}
//             </ModalFooter>
//           </Modal>
//         </div>
//       );
//     }

// }

// export default Join;
