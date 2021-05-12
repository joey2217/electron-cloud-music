import React, { memo } from 'react'

// TODO
const User: React.FC = () => {
  return (
    <div className="flex cursor-pointer mx-4 items-center" title="用户">
      <UserIcon />
      <span>
          username
      </span>
    </div>
  )
}

export default memo(User)

const UserIcon = memo(() => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="24"
      cy="12"
      r="8"
      fill="none"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))
