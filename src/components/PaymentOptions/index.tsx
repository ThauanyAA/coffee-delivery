import { useContext } from 'react';
import { Fieldset, HiddenRadio, OptionLabel, OptionsContainer } from './styles';
import { Bank, CreditCard, Money } from 'phosphor-react';
import { CartContext } from '../../contexts/CartContext'
import { PaymentMethod as PaymentTypes } from '../../@types/definitions'

const PaymentOptions = () => {
  const { paymentMethod, setPaymentMethod } = useContext(CartContext)

  return (
    <Fieldset>
      <OptionsContainer>
        <OptionLabel isSelected={paymentMethod === PaymentTypes.CREDIT_CARD}>
          <HiddenRadio
            type="radio"
            name="payment"
            value="credit-card"
            checked={paymentMethod === PaymentTypes.CREDIT_CARD}
            onChange={() => setPaymentMethod(PaymentTypes.CREDIT_CARD)}
          />
          <CreditCard size={16} />
          Cartão de Crédito
        </OptionLabel>

        <OptionLabel isSelected={paymentMethod === PaymentTypes.DEBIT_CARD}>
          <HiddenRadio
            type="radio"
            name="payment"
            value="debit-card"
            checked={paymentMethod === PaymentTypes.DEBIT_CARD}
            onChange={() => setPaymentMethod(PaymentTypes.DEBIT_CARD)}
          />
          <Bank size={16} />
          Cartão de Débito
        </OptionLabel>

        <OptionLabel isSelected={paymentMethod === PaymentTypes.CASH}>
          <HiddenRadio
            type="radio"
            name="payment"
            value="cash"
            checked={paymentMethod === PaymentTypes.CASH}
            onChange={() => setPaymentMethod(PaymentTypes.CASH)}
          />
          <Money size={16} />
          Dinheiro
        </OptionLabel>
      </OptionsContainer>
    </Fieldset>
  );
};

export default PaymentOptions;
