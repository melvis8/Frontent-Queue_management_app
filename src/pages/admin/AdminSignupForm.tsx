import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import React from 'react';


 const AdminSignupForm = () =>{
  return(
    <div className="bg-[#E6EDFC] grid grid-cols-2 h-[100%] ">
      <aside className="bg-pink-500 relative">
        <Link to="/">
          <div className="flex items-center">
            <p className="h-10 w-10 m-2  rounded-md bg-gradient-to-b from-primary to-secondary ">
              <ChevronLeft className="bg-white font-bold relative left-2 top-2 " color="black" size={24}/>
            </p>
            <span className="text-lg font-semibold">Retour à l’acceuil</span>
          </div>
        </Link>
        <div className="bg-gradient-to-b from-[#0071ff] to-[#00d4b0] py-8 rounded-3xl z-0">
          <div className="relative flex flex-col gap-y-6 text-white ">
            <img src="/images/LogoDark.png" alt="" className="top-0 relative w-3/4 h-[15rem]"/>
            <p className="font-bold text-lg tracking-wide pl-20">Créer votre compte entreprise</p>
            <p className="font-medium text-md tracking-tighter pl-20">Commencez à optimiser vos files d'attente dès maintenant</p>
          </div>
        </div>
        <div className=" bg-white relative z-10 top-[-2rem]">
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
      </aside>
      <aside>
        <img src="/images/signup.svg" alt="" className="my-[15%] "/>
      </aside>
    </div>
  )
}

 export default  AdminSignupForm;