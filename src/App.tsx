import {Suspense, useContext, useState} from "react";
import { Route, Routes, Link} from "react-router-dom";
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {
    const {theme, toggleTheme} = useTheme()
    const bool = true
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                        <Route path={'/about'} element={<AboutPageAsync/>} />
                        <Route path={'/'} element={<MainPageAsync/>} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;