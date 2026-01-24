export class AppError extends Error { // Transforma o erro da aplicação em um erro JS nativo
   constructor(
      public message: string,
      public statusCode: number = 400
   ) {
      super(message)
      this.name = "AppError"
      Object.setPrototypeOf(this, AppError.prototype)
   }
}