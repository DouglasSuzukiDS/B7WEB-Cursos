export const getPublicURL = (url: string) => {
   return `${ process.env.baseURL}/${ url }`;
}