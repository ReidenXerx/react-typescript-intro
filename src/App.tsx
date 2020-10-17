import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { TodosPage } from './pages/TodosPage'
import { AboutPage } from './pages/AboutPage'
//создать класс, в котором объявить несколько полей всех областей видимости (паблик, прайват, протектед)
//провести наследование от этого класса
//провести наследование от другого абстрактного класса другому 
//провести имплементирование от интерфейса
//создать дженерик класс с ограничением для разных параметров <T> и наследоваться от него, должны быть поля всех типов области видимости
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
