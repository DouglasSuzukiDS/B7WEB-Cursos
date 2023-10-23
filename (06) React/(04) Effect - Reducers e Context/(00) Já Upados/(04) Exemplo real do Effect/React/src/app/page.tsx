'use client'

import { VideoPlayer } from "@/components/VideoPlayer"
import { useEffect, useState } from "react"

const Page = () => {
  const [playing, setPlaying] = useState(false)
 
  // 1) Definição da Função que vai roda
  // 2) Definição de quando vai rodar
  // 3) Definição do que fazer quando o componente sumir/unload

  return (
    <div className="">
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl text-blue-400 mb-3">{ playing ? 'Rodando' : 'Pausado' }</p>

        <button className="bg-blue-400 rounded-md p-3 text-black"
          onClick={ () => setPlaying(!playing) }>
          Play / Pause
        </button>
      </div>

      <VideoPlayer 
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={ playing }
      />
    </div>
  )
}

export default Page