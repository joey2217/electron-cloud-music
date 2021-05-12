import React, { memo, PropsWithChildren, useEffect, useState } from 'react'
import classnames from 'classnames'

import { maximize, minimize, close, toggleMaximize } from '../../utils/ipc'

interface ControlButtonProps {
  hover?: boolean
  onClick?: () => void
}

const ControlButton = memo(
  ({ children, hover, onClick }: PropsWithChildren<ControlButtonProps>) => (
    <div
      className={classnames(
        'cursor-pointer px-4 flex items-center',
        hover ? 'hover:bg-red-400' : 'hover:bg-gray-300'
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
)

const Control: React.FC = () => {
  const [isMax, setIsMax] = useState(false)
  useEffect(() => {
    toggleMaximize(setIsMax)
  }, [])
  return (
    <div className="flex">
      <ControlButton onClick={minimize}>
        <MinimizeIcon />
      </ControlButton>
      <ControlButton onClick={maximize}>
        {isMax ? <MaximizeIcon /> : <UnMaximizeIcon />}
      </ControlButton>
      <ControlButton onClick={close} hover>
        <CloseIcon />
      </ControlButton>
    </div>
  )
}

export default memo(Control)

const CloseIcon = memo(() => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" fill="white" fillOpacity="0.01" />
    <path
      d="M8 8L40 40"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 40L40 8"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))

const UnMaximizeIcon = memo(() => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
  >
    <path d="M812.3 959.4H213.7c-81.6 0-148-66.4-148-148V212.9c0-81.6 66.4-148 148-148h598.5c81.6 0 148 66.4 148 148v598.5C960.3 893 893.9 959.4 812.3 959.4zM213.7 120.9c-50.7 0-92 41.3-92 92v598.5c0 50.7 41.3 92 92 92h598.5c50.7 0 92-41.3 92-92V212.9c0-50.7-41.3-92-92-92H213.7z"></path>
  </svg>
))
const MaximizeIcon = memo(() => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
  >
    <path d="M812.2 65H351.6c-78.3 0-142.5 61.1-147.7 138.1-77 5.1-138.1 69.4-138.1 147.7v460.6c0 81.6 66.4 148 148 148h460.6c78.3 0 142.5-61.1 147.7-138.1 77-5.1 138.1-69.4 138.1-147.7V213c0-81.6-66.4-148-148-148z m-45.8 746.3c0 50.7-41.3 92-92 92H213.8c-50.7 0-92-41.3-92-92V350.7c0-50.7 41.3-92 92-92h460.6c50.7 0 92 41.3 92 92v460.6z m137.8-137.7c0 47.3-35.8 86.3-81.8 91.4V350.7c0-81.6-66.4-148-148-148H260.2c5.1-45.9 44.2-81.8 91.4-81.8h460.6c50.7 0 92 41.3 92 92v460.7z"></path>
  </svg>
))
const MinimizeIcon = memo(() => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" fill="white" fillOpacity="0.01" />
    <path
      d="M10.5 24L38.5 24"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))
