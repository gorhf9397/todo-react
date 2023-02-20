# 📝 React - for - TodoList

**React.js** 학습을 목적으로 제작한 TodoList 토이프로젝트 입니다. <br>
<a href="https://gorhf9397.github.io/todo-react/">배포URL</a> 입니다.

## 🗞️ 개요

- **로그인** 첫화면에선 간단하게 이름을 입력하고 todo 컴포넌트로 넘어갈 수 있도록 구현했습니다.
- **LocalStorage** 를 사용하여 상태값을 저장하고, 컴포넌트가 마운트될 때 <br> **LocalStorage**에서 상태값을 가져오도록 구현했습니다.
- **MUI** css 라이브러리로 MUI 를 사용해 기본적인 input tag 들 에 디자인을 하였습니다.

## 🔧 사용 기술
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/><img src="https://img.shields.io/badge/ReactHookForm-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=black"/><img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=black"/><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"/><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=black"/><img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=black"/>

## 📌 기능설명

### 로그인 페이지

<img src="https://user-images.githubusercontent.com/108771927/220026574-d39eae35-6588-4a5c-aa87-06f626934fc2.JPG" width="300" height="300"/> <br>
- **첫페이지에 로그인창이 출력됩니다.**

<img src="https://user-images.githubusercontent.com/108771927/220026585-16e4f0e8-bedd-4492-b5a8-0562587b9e6a.JPG" width="300" height="300"/> <br>
- **할 일은 최대 6개 까지로 제한했습니다.**

    const newTodos = [...todos];
    if (newTodos.length < 6) {
      setTodos([...todos, { text: inputValue }]);
      setInputValue("");
    } else {
      alert("최대 6개 까지 작성 가능");
    }
  };

- **개별 삭제가 가능하게 구현 하였고 **
