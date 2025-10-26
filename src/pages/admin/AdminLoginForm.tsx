import React from 'react'
import Logo from '@/components/custom/utils/Logo';
import { Button } from '@/components/ui/button.tsx';
import { Link } from 'react-router-dom';
const AdminLogin = () => {
  return (
    <div className="relative min-h-screen bg-[#E6EDFC]">
      <div className="bg-white left-0 top-0 h-[6rem] gap-8 sticky  z-50 flex items-center">
        <Logo/>
      </div>
       <div className="my-8 z-0  w-4/5 mx-auto rounded-md h-[50rem] bg-white">
         <form className="flex flex-col gap-12 justify-center  p-12">
           <Button className="text-white bg-gradient-to-l from-[#007BFF] to-[#007BFF] font-bold text-lg h-20 rounded-lg">Connexion entreprise</Button>
           <p className="italic text-center mx-auto w-4/5">Connectez-vous avec votre email professionnel et le mot de passe envoyé par mail pour accéder à votre espace NoWait.</p>
           <div className="flex flex-col gap-2">
             <label for="email">Email professionnel de l’Admin principal *</label>
             <input
               type="email"
               placeholder="example@admin.com"
               className="border p-2 rounded bg-transparent border-black outline-none"
              required
             />
           </div>
           <div className="flex flex-col gap-2">
             <label for="email">Mot de passe*</label>
             <input
               type="password"
               placeholder="********"
               className="border p-2 rounded bg-transparent border-black outline-none"
               required={'true'}
             />
           </div>
            <Link to="/admin/forgot-password"><span className="flex flex-row-reverse text-primary font-bold text-lg">Mot de passe oublié ?</span></Link>
           <Button className="text-white w-1/2 mx-auto font-bold text-lg p-6 h-20 rounded-md bg-gradient-to-r from-primary to-secondary ">Se connecter →</Button>
           <hr className="border-gray-400 border"/>
           <div className="flex gap-2 mx-auto">
             <p>Vous n'avez pas encore un compte ?</p>
             <Link to="/admin/signup">
               <span className="text-primary font-semibold"> Se connecter</span>
             </Link>

           </div>
         </form>
       </div>
    </div>
  )
}

export default AdminLogin
