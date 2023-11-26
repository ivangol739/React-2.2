export default function iconSwitch({ icon, onSwitch }) {
  return (
    <div className="material-icons">
      <a href="#0" className="switcher" onClick={() => onSwitch(icon)}>{icon}</a>
    </div>
  )
}