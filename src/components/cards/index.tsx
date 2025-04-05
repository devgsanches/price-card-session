import { Card } from '../card'
import { CARD_VARIATION } from '../card/enumCard'

const cards = [
  {
    id: 1,
    type: 'Básico',
    price: '19,90',
    benefits: [
      'Assista em 2 aparelhos compatíveis por vez',
      'Assista em 1080p (Full HD)',
      'Baixe filmes e séries em 2 aparelhos compatíveis por vez',
    ],
  },
  {
    id: 2,
    type: 'Padrão',
    price: '29,90',
    benefits: [
      'Assista em 3 aparelhos compatíveis por vez',
      'Assista em 1080p (Full HD)',
      'Baixe filmes e séries em 2 aparelhos compatíveis por vez',
      'Opção de adicionar 1 assinante extra que não more com você',
    ],
    variation: CARD_VARIATION.SPECIAL,
  },
  {
    id: 3,
    type: 'Premium',
    price: '35,90',
    benefits: [
      'Assista em 4 aparelhos compatíveis por vez',
      'Assista em 4K (Ultra HD) + HDR',
      'Baixe filmes e séries em 6 aparelhos compatíveis por vez',
      'Opção de adicionar até 2 assinantes extras que não morem com você',
    ],
  },
]

export const Cards = () => {
  return (
    <div className="flex flex-row">
      {cards.map(card => (
        <Card
          key={card.id}
          type={card.type}
          price={card.price}
          benefits={card.benefits}
          variation={card.variation}
        />
      ))}
    </div>
  )
}
