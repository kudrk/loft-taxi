import React from "react";



export class Login extends React.Component {

  onClick = event => {
    event.preventDefault();
    // Запрещаем перезагрузку страницы
    this.props.navigate('map');
    //Переход на страницу с картой
  }


  render() {
    return (
      <form>
        <div>
          <div>
            <h1>Войти</h1>
            <p>Новый пользователь?<a>Зарегистрируйтесь</a></p>
          </div>
          <label htmlFor="email"></label>
          <input id="email" type="email" name="email" size="28" placeholder="Имя пользователя*" />
          <label htmlFor="password"></label>
          <input id="password" type="password" name="password" size="28" placeholder="Пароль*" />
          <input onClick={this.onClick} type="submit" value="Войти" />
        </div>
      </form >
    )
  }
};

export default Login;