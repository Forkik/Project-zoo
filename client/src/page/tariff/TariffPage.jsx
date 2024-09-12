import React from'react';
import TariffFormAdd from './TariffFormAdd';
import TariffItem from './TariffItem';


function TariffPage({ tariffs, setTariffs }) {


  return (
      <div>
        <h1>Tariff Page</h1>
        <TariffFormAdd setTariffs={setTariffs}/>
        {tariffs.map((tariff) => <TariffItem  tariff={tariff} key={tariff.id} setTariffs={setTariffs}/>)}
        </div>
  );
}

export default TariffPage;