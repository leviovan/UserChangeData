import { TextField } from '@mui/material'

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  required?: boolean
  className?: string
  textarea?: boolean
  register: any
  error?: any
}

export const Input = ({
  register,
  textarea,
  required,
  label,
  className,
  error,
}: IInput) => {
  console.log(error)

  return (
    <div className={className}>
      <label className="flex flex-col gap-4">
        <p>{label}</p>
        <TextField
          rows={textarea ? 5 : 1}
          multiline={textarea}
          className={className}
          required={required}
          label={label}
          error={!!error}
          {...register}
        />
      </label>
      <span className="text-red-600 text-sm mt-1 ">
        {error && error.message}
      </span>
    </div>
  )
}
