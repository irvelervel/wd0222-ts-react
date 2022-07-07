import { useState } from 'react'

interface FunctionalComponentProps {
  title: string
  subTitle?: string
}

interface Pasta {
  name: string
  description: string
  id: number
}

const FunctionalComponent = ({ title, subTitle }: FunctionalComponentProps) => {
  // let's write here a state variable using useState!
  const [counter, setCounter] = useState(0) // TS is able to automatically INFERE
  // the right number type thanks to our initial 0 value!

  const [selectedPasta, setSelectedPasta] = useState<null | Pasta>(null)
  // specifying a type argument to useState is useful in cases in which
  // you're passing an initial value that doesn't reflect the whole possible
  // typeset of the variable

  return (
    <div>
      <h2>{title.toLowerCase()}</h2>
      <h3>{subTitle || 'Default subTitle value'}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <div>The counter value is: {counter.toPrecision(2)}</div>
      {/* you're allowed to use number methods! */}
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button
        onClick={() =>
          setSelectedPasta({
            name: 'Amatriciana',
            description: 'Pasta with Guanciale and stuff',
            id: 2,
          })
        }
      >
        AMATRICIANA
      </button>
    </div>
  )
}

export default FunctionalComponent
