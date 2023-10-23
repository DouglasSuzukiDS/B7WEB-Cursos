'use client'

import { QuestionItem } from "@/components/QuestionItem"
import { Results } from "@/components/Results"
import { Questions } from "@/data/Questions"
import { useState } from "react"

const Page = () => {
  const [answers, setAnswers] = useState<number[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const title = 'Quizz de Culinária'

  const loadNextQuestion = () => {
    if(Questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer])
    loadNextQuestion()
  }

  const handleRestartButton = () => {
    setAnswers([])
    setCurrentQuestion(0)
    setShowResult(false)
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">
          { title }
        </div>

        <div className="p-5">
          { !showResult &&
            <QuestionItem 
              question={ Questions[currentQuestion] }
              count={ currentQuestion + 1 }
              onAnswer={ handleAnswered }
            />
          }

          { showResult &&
            <Results 
              questions={ Questions } 
              answers={ answers } /> 
          }
        </div>

        <div className="p-5 text-center border-t border-gray-300">
          { !showResult && `
            ${ currentQuestion + 1 } de ${ Questions.length } pergunta${ Questions.length === 1 ? '' : 's' }
          ` }

          { showResult &&
            <button 
              className="px-3 py-2 rounded-md bg-blue-800 text-white"
              onClick={ handleRestartButton }>Reiniciar Quizz</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Page