'use client'
import React from 'react'

interface VideoProps {
  videosrc: string
}

export default function VideoPlayer({ videosrc }: VideoProps) {
  return (
    <div className="flex items-center justify-center ">
      <video
        width="auto"
        height="auto"
        controls
        preload="auto"
        muted
        className="border-4 border-darkpurple rounded "
      >
        <source src={videosrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
