import React from 'react'
import data from './data'

const OurPeople = () => {
  return (
    <>
    <div class="bg-card p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start">
  <img class="w-full md:w-1/3 rounded-lg mb-6 md:mb-0 md:mr-6" src={data[0].docl1} alt="" />
  <div class="text-card-foreground">
    <h2 class="text-muted-foreground text-sm mb-2 text-[#44C6E9]">Sobre Mí</h2>
    <h1 class="text-primary text-3xl font-bold mb-4 text-[#00296D]">Dra. Patricia Nieves Kiriaco</h1>
    <ul class="list-disc list-inside space-y-4">
      <li>Médica Cirujano, graduada en la Universidad Nacional de Córdoba, Argentina.</li>
      <li>Odontóloga, graduada en la Universidad de París, Francia</li>
      <li>Docente de la Universidad Nacional de Córdoba desde el año 1975</li>
      <li>
        Miembro de las siguientes Academias:
        <ul class="list-disc list-inside ml-4 space-y-1">
          <li>A.L.A.O: Academia Latinoamericana de Oseointegración.</li>
          <li>A.I.I.O: Academia Internacional de Implantes y Oseointegración . Miembro Fundador</li>
          <li>A.V.O.I.O: Academia Venezolana de Oseointegración e Implantología Oral. Miembro Honorario.</li>
          <li>Pierre Fauchard Academy: Academia de Honor de Odontología de E.E.U.U.</li>
          <li>A.I.I.P: Academia Internacional de Implantología y Periodoncia – Barcelona. Presidente Internacional.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>
    </>
  )
}

export default OurPeople