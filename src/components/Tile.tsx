import {getTileIcon} from '../utils/getTileIcon'

interface TileProps {
  /** Equipment or target name used to pick the icon */
  equipment?: string
  /** Background color */
  color?: string
  /** Background image URL */
  background?: string
}

/**
 * Square icon used as the preview media for documents and structure list items.
 * Icons are served from the Studio's `static/` folder.
 */
export default function Tile({color, background, equipment}: TileProps) {
  return (
    <span
      style={{
        alignItems: 'center',
        backgroundColor: color,
        backgroundImage: background ? `url(${background})` : '',
        backgroundSize: 'contain',
        borderRadius: '4px',
        display: 'flex',
        fontWeight: '500',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      {equipment && <img src={`/static/${getTileIcon(equipment)}.png`} alt="" />}
    </span>
  )
}
