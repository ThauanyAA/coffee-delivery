import { Button } from "../Button";
import { Card } from "../Card";
import { Title } from "../Typography";

export function Cart() {
  return (
    <div>
      <Title variant="xs" weight={700}>
        Cafés selecionados
      </Title>
      <Card>
        <p>Lista de cafés selecionados</p>

        <Button type="button">
          Confirmar pedido
        </Button>
      </Card>
    </div>
  )
}