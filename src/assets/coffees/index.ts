import Americano from './Americano.png';
import Arabe from './Arabe.png';
import CafeGelado from './CafeGelado.png';
import CafecomLeite from './CafecomLeite.png';
import Capuccino from './Capuccino.png';
import ChocolateQuente from './ChocolateQuente.png';
import Cubano from './Cubano.png';
import Expresso from './Expresso.png';
import ExpressoCremoso from './ExpressoCremoso.png';
import Havaiano from './Havaiano.png';
import Irlandes from './Irlandes.png';
import Latte from './Latte.png';
import Macchiato from './Macchiato.png';
import Mochaccino from './Mochaccino.png';

export const coffeeImages: Record<string, string> = {
  '/coffees/expresso-tradicional.png': Expresso,
  '/coffees/expresso-americano.png': Americano,
  '/coffees/expresso-cremoso.png': ExpressoCremoso,
  '/coffees/expresso-gelado.png': CafeGelado,
  '/coffees/cafe-com-leite.png': CafecomLeite,
  '/coffees/latte.png': Latte,
  '/coffees/capuccino.png': Capuccino,
  '/coffees/macchiato.png': Macchiato,
  '/coffees/mochaccino.png': Mochaccino,
  '/coffees/chocolate-quente.png': ChocolateQuente,
  '/coffees/cubano.png': Cubano,
  '/coffees/havaiano.png': Havaiano,
  '/coffees/arabe.png': Arabe,
  '/coffees/irlandes.png': Irlandes,
};

export function getCoffeeImage(path: string): string {
  return coffeeImages[path];
}