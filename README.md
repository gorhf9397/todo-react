# ๐ todo-react
**React.js** ํ์ต์ ๋ชฉ์ ์ผ๋ก ์ ์ํ TodoList ํ ์ดํ๋ก์ ํธ ์๋๋ค. <br>
<a href="https://gorhf9397.github.io/todo-react/">๋ฐฐํฌURL</a> ์๋๋ค.

## ๐๏ธ ๊ฐ์

- **๋ก๊ทธ์ธ** ์ฒซํ๋ฉด์์  ๊ฐ๋จํ๊ฒ ์ด๋ฆ์ ์๋ ฅํ๊ณ  todo ์ปดํฌ๋ํธ๋ก ๋์ด๊ฐ ์ ์๋๋ก ๊ตฌํํ์ต๋๋ค.
- **LocalStorage** ๋ฅผ ์ฌ์ฉํ์ฌ ์ํ๊ฐ์ ์ ์ฅํ๊ณ , ์ปดํฌ๋ํธ๊ฐ ๋ง์ดํธ๋  ๋ <br> **LocalStorage**์์ ์ํ๊ฐ์ ๊ฐ์ ธ์ค๋๋ก ๊ตฌํํ์ต๋๋ค.
- **MUI** css ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก MUI ๋ฅผ ์ฌ์ฉํด ๊ธฐ๋ณธ์ ์ธ input tag ๋ค ์ ๋์์ธ์ ํ์์ต๋๋ค.

## ๐ง ์ฌ์ฉ ๊ธฐ์ 
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/><img src="https://img.shields.io/badge/ReactHookForm-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=black"/><img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=black"/><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"/><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=black"/><img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=black"/>

## ๐ ๊ธฐ๋ฅ์ค๋ช

### ๋ก๊ทธ์ธ ํ์ด์ง

<img src="https://user-images.githubusercontent.com/108771927/220026574-d39eae35-6588-4a5c-aa87-06f626934fc2.JPG" width="300" height="300"/> <br>
- **์ฒซํ์ด์ง์ ๋ก๊ทธ์ธ์ฐฝ์ด ์ถ๋ ฅ๋ฉ๋๋ค.**

<img src="https://user-images.githubusercontent.com/108771927/220026585-16e4f0e8-bedd-4492-b5a8-0562587b9e6a.JPG" width="300" height="300"/> <br>
- **๋ก๊ทธ์ธ์ ํ๊ณ  ๋ ํ router๋ฅผ ํตํด todoList๋ก render ๋ฉ๋๋ค.**

<img src="https://user-images.githubusercontent.com/108771927/220031446-593a260a-c394-4c60-b6c6-e1d2e6b492ee.JPG" width="300" height="300"/> <br>

- **ํ  ์ผ์ ์ต๋ 6๊ฐ ๊น์ง๋ก ์ ํํ์ต๋๋ค.**

```JavaScript 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    // input ์ text๊ฐ ๋น์นธ์ด ์๋๋.
    const newTodos = [...todos];
    if (newTodos.length < 6) {
      setTodos([...todos, { text: inputValue }]);
      setInputValue("");
    } else {
      alert("์ต๋ 6๊ฐ ๊น์ง ์์ฑ ๊ฐ๋ฅ");
    }
  };
```

<img src="https://user-images.githubusercontent.com/108771927/220031754-d48fa9a8-a82c-4198-81a4-7382025f366b.JPG" width="300" height="300"/>

- **๊ฐ๋ณ ์ญ์ ๊ฐ ๊ฐ๋ฅํ๊ฒ ๊ตฌํํ์๊ณ  checkbox๋ฅผ ํตํด ์๋ฃ๋ ๋ชฉ๋ก ์ ๋ถ ์ญ์ ๋ฅผ ์ถ๊ฐํ์์ต๋๋ค**

```JavaScript
// check๋ ํ ์ผ ์ ๊ฑฐ
  const handleCheckRemove = () => {
    const newTodos = [...todos];
    const falseArr = newTodos.filter((e) => !e.checked);
    // console.log(falseArr);
    setTodos(falseArr);
  };
```
