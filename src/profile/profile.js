import React from "react";
import PropTypes from "prop-types"
function Profile (props){
 const {desc ,handleName} = props
  const styleDiv = {backgroundColor: "bisque", width : '30vw', height: '50hw' , paddinBottom: '5%' ,margin: '10px' ,display: 'flex' ,flexDirection:'column'  ,justifyContent: 'center' }
  const stylePhoto = {width: '30vw',height: '30hw' ,borderRadius: '20%',border: '#282c34', paddinBottom: '5%',margin:'10px'  }
  const {fullname,bio,profession} = desc
    return (
     <>
   <img style={stylePhoto} src= {props.children} alt = "Myphoto" />
     <div style={styleDiv}>
        <h3 >{fullname}</h3>  <a href ="/"  onClick ={handleName}> this is my name ! </a>
        <h4>{profession}</h4>    
        <p> {bio}</p>
  </div>

     </>
    )
}
Profile.propTypes={
    fullName: PropTypes.string,
    bio :PropTypes.string,
    profession :PropTypes.string,
    handleName :PropTypes.func
}
Profile.defaultProps = {
    fullName : 'MAYAR Rhouma',
    bio : 'Mon bébé',
    profession :'none',
    handleName : e=> e => {e.preventDefault()
                            alert("I'am Mayar ")}
}
export default Profile;