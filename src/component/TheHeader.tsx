import '../style/TheHeader.scss'
import AButton from './AButton'

const TheHeader = () => {
  return (
    <>
    <header>
        <h1>Mon header et mes boutons</h1>
        <AButton />
        <div className="class1">
          <AButton />
        </div>
    </header>
    </>
  )
}

export default TheHeader
