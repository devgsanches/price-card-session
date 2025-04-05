import classNames from 'classnames'
import { CARD_VARIATION } from './enumCard'

type cardProps = {
  type: string
  price: string
  benefits: string[]
  variation?: CARD_VARIATION
}

export const Card = ({
  type,
  price,
  benefits,
  variation = CARD_VARIATION.DEFAULT,
}: cardProps) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-center bg-(--color-bg) px-4 relative',
        {
          'h-[35rem] shadow-(--bg-shadow)':
            variation === CARD_VARIATION.DEFAULT,
          'bg-(--color-main) absolute bottom-7 rounded-2xl h-[38rem]':
            variation === CARD_VARIATION.SPECIAL,
          'rounded-tl-2xl rounded-bl-2xl ': type === 'Básico',
          'rounded-tr-2xl rounded-br-2xl ': type === 'Premium',
        }
      )}
    >
      <p
        className={classNames(
          'text-(--color-main) text-xl pt-[1.6rem] font-medium',
          {
            'text-(--text-special)': variation === CARD_VARIATION.SPECIAL,
          }
        )}
      >
        {type}
      </p>
      <div
        className={classNames(
          'flex flex-row mt-6 gap-1 text-(--color-price) font-bold',
          {
            'text-(--text-special)': variation === CARD_VARIATION.SPECIAL,
          }
        )}
      >
        <span className="text-2xl flex mt-9">R$</span>
        <p className="text-[3.5rem]">{price}</p>
      </div>
      <div
        className={classNames(
          'flex flex-col justify-center items-center mt-6 gap-4 ',
          {
            'mb-1': variation === CARD_VARIATION.DEFAULT,
            'text-(--text-special) mb-1': variation === CARD_VARIATION.SPECIAL,
          }
        )}
      >
        {benefits?.map(benefit => (
          <>
            <span className="text-base w-[18rem] text-center font-medium">
              {benefit}
            </span>
            <hr className="w-3xs border-1 border-[#DDDDDD]" />
          </>
        ))}
      </div>

      <div
        className={classNames('flex  h-full', {
          'items-end': variation === CARD_VARIATION.DEFAULT,
          'items-center': variation === CARD_VARIATION.SPECIAL,
        })}
      >
        <button
          className={classNames(
            'bg-(--color-main) w-[16.5rem] py-3 mb-7 font-bold rounded cursor-pointer',
            {
              'text-white': variation === CARD_VARIATION.DEFAULT,
              'text-[#6394fd] bg-[#fff]': variation === CARD_VARIATION.SPECIAL,
            }
          )}
        >
          Saiba mais
        </button>
      </div>
    </div>
  )
}
