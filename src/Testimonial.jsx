import React from 'react'

const Testimonial = () => {
  return (
    <div class="bg-background py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-secondary text-lg font-semibold text-[#44C6E9]">Testimonios</h2>
      <h1 class="text-3xl font-extrabold text-foreground mt-2 text-[#00296D]">Lo que opinan nuestros Pacientes</h1>
    </div>
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-card p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-card-foreground">Matías Gomez</h3>
        <div class="flex items-center mt-2 mb-4">
          <span class="text-primary">★</span>
          <span class="text-primary">★</span>
          <span class="text-primary">★</span>
          <span class="text-primary">★</span>
          <span class="text-muted-foreground">★</span>
        </div>
        <p class="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.
        </p>
      </div>
      <div class="bg-card p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-card-foreground">María Paz</h3>
        <div class="flex items-center mt-2 mb-4">
          <span class="text-primary">★</span>
          <span class="text-primary">★</span>
          <span class="text-primary">★</span>
          <span class="text-primary">★</span>
          <span class="text-muted-foreground">★</span>
        </div>
        <p class="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.
        </p>
      </div>
      <div class="bg-card p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-card-foreground">Silvia Rios</h3>
        <div class="flex items-center mt-2 mb-4">
          <span class="text-primary">★</span>
          <span class="text-primary">★</span>
          <span class="text-primary">★</span>
          <span class="text-primary">★</span>
          <span class="text-muted-foreground">★</span>
        </div>
        <p class="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.
        </p>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <button class=" border border-primary rounded-full px-6 py-2  text-[#44C6E9]">Ver Mas Reviews</button>
    </div>
  </div>
</div>
  )
}

export default Testimonial