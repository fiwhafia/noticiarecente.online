document.title = 'Mercado Livre Ofertas'

const config = {
  title: 'Ar Condicionado Hi Wall LG Dual Inverter Voice 12.000 Btus Frio 220v R-32',
  buyUrl: 'https://pagarseupedido.online/checkouts/endereco_ar/',
  images: [
    'https://cdn.discordapp.com/attachments/707344457598500967/1183932707596664902/D_NQ_NP_988745-MLU71735143486_092023-O.webp?ex=658a2241&is=6577ad41&hm=21c3949ac7caae81147f1ee8d831e0fb0ed23f1663e682c1310e7f7af9120c11&',
    'https://cdn.discordapp.com/attachments/707344457598500967/1183932707248545842/D_NQ_NP_946218-MLU72612995503_112023-O.webp?ex=658a2241&is=6577ad41&hm=c2a028417c0d6fddd25ed1b7a7f55aacc18191ac51fed33f67593035313d5d7a&',
    'https://cdn.discordapp.com/attachments/707344457598500967/1183932705877004318/D_NQ_NP_695009-MLU71735143484_092023-O.webp?ex=658a2241&is=6577ad41&hm=9ea446cb7efe8e1007b97e93a5a068910a1aa3bcb9c289877fd14f86f26cbded&',
    'https://cdn.discordapp.com/attachments/707344457598500967/1183932706262876220/D_NQ_NP_873165-MLU71735094436_092023-O.webp?ex=658a2241&is=6577ad41&hm=e11359ed6622bdbfa979d88a1980a713f790b06d8470b80599136ab2f427139c&'
  ],
  originalPrice: 'R$ 1599,90',
  newPrice: 'R$ 259,99',
  discount: '90%',
  portion: '6x R$ 39,98 sem juros',
  banner: 'https://cdn.discordapp.com/attachments/707344457598500967/1183933384540569721/BBlock_Dual-Inverter-Voice_9000-Btus-Quente20Frio-220v-min.png?ex=658a22e3&is=6577ade3&hm=188600d3602dc3c32bf6203bad554315c5eeb085f4f766943b19cd8416ae9efc&',
  anotherProduct: 'https://pagarseupedido.online/arcond'
}

function redirect(url) {
  window.open(url)
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.attachment-full.size-full.wp-image-573').setAttribute('srcset', config.banner)
  document.querySelector('.discount').textContent = config.discount
  document.querySelector('.portion').textContent = config.portion
  document.querySelector('del').textContent = config.originalPrice
  document.querySelector('.realPrice').textContent = config.newPrice
  document.querySelector('.perfume').setAttribute('onclick', `redirect('${config.anotherProduct}')`)


  document.querySelectorAll('.elementor-button.elementor-button-link.elementor-size-sm').forEach((el) => el.href = config.buyUrl)

  document.querySelectorAll('.productName').forEach(el => el.innerHTML = config.title)

  const SwiperItems = document.querySelector('.swiper-wrapper').innerHTML = config.images.map((image, index) => {
    return `
    <div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${config.images.length}">
      <figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="${image}" alt="6a30ab766311bfba4edfb0d94d0c2575.webp" /></figure>
    </div>
    `
  }).join('')

  let items = document.querySelectorAll('.swiper-slide-inner')
  config.images.forEach((image, index) => {
    if (!SwiperItems[index]) return
    SwiperItems[index].querySelector('img').src = image
  })
  // document.querySelector('.elementor-image-carousel.swiper-wrapper').innerHTML = config.images.map((image, index) => {
  //   return `
  //     <div class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" role="group" aria-roledescription="slide" aria-label="${index + 1} / ${config.images.length}" data-swiper-slide-index="${index + 1}" style="width: 373px;" aria-hidden="true" inert="">
  //     <figure class="swiper-slide-inner">
  //       <img decoding="async" class="swiper-slide-image" src="${image}" alt="4fe9b96b673c46b18b24af55b355cd9f.webp">
  //     </figure>
  //     </div>
  //   `
  // }).join(' ') 
})
