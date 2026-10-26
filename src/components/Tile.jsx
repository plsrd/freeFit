import {getTileIcon} from '../utils/getTileIcon'

/**
 * Square icon used as the preview media for documents and structure list items.
 * Icons are served from the Studio's `static/` folder.
 * @param {object} props
 * @param {string} [props.equipment] - Equipment or target name used to pick the icon
 * @param {string} [props.color] - Background color
 * @param {string} [props.background] - Background image URL
 */
export default function Tile({color, background, equipment}) {
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
