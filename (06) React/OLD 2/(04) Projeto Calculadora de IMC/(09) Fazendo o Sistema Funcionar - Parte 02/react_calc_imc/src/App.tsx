import { useState } from 'react';
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import leftArrow from './assets/leftarrow.png'
import { GridItem } from './components/GridItem';

import { levels, calculateIMC, Level } from './helpers/imc';

function App() {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Level|null>(null)

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateIMC(heightField, weightField))
    } else {
      alert('Digite todos os Campos.')
    }
  }

  const handleBackButton = () => {
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }

  return (
    <div className={ styles.main }>
      <header>
        <div className={ styles.headerContainer }>
          <img src={ poweredImage } alt="PoweredImage" width={150}/>
        </div>
      </header>

      <div className={ styles.container }>

        <div className={ styles.leftSide }>
          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corporal, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type='number'
            placeholder='Digite a sua altura. Ex: 1.50 (em metros)'
            value={ heightField > 0 ? heightField : '' }
            onChange={ e => setHeightField(parseFloat(e.target.value)) }
          />

          <input
            type='number'
            placeholder='Digite o seu peso. Ex: 75.3 (em kg)'
            value={ weightField > 0 ? weightField : '' }
            onChange={ e => setWeightField(parseFloat(e.target.value)) }
          />

          <button onClick={ handleCalculateButton }>Calcular</button>
        </div>

        <div className={ styles.rightSide }>
          { !toShow &&
            <div className={ styles.grid }>
              { levels.map((item, key) => (
                <GridItem key={key} item={item} />
              )) }
            </div>
          }

          { toShow &&
            <div className={ styles.rightBig }>

              <div className={ styles.rightArrow } 
                onClick={ handleBackButton }>
                <img src={ leftArrow } alt="Arrow Left" width={25} />
              </div>

              <GridItem item={ toShow } />
            </div>
          }
        </div>

      </div>
    </div>
  );
}

export default App;
