import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Input, Label, Table } from "reactstrap";
import { url } from "./Config";
// import blackHeart from './'

const BoardDetail = () => {
  //뜨자마자 처리할 때,  useEffect사용

  const [board, setBoard] = useState({
    num: "",
    subject: "",
    content: "",
    writer: "",
    fileNums: "",
  });
  const [fileNumList, setFileNumList] = useState([]);
  const [heart, setHeart] = useState(false);

  const { num } = useParams();
  const divStyle = {
    margin: "0 auto",
    width: "600px",
    border: "1px solid lightgray",
    borderRadius: "7px",
    padding: "10px",
  };

  useEffect(() => {
    //num을 바로 사용하면 안되고=(현재 1,2,3 형태임), res.data에서 받은 데이터를 split해서 가져와야 함.
    axios
      .get(`${url}/boardDetail, ${num}`)
      .then((res) => {
        setBoard({ ...res.Board });

        if (res.data.fileNums === !null && res.data.fileNums.length !== 0) {
          setFileNumList([...res.data.fileNums.split(",")]);
        }
      })
      .catch((err) => {});
  }, [num]);

  const heartClick = (e) => {
    const param = { id: "hong", num: board.num };
    axios
      .post(`${url}/boardLike`, param)
      .then((res) => {
        setHeart(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="header-text">게시글 상세</div>
      <br />
      <div style={divStyle}>
        <Table borderless>
          <tbody>
            <tr>
              <td>
                <Label>글쓴이</Label>
                <td>
                  <Input type="text" readOnly value={board.writer}></Input>
                </td>
              </td>

              <td>
                <Label>제목</Label>
                <Input type="text" readOnly value={board.subject}></Input>
              </td>

              <td>
                <Label>내용</Label>
                <Input
                  type="textarea"
                  readOnly
                  cols="40"
                  rows="15"
                  value={board.content}
                ></Input>
              </td>
            </tr>

            <tr>
              <td>
                <Label>이미지</Label>
              </td>

              <td>
                {fileNumList.length !== 0 &&
                  fileNumList.map((fn) => (
                    <img
                      key={fn}
                      src={`${url}/image/${fn}`}
                      width="100px"
                      alt=""
                      style={{ marginRight: "10px" }}
                    />
                  ))}
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <Button
                  color="primary"
                  tag="a"
                  href={`boardModify/${board.num}`}
                >
                  수정
                </Button>
                &nbsp;&nbsp;
                <Button color="primary" tag="a" href="/">
                  목록
                </Button>
                &nbsp;&nbsp;
                <img
                  src={heart === true ? "/redheart.png" : "blackheart.png"}
                  alt=""
                  width="30px"
                  onClick={heartClick}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default BoardDetail;
