import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

/**
 *  Returns the child element wrapped with react-bootstrap Tooltip overlay along with the tooltip's trigger
 * @property {string} placement - The tooltip's placement realtive to the trigger element. One Of 'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start'.
 * @property {string} tooltip - The message to be displayed as a tooltip.
 * @property {element} children - The component on which the tooltip overlay should be triggered.
 * @property {element} tooltipComponent - An HTML element to be rendered as the tooltip content instead of string message.
 * @property {object} tooltipProps - Additional props to pass to the react-bootstrap Tooltip component (https://react-bootstrap.github.io/components/overlays/#tooltip-props).
 * @property {object} overlayProps - Additional props to pass to the react-bootstrap OverlayTrigger component (https://react-bootstrap.github.io/components/overlays/#overlay-trigger-props)
 */
const TooltipWrapper = ({
  placement = 'auto',
  tooltip,
  children,
  tooltipProps,
  tooltipComponent: Component,
  overlayProps
}) => {

  return <OverlayTrigger
    placement={placement}
    overlay={
      <Tooltip id={`tooltip-${placement}`} {...tooltipProps}>
        {tooltip || Component}
      </Tooltip>
    }
    {...overlayProps}
  >
    {children}
  </OverlayTrigger>
}

export default TooltipWrapper