'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"


export const LoginForm = () => {
   const formSchema = z.object({
      email: z.string().email('Email não válido'),
      password: z.string().min(2, 'Precisa ter no mínimo 2 caracteres')
   })

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: { email: "", password: '' },
   })

   const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values)
   }

   return (
      <Card className="mt-10">
         <CardHeader>
            <CardTitle>Faça o Login</CardTitle>

            <CardDescription>Digie seus dados de Login</CardDescription>
         </CardHeader>

         <CardContent>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <Input placeholder="Digite seu email" {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="password"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <Input type="password" placeholder="Digite sua senha" {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <Button type="submit">Login</Button>
               </form>
            </Form>
         </CardContent>
      </Card>
   )
}