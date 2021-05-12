import React, { memo } from 'react'
import Control from './Control'
import Setting from './Setting'
import User from './User'

const AppHeader: React.FC = () => {
  return (
    <header className="flex h-8 leading-8 bg-gray-500">
      <div className="flex-1 drag cursor-move">Music</div>
      <User />
      <Setting />
      <Control />
    </header>
  )
}

export default memo(AppHeader)
