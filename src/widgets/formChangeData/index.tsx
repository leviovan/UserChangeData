import { Button, PortalProps } from '@mui/material'
import { Input } from '../../shared/ui/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserData } from '../../entities/formChangeData/type'

import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { schemaForm } from '../../shared/utilities/validation'
import { AppDispatch, RootState } from '../../store'
import { sendEmail, updateFormData } from '../../store/formUserDataSlice'
import { useState } from 'react'
import EnterEmailModal from '../../entities/modals/enterEmail'

export let FormChangeData = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [openModal, setOpenModal] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schemaForm),
  })

  const onSubmit: SubmitHandler<UserData> = (data) => {
    dispatch(updateFormData(data))
    setOpenModal(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full p-8  ">
      <div className=" flex flex-col py-4 gap-2 border-b-2">
        <h2 className="text-[30px] font-semibold">
          Change your private information
        </h2>
        <p>
          Please read our{' '}
          <a className="text-blue-700" href="www.google.com">
            terms of use
          </a>{' '}
          to be informed how we manage your private data.
        </p>
      </div>
      <div className=" flex flex-col pt-5 gap-7">
        <div className="flex gap-5 ">
          <Input
            error={errors['firstName']}
            label="First Name"
            className="w-full"
            required={true}
            register={register('firstName')}
          />
          <Input
            error={errors['email']}
            label="Email"
            className="w-full"
            required={true}
            register={register('email')}
          />
        </div>
        <Input textarea label="Bio" register={register('bio')} />
        <div className="flex flex-wrap gap-5  border-t-2">
          <div className=" flex w-full py-5 gap-5">
            <Input
              error={errors['country']}
              label="Country"
              className="w-full"
              required={true}
              register={register('country')}
            />
            <Input
              error={errors['city']}
              label="City"
              className="w-full"
              required={true}
              register={register('city')}
            />
          </div>
          <Input
            error={errors['address']}
            label="Enter your address "
            className="w-full"
            required={true}
            register={register('address')}
          />

          <div className="flex justify-between w-full mt-9">
            <p>
              You may also consider to update your{' '}
              <a className="text-blue-700" href="www.google.com">
                billing information.
              </a>
            </p>{' '}
            <Button type="submit" variant="contained">
              Save
            </Button>
          </div>
        </div>
      </div>
      <EnterEmailModal
        onSubmit={(email: string) => dispatch(sendEmail(email))}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </form>
  )
}
