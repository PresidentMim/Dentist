import React from 'react';
import data from './data.js';

const Service = () => {
  return (
    <>
    <div id="main" className=' box-border p-10'>
    <p className=' text-[#2977D5] pb-2'>Especialidades</p>
    <p className='text-[#00296D] font-bold text-4xl pb-8' >Nuestros Servicios</p>
    <div id="container" className=' grid grid-cols-3 gap-2'>
    {[...Array(6)].map((_, index) => (
                <div key={index} id="bx1" className='space-y-4 box-border p-3 mt-2 shadow-md'>
                    <img src={data[0].brbands} alt="" className='w-10' />
                    <p className='text-[#2977D5] font-bold text-2xl'>Implantes</p>
                    <p>
                        Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.
                    </p>
                    <a className="text-[#2977D5]" href="#">Ver Mas</a>
                </div>
            ))}
    </div>
    </div>
    </>
  );
};

export default Service;
