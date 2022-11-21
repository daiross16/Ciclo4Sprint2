import React from 'react'

export const Login = () => {
    return(

        <div className="container" style={{background:"red", marginTop:40, padding: 0}}>
            <form id="form_login">
                <div>
                    <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
                    <label htmlFor="txtusu"><strong>Nombre de Usuario </strong></label>
                    <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control"  required/>
                </div>
                <div>
                    <label htmlFor="txtpas"><strong>Contraseña</strong></label>
                    <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control"  required/>
                </div><br/>                
                
                <input type="submit" className="btn btn-primary" value="Ingresar"/>
                <br/><br/>
                <input type="submit" className="btn btn-primary" value="Registrese"/>
            </form>
        </div>

    )

}