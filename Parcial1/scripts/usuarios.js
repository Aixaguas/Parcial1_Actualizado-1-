// String, String, String -> Void
function CrearUsuario(username, password, email){
    let UsuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados"));
    
    UsuariosRegistrados.push({
        username: username,
        email: email,
        clave: password
    });

    localStorage.setItem("usuariosRegistrados", JSON.stringify(UsuariosRegistrados));
}

// String, String -> Object | Undefined
function BuscarUsuario(username, password){
    let UsuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados"));

    return UsuariosRegistrados.find((usuario)=> usuario.username == username && usuario.clave == password);
}

// Void -> Array
function ObtenerUsuarios(){
    let UsuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados"));
    
    return UsuariosRegistrados.map((usuario)=> {
        return {username: usuario.username, email: usuario.email}
    });
}

// Object -> Void
function UsuarioLogin(Usuario){
    localStorage.setItem("usuarioLogueado",JSON.stringify(Usuario));
}

// Void -> Void
function UsuarioLogout(){
    localStorage.removeItem("usuarioLogueado");
}