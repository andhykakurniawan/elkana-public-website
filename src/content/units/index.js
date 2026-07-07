import { sdUnit } from './sd'
import { smpUnit } from './smp'
import { tkUnit } from './tk'

export const educationUnits = [tkUnit, sdUnit, smpUnit]

export const programs = educationUnits.map(({ level, title, text }) => ({
  level,
  title,
  text,
}))

export const unitsById = educationUnits.reduce((units, unit) => {
  units[unit.id] = unit
  return units
}, {})
