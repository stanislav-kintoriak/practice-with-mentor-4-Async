import {Route, Routes} from 'react-router-dom'
import { Layout } from './Layout'
import {HomePage} from '../pages/HomePage'
import {UsersPage} from '../pages/UsersPage'
import {UserDetailPage} from '../pages/UserDetailPage'


export const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Layout/>}>
<Route index element = {<HomePage/>}/>
<Route path='/users' element = {<UsersPage/>}/>
<Route path='/users/:id' element = {<UserDetailPage/>}/>


    </Route>
   </Routes>
  );
};
