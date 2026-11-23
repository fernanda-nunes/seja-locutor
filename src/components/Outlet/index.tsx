import styles from "./Outlet.module.css";  
<<<<<<< HEAD
import { Curso } from "./Curso/index";
import { Mentoria } from "./Mentoria/index" 
=======
import { Sobre } from "./Sobre/index";
>>>>>>> e80a9347743e344e6954c2b0e91bc1f017b04347
import { QuemSouEu } from "./QuemSouEu/index"
import { Depoimentos } from "./Depoimentos/index"


<<<<<<< HEAD

=======
>>>>>>> e80a9347743e344e6954c2b0e91bc1f017b04347
// Componente principal da Outlet
export const Outlet = () => {
  return (
    // {/* Container principal da galeria */}
    <div className="container">

      <div className={styles.outletGrid}>

        {/* Sessão About */}
<<<<<<< HEAD
        <section className={`${styles.curso} rounded-[20px]`}>

         <Curso />

        </section>

        {/* Sessão Mentoria */}
        <section className={`${styles.mentoria} rounded-[20px]`}>

         <Mentoria />
=======
        <section className={`${styles.sobre} rounded-[20px]`}>

         <Sobre />
>>>>>>> e80a9347743e344e6954c2b0e91bc1f017b04347

        </section>

        {/* Sessão Quem eu sou */}
        <section className={`${styles.quemSouEu} rounded-[20px]`}>
          
         <QuemSouEu />

        </section>

        {/* Sessão Depoimentos */}
        <section className={` ${styles.depoimentos} rounded-[20px]`}>

        <Depoimentos />
          
        </section>
      </div>
    </div>
  );
};
