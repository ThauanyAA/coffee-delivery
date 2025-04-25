import { Coffee } from "../../@types/definitions";
import { CoffeesList } from "../../components/CoffeesList";
import { Description } from "./components/Description";
import { HomeContainer } from "./styles";

const coffees: Coffee[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["Tradicional"],
    image: "/coffees/expresso-tradicional.png",
    price: 9.9,
    quantity: 0,
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["Tradicional"],
    image: "/coffees/expresso-americano.png",
    price: 9.9,
    quantity: 0,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["Tradicional"],
    image: "/coffees/expresso-cremoso.png",
    price: 9.9,
    quantity: 0,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["Tradicional", "Gelado"],
    image: "/coffees/expresso-gelado.png",
    price: 9.9,
    quantity: 0,
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite quente e espuma",
    tags: ["Tradicional", "Com leite"],
    image: "/coffees/cafe-com-leite.png",
    price: 9.9,
    quantity: 0,
  },
  {
    id: 6,
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["Tradicional", "Com leite"],
    image: "/coffees/latte.png",
    price: 9.9,
    quantity: 0,
  },
  {
    id: 7,
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["Tradicional", "Com leite"],
    image: "/coffees/capuccino.png",
    price: 9.9,
    quantity: 0,
  },
  {
    id: 8,
    name: "Macchiato",
    description:"Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["Tradicional", "Com leite"],
    image: "/coffees/macchiato.png",
    price: 9.9,
    quantity: 0,
  },
  {
    id: 9,
    name: "Mochaccino",
    description: "Café expresso com calda de chocolate, leite e espuma cremosa",
    tags: ["Tradicional", "Com leite"],
    image: "/coffees/mochaccino.png",
    price: 9.9,
    quantity: 0,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["Especial", "Com leite"],
    image: "/coffees/chocolate-quente.png",
    price: 9.9,
    quantity: 0, 
  },
  {
    id: 11,
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["Especial", "Alcoólico", "Gelado"],
    image: "/coffees/cubano.png",
    price: 9.9,
    quantity: 0,
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["Especial"],
    image: "/coffees/havaiano.png",
    price: 9.9,
    quantity: 0,
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["Especial"],
    image: "/coffees/arabe.png",
    price: 9.9,
    quantity: 0,
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["Especial", "Alcoólico"],
    image: "/coffees/irlandes.png",
    price: 9.9,
    quantity: 0,
  }
]

export function Home() {
  return (
    <HomeContainer>
      <Description />
      <CoffeesList coffees={coffees} />
    </HomeContainer>
  )
}