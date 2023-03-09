// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CreditCardDetailsContainer,
  CreditCardHeadingContainer,
  CreditCardHeading,
  HorizontalLine,
  CardContainer,
  Card,
  CardNumber,
  CardholderNameText,
  CardholderName,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [data, setData] = useState('')
  const [userData, userSetData] = useState('')
  const cardholderNameInUppercase = userData.toUpperCase()

  const onCardNumber = event => setData(event.target.value)
  const onUserNumber = event => userSetData(event.target.value)

  return (
    <MainContainer>
      <CreditCardDetailsContainer>
        <CreditCardHeadingContainer>
          <CreditCardHeading>CREDIT CARD</CreditCardHeading>
          <HorizontalLine />
        </CreditCardHeadingContainer>
        <CardContainer>
          <Card data-testid="creditCard">
            <CardNumber>{data}</CardNumber>
            <CardholderNameText>CARDHOLDER NAME</CardholderNameText>
            <CardholderName>{cardholderNameInUppercase}</CardholderName>
          </Card>
        </CardContainer>
      </CreditCardDetailsContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={data}
            onChange={onCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={userData}
            onChange={onUserNumber}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </MainContainer>
  )
}

export default CreditCard
