const Definition = ({ result }) => {
  // ejemplo para validar que results sea un arreglo
  // if (!Array.isArray(result)) {
  //   return null
  // }
  // desarrollador JR
  // const definition = result[0]
  
  // desarrolador Sr
  const [definition] = result
  console.log('🚀 ~ file: Definition.js:7 ~ Definition ~ definition:', definition)
  const handledAudioSelect = () => {
    const { phonetics, phonetic } = definition
    const currentAudio = phonetics.find((element) =>
      // eslint-disable-next-line no-prototype-builtins
      element.text === phonetic && element.hasOwnProperty('audio'))
    return currentAudio?.audio
  }

  return (
    <>
      <div className="word_section">
        <span>
          <h2>
            {definition.word}
          </h2>
          <span>
            {definition.phonetic}
          </span>
        </span>
        <span>
        <audio src={handledAudioSelect()} preload="none" controls></audio>
        </span>
      </div>
      <div className="definition_meaning">
        {
          definition.meanings.map((meaning, index) => {
            return (
              <div className="deff" key={index}>
                <div className="deff_type">
                  <h3>
                    {meaning.partOfSpeech}
                  </h3>
                  <span className='deff_line'></span>
                </div>
                <ul>
                  {
                    meaning.definitions.map((definition, index) => {
                      return (
                        <li key={index}>
                          <p>{definition.definition}</p>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Definition
