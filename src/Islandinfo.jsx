import React from 'react'
import data from './data.js'

const Islandinfo = () => {
  return (
    <div id="container" className='bg-blue-100 flex justify-center  gap-32  p-4'>
        <div id="bx1">
        <div class="  rounded-lg flex items-start space-x-4">
  <img src={data[0].vector} />
  <div>
    <h2 class="text-blue-800 font-semibold">Dirección</h2>
    <p class="text-blue-800">Av. Color 1560</p>
    <p class="text-blue-800">Cordoba, Cordoba Capital</p>
  </div>
</div>
        </div>
        <div id="bx1">

        <div class="  rounded-lg flex items-start space-x-4">
  <img src={data[0].vector1} />
  <div>
    <h2 class="text-blue-800 font-semibold">Dirección</h2>
    <p class="text-blue-800">Av. Color 1560</p>
    <p class="text-blue-800">Cordoba, Cordoba Capital</p>
  </div>
</div>
        </div>
        <div id="bx1">

        <div class=" rounded-lg flex items-start space-x-4">
  <img src={data[0].vector2} />
  <div>
    <h2 class="text-blue-800 font-semibold">Dirección</h2>
    <p class="text-blue-800">Av. Color 1560</p>
    <p class="text-blue-800">Cordoba, Cordoba Capital</p>
  </div>
</div>
        </div>
    </div>
  )
}

export default Islandinfo