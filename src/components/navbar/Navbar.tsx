import { ReactNode, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'

function Navbar() {

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', "info")
        navigate('/login')
    }

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
          <div className="relative  -mt-6  grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-rose-500 to-rose-600 bg-clip-border text-white shadow-lg shadow-pink-500/40">
          <div className="container flex justify-between text-lg ">
          <Link to='/home' className='hover:underline'>Doe Ação</Link>
            <div className="flex gap-4">
  
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastroTema' className='hover:underline'>Cadastrar Tema</Link>
            <Link to='/postagens' className='hover:underline'>Postagens</Link>
            <Link to='/perfil' className='hover:underline'>Perfil</Link>
            <Link to='/sobre-nos' className='hover:underline'>Sobre</Link>
            <Link to="" onClick={logout} className="hover:underline">Sair</Link>
                    </div>

                </div>
            </div>
        )

    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar