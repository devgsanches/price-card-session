import { CardTitle } from '../card-title'
import { Cards } from '../cards'

export const CardContainer = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <CardTitle />
      <Cards />
    </main>
  )
}
