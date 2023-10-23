import Api from '../../Api'
import './Login.css'

export const Login = ({ onReceive }) => {
   const handleFacebookLogin = async() => {
      let result = await Api.fbPopUp()

      if(result) {
         onReceive(result.user)
      } else {
         alert('Erro!')
      }
   }

   return(
      <div className="login">
         <button  
            onClick={ handleFacebookLogin }>
            Logar com o Facebook
         </button>
      </div>
   )
}