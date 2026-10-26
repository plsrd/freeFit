const LEGS = ['Quads', 'Calves', 'Hamstrings', 'Glutes']
const TORSO = ['Chest', 'Shoulders']
const ARMS = ['Biceps', 'Triceps', 'Forearms']

/**
 * Maps an equipment or target name to the file name of its icon in `static/`.
 * Several targets share one icon (e.g. all leg muscles use `legs.png`).
 * @param name - Equipment name, target name, or a raw icon key like 'builder'
 * @returns The icon's file name without the extension
 */
export const getTileIcon = (name: string): string => {
  const iconKey = (() => {
    if (LEGS.includes(name)) return 'legs'
    if (ARMS.includes(name)) return 'target'
    if (TORSO.includes(name)) return 'torso'
    if (name === 'Trap Bar') return 'barbell'
    if (name === 'Full Body') return 'body'
    return name
  })()

  return iconKey.toLowerCase().split(' ')[0] ?? ''
}
