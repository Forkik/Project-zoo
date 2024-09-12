import React, { useContext } from'react';
import TariffFormAdd from './TariffFormAdd';
import TariffItem from './TariffItem';
import { AppContext } from '../../AppContext';


function TariffPage({ tariffs, setTariffs }) {

const {user} = useContext(AppContext)
  return (
      <div>
        <h1>Tariff Page</h1>
        {user && user.isAdmin && (<TariffFormAdd setTariffs={setTariffs}/>)}
        {tariffs.map((tariff) => <TariffItem  tariff={tariff} key={tariff.id} setTariffs={setTariffs}/>)}
        </div>
  );
}

export default TariffPage;