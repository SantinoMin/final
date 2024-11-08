import axios from "axios";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const Login = () => {
  const [member, setMember] = useState({
    id: "",
    name: "",
    password: "",
    email: "",
    address: "",
    nickname: "",
    profileImage: "",
  });
  const [isModal, setIsModal] = useState(false);
  const [message, setMessage] = useState("");

  const edit = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    let formData = new FormData();

    e.preventDefault();
    axios
      .post("http://localhost:8080/login", member)
      .then((res) => {
        console.log(res.data); // data 속성 확인
        setMessage(`로그인 성공 ${res.data})`);
        setIsModal(true);

        window.location.href = "/makeaccount";
      })
      .catch((err) => {
        console.log(err);
        setMessage(`로그인 실패 ${err.response.data})`);
        setIsModal(true);
      });
  };

  const goToCheckDoubleId = () => {
    navigator("/checkDoubleId"); // checkDoubleId로 이동
  };

  return (
    <div className="route">
      <h5 className="accTitle">로그인</h5>
      <br />
      <Form>
        <FormGroup row>
          <Label for="id" sm={3}>
            아이디
          </Label>
          <Col sm={9}>
            <Input type="text" name="id" onChange={edit} value={member.id} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="id" sm={3}>
            비밀번호
          </Label>
          <Col sm={9}>
            <Input
              type="text"
              name="password"
              onChange={edit}
              value={member.password}
            />
          </Col>
        </FormGroup>

        {/* 버튼 그룹 */}
        <ButtonGroup>
          <Button
            color="primary"
            style={{ marginRight: "20px" }}
            onClick={submit}
          >
            로그인
          </Button>
        </ButtonGroup>
      </Form>

      <Modal isOpen={isModal} toggle={() => setIsModal(!isModal)}>
        <ModalHeader toggle={() => setIsModal(!isModal)}>
          로그인 모달
        </ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setIsModal(!Modal)}>
            확인
          </Button>

          {/* <Button color="secondary">취소</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Login;
