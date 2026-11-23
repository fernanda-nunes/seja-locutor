import styles from "./Outlet.module.css";  
import { Curso } from "./Curso/index";
import { Mentoria } from "./Mentoria/index" 
import { QuemSouEu } from "./QuemSouEu/index"
import { Depoimentos } from "./Depoimentos/index"

// Componente principal da Outlet
export const Outlet = () => {
  return (
    // {/* Container principal da galeria */}
    <div className="container">

      <div className={styles.outletGrid}>

        {/* Sessão Curso */}

        <section className={`${styles.curso} rounded-[20px]`}>

         <Curso />

        </section>

        {/* Sessão Mentoria */}
        <section className={`${styles.mentoria} rounded-[20px]`}>

         <Mentoria />

        

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
