
import { NavLink, Route, BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import style from './App.module.css'
import Home from './pages/Home';
import Heroes from './pages/Heroes';
import RqHeroes from './pages/RqHeroes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Hero from './pages/Hero';


const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <>
          <nav className={style.nav_card}>
            <ul className={style.ul_card}>
              <li><NavLink exact activeClassName={style.nav_li_items_active} className={style.nav_li_items} to={"/"}>Home</NavLink></li>
              <li><NavLink exact activeClassName={style.nav_li_items_active} className={style.nav_li_items} to={"/heroes"}>Heroes</NavLink></li>
              <li><NavLink exact activeClassName={style.nav_li_items_active} className={style.nav_li_items} to={"/rq-heroes"}>RQ Heroes</NavLink></li>
            </ul>
          </nav>
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/heroes'} exact component={Heroes} />
            <Route path={'/hero/:heroId'} exact component={Hero} />
            <Route path={'/rq-heroes'} exact component={RqHeroes} />
          </Switch>
        </>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
