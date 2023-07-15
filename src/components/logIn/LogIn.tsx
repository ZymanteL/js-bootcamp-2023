import "./LogIn.css"

const LogIn = () => {
  return (
    <div className="LogIn">
      <form action="">
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default LogIn