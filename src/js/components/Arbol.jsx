
import React, { useState, useEffect } from 'react';

const Arbol =() => {
  const [luzActiva, setactivarLuz] = useState(() => Array(10).fill(false));
  const [funcionando, setFuncionando] = useState(true)
  useEffect(() => {
    if (funcionando === true) {

    const interval = setInterval(() => {
      const lucesactivadas = Array(luzActiva.length).fill(false);
      const lucesAleatorias = Math.floor(Math.random() * lucesactivadas.length);
      lucesactivadas[lucesAleatorias] = true;
      setactivarLuz(lucesactivadas)

    }, 500);

    return () => clearInterval(interval);
  }
  }, [funcionando]);

  const apagarLuces = () => {
    setactivarLuz(lucesactivadas => lucesactivadas.map(() => false))
    setFuncionando(false)
  }

  return (



    <div className="tree">
      {/* Hojas del árbol */}
      <div className="tri layer-1" />
      <div className="tri layer-2" />
      <div className="tri layer-3" />

      <div className="luces">
        <div className="fila-luces">
          <div className={`luz roja ${luzActiva[0] ? 'is-on' : ''}`}>●</div>
        </div>
        <div className="fila-luces">
          <div className={`luz amarilla ${luzActiva[1] ? 'is-on' : ''}`}>●</div>
          <div className={`luz verde ${luzActiva[2] ? 'is-on' : ''}`}>●</div>
        </div>
        <div className="fila-luces">
          <div className={`luz verde ${luzActiva[3] ? 'is-on' : ''}`}>●</div>
          <div className={`luz amarilla ${luzActiva[4] ? 'is-on' : ''}`}>●</div>
          <div className={`luz roja ${luzActiva[5] ? 'is-on' : ''}`}>●</div>
        </div>
        <div className="fila-luces">
          <div className={`luz roja ${luzActiva[6] ? 'is-on' : ''}`}>●</div>
          <div className={`luz verde ${luzActiva[7] ? 'is-on' : ''}`}>●</div>
          <div className={`luz amarilla ${luzActiva[8] ? 'is-on' : ''}`}>●</div>
          <div className={`luz roja ${luzActiva[9] ? 'is-on' : ''}`}>●</div>
        </div>
      </div>
      {/* Luces del árbol */}

      <div className="trunk" />


      <button className='Boton' onClick={apagarLuces}>
        APAGAR
      </button>
      <button className='Boton' onClick={() => setFuncionando(true)}>
        ENCENDER
      </button>
    </div>

  );
}
export default Arbol;