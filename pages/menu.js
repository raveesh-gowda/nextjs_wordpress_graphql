import { useState, useEffect } from 'react';
import { getMenuItems } from '../lib/utils';

export default function Menu() {
  const [menu, setMenu] = useState({});

  useEffect(async () => {
    const menuFromServer = await getMenuItems();
    setMenu(menuFromServer);
  }, []);

  return (
    <>
      {menu.menus &&
        menu.menus.nodes &&
        menu.menus.nodes.map((ele) => {
          return (
            <div key={ele.id}>
              <h1>{ele.name}</h1>
              {ele.menuItems &&
                ele.menuItems.edges &&
                ele.menuItems.edges.map((e) => <p key={e.node.id}>{e.node.label}</p>)}
              <hr />
            </div>
          );
        })}
    </>
  );
}
