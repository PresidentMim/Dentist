import React from 'react'
import data from './data.js'
const Hero = () => {
  return (
    <>
    <div id="hero" className='box-border  px-20 py-5 bg-[#FFF9FD] space-y-12'>
    <div id="Navbar" className='flex items-center justify-between  '>
        <div id="bx1" className='flex gap-2'>
            <img src={data[0].tooth} alt="" className=' w-14 h-14'/>
            <div id="titles" className=' text-center'>
            <p className=' font-semibold'> Ondontologia Integral </p>
            <p className=' font-thin'>Salud & Estetica Dental</p>
            </div>

        </div>
        <div id="bx1" className=' md:block hidden'>
            <ul className='flex '>
                <li className='px-4'><a href="#">Inicio</a></li>
                <li className='px-4'><a href="#">Servicios</a></li>
                <li className='px-4'><a href="#">Nosotros</a></li>
                <li className='px-4'><a href="#">Contacto</a></li>
            </ul>
        </div>
        <div id="bx2"className=' md:block hidden' >
            <button className=' border px-3 py-2 rounded-2xl'><a href="#" className=' text-[#00296D]'>Saca tu turno</a></button>
        </div>
    </div>
    <div id="frame3" className='flex items-center justify-between  '>
        <div id="bx1" className=' space-y-6 w-[32rem]'>
            <p className=' text-[#2977D5]'>En Cordoba Capital</p>
            <p className=' text-[64px] '>Una excelente  experiencia  Odontológica</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit molestie, rhoncus luctus arcu ut eros augue. Eu commodo laoreet parturient quam purus magna pretium luctus.</p>
            <div id="btns" className=' flex justify-between'>
                <div id="bx1">
                    <button className='bg-[#44C6E9] px-[2.50rem] py-2 rounded shadow-xl shadow-[#2977D5]'><a href="" className='text-[#FFF9FD]'>Saca tu turno</a></button>
                </div>
                <div id="bx2">
                    <a href="" className=' underline'>Nuestro Servicios</a>
                </div>
            </div>
        </div>

        <div className="relative"  id="bx2" >
          <img src={data[0].rectangle} alt="Tooth and Gum" className="block" />
          <img src={data[0].image1} alt="Inner Image" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[ 65%]" />
        </div>
    </div>
    </div>
    </>
  )
}

export default Hero