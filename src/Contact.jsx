import React from 'react'
import data from './data'
const Contact = () => {
  return (
    <>
    <div id="conaiter" className='box-border bg-[#D4E4F4] '>
        <div id="texts" className=' text-right pr-[310px] pt-3'>
<p className=' text-[#44C6E9] '>Saca un turno</p>
<p className='text-[#00296D] font-semibold text-4xl pb-4'>Contacto</p>
        </div>
        <div id="bxconatier" className=' flex justify-center p-8 gap-[100px] flex-wrap'>
            <div id="bx1" className='w-[300px] space-y-8'>
                <div id="bts1" className='flex items-start gap-4'>
                    <img src={data[0].vector3} alt="" className=' w-8' />
                    <div >
                    <p>Escribinos al Mail</p>
                    <p>info@tudentista.com.ar</p>
                    </div>
                </div>
                <div id="bts1" className='flex items-start gap-4'>
                    <img src={data[0].vector3} alt="" className=' w-8' />
                    <div>
                    <p>Chatea con Nosotros</p>
                    <p>+54 35176085XX</p>
                    </div>
                </div>
                <div id="bts1" className='flex items-start gap-4'>
                    <img src={data[0].vector3} alt="" className=' w-8' />
                    <div>
                    <p>Llamanos</p>
                    <p>0810 888 90XX</p>
                    </div>
                </div>
                <div id="bts1" className='flex items-start gap-4'>
                    <img src={data[0].vector3} alt="" className=' w-8' />
                    <div>
                    <p>Visitanos</p>
                    <p>Av. Color 1338, Barrio Alberdi</p>
                    <p>Lunes a Viernes 8 a 18</p>
                    </div>
                </div>
            </div>
            <div id="bx2" className=' h-[500px] border rounded-md w-[500px] bg-[#44C6E9] text-[#FFF9FD] space-y-6 pl-4 place-content-center'>
                <p className=' font-semibold text-[31px]'>Ponete en contacto para coordinar un turno</p>
                <input type="text" placeholder='Nombre' className='   border-b-2  border-[#FFF9FD] block w-[80%] p-2 bg-transparent placeholder-[#fff]'/>
                <input type="email" placeholder='Email' className=' border-[#FFF9FD]  border-b-2 block  w-[80%] p-2  bg-transparent placeholder-[#fff]'/>
                <input type="text" placeholder='Telefono' className=' border-[#FFF9FD] border-b-2 block  w-[80%] p-2 bg-transparent placeholder-[#fff]'/>
                <textarea name="" id="" placeholder='Problema' className='block w-[80%]  bg-transparent placeholder-[#fff] border-[#FFF9FD]  border-b-2 '></textarea>
                <button className='bg-[#FFF9FD] border rounded-md py-2 px-24'> <a href="#" className='text-[#000]  '>Enviar</a></button>
            </div>
        </div>
        <img src={data[0].image2} alt="" />
        <div className=' w-full bg-black text-white text-center'> Diseñado por Uncoder.com.ar</div>
    </div>
    </>
  )
}

export default Contact