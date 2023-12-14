import './App.css'
import { connect } from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes'

const Page = (props) => {
  return(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)