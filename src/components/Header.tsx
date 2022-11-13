import style from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

export function Header(){
     return(
          <div className={style.background}>
               <img src={rocketLogo} alt="" />
               <p><span className={style.to}>To</span><span className={style.do}>Do</span></p>
          </div>
     )
}