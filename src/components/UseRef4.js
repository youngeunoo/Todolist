import { useState, useRef } from 'react';
import { styled } from 'styled-components'

const Container = styled.div`
border:1px solid black;
width:300px;
margin:auto;`;
const List = styled.ul``;
const Button = styled.button`
border: solid 1px transparent;
background-color:pink;
margin: 20px;
padding: 10px;
&:hover {
  background-color: white;
  border: solid #000 1px;
}
`;

const coffee = '아메리카노, 카페라떼, 바닐라라떼, 에스프레소, 카페모카, 디카페인커피, 오늘의 커피, 콜드브루, 플랫화이트, 아인슈페너'.split(',');

const UseRef4 = () => {
  // 버튼을 클릭하면 배열 안에 객체로 저장

  const [data, setData] = useState([]);
  const idRef = useRef(1);

  const onPrint = () => {
    const ran = Math.floor(Math.random() * coffee.length);
    setData([...data, { id: idRef.current++, name: coffee[ran] }])
  }

  return (
    <Container>
      <Button onClick={onPrint}>출력</Button>
      <List>
        {data.map(list => (<li key={list.id}>{list.id} : {list.name}</li>))}
      </List>
    </Container>
  );
};

export default UseRef4;