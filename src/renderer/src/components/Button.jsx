import PropTypes from 'prop-types'
import { resolveTheme } from './themeUtil'

function Button({ children, onClick, theme = 'green' }) {
  return (
    <button
      onClick={onClick}
      className={`${resolveTheme(theme)} text-white font-bold py-2 px-4 rounded group w-32 select-none`}
    >
      <div className="flex justify-center items-center w-full h-full group-hover:scale-125 tranistion-all duration-300">
        {children}
      </div>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['blue', 'green, red']),
}

export default Button
