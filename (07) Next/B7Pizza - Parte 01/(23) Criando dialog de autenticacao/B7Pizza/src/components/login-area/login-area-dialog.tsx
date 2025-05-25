'use client'

import { useAuth } from "@/stores/auth"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "../ui/button"

type Steps = 'EMAIL' | 'SIGNUP' | 'SIGNIN'

export const LoginAreaDialog = () => {
   const auth = useAuth()

   const [step, setStep] = useState<Steps>('EMAIL')

   return (
      <Dialog
         open={auth.open}
         onOpenChange={open => auth.setOpen(open)}
      >
         <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
               <DialogTitle className="flex items-center gap-2">
                  {step !== 'EMAIL' &&
                     <Button
                        variant="ghost"
                        size='icon'
                        onClick={() => setStep('EMAIL')}>
                        <ArrowLeft></ArrowLeft>
                     </Button>
                  }

                  {step === 'EMAIL' && 'Login / Cadastro'}
                  {step === 'SIGNUP' && 'Cadastro'}
                  {step === 'SIGNIN' && 'Login'}
               </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-4">
               {step === 'EMAIL' &&
                  <div>
                     Email

                     <Button onClick={() => setStep('SIGNIN')}>
                        Ir para login
                     </Button>
                  </div>
               }

               {step === 'SIGNIN' &&
                  <div>Login</div>
               }

               {step === 'SIGNUP' &&
                  <div>Cadastro</div>
               }
            </div>
         </DialogContent>
      </Dialog>
   )
}