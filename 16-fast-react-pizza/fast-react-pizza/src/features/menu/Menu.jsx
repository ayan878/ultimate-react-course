import { useLoaderData } from 'react-router-dom';
import {getMenu} from '../../services/apiRestaurant'
function Menu() {
  const menu= useLoaderData();
  console.log(menu)
  return <h1>Menu</h1>;
}

function loader(){
  const menu=await getMenu();
  return menu;
}

export default Menu;
