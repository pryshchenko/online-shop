import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import './scss/app.scss';

const App = ()  => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
           <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock name={"Stopro"} cost={111}/>
            <PizzaBlock name={"Мусульская"} cost={222}/>
            <PizzaBlock name={"Славянская"} cost={333}/>
            <PizzaBlock name={"Stopro"} cost={111}/>
            <PizzaBlock name={"Мусульская"} cost={222}/>
            <PizzaBlock name={"Славянская"} cost={333}/>
            <PizzaBlock name={"Stopro"} cost={111}/>
            <PizzaBlock name={"Мусульская"} cost={222}/>
            <PizzaBlock name={"Славянская"} cost={333}/>
            <PizzaBlock name={"Stopro"} cost={111}/>
            <PizzaBlock name={"Мусульская"} cost={222}/>
            <PizzaBlock name={"Славянская"} cost={333}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
