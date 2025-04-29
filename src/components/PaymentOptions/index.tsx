import { useState } from 'react';
import { Fieldset, HiddenRadio, OptionLabel, OptionsContainer } from './styles';
import { Bank, CreditCard, Money } from 'phosphor-react';

const PaymentOptions = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <Fieldset>
      <OptionsContainer>
        <OptionLabel isSelected={paymentMethod === 'credit-card'}>
          <HiddenRadio
            type="radio"
            name="payment"
            value="credit-card"
            checked={paymentMethod === 'credit-card'}
            onChange={() => setPaymentMethod('credit-card')}
          />
          <CreditCard size={16} />
          Cartão de Crédito
        </OptionLabel>

        <OptionLabel isSelected={paymentMethod === 'debit-card'}>
          <HiddenRadio
            type="radio"
            name="payment"
            value="debit-card"
            checked={paymentMethod === 'debit-card'}
            onChange={() => setPaymentMethod('debit-card')}
          />
          <Bank size={16} />
          Cartão de Débito
        </OptionLabel>

        <OptionLabel isSelected={paymentMethod === 'cash'}>
          <HiddenRadio
            type="radio"
            name="payment"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={() => setPaymentMethod('cash')}
          />
          <Money size={16} />
          Dinheiro
        </OptionLabel>
      </OptionsContainer>
    </Fieldset>
  );
};

export default PaymentOptions;
