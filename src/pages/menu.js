import FridgeIcon from '../refrigerator.png';
import PorkImage from '../assets/images/pork.png';
import SheepImage from '../assets/images/sheep.png';
import CowImage from '../assets/images/cow.png';

const Menu = `
<div class="flex flex-row gap-x-4">
<img src="${FridgeIcon}" class="w-1/2 h-auto" alt="Meat Icon">
<div class="self-center rounded-lg bg-red-800 w-1/2 px-4 py-6 font-semibold text-2xl text-red-200">
  <p>Meat Menu (per 2 kilograms)</p>
  <div class="mt-4 flex flex-col gap-y-4">
    <div class="flex flex-row items-center">
      <img class="h-16 w-auto" src="${PorkImage}" alt="Pork Meat" />
      <p class="ml-4">Pork Meat</p>
      <p class="ml-auto">$17</p>    
    </div>
    <div class="flex flex-row items-center">
      <img class="h-16 w-auto" src="${CowImage}" alt="Cow Meat" />
      <p class="ml-4">Cow Meat</p>
      <p class="ml-auto">$41</p>    
    </div>
    <div class="flex flex-row items-center">
      <img class="h-16 w-auto" src="${SheepImage}" alt="Sheeo Meat" />
      <p class="ml-4">Sheep Meat</p>
      <p class="ml-auto">$25</p>    
    </div>
  </div>
</div>
</div>
`

export default Menu;