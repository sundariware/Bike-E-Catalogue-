document.addEventListener('DOMContentLoaded', function () {
    // Bike data
    const bikes = [
        {
            heading: "Yamaha FZ-X Features",
            cards: [
                {
                    name: 'Yamaha FZ-X',
                    image: 'https://www.yamaha-motor-india.com/theme/v3/image/webp/fzx/color/color-01.webp',
                    description: 'The All New Yamaha FZ-X comes to India as a crossover motorcycle that is inspired by Neo-Retro design thinking. With future proof features that enhance every ride and trademark classic charisma, the Yamaha FZ-X will inspire a whole new generation of motorcyclists. Together, the toughness, the design, comfort, connectivity and safety of this new motorcycle will make every ride feel like a burst of freedom.',

                    
                },
                {
                    name: 'Traction Control system',
                    image: 'https://www.yamaha-motor-india.com/theme/v3/image/webp/fzx/tcs-logo.webp',
                    description: 'The FZ-X comes with Traction Control System. This is a dedicated electronic system that has the remarkable ability of reducing the chances of a wheelspin (slippage due to loss of traction).',
                },
                {
                    name: 'Trusted & Efficient 149cc FI Engine',
                    image: 'https://www.yamaha-motor-india.com/theme/v3/image/webp/fzx/performance_01.webp?v=2',
                    description: 'FZ-X mounts an air-cooled 4-stroke 149cc SOHC, 2-valve, single-cylinder fuel-injected engine which has been tuned to further polish the feeling of superior acceleration from stops and exhilarating feeling when overtaking. The ignition timing and injection maps for the fuel injection system are designed such that riders get a good feeling of acceleration while still enjoying the upright riding position.',
                },
                {
                    name: 'New Color',
                    image: 'https://www.yamaha-motor-india.com/theme/v3/image/webp/fzx/new-retro-color.webp?v=3',
                    description: 'A color that portrays an image of classic cafe racers that are both sporty & tough.',
                },
                {
                    name: 'Golden Alloy Wheels',
                    image: 'https://www.yamaha-motor-india.com/theme/v3/image/webp/fzx/golden-wheel.webp',
                    description: 'Golden Colour alloy wheels strike a perfect blend of style and adventure to FZ-X.',
                },
                {
                    name: 'Bi-Functional LED Head light with DRL',
                    image: 'https://www.yamaha-motor-india.com/theme/v3/image/webp/fzx/design_02.webp?v=3',
                    description: 'The new LED head light & DRL makes the bike hard to miss during the day and stand out during the night',
                },
                {
                    name: 'LED Flashers',
                    image: 'https://www.yamaha-motor-india.com/theme/v3/image/webp/fzx/design_led-flasher.webp',
                    description: 'Signal your unique identity with unmissable front and back LED flashers - a perfect mash-up of style and safety.',
                },
                {
                    name: 'Front 1ch ABS & Disc Brake',
                    image: 'https://www.yamaha-motor-india.com/theme/v3/image/webp/fzx/safety_01.webp?v=2',
                    description: 'Front Disc with Bosch Anti-Lock Braking System (ABS) helps in achieving greater control over the bike during braking by restricting the wheel lock ups thereby maintaining tractive contact with the road surface to avoid skidding in slippery conditions. Rear Disc brake augments more quality to the long legacy of FZ braking system.',
                },
                {
                    name: 'Two-level Seat with tuck and roll',
                    image: 'https://www.yamaha-motor-india.com/theme/v3/image/webp/fzx/design_01.webp?v=2',
                    description: 'The seat on the FZ-X uses a tuck and roll design that crests and valleys creating a slip-resistant feel that is both comfortable and steady',
                },
                {
                    name: 'Block pattern Front & Rear Tyres',
                    image: 'https://www.yamaha-motor-india.com/theme/v3/image/webp/fzx/safety_02.webp?v=3',
                    description: 'In addition to adding to its formidable street presence, these tires boost the handling and enables good riding comfort across highways, busy city street and rough and wet roads.',

                },
                {
                    name: 'Telescopic suspension with front fork boot',
                    image: 'https://www.yamaha-motor-india.com/theme/v3/image/webp/fzx/suspension.webp?v=2',
                    description: 'The front fork is fitted with fork boot that provide protection against inner tube scratches or dents while adding a look of old-school authenticity.',

                },
              
            ]
        }

        


    ];

    // Populate catalog with bike cards
    const catalog = document.getElementById('catalog');
    bikes.forEach(bike => {

        bike.cards.forEach((b, i) => {
            if(i == 1) {
                const bikeHeading = document.createElement('h1');
                bikeHeading.textContent = bike.heading
                catalog.append(bikeHeading)
            }
            const bikeCard = document.createElement('div');
            bikeCard.classList.add('bike-card');
            bikeCard.innerHTML = `
                    <img src="${b.image}" alt="${b.name}">
                    <h2>${b.name}</h2>
                    <p>${b.description}</p>
                `;
            catalog.appendChild(bikeCard);
        })
    })
});
