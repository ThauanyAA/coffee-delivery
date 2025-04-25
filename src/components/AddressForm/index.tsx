import { Input } from "../Input";

export function AddressForm() {
  return (
    <div>
      <h2>Complete seu pedido</h2>
      <form>
        <div>
          <h3>Endereço de Entrega</h3>
          <div>
            <Input id="cep" placeholder="CEP" />
            <Input type="text" placeholder="Rua" />
            <Input type="text" placeholder="Número" />
            <Input type="text" placeholder="Complemento" optional />
            <Input type="text" placeholder="Bairro" />
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="UF" />
          </div>
        </div>

        <div>
          <h3>Pagamento</h3>
          <div>
            <button type="button">Cartão de Crédito</button>
            <button type="button">Cartão de Débito</button>
            <button type="button">Dinheiro</button>
          </div>
        </div>

        <button type="submit">Confirmar Pedido</button>
      </form>
    </div>
  );
}