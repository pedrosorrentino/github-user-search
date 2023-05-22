interface Props {
  message: string
}

const ToastMessage = ({ message }: Props) => {
  return (
    <div className="fade-in m-5 grid place-content-center">
      <p className="max-w-md rounded-md bg-red-500 p-3 text-sm text-white">
        {message}
      </p>
    </div>
  )
}

export default ToastMessage
