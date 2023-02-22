const Definition = ({ result }) => {
  // desarrollador JR
  // const definition = result[0]
  
  // desarrolador Sr
  const [definition] = result
  console.log('🚀 ~ file: Definition.js:7 ~ Definition ~ definition:', definition)

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
        <audio src="https://ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3" preload="none" controls></audio>
        </span>
      </div>
    </>
  )
}

export default Definition
