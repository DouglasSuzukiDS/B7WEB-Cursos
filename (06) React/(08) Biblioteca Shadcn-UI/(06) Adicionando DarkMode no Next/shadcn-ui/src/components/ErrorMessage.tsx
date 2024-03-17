import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Props ={
    error: string
}

export const ErrorMessage = ({ error }: Props) => {
    return(
        <Alert variant={'destructive'} className="flex gap-3 items-center">
            <div className="size-4 rounded-full bg-red-600"></div>

            <div>
               <AlertTitle>Error!</AlertTitle>
               <AlertDescription>
                  { error }
               </AlertDescription>
            </div>
        </Alert>
    )
}