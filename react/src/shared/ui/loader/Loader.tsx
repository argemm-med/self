import stl from './Loader.module.scss'

export const Loader = () => {
  return (
    <div
      className={ stl.loader__wrap }
      role="alertdialog"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading…"
    >
      <div className={ stl.loader } aria-hidden="true">
        <div className={ stl.loader__sq }></div>
        <div className={ stl.loader__sq }></div>
        <div className={ stl.loader__sq }></div>
      </div>
    </div>
  )
}
