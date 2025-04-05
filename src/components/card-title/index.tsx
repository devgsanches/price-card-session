import Icon from '../../assets/icon.svg'

export const CardTitle = () => {
  return (
    <div className="title-container flex items-center gap-2 mb-15">
      <p className="text-5xl text-white font-[Roboto] font-light">
        Nossos Planos
      </p>
      <img src={Icon} alt="Icon" />
    </div>
  )
}
