export default function Container({ children }) {
  return (
    <div className='container h-dvh grid sm:mx-auto sm:max-w-2xl'>
      {children}
    </div>
  )
}
